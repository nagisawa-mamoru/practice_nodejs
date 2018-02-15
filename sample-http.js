const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer();

// リクエストを受けたらHelloWorld!!を返す
server.on('request', function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
    res.write('HelloWorld!!');
    res.end();
});

// httpサーバ起動
server.listen(port, hostname, function() {
    console.log(`Server runnning at http://${hostname}:${port}/`);
});