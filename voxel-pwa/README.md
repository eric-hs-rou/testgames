# Mini Voxel Sandbox (PWA)

A tiny Minecraft‑like voxel toy that installs on iPhone via **Add to Home Screen**.

## How to run (quickest)
1) Put these files on any static host (GitHub Pages, Netlify, Vercel) over HTTPS.
2) Open the site in Safari on iPhone.
3) Share → **Add to Home Screen**. Launch from the icon.

## Local dev (with HTTPS not required on localhost)
- Use a simple server (Python 3):
  ```bash
  python -m http.server 5173
  ```
- Visit http://localhost:5173

## Controls
- Click to lock mouse • WASD move • SPACE up • CTRL down • Mouse to look
- Left-click: remove block • Right-click: place block
- Keys 1–5: select block type

## Notes
- Service worker caches local assets for offline. CDN module (three.js) uses network‑first; it will be cached after first load.
- To update, bump the `CACHE` name in `service-worker.js`.
