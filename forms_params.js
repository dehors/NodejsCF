var http = require('http'),
fs   = require('fs');

var html = fs.readFile('./index.html', function(err,html){
  http.createServer(function(req, res) {
    if (req.url.indexOf("favicon.ico")>0) {
      return;
    }

    var html_string = html.toString();
    var array_params = [], params = {};
    var vars = html_string.match(/[^\{\}]+(?=\})/g);
    var name = "";
    if (req.url.indexOf("?")>0) {
      var url_data = req.url.split("?");
      var array_params = url_data[1].split("&");
      // [name=luis,data=algo]
      // console.log(array_params);
    }
    for (var i = array_params.length - 1; i >= 0; i--) {
      var param = array_params[i];
      // console.log(param);
      //name=luis
      var param_data = param.split("=");
      // console.log(param_data);
      //name,luis
      params[param_data[0]] = param_data[1];
      // console.log(param_data[0]);
      //{name:luis}
    }
    console.log(vars);
    for (var i = vars.length - 1; i >= 0; i--) {
      var value = vars[i];
      html_string = html_string.replace("{"+vars[i]+"}",params[value]);
    }
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(html_string);
    res.end();
  }).listen(3000);
});
