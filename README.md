# StableMind website

This is a Vite + React + Tailwind build of the StableMind landing page, prepared for GitHub Pages and the custom domain `stablemind.io`.

## Quick start

```bash
npm install
npm run dev
```

## Build locally

```bash
npm run build
npm run preview
```

## Deploy with GitHub Pages

1. Create a GitHub repo, for example `stablemind-site` or `stablemind.io`.
2. Push all files in this folder to the repo.
3. In GitHub, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
4. Push to `main`. The included workflow will build and deploy the site automatically.
5. Point your DNS for `stablemind.io` to GitHub Pages.
6. Keep the `public/CNAME` file in the repo so the custom domain stays attached.

## Notes

- `vite.config.js` is set to `base: "/"`, which is correct for a custom domain like `stablemind.io`.
- If you later use a GitHub project URL instead of a custom domain, update `base` to match the repo name.
- This package includes lightweight UI helper components in `src/components/ui` so it runs as a standalone repo.
