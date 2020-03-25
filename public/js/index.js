var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");
$(document).ready(() =>{
  $("#search-btn").on("click", () =>{
    let category = $("#categorySelect").val(); 
    if(category != ""){
      $.ajax({
        url: "/api/posts",
        method: "GET"
      }).then((response) =>{
        
      });
    }else{

    };
  });

  $(".enter-btn").on("click", function(){
    let categoryValue = this.val();
    res.redirect("/post");
    //database querry here
    let categoryTitle = categoryValue;
    $("#category-display").text(categoryTitle)
    for(i = 0; i < response.length; i++){
      let categoryTitle = postscategory;
     $("#post-container").prepend("<a>").attr({href: "#", value: postTitle}).addClass("post-link").text(postTitle);
  });

  $(".post-link").on("click", function(){
    //database querry here
    $("#post-container").empty();
    let postCard = $("<div>").addClass("card");
    let postTitle = $("<h5>").addClass("card-header").text(categoryTitle);
    let cardBody = $("<div>").addClass("card-body");
    let cardtext = $("<p>").addClass("card-text").text(postContent);
    $("#post-container").append();

  });

   
    

});


