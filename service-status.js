// The only service switch: true shows the original site; false shows suspension.
// Change this value, then commit and push to the GitHub Pages publishing branch.
const SERVICE_ACTIVE = true;

if (!SERVICE_ACTIVE) {
  // This script must stay first in <head>, without async, defer or type="module".
  // Write the replacement before the parser reaches any original page content.
  // The template makes the rest of the HTML inert: no original UI, CSS or scripts.
  document.write(`
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Service Suspended</title>
    <style>
      html {
        background: #fff;
        color-scheme: light;
      }
      body {
        box-sizing: border-box;
        min-height: 100vh;
        min-height: 100svh;
        margin: 0;
        padding: 24px;
        display: grid;
        place-items: center;
        background: #fff;
        color: #1f2937;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }
      main {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        text-align: center;
      }
      svg {
        width: 72px;
        height: 72px;
        color: #9ca3af;
      }
      h1 {
        margin: 0;
        font-size: clamp(1.5rem, 4vw, 2rem);
        font-weight: 600;
        line-height: 1.25;
      }
    </style>
    </head>
    <body>
      <main>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="1.5"
          stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M7 18a5 5 0 1 1 .8-9.94A6 6 0 0 1 19.5 10 4 4 0 0 1 19 18H7Z" />
          <path d="m3 3 18 18" />
        </svg>
        <h1>Service Suspended</h1>
      </main>
      <template id="service-suspended-original">
  `);

  // At EOF the parser closes the template; discard its inert original markup.
  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('service-suspended-original').remove();
  }, { once: true });
}
