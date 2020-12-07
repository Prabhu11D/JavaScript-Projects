// const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const endpoint = 'cities.json';
const cities = [];
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

function findMatches(wordToMatch, cities){
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex)
    })
}
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
function displayMatches(){
    const values = findMatches(this.value, cities);
    console.log(values);

    const html = values.map(data => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = data.city.replace(regex, `<span class='hl'>${this.value}</span>`);
        const stateName = data.state.replace(regex,`<span class='hl'>${this.value}</span>` );
        
        return `
        <li>
            <span >${cityName} ${stateName}</span>
            <span >${numberWithCommas(data.population)}</span>
        </li>
        `
    }).join('');

    result.innerHTML = html;
}

const input = document.querySelector('input');
const result = document.querySelector('.result');
input.addEventListener('keyup', displayMatches);
input.addEventListener('change', displayMatches);