const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e){
    console.log(this);
    e.stopPropagation();
}

divs.forEach(div => div.addEventListener('click', logText, { capture: false}));

button.addEventListener('click', () => {
    console.log("Button Clicked");
}, {once: true});