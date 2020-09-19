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