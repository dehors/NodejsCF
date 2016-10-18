var http = require('http'),
fs   = require('fs');

var html = fs.readFile('./index.html', function(err,html){
  http.createServer(function(req, res) {
    var html_string = html.toString();
    var vars = html_string.match(/[^\{\}]+(?=\})/g);
    var name = "luis";
    for (var i = vars.length - 1; i >= 0; i--) {
      var value = eval(vars[i]);
      html_string = html_string.replace("{"+vars[i]+"}",value);
    }
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(html_string);
    res.end();
  }).listen(3000);
});
