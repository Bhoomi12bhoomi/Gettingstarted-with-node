

const { createServer, request } = require('http');
const server = createServer((req,res) =>
{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Welcome To Node JS </h1>');
    return res.end();
});

server.listen(8080);