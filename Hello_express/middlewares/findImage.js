var Image = require('../model/image.js').Image;

module.exports = function(req,res,next) {
  Image.findById(req.params.id)
    .populate("creator")
    .exec(function(err, imagen){
        if(!err){
            res.locals.imagen = imagen;
            next();
        }else{
            res.redirect("/app");
        }
    });
};