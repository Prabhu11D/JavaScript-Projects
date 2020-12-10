const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
const start = document.querySelector('button');

let lastIndex = 0;
let score = 0;
let mole;
let timeUp = false;

function randonTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  let index = Math.floor(Math.random() * holes.length);
  if (index === lastIndex) {
    if (index <= 0) index++;
    else index--;
  }
  lastIndex = index;
  return holes[index];
}

function peep() {
  let hole = randomHole(holes);
  let time = randonTime(300, 800);
  hole.classList.add("up");
  mole = hole.querySelector(".mole");
  mole.addEventListener(
    "click",
    () => {
      score++;
      scoreBoard.textContent = score;
      hole.classList.remove("up");
    },
    { once: true }
  );
  setTimeout(() => {
    hole.classList.remove("up");
    if(!timeUp)
    peep();
  }, time);
}

function startGame(){
    scoreBoard.textContent = '0';
    score = 0;
    timeUp = false;
    peep();
    setTimeout(() => {
        timeUp = true;
    }, 5000);
}

start.addEventListener('click', ()=>{
    if(timeUp) startGame();
});

startGame();