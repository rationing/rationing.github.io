const i = document.querySelector("input");
const h = document.querySelector("h2");

function addText() {
  h.textContent = i.value;
}

i.addEventListener("input", addText);