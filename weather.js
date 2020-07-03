const weather = document.querySelector(".js-weather");
const API_KEY = "403100aca3d8e840784b2654413a7adc";
const COORDS = 'coords';

function getWeater(lat, lon){
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(
      function(response){
        return response.json();
      }
    ).then(
      function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = "fsfsf";
        weather.innerText = `${temperature} @ ${place}`;
      }
    )
}

function saveCoords(coordsObj){
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));

}

function handleGeoSucces(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude: longitude
  }
  saveCoords(coordsObj);
  getWeater(latitude,longitude);
}

function handleGeoError(){
  console.log("Can't log geo location");
}

function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
  const loadedCoords = localStorage.getItem(COORDS);
  if(loadedCoords === null){
    askForCoords();
  }else{
    const parsedCoords = JSON.parse(loadedCoords);
    getWeater(parsedCoords.latitude, parsedCoords.longitude);
  }

}

function init(){
  loadCoords();
}
init();