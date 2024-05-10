//Variables

// const cityInput = document.querySelector("#cityInput");
 const searchGoBtn = document.querySelector("#search-button");
// const cityName = cityInput.value.trim();

//units for measurements
const unit = "units=imperial"; //converts APIs weather to Fahrenheit from Kelvin
const API_KEY = "38fa05b5edfdffe600b9a1faf86df7a1";
searchGoBtn.addEventListener("click", getInfo);

function getInfo() {
    const newName = document.getElementById("cityInput");
    const cityName = document.getElementById("cityName");
    cityName.innerHTML = "--"+newName.value.toUpperCase()+"--"
}

fetch(`https://api.openweathermap.org/data/2.5/forecast?q=london&appid=38fa05b5edfdffe600b9a1faf86df7a1`)
.then(response => response.json())
.then(data => {
    for(i=0; i<5; i++){
        document.getElementById("day" +(i+1)+ "max").innerHTML = ("Max:" + Number((data.list[i].main.temp_max -273.15) * 1.8 + 32).toFixed(1)+ "°");
    }
    for(i=0; i<5; i++){
        document.getElementById("day" +(i+1)+ "min").innerHTML = ("Min:" + Number((data.list[i].main.temp_min -273.15) * 1.8 + 32).toFixed(1)+ "°");
    }
    for (i=0;i<5; i++) {
        document.getElementByClass("weather1").innerHTML = ("Temp:" + Number((data.list[i].main.temp -273.15) * 1.8 + 32).toFixed(1)+ "°");
    }
    for(i=0; i<5; i++){
        document.getElementById("img" +(i+1)).src="https://openweathermap.org/img/wn/" + data.list[i].weather[0].icon+".png";
    }
})
.catch(error => alert ("Something Went Wrong"))










/*
// Add event listener to the form
// Call the fetchWeatherData function
const getCityCoordinates = () => {
   
    if(!cityName) return; //city name returns empty if no city is entered
    const geoCodeApi = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`;

    // Need to fetch the logitude and latitude from API to be able to search up the city
    fetch(geoCodeApi).then(res => res.json()).then(data => {
        if(!data.length) return ("No coordinates found for " +`${cityName}`);
        const { cityName, lat, lon} = data[0];
        console.log(data);
        getWeatherDetails(cityName, lat, lon);
    }).catch(() => {
        alert("Error fetching weather forecast");
        
    });
}
// };
// async function fetchWeatherData() {
//     const res = await fetch(`https://http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`);
//     const data = await res.json();
//     return data;
// }

    */


