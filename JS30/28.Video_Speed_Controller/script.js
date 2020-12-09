const video = document.querySelector('.flex');
const speed = document.querySelector('.speed');
const speedBar = document.querySelector('.speed-bar');
let isDown = false;

function speedUp(e){
    const y = e.pageY -  speed.offsetTop;
    let percent = (y / speed.offsetHeight);
    if(percent > 1){
        percent = 1;
    }if(percent < 0.1){
        percent = 0.1;
    }
    percent = percent.toFixed(2);
    speedBar.style.height = `${percent * 100}%`;
    let playbackRate = (percent*4).toFixed(1);
    speedBar.textContent = `${playbackRate}x`;
    video.playbackRate = playbackRate;
}


speed.addEventListener('mousedown', () => isDown = true);
speed.addEventListener('mouseup', () => isDown = false);
speed.addEventListener('mouseleave', () => isDown = false);

speed.addEventListener('mousemove', (e) => {
    if(isDown) speedUp(e);
})