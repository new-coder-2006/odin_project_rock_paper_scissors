function getComputerChoice() {
    let  val = Math.random();

    if (val < (1 / 3)) {
        return "rock";
    } else if (val < (2 / 3)) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let val = prompt("Choose one of the following: Rock, Paper, or Scissors");
    const valLowerCase = val.toLowerCase();

    if (
        valLowerCase !== "rock" && valLowerCase !== "scissors" && 
        valLowerCase !== "paper"
    ) {
        alert("Please choose either Rock, Paper, or Scissors");
        val = getHumanChoice();
    }

    return val;
}

function updateScore(humanScore, computerScore) {
    const body = document.querySelector("body");
    const previous = document.getElementById("current");

    if (previous) {
        body.removeChild(previous);
    }

    const currentScore = document.createElement("div");
    currentScore.setAttribute("id", "current");
    currentScore.textContent = "Current Score: "  + humanScore.toString() + 
        " to " + computerScore.toString();

    if (body.firstChild) {
        body.insertBefore(currentScore, body.firstChild);
    } else {
        body.appendChild(currentScore);
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    updateScore(humanScore, computerScore);

    const body = document.querySelector("body");

    function playRound(humanChoice, computerChoice) {
        const humanChoiceLowerCase = humanChoice.toLowerCase();
        const computerChoiceLowerCase = computerChoice.toLowerCase();
        const winScenarios = {rock: "scissors", 
                              paper: "rock", 
                              scissors: "paper"};

        const lastResult = document.createElement("div");

        if (humanChoiceLowerCase === computerChoiceLowerCase) {
            lastResult.textContent = "It's a draw!";
            body.appendChild(lastResult);
        } else if (computerChoiceLowerCase === winScenarios[humanChoiceLowerCase]){
            humanScore++;
            updateScore(humanScore, computerScore);
            lastResult.textContent = "You win! " + humanChoice + " beats " + 
                computerChoice;
            body.appendChild(lastResult);
        } else {
            computerScore++;
            updateScore(humanScore, computerScore);
            lastResult.textContent = "You lose! " + computerChoice + " beats " + 
                humanChoice;
            body.appendChild(lastResult);
        }

        const finalScore = document.createElement("div");

        if (humanScore === 5) {
            body.innerHTML = '';
            finalScore.textContent = "You Win! Final Score: " + 
                humanScore.toString() + " to " + computerScore.toString();
            body.appendChild(finalScore);
        } else if (computerScore === 5) {
            body.innerHTML = '';
            finalScore.textContent = "You Lose! Final Score: " + 
                humanScore.toString() + " to " + computerScore.toString();
            body.appendChild(finalScore);
        }
    }

    const btn = document. querySelectorAll("button");

    btn.forEach((button) => {
       button.addEventListener("click", () => {
          const humanSelection = button.textContent;
          const computerSelection = getComputerChoice();

          playRound(humanSelection, computerSelection);
       });
    }); 
}

playGame();