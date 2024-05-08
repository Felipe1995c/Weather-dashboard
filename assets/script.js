//Variables
let lon;
let lat;
let form = document.querySelector('form');
let message = document.querySelector('.msg');
let temperature = document.querySelector('.temp');
let summary = document.querySelector('.summary');
let location = document.querySelector('.location');
let error = document.querySelector('.msg');
let icon = document.querySelector('.icon');
let FeelsLike = document.querySelector('.Feels_like');
let maxTemp = document.querySelector('.max_temp');
let minTemp = document.querySelector('.min_temp');
let pressure = document.querySelector('.wrapper-pressure');
let humidity = document.querySelector('wrapper-humidity');
let now = document.querySelector('.wrapper-hour-now');
let cityInput = document.querySelector('#cityInput');
let searchGobtn = document.querySelector('#search-button');
// const cityInput = document.querySelector("#cityInput");
// const searchButton = document.querySelector("#search-button");

//units for measurements
const unit = "units=imperial"; //converts APIs weather to Fahrenheit from Kelvin
const API_KEY = "38fa05b5edfdffe600b9a1faf86df7a1";



//trim removes extra spaces


const cityName = cityInput.value;

// Add event listener to the form
form.addEventListener("click", (e) => {
    // Call the fetchWeatherData function
    const getWeatherDetails = (cityName, lat, lon) => {
        const WEATHER_API = `http://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt={cnt}&appid=${API_KEY}`;
        fetch(WEATHER_API).then(res => res.json()).then(data => {
            console.log(cityName);
        }).catch(() => {
            alert("Error with fetching weather forecast");

        });
    };
    async function fetchWeatherData() {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=a5c1f970e0d42839c50243aa43263f94&${unit}`);
        const data = await res.json();
        return data;
    }

    const getCityCoordinates = () => {
        const cityName = cityInput.value.trim(); // Get the input value
        if (!cityName) return;
        console.log(cityName);
        fetch(geoCodes).then(res => res.json()).then(data => {
            if (!data.length) return alert(`No coordinates found for ${cityName}`);
            const { name, lat, lon } = data[0];
            getWeatherDetails(name, lat, lon);
        }).catch(() => {
            alert("Try again");
        })
    }


    message.textContent = " ";
    form.reset();
    cityInput.focus()
});



