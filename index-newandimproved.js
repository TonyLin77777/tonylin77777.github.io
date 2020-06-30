let position = [];
let names = [];
let startingMoney = [];
let history = [];

let findRedDot = () => {
    let pointer = 0;
    for (let i = 0; i < history.length; i++) {
        if (position[pointer] !== history[i][0]) {
            pointer = (pointer + 1) % position.length;
        }
    }
    return position[pointer];
};

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

let renderBalance = () => {
    let balance = [];
    for (let i = 0; i < 4; i++) {
        balance.push(parseInt(startingMoney[i].value));
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
let roundAndTurnsTracker = () => {
    let turnTracker = 16;
    let roundTracker = 1;
   // turns-left  round-number
   for (let i = 0; i < history.length; i++) {
       if(history[i][0] !== findRedDot()){
           turnTracker --;
       }
       if (turnTracker % 4 === 0 ) {
        roundTracker++;
       }
         }

         document.getElementById('turns-left').innerHTML = turnTracker;
         document.getElementById('round-number').innerHTML = roundTracker;
 
        }
// renders every change in program
let render = () => {
    renderBalance();
    renderPrizeWon();
    roundAndTurnsTracker();
};

// removes last move and calls render
let undo = () => {
    history.pop();
    render();
};

// adds history and calls render
let addHistory = (playerNum, amount) => {
    history.push([playerNum, amount]);
    render();
};
for (let i = 0; i < 4; i++) {
    let moneyInput = document.getElementById(`enter-money-player${i + 1}`);
    moneyInput.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            addHistory(i + 1, parseInt(moneyInput.value));
            moneyInput.value = "";
        }
    });
}

// puts the names of the people playing
let initializeNames = () => {
    for (let i = 0; i < 4; i++) {
        document.getElementById("name-player" + (i + 1)).innerHTML = names[i].value;
    }
};

let initializeMoney = () => {
    for (let i = 0; i < 4; i++) {
        document.getElementById("balance-player" + (i + 1)).innerHTML = startingMoney[i].value;
    }
};

// event listener to delete the form and show the container
// retrieves all of the form data
let submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", function (event) {
    // prevents default behaviour
    event.preventDefault();

    // deletes the form and shows the counter
    document.getElementById("form").style.display = "none";
    document.getElementById("main-container").style.visibility = "visible";

    // retrieves form input
    names = document.getElementsByClassName("name-input");
    position = document.getElementsByClassName("position-dropdownlist");
    startingMoney = document.getElementsByClassName("money-input");

    console.log(startingMoney);
    // sets up the names
    initializeNames();

    // sets up the money
    initializeMoney();
});
