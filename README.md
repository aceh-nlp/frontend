# aceh-nlp/frontend

**Interface only.** Static files — `index.html` (public landing page),
`app/index.html` + `app.js` (the tool), `strings.js` (all text in Acehnese,
Indonesian and English), `style.css` — no build step, no server code, no
stored data. Everything goes through the
same-origin `/api/*` of
[aceh-nlp/backend](https://github.com/aceh-nlp/backend); datasets live
in [aceh-nlp/dataset](https://github.com/aceh-nlp/dataset) and the model
behind "Try the model" in [aceh-nlp/gpu](https://github.com/aceh-nlp/gpu).

What it does:
- **Landing page** (`/`): why the project exists, how the three data layers
  work, the people behind it, how to join. Public and indexable.
- **Tool page** (`/app/`): two tabs. *Review* needs sign-in; *Try the model*
  is open to anyone (the backend rate-limits it) and shows an offline notice
  when no GPU server is configured.
- **Languages**: a switch for Acehnese / Indonesian / English, remembered in
  the browser. The Acehnese strings in `strings.js` are an AI draft awaiting
  native-speaker correction (source sheet:
  [docs/site_strings_ace_draft.md](docs/site_strings_ace_draft.md)); the site
  shows a notice when Acehnese is selected.
- **Sign-in** (email + name + dialect; a Google Sign-In button appears
  automatically when the backend reports a configured Google client id) — every
  rating is recorded under the evaluator's identity.
- **Review**: pick a dataset and review each item. Specialists give a 1–5 score,
  optionally with a correction and annotation. Everyone else gives +1 or -1. The
  backend decides the tier. Auto-advances and auto-saves on each review.
- **Upload**: a coordinator uploads a JSON/JSONL file of pairs for speakers to review.
- **Export**: a coordinator downloads collected ratings with the admin token.

## Deploy

Hosted on Cloudflare Pages (project `aceh-nlp`), connected to this repo: every
push to `main` deploys; other branches get preview URLs. No build step.

- `functions/api/[[path]].js` forwards `/api/*` to the backend on the server
  (default origin set in the file; override with the `API_ORIGIN` variable in
  the Pages project settings), so pages keep calling same-origin `/api`.
- `_headers` carries the security headers and `noindex` for `/app/*`;
  `_redirects` sends `www` to the apex.

Local check: `npx wrangler pages dev .`
