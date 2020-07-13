// variables
let position = [];
let names = [];
let startingMoney = [];
let history = [];
let repeatWins = [];
let highestMoney = [];
let lowestMoney = [];

// finds whos turn it is
let findCurrentPlayer = () => {
    let pointer = 0;
    repeatWins = [0, 0, 0, 0];
    for (let i = 0; i < history.length; i++) {
        if (position[pointer] !== history[i][0]) {
            pointer = (pointer + 1) % position.length;
            repeatWins = [0, 0, 0, 0];
        } else {
            repeatWins[position[pointer] - 1]++;
        }
    }
    return position[pointer];
};

// shows the red dot to show whos turn it is
let renderRedDot = () => {
    redDotSpot = findCurrentPlayer();
    for (let i = 0; i < position.length; i++) {
        document.getElementById("player" + (i + 1) + "-red").style.visibility = "hidden";
    }
    document.getElementById("player" + redDotSpot + "-red").style.visibility = "visible";
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let renderHighAndLowMoneyReceived = () => {
    let balance = [];
    let highestBalance = [];
    let lowestBalance = [];
    for (let i = 0; i < 4; i++) {
        balance.push(parseInt(startingMoney[i]));
        highestBalance.push(parseInt(startingMoney[i]));
        lowestBalance.push(parseInt(startingMoney[i]));
    }
    for (let i = 0; i < history.length; i++) {
        for (let x = 0; x < balance.length; x++) {
            if (history[i][0] - 1 === x) {
                balance[x] += 3 * history[i][1];
            } else {
                balance[x] -= history[i][1];
            }
            highestBalance[x] = Math.max(balance[x], highestBalance[x]);
            lowestBalance[x] = Math.min(balance[x], lowestBalance[x]);
        }
    }

    for (let i = 0; i < 4; i++) {
        document.getElementById("player" + (i + 1) + "-highscore").innerHTML = highestBalance[i];
        document.getElementById("player" + (i + 1) + "-lowscore").innerHTML = lowestBalance[i];
    }
};

let renderMoneyReceived = () => {
    let moneyReceived = [0, 0, 0, 0];
    for (let i = 0; i < history.length; i++) {
        if (history[i][1] > 0) {
            moneyReceived[history[i][0] - 1] += 3 * history[i][1];
        }
    }
    for (let i = 0; i < 4; i++) {
        document.getElementById("player" + (i + 1) + "-moneymade").innerHTML = moneyReceived[i];
    }
};
let renderHighestSingleWin = () => {
    let highestWin = [0, 0, 0, 0];
    for (let i = 0; i < history.length; i++) {
        if (history[i][1] > 0) {
            highestWin[history[i][0] - 1] = Math.max(3 * history[i][1], highestWin[history[i][0] - 1]);
        }
    }
    for (let i = 0; i < 4; i++) {
        document.getElementById("player" + (i + 1) + "-highest-money-received").innerHTML = highestWin[i];
    }
};

let renderHistory = () => {
    document.getElementById("history").innerHTML = "History <br>";

    for (let i = 0; i < history.length; i++) {
        document.getElementById("history").innerHTML += "player #" + history[i][0] + " won " + history[i][1] + "<br>";
    }
};
// shows the money won from the previous round
let renderPrizeWon = () => {
    let playerNum = 0;
    let amount = 0;
    if (history.length > 0) {
        playerNum = history[history.length - 1][0];
        amount = history[history.length - 1][1];
    }
    for (let i = 0; i < 4; i++) {
        if (playerNum === i + 1) {
            if (amount > 0) {
                document.getElementById("player" + (i + 1) + "-prize").innerHTML = "+" + 3 * amount;
            } else {
                document.getElementById("player" + (i + 1) + "-prize").innerHTML = 3 * amount;
            }
        } else {
            if (amount < 0) {
                document.getElementById("player" + (i + 1) + "-prize").innerHTML = "+" + -1 * amount;
            } else {
                document.getElementById("player" + (i + 1) + "-prize").innerHTML = -1 * amount;
            }
        }
    }
};

// shows how much money everyone has after a money input
let renderBalance = () => {
    let balance = [];
    for (let i = 0; i < 4; i++) {
        balance.push(parseInt(startingMoney[i]));
    }
    for (let i = 0; i < history.length; i++) {
        for (let x = 0; x < balance.length; x++) {
            if (history[i][0] - 1 === x) {
                balance[x] += 3 * history[i][1];
            } else {
                balance[x] -= history[i][1];
            }
        }
    }

    for (let i = 0; i < 4; i++) {
        document.getElementById("balance-player" + (i + 1)).innerHTML = balance[i];
    }
};
// shows the round and turns left
let renderRoundAndTurns = () => {
    let turns = 16;
    let rounds = 1;
    // turns-left  round-number
    let pointer = 0;

    for (let i = 0; i < history.length; i++) {
        if (history[i][0] !== position[pointer]) {
            turns--;
            pointer = (pointer + 1) % 4;
            if (turns % 4 === 0) {
                rounds++;
            }
        }
    }

    document.getElementById("turns-left").innerHTML = turns;
    document.getElementById("round-number").innerHTML = rounds;
};
// shows total wins
let renderWinCount = () => {
    let wins = [0, 0, 0, 0];
    for (let i = 0; i < history.length; i++) {
        wins[history[i][0] - 1]++;
    }

    for (let i = 0; i < wins.length; i++) {
        document.getElementById("display-wins-player" + (i + 1)).innerHTML = wins[i];
    }
};
// shows the wins on your turn
let renderRepeatedWinCount = () => {
    findCurrentPlayer();
    for (let i = 0; i < repeatWins.length; i++) {
        if (repeatWins[i] !== 0) {
            document.getElementById("player" + (i + 1) + "-king").style.visibility = "visible";
            document.getElementById("player" + (i + 1) + "-king").innerHTML = repeatWins[i];
        } else {
            document.getElementById("player" + (i + 1) + "-king").style.visibility = "hidden";
        }
    }
};
// renders every change in program
let render = () => {
    renderBalance();
    renderPrizeWon();
    renderRoundAndTurns();
    renderRedDot();
    renderWinCount();
    renderRepeatedWinCount();
    renderHighAndLowMoneyReceived();
    renderMoneyReceived();
    renderHighestSingleWin();
    renderHistory();
};

// removes last move and calls render
let undo = () => {
    if (history.length > 0) {
        history.pop();
        render();
    }
};

// adds history and calls render
let addHistory = (playerNum, amount) => {
    history.push([playerNum, amount]);
    render();
};

// Event listeners for they the players add money
for (let i = 0; i < 4; i++) {
    let moneyInput = document.getElementById(`enter-money-player${i + 1}`);
    moneyInput.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            let moneyVal = parseInt(moneyInput.value);
            if (!isNaN(moneyVal)) {
                addHistory(i + 1, moneyVal);
                moneyInput.value = "";
                render();
            }
        }
    });
}

