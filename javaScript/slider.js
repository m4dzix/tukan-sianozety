const slideList = [
  "/images/slider1.jpg",
  "/images/slider2.jpg",
  "/images/slider3.jpg",
];
const slider = document.querySelector("header");
let active = 0;
const changeSlide = () => {
  active++;
  if (active === slideList.length) {
    active = 0;
  }
  slider.style.backgroundImage = `url(${slideList[active]})`;
};
setInterval(changeSlide, 7000);
