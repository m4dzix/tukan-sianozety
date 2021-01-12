window.onscroll = function () {
  const nav = document.querySelector("nav");
  const top = window.pageYOffset || document.documentElement.scrollTop;
  const isMobile = window.innerWidth > 812;
  if (top > 100 && isMobile) {
    nav.style.background = "#000000ce";
    nav.style.lineHeight = "10px";
    nav.style.padding = "10px";
  } else {
    nav.style.background = "transparent";
    nav.style.backgroundImage = "linear-gradient(var(--main-color),transparent";
    nav.style.lineHeight = "10vh";
  }
};
