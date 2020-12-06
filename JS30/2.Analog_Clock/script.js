const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secHand = document.querySelector('.sec-hand');

function getDate(){
    const now = new Date();
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();

    const hourDegree = ((hour / 12) * 360) + 90;
    const minDegree = ((min / 60) * 360) + 90;
    const secDegree = ((sec / 60) * 360) + 90;

    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    minHand.style.transform = `rotate(${minDegree}deg)`;
    secHand.style.transform = `rotate(${secDegree}deg)`;
}

setInterval(getDate, 1000);