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
var updateChallenger1Name = document.querySelector('.name1');
var updateChallenger2Name = document.querySelector('.name2');
var updateChallenger1Guess = document.querySelector('.user1-num-returned');
var updateChallenger2Guess = document.querySelector('.user2-num-returned');
var responseOne = document.querySelector('.guess1-feedback');
var responseTwo = document.querySelector('.guess2-feedback');

//Event Listeners

resetButton.addEventListener('click', resetGame)

clearButton.addEventListener('click', clearGame);
updateButton.addEventListener('click', updateRange);
submitGuess.addEventListener('click', submitGame);



// functions 

function resetGame() {
  resetButton.disabled = true;

  document.getElementById("user1-guess").value = '';
  document.getElementById("user2-guess").value = '';
  updateChallenger1Guess.innerText = "?";
  updateChallenger2Guess.innerText = "?";
  updateChallenger1Name.innerText = "Challenger 1";
  updateChallenger2Name.innerText = "Challenger 2";
  responseOne.innerText = '';
  responseTwo.innerText = '';
  document.getElementById('#user2-name') = "Enter Name";
  document.getElementById('#user1-name') = "Enter Name";
}


function clearGame() {
  clearButton.disabled = false;
  updateChallenger1Guess.innerText = 0;
  updateChallenger2Guess.innerText = 0;
  document.getElementById("user2-guess").value = "";
  document.getElementById("user1-guess").value = "";
}
 
function updateRange() {
  updateButton.disabled = true;
  var min = parseInt(minRange.value) || 1;
  var max = parseInt(maxRange.value) || 100;
  visibleMinRange.innerText = min;
  visibleMaxRange.innerText = max;
  numberGenerated = newNumber(max, min);
  console.log(numberGenerated);
};

function newNumber(max, min) {
 return Math.floor(Math.random() *(max - min + 1)) + min;
}

function submitGame() {
 var playerOneInput = parseInt(challenger1Input.value);
 var playerTwoInput = parseInt(challenger2Input.value);
 var playerOneGuess = parseInt(challenger1Guess.value);
 var playerTwoGuess = parseInt(challenger2Guess.value);
 updateChallenger1Name.innerText = playerOneInput;
 updateChallenger2Name.innerText = playerTwoInput;
 updateChallenger1Guess.innerText = playerOneGuess;
 updateChallenger2Guess.innerText = playerTwoGuess; 

 if (playerOneGuess === numberGenerated) { 
   responseOne.innerText = 'Curry';

  } else if (playerOneGuess < numberGenerated) {
   responseOne.innerText = 'Too Low';

  } else { (playerOneGuess > numberGenerated)
    responseOne.innerText = 'Too High';
  }

if (playerTwoGuess === numberGenerated) { 
   responseTwo.innerHTML = 'Curry';

  } else if (playerTwoGuess < numberGenerated) {
   responseTwo.innerHTML = 'Too Low';

  } else { (playerTwoGuess > numberGenerated)
    responseTwo.innerText = 'Too High';
  }
};




// function 

// function userInputNumbers(min,max); {
//   Math.randomNumber()
 

// Math.floor(Math.randomNumber





// function resetGame