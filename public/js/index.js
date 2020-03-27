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


  // $("#create-button").on("click", function(event){
  //   event.preventDefault();
  //   let postTitle = $("#post-title").val().trim();
  //   let postAuthor = $("#post-author").val().trim();
  //   let category = $("#category-select").val();
  // })

  $(".enter-btn").on("click", function(event){
    event.preventDefault();
    let buttonValue = $(".enter-btn").val();
    console.log(buttonValue);
    window.localStorage.setItem("category", buttonValue);
    console.log(window.localStorage.category);
    window.location.href="/post";
    
}); 
});
