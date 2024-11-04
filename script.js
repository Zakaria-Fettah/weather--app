// const apiKey = "7a7c51949c0da01dcb99c0cc3d53fe3d";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");
// const weatherIcon = document.querySelector(".weather-icon");
// async function checkWeather(city){
//     const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
//     var data = await response.json();


//     document.querySelector(".city").innerHTML = data.name;
//     document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + `°C`;
//     document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
//     document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;


//     if(data.weather[0].main == "Clouds"){
// weatherIcon.src = "clouds.png";
//     }
//     else if(data.weather[0].main == "clear"){
//         weatherIcon.src = "clear.png";
// }
// else if (data.weather[0].main == "rain"){
//     weatherIcon.src = "rain.png";
// }
// else if (data.weather[0].main == "drizzle"){
//     weatherIcon.src = "drizzle.png";
// }
// else if (data.weather[0].main == "mist"){
//     weatherIcon.src = "mist.png";
// }
// }

// document.querySelector(".weather").style.display = "block";

// searchBtn.addEventListener("click" , ()=>{
//     checkWeather(searchBox.value);
// })
// checkWeather();



const apiKey = "7a7c51949c0da01dcb99c0cc3d53fe3d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) { // Default city as Paris
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display= "block";
        document.querySelector(".weather").style.display= "none";
    }
    var data = await response.json();

    if (data.cod === 200) { // Check for valid response
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + `°C`;
        document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
        document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;

        if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "clouds.png";
        } else if (data.weather[0].main === "Clear") {
            weatherIcon.src = "clear.png";
        } else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "rain.png";
        } else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = "drizzle.png";
        } else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "mist.png";
        }
        
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    } 
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

checkWeather(); // Initial call with default city
