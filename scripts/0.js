const i = document.querySelector("input");
const h = document.querySelector("h2");

async function addText() {
  const r = await fetch(i.value);
  h.textContent = r.text();
}

i.addEventListener("input", addText);