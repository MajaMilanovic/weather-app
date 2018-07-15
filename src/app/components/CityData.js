import React from "react";

const CityData = (props) => {
    const { city } = props;

    return (
        <div className="city-card">
            <h1 className="city-name" id="page-title">{city.name}, {city.country}</h1>
            <p>Weather forecast for five days</p>
        </div>
    )
}

export { CityData };