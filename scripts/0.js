const h = document.querySelector("h2");
const r = await fetch("https://api.weather.gov/points/38.8894,-77.0352");
h.textContent = await r.text();