var choices = ['rock', 'paper', 'scissors']
var playerScore = 0;
var computerScore = 0;

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {

    var tie = "It's a tie!";
    var win = 'You Win! ' + playerSelection + ' beats ' + computerSelection;
    var lose = 'You Lose! ' + computerSelection + ' beats ' + playerSelection;

    document.querySelector('.computer-choice').textContent = "The computer chose: " + computerSelection;

    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'rock') {
                return tie;
            } else if (computerSelection === 'paper') {
                computerScore += 1;
                return lose;
            } else {
                playerScore += 1;
                return win;
            }
        case 'paper':
            if (computerSelection === 'rock') {
                playerScore += 1;
                return win;
            } else if (computerSelection === 'paper') {
                return tie;
            } else {
                computerScore += 1;
                return lose;
            }
        case 'scissors':
            if (computerSelection === 'rock') {
                computerScore += 1;
                return lose;
            } else if (computerSelection === 'paper') {
                playerScore += 1;
                return win;
            } else {
                return tie;
            }
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        document.querySelector('.round-result').textContent = playRound(button.id, computerPlay());
        document.querySelector('.player-score').textContent = "Your score is: " + playerScore;
        document.querySelector('.computer-score').textContent = "The computer's score is: " + computerScore;
        if (playerScore == 5) {
            document.querySelector('.final-result').textContent = "Congratulations! You're the champion!";
        } else if (computerScore == 5) {
            document.querySelector('.final-result').textContent = "You lost! Better luck next time!";
        };
    });
});
