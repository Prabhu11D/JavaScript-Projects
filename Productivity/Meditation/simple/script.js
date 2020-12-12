const timeSetters = document.querySelectorAll(".time_setting button");
const soundSetters = document.querySelectorAll(".sound_setting button");
const playButton = document.querySelector(".play_button");
const playButtonIcon = playButton.querySelector("img");
const audio = document.querySelector("audio");
const video = document.querySelector("video");
const timeDisplay = document.querySelector(".time_display");

// svg
const outline = document.querySelector(".moving_outline circle");
const outlineLength = outline.getTotalLength();
outline.style.strokeDashoffset = outlineLength;
outline.style.strokeDasharray = outlineLength;

let audioSource = "sounds/beach.mp3";
let videoSource = "video/beach.mp4";
let userPlayTime = 120;

function playy() {
    audio.src = audioSource;
    video.src = videoSource;
    playButtonIcon.src = "svg/pause.svg";
    audio.play();
    video.play();
}

function stop() {
    playButtonIcon.src = "svg/play.svg";
    audio.pause();
    audio.currentTime = 0;
    video.pause();
    video.currentTime = 0;
}

playButton.addEventListener("click", () => {
    if (audio.paused) playy();
    else stop();
});

soundSetters.forEach((button) => {
    button.addEventListener("click", () => {
        audioSource = button.dataset.sound;
        if (audioSource === "sounds/beach.mp3") 
            videoSource = 'video/beach.mp4';
        else
        videoSource = 'video/rain.mp4';
        playy();
    });
});

timeSetters.forEach((time) => {
    time.addEventListener("click", () => {
        userPlayTime = time.dataset.time;
        playy();
    });
});

audio.addEventListener("timeupdate", () => {
    let currentTime = audio.currentTime;
    let elapsed = userPlayTime - currentTime;
    let min = Math.floor(elapsed / 60);
    let sec = Math.floor(elapsed % 60);
    let progress = outlineLength - (currentTime / userPlayTime) * outlineLength;
    outline.style.strokeDashoffset = progress;
    timeDisplay.textContent = `${min < 10 ? "0" + min : min}:${
        sec < 10 ? "0" + sec : sec
    }`;
    if (elapsed <= 0) stop();
});
