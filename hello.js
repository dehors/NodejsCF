var http = require("http");

var hello = function (request, response) {
	console.log('hello world');
	response.end("Hola mundo");
}

var server = http.createServer(hello);

server.listen(3000);