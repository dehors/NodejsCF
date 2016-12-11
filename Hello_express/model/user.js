var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/SocialPicture');

var user_schema = new Schema({
  name: String,
  username: {type:String,required:true,maxlength:[50,"The username must 50"]},
  password: {
    type:String,
    minlength:[8,"The email must 0"],
    validate:{
      validator: function(p) {
        return this.password_confirmation == p;
      },
      message: "Las contraseñas no son iguales"
    }
  },
  age: {type: Number,min:[5,"The age min 5"],max:[50,"The age must 50"]},
  email: {type: String,required: "The Email is required",match:[/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"message"]},
  date_of_birth: Date,
  gender: {type: String,enum:{values:['M','F'],message:"message"}}
});

user_schema.virtual("password_confirmation").get(function(){
  return this.p_c;
}).set(function(password){
  this.p_c = password;
})

var User = mongoose.model("User",user_schema)

module.exports.User = User;
/*
    String
    Number
    Date
    Buffer
    Boolean
    Mixed
    Objectid
    Array
 */