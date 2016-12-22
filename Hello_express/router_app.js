var express = require("express");
var Image = require('./model/image.js').Image;
var router = express.Router();

router.get("/", function(req,res) {
    res.render("app/home");
});


/* REST */

router.get("/images/new", function(req,res) {
    res.render("app/images/new");
});

router.get("/images/:id/edit", function(req,res) {
    Image.findById(req.params.id, function(err, imagen){
        res.render("app/images/edit",{imagen:imagen});
    });
});

router.route("/images")
    .get(function(req,res) {
        Image.find({},function(err,imagenes){
            if(err){ res.redirect("/app"); return; }
            res.render("app/images/index",{imagenes: imagenes});
        });
    })
    .post(function(req,res) {
        var data = {
            title: req.body.title
        }
        var image = new Image(data);
        image.save(function(err,doc,num){
            if(err){
                console.log(String(err));
                res.send('Errorer');
            }else{
                res.redirect('/app/images/'+image._id);
            }
        });
    });

router.route("/images/:id")
    .get(function(req,res) {
        Image.findById(req.params.id, function(err, imagen){
           res.render("app/images/show",{imagen:imagen}); 
        });
    })
    .put(function(req,res) {
        Image.findById(req.params.id, function(err, imagen){
           imagen.title = req.body.title;
           imagen.save(function(err){
               if(!err){
                   res.render("app/images/show",{imagen:imagen});
               }else{
                   res.render("app/images/"+imagen._id+"/edit");
               }
           });         
        });
    })
    .delete(function(req,res) {
        Image.findOneAndRemove({_id: req.params.id}, function(err){
            if(!err){
                res.redirect("/app/images");
            }else{
                res.redirect("/app/images/"+req.params.id);
            }
        });
    });

module.exports = router;