initMap = () => {
  try {
    const location = {
      lat: 54.20922,
      lng: 15.73352,
    };
    const Map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: location,
    });
  } catch (error) {
    console.error(error);
    const Map = document.getElementById("map");
    Map.innerHTML += "Nie udało się pobrać mapy, przepraszamy";
  }
};
