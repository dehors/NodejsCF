var express = require("express");
var bodyParse = require("body-parser");

var User = require('./model/user.js').User;

//--
var app = express();

app.use('/static',express.static('public'));

app.use(bodyParse.json());//para peticiones json
app.use(bodyParse.urlencoded({extended: true}));

app.set('view engine', 'jade');
app.set('views', './views');

// app.get("/",function(req,res){
//   res.render("index",{title: 'My first page with express',message:'Hello world'});
// });

// app.get("/:var",function(req,res){
//   res.render("form",{name:req.params.var});
// });

// app.post("/",function(req,res) {
//   res.render("form");
// });

app.get("/",function(req,res){
  res.render("index");
});

app.get("/login",function(req,res){
User.find(function(err,doc){
  console.log(doc);
});
  res.render("Partial/login");
});

app.post("/users",function(req,res){
  var user = new User({email:req.body.email,password:req.body.password});
  user.save(function(){
    res.send('Usuario creado');
  });
});

app.listen(3000);