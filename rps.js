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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        const humanChoiceLowerCase = humanChoice.toLowerCase();
        const computerChoiceLowerCase = computerChoice.toLowerCase();
        const winScenarios = {rock: "scissors", paper: "rock", scissors: "paper"};
    
        if (humanChoiceLowerCase === computerChoiceLowerCase) {
            console.log("It's a draw!");
        } else if (computerChoiceLowerCase === winScenarios[humanChoiceLowerCase]){
            console.log("You win! " + humanChoice + " beats " + computerChoice);
            humanScore++;
        } else {
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
            computerScore++;
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
    
        playRound(humanSelection, computerSelection);
    }

    if (humanScore === computerScore) {
        console.log("It's a draw! Final score: " + humanScore.toString() + 
                    " to " + computerScore.toString());
    } else if (humanScore > computerScore) {
        console.log("You win!");
    } else {
        console.log("You lost!")
    }
    
    console.log("Final score: " + humanScore.toString() + 
                    " to " + computerScore.toString());

}

playGame();




