var myAPI = "gqwrl6BDOR2rKmQC0A9fgypbxgCazUrk";
var queryURL = "https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=" + myAPI;
console.log(queryURL);

$.ajax({
url: queryURL,
method: "GET"
})
.then(function(res){
console.log(res);
console.log(res.results);

var articleArray = res.results;

for(var i = 0; i < 5; i++) {
    
    
    console.log(articleArray[i]);

    var articleURL = $("<a>").attr("href", articleArray[i].url).text(articleArray[i].url);
    var byline = $("<h5>").text(articleArray[i].byline);
    var pub_date = $("<h5>").text(articleArray[i].published_date);             
    var title = $("<h3>").text(articleArray[i].title);
    var abstract = $("<h4>").text(articleArray[i].abstract);
    var source = $("<h5>").text(articleArray[i].source);


    newDate = moment(pub_date).format('YYYY-MM-DD');

    $("#news-display").append(title);
    $("#news-display").append(articleURL);
    $("#news-display").append(abstract);
    $("#news-display").append(byline);
    $("#news-display").append(newDate);
    $("#news-display").append(source);
    $("#news-display").append("<br>");
   

}

})