// stores the money
let money = {
  tony: 100,
  eric: 100,
  mom: 100,
  dad: 100,
};

// stores highest single amount won
let highest_money_won = {
  tony: 0,
  eric: 0,
  mom: 0,
  dad: 0,
};

//stores money won
let money_won = {
  tony: 0,
  eric: 0,
  mom: 0,
  dad: 0,
};
// stores highest money reached
let high_score_money = {
  tony: 100,
  eric: 100,
  mom: 100,
  dad: 100,
};
// stores lowest money reached
let low_score_money = {
  tony: 100,
  eric: 100,
  mom: 100,
  dad: 100,
};
// stores the wins
let wins = {
  tony: 0,
  eric: 0,
  mom: 0,
  dad: 0,
};

// stores the positions for the turns
let position = {
  tony: 0,
  eric: 0,
  mom: 0,
  dad: 0,
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//initialize the high score values
document.getElementById("tony-highscore").innerHTML = high_score_money.tony;
document.getElementById("eric-highscore").innerHTML = high_score_money.eric;
document.getElementById("dad-highscore").innerHTML = high_score_money.dad;
document.getElementById("mom-highscore").innerHTML = high_score_money.mom;

//initialize the low score values
document.getElementById("tony-lowscore").innerHTML = low_score_money.tony;
document.getElementById("eric-lowscore").innerHTML = low_score_money.eric;
document.getElementById("dad-lowscore").innerHTML = low_score_money.dad;
document.getElementById("mom-lowscore").innerHTML = low_score_money.mom;

// variables for repeated wins
let counter = 1;
let counter2 = 1;
let counter3 = 1;
let counter4 = 1;
// variables for event listeners
let ti = document.getElementById("ti");
let ei = document.getElementById("ei");
let mi = document.getElementById("mi");
let di = document.getElementById("di");

// variables for counting rounds and turns left
let turns_left = 16;
let round_counter = 1;

// function to update money
setMoney = () => {
  document.getElementById("tm").innerHTML = money.tony;
  document.getElementById("em").innerHTML = money.eric;
  document.getElementById("mm").innerHTML = money.mom;
  document.getElementById("dm").innerHTML = money.dad;
};
// function for high and low score
let high_and_low_score = (high_score_money, money) => {
  // sets highscore for money
  if (money.tony > high_score_money.tony) {
    high_score_money.tony = money.tony;
    document.getElementById("tony-highscore").innerHTML = high_score_money.tony;
  }
  if (money.eric > high_score_money.eric) {
    high_score_money.eric = money.eric;
    document.getElementById("eric-highscore").innerHTML = high_score_money.eric;
  }
  if (money.mom > high_score_money.mom) {
    high_score_money.mom = money.mom;
    document.getElementById("mom-highscore").innerHTML = high_score_money.mom;
  }
  if (money.dad > high_score_money.dad) {
    high_score_money.dad = money.dad;
    document.getElementById("dad-highscore").innerHTML = high_score_money.dad;
  }
  // sets lowest score for money
  if (money.tony < low_score_money.tony) {
    low_score_money.tony = money.tony;
    document.getElementById("tony-lowscore").innerHTML = low_score_money.tony;
  }
  if (money.eric < low_score_money.eric) {
    low_score_money.eric = money.eric;
    document.getElementById("eric-lowscore").innerHTML = low_score_money.eric;
  }
  if (money.mom < low_score_money.mom) {
    low_score_money.mom = money.mom;
    document.getElementById("mom-lowscore").innerHTML = low_score_money.mom;
  }
  if (money.dad < low_score_money.dad) {
    low_score_money.dad = money.dad;
    document.getElementById("dad-lowscore").innerHTML = low_score_money.dad;
  }
};
// changes the visibility for the red circle (finds out who current leader is)
// and how many times u won while being the leader
let set_visibility = () => {
  document.getElementById("tony-red").style.visibility = "hidden";
  document.getElementById("eric-red").style.visibility = "hidden";
  document.getElementById("dad-red").style.visibility = "hidden";
  document.getElementById("mom-red").style.visibility = "hidden";
  document.getElementById("eric-king").style.visibility = "hidden";
  document.getElementById("tony-king").style.visibility = "hidden";
  document.getElementById("mom-king").style.visibility = "hidden";
  document.getElementById("dad-king").style.visibility = "hidden";
};

// The following 4 event listener gets the user positions
let tony_position = document.getElementById("position-tony");
tony_position.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    tony_position.style.display = "none";

    position.tony = parseInt(tony_position.value);
  }
});

