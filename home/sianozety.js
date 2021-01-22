const xSign = document.querySelector(".js-close");
const accept = document.querySelector(".js-accept");
const cookie = document.querySelector(".cookie");
const rodo = document.querySelector(".rodo");

xSign.addEventListener("click", () => {
  cookie.classList.add("hover");
});
accept.addEventListener("click", () => {
  rodo.classList.add("hover");
});

const burger = document.querySelector(".burger .fas");
const nav = document.querySelector("nav");
const body = document.querySelector("body");

const clicked = localStorage.getItem("clicked");

if (clicked === "false") {
  document.querySelector(".popup").classList.remove("close");
}

document.querySelector(".fas").addEventListener("click", () => {
  document.querySelector(".popup").classList.add("close");
  cookie.classList.remove("hover");
  rodo.classList.remove("hover");
  localStorage.setItem("clicked", true);
});

setTimeout(() => {
  localStorage.setItem("clicked", false);
}, 1000 * 60 * 5);

xSign.addEventListener("click", () => {
  cookie.classList.add("close");
});
accept.addEventListener("click", () => {
  rodo.classList.add("hover"), (cookie.style.bottom = 2 + "%");
});
burger.addEventListener("click", () => {
  nav.classList.toggle("show");
});
