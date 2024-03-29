{
  const tepmeratureValue = document.querySelector(".weatcherValue");
  tepmeratureValue.style.color = "var(--font)";
  fetch(
    "http://dataservice.accuweather.com/currentconditions/v1/2691176?apikey=kX0ZFeIIqgMOmyviHNe2A0Fy0gSmk2MM&language=pl-pl",
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((result) => {
      if (result[0].Temperature.Metric.UnitType < 18) {
        tepmeratureValue.innerHTML = `<span class="icon">🌤️</span>${result[0].Temperature.Metric.Value}°C`;
      } else {
        tepmeratureValue.innerHTML = `<span class="icon">☀️</span>${result[0].Temperature.Metric.Value}°C`;
      }
    })

    .catch((error) => {
      console.error("Error:", error);
      tepmeratureValue.innerText = "";
    });
}
