let userScore = 0;
let computerScore = 0;
const userScoreSpanEl = document.getElementById("user-score");
const computerScoreSpanEl = document.getElementById("comp-score");
const scoreBoardDivEl = document.querySelector(".score-board");
const resultParEl = document.querySelector(".result > p");
const rockDivEl = document.getElementById("r");
const paperDivEl = document.getElementById("p");
const scissorsDivEl = document.getElementById("s");


function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

function userWin(userChoice, computerChoice) {
    userScore++;
    userScoreSpanEl.innerHTML = userScore;
    computerScoreSpanEl.innerHTML = computerScore;
    resultParEl.innerHTML = `You choose ${ convertToWord(userChoice) } Computer chooses ${ convertToWord(computerChoice)} . You win! 👍`;
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove("green-glow")
    }, 1000);
}

function userLose(userChoice, computerChoice) {
    computerScore++;
    userScoreSpanEl.innerHTML = userScore;
    computerScoreSpanEl.innerHTML = computerScore;
    resultParEl.innerHTML = `You choose ${ convertToWord(userChoice) } and Computer choose ${ convertToWord(computerChoice)} . You lose! 👎`;
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove("red-glow")
    }, 1000);
}

function userDraw(userChoice, computerChoice) {
    // computerScore++;
    // userScoreSpanEl.innerHTML = userScore;
    // computerScoreSpanEl.innerHTML = computerScore;
    resultParEl.innerHTML = `You choose${ convertToWord(userChoice) } Computer chooses ${ convertToWord(computerChoice)} . It's a draw! 🤝​`;
    document.getElementById(userChoice).classList.add("gray-glow");
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove("gray-glow")
    }, 1000);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        // user wins cases
        case "rs":
            userWin(userChoice, computerChoice);
            break;
        case "pr":
            userWin(userChoice, computerChoice);
            break;
        case "sp":
            userWin(userChoice, computerChoice);
            break;
        
        // user loses cases   
        case "rp":
            userLose(userChoice, computerChoice);
            break;
        case "ps":
            userLose(userChoice, computerChoice);
            break;
        case "sr":
            userLose(userChoice, computerChoice);
            break;

        // user draws cases
        case "rr":
            userDraw(userChoice, computerChoice);
            break;
        case "ss":
            userDraw(userChoice, computerChoice);
            break;
        case "pp":
            userDraw(userChoice, computerChoice);
            break;
        default:
            break;
    }
}


function main() {

    rockDivEl.addEventListener('click', function () {
        game("r");
    });

    paperDivEl.addEventListener('click', function () {
        game("p");
    });

    scissorsDivEl.addEventListener('click', function () {
        game("s");
    })
}

main()
