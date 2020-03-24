<<<<<<< HEAD
// Get references to page elements
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

});


=======
// Get references to page elements
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

});


>>>>>>> master
