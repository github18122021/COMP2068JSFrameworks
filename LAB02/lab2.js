

let prompt = require("prompt");

prompt.start();

prompt.get(["userSelection"], function(err, result) {
  if (err) {
    return onErr(err);
  }

  let userSelection = result.userSelection;
  let computerSelection = Math.random();

  // 0.00 - 0.34 = Paper
  // 0.35 - 0.67 = Scissors
  // 0.68 - 1.00 = Rock

  if (computerSelection <= 0.34) {
    computerSelection = "paper";
  } else if (computerSelection <= 0.67) {
    computerSelection = "scissors";
  } else {
    computerSelection = "rock";
  }

  console.log("User Selection: " + userSelection);
  console.log("Computer Selection: " + computerSelection);

  let gameStart = function(userSelection, computerSelection) {
    
    if (userSelection === computerSelection) {
      return "It's a tie!";
    }

    if (userSelection === "rock") {
      if (computerSelection === "scissors") {
        return "User Wins!";
      } else {
        return "Computer Wins!";
      }
    }
    if (userSelection === "paper") {
      if (computerSelection === "rock") {
        return "User Wins!";
      } else {
        return "Computer Wins!";
      }
    }
    if (userSelection === "scissors") {
      if (computerSelection === "rock") {
        return "Computer Wins!";
      } else {
        return "User Wins!";
      }
    }
  };

  // displaying the result
  console.log(gameStart(userSelection, computerSelection));
});