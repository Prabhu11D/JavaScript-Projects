const windowCreator = document.querySelector(".window_creator");
const windowContainer = document.querySelector(".window_container");
const activityBar = document.querySelector(".activity_bar");
let windowCount = 0;
let windowIndex = 0;
let firstClick = null;
let secondClick;
let titleBar;
let enlargeWindowCount = 0;
let minimizedWindowCount = 0;

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

function removeFolder(number) {
  const folders = document.querySelectorAll(".folder");
  folders.forEach((folder) => {
    let folderName = `folder-${number}`;
    if (folder.classList.contains(folderName)) {
      folder.remove();
    }
  });
}

function titleControls(e) {
  let targetNumber = this.dataset.title;
  const currentWindow = document.querySelector(`.window-${targetNumber}`);
  if (e.target.className === "close") {
    windowCount--;
    currentWindow.classList.add("closeAnimation");
    setTimeout(() => {
      currentWindow.remove();
    }, 400);
    removeFolder(targetNumber);
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
    const folder = activityBar.querySelector(`.folder-${targetNumber}`);
    let g = folder.getBoundingClientRect();
    console.log(g.top, g.left);
    currentWindow.classList.add("minimized");
    currentWindow.style.top = `${g.top}px`;
    currentWindow.style.left = `${g.left}px`;
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
  windowIndex++;
  const window = `
        <div class="window window-${windowIndex}">
            <div class="title-bar" data-title='${windowIndex}'>
                <button class="minimize"><img src="icons/minimize.png" alt="minimize"></button>
                <button class="fullscreen"><img src="icons/fullscreen.png" alt="fullscreen"></button>
                <button class="close"><img src="icons/close.png" alt="close"></button>
            </div>
        </div>
    `;

  const folder = `
        <button class="folder folder-${windowIndex}">
            <img src="icons/folder.png" alt="Folder">
        </button>
    `;
  if (windowCount <= 10) {
    windowContainer.insertAdjacentHTML("beforeend", window);
    activityBar.insertAdjacentHTML("afterbegin", folder);
  }
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
