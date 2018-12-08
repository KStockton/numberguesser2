// global variables 
var minRange = document.querySelector('#min-range');
var maxRange = document.querySelector('#max-range');
var updateButton = document.querySelector('.update-range');
var numberGenerated;


var challenger1Input = document.querySelector('#user1-name');
var challenger1Guess = document.querySelector('#user1-guess');
var challenger2Input = document.querySelector('#user2-name');
var challenger2Guess = document.querySelector('#user2-guess');
var submitGuess = document.querySelector('.submit-guess-button');
var clearButton = document.querySelector('.clear');
var resetButton = document.querySelector('.reset');
var visibleMinRange = document.querySelector('.min-entry');
var visibleMaxRange = document.querySelector('.max-entry');
var updateChallenger1Name = document.querySelector('.name1')
var updateChallenger2Name = document.querySelector('.name2')
var updateChallenger1Guess = document.querySelector('.user1-num-returned')
var updateChallenger2Guess = document.querySelector('.user2-num-returned')
var responseOne = document.querySelector('guess1-feedback')
var responseTwo = document.querySelector('guess2-feedback')

//Event Listeners

// clearGame.addEventListener('click', clearGame)
// resetButton.addEventListener('click', resetGame)

updateButton.addEventListener('click', updateRange);
submitGuess.addEventListener('click', submitGame);



// functions 


// function clearGame() {
 
function updateRange() {
  updateButton.disabled = false;
  var min = parseInt(minRange.value) || 1;
  var max = parseInt(maxRange.value) || 100;
  visibleMinRange.innerText = min;
  visibleMaxRange.innerText = max;
  numberGenerated = newNumber(max, min);
};


function newNumber(max, min) {
 return Math.floor(Math.random() *(max - min + 1)) + min;
}


function submitGame() {
 var playerOneInput = challenger1Input.value;
 var playerTwoInput = challenger2Input.value;
 var playerOneGuess = challenger1Guess.value;
 var playerTwoGuess = challenger2Guess.value;
 updateChallenger1Name.innerText = playerOneInput;
 updateChallenger2Name.innerText = playerTwoInput;
 updateChallenger1Guess.innerText = playerOneGuess;
 updateChallenger2Guess.innerText = playerTwoGuess; 

 if (playerOneGuess === numberGenerated) { 
   responseOne.innerText = "Boom";

  } else if (playerOneGuess < numberGenerated) {
  
   responseOne.innerText = "High";

  } else {
    responseOne.innerText = "Too Low";
  }
};


// function 

// function userInputNumbers(min,max); {
//   Math.randomNumber()
 

// Math.floor(Math.randomNumber





// function resetGame