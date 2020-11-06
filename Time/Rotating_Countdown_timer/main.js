//  - - - - - - - -   Set Time
day = 1
hour = 1
minute = 10
second = 40

const day1 = document.querySelector(".day1");
const day2 = document.querySelector(".day2");
const hr1 = document.querySelector(".hr1");
const hr2 = document.querySelector(".hr2");
const min1 = document.querySelector(".min1");
const min2 = document.querySelector(".min2");
const sec1 = document.querySelector(".sec2");
const sec2 = document.querySelector(".sec1");

function toSeconds(days, hours, minutes, seconds) {
  minutes = minutes * 60;
  hours = hours * 60 * 60;
  days = days * 24 * 60 * 60;
  return days + hours + minutes + seconds;
}

function toTime(seconds) {
  days = parseInt(seconds / 86400);
  seconds %= 86400;
  hours = parseInt(seconds / 3600);
  seconds %= 3600;
  minutes = parseInt(seconds / 60);
  seconds %= 60;

  return [days, hours, minutes, seconds];
}
function toStr(x) {
  x = x.toString();
  if (x.length == 1) {
    y = "0";
    x = y.concat(x);
  }
  return x;
}

function animate(index, value){
    const element = document.getElementsByClassName('number')[index];
    element.classList.add('move');
    element.innerText = value;
    
    setInterval(() => {
        element.classList.remove('move');
    }, 1000);
}

time = toSeconds(day, hour, minute, second);
timeString = day+":"+hour+":"+minute+":"+second;

var timer = setInterval(() => {
  [day, hour, minute, second] = toTime(time);

  day = toStr(day);
  hour = toStr(hour);
  minute = toStr(minute);
  second = toStr(second);
  newTimeString = day+":"+hour+":"+minute+":"+second;
  //console.log(timeString, newTimeString);
  for(i=0; i<11;i++){
      if(timeString[i] != newTimeString[i]){
          animate(i, newTimeString[i]);
          //console.log(newTimeString[i]);
      }
  }
  timeString = newTimeString;
  time--;
  if (time < 0) {
    clearInterval(timer);
  }
}, 1000);
