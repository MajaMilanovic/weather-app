import React, { Component } from "react";
import "../css/defaultPage.css";
import SearchCity from "./SearchCity";
import { cityDayForecast } from "../service/cityDayForecast";
import { WeatherDetails } from "../entities/WeatherDetails";
// import { withRouter } from "react-router-dom";

class DefaultPage extends Component {
    constructor() {
        super();
        // this.state = {
        //     currentWeather: false
        // }
    }

    componentDidMount = () => {
        navigator.geolocation.getCurrentPosition(position => {
            // this.setState((prevState, currentProps) => {
            //     return { ...prevState, currentWeather: true }
            // })
            cityDayForecast.getForecastByCityCoords(position.coords.latitude, position.coords.longitude)
                .then(weather => {
                    const currentWeather = new WeatherDetails(weather);
                    sessionStorage.setItem("currentWeather", JSON.stringify(currentWeather));
                })

        }, error => {
            console.log("Location not allowed.");
            // this.setState((prevState, currentProps) => {
            //     return { ...prevState, currentWeather: false }
            // })
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

// export default withRouter(DefaultPage);
export default DefaultPage;