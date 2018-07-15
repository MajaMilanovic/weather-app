import {
    Weather
} from "./Weather";

class WeatherDetails extends Weather {
    constructor(item) {
        super(item);
        this.description = item.weather[0].description;
        this.visibility = item.visibility / 1000;
        this.windDegree = item.wind.deg;
        this.clouds = item.clouds.all;
        this.sunrise = (new Date(item.sys.sunrise * 1000).toLocaleTimeString('en-US', {
            hour12: false,
        })).slice(0, 5);
        this.sunset = (new Date(item.sys.sunset * 1000).toLocaleTimeString('en-US', {
            hour12: false,
        })).slice(0, 5);
        this.cityName = item.name;
        this.country = item.sys.country;
        this.id = item.id;
    }
}

export {
    WeatherDetails
};