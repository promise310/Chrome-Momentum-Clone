const city = document.querySelector("#weather span:first-child ");
const weather = document.querySelector("#weather span:last-child ");

const API_KEY = "17ee502d52187dd0afce354f31851a90";


function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    console.log(url);
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      //const ftemp = (data.main.ctemp * 9 / 5) +32;
      weather.innerText = `${data.weather[0].main}  ${data.main.temp}°C`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.")
}



navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);