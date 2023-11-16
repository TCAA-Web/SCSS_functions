let colorContainer = document.getElementById("colorContainer");

// For loop to add create 50 div elements
// and add a class 'rngColor' to each of them
for (let i = 0; i < 50; i++) {
  let element = document.createElement("div");
  element.classList.add("rngColor");
  colorContainer.append(element);
}

// Theme switching
const btn = document.getElementById("themeBtn");
const content = document.getElementById("content");

function toggleTheme() {
  btn.classList.toggle("dark");
  btn.classList.toggle("light");
  if (btn.innerText == "dark") {
    btn.innerText = "light";
  } else btn.innerText = "dark";

  content.classList.toggle("dark");
  content.classList.toggle("light");
}

btn.addEventListener("click", toggleTheme);
