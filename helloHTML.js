var http = require('http'),
    fs   = require('fs');

// var html = fs.readFileSync('./index.html');
var html = fs.readFile('./index.html', function(err,html){
    http.createServer(function(req, res) {
        // res.writeHead(200,{"Content-Type":"text/html"});
        res.writeHead(200,{"Content-Type":"application/json"});
        res.write(JSON.stringify({name:"luis",username:"slam24"}));
        res.end();
    }).listen(3000);
});
