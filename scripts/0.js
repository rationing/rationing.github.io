const h = document.querySelector("h2");
const r = await fetch("https://forecast.weather.gov/MapClick.php?lat=43.0739&lon=-89.3852&unit=0&lg=english&FcstType=text&TextType=1");
h.textContent = await r.text();