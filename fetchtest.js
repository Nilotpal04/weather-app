const city = "Delhi";
const apiKey = "d23ad97dfb6c8cbf1cdca247b131e983";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log("Data received using .then():", data);
  })
  .catch(error => {
    console.log("Error fetching:", error);
  });
