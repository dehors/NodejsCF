var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var image_schema = new Schema({
  title: {type:String,require:true},
  creator:{type: Schema.Types.ObjectId, ref: "User"}
});

var Image = mongoose.model("Image",image_schema);

module.exports.Image = Image;