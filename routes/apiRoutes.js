var db = require("../models");
const bcrypt = require("bcrypt");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
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

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
