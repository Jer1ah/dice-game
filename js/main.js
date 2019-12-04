let diceRollButton = document.getElementsByClassName("rollDice")[0];
let holdButton = document.getElementsByClassName("holdScore")[0];
let newGameButton = document.getElementsByClassName("newGame")[0];
let diceIcon = document.getElementsByClassName("diceIcon")[0];
let player1Id = document.getElementById("player1Id");
let player1CurrentScore = document.getElementById("player1Current");
let player1Score = document.getElementById("player1Score");
let player2Id = document.getElementById("player2Id");
let player2CurrentScore = document.getElementById("player2Current");
let player2Score = document.getElementById("player2Score");
let currentScores = document.getElementsByClassName("currentScore");
let currentScore = 0;
let player1Total = 0;
let player2Total = 0;

function switchCurrentPlayer() {
    if( player1Id.classList.contains("currentPlayer") ) {
        player1Id.classList.remove("currentPlayer");
        player2Id.classList.add("currentPlayer");
    } else {
        player2Id.classList.remove("currentPlayer");
        player1Id.classList.add("currentPlayer");
    }
}

function setDiceIcon(randomNum) {
    if( randomNum === 1 ) {
        diceIcon.src = "img/dice1.svg";
    } else if( randomNum === 2 ) {
        diceIcon.src = "img/dice2.svg";
    } else if( randomNum === 3 ) {
        diceIcon.src = "img/dice3.svg";
    } else if ( randomNum === 4 ) {
        diceIcon.src = "img/dice4.svg";
    } else if( randomNum === 5 ) {
        diceIcon.src = "img/dice5.svg";
    } else {
        diceIcon.src = "img/dice6.svg";
    }
}

function updateScore(currentScore) {
    if( player1Id.classList.contains("currentPlayer") ) {
        player1Total += currentScore;
        player1Score.innerHTML = player1Total;
    } else {
        player2Total += currentScore;
        player2Score.innerHTML = player2Total;
    }
}

function updateCurrentScore(currentScore) {
    if( player1Id.classList.contains("currentPlayer") ) {
        player1CurrentScore.innerHTML = currentScore;
    } else {
        player2CurrentScore.innerHTML = currentScore;
    }
}

function declaringWinner() {
    if( player1Total >= 100 || player2Total >= 100 ) {
        diceRollButton.disabled = true;
        holdButton.disabled = true;
    }
    if( player1Total >= 100 ) {
        player1Id.innerHTML = "WINNER!";
    } else if( player2Total >= 100 ) {
        player2Id.innerHTML = "WINNER!";
    }
}

// Hiding the dice after resetting the game
// Resetting the scores
newGameButton.addEventListener("click", (evt) => {
    diceIcon.style.display = "none";
    player1CurrentScore.innerHTML = 0;
    player1Score.innerHTML = 0;
    player2CurrentScore.innerHTML = 0;
    player2Score.innerHTML = 0;
    currentScore = 0;
    player1Total = 0;
    player2Total = 0;
    player1Id.innerHTML = "PLAYER 1";
    player2Id.innerHTML = "PLAYER 2";
    diceRollButton.disabled = false;
    holdButton.disabled = false;
    player2Id.classList.remove("currentPlayer");
    player1Id.classList.add("currentPlayer");
});

// Randomly selecting the dice
diceRollButton.addEventListener("click", (evt) => {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    diceIcon.style.display = "inline";
    setDiceIcon(randomNum);
    if( randomNum === 1 ) {
        currentScore = 0;
        updateCurrentScore(currentScore);
        switchCurrentPlayer();
        diceIcon.style.display = "none";
    } else {
        currentScore += randomNum;
        updateCurrentScore(currentScore);
    }
});

// Adding hold button functionality 
holdButton.addEventListener("click", (evt) => {
    updateScore(currentScore);
    switchCurrentPlayer();
    currentScore = 0;
    declaringWinner();
    diceIcon.style.display = "none";
});

holdButton.addEventListener("click", (evt) => {
    for( let i = 0; i < currentScores.length; i++ ) {
        currentScores[i].innerHTML = 0;
    }
});





