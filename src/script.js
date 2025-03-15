const city = document.querySelector(".currentCity");
const temperature = document.querySelector("#temperature");
const condition = document.querySelector("#condition");
const wind = document.querySelector("#wind");
let queryInput = document.querySelector("#city");
let apiKey = "40294d271t694ab0b8549a4358o9f5f1";



function enterCity(event) {
  event.preventDefault();
  let cityName = queryInput.value;
  console.log(cityName);
let apiUrl =` https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey} `;
   

  fetch(apiUrl) 

    .then((response) => {
     if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
       console.log(data);
      city.innerHTML = `${data.city}`;
       image.src = data.condition.icon_url;
    temperature.innerHTML = `${data.temperature.current} °C`;
      condition.innerHTML = ` Right now: ${data.condition.description}`;
      wind.innerHTML = `Wind: ${data.wind.speed} m/s`;
     
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}

const form = document.querySelector("#form-weather");
form.addEventListener("submit", enterCity);





const background = document.querySelector("#container");
const body = document.querySelector("#body");
const button = document.querySelector("#buttonDarkTheme");

let isDarkTheme = false; 

function toggleTheme(event) {
  event.preventDefault();

  if (isDarkTheme) {
    background.style.backgroundImage =
      "url('https://i.postimg.cc/BQ5m3QzS/teemu-paananen-OOE4x-An-Bh-Ko-unsplash-1.jpg ')"; 
    
    body.style.backgroundImage =
      "url('https://i.postimg.cc/t4KQ3q66/marek-szturc-4-CDdd1-RCt6w-unsplash.jpg')"; 
  body.style.backgroundSize = "cover";
  body.style.backgroundRepeat = "no-repeat";
    button.textContent = "Dark Theme"; 
  } else {
    background.style.backgroundImage =
      "url('https://i.postimg.cc/C1sknzpJ/todd-trapani-6v-XQr-XVFXj-I-unsplash.jpg')";
    body.style.backgroundImage =
      "url('https://i.postimg.cc/wTyMS74P/adrien-olichon-u34-JNBOIQ10-unsplash.jpg')";
    button.textContent = "Switch Theme"; 
  }

  isDarkTheme = !isDarkTheme; 
}

button.addEventListener("click", toggleTheme);


 



