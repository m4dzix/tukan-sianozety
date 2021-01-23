const xSign = document.querySelector(".js-close");
const accept = document.querySelector(".js-accept");
const cookie = document.querySelector(".cookie");
const burger = document.querySelector(".burger .fas");
const nav = document.querySelector("nav");
const body = document.querySelector("body");
const rodo = document.querySelector(".rodo");

xSign.addEventListener("click", () => {
  cookie.classList.add("hover");
});
accept.addEventListener("click", () => {
  rodo.classList.add("hover");
});

const clicked = localStorage.getItem("clicked");

if (clicked === "true") {
  document.querySelector(".popup").classList.add("close");
} else {
  document.querySelector(".popup").classList.remove("close");
}

document.querySelector(".fas").addEventListener("click", () => {
  document.querySelector(".popup").classList.add("close");
  cookie.classList.remove("hover");
  rodo.classList.remove("hover");
  localStorage.setItem("clicked", "true");
});

setTimeout(() => {
  localStorage.setItem("clicked", "false");
}, 1000 * 60 * 10);

console.log(clicked);
xSign.addEventListener("click", () => {
  cookie.classList.add("close");
});
accept.addEventListener("click", () => {
  rodo.classList.add("hover"), (cookie.style.bottom = 2 + "%");
});
burger.addEventListener("click", () => {
  nav.classList.toggle("show");
});
