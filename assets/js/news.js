$(document).ready(function(){

// Search for news by news outlet buttons
  $('body').on("click", '[name="news"]', function(){
    $.ajax({
      url: "https://newsapi.org/v2/everything?sources=" + this.id + "&apiKey=35477fbe6cda44b0853c42734970825a",
      type: "GET",
      dataType: 'json',
    }).done(function(data){
      console.log(data);

      $("#news-stories").empty();

      for (var i = 0; i < 10; i++) {
        var title;
        if (data.articles[i].title != null) {
          title = data.articles[i].title
        }
        else {
          title = data.articles[i].description
        }
        $('#news-stories').append(
        "<a target='_blank' href='" + data.articles[i].url + "'><b>" + title + "</b></a><div class='space'></div>");
      }
    });
  });
});