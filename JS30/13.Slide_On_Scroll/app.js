const sliderImages = document.querySelectorAll(".slide-in");

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function checkSlide() {
  sliderImages.forEach((image) => {
    const slideInAt = (window.scrollY + window.innerHeight) - (image.height / 2);

    const ImageBottom = image.offsetTop + image.height;
    // console.log("Image offsetTop", image.offsetTop);
    const isHalfShown = slideInAt > image.offsetTop;
    const isNotScrolledPast = window.scrollY < ImageBottom;
    if(isHalfShown && isNotScrolledPast){
        image.classList.add('active');
    }else{
        image.classList.remove('active');
    }
  });
}

window.addEventListener("scroll", checkSlide);
