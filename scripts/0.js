const p = document.querySelector("p");
const r = await fetch("https://api.weather.gov/points/38.8894,-77.0352");
p.textContent = await r.json();