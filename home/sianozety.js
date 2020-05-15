
initMap = () => {
  const location = {
    lat: 54.209220,
    lng: 15.733520,
  }
  const Map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: location,
  })
}
const xSign = document.querySelector(".close")
const accept = document.querySelector(".accept")
const cookie = document.querySelector(".cookie")
const rodo = document.querySelector('.rodo')
xSign.addEventListener('click', ()=>{cookie.classList.add('hover')})
accept.addEventListener('click', ()=>{rodo.classList.add('hover')})