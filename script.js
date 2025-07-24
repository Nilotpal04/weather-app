const searchBox = document.querySelector("#city-input")
const searchBtn = document.querySelector("button")

const cityName = document.querySelector("#city-name");
const temperature = document.querySelector("#temperature");
const humidity = document.querySelector("#humidity");
const windSpeed = document.querySelector("#wind-speed");
const weatherIcon = document.querySelector("#weather-icon");
const weatherCondition = document.querySelector("#weather-condition");

const apiKey = "d23ad97dfb6c8cbf1cdca247b131e983";

function fetchWeather() {
    const city = searchBox.value.trim();
    if (city === ""){
        alert("Please enter a city name.");
        return;
    }
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
   .then(response => {
    if (!response.ok){
        throw new Error("City not found");
    }
    return response.json();
   })
   .then(data => {
     console.log("Weather Data", data);

     cityName.textContent = data.name;
     weatherCondition.textContent = data.weather[0].main;
     temperature.textContent = `${data.main.temp}°C`;
     humidity.textContent = `${data.main.humidity}%`;
     windSpeed.textContent = `${data.wind.speed}Km/h`;

     const condition = data.weather[0].main.toLowerCase();

     const iconMap = {
        clear: "sun.svg",
        clouds: "cloud.svg",
        rain: "cloud-rain.svg",
        thunderstorm: "storm.svg",
        snow: "snow.svg",
        fog: "fog.svg"
     };
     const iconFile = iconMap[condition] || "default.svg";

     weatherIcon.src = `assets/${iconFile}`;
   })
   .catch(error => {
    console.log("Error fetching:", error);
    alert("Invalid city name! Please enter valid city.")
  });
};

searchBtn.addEventListener("click", fetchWeather);

searchBox.addEventListener("keydown", (event) => {
  if(event.key === "Enter"){
    fetchWeather();
  }
});