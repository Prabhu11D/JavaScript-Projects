window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector('.visual');
    const colors = [
        "#ffa601ef",
        "#f72307",
        "#fa00bbe1",
        "#018dff",
        "#00ff40",
        "#fffb00"
    ];
    console.log(sounds[0]);
    // lets get going with the sound here
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function () {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index);
        });
    });

    // create function that makes bubbles
    const createBubbles = (index) =>{
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener('animationend',function() {

            visual.removeChild(this);
        })
    }
});

