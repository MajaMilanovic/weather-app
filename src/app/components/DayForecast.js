import React, { Component, Fragment } from "react";
import "../css/dayForecast.css";
import "../css/hourlyForecast.css";
import { HourlyForecast } from "./HourlyForecast";
import { url } from "../utils/endpoints";
import { getMonthName, ordinalNumbers } from "../utils/helpers";

class DayForecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hourlyView: false
        }
    }

    goHourly = () => {
        this.setState((prevState, currentProps) => {
            return { ...prevState, hourlyView: !prevState.hourlyView };
        })
    }

    goDaily = () => {
        return this.setState({
            hourlyView: false
        });
    }

    goSearch = () => {
        const { goBack } = this.props;
        goBack();
    }

    render() {
        const { city } = this.props;
        const { hourlyView } = this.state;

        const month = getMonthName(city.month);
        const dayNum = ordinalNumbers(city.dayDate);

        return (
            <Fragment>
                {
                    (!hourlyView)
                        ? <div className="daily-forecast-holder">
                            <div className="daily-header">
                                <h1>{`${city.cityName}, ${city.country}`}<img src={`${url.icon}${city.icon}.png`} alt="icon" /></h1>
                                <p className="daily-title">{`${month}, ${dayNum}`}</p>
                                <p className="daily-time">{`🕐 time: ${city.dayTime}`}</p>
                                <h1 id="daily-temp">{`${parseInt(city.temp)}°`}</h1>
                            </div>
                            <ul className="daily-content">
                                <li>Humidity: {city.humidity}%</li>
                                <li>Pressure: {city.pressure} mbar</li>
                                <li>Wind speed: {city.wind} m/s</li>
                                {
                                    (!city.visibility)
                                        ? ""
                                        : <li>Visibility: {city.visibility}km</li>
                                }

                                {
                                    (!city.clouds.all)
                                        ? ""
                                        : <li>Clouds: {city.clouds.all}</li>
                                }
                            </ul>
                            <ul className="daily-content-sun-stages">
                                <li>{`Sunrise:${city.sunrise}`}
                                    <img src="https://cdn2.iconfinder.com/data/icons/crystalproject/crystal_project_256x256/apps/kweather.png" alt="sunrise" />
                                </li>
                                <li>{`Sunset:${city.sunset}`}
                                    <img src="https://cdn2.iconfinder.com/data/icons/halloween-icon-set/512/half_moon__.png" alt="sunset" /></li>
                            </ul>
                            <p className="daily-pointer-to-hours" onClick={this.goHourly}>
                                {`See full forecast >>`}
                            </p>
                            <p className="daily-pointer-to-hours" onClick={this.goSearch}>
                                {`<< Back to Search view`}
                            </p>
                        </div>
                        : <HourlyForecast id={city.id} goDaily={this.goDaily} />
                }
            </Fragment>
        )

    }

}

export { DayForecast };

