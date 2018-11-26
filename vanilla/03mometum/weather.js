const weather = document.querySelector('.js-weather');
const API_KEY = '432a31ce70a2c8df6124ae7cd7ee37b1';
const COORDS = 'coords';

const getWeather = (lat, lon) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  ).then( (res) => {
    return res.json();
  }).then( (json) => {
    const temperature = json.main.temp;
    const place = json.name;
    weather.innerText = `온도: ${temperature} @ ${place}`
  }).catch(e => {
    console.log(e);
  })
}

const saveCoords = (coordObj) => {
  localStorage.setItem(COORDS, JSON.stringify(coordObj));
};

const handleGeoSuccess = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj =  {
    latitude,
    longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
};

const handleGeoError = () => {
  console.log('Can not access geo location');
}

const askForCoords = () => {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
};

const loadCoords = () => {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    // getWeather
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
};

const weatehrInit = () => {
  loadCoords();
}

weatehrInit();