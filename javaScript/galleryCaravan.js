const itemsCaravan = [
  {
    src: "../images/holenderki/big-hol1.png",
    w: 826,
    h: 620,
  },
  {
    src: "../images/holenderki/big-hol2.png",
    w: 645,
    h: 620,
  },
  {
    src: "../images/holenderki/big-hol3.png",
    w: 465,
    h: 620,
  },
  {
    src: "../images/holenderki/big-hol4.png",
    w: 827,
    h: 620,
  },
  {
    src: "../images/holenderki/big-hol5.png",
    w: 465,
    h: 620,
  },
  {
    src: "../images/holenderki/big-hol6.png",
    w: 826,
    h: 620,
  },
  {
    src: "../images/holenderki/big-hol7.png",
    w: 465,
    h: 620,
  },
  {
    src: "../images/holenderki/big-hol8.png",
    w: 827,
    h: 620,
  },
  {
    src: "../images/holenderki/big-hol9.png",
    w: 465,
    h: 620,
  },
  {
    src: "../images/holenderki/big-hol10.png",
    w: 465,
    h: 620,
  },
  {
    src: "../images/holenderki/big-hol11.png",
    w: 465,
    h: 620,
  },
  {
    src: "../images/holenderki/duzaBig1.png",
    w: 465,
    h: 620,
  },
  {
    src: "../images/holenderki/duzaBig2.png",
    w: 465,
    h: 620,
  },
  {
    src: "../images/holenderki/duzaBig3.png",
    w: 826,
    h: 620,
  },
  {
    src: "../images/holenderki/duzaBig4.png",
    w: 466,
    h: 620,
  },
  {
    src: "../images/holenderki/duzaBig5.png",
    w: 827,
    h: 620,
  },
  {
    src: "../images/holenderki/duzaBig6.png",
    w: 464,
    h: 620,
  },
  {
    src: "../images/holenderki/duzaBig7.png",
    w: 465,
    h: 620,
  },
  {
    src: "../images/holenderki/duzaBig8.png",
    w: 465,
    h: 620,
  },
  {
    src: "../images/holenderki/duzaBig9.png",
    w: 465,
    h: 620,
  },
  {
    src: "../images/holenderki/malaBig1.png",
    w: 827,
    h: 620,
  },
  {
    src: "../images/holenderki/malaBig2.png",
    w: 464,
    h: 620,
  },
  {
    src: "../images/holenderki/malaBig3.png",
    w: 465,
    h: 620,
  },
  {
    src: "../images/holenderki/malaBig4.png",
    w: 466,
    h: 620,
  },
  {
    src: "../images/holenderki/malaBig5.png",
    w: 466,
    h: 620,
  },
  {
    src: "../images/holenderki/malaBig6.png",
    w: 466,
    h: 620,
  },
  {
    src: "../images/holenderki/malaBig7.png",
    w: 466,
    h: 620,
  },
  {
    src: "../images/holenderki/malaBig8.png",
    w: 466,
    h: 620,
  },
  {
    src: "../images/holenderki/malaBig9.png",
    w: 827,
    h: 620,
  },
];

const photosCaravan = [
  "../images/holenderki/hol1.png",
  "../images/holenderki/hol2.png",
  "../images/holenderki/hol3.png",
  "../images/holenderki/hol4.png",
  "../images/holenderki/hol5.png",
  "../images/holenderki/hol6.png",
  "../images/holenderki/hol7.png",
  "../images/holenderki/hol8.png",
  "../images/holenderki/hol9.png",
  "../images/holenderki/hol10.png",
  "../images/holenderki/hol11.png",
  "../images/holenderki/hol12.png",
  "../images/holenderki/duzaSmall1.png",
  "../images/holenderki/duzaSmall2.png",
  "../images/holenderki/duzaSmall3.png",
  "../images/holenderki/duzaSmall4.png",
  "../images/holenderki/duzaSmall5.png",
  "../images/holenderki/duzaSmall6.png",
  "../images/holenderki/duzaSmall7.png",
  "../images/holenderki/duzaSmall8.png",
  "../images/holenderki/duzaSmall9.png",
  "../images/holenderki/malaSmall1.png",
  "../images/holenderki/malaSmall2.png",
  "../images/holenderki/malaSmall3.png",
  "../images/holenderki/malaSmall4.png",
  "../images/holenderki/malaSmall5.png",
  "../images/holenderki/malaSmall6.png",
  "../images/holenderki/malaSmall7.png",
  "../images/holenderki/malaSmall8.png",
  "../images/holenderki/malaSmall9.png",
];

const caravanSection = document.querySelector(".caravans");
const createCarvanIMG = photosCaravan.map((photoCaravan, index) => {
  const image = document.createElement("img");
  image.onclick = () => openPhotoSwipe(itemsCaravan, index);
  image.src = photoCaravan.toString();
  caravanSection.appendChild(image);
});
