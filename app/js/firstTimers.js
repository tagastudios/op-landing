// DOM
const screen1 = document.getElementById("screen1");
const goToScreen1 = document.getElementById("btn-goToScreen1");
const screen2 = document.getElementById("screen2");
const goToScreen2 = document.getElementById("btn-goToScreen2");
const goToScreen2A = document.getElementById("btn-goToScreen2A");
const screen3 = document.getElementById("screen3");
const goToScreen3 = document.getElementById("btn-goToScreen3");

goToScreen1.addEventListener("click", () => {
  screen1.click();
});

goToScreen2.addEventListener("click", () => {
  screen2.click();
});

goToScreen2A.addEventListener("click", () => {
  screen2.click();
});

goToScreen3.addEventListener("click", () => {
  screen3.click();
});
