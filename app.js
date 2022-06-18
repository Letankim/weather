var weatherApp = document.querySelector('.wrapper-app')
var search = document.querySelector('.search-weather');
var country = document.querySelector('.country');
var city = document.querySelector('.city');
var time = document.querySelector('.time');
var temperature = document.querySelector('.temperature');
var shortDesc = document.querySelector('.short-desc');
var visibility = document.querySelector('.visibility span');
var wind = document.querySelector('.wind span');
var sun = document.querySelector('.ams span');
function handleWeather () {
    search.addEventListener('keydown', e=> {
        if (e.keyCode === 13 ) {
            changeWeather(search.value.trim());
        }
    })
}
async function changeWeather(input) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`;
    let data = await fetch(apiUrl).then(res=>res.json());
    let statusWeather = Math.round(data.main.temp);
    city.innerText = data.name;
    country.innerText = data.sys.country;
    time.innerHTML = new Date().toLocaleString();
    temperature.innerText = statusWeather;
    shortDesc.innerText = data.weather[0].main;
    visibility.innerText = data.visibility + "(m)";
    wind.innerText = data.wind.speed + "(m/s)";
    sun.innerText = data.main.humidity + "(%)";
    if(statusWeather < 20) {
        document.body.className = 'cold';
    } else {
        document.body.className = 'hot';
    }
}
handleWeather();
changeWeather('can tho');