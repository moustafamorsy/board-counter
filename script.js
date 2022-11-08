const list = document.querySelectorAll("ul");
const h2 = document.querySelectorAll("h2");
const play = document.querySelector(".game");
const h3 = document.querySelectorAll("h3");
const winner = document.querySelectorAll("span");

let start = true;
let mytimer;
let time = 10;

list[0].addEventListener("click", (e) => {
  board(0, e);
  check();
});

list[1].addEventListener("click", (e) => {
  board(1, e);
  check();
});

play.addEventListener("click", function () {
  if (start === true) {
    play.innerText = "End";

    mytimer = setInterval(() => {
      h3[1].innerText = parseInt(h3[1].innerText) + 1;

      if (parseInt(h3[1].innerText) === time) {
        h3[0].innerText = parseInt(h3[0].innerText) + 1;
        time = time + 10;
      } else if (h3[0].innerText === "2") {
        announce();
       start = true ;
      
      } 
    }, 1000);
  } else if (start === false) {
    announce();
    
  }

  start = !start
 
});
function check() {
  if (parseInt(h2[0].innerText) > parseInt(h2[1].innerText)) {
    winner[0].setAttribute("class", "G");
    winner[1].setAttribute("class", "H");
    winner[2].setAttribute("class", "H");
  } else if (parseInt(h2[0].innerText) < parseInt(h2[1].innerText)) {
    winner[1].setAttribute("class", "H");
    winner[0].setAttribute("class", "H");
    winner[2].setAttribute("class", "G");
  } else if (parseInt(h2[0].innerText) > 0 && parseInt(h2[1].innerText) > 0) {
    winner[0].setAttribute("class", "H");
    winner[1].setAttribute("class", "G");
    winner[2].setAttribute("class", "H");
  }
}

function board(num, e) {
    if (!start) {
  if (e.target.innerText === "+1") {
    h2[num].innerText = parseInt(h2[num].innerText) + 1;
  } else if (e.target.innerText === "+2") {
    h2[num].innerText = parseInt(h2[num].innerText) + 2;
  } else if (e.target.innerText === "+3") {
    h2[num].innerText = parseInt(h2[num].innerText) + 3;
  }
}
}

function announce() {
  if (parseInt(h2[0].innerText) > parseInt(h2[1].innerText)) {
    alert(
      `Home : ${h2[0].innerText} VS Guest : ${h2[1].innerText} = Home  wins the game`
    );
  } else if (parseInt(h2[0].innerText) < parseInt(h2[1].innerText)) {
    alert(
      `Home : ${h2[0].innerText} VS Guest : ${h2[1].innerText} = Guest  wins the game`
    );
  } else{
    alert("Draw")
  }
  clearInterval(mytimer);
  play.innerText = "Start";
  h3[0].innerText = 0;
  h3[1].innerText = 0;
  h2[0].innerText = 0;
  h2[1].innerText = 0;
  time = 10;
  winner[0].setAttribute("class", "H");
  winner[1].setAttribute("class", "H");
  winner[2].setAttribute("class", "H");
  
}
