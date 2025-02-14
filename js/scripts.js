
//VAR

const apiKey = 'c34e25d5845fd4bd4b856f6d59ce0e3e';

const cityInput = document.getElementById("city-input");

const search =document.getElementById("search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const humidityElement = document. querySelector("#humidity span")
const windElement = document.querySelector("#wind span");

const weatherContainer = document.querySelector("#weather-data");


// FUNÇÃO

const getWeather = async (city) =>{

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch(apiUrl)
    const data = await res.json()

    return data;
}

async function showWeatherData (city){
    const data = await getWeather(city);

    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    countryElement.setAttribute("src", `https://flagsapi.com/${data.sys.country}/flat/64`);
    humidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed}km/h`;

    weatherContainer.classList.remove("hide");
};


// EVENTOS

search.addEventListener("click", (e) =>{

    e.preventDefault();

    const city = cityInput.value;

    showWeatherData(city);



});

cityInput.addEventListener("keyup", (e) =>{
    if(e.code === "Enter"){
        const city = e.target.value;

        showWeatherData(city);
    }
});