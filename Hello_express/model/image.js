var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var image_schema = new Schema({
  title: {type:String,required:true},
  creator:{type: Schema.Types.ObjectId, ref: "User"},
  extension:{type:String, required:true}
});

var Image = mongoose.model("Image",image_schema);

module.exports.Image = Image;