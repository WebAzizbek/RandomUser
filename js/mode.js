const body = document.querySelector("body");
const darkBtn = document.getElementById("dark-btn");
const lightBtn = document.getElementById("light-btn");

let localMode = localStorage.getItem("mode");

let toggleBtn = () => {
  darkBtn.classList.toggle("hidden");
  lightBtn.classList.toggle("hidden");
};

if (localMode) {
  body.classList.add("dark-mode");
  toggleBtn();
}

let toggleModeBtn = () => {
  body.classList.toggle("dark-mode");
  toggleBtn();
};

darkBtn.addEventListener("click", () => {
  toggleModeBtn();
  localStorage.setItem("mode", "dark-mode");
});
lightBtn.addEventListener("click", () => {
  toggleModeBtn();
  localStorage.setItem("mode", "");
});
