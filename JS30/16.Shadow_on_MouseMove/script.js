const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
let walk = 400;

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }

  let xWalk = Math.round((x / width) * walk - walk / 2);
  let yWalk = Math.round((y / height) * walk - walk / 2);

  let color1 = `rgba(${Math.abs(xWalk) * 5.1}, ${Math.abs(yWalk) * 5.1}, 0, 0.7)`;
  let color2 = `rgba(0, ${Math.abs(yWalk) * 5.1}, ${Math.abs(xWalk) * 5.1}, 0.7)`;
  let color3 = `rgba(${Math.abs(xWalk) * 5.1}, 0, ${Math.abs(yWalk) * 5.1}, 0.7)`;
  let color4 = `rgba(${Math.abs(yWalk) * 5.1}, 0, ${Math.abs(xWalk) * 5.1}, 0.7)`;


  text.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 ${color1},
      ${xWalk * -1}px ${yWalk}px 0 ${color2},
      ${yWalk}px ${xWalk * -1}px 0 ${color3},
      ${yWalk * -1}px ${xWalk}px 0 ${color4}
    `;
}

hero.addEventListener("mousemove", shadow);
