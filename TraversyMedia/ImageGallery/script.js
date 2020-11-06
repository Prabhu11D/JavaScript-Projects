const currentImg = document.getElementById('currentImg');
const images = document.querySelectorAll('.images img');
const opacity = 0.7;

images[0].style.opacity = opacity;

for(i = 0; i < images.length; i++){
    images[i].addEventListener('click', imgClicked);
};

function imgClicked(e){
    images.forEach(img => (img.style.opacity = 1));
    currentImg.src = e.target.src;
    e.target.style.opacity = opacity;
    currentImg.classList.add('fade-in');
    setTimeout(()=>(currentImg.classList.remove('fade-in')), 500);
}