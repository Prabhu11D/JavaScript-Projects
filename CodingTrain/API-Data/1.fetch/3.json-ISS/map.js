const lat = document.getElementById("lat");
const lon = document.getElementById("lon");
const ISS_URL = "https://api.wheretheiss.at/v1/satellites/25544";

// Making a map and tiles
const mymap = L.map("issMap").setView([0, 0], 1);
const attribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);

// Making a marker with a custom icon
const issIcon = L.icon({
    iconUrl: "iss200.png",
    iconSize: [50, 32],
    iconAnchor: [25, 16],
});
const marker = L.marker([0, 0], { icon: issIcon }).addTo(mymap);


let firstTime = true;

async function getISS() {
    const response = await fetch(ISS_URL);
    const data = await response.json();
    const { latitude, longitude } = data;

    marker.setLatLng([latitude, longitude]);
    if(firstTime){
        mymap.setView([latitude, longitude], 2);
        firstTime = false;
    }

    lat.textContent = latitude.toFixed(2);
    lon.textContent = longitude.toFixed(2);

    setTimeout(getISS, 1000);
}

getISS();