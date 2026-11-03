/* Cloudflare Worker: static site plus a same-origin /api proxy to the backend
   on the server, so app.js keeps calling /api and nothing else changes. */
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname.startsWith("www.")) {
      url.hostname = url.hostname.slice(4);
      return Response.redirect(url.toString(), 301);
    }
    if (!url.pathname.startsWith("/api/")) return env.ASSETS.fetch(request);

    const origin = (env.API_ORIGIN || "").replace(/\/$/, "");
    const headers = new Headers(request.headers);
    headers.delete("host");
    // Ask the server for an uncompressed body; Cloudflare compresses to the client itself.
    headers.delete("accept-encoding");
    // The backend's per-visitor limits read this. Caddy replaces X-Forwarded-For with its
    // peer, which here is Cloudflare, so that header would not name the visitor.
    const ip = request.headers.get("CF-Connecting-IP");
    if (ip) headers.set("X-Aceh-Client-IP", ip);

    const init = { method: request.method, headers, redirect: "manual" };
    if (request.method !== "GET" && request.method !== "HEAD") init.body = request.body;
    try {
      const upstream = await fetch(origin + url.pathname + url.search, init);
      const out = new Headers(upstream.headers);
      out.delete("content-encoding");
      out.delete("content-length");
      return new Response(upstream.body, { status: upstream.status, headers: out });
    } catch (err) {
      return new Response(JSON.stringify({ error: `API unreachable: ${err.message}` }),
        { status: 502, headers: { "Content-Type": "application/json; charset=utf-8" } });
    }
  },
};
