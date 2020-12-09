const timeNodes = document.querySelectorAll('[data-time]');
const times = [];
timeNodes.forEach(time => times.push(time.dataset.time));

let totalTime = times.map(time => {
    let [mins, secs] = time.split(':').map(parseFloat);
    return (mins * 60) + secs;
}).reduce((total, time) => {
    return total + time;
})

function secondsToHMS(seconds){
    let H = Math.floor(seconds / 3600);
    seconds %= 3600;
    let M = Math.floor(seconds / 60);
    seconds %= 60;
    
    return `${H} : ${M} : ${seconds}`
}

let total = secondsToHMS(totalTime);

console.log(total);