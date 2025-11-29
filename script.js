console.log("Project: Rock, Paper, Scissors")
console.log("Type playGame() to start the game.")

function getComputerChoice(){
    let a = (Math.random() * 100);
    /*console.log(a);*/
    if (a < 33) {
        let a = "rock"
        console.log("Computer Choice: " + a);
        return a;
    } else if (a > 33 && a < 66) {
        let a = "paper"
        console.log("Computer Choice: " + a);
        return a;
    } else {
        let a = "scissors"
        console.log("Computer Choice: " + a);
        return a;
    }
}

function getHumanChoice(){
    let b = prompt("Rock, Paper or Scissors?", "");
    b = b.toLowerCase();
    console.log("Human Choice: " + b);
    return b;
}

let round = 0;
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    
    round = round + 1;
    console.log("Round: " + round);
    alert("Round: " + round);

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beat Paper");
        computerScore = computerScore + 1;
        console.log("Computer Score: " + computerScore);
        console.log("Human Score: " + humanScore);
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock.");
        humanScore = humanScore + 1;
        console.log("Computer Score: " + computerScore);
        console.log("Human Score: " + humanScore);
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beat Paper");
        humanScore = humanScore + 1;
        console.log("Computer Score: " + computerScore);
        console.log("Human Score: " + humanScore);
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors.");
        computerScore = computerScore + 1;
        console.log("Computer Score: " + computerScore);
        console.log("Human Score: " + humanScore);
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock.");
        computerScore = computerScore + 1;
        console.log("Computer Score: " + computerScore);
        console.log("Human Score: " + humanScore);
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors.");
        humanScore = humanScore + 1;
        console.log("Computer Score: " + computerScore);
        console.log("Human Score: " + humanScore);
    } else {
        console.log("That's a draw! Try again.");
        console.log("Computer Score: " + computerScore);
        console.log("Human Score: " + humanScore);
        }
    }

   

function playGame() {

    if (humanScore === 5) {
        console.log("That's the end! You win the game.");
    } else if (computerScore === 5) {
        console.log("That's the end! Computer wins the game.");
    } else {
        playRound();
    }

}

