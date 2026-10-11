# CMS OAuth Proxy

Lets the Decap CMS admin panel (`/admin`) log editors in with their GitHub
account. GitHub Pages can't run this itself (no server), so it runs as a
free Cloudflare Worker instead.

## Deploy (dashboard, no CLI needed)

1. Sign up at https://dash.cloudflare.com/sign-up (free, no credit card).
2. In the dashboard: **Workers & Pages** → **Create** → **Create Worker**.
   Give it a name (e.g. `breacil-cms-auth`) and deploy the default template.
3. Click **Edit code**, replace everything with the contents of `worker.js`
   in this folder, and click **Deploy**.
4. Note the Worker's URL, e.g. `https://breacil-cms-auth.<account>.workers.dev`.
5. Create a GitHub OAuth App at https://github.com/settings/applications/new:
   - Homepage URL: `https://breacil.com`
   - Authorization callback URL: `<worker-url>/callback`
6. Back in the Worker: **Settings** → **Variables and Secrets** → add two
   **encrypted** variables: `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET`
   (from the OAuth App you just created).
7. Update `public/admin/config.yml` in this repo: set `backend.base_url` to
   the Worker URL from step 4. Commit and push.
