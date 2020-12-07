function changeView(e){
    this.classList.toggle('open-active');
}

const panels = document.querySelectorAll('.panel');
panels.forEach(panel => panel.addEventListener('click', changeView));