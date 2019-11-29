diceRollButton = document.getElementsByClassName("rollDice")[0];
holdButton = document.getElementsByClassName("holdScore")[0];
newGameButton = document.getElementsByClassName("newGame")[0];
diceIcon = document.getElementsByClassName("diceIcon")[0];

newGameButton.addEventListener("click", (evt) => {
    diceIcon.style.display = "none";
});

diceRollButton.addEventListener("click", (evt) => {
    let randomNum = Math.floor(Math.random() * 7);
    diceIcon.style.display = "inline";
    if( randomNum === 0 || randomNum === 1 ) {
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
});