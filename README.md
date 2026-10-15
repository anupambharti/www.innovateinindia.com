# Website service switch

This repository is a static WordPress export served directly by GitHub Pages.
There is no build step. The home page is `index.html`; other public HTML pages
live in their existing folders.

Change **line 3 of `service-status.js`**:

```javascript
const SERVICE_ACTIVE = true;
```

- `true`: the original website, with its existing markup, styles and scripts.
- `false`: only the centered cloud-off icon and **Service Suspended** heading.

All 13 existing HTML pages load this same file as the first script in `<head>`.
Keep it synchronous: do not add `async`, `defer` or `type="module"`. When
suspended, it writes the minimal page immediately and puts the remaining
original markup inside an inert `<template>`, then removes that template after
parsing. This prevents original content from flashing or running its scripts.
New HTML pages must include the same script first in `<head>`, using the correct
relative path to the repository root.

## Test locally

From this repository, run:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Open `http://127.0.0.1:8765/`. With the switch set to `true`, check the existing
navigation and content. Change it to `false`, reload, and check that only the
icon and heading appear and the tab title is **Service Suspended**. Open a nested
page such as `/contact/` directly, refresh, and try mobile and desktop widths.
Use a hard refresh or disable the browser cache if an old script is cached.
Restore `true` when you want the original site back. Stop the server with Ctrl+C.

## Publish

For the initial installation, commit and push `service-status.js`, `README.md`
and all 13 modified HTML files to the branch/folder GitHub Pages publishes.
For later state changes, only `service-status.js` needs to be committed and
pushed. Wait for the Pages deployment to finish, then refresh the live page.

This is a JavaScript display switch, not access control: JavaScript must be
enabled, and original source, images, feeds and JSON remain publicly accessible.
