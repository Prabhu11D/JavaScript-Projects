const playButton = document.querySelector(".button");
const wrapper = document.querySelector(".wrapper");
const audio = document.querySelector("audio");
const playIcon = playButton.querySelector("img");

function play() {
  playIcon.src = "icons/pause.png";
  wrapper.classList.add("playing");
  audio.play();
}

function stop() {
  playIcon.src = "icons/play.png";
  wrapper.classList.remove("playing");
  audio.pause();
  audio.currentTime = 0;
}

playButton.addEventListener("click", () => {
    if(audio.paused) play();
    else stop();
});

audio.addEventListener('ended', ()=> stop());