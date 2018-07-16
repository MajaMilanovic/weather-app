import React from "react";
import { DayCard } from "./DayCard";
import { filterForecastArrayByDays } from "../utils/helpers";

const DayList = (props) => {
    const { weather } = props;

    const weatherData = filterForecastArrayByDays(weather);

    const getForecastList = (obj) => {

        let arrayOfDays = Object.entries(obj);
        return arrayOfDays;

    }


    return (
        <ul className="day-list">
            {getForecastList(weatherData).map(element => {
                return <li key={Math.random() * 10000}>
                    <DayCard day={element} />
                </li>
            })}
        </ul>
    )

}

export { DayList };