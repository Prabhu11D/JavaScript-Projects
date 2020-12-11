const container = document.querySelector(".container");

function gridSetup() {
  let [width, height] = [window.innerWidth, window.innerHeight];
  console.log(width, height);
  /**
   *  padding 3px 3px 3px 3px;
   *  box - 10px;
   *  margin - 1px
   *  box-area = 11*11 =
   */
  width -= 6;
  height -= 6;
  let boxArea = 121;
  let containerSpace = width * height;
  let numberOfBoxes = Math.round(containerSpace / boxArea);

  return numberOfBoxes;
}

let boxCount = gridSetup();

for (let i = 0; i < boxCount; i++) {
  const div = document.createElement("div");
  div.classList.add("box");
  container.appendChild(div);
}

let doubleClick = false;
const boxes = document.querySelectorAll('.box');
boxes.forEach(box =>{
    box.addEventListener('dblclick', () => {
        if(!doubleClick) doubleClick = true;
    });
    box.addEventListener('mousemove', ()=>{
        if(doubleClick){
            box.style.backgroundColor = 'white';
        }
    });
    box.addEventListener('mouseup', ()=> doubleClick = false);
});