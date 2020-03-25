$(document).ready(function() {
    // blogContainer holds all of our posts
    var postsContainer = $(".posts-container");
    var postCategorySelect = $("#category");
    postCategorySelect.on("change", handleCategoryChange);
    var posts;
  
    // This function grabs posts from the database and updates the view
    function getPosts(category) {
      var categoryString = category || "";
      if (categoryString) {
        categoryString = "/category/" + categoryString;
      }
      $.get("/api/posts" + categoryString, function(data) {
        console.log("Posts", data);
        posts = data;
        if (!posts || !posts.length) {
          displayEmpty();
        }
        else {
          initializeRows();
        }
      });
    }
  
    getPosts();
    // InitializeRows handles appending all of our constructed post HTML inside
    // blogContainer
    function initializeRows() {
      postsContainer.empty();
      var postsToAdd = [];
      for (var i = 0; i < posts.length; i++) {
        postsToAdd.push(createNewRow(posts[i]));
      }
      postsContainer.append(postsToAdd);
    }
  
    // This function constructs a post's HTML
    function createNewRow(post) {
      var newPostCard = $("<div>");
      newPostCard.addClass("card");
      var newPostCardHeading = $("<div>");
      newPostCardHeading.addClass("card-header");
      var deleteBtn = $("<button>");
      deleteBtn.text("x");
      deleteBtn.addClass("delete btn btn-danger");
      var editBtn = $("<button>");
      editBtn.text("EDIT");
      editBtn.addClass("edit btn btn-default");
      var newPostTitle = $("<h2>");
      var newPostDate = $("<small>");
      var newPostCategory = $("<h5>");
      newPostCategory.text(post.category);
      newPostCategory.css({
        float: "right",
        "font-weight": "700",
        "margin-top":
        "-15px"
      });
      var newPostCardBody = $("<div>");
      newPostCardBody.addClass("card-body");
      var newPostBody = $("<p>");
      newPostTitle.text(post.title + " ");
      newPostBody.text(post.body);
      var formattedDate = new Date(post.createdAt);
      formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
      newPostDate.text(formattedDate);
      newPostTitle.append(newPostDate);
      newPostCardHeading.append(deleteBtn);
      newPostCardHeading.append(editBtn);
      newPostCardHeading.append(newPostTitle);
      newPostCardHeading.append(newPostCategory);
      newPostCardBody.append(newPostBody);
      newPostCard.append(newPostCardHeading);
      newPostCard.append(newPostCardBody);
      newPostCard.data("post", post);
      return newPostCard;
    }
  
    // This function displays a message when there are no posts
    function displayEmpty() {
      postsContainer.empty();
      var messageH2 = $("<h2>");
      messageH2.css({ "text-align": "center", "margin-top": "50px" });
      messageH2.html("No posts yet for this category, navigate <a href='/cms'>here</a> in order to create a new post.");
      postsContainer.append(messageH2);
    }
  
    // This function handles reloading new posts when the category changes
    function handleCategoryChange() {
      var newPostCategory = $(this).val();
      getPosts(newPostCategory);
    }
  

  let categoryTitle = postscategory;
  let postCard = $("<div>").addClass("card");
  let postTitle = $("<h5>").addClass("card-header").text(categoryTitle);
  let cardBody = $("<div>").addClass("card-body");
  let cardtext = $("<p>").addClass("card-text").text(postContent);
  
  for(i = 0; i < response.length; i++){
      $("#posts-container").prepend(cat)
  }

});