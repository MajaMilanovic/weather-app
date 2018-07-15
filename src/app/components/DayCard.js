import React, { Fragment } from "react";
import { url } from "../utils/endpoints";
import { Link } from "react-router-dom";

const DayCard = (props) => {
    const { day } = props;
    //day is array , first item is string  e.g."Monday"; item 1 is [card1, card2...]
    
    return (
        <h1>hi</h1>
        // <div className="day-card">
        //     <p className="day-card-title">{day.dayDate}</p>
        //     <p>🕐 time: {day.dayTime}</p>
        //     <h1>{parseInt(day.temp)}°</h1><img src={`${url.icon}${day.icon}.png`} alt="icon" />
        //     <ul className="day-card-content">
        //         <li>Humidity: {day.humidity}%</li>
        //         <li>Pressure: {day.pressure} mbar</li>
        //         <li>Wind speed: {day.wind} m/s</li>
        //     </ul>
        //     {/* <p className="day-card-pointer">
        //                 <Link to="/hourly">
        //                     See full forecast ➭
        //                 </Link>
        //             </p> */}
        // </div>

    )
}

export { DayCard };