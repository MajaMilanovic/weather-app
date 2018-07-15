import {
    url
} from "../utils/endpoints";

class FiveDaysForecast {
    getForecastByID = (id) => {
        return fetch(`${url.baseURL}${url.forecast}?id=${id}&units=metric${url.key1}`)
            .then(response => response.json())
            .then(forecastData => forecastData)
            .catch(error => console.log(error))
    }
}

export const fiveDaysForecast = new FiveDaysForecast();