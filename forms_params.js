var http = require('http'),
fs   = require('fs');
parse = require('./params_parse.js');
render = require('./render.js');

var p = parse.parse;
var r = render.render;

var html = fs.readFile('./index.html', function(err,html){
  http.createServer(function(req, res) {
    if (req.url.indexOf("favicon.ico")>0) {
      return;
    }

    var html_string = html.toString();
    var vars = html_string.match(/[^\{\}]+(?=\})/g);
    var name = "";
    var params = p(req);

    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(r(html_string,vars,params));
    res.end();
  }).listen(3000);
});
