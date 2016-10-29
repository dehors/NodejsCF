function render(html,vars,params) {
  console.log(vars);
  for (var i = vars.length - 1; i >= 0; i--) {
    var value = vars[i];
    html = html.replace("{"+vars[i]+"}",params[value]);
  }

  return html;
}

module.exports.render = render;