let eric_position = document.getElementById("position-eric");
eric_position.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    eric_position.style.display = "none";
    position.eric = parseInt(eric_position.value);
  }
});

let mom_position = document.getElementById("position-mom");
mom_position.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    mom_position.style.display = "none";
    position.mom = parseInt(mom_position.value);
  }
});

let dad_position = document.getElementById("position-dad");
dad_position.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    dad_position.style.display = "none";
    position.dad = parseInt(dad_position.value);
  }
});

// sets the beginning money every one has
setMoney();

// sets visibility to hidden
set_visibility();

// tony's event listener
ti.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    let val = parseInt(ti.value);
    if (!isNaN(val)) {
      console.log(val);
      money.tony += 3 * val;
      money.eric -= val;
      money.mom -= val;
      money.dad -= val;
      document.getElementById("history").innerHTML +=
        "<p>Tony won " + val + "</p>";

      if (val > 0) {
        wins.tony++;
        document.getElementById("display-wins-tony").innerHTML = wins.tony;
        document.getElementById("tony-prize").innerHTML = "+" + val * 3;
        document.getElementById("eric-prize").innerHTML = "-" + val;
        document.getElementById("mom-prize").innerHTML = "-" + val;
        document.getElementById("dad-prize").innerHTML = "-" + val;

        money_won.tony += 3 * val;
        document.getElementById("tony-moneymade").innerHTML = money_won.tony;

        if (val * 3 > highest_money_won.tony) {
          highest_money_won.tony = val * 3;
          document.getElementById("tony-highest-money-received").innerHTML =
            val * 3;
        }
      } else if (val < 0) {
        wins.tony--;
        document.getElementById("display-wins-tony").innerHTML = wins.tony;
        document.getElementById("tony-prize").innerHTML = val * 3;
        document.getElementById("eric-prize").innerHTML = "+" + -1 * val;
        document.getElementById("mom-prize").innerHTML = "+" + -1 * val;
        document.getElementById("dad-prize").innerHTML = "+" + -1 * val;

        money_won.dad += -1 * val;
        money_won.eric += -1 * val;
        money_won.mom += -1 * val;
        document.getElementById("dad-moneymade").innerHTML = money_won.dad;
        document.getElementById("eric-moneymade").innerHTML = money_won.eric;
        document.getElementById("mom-moneymade").innerHTML = money_won.mom;
      }
    }
    // sets highest score and lowest score for money
    high_and_low_score(high_score_money, money);

    // changes the visibility
    set_visibility();

    // to add colour to the names
    document.getElementById("mom-name").style.color = "black";
    document.getElementById("dad-name").style.color = "black";
    document.getElementById("eric-name").style.color = "black";
    document.getElementById("tony-name").style.color = "red";

    // figures out how many turns are left
    if (position.tony === round_counter) {
      document.getElementById("turns-left").innerHTML = turns_left;
      document.getElementById("tony-king").innerHTML = counter;
      counter++;
      counter4 = 1;
      counter2 = 1;
      counter3 = 1;
      document.getElementById("tony-king").style.visibility = "visible";
    } else {
      if (round_counter < 4) {
        round_counter++;
      } else {
        round_counter = 1;
      }
      document.getElementById("turns-left").innerHTML = --turns_left;
    }

    // shows whos the leader of the game
    if (position.tony === round_counter) {
      document.getElementById("tony-red").style.visibility = "visible";
    } else if (position.mom === round_counter) {
      document.getElementById("mom-red").style.visibility = "visible";
    } else if (position.eric === round_counter) {
      document.getElementById("eric-red").style.visibility = "visible";
    } else if (position.dad === round_counter) {
      document.getElementById("dad-red").style.visibility = "visible";
    }

    // figures out the round number
    if (turns_left === 12 || turns_left === 8 || turns_left === 4) {
      if (turns_left === 12) {
        document.getElementById("round-number").innerHTML = 2;
      } else if (turns_left === 8) {
        document.getElementById("round-number").innerHTML = 3;
      } else if (turns_left === 4) {
        document.getElementById("round-number").innerHTML = 4;
      }
    }
    // resets the input value
    ti.value = "";

    // updates money balance
    setMoney();
  }
});

