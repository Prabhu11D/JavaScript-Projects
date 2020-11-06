const slideImage = document.querySelectorAll('.slide');
const arrowLeft = document.querySelector('.arrowLeft');
const arrowRight = document.querySelector('.arrowRight');
let current = 0;

ImageLength = slideImage.length;

function resetImages(){
  for(let i=0;i<ImageLength;i++){
    slideImage[i].style.display = "none";
  }
}

function startSlide(){
  resetImages();
  slideImage[0].style.display = "block";
}

function slideLeft(){
  resetImages();
  if(current == 0){
    current = ImageLength;
  }
  slideImage[current - 1].style.display = "block";
  current--;
}
function slideRight(){
  resetImages();
  if(current == ImageLength-1){
    current = 0;
  }
  slideImage[current+1].style.display = "block";
  current++;
}


arrowLeft.addEventListener('click', function(){
  slideLeft();
});
arrowRight.addEventListener('click', function(){
  slideRight();
});

startSlide();