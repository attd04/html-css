
document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "afd006bcb93031c6974b542af917d12e";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Vilnius,Lithuania&appid=" + apiKey;

    // fetch data from API
    const fetchWeatherData = async () => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            // update HTML with data
            updateWeatherDisplay(data);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    const updateWeatherDisplay = (data) => {
        const weatherIcon = document.querySelector(".weather-icon");
        const temperatureElement = document.querySelector(".temperature");
        const locationElement = document.querySelector(".location");
    
        // temperature from k to c
        const temperatureCelsius = Math.round(data.main.temp - 273.15);
    
        // update HTML
        weatherIcon.src = https://openweathermap.org/img/w/${data.weather[0].icon}.png;
        temperatureElement.textContent = ${temperatureCelsius}°C;
        locationElement.textContent = ${data.name}, ${data.sys.country};
    };
    
    // call function
    fetchWeatherData();
});



.location {
  font-size: 18px;
  color: black;
}
