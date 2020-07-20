$(document).ready(function(){
	// creates the score to reach, between 19 and 120
	// so the first number is the max minus min.
	// the second number is just the min
	var targetNumber = Math.floor((Math.random() * 101) + 19);
	// to keep track of wins and losses
	var win = 0;
	var lose = 0;
	//the current score for the player
	var counter = 0;
	//adds these variables to the webpage.
	$("#targetNumber").text(targetNumber);
	$("#wins").text(win);
	$("#losses").text(lose);
	$("#score").text(counter);
	// the random numbers for the four gems.
	var crystal1 = Math.floor((Math.random() * 11) + 1);
	var crystal2 = Math.floor((Math.random() * 11) + 1);
	var crystal3 = Math.floor((Math.random() * 11) + 1);
	var crystal4 = Math.floor((Math.random() * 11) + 1);
	//resets the game, other than wins/losses, when game is over
	/*If I had written var = variable in the reset function, these
	would be new variables in the scope of this function only*/
	function reset(){
		targetNumber = Math.floor((Math.random() * 101) + 19);
		$("#targetNumber").text(targetNumber);
		crystal1 = Math.floor((Math.random() * 11) + 1);
		crystal2 = Math.floor((Math.random() * 11) + 1);
		crystal3 = Math.floor((Math.random() * 11) + 1);
		crystal4 = Math.floor((Math.random() * 11) + 1);
		counter = 0;
		$("#score").text(counter);
	}
	//For the developer to know that the code is working
	console.log(win);
	console.log(lose);
	console.log(counter);
	console.log(targetNumber);
	//telling the buttons to change the score when clicked
	$("#first").on("click", function() {
		counter = counter + crystal1;
		//makes sure the score counter changes.
		$("#score").text(counter);
			if (counter === targetNumber){
				win++;
				$("#wins").text(win);
				reset();
			}
			else if (counter > targetNumber){
				lose++;
				$("#losses").text(lose);
				reset();
			}
	})
	$("#second").on("click", function() {
		counter = counter + crystal2;
		//makes sure the score counter changes.
		$("#score").text(counter);
			if (counter === targetNumber){
				win++;
				$("#wins").text(win);
				reset();
			}
			else if (counter > targetNumber){
				lose++;
				$("#losses").text(lose);
				reset();
			}
	})
	$("#third").on("click", function() {
		counter = counter + crystal3;
		//makes sure the score counter changes.
		$("#score").text(counter);
			if (counter === targetNumber){
				win++;
				$("#wins").text(win);
				reset();
			}
			else if (counter > targetNumber){
				lose++;
				$("#losses").text(lose);
				reset();
			}
	});
	$("#fourth").on("click", function() {
		counter = counter + crystal4;
		//makes sure the score counter changes.
		$("#score").text(counter);
			if (counter === targetNumber){
				win++;
				$("#wins").text(win);
				reset();
			}
			else if (counter > targetNumber){
				lose++;
				$("#losses").text(lose);
				reset();
			}
	});
})