// variables
let clicks = 0;
let up_button = document.getElementById("up");
let display_area = document.getElementById("display-area");
let down_button = document.getElementById("down");
let reset_button = document.getElementById("reset");
let new_h1 = document.createElement("h1");

// set the beginning value
new_h1.innerHTML = clicks;
document.getElementById("display-area").appendChild(new_h1);

// functions to change the numbers on the screen
down_button.onclick = function () {
  clicks--;
  new_h1.innerHTML = clicks;
  document.getElementById("display-area").appendChild(new_h1);
};

reset_button.onclick = function () {
  clicks = 0;
  new_h1.innerHTML = clicks;
  document.getElementById("display-area").appendChild(new_h1);
  document.getElementById('timer').innerHTML = 'TIMER';
};

up_button.onclick = function () {
  clicks++;
  new_h1.innerHTML = clicks;
  document.getElementById("display-area").appendChild(new_h1);
};

// changes color when clicking the button
function clickdown(event) {
  event.target.style.backgroundColor = "rgb(128, 51, 0)";
}

function clickup() {
  event.target.style.backgroundColor = "#ff3300";
}

//calling the functions
up_button.onmousedown = clickdown;
up_button.onmouseup = clickup;

down_button.onmousedown = clickdown;
down_button.onmouseup = clickup;

reset_button.onmousedown = clickdown;
reset_button.onmouseup = clickup;

// countdown

 document.getElementById('timer').addEventListener('click', function() {
  let sec = 4;
  let timer_func = setInterval(function () {
    --sec;
    document.getElementById("timer").innerHTML = sec;

    if (sec === -1) {
      
      clearInterval(timer_func);
      alert('Congratulations you clicked ' + clicks + " times in 3 seconds!");
    }
    else {

    
    }
  }, 1000);
 });

 


