let scoreHome = 0;
let scoreGuest = 0;
let homeScore = document.getElementById('home-score');
let guestScore = document.getElementById('guest-score');
let winMessage = "";
let endGame = document.getElementById('end-game');
function plusOne() {
    scoreHome++;
    homeScore.textContent = scoreHome
}
function plusOneGuest() {
    scoreGuest++;
    guestScore.textContent = scoreGuest
}

function plusTwo() {
    scoreHome += 2;
    homeScore.textContent = scoreHome
}

function plusTwoGuest() {
    scoreGuest += 2;
    guestScore.textContent = scoreGuest
}

function plusThree() {
    scoreHome += 3;
    homeScore.textContent = scoreHome
}

function plusThreeGuest() {
    scoreGuest += 3;
    guestScore.textContent = scoreGuest
}

function message() {
    if (homeScore.textContent > guestScore.textContent)  {
        return document.getElementById('result').textContent =     "Home Wins!";
    } else if (homeScore.textContent < guestScore.textContent) {
        return document.getElementById('result').textContent = "You lose!!! Guest Wins!";
    } else (homeScore.textContent === guestScore.textContent) 
        return document.getElementById('result').textContent =  "This game is a tie!";
}

function newGame() {
    scoreHome = 0;
    scoreGuest = 0;
    homeScore.textContent = 0;
    guestScore.textContent = 0;
}
