let player1DiceValue = generateRandomInt(6);
let player2DiceValue = generateRandomInt(6);
rollDice();
displayWinner(player1DiceValue, player2DiceValue);

function rollDice() {
changeDice(1, player1DiceValue);
changeDice(2, player2DiceValue);
}

function displayWinner(diceValue1, diceValue2) {
    let displayText = 'Draw!';
    if (diceValue1 > diceValue2) {
        displayText = 'Player 1 Wins!';
    } else if (diceValue1 < diceValue2) {
        displayText = 'Player 2 Wins!';
    }
    document.querySelector("h1").innerHTML = displayText;
}

function generateRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

function changeDice(playerNumber, diceValue) {
    document.querySelector(".img" + playerNumber).setAttribute("src", "./images/dice" + diceValue + ".png");
}