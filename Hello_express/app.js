var express = require("express");

var app = express();

app.set('view engine', 'jade');
app.set('views', './views');

app.get("/",function(req,res){
  res.render("index",{title: 'My first page with express',message:'Hello world'});
});

app.listen(3000);