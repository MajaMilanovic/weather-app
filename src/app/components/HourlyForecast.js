import React, { Component } from "react";
import "../css/hourlyForecast.css";
import { CityData } from "./CityData";
import { DayList } from "./DayList";
import { storageService } from "../service/storage";
import { fiveDaysForecast } from "../service/fiveDaysForecast";
import { Weather } from "../entities/Weather";
import { City } from "../entities/City";

class HourlyForecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: [],
            city: null
        }
    }


    componentDidMount() {
        const { id } = this.props;
        fiveDaysForecast.getForecastByID(id)
            .then(forecastData => {
                const city = new City(forecastData.city);
                const weather = forecastData.list.map(item => {
                    return new Weather(item);
                })

                this.setState({
                    weather,
                    city
                })
            })
    }

    goBack = () => {
        const { goDaily } = this.props;
        goDaily();
    }

    render() {
        const { city, weather } = this.state;
        return (
            (!city && weather.length === 0)
                ? <p className="loader-item">{`Loading...`}</p>
                : <div className="background">
                    <div className="container">
                        <CityData city={city} />
                        <p onClick={this.goBack} className="back-link-pointer">{`<< Back to Daily forecast`}</p>
                        <DayList weather={weather} />
                        <div className="goUpPage" ><a href="#page-title"></a></div>
                    </div>
                </div>
        )
    }
}

export { HourlyForecast };