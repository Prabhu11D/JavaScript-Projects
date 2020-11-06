const showSampleImage = document.getElementById('showSampleImage');
const closeBtn = document.getElementsByClassName('closeBtn')[0];
const ImageModal = document.getElementById('ImageModal');

closeBtn.addEventListener('click', ()=>{
  ImageModal.style.display = "none";
});

showSampleImage.addEventListener('click',()=>{
  ImageModal.style.display = "flex";
});


// Image Slider in Image Modal
const ImageSlider = document.querySelectorAll('.slide');
const arrowLeft = document.getElementsByClassName('arrowLeft')[0];
const arrowRight = document.getElementsByClassName('arrowRight')[0];

ImageLength = ImageSlider.length;
currentImage = 0;

function resetImage(){
  for(let i=0; i<ImageLength; i++){
    ImageSlider[i].style.display = "none";
  }
}
function startSlider(){
  resetImage();
  ImageSlider[0].style.display = "block";
}
function slideLeft(){
  resetImage();
  if(currentImage == 0){
    currentImage = ImageLength;
  }
  ImageSlider[currentImage - 1].style.display = "block";
  currentImage--;
}
function slideRight(){
  resetImage();
  if(currentImage == ImageLength - 1){
    currentImage = -1;
  }
  ImageSlider[currentImage + 1].style.display = "block";
  currentImage++;
}

arrowLeft.addEventListener('click', slideLeft);
arrowRight.addEventListener('click', slideRight);

startSlider();

window.addEventListener('click', ClickedOutside);

function ClickedOutside(e){
  if(e.target == ImageModal){
    ImageModal.style.display = "none";
  }
}