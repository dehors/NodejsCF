var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var user_schema = new Schema({
  name: String,
  username: String,
  password: String,
  age: String,
  email: String,
  date_of_birth: Date
});

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