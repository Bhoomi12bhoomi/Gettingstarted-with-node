
//initialising a server
const { createServer, request } = require('http');
const server = createServer((req,res) =>
{
    //describing the type of file
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Welcome To Node JS </h1>');
    return res.end();
});
// the port server works
server.listen(8080);
