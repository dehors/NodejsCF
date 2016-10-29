function parse(req) {
  var array_params = [], params = {};
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
  return params;
}

module.exports.parse = parse;