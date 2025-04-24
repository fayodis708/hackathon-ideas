const http = require('http');

http.createServer((req, res) => {
  if (req.url === '/index') {
    const content = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>My First Web App</title>
        </head>
        <body>
          <h1>Hello, World!</h1>
          <a href="/">Go Back Home</a>
        </body>
      </html>
    `;
    res.writeHead(200, { 'Content-Length': content.length });
    res.end(content);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('Page not found');
  }
}).listen(8080);
