$(document).ready(function() {

var q1 = "";
var q2 = "";
var q3 = "";

var counter = 30;

var intervalId;

	//runs the function "run" when the start button is pushed
	$("#start").on("click", function(){
		run();
		reveal();
	});

	$(".counter").html("<h2>Time remaining: " + counter + "</h2>");

	/* Reveals the trivia game,
	We could run these elements on a separate webpage, but if we did
	the user might link directly to that page. If they do, then
	the game would start automatically and the user would not have
	any time to gather themselves before the game starts.*/
	function reveal() {
		$("#submit").css("display", "inline-block");
		$(".triviaGame").css("display", "inline-block");
	}

    //The function sets an interval
    function run() {
    	intervalId = setInterval(decrement, 1000);
    	$("#start").css("display", "none");
    	$(".instructions").css("display", "none");
    }
    //every one second, the function decrement occurs
    //which lowers number by one

    function decrement() {

      counter--;

      $(".counter").html("<h2>Time remaining: " + counter + "</h2>");

      if (counter === 0) {
        //run the stop function
        stop();
        //Make the submit button go away, since time is up.
        hide();
        //show the results of the quiz.
        checkTest();
        //Bring back the reset button.
        showResetButton();
      }
    }
	function stop() {
      //Just cancels the interval that we started.
      clearInterval(intervalId);
    }

function checkTest() {
	//this function increases each counter for correct and incorrect answers 
	//then displays them on the screen for the player to see how they did
    var correctCount = 0;
    var incorrectCount = 0;

    if ($('input[type="radio"][name=Q1]:checked').val() == "A1") {
        correctCount++;
    }
	else {
    	incorrectCount++;
    }
    if ($('input[type="radio"][name=Q2]:checked').val() == "A1") {
        correctCount++;
    }
	else {
    	incorrectCount++;
    }
    if ($('input[type="radio"][name=Q3]:checked').val() == "A1") {
        correctCount++;
    }
	else {
    	incorrectCount++;
    }
	if ($('input[type="radio"][name=Q4]:checked').val() == "A1") {
		correctCount++;
	}
	else {
    	incorrectCount++;
    }
    if ($('input[type="radio"][name=Q5]:checked').val() == "A1") {
        correctCount++;
    }
    else {
        incorrectCount++;
    }
    console.log(correctCount);
    console.log(incorrectCount);
    $(".results").html("Correct: " + correctCount + "<br>Incorrect: " + incorrectCount);
	}

function hide(){
	/*This will hide our game and submit button once the game is over*/
	$("#submit").css("display", "none");
	$(".triviaGame").css("display", "none");
}

function showResetButton(){
	$("#reset").css("display", "inline-block");
}

$("#submit").on("click", function(){
	checkTest();
	stop();
	hide();
	showResetButton();
});

$("#reset").on("click", function(){
	location.href=location.href;
	/*Instead of just reloading the page, I may try
	creating a reset function which simply sets the page
	to where it was when the page was first loaded.*/
});

})