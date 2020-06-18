const Layout = ({ html, preloadedState }) => `
  <!DOCTYPE html>
  <html lang="en">

    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="Description" content="This site provides feeds from HackerNews ">
      <meta name="theme-color" content="#db5945">
      <base href="/" />
      <link rel="manifest" href="/manifest.json">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css">
      <title>Hackernews Feed</title>
    </head>

    <body>
      <div id="app">${html}</div>
      <noscript>Your browser does not support Javascript</noscript>
      <link rel="icon" sizes="192x192" href="/static/img/icons-192.png">
      <link rel="icon" sizes="512x512" href="/static/img/icons-512.png">
      <link rel="apple-touch-icon" href="/static/img/icons-192.png">
      <script> var exports = {}; </script>
      <script>
        // WARNING: See the following for security issues around embedding JSON in HTML:
        // https://redux.js.org/recipes/server-rendering/#security-considerations
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
      </script>
      <script src="client.js"></script>
    </body>

  </html>
`;


export default Layout;
