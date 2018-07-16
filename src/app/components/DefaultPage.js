import React, { Component } from "react";
import "../css/defaultPage.css";
import SearchCity from "./SearchCity";
import { cityDayForecast } from "../service/cityDayForecast";
import { WeatherDetails } from "../entities/WeatherDetails";

class DefaultPage extends Component {

    componentDidMount = () => {
        navigator.geolocation.getCurrentPosition(position => {
            cityDayForecast.getForecastByCityCoords(position.coords.latitude, position.coords.longitude)
                .then(weather => {
                    const currentWeather = new WeatherDetails(weather);
                    sessionStorage.setItem("currentWeather", JSON.stringify(currentWeather));
                })

        }, error => {
            console.log("Location not allowed.");
        })
    }


    render() {
        return (
            <div className="default-page">
                < SearchCity />
            </div>
        );
    }
};

export default DefaultPage;