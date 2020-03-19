var db = require("../models");

module.exports = function(app) {

  //find all posts by a user
 app.get("/api/users", function(req, res){
   db.User.findAll({
     include: [db.Post]
   }).then(function(dbUser){
     res.json(dbUser);
   });
 });

 //create User
 app.post("/api/users", function(req, res){
   db.User.create(req.body).then(function(dbUser){
     res.json(dbUser);
   });
 });

 //Delete User
 app.delete("/api/users/:id", function(req, res){
   db.User.destroy({
     where: {
       id: req.params.id
     }
   }).then(function(dbUser){
     res.json(dbUser);
   });
 });
};
