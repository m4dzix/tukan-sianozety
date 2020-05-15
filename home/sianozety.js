
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
const cookie = document.querySelector(".cookie")
xSign.addEventListener('click', ()=>{cookie.classList.add('hover')})