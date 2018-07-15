import {
    url
} from "../utils/endpoints";

class CityDayForecast {
    getForecastByCityName = (name) => {
        return fetch(`${url.baseURL}${url.weather}?q=${name}&units=metric&appid=${url.key2}`)
            .then(response => response.json())
            .then(forecastData => forecastData)
    }

    getForecastByCityCoords = (lat, lon) => {
        return fetch(`${url.baseURL}${url.weather}?lat=${lat}&lon=${lon}&units=metric&appid=${url.key3}`)
            .then(response => response.json())
            .then(weather => weather)
    }
}

export const cityDayForecast = new CityDayForecast();