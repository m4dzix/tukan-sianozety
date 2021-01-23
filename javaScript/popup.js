const xSign = document.querySelector(".js-close");
const accept = document.querySelector(".js-accept");
const cookie = document.querySelector(".cookie");
const burger = document.querySelector(".burger .fas");
const nav = document.querySelector("nav");
const body = document.querySelector("body");
const rodo = document.querySelector(".rodo");

xSign.addEventListener("click", () => {
  cookie.classList.add("hide");
});
accept.addEventListener("click", () => {
  rodo.classList.add("hide");
});

const clicked = localStorage.getItem("clicked");

if (clicked === "true") {
  document.querySelector(".popup").classList.add("hide");
} else {
  document.querySelector(".popup").classList.remove("hide");
}

document.querySelector(".fas").addEventListener("click", () => {
  document.querySelector(".popup").classList.add("hide");
  cookie.classList.remove("hide");
  rodo.classList.remove("hide");
  localStorage.setItem("clicked", "true");
});
setTimeout(() => {
  localStorage.setItem("clicked", "false");
}, 1000 * 60 * 10);

console.log(clicked);
xSign.addEventListener("click", () => {
  cookie.classList.add("hide");
});
accept.addEventListener("click", () => {
  rodo.classList.add("hide"), (cookie.style.bottom = 2 + "%");
});
burger.addEventListener("click", () => {
  nav.classList.toggle("show");
});
