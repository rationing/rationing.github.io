const i = document.querySelector("input");
const h = document.querySelector("h2");

function addText() {
  const r = fetch(i.value);
  h.textContent = r.text()
}

i.addEventListener("input", addText);