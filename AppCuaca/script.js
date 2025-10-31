const apiKey = "707719f372018774f501eca9936f6e3e";

const searchBtn = document.getElementById('searchBtn')
const cityInput = document.getElementById('cityInput')

searchBtn.addEventListener('click', getWeather);

async function getWeather() {
    const city = cityInput.value.trim();
    if (!city) return alert('Silahkan masukkan nama kota.')

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=id`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Kota tidak ditemukan.')
        
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeather(data) {
    const cityName = document.getElementById('cityName')
    const temperature = document.getElementById('temperature')
    const description = document.getElementById('description')
    const windSpeed = document.getElementById('windSpeed')
    const weatherIcon = document.getElementById('weatherIcon')

    cityName.textContent = `${data.name}, ${data.sys.country}`;
    temperature.textContent = `Suhu: ${data.main.temp}*C`;
    description.textContent = `Cuaca: ${data.weather[0].description}`;
    windSpeed.textContent = `Angin: ${data.wind.speed} m/s`;
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}