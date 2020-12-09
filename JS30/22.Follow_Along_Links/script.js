const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.appendChild(highlight);

function highlightLink(){
    const linkCoords = this.getBoundingClientRect();

    const coord = {
        width : linkCoords.width,
        height : linkCoords.height,
        top : linkCoords.top + window.scrollY,
        left : linkCoords.left
    }

    console.log(coord);
    highlight.style.width = `${coord.width}px`;
    highlight.style.height = `${coord.height}px`;
    highlight.style.top = `${coord.top}px`;
    highlight.style.left = `${coord.left}px`;

}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));