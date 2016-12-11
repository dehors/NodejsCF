var express = require("express");
var bodyParse = require("body-parser");
var session = require("express-session");
var User = require('./model/user.js').User;

//--
var app = express();

app.use('/static',express.static('public'));

app.use(bodyParse.json());//para peticiones json
app.use(bodyParse.urlencoded({extended: true}));
app.use(session({
  secret: 'asdfjklñ',
  resave: false,
  saveUninitialized: false
}));

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
  console.log(req.session.user_id);
  res.render("index");
});

app.get("/singup",function(req,res){
User.find(function(err,doc){
  console.log(doc);
});
  res.render("singup");
});

app.get("/login",function(req,res){
  res.render("login");
});


app.post("/session",function(req,res){
  User.findOne({email:req.body.email,password:req.body.password},"username email",function (err,user) {
    console.log('success');
    req.session.user_id = user._id;
    res.send('success');
  });
});

app.post("/users",function(req,res){
  var user = new User({email:req.body.email,password:req.body.password,password_confirmation: req.body.password_confirmation,username:req.body.username});
  user.save(function(err,doc,num){
    if(err){
      console.log(String(err));
      res.send('Errorer');
    }else{
      res.send('Usuario creado'); 
    }
  });
  // user.save().then(function (user) {
  //   res.send('Usuario creado'); 
  // },function (err) {
  //   console.log(String(err));
  //   res.send('Errorer');
  // });
});

app.listen(3000);