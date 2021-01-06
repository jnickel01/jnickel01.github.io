var playerScore = 0;
var aiScore = 0;
var roundNo = 1;
var playerWins = 0;
var aiWins = 0;

// Startup Init.
window.onload = onStartup;

function onStartup() {
  document.getElementById("roundNoID").value = roundNo;
  document.getElementById("yourScoreID").value = "Game Not Started";
  document.getElementById("cpuScoreID").value = "Game Not Started";
}

function roundCounter() {
  if (roundNo < 10) {
    roundNo = roundNo + 1;
    document.getElementById("roundNoID").value = roundNo;
  } else if (roundNo = 10) {
    alert("Thanks For Playing!");
    roundNo = 1;
    document.getElementById("roundNoID").value = roundNo;
  }
}

function pWins() {
  playerWins = playerWins + 1;
  document.getElementById("playerWinsID").value = playerWins;
}
function aWins() {
  aiWins = aiWins + 1;
  document.getElementById("aiWinsID").value = aiWins;
}


// Resets both Player & CPU Scores, then updates text boxes
function scoreReset() {
  playerScore = 0;
  aiScore = 0;
  document.getElementById("yourScoreID").value = playerScore;
  document.getElementById("cpuScoreID").value = aiScore;
}

function gameReset() {
  roundNo = 1;
  document.getElementById("roundNoID").value = roundNo;
  return scoreReset();
}

// Round-End check. Determines winner & increments round.
function gameCheck() {
    if (aiScore < playerScore && playerScore <= 21 || aiScore > 21) {
      alert("Round Won!");
      return roundCounter(), scoreReset(), pWins();
    } else if (aiScore > playerScore && aiScore <= 21 || playerScore > 21) {
      alert("Dealer Wins! Your Score: " + playerScore);
      return roundCounter(), scoreReset(), aWins();
    } else if (aiScore == playerScore) {
      alert("Tie");
      return roundCounter(), scoreReset();
    }
}

function hit() {
  randomNumber = Math.floor(Math.random()*10)+1
  for (i=1; i<=1; i++) {
    playerScore = playerScore + randomNumber;
  }
  alert("You Got a " + randomNumber + ".");
  document.getElementById("yourScoreID").value = playerScore;
  if (playerScore > 21) {
    // alert("Your Score Is " + playerScore + ". You Lose, sorry.")
    aiScore = 21;
    return gameCheck();
  }
}

function stand() {
  for (i=1; i<=3; i++) {
    randomNumber = Math.floor(Math.random()*10)+1
    aiScore = aiScore + randomNumber;
    alert("The Dealer Got a " + randomNumber + ".");
  }
  document.getElementById("cpuScoreID").value = aiScore;
  if (aiScore > 21) {
    alert("Dealer's Score Is " + aiScore + ". You Win!")
    return gameCheck();
  }
  setTimeout(gameCheck, 1500);
  // return gameCheck();
}