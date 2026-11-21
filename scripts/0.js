const p = document.querySelector("p");
const url = "https://api.weather.gov/points/43.14,89.35";
const r = await fetch(url);
p.textContent = await r.json();