let API_KEY = "46857e5b68fdf9585517ef3c20cf51af";
let KELVIN = 273;

// Hook Elements
const icon = document.querySelector(".icon img");
const tempValue = document.querySelector(".temp-value .value");
const tempDescription = document.querySelector(".temp-description");
const locationData = document.querySelector(".location");
const notification = document.querySelector(".notification");

const weather = {};

function setPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeatherData(latitude, longitude);
}

function getWeatherData(latitude, longitude) {
    let api =
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

    fetch(api).then(response => response.json())
              .then(data => {
                  weather.temp = Math.floor(data.main.temp - KELVIN);
                  weather.iconId = data.weather[0].icon;
                  weather.description = data.weather[0].description;
                  weather.country = data.sys.country;
                  weather.district = data.name;
                
                displayWeather(weather);
                  });
}
function displayWeather(weather){
    icon.src = `icons/${weather.iconId}.png`;
    tempValue.textContent = weather.temp;
    tempDescription.textContent = weather.description;
    locationData.textContent = `${weather.district} ${weather.country}`;
}

function showError(error) {
    showAlert(error);
}

function showAlert(message) {
    notification.style.display = "block";
    notification.textContent = message;
    setTimeout(() => {
        notification.style.display = "none";
    }, 4000);
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
    showAlert("GeoLocation not avaiable in this browser");
}
