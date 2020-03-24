var db = require("../models");

module.exports = function(app) {
    //Route for getting all posts
    app.get("/api/posts", function(req, res){
        var query = {};
        if (req.query.author_id) {
            query.UserId = req.query.author_id;
        }
        db.Post.findall({
            where: query, 
            include: [db.User]
        }).then(function(dbPost){
            res.json(dbPost);
        });
    });
    
    //Post route for saving a new post
    app.post("/api/posts", function(req, res){
        db.Post.create(req.body).then(function(dbPost){
            res.json(dbPost);
        });
    });
    //DESTROY THE POST
    app.delete("/api/posts/:id", function(req, res){
        db.Post.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbPost){
            res.json(dbPost);
        });
    });


    //Put route to update 
    app.put("/api/posts", function(req, res){
       db.Post.update(
           req.body,
           {
               where: {
               id: req.body.id
               }
           }).then(function(dbPost){
               res.json(dbPost);
           });    
    });
}; 