const boxContainer = document.querySelector(".box_container");
const boxes = document.querySelectorAll(".box");

function eventDetails(e){
    console.group("Mouse Event");
    console.log(e.type);
    console.log(`offsetX : ${e.offsetX}, offsetY : ${e.offsetY}`);
    console.log(`pageX : ${e.pageX}, pageY : ${e.pageY}`);
    console.log(`clientX : ${e.clientX}, clientY : ${e.clientY}`);
    console.groupEnd("Mouse Event");
}

function fn(e) {
    if(this.classList.contains('box_1')){
        Right = this.offsetWidth;
        Bottom = this.offsetHeight;
        console.log("Box Right", Right, "Box Bottom ", Bottom);
        eventDetails(e);

        if((Right - e.offsetX < 4) && (Bottom - e.offsetY < 4 )){
            this.style.backgroundColor = 'white';
            this.style.cursor = 'move';
        }else{
            this.style.backgroundColor = '';
            this.style.cursor = '';
        }
    }

}

boxes.forEach(box => box.addEventListener('mousemove', fn));
