
window.addEventListener("load", (event) => {

const p = document.querySelector("p");
const url = "https://api.weather.gov/products/types/AFD/locations/MKX/latest";
const response = await fetch(url);
const json = await response.json();
p.textContent = json;

});

