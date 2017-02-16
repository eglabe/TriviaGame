$(document).ready(function() {

	// Variables used to make divs visible/invisible at different points in game.
	var startPage = document.getElementById('startPage');
	var game = document.getElementById('game');
	var score = document.getElementById('score');

	// The page first loads with only the "start" buttom visible.
	startPage.style.display = 'block';
	game.style.display = 'none';
	score.style.display = 'none';


// Code for the timer...
    //  Set our number counter to ____.
    var number = 90;

    //  Variable that will hold our interval ID when we execute "start" function.
    var intervalId;

    //  The start function sets an interval
    //  that runs the decrement function once per second.
    function start() {
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {
      //  Decrease number by one.
      number--;
      //  Show the number in the #timer tag.
      $("#timer").html("Time Left: " + number);
      //  Once number hits zero...
      if (number === 0) {
      		// The "game" div is hidden and the last div with the score appears.
      		startPage.style.display = 'none';
			game.style.display = 'none';
			score.style.display = 'block';


			clearInterval(intervalId);

        	console.log("Times Up!");
      }
    }

// BUTTON FUNCTIONS
    // Once the "start" button is clicked on the starting screen
    // the "game" div will become visible and the timer will be started.
	$("#startGame").on("click", function(event) {
		startPage.style.display = 'none';
		game.style.display = 'block';
		score.style.display = 'none';

		console.log("click!");
		start();

	});

	// Once the "submit" button is pushed in the game screen
	$("#submit").on("click", function(event) {
		startPage.style.display = 'none';
		game.style.display = 'none';
		score.style.display = 'block';

		clearInterval(intervalId);

		console.log("click!");

	});

	// Once the "restart" button is pushed in the game screen -- NOT INCLUDED in this version
	// $("#restart").on("click", function(event) {
	// 	startPage.style.display = 'none';
	// 	game.style.display = 'block';
	// 	score.style.display = 'none';

	// 	clearInterval(intervalId);

	// 	console.log("click!");

	// });

// QUESTION COUNTER

	var correct = 0;
	var incorrect = 0;
	var unanswered = 0;
	// var Qname = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

	// Code to record value of radio button user clicks on -- worked on with Brandon
	$("input[type=radio").on("click", function() {
		var choice = $(this).parent().children("input[type=radio]:checked")
		console.log(choice.val());
		if (choice.val() == 1){
			correct++;
		} else if (choice.val() == 0){
			incorrect++;
		} 
		// else {
		// 	unanswered++
		// }

		console.log("correct " + correct);
		console.log("incorrect " + incorrect);
		console.log("unanswered " + unanswered);

		// Display score in HTML
		$("#correct").html("Correct: " + correct);
		$("#incorrect").html("Incorrect: " + incorrect);
		$("#unanswered").html("Unanswered: " + unanswered);

	  });

});




// //attach listener to submit button
// $("#submit").click(function (event) {
// 	//get all the selected radio elements
// 	var allSelect = $('.question input[type=radio]:checked');

// 	var score = 0;

// 	// loop through selected elements
// 	for (var i = 0; i < allSelect.length; i++) {

// 		var current = allSelect[i];
// 		var currentAsJquery = $(current);

// 		score = score + number(currentAsJquery.attr("value"));

// 	}
// });







// CALCULATE SCORE FUNCTION -- jumble of unsuccessful code
	// for(var i = 0; i < Qname.length; i++) {
	// 	// $("input[type=radio").on("click", function() {
	// 	// 	console.log(Qname[i]);
	// 	// $('input[name="one"]:checked').val();
	// 	// 	console.log($('input[name="one"]:checked').val())
	// 	//   });
	// 	if(('input[name="Qname[i]"]:checked').val() == 1) {
	// 		correct++;
	// 		console.log(correct);
	// 	}
	// }

