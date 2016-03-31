
$(document).ready(function(){
	var magicNumber;
	newGame();
/*--- Display information modal box ---*/
	$(".what").click(function(){
  	$(".overlay").fadeIn(1000);

	})

	/*--- Hide information modal box ---*/
	$("a.close").click(function(){
		$(".overlay").fadeOut(1000);
	})

	/*---New Game New Number to guess--*/
	$(".new").click(function(){
		randomNumber();
		removeGuessList();
		countList();
	})

	$('.myForm').submit(function(e) {
		var userInput = $('#userGuess').val();
		numberCheck(userInput);
		$('#userGuess').val('');
		e.preventDefault();
	})

	/*Random number between 1-100*/
	function randomNumber(){
  var value = Math.floor((Math.random() * 100) + 1);
  console.log("Number to guess: "+value);
  return value;
	};

	/*Start The Game*/
	function newGame(){
	magicNumber= randomNumber();
	};
	
	/*User Input and add value to list*/
	function getUserInput(parameter1){
		console.log("User has guessed: "+parameter1);
		/*Adds value from textBox and adds to list*/
		$("#guessList").append("<li>"+ parameter1 +"</li>");
		countList();
	};

	/*Compare value of numbers*/
	function compareValues(numberToGuess,numberUserGuessed){
		return Math.abs(numberToGuess - numberUserGuessed);
	};

	/*Remove items from list*/
	function removeGuessList(){
		$('#guessList').empty();
	};

	/*Count List to change guess number*/
	function countList(){
		var keepcount = $("#guessList li").length;
  		$("#count").text(keepcount);
	};

	/*HotorCold function*/
	function hotCold(distance){
		if (distance==0) {
			$('#feedback').text('Winner Winner');
		}
		else if (distance>=50) {
			$('#feedback').text('Ice Cold');
		}
		else if (distance>=31&&distance<50) {
			$('#feedback').text('Cold');
		}
		else if (distance>=21 &&distance<=30) {
			$('#feedback').text('Warm');
		}
		else if (distance>=11 && distance<=20) {
			$('#feedback').text('Hot');
		}
		else if (distance>=1 && distance<=10) {
			$('#feedback').text('Very Hot');
		}
	};
	/*Input Validation*/
	function numberCheck(input){
		if (isNaN(input) || input>100) {
			$('#feedback').text('Please Enter Valid Data. Number must be below 100');
			alert("Please Enter Valid Data. Number must be below 100");
		}
		else{
			getUserInput(input);
			console.log(compareValues(magicNumber,input));
			hotCold(compareValues(magicNumber,input));
		}
	};
});

