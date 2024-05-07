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

//units for measurements
const unit = "units=imperial"; //converts APIs weather to Fahrenheit from Kelvin
const API_KEY = "38fa05b5edfdffe600b9a1faf86df7a1";
// Define the event listener function
function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form from firing off on refresh

    // Get the input value
    const inputVal = cityInput.value.trim(); //trim removes extra spaces

    // Call the fetchWeatherData function
    async function fetchWeatherData() {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${inputVal}`);
        const data = await response.json();
        return data;
    }





// Add event listener to the form
form.addEventListener("submit", handleSubmit);

// Define the fetchWeatherData function
fetchWeatherData()
    .then((data) => {
        console.log(data.list[0].weather[0].icon)
        data;
        temperature.textContent = Math.floor(data.list[0].maintemp) + "°F";
        summary.tectContent = data.list[0].weather[0].description;
        localStorage.textContent = data.city.name + "," + data.city.country;
        let icon1 = data.list[0].weather[0].icon;
        FeelsLike.textContent = "Feels like : " + data.list[0].main.feels_like
        maxTemp.textContent = "Max : " + data.list[0].main.temp_max
        minTemp.texContent = "Min : " + data.list[0].main.temp_min
        pressure.textContent = "Pressure : " + data.list[0].main.pressure
        humidity.textContent = "Humidity : " + data.list[0].main.humidity

        icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon1}.png" style=''/>`;
    })
    .catch(() => {
        // Handle any errors by displaying error message
        console.error('Error fetching weather data, please try again', error);
        message.textContent = " ";
        form.reset();
        CityInput.focus()
        //This will reload
    })
    }


    
    // .catch(error => {
    //     // Handle any errors by displaying error message
    //     console.error('Error fetching weather data, please try again', error);
    //     message.textContent = " ";
    //     form.reset();
    //     CityInput.focus()
    //     //This will reload
    // });

// try {
//     // Make the API request
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${inputVal}&appid=a5c1f970e0d42839c50243aa43263f94&${unit}`);
//     const data = await response.json(); // Parse the JSON response
//     return data; // Return the data
// }