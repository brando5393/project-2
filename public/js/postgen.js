$(document).ready(function(){
    $("#category-display").text(window.localStorage.getItem(category));
    
    function getPosts(){
        $.get("/api/posts", function(response){
            let postData = response;
            let postLink = $("<a>").attr({href: "#", value: postData.title }).addClass("post-link");
            $("#link-container").prepend(postLink);

        });
    };
    
    
    
    $(".post-link").on("click", function(response){
        $("#link-container").css("visibility: hidden");
        $("#post-container").css("visibility: visible");
               $.ajax({
                   url: "/api/post",
                   type: GET,
                   data: window.localStorage.getItem(category)

               }).then(getPosts);
             $("#post-container").append(postCard, postTitle, cardBody, cardText);
        });

})