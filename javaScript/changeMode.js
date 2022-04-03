const mainElement = document.querySelector("html");
const chandeModeButton = document.querySelector(".changeMode");
const changeMode = () => {
  if (mainElement.classList.contains("darkMode")) {
    chandeModeButton.innerText = "🌕";
    chandeModeButton.style.textAlign = "right";
  } else {
    chandeModeButton.innerText = "🌑";
    chandeModeButton.style.textAlign = "left";
  }
};

chandeModeButton.addEventListener("click", () => {
  mainElement.classList.toggle("darkMode");
  changeMode();
});
