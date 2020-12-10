let countdown;
const timeLeft = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");
const CustomForm = document.querySelector("#custom");

const alertBox = document.querySelector('.alert');
const alertButton = document.querySelector('.alert button');

function playSound(){
const audio = new Audio('ringtone.mp3');
audio.play();
setTimeout(()=>{
    audio.pause();
    audio.currentTime = 0;
}, 5000);
}

function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayEndTime(then);
  displayTimer(seconds);

  countdown = setInterval(() => {
    seconds--;
    if (seconds <= 0) {
        playSound();
      clearInterval(countdown);
    }
    console.log(seconds);
    displayTimer(seconds);
  }, 1000);
}

function displayTimer(seconds) {
  let Mins = Math.floor(seconds / 60);
  Mins = Mins < 10 ? "0" + Mins : Mins;
  seconds %= 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  let display = `${Mins}:${seconds}`;
  timeLeft.textContent = display;
  document.title = display;
}

function displayEndTime(seconds) {
  const end = new Date(seconds);
  let Hrs = end.getHours();
  Hrs = Hrs > 12 ? Hrs - 12 : Hrs;
  let Mins = end.getMinutes();
  Mins = Mins < 10 ? "0" + Mins : Mins;
  endTime.textContent = `Be Back At ${Hrs} : ${Mins}`;
}

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    timer(parseInt(button.dataset.time));
  })
);
CustomForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const mins = document.querySelector(".formText").value;
  if (mins > 60) {
    alertBox.style.display = 'flex';
  } else {
    timer(mins * 60);
  }
  CustomForm.reset();
});

alertButton.addEventListener('click', () => alertBox.style.display = 'none');