// puts the names of the people playing
let initializeNames = () => {
    for (let i = 0; i < 4; i++) {
        document.getElementById("name-player" + (i + 1)).innerHTML = names[i];
    }
};

// puts the money they entered in loading page
let initializeMoney = () => {
    for (let i = 0; i < 4; i++) {
        document.getElementById("balance-player" + (i + 1)).innerHTML = startingMoney[i];
    }
};
let undoButton = document.getElementById("undo-button");
undoButton.addEventListener("click", function (event) {
    event.preventDefault();
    undo();
});
// event listener to delete the form and show the container
// retrieves all of the form data
let form = document.getElementById("form");
form.addEventListener("submit", function (event) {
    // prevents default behaviour
    event.preventDefault();
    console.log('lol');
    // deletes the form and shows the counter
    document.getElementById("form").style.display = "none";
    document.getElementById("main-container").style.display = "block";

    // retrieves form input
    let tempNames = document.getElementsByClassName("name-input");
    let tempPosition = document.getElementsByClassName("position-dropdownlist");
    let tempStartingMoney = document.getElementsByClassName("money-input");

    for (let i = 0; i < 4; i++) {
        position.push(0);
    }
    for (let i = 0; i < 4; i++) {
        position[parseInt(tempPosition[i].value) - 1] = i + 1;
        names[i] = tempNames[i].value;
        startingMoney[i] = tempStartingMoney[i].value;
    }

    // sets up the names
    initializeNames();
    // sets up the money
    initializeMoney();
    // render page
    render();
});
