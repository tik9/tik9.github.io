const http = require('http');

const hostname = '127.0.0.1';
// hostname='localhost'

const port = 3001;

const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
res.write(`port ${port}\n`)
  res.end('Hel World');
}).listen(port,() => {
  console.log(`Server running at http://localhost:${port}/`);
});