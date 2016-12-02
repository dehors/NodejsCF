var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/SocialPicture');

var user_schema = new Schema({
  name: String,
  username: String,
  password: String,
  age: String,
  email: String,
  date_of_birth: Date
});

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