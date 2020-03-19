var db = require("../models");

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

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};


// var mvAPI = "gqwrl6BDOR2rKmQC0A9fgypbxgCazUrk";
// // NYT testing API Key. the use of keyword search options technology and programming which means getting the latest list 
var queryURL=`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=technology&fq=programming&api-key=gqwrl6BDOR2rKmQC0A9fgypbxgCazUrk`;
console.log(queryURL);

$.ajax({
  url: queryURL,
  method: "GET"
})

.then(function(res) {

  console.log(res.response.docs);

  var articleArray = res.response.docs;

  for( var i = 0; i < articleArray.length; i++) {

  //   
   console.log (articleArray[i]);
  //   // 
   var articleURL = articleArray[i].web_url;
   var byline = articleArray[i].byline.original;
   var pub_date = articleArray[i].pub_date;
   var headline = articleArray[i].headline.main;
   var paragraph = articleArray[i].lead_paragraph;
   var source = articleArray[i].source;
     
   var results = $("<h5>").html("<div>" + articleURL + byline + pub_date + headline + paragraph + source + "</div>");
  
  // console.log(results);

  $(".docs").append(results)
}
})
   

