// &#9208;

// ------------------- defining elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");

const progress = player.querySelector(".progress");
const progressFilled = player.querySelector(".progress__filled");

const playButton = player.querySelector(".toggle");

const rangeBars = player.querySelectorAll(".player__slider");
const skipButtons = player.querySelectorAll("[data-skip]");

const dataViewer = player.querySelector(".data-viewer");

// ====================  Functions
// play and pause
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
function updatePlayButton() {
  if (playButton.textContent == "⏸") {
    playButton.textContent = "▶";
  } else {
    playButton.textContent = "⏸";
  }
}

// skip
function skip() {

  video.currentTime += parseFloat(this.dataset.skip);
  displayValue("Skipping at",`${this.dataset.skip}s`);
}

// volume and playbackRate
function handleRangeBar() {
  video[this.name] = this.value;
  if(this.name == 'volume'){
  displayValue(this.name, `${parseInt(this.value * 100)}%`);
  }else{
      displayValue("Speed", `${this.value}x`);
  }
}

// video progressbar
function updateProgressBar() {
  progressFilled.style.width = `${(video.currentTime / video.duration) * 100}%`;
}
function scrub(e) {
  video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;
    let min = parseInt(video.currentTime / 60);
    let sec = parseInt(video.currentTime % 60);
  displayValue(`${min}`,`${sec}`);
}

function displayValue(property, value) {
    // if(dataViewer.style.display == 'none'){
    //     dataViewer.style.display = 'flex';
    // }
dataViewer.style.display = 'flex';
  dataViewer.textContent = `${property} : ${value}`;
  setTimeout(() => {
      dataViewer.textContent = '';
      dataViewer.style.display = 'none';
  }, 400);
}

// ====================   Hook Ups

//  play and pause
video.addEventListener("click", togglePlay);
playButton.addEventListener("click", togglePlay);
window.addEventListener("keydown", (e) => {
  if (e.key == " ") togglePlay();
});
video.addEventListener("play", updatePlayButton);
video.addEventListener("pause", updatePlayButton);

// skip
skipButtons.forEach((button) => button.addEventListener("click", skip));

// volume and playbackRate
rangeBars.forEach((range) => range.addEventListener("change", handleRangeBar));

// video progressbar
let mousedown = false;
video.addEventListener("timeupdate", updateProgressBar);
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => {
  if (mousedown) scrub(e);
});
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
