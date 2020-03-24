<<<<<<< HEAD
var db = require("../models");

// module.exports = function(app) {
//   // Load index page
//   app.get("/", function(req, res) {
//     db.Example.findAll({}).then(function(dbExamples) {
//       res.render("index", {
//         msg: "Welcome!",
//         examples: dbExamples
//       });
//     });
//   });

//   // Load example page and pass in an example by id
//   app.get("/example/:id", function(req, res) {
//     db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.render("example", {
//         example: dbExample
//       });
//     });
//   });

//   // Render 404 page for any unmatched routes
//   app.get("*", function(req, res) {
//     res.render("404");
//   });
// };

module.exports = function(app){
  // index route
  app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

  app.get('/html', (req,res) =>{
    res.sendFile(path.join(__dirname, "../views/htmlforum.html"));
  });

  app.get('/css', (req,res) =>{
    res.sendFile(path.join(__dirname, "../views/cssforum.html"));
  });
  app.get('/javascript', (req,res) =>{
    res.sendFile(path.join(__dirname, "../views/javascriptforum.html"));
  });
  app.get('/node', (req,res) =>{
    res.sendFile(path.join(__dirname, "../views/nodeforum.html"));
  });
  app.get('/react', (req,res) =>{
    res.sendFile(path.join(__dirname, "../views/reactforum.html"));
  });
  app.get('/databases', (req,res) =>{
    res.sendFile(path.join(__dirname, "../views/databaseforum.html"));
  });
=======
var db = require("../models");

// module.exports = function(app) {
//   // Load index page
//   app.get("/", function(req, res) {
//     db.Example.findAll({}).then(function(dbExamples) {
//       res.render("index", {
//         msg: "Welcome!",
//         examples: dbExamples
//       });
//     });
//   });

//   // Load example page and pass in an example by id
//   app.get("/example/:id", function(req, res) {
//     db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.render("example", {
//         example: dbExample
//       });
//     });
//   });

//   // Render 404 page for any unmatched routes
//   app.get("*", function(req, res) {
//     res.render("404");
//   });
// };

module.exports = function(app){
  // index route
  app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

  app.get('/html', (req,res) =>{
    res.sendFile(path.join(__dirname, "../views/htmlforum.html"));
  });

  app.get('/css', (req,res) =>{
    res.sendFile(path.join(__dirname, "../views/cssforum.html"));
  });
  app.get('/javascript', (req,res) =>{
    res.sendFile(path.join(__dirname, "../views/javascriptforum.html"));
  });
  app.get('/node', (req,res) =>{
    res.sendFile(path.join(__dirname, "../views/nodeforum.html"));
  });
  app.get('/react', (req,res) =>{
    res.sendFile(path.join(__dirname, "../views/reactforum.html"));
  });
  app.get('/databases', (req,res) =>{
    res.sendFile(path.join(__dirname, "../views/databaseforum.html"));
  });
>>>>>>> master
}