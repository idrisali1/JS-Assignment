let playGame = confirm("Let's play rock, paper, scissors!")
if(playGame) {
    let playerChoice = prompt("Rock, paper or scissors?");
    if (playerChoice) {
        let playerOne = playerChoice.toLowerCase();
        if(playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {

            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = computerChoice === 1 ? "rock"
              : computerChoice === 2 ? "paper"
              : "scissors";

            let result =
            playerOne === computer
              ? "Draw"
              : playerOne === "rock" && computer === "paper"
              ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
              : playerOne === "paper" && computer === "scissors"
              ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
              : playerOne === "scissors" && computer === "rock"
              ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
              : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`
            alert(result);
            let playAgain = confirm("Play Again?");
            playAgain ? location.reload() : alert("No problem!");
        } else {
            alert("Please pick one")
        }
    } else {
        alert("No problem :)");
    } 
} else {
    alert("That's fine");
}