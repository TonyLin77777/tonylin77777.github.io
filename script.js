// stores the money
let money = {
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

// sets all the repeated wins to hidden
document.getElementById("tony-king").style.visibility ='hidden';
document.getElementById("eric-king").style.visibility ='hidden';
document.getElementById("mom-king").style.visibility = 'hidden';
document.getElementById("dad-king").style.visibility ='hidden';


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
      } else if (val < 0) {
        wins.tony--;
        document.getElementById("display-wins-tony").innerHTML = wins.tony;
      }
    }

    // changes the visibility
    document.getElementById("tony-king").style.visibility ='hidden';
document.getElementById("eric-king").style.visibility ='hidden';
document.getElementById("mom-king").style.visibility = 'hidden';
document.getElementById("dad-king").style.visibility ='hidden';

    // to add colour to the names
    document.getElementById("mom-name").style.color = "black";
    document.getElementById("dad-name").style.color = "black";
    document.getElementById("eric-name").style.color = "black";
    document.getElementById("tony-name").style.color = "red";

    // figures out how many turns are left
    if (position.tony === round_counter) {
      document.getElementById("turns-left").innerHTML = turns_left;
      document.getElementById("tony-king").innerHTML = counter;
      counter ++;
      counter4 = 1;
      counter2 = 1;
      counter3 = 1;
      document.getElementById("tony-king").style.visibility ='visible';
    
    } else {
      if (round_counter < 4) {
        round_counter++;
      } else {
        round_counter = 1;
      }
      document.getElementById("turns-left").innerHTML = --turns_left;
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
      } else if (val < 0) {
        wins.eric++;
        document.getElementById("display-wins-eric").innerHTML = wins.eric;
      }
    }
        // changes the visibility
        document.getElementById("eric-king").style.visibility ='hidden';
        document.getElementById("tony-king").style.visibility ='hidden';
        document.getElementById("mom-king").style.visibility = 'hidden';
        document.getElementById("dad-king").style.visibility ='hidden';

    // to add colour to the names
    document.getElementById("tony-name").style.color = "black";
    document.getElementById("mom-name").style.color = "black";
    document.getElementById("dad-name").style.color = "black";
    document.getElementById("eric-name").style.color = "green";

    // figures out how many turns are left
    if (position.eric === round_counter) {
      document.getElementById("turns-left").innerHTML = turns_left;
      document.getElementById("eric-king").innerHTML = counter2;
      counter2 ++;
      counter = 1;
      counter4 = 1;
      counter3 = 1;
      document.getElementById("eric-king").style.visibility ='visible';
    } else {
      if (round_counter < 4) {
        round_counter++;
      } else {
        round_counter = 1;
      }
      document.getElementById("turns-left").innerHTML = --turns_left;
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
      } else if (val < 0) {
        wins.mom++;
        document.getElementById("display-wins-mom").innerHTML = wins.mom;
      }
    }
        // changes the visibility
        document.getElementById("mom-king").style.visibility ='hidden';
        document.getElementById("tony-king").style.visibility ='hidden';
        document.getElementById("eric-king").style.visibility = 'hidden';
        document.getElementById("dad-king").style.visibility ='hidden';

    // to add colour to the names
    document.getElementById("dad-name").style.color = "black";
    document.getElementById("tony-name").style.color = "black";
    document.getElementById("eric-name").style.color = "black";

    document.getElementById("mom-name").style.color = "purple";

    // figures out how many turns are left
    if (position.mom === round_counter) {
      document.getElementById("turns-left").innerHTML = turns_left;
      document.getElementById("mom-king").innerHTML = counter3;
      counter3 ++;
      counter = 1;
      counter2 = 1;
      counter4 = 1;
      document.getElementById("mom-king").style.visibility ='visible';
    } else {
      if (round_counter < 4) {
        round_counter++;
      } else {
        round_counter = 1;
      }
      document.getElementById("turns-left").innerHTML = --turns_left;
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
      } else if (val < 0) {
        wins.dad++;
        document.getElementById("display-wins-dad").innerHTML = wins.dad;
      }
    }

            // changes the visibility
            document.getElementById("dad-king").style.visibility ='hidden';
            document.getElementById("tony-king").style.visibility ='hidden';
            document.getElementById("mom-king").style.visibility = 'hidden';
            document.getElementById("eric-king").style.visibility ='hidden';

    // to add colour to the names
    document.getElementById("dad-name").style.color = "white";
    document.getElementById("tony-name").style.color = "black";
    document.getElementById("eric-name").style.color = "black";
    document.getElementById("mom-name").style.color = "black";

    // figures out how many turns are left
    if (position.dad === round_counter) {
      document.getElementById("turns-left").innerHTML = turns_left;
      document.getElementById("dad-king").innerHTML = counter4;
      counter4 ++;
      counter = 1;
      counter2 = 1;
      counter3 = 1;
      document.getElementById("dad-king").style.visibility ='visible';
    } else {
      if (round_counter < 4) {
        round_counter++;
      } else {
        round_counter = 1;
      }
      document.getElementById("turns-left").innerHTML = --turns_left;
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
