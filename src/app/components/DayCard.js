import React, { Fragment } from "react";
import { url } from "../utils/endpoints";
import { Link } from "react-router-dom";
import { ordinalNumbers, getMonthName } from "../utils/helpers";

const DayCard = (props) => {
    const { day } = props;
    const month = getMonthName(day[1][0].month);
    const dayNum = ordinalNumbers(day[1][0].dayDate);

    return (
        <Fragment>
            <h1 className="hourly-forecast-day-title">{`${day[0]}, ${month} ${dayNum}`}</h1>
            <div className="">
                {day[1].map(forecast => {
                    return (
                        <div className="day-card" key={`${forecast.pressure}${Math.random() * 10000}`}>
                            <p>🕐 time: {forecast.dayTime}</p>
                            <h1>{parseInt(forecast.temp)}°</h1><img src={`${url.icon}${forecast.icon}.png`} alt="icon" />
                            <ul className="day-card-content">
                                <li>Humidity: {forecast.humidity}%</li>
                                <li>Pressure: {forecast.pressure} mbar</li>
                                <li>Wind speed: {forecast.wind} m/s</li>
                            </ul>
                        </div>
                    )
                })}
            </div>
        </Fragment>

    )
}

export { DayCard };