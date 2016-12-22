var express = require("express");
// var bodyParse = require("body-parser");
var cookieSession = require("cookie-session");
var User = require('./model/user.js').User;
var Image = require('./model/image.js').Image;
var router_app = require('./router_app');
var session_middleware = require("./middlewares/session");
var formidable = require('express-formidable');

var methodOverride = require("method-override");

//--
var app = express();

app.use('/static',express.static('public'));

// app.use(bodyParse.json());//para peticiones json
// app.use(bodyParse.urlencoded({extended: true}));
app.use(cookieSession({
  name: "session",
  keys: ["llave-1","llave-2"]
}));

app.use(formidable({keepExtensions: true}));

app.set('view engine', 'jade');
app.set('views', './views');


app.use(methodOverride("_method"));

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
  Image.find({})
    .populate("creator")
    .exec(function(err,imagenes){
      if(err){
        console.log(err);
      }else{
       res.render("index",{imagenes: imagenes}); 
      }
    });
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
  User.findOne({email:req.fields.email,password:req.fields.password},"username email",function (err,user) {
    console.log('success');
    req.session.user_id = user._id;
    res.redirect('/app');
  });
});

app.post("/users",function(req,res){
  var user = new User({email:req.fields.email,password:req.fields.password,password_confirmation: req.fields.password_confirmation,username:req.fields.username});
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

app.use("/app",session_middleware);
app.use("/app",router_app);

app.listen(3000);