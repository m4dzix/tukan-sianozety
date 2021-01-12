const openCottagePhotoSwipe = (i) => {
  const pswpElement = document.querySelectorAll(".pswp")[0];

  const items = [
    {
      src: "/images/domki/big-domki1.png",
      w: 826,
      h: 620,
    },
    {
      src: "/images/domki/big-domki2.png",
      w: 826,
      h: 620,
    },
    {
      src: "/images/domki/big-domki3.png",
      w: 826,
      h: 620,
    },
    {
      src: "/images/domki/big-domki4.png",
      w: 826,
      h: 620,
    },
    {
      src: "/images/domki/big-domki5.png",
      w: 826,
      h: 620,
    },
    {
      src: "/images/domki/big-domki6.png",
      w: 826,
      h: 620,
    },
    {
      src: "/images/domki/big-domki7.png",
      w: 465,
      h: 620,
    },
    {
      src: "/images/domki/wagonBig1.png",
      w: 620,
      h: 465,
    },
    {
      src: "/images/domki/wagonBig2.png",
      w: 620,
      h: 465,
    },
    {
      src: "/images/domki/wagonBig3.png",
      w: 465,
      h: 620,
    },
    {
      src: "/images/domki/wagonBig4.png",
      w: 465,
      h: 620,
    },
    {
      src: "/images/domki/wagonBig5.png",
      w: 465,
      h: 620,
    },
    {
      src: "/images/domki/wagonBig6.png",
      w: 826,
      h: 620,
    },
  ];

  const options = {
    history: false,
    focus: false,
    index: i,
    showAnimationDuration: 0,
    hideAnimationDuration: 0,
  };
  const gallery = new PhotoSwipe(
    pswpElement,
    PhotoSwipeUI_Default,
    items,
    options
  );
  gallery.init();
};

const photosCottage = [
  "/images/domki/domki1.png",
  "/images/domki/domki2.png",
  "/images/domki/domki3.png",
  "/images/domki/domki4.png",
  "/images/domki/domki5.png",
  "/images/domki/domki6.png",
  "/images/domki/domki7.png",
  "/images/domki/wagonSmall1.png",
  "/images/domki/wagonSmall2.png",
  "/images/domki/wagonSmall3.png",
  "/images/domki/wagonSmall4.png",
  "/images/domki/wagonSmall5.png",
  "/images/domki/wagonSmall6.png",
];
const cottageSection = document.querySelector(".cottages");
const createCottageIMG = photosCottage.map((photoCottage) => {
  const image = document.createElement("img");
  image.src = photoCottage.toString();
  image.onclick = () => {
    openCottagePhotoSwipe();
  };
  cottageSection.appendChild(image);
});
