const apiKey = "80f5ea90a6f9ce060f7047cafff31563";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".whether-icon");

async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".whether").style.display = "none";
    }
    else{
        var data = await response.json();
        console.log(data); // Add this line to verify data fetching
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "rain.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "mist.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "drizzle.png";
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "snow.png";
        }
        document.querySelector(".whether").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});
