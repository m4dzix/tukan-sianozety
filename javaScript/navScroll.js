window.onscroll = function () {
  const nav = document.querySelector("nav");
  const top = window.pageYOffset || document.documentElement.scrollTop;
  const isMobile = window.innerWidth > 812;
  if (top > 50 && isMobile) {
    nav.style.top = "-50px";
  } else {
    nav.style.top = "0";
  }
};
