const p = document.querySelector("p");
const url = "https://api.weather.gov/products/types/AFD/locations/MKX/latest";
const r = await fetch(url);
const r = await r.json();
p.textContent = r.productText;