const API_KEY = "6849ddfc3a96ddfc6d9b536c755b2ce6";

const weatherIcon = document.querySelector(".weather__icon");
const temp = document.querySelector(".weather__temp span");
const weatherDescription = document.querySelector(
  ".weather__pannel__description span"
);
const city = document.querySelector(".weather__pannel__city span");
const locationIcon = document.querySelector(".weather__pannel__city i");
const skate = document.querySelector(".weather__pannel__skate span");
const smallIcon = document.querySelector(".weather__icon i");
const bigIcon = document.querySelector(".weather__pannel__icon i");

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherData = data.weather[0].main;
      const weatherDescriptionData = data.weather[0].description;
      const tempData = Math.floor(data.main.temp);
      const cityData = data.name;
      locationIcon.className = "fas fa-map-marker-alt";

      temp.innerText = `${tempData}°C`;
      weatherDescription.innerText = weatherDescriptionData;
      city.innerText = cityData;
      if (weatherData === "Clear") {
        skate.innerText = '"Perfect day to Skate!"';
      } else if (weatherData === "Clouds") {
        skate.innerText = '"Nice day to Skate"';
      } else if (weatherData === "Drizzle") {
        skate.innerText = '"There will be better days to Skate"';
      } else if (
        weatherData === "Rain" ||
        weatherData === "Snow" ||
        weatherData === "Thunderstorm"
      ) {
        skate.innerText = '"Hope the sky clears tomorrow"';
      } else {
        skate.innerText = '"Not the best day to skate"';
      }
      let icon = null;
      switch (weatherData) {
        case "Clear":
          icon = "fa-sun";
          break;
        case "Clouds":
          icon = "fa-cloud";
          break;
        case "Snow":
          icon = "fa-snowflake";
          break;
        case "Rain":
          icon = "fa-cloud-showers-heavy";
          break;
        case "Drizzle":
          icon = "fa-cloud-rain";
          break;
        case "Thunderstorm":
          icon = "fa-bolt";
          break;
        default:
          icon = "fa-skull";
      }
      smallIcon.classList.add("fas", icon, "fa-lg");
      bigIcon.classList.add("fas", icon, "fa-5x");
    });
}

function onGeoError() {
  alert("Can't find your location!");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
