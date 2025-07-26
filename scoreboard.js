let score = 0;
let homeScore = document.getElementById('home-score');
let guestScore = document.getElementById('guest-score');
let winMessage = "";
let endGame = document.getElementById('end-game');
function plusOne() {
    score++;
    homeScore.textContent = score
}
function plusOneGuest() {
    score++;
    guestScore.textContent = score
}

function plusTwo() {
    score += 2;
    homeScore.textContent = score
}

function plusTwoGuest() {
    score += 2;
    guestScore.textContent = score
}

function plusThree() {
    score += 3;
    homeScore.textContent = score
}

function plusThreeGuest() {
    score += 3;
    guestScore.textContent = score
}

function message() {
    if (homeScore.textContent > guestScore.textContent)  {
        return document.getElementById('result').textContent =     'Home Wins!';
    } else if (homeScore.textContent < guestScore.textContent) {
        return document.getElementById('result').textContent = 'You lose!!! Guest Wins!';
    } else {
        return document.getElementById('result').textContent =  "This game is a tie!";
    }
}

function newGame() {
    score = 0;
    homeScore.textContent = 0;
    guestScore.textContent = 0;
}
