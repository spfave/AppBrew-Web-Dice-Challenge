// Functions
function diceRoll(){
    return Math.floor(Math.random()*6)+1;
}

function rollPlayers(){
    dice1Roll = diceRoll();
    dice2Roll = diceRoll();
}

function updateDice(){
    document.querySelector(".img1").setAttribute("src", "images/dice" + dice1Roll + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + dice2Roll + ".png");
}

function declareResult(){
    var result
    if (dice1Roll > dice2Roll) {
        result = "🚩 Player 1 won";
    } else if (dice1Roll < dice2Roll) {
        result = "Player 2 won 🚩";
    } else { // else equal
        result = "Players draw";
    }
    
    document.querySelector("h1").innerHTML = result;
}

function rollDice(){
    rollPlayers()
    updateDice()
    declareResult()
}
