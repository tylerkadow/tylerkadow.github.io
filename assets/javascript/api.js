$(document).ready(function() {

var topics = ["hamster", "dog", "cat", "horse", "bird", "guinea pig"];

	function displayGifs(){

		//gonna use old code for a different purpose

		var topic = $(this).attr("data-name");
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=dc6zaTOxFJmzC&limit=100";
		// Creating an AJAX call for the specific topic button being clicked
		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(response) {
			console.log(response);
			$("#gifz").empty(topicDiv);
			for (i=0; i<10; i++){
				if (response.data[i].rating === "r"){
					//in case there is an r rated image that we do not want
				}
				else{
					// Creating a div
					var topicDiv = $("<div class='gifImages'>");
					// Storing the rating data
					var rated = response.data[i].rating;
					// Creating an element to have the rating displayed
					var imageRating = $("<p>").text("Rating: " + rated);
					// Retrieving the URL for the image
					var imgURL = response.data[i].images.fixed_height_still.url;
					var movingImage = response.data[i].images.fixed_height.url;
					// Creating an tag to hold the image
					var image = $("<img>");
					// Put attributes on the tag
					image.attr("src", imgURL);
					image.attr("still-image", imgURL);
					image.attr("data-state", "still");
					image.attr("moving-image", movingImage);
					image.attr("alt", "giphy image");
					image.attr("id", "gifImages");
					// Appending the image and the rating
					topicDiv.append(image);
					topicDiv.append(imageRating);
					topicDiv.css("display", "inline-block");
					topicDiv.css("margin", "5px");
					topicDiv.css("margin-bottom", "15px");
					// Putting the entire image above the previous images
				$("#gifz").prepend(topicDiv);
				}
			$("#gifImages").on("click", function(){
				var state = $(this).attr("data-state");
				if (state === "still"){
					$(this).attr("src", $(this).attr("moving-image"));
					$(this).attr("data-state", "animate");
					}
				else {
					$(this).attr("src", $(this).attr("still-image"));
					$(this).attr("data-state", "still");
					}
			});
			}
		});
	}

	function renderButtons() {

		$("#gifButtons").empty();
        // Loops through the array of topics
		for (var i = 0; i < topics.length; i++) {
          // Then dynamicaly generates buttons for each topic in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Add classes to our buttons
          a.addClass("gifTopic");
          a.addClass("btn");
          a.addClass("btn-primary");
          a.css("margin-right", "5px");
          a.css("margin-bottom", "5px");
          // Added a data-attribute
          a.attr("data-name", topics[i]);
          // Provided the initial button text
          a.text(topics[i]);
          // Added the button to the gifButtons div
          $("#gifButtons").append(a);
        }
      }
      // This function handles events where the submit button is clicked
	$("#addGif").on("click", function(event) {
		event.preventDefault();
		// This line of code will grab the input from the textbox
		var topic = $("#gifInput").val().trim();
		// The topic from the textbox is then added to our array
		topics.push(topic);
		// Calling renderButtons which handles the processing of our animal array
		renderButtons();
		$("#gifInput").val("");
	});
	$(document).on("click", ".gifTopic", displayGifs);

	renderButtons();

})