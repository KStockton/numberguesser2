// global variables 
var minRange = document.querySelector('#min-range');
var maxRange = document.querySelector('#max-range');
var updateButton = document.querySelector('.update-range');
var challenger1Name = document.querySelector('#user1-name');
var challenger1Guess = document.querySelector('#user1-guess');
var challenger2Name = document.querySelector('#user2-name');
var challenger2Guess = document.querySelector('#user2-guess');
var submitGuess = document.querySelector('.submit-guess-button');
var clearButton = document.querySelector('.clear');
var resetButton = document.querySelector('.reset');
var visibleMinRange = document.querySelector('.min-entry');
var visibleMaxRange = document.querySelector('.max-entry');


//Event Listeners

// submitGuess.addEventListener('click', submitGame) 
// clearGame.addEventListener('click', clearGame)
// resetButton.addEventListener('click', resetGame)

updateButton.addEventListener('click', updateRange);








// functions 
function newNumber() {
  return Math.floor(Math.random() *(maxRange - minRange  + 1)) + minRange;
  console.log(newNumber)
}
 
function updateRange() {
  updateButton.disabled = false;
  var min = parseInt(minRange.value) || 1;
  var max = parseInt(maxRange.value) || 100;
  console.log(minRange);
  visibleMinRange.innerText = min;
  visibleMaxRange.innerText = max;
  numberGenerated = newNumber();
}



// function userInputNumbers(min,max); {
//   Math.randomNumber()
 

// Math.floor(Math.randomNumber



// function submitGame
// function clearGame
// function resetGame