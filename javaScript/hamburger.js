
const burger = document.querySelector('.burger .fas')
const nav = document.querySelector('nav')
const body = document.querySelector('body')


burger.addEventListener('click', () => {
  nav.classList.toggle('show')
})