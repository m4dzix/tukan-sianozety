const openPhotoSwipe = (items, index) => {
  const pswpElement = document.querySelectorAll(".pswp")[0];

  const options = {
    history: false,
    focus: false,
    index: index,
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
