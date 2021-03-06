const api = {
  key: "97b6bf91e187c1f39acebdf088622bbd",
  base: "pro.openweathermap.org/data/2.5/forecast/hourly"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode === 13 || 14) {
    getResults(searchbox.value);
    console.log('dfd', searchbox.value)
  }
}

function getResults (query) {
  // pro.openweathermap.org/data/2.5/forecast/hourly?q={city name}&appid={your api key}
  // fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
  fetch(`${api.base}?q=${query}&APPID=${api.key}`)
    .then(weather => {
      console.log('dfd', weather.json())
      return weather.json();
    }).then(displayResults);
}

function displayResults (weather) {
  let city = document.querySelector('.location .city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector('.location .date');
  date.innerText = dateBuilder(now);

  let temp = document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

  let weather_el = document.querySelector('.current .weather');
  weather_el.innerText = weather.weather[0].main;

  let hilow = document.querySelector('.hi-low');
  hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
}

function dateBuilder (d) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}