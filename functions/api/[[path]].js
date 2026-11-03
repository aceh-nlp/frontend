/* Cloudflare Pages Function: forwards /api/* to the backend on the server,
   so the pages keep calling same-origin /api and nothing else changes.
   API_ORIGIN can be overridden in the Pages project settings. */
export async function onRequest({ request, env, params }) {
  const origin = (env.API_ORIGIN || "https://aceh-evaluator.157-245-144-73.sslip.io").replace(/\/$/, "");
  const url = new URL(request.url);
  const path = Array.isArray(params.path) ? params.path.join("/") : (params.path || "");
  const target = origin + "/api/" + path + url.search;

  const headers = new Headers(request.headers);
  headers.delete("host");
  // Ask the server for an uncompressed body; Cloudflare compresses to the client itself.
  headers.delete("accept-encoding");
  // The backend's per-IP limit reads the first X-Forwarded-For value.
  const ip = request.headers.get("CF-Connecting-IP");
  if (ip) headers.set("X-Forwarded-For", ip);

  const init = { method: request.method, headers, redirect: "manual" };
  if (request.method !== "GET" && request.method !== "HEAD") init.body = request.body;

  try {
    const upstream = await fetch(target, init);
    const out = new Headers(upstream.headers);
    out.delete("content-encoding");
    out.delete("content-length");
    return new Response(upstream.body, { status: upstream.status, headers: out });
  } catch (err) {
    return new Response(JSON.stringify({ error: `API unreachable: ${err.message}` }),
      { status: 502, headers: { "Content-Type": "application/json; charset=utf-8" } });
  }
}
