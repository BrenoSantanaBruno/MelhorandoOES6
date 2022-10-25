import * as ELEMENTS from './elements.js';
import {Http} from './http.js';
import {WEATHER_DATA, WEATHER_PROXY_HANDLER} from './WEATHER_DATA.js';

const APP_ID = '';

ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener('click', searchWeather);

function searchWeather() {
    const CITY_NAME = ELEMENTS.ELEMENT_SEARCHED_CITY.value.trim();
    if (CITY_NAME.length == 0) {
        return alert('Please enter a City Name');
    }
    const URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + CITY_NAME + '&units=metric&appid=' + APP_ID;

    Http.fetchData(URL)
        .then(function(responseData) {
            const WEATHER_DATA = new WeatherData(CITY_NAME, responseData.weather[0].description.toUpperCase());
            WEATHER_DATA.temperature = responseData.main.temp;

            const WEATHER_PROXY = new Proxy(WEATHER_DATA, WEATHER_PROXY_HANDLER);
            WEATHER_PROXY.temperature = responseData.main.temp;

            updateWeather(WEATHER_PROXY);
        })
        .catch(error => alert(error));
}

function updateWeather(WEATHER_DATA) {
    ELEMENTS.ELEMENT_WEATHER_CITY.textContent = WEATHER_DATA.cityName;
    ELEMENTS.ELEMENT_WEATHER_DESCRIPTION.textContent = WEATHER_DATA.description;
    ELEMENTS.ELEMENT_WEATHER_TEMPERATURE.textContent = WEATHER_DATA.temperature;

    ELEMENTS.ELEMENT_WEATHER_BOX.style.display = 'block';
    }
}