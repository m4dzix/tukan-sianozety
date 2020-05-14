
// const foto = document.querySelector('header')

// let active = 1
// const changeSlide = ()=>
// {
//   if(active === 3){
//     active = 0;
//   }
//   active++;
//   foto.style.backgroundImage = `url('/images/slider${active}.jpg')`;
   
// }

// setInterval(changeSlide, 3000)

const slideList = ['/images/slider1.jpg', '/images/slider2.jpg', '/images/slider3.jpg'] 
const slider = document.querySelector('header')
let active = 0
const changeSlide = ()=>{
  active++
  if(active === slideList.length){
    active = 0
  }
slider.style.backgroundImage = `url(${slideList[active]})`
}
setInterval(changeSlide, 7000)

