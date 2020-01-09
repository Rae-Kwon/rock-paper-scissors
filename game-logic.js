const movesArray = ["rock", "paper", "scissors"];

function pickMove() {
    let min = Math.ceil(0);
    let max = Math.floor(2);
    let randomMove = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomMove;
}

function computerPlay(moves) {
    return moves[pickMove()];
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock" && computerSelection == "paper") {
        return "You Lose the round! Paper beats Rock";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You Win the round! Rock beats Scissors";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You Win the round! Paper beats Rock";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You Lose the round! Rock beats Scissors";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You Win the round! Scissors beats Paper";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You Lose the round! Scissors beats Paper";
    } else {
        return "The round ends in a Draw!";
    }
}

function game() {
    let playerSelection;
    let computerSelection;

    let gameSpace = document.querySelector("#game");
    let rock = document.querySelector("#rock");
    let paper = document.querySelector("#paper");
    let scissors = document.querySelector("#scissors");
    let result = document.querySelector("#result");
    let roundResult = document.querySelector("#round");

    const maxRounds = 5;
    let playerRoundCount = 0;
    let computerRoundCount = 0;

    let rockEvent = rock.addEventListener("click", function() {
        playerSelection = this.id;
        computerSelection = computerPlay(movesArray);
        let round = playRound(playerSelection, computerSelection);
        result.textContent = round;

        if (playerRoundCount < maxRounds || computerRoundCount < maxRounds) {
            if (round.includes("Win")) {
                playerRoundCount++;
            } else if (round.includes("Lose")){
                computerRoundCount++;
            }
        }
        if (playerRoundCount == maxRounds || computerRoundCount == maxRounds){
            if (playerRoundCount > computerRoundCount) {
                gameSpace.textContent = "You Win the game!";
            } else {
                gameSpace.textContent = "You Lose! Try Again";
            }
        }
        roundResult.textContent = `Rounds won: ${playerRoundCount} Rounds lost: ${computerRoundCount}`;
    })

    let paperEvent = paper.addEventListener("click", function() {
        playerSelection = this.id;
        computerSelection = computerPlay(movesArray);
        let round = playRound(playerSelection, computerSelection);
        result.textContent = round;
        
        if (playerRoundCount < maxRounds || computerRoundCount < maxRounds) {
            if (round.includes("Win")) {
                playerRoundCount++;
            } else if (round.includes("Lose")){
                computerRoundCount++;
            }
        }
        if (playerRoundCount == maxRounds || computerRoundCount == maxRounds){
            if (playerRoundCount > computerRoundCount) {
                gameSpace.textContent = "You Win the game!";
            } else {
                gameSpace.textContent = "You Lose! Try Again";
            }
        }
        roundResult.textContent = `Rounds won: ${playerRoundCount} Rounds lost: ${computerRoundCount}`;
    })

    let scissorsEvent = scissors.addEventListener("click", function() {
        playerSelection = this.id;
        computerSelection = computerPlay(movesArray);
        let round = playRound(playerSelection, computerSelection);
        result.textContent = round;
        
        if (playerRoundCount < maxRounds || computerRoundCount < maxRounds) {
            if (round.includes("Win")) {
                playerRoundCount++;
            } else if (round.includes("Lose")){
                computerRoundCount++;
            }
        }
        if (playerRoundCount == maxRounds || computerRoundCount == maxRounds){
            if (playerRoundCount > computerRoundCount) {
                gameSpace.textContent = "You Win the game!";
            } else {
                gameSpace.textContent = "You Lose! Try Again";
            }
        }
        roundResult.textContent = `Rounds won: ${playerRoundCount} Rounds lost: ${computerRoundCount}`;
    })
}

game()