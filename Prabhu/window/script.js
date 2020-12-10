const windowCreator = document.querySelector(".window_creator");
const windowContainer = document.querySelector(".window-container");
let windowCount = 0;
let firstClick = null;
let secondClick;
let titleBar;

function fullScreenMode(e) {
  let targetNumber = this.dataset.title;
  const currentWindow = document.querySelector(`.window-${targetNumber}`);

  if (currentWindow.classList.contains("fullscreenMode")) {
    currentWindow.classList.remove("fullscreenMode");
    currentWindow.classList.add("removeFullScreenMode");
    setTimeout(() => {
      currentWindow.classList.remove("removeFullScreenMode");
    }, 400);
  } else {
    currentWindow.classList.add("fullscreenMode");
  }
}

function titleControls(e) {
  let targetNumber = this.dataset.title;
  const currentWindow = document.querySelector(`.window-${targetNumber}`);
  if (e.target.className === "close") {
    currentWindow.classList.add("closeAnimation");
    setTimeout(() => {
      currentWindow.remove();
    }, 400);
  } else if (e.target.className === "fullscreen") {
    if (currentWindow.classList.contains("fullscreenMode")) {
      currentWindow.classList.remove("fullscreenMode");
      currentWindow.classList.add("removeFullScreenMode");
      setTimeout(() => {
        currentWindow.classList.remove("removeFullScreenMode");
      }, 400);
    } else {
      currentWindow.classList.add("fullscreenMode");
    }
  } else if (e.target.className === "minimize") {
  }
}

function listenWindow() {
  titleBar = document.querySelectorAll(".title-bar");

  titleBar.forEach((title) => {
    title.addEventListener("click", titleControls);
    title.addEventListener("dblclick", fullScreenMode);
  });
}

function createWindow() {
  windowCount++;
  const window = `
        <div class="window window-${windowCount}">
            <div class="title-bar" data-title='${windowCount}'>
                <button class="minimize"><img src="icons/minimize.png" alt="minimize"></button>
                <button class="fullscreen"><img src="icons/fullscreen.png" alt="fullscreen"></button>
                <button class="close"><img src="icons/close.png" alt="close"></button>
            </div>
        </div>
    `;
  windowContainer.insertAdjacentHTML("beforeend", window);
  listenWindow();
}

windowCreator.addEventListener("click", createWindow);
document.addEventListener("keydown", (e) => {
  if (firstClick === null) {
    firstClick = e.key;
  } else {
    secondClick = e.key;
  }
  if (firstClick == "OS" && secondClick == "a") {
    createWindow();
    secondClick = null;
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key == "OS") {
    firstClick = null;
  }
});

listenWindow();
