var db = require("../models");
const bcrypt = require("bcrypt");
const passport = require("passport");

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


  // register new user
  app.post('/register', async (req,res) =>{
    try{
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      let newUser = {
        name: req.body.userName,
        password: hashedPassword,
        email: req.body.email

      };
      // push newUser to DB
       db.user.create({
        name: newUser.name,
        password: newUser.hashedPassword,
        email: newUser.email
       });
      // display message for successful register
      //redirect to login page after 5 seconds
      setInterval(() => res.redirect('/login'), 5000);

    }catch{
      // display message for register error
      // redirect to register page on message dismiss
    }
  })

  passport.use(new LocalStrategy(
    function(email, password, done) {
      User.findOne({ email: email }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
      });
    }
  ));  

  app.post('/login', passport.authenticate('local', {failureRedirect: '/login'}), (req, res) =>{
    res.redirect('/');
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
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



}); 