// eric's event listener
ei.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    let val = parseInt(ei.value);
    if (!isNaN(val)) {
      money.eric += 3 * val;
      money.tony -= val;
      money.mom -= val;
      money.dad -= val;
      document.getElementById("history").innerHTML +=
        "<p>Eric won " + val + "</p>";
      if (val > 0) {
        wins.eric++;
        document.getElementById("display-wins-eric").innerHTML = wins.eric;
        document.getElementById("eric-prize").innerHTML = "+" + val * 3;
        document.getElementById("tony-prize").innerHTML = "-" + val;
        document.getElementById("mom-prize").innerHTML = "-" + val;
        document.getElementById("dad-prize").innerHTML = "-" + val;

        money_won.eric += 3 * val;
        document.getElementById("eric-moneymade").innerHTML = money_won.eric;

        if (val * 3 > highest_money_won.eric) {
          highest_money_won.eric = val * 3;
          document.getElementById("eric-highest-money-received").innerHTML =
            val * 3;
        }
      } else if (val < 0) {
        wins.eric++;
        document.getElementById("display-wins-eric").innerHTML = wins.eric;
        document.getElementById("eric-prize").innerHTML = val * 3;
        document.getElementById("tony-prize").innerHTML = "+" + -1 * val;
        document.getElementById("mom-prize").innerHTML = "+" + -1 * val;
        document.getElementById("dad-prize").innerHTML = "+" + -1 * val;

        money_won.dad += -1 * val;
        money_won.tony += -1 * val;
        money_won.mom += -1 * val;
        document.getElementById("mom-moneymade").innerHTML = money_won.dad;
        document.getElementById("tony-moneymade").innerHTML = money_won.tony;
        document.getElementById("mom-moneymade").innerHTML = money_won.mom;
      }
    }
    // sets highest score and lowest score for money
    high_and_low_score(high_score_money, money);

    // changes the visibility
    set_visibility();

    // to add colour to the names
    document.getElementById("tony-name").style.color = "black";
    document.getElementById("mom-name").style.color = "black";
    document.getElementById("dad-name").style.color = "black";
    document.getElementById("eric-name").style.color = "green";

    // figures out how many turns are left
    if (position.eric === round_counter) {
      document.getElementById("turns-left").innerHTML = turns_left;
      document.getElementById("eric-king").innerHTML = counter2;
      counter2++;
      counter = 1;
      counter4 = 1;
      counter3 = 1;
      document.getElementById("eric-king").style.visibility = "visible";
    } else {
      if (round_counter < 4) {
        round_counter++;
      } else {
        round_counter = 1;
      }
      document.getElementById("turns-left").innerHTML = --turns_left;
    }

    // shows whos the leader of the game
    if (position.tony === round_counter) {
      document.getElementById("tony-red").style.visibility = "visible";
    } else if (position.mom === round_counter) {
      document.getElementById("mom-red").style.visibility = "visible";
    } else if (position.eric === round_counter) {
      document.getElementById("eric-red").style.visibility = "visible";
    } else if (position.dad === round_counter) {
      document.getElementById("dad-red").style.visibility = "visible";
    }

    // figures out the round number
    if (turns_left === 12 || turns_left === 8 || turns_left === 4) {
      if (turns_left === 12) {
        document.getElementById("round-number").innerHTML = 2;
      } else if (turns_left === 8) {
        document.getElementById("round-number").innerHTML = 3;
      } else if (turns_left === 4) {
        document.getElementById("round-number").innerHTML = 4;
      }
    }
    // resets input value
    ei.value = "";

    // updates money balance
    setMoney();
  }
});

// mom's event listener
mi.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    let val = parseInt(mi.value);
    if (!isNaN(val)) {
      money.mom += 3 * val;
      money.eric -= val;
      money.tony -= val;
      money.dad -= val;
      document.getElementById("history").innerHTML +=
        "<p>Mom won " + val + "</p>";

      if (val > 0) {
        wins.mom++;
        document.getElementById("display-wins-mom").innerHTML = wins.mom;
        document.getElementById("mom-prize").innerHTML = "+" + val * 3;
        document.getElementById("tony-prize").innerHTML = "-" + val;
        document.getElementById("eric-prize").innerHTML = "-" + val;
        document.getElementById("dad-prize").innerHTML = "-" + val;

        money_won.mom += 3 * val;
        document.getElementById("mom-moneymade").innerHTML = money_won.mom;

        if (val * 3 > highest_money_won.mom) {
          highest_money_won.mom = val * 3;
          document.getElementById("mom-highest-money-received").innerHTML =
            val * 3;
        }
      } else if (val < 0) {
        wins.mom++;
        document.getElementById("display-wins-mom").innerHTML = wins.mom;
        document.getElementById("mom-prize").innerHTML = val * 3;
        document.getElementById("eric-prize").innerHTML = "+" + -1 * val;
        document.getElementById("tony-prize").innerHTML = "+" + -1 * val;
        document.getElementById("dad-prize").innerHTML = "+" + -1 * val;

        money_won.dad += -1 * val;
        money_won.tony += -1 * val;
        money_won.eric += -1 * val;
        document.getElementById("mom-moneymade").innerHTML = money_won.dad;
        document.getElementById("tony-moneymade").innerHTML = money_won.tony;
        document.getElementById("eric-moneymade").innerHTML = money_won.eric;
      }
    }
    // sets highest score and lowest score for money
    high_and_low_score(high_score_money, money);

    // changes the visibility
    set_visibility();

    // to add colour to the names
    document.getElementById("dad-name").style.color = "black";
    document.getElementById("tony-name").style.color = "black";
    document.getElementById("eric-name").style.color = "black";

    document.getElementById("mom-name").style.color = "purple";

    // figures out how many turns are left
    if (position.mom === round_counter) {
      document.getElementById("turns-left").innerHTML = turns_left;
      document.getElementById("mom-king").innerHTML = counter3;
      counter3++;
      counter = 1;
      counter2 = 1;
      counter4 = 1;
      document.getElementById("mom-king").style.visibility = "visible";
    } else {
      if (round_counter < 4) {
        round_counter++;
      } else {
        round_counter = 1;
      }
      document.getElementById("turns-left").innerHTML = --turns_left;
    }

    // shows whos the leader of the game
    if (position.tony === round_counter) {
      document.getElementById("tony-red").style.visibility = "visible";
    } else if (position.mom === round_counter) {
      document.getElementById("mom-red").style.visibility = "visible";
    } else if (position.eric === round_counter) {
      document.getElementById("eric-red").style.visibility = "visible";
    } else if (position.dad === round_counter) {
      document.getElementById("dad-red").style.visibility = "visible";
    }

    // figures out how many rounds are left
    if (turns_left === 12 || turns_left === 8 || turns_left === 4) {
      if (turns_left === 12) {
        document.getElementById("round-number").innerHTML = 2;
      } else if (turns_left === 8) {
        document.getElementById("round-number").innerHTML = 3;
      } else if (turns_left === 4) {
        document.getElementById("round-number").innerHTML = 4;
      }
    }

    // resets input value
    mi.value = "";

    // updates money balance
    setMoney();
  }
});

