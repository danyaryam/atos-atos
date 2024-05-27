function hidePopup() {
    document.getElementById("hide").style.display = "none";
}

document.getElementById("openPopup").addEventListener("click", function () {
    document.getElementById("hide").style.display = "block";
});
document.getElementById("close").addEventListener("click", function () {
    document.getElementById("hide").style.display = "none";
});

window.addEventListener("scroll", function () {
    hidePopup();
});


// function getRandomComputerResult() {
//     const options = ["Rock", "Paper", "Scissors"];
//     const randomIndex = Math.floor(Math.random() * options.length);
//     return options[randomIndex];
// }

// function hasPlayerWonTheRound(player, computer) {
//     return (
//         (player === "Rock" && computer === "Scissors") ||
//         (player === "Scissors" && computer === "Paper") ||
//         (player === "Paper" && computer === "Rock")
//     );
// }

// let playerScore = 0;
// let computerScore = 0;

// function getRoundResults(userOption) {
//     const computerResult = getRandomComputerResult();

//     if (hasPlayerWonTheRound(userOption, computerResult)) {
//         playerScore++;
//         return `Player wins! ${userOption} beats ${computerResult}`;
//     } else if (computerResult === userOption) {
//         return `It's a tie! Both chose ${userOption}`;
//     } else {
//         computerScore++;
//         return `Computer wins! ${computerResult} beats ${userOption}`;
//     }
// }

// const playerScoreSpanElement = document.getElementById("player-score");
// const computerScoreSpanElement = document.getElementById("computer-score");
// const roundResultsMsg = document.getElementById("results-msg");
// const winnerMsgElement = document.getElementById("winner-msg");
// const optionsContainer = document.querySelector(".options-container");
// const resetGameBtn = document.getElementById("reset-game-btn");

// function showResults(userOption) {
//     roundResultsMsg.innerText = getRoundResults(userOption);
//     computerScoreSpanElement.innerText = computerScore;
//     playerScoreSpanElement.innerText = playerScore;

//     if (playerScore === 3 || computerScore === 3) {
//         winnerMsgElement.innerText = `${playerScore === 3 ? "Player" : "Computer"
//             } has won the game!`;

//         resetGameBtn.style.display = "block";
//         optionsContainer.style.display = "none";
//     }

// };
// function resetGame() {
//     playerScore = 0;
//     computerScore = 0;

//     playerScoreSpanElement.textContent = playerScore;
//     computerScoreSpanElement.textContent = computerScore;

//     resetGameBtn.style.display = 'none';
//     optionsContainer.style.display = 'block';

//     roundResultsMsg.textContent = '';
//     winnerMsgElement.textContent = '';
// };

// resetGameBtn.addEventListener("click", resetGame);

// const rockBtn = document.getElementById("rock-btn");
// const paperBtn = document.getElementById("paper-btn");
// const scissorsBtn = document.getElementById("scissors-btn");

// rockBtn.addEventListener("click", function () {
//     showResults("Rock");
// });

// paperBtn.addEventListener("click", function () {
//     showResults("Paper");
// });

// scissorsBtn.addEventListener("click", function () {
//     showResults("Scissors");
// });

// function getAverage(scores) {
//     let sum = 0;

//     for (const score of scores) {
//         sum += score;
//     }

//     return sum / scores.length;
// }

// function getGrade(score) {
//     if (score === 100) {
//         return "A++";
//     } else if (score >= 90) {
//         return "A";
//     } else if (score >= 80) {
//         return "B";
//     } else if (score >= 70) {
//         return "C";
//     } else if (score >= 60) {
//         return "D";
//     } else {
//         return "F";
//     }
// }

// function hasPassingGrade(score) {
//     return getGrade(score) !== "F";
// }

// function studentMsg(totalScores, studentScore) {
//     let passFail
//     if (hasPassingGrade(studentScore)) {
//         passFail = "You passed the course."
//     } else {
//         passFail = "You failed the course."
//     }
//     return "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". " + passFail;
// }
// console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
