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

let true_tony = true;
let true_eric = true;
let true_dad = true;
let true_mom = true;

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

let rounds = 2;
let turns_left = 16;
let temp_count = 0;

let check_Rounds = (wins) => {
  if (
    wins.tony >= rounds - 1 &&
    wins.eric >= rounds - 1 &&
    wins.mom >= rounds - 1 &&
    wins.dad >= rounds - 1
  ) {
    rounds++;
  }

  if (temp_count === 4 || temp_count === 8 || temp_count === 12) {
    document.getElementById("round-number").innerHTML = rounds - 2;
  } else {
    document.getElementById("round-number").innerHTML = rounds - 1;
  }
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

    let name = "tony";
    document.getElementById("mom-name").style.color = "black";
    document.getElementById("dad-name").style.color = "black";
    document.getElementById("eric-name").style.color = "black";
    document.getElementById("tony-name").style.color = "red";

    if (true_tony) {
      turns_left--;
      document.getElementById("turns-left").innerHTML = turns_left;
      temp_count++;
      true_tony = false;
      true_eric = true;
      true_dad = true;
      true_mom = true;
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

    let name = "eric";

    document.getElementById("tony-name").style.color = "black";
    document.getElementById("mom-name").style.color = "black";

    document.getElementById("dad-name").style.color = "black";
    document.getElementById("eric-name").style.color = "green";
    if (true_eric) {
      turns_left--;
      document.getElementById("turns-left").innerHTML = turns_left;
      temp_count++;
      true_tony = true;
      true_eric = false;
      true_dad = true;
      true_mom = true;
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
    let name = "mom";

    document.getElementById("dad-name").style.color = "black";
    document.getElementById("tony-name").style.color = "black";
    document.getElementById("eric-name").style.color = "black";

    document.getElementById("mom-name").style.color = "purple";

    if (true_mom) {
      turns_left--;
      document.getElementById("turns-left").innerHTML = turns_left;
      temp_count++;
      true_tony = true;
      true_eric = true;
      true_dad = true;
      true_mom = false;
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

    let name = "dad";

    document.getElementById("dad-name").style.color = "white";
    document.getElementById("tony-name").style.color = "black";
    document.getElementById("eric-name").style.color = "black";
    document.getElementById("mom-name").style.color = "black";

    if (true_dad) {
      turns_left--;
      document.getElementById("turns-left").innerHTML = turns_left;
      temp_count++;
      true_tony = true;
      true_eric = true;
      true_dad = false;
      true_mom = true;
    }

    check_Rounds(wins);
    di.value = "";
    setMoney();
  }
});
