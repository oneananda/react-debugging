const http = require('http');
const port = 5000;

const server = http.createServer((req, res) => {
  res.end('Hello, world!');
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Server is listening on http://127.0.0.1:${port}`);
});

server.on('error', (err) => {
  console.error('Server error:', err);
});
