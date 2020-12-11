const timeDisplay = document.querySelector(".time");

function time() {
  let now = new Date();
  let Hrs = now.getHours();
  let Mins = now.getMinutes();
  let format = Hrs > 12 ? "PM" : "AM";
  Hrs = Hrs > 12 ? Hrs - 12 : Hrs;
  Mins = Mins < 10 ? "0" + Mins : Mins;

  timeDisplay.textContent = `${Hrs}:${Mins} ${format}`;
}

setInterval(time, 1000);
