const div = document.querySelector('.show-foto')
const leftArrow = document.querySelector('.arrow-left')
const rightArrow= document.querySelector('.arrow-right')
const xSign= document.querySelector('.close')
const body= document.querySelector('body')
const photo = document.querySelector('.hauses-photo1')
const photo1 = document.querySelector('.hauses-photo2')
const photo2= document.querySelector('.hauses-photo3')
const photo3= document.querySelector('.hauses-photo4')
const colors= ['blue', 'pink', 'red', 'violet','cadetblue'];
let active = 0;

photo.style.cursor = "pointer"
photo1.style.cursor = "pointer"
photo2.style.cursor = "pointer"
photo3.style.cursor = "pointer"
// photo.forEach(addEventListener('click', ()=>{
//   div.classList.remove("hide")
// }))


  photo.addEventListener('click', ()=>{ div.classList.remove("hide") 
  div.style.backgroundColor = "orange"
  })
  photo1.addEventListener('click', ()=>{ div.classList.remove("hide")  
  })
  photo2.addEventListener('click', ()=>{ div.classList.remove("hide")  
  })
  photo3.addEventListener('click', ()=>{ div.classList.remove("hide")  
  })








const changeSlide = (e)=>{
  console.log(e)
  if (e.target === rightArrow || leftArrow){
    e.target === rightArrow ? active++ : active --
    
    
    if(active === colors.length)
    {active = 0}
    
    else if(active < 0)
    {active = colors.length-1 }
    div.style.backgroundColor = colors[active]
    console.log(active)
  }}
  
  rightArrow.addEventListener('click', changeSlide)
  leftArrow.addEventListener('click', changeSlide)
  
  xSign.addEventListener('click', ()=>{div.classList.add("hide") });
































  // rightArrow.addEventListener('click', ()=>{
  
  //   div.style.backgroundColor = colors[active++];
  //   active++
  //   if(active === colors.length)
  //   {active = 0,
  //     div.style.backgroundColor = colors[active]}
  //     else{div.style.backgroundColor = colors[active] }
  //     console.log(active);
    
  // });
  
  
  // leftArrow.addEventListener('click', ()=>{
  //   div.style.backgroundColor = colors[active--]
  //   if(active < 0){active = colors.length-1, 
  //     div.style.backgroundColor = colors[active]
  //    }
  //   else {div.style.backgroundColor = colors[active]}
  //   active--
  //   console.log(active)
  // })