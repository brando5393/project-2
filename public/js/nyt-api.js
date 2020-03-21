var myAPI = "gqwrl6BDOR2rKmQC0A9fgypbxgCazUrk";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=technology&fq=progamming&api-key=" + myAPI;
console.log(queryURL);

$.ajax({
url: queryURL,
method: "GET"
})
.then(function(res){
console.log(res);
console.log(res.response.docs);
var articleArray = res.response.docs;

for(var i = 0; i < 5; i++) {

    console.log(articleArray[i]);

    var articleURL = articleArray[i].web_url;
    var byline = articleArray[i].byline.original;
    var pub_date = articleArray[i].pub_date;
    var headline = articleArray[i].headline.main;
    var paragraph = articleArray[i].lead_paragraph;
    var source = articleArray[i].source;

    var results = $("<h5>").html(articleURL + byline + pub_date + headline + paragraph + source);

    console.log(results);

    $("#news-display").append(results);


}


})