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
    let winMessage =  "Home Wins!";
    let loseMessage = "You lose!!! Guest Wins!";
    let tieMessage = "This game is a tie!";
    if (homeScore.textContent > guestScore.textContent)  {
        return document.getElementById('result').textContent =     alert("You win!!!") + winMessage;
    } else if (homeScore.textContent < guestScore.textContent) {
        return document.getElementById('result').textContent =  alert("You lose!!!") + loseMessage;
    } else (homeScore.textContent === guestScore.textContent) 
        return document.getElementById('result').textContent =  alert("A tie") + tieMessage;
}

function newGame() {
    scoreHome = 0;
    scoreGuest = 0;
    homeScore.textContent = 0;
    guestScore.textContent = 0;
    document.getElementById('result').textContent = "";
}
