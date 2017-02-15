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
    var number = 40;

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

	// Once the "restart" button is pushed in the game screen
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
	var unanswered = 10;
	var Qname = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

	// class whiteboard
	$("input[type=radio").on("click", function() {
		var choice = $(this).parent().children("input[type=radio]:checked")
		console.log(choice.val());
		if (choice.val() === 1){
			correct++;
		} else if (choice.val() === 0){
			incorrect++;
		} 
		// else {
		// 	unanswered++
		// }

		console.log("correct " + correct);
		console.log("incorrect " + incorrect);
		console.log("unanswered " + unanswered);

	  });


// $("input[type=radio").on("click", function() {
// $('input[name="one"]:checked').val();
// 	console.log($('input[name="one"]:checked').val())
//   });

	// alert(selected);
	// // Calculate score function
	// for(var i = 0; i < Qname.length; i++) {

	// }


});












