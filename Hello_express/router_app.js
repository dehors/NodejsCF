var express = require("express");

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

router.route("images")
    .get(function(req,res) {
        
    })
    .post(function(req,res) {
        
    });

router.route("images/:id")
    .get(function(req,res) {
        
    })
    .put(function(req,res) {
        
    })
    .delete(function(req,res) {
        
    });

module.exports = router;