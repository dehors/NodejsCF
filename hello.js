var http = require("http");

var hello = function (request, response) {
	console.log('hello world');
	response.end("hello world");
}

var server = http.createServer(hello);

server.listen(3000);