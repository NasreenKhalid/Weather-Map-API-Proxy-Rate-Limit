const weatherDisplay = document.getElementById('weather');
const weatherForm = document.getElementById('form')
const cityInput = document.querySelector('#city')

//const city=cityInput.value
console.log("hello")

//Fetch weather data
const fetchWeather = async (city) => {

    console.log(city)
//const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c3ced497d87fe48e4beb953b02da8b21`
const url = `/api?q=${city}`
//c3ced497d87fe48e4beb953b02da8b21

const res=  await fetch (url);
const data = await res.json();

if(data.cod === 401){
    alert('Invalid api key')
    return
}

const displayData = {
    city: data.name,
    temp: kelvinToFahren(data.main.temp)
}

addWeatherToDom(displayData)

}

//display weather

const addWeatherToDom = (data) => {
    weatherDisplay.innerHTML = `
    <h1>Weather in ${data.city}</h1>
    <h2>${(data.temp)} &deg;C</h2>
    `;

    cityInput.value = '';
}

// Convert Kelvin to Fahrenheit
const kelvinToFahren = (temp) => {
    return Math.ceil(((temp - 273.15) * 9) / 5)
  }

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (cityInput.value === '') {
        alert('Please enter a city')
      } else {
        fetchWeather(cityInput.value)
      }

})

// Initial fetch
fetchWeather('Miami')

