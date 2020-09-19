
const xSign = document.querySelector(".js-close")
const accept = document.querySelector(".js-accept")
const cookie = document.querySelector(".cookie")
const rodo = document.querySelector(".rodo")
xSign.addEventListener('click', ()=>{cookie.classList.add('hover')})
accept.addEventListener('click', ()=>{rodo.classList.add('hover')})
const burger = document.querySelector('.burger .fas')
const nav = document.querySelector('nav')
const body = document.querySelector('body')



document.querySelector('.fas').addEventListener('click', () => {
  document.querySelector('.popup').classList.add('close')
  cookie.classList.remove('hover')
  rodo.classList.remove('hover')
})

xSign.addEventListener('click', () => {
  cookie.classList.add('close')
})
accept.addEventListener('click', () => {
  rodo.classList.add('hover'), cookie.style.bottom = 2 + '%'
})
burger.addEventListener('click', () => {
  nav.classList.toggle('show')
})