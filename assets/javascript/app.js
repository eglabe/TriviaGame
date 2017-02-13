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
    var number = 5;

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


        	console.log("Times Up!");
      }
    }

    // Once the "start" button is clicked on the starting screen
    // the "game" div will become visible and the timer will be started.
	$("#startGame").on("click", function(event) {
		startPage.style.display = 'none';
		game.style.display = 'block';
		score.style.display = 'none';

		console.log("click!");
		// start();

	});

	// Question counter

	var correct = 0;
	var incorrect = 0;
	var unanswered = 10;




});






