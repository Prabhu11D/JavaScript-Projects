const carousels = [
  {
    imageUrl: "1.png",
    text: "3 Earths rotating",
  },
  {
    imageUrl: "2.png",
    text: "Lovers walking in Galaxy",
  },
  {
    imageUrl: "3.jpg",
    text: "Sunset",
  },
  {
    imageUrl: "4.png",
    text: "Lovers walking in Dream Park",
  },
];

const left = document.getElementById("left");
const right = document.getElementById("right");
const imageContainer = document.getElementsByClassName("imageContainer")[0];
const textContainer = document.getElementsByClassName("textContainer")[0];
const text = document.getElementsByClassName("textContainer")[0];

let carouselIndex = 0;
let fadeTime

function Slide(slideDirection='slideFromRight'){
  imageContainer.innerHTML = null
  const image = document.createElement('img')
  image.src = `assets/${carousels[carouselIndex].imageUrl}`;
  image.classList.add(slideDirection);
  imageContainer.append(image)

  clearTimeout(fadeTime)
  textContainer.innerHTML = null;
  fadeTime = setTimeout(() => {
    const text = document.createElement('p')
    text.innerText = carousels[carouselIndex].text;
    text.classList.add('fade')
    textContainer.append(text)
  }, 250);
}


document.addEventListener('DOMContentLoaded', () => {
  Slide()
})

right.addEventListener("click", () => {
  carouselIndex++;
  if (carouselIndex > carousels.length - 1) {
    carouselIndex = 0;
  }
  Slide()
});

left.addEventListener("click", () => {
  if (carouselIndex > 0) {
    carouselIndex--;
  } else {
    carouselIndex = carousels.length - 1;
  }
  Slide('slideFromLeft')
});
