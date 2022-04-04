const burger = document.querySelector(".burger .fa-bars");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("show");
});
