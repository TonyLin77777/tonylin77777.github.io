let money = {
  tony: 100,
  eric: 100,
  mom: 100,
  dad: 100,
};

let wins = {
  tony: 0,
  eric: 0,
  mom: 0,
  dad: 0,
};
let round_counter_temp;
let round_counter;

let ti = document.getElementById("ti");
let ei = document.getElementById("ei");
let mi = document.getElementById("mi");
let di = document.getElementById("di");

setMoney = () => {
  document.getElementById("tm").innerHTML = money.tony;
  document.getElementById("em").innerHTML = money.eric;
  document.getElementById("mm").innerHTML = money.mom;
  document.getElementById("dm").innerHTML = money.dad;
};

let check_Rounds = (wins) => {
  let rounds = 2;
  if (
    wins.tony >= rounds - 1 &&
    wins.eric >= rounds - 1 &&
    wins.mom >= rounds - 1 &&
    wins.dad >= rounds - 1
  ) {
    rounds++;
  }
  document.getElementById("round-number").innerHTML = rounds - 1;
};

setMoney();

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

    check_Rounds(wins);
    ti.value = "";

    setMoney();
  }
});

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

    check_Rounds(wins);
    ei.value = "";
    setMoney();
  }
});

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
    check_Rounds(wins);
    mi.value = "";
    setMoney();
  }
});

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
    check_Rounds(wins);
    di.value = "";
    setMoney();
  }
});