// dad's event listener
di.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    let val = parseInt(di.value);
    if (!isNaN(val)) {
      money.dad += 3 * val;
      money.eric -= val;
      money.mom -= val;
      money.tony -= val;
      document.getElementById("history").innerHTML +=
        "<p>Dad won " + val + "</p>";

      if (val > 0) {
        wins.dad++;
        document.getElementById("display-wins-dad").innerHTML = wins.dad;
        document.getElementById("dad-prize").innerHTML = "+" + val * 3;
        document.getElementById("tony-prize").innerHTML = "-" + val;
        document.getElementById("mom-prize").innerHTML = "-" + val;
        document.getElementById("eric-prize").innerHTML = "-" + val;

        money_won.dad += 3 * val;
        document.getElementById("dad-moneymade").innerHTML = money_won.dad;

        if (val * 3 > highest_money_won.dad) {
          highest_money_won.dad = val * 3;
          document.getElementById("dad-highest-money-received").innerHTML =
            val * 3;
        }
      } else if (val < 0) {
        wins.dad++;
        document.getElementById("display-wins-dad").innerHTML = wins.dad;
        document.getElementById("dad-prize").innerHTML = val * 3;
        document.getElementById("eric-prize").innerHTML = "+" + -1 * val;
        document.getElementById("mom-prize").innerHTML = "+" + -1 * val;
        document.getElementById("tony-prize").innerHTML = "+" + -1 * val;

        money_won.mom += -1 * val;
        money_won.tony += -1 * val;
        money_won.eric += -1 * val;
        document.getElementById("mom-moneymade").innerHTML = money_won.mom;
        document.getElementById("tony-moneymade").innerHTML = money_won.tony;
        document.getElementById("eric-moneymade").innerHTML = money_won.eric;
      }
    }

    // sets highest score and lowest score for money
    high_and_low_score(high_score_money, money);

    // changes the visibility
    set_visibility();

    // to add colour to the names
    document.getElementById("dad-name").style.color = "white";
    document.getElementById("tony-name").style.color = "black";
    document.getElementById("eric-name").style.color = "black";
    document.getElementById("mom-name").style.color = "black";

    // figures out how many turns are left
    if (position.dad === round_counter) {
      document.getElementById("turns-left").innerHTML = turns_left;
      document.getElementById("dad-king").innerHTML = counter4;
      counter4++;
      counter = 1;
      counter2 = 1;
      counter3 = 1;
      document.getElementById("dad-king").style.visibility = "visible";
    } else {
      if (round_counter < 4) {
        round_counter++;
      } else {
        round_counter = 1;
      }
      document.getElementById("turns-left").innerHTML = --turns_left;
    }

    // shows whos the leader of the game
    if (position.tony === round_counter) {
      document.getElementById("tony-red").style.visibility = "visible";
    } else if (position.mom === round_counter) {
      document.getElementById("mom-red").style.visibility = "visible";
    } else if (position.eric === round_counter) {
      document.getElementById("eric-red").style.visibility = "visible";
    } else if (position.dad === round_counter) {
      document.getElementById("dad-red").style.visibility = "visible";
    }

    // figures out how many rounds are left
    if (turns_left === 12 || turns_left === 8 || turns_left === 4) {
      if (turns_left === 12) {
        document.getElementById("round-number").innerHTML = 2;
      } else if (turns_left === 8) {
        document.getElementById("round-number").innerHTML = 3;
      } else if (turns_left === 4) {
        document.getElementById("round-number").innerHTML = 4;
      }
    }

    // resets input value
    di.value = "";
    // updates money balance
    setMoney();
  }
});
