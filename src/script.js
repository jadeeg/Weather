let city = document.querySelector("#currentCity");
const temperature = document.querySelector("#temperature");
const condition = document.querySelector("#condition");
const wind = document.querySelector("#wind");
let key = "40294d271t694ab0b8549a4358o9f5f1";

function enterCity(event) {
  event.preventDefault();
  let input = document.querySelector("#city");
  console.log(input.value);
  let query = input.value;
  const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${query}&key=${key}`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      city.innerHTML = `${data.city}, ${data.country}`;
      temperature.innerHTML = `${data.daily[0].temperature.day} °C `;
      condition.innerHTML = data.daily[0].condition.description;
      wind.innerHTML = `Wind: ${data.daily[0].wind.speed} m/s`;
    })
    .catch((error) => {
      // Handle errors (e.g., city not found, network issues)
      console.error("Error fetching weather data:", error);
      city.innerHTML = "City not found or API error";
      temperature.innerHTML = "";
      condition.innerHTML = "";
      wind.innerHTML = "";
    });
  }

const form = document.querySelector("#form-weather");
form.addEventListener("submit", enterCity);
