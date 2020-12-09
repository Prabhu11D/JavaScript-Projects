const triggers = document.querySelectorAll(".cool > li");
const backgroundWhite = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");


function handleEnter() {
  backgroundWhite.classList.add("open");
  this.classList.add("trigger-enter");
  setTimeout(() => {
    if (this.classList.contains("trigger-enter"))
      this.classList.add("trigger-enter-active");
  }, 150);

  const dropdown = this.querySelector(".dropdown");
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();
  const coords = {
    width: dropdownCoords.width,
    height: dropdownCoords.height,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left,
  };

  backgroundWhite.style.width = coords.width + "px";
  backgroundWhite.style.height = coords.height + "px";
  backgroundWhite.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

function handleLeave() {
  backgroundWhite.classList.remove("open");
  this.classList.remove("trigger-enter", "trigger-enter-active");
}

triggers.forEach((li) => li.addEventListener("mouseenter", handleEnter));
triggers.forEach((li) => li.addEventListener("mouseleave", handleLeave));
