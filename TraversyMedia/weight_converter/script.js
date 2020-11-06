let gramOutput = document.getElementById('gramOutput');
let kgOutput = document.getElementById('kgOutput');
let ounceOutput = document.getElementById('ounceOutput');
let cardContainer = document.querySelector('.card-container');
cardContainer.style.visibility = 'hidden';

document.getElementById('lbsInput').addEventListener('input', function(e){
    let lbs = e.target.value;
    cardContainer.style.visibility = 'visible'
    gramOutput.innerHTML = (lbs/0.0022046);
    kgOutput.innerHTML = (lbs/2.2046);
    ounceOutput.innerHTML = (lbs*16);
})