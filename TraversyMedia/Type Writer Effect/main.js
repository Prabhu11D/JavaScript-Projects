const TypeWriter = function (textElement, words, wait = 3000) {
  this.textElement = textElement;
  this.words = words;
  this.wait = parseInt(wait, 10);
  this.wordIndex = 0;
  this.letter = '';
  this.isDeleting = false;
  this.type();
}

// Type Method
TypeWriter.prototype.type = function () {
  const currentIndex = this.wordIndex % this.words.length;

  // full text of currentIndex
  const fullText = this.words[currentIndex];

  // check if deleting
  if (this.isDeleting) {
    this.letter = fullText.substring(0, this.letter.length - 1);

  } else {
    this.letter = fullText.substring(0, this.letter.length + 1);
  }

  this.textElement.innerHTML = `<span class='text'>${this.letter}</span>`;

  // Initial type speed
  let typeSpeed = 300;

  if(this.isDeleting){
    typeSpeed /= 2;
  }

  if(!this.isDeleting && this.letter === fullText){
    typeSpeed = this.wait;
    this.isDeleting = true;
  }else if(this.isDeleting && this.letter === ''){
    this.isDeleting = false;
    this.wordIndex++;
    typeSpeed = 500;
  }

  setTimeout(() => this.type(), typeSpeed); 
}


// Init on DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const textElement = document.querySelector('.text-element');
  const words = JSON.parse(textElement.getAttribute('data-words'));
  const wait = textElement.getAttribute('data-wait');

  new TypeWriter(textElement, words, wait);
}