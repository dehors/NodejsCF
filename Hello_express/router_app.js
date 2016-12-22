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
    
});

router.route("/images")
    .get(function(req,res) {
        
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
        
    })
    .delete(function(req,res) {
        
    });

module.exports = router;