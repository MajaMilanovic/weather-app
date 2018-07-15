import React, { Component, Fragment } from "react";
import "../css/search.css";
import { cityDayForecast } from "../service/cityDayForecast";
import { WeatherDetails } from "../entities/WeatherDetails";
import { DayForecast } from "./DayForecast";
// import { withRouter } from "react-router-dom";

class SearchCity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: "",
            city: null,
            currentCity: (sessionStorage.getItem("currentWeather")) ? true : false
        }
    }
    getSearchValue = (e) => {
        let searchValue = e.target.value;
        this.setState({
            searchValue
        });
    };

    startSearch = (e) => {
        if (e.key === "Enter") {
            let searchValue = e.target.value;
            cityDayForecast.getForecastByCityName(searchValue)
                .then(forecast => {
                    const city = new WeatherDetails(forecast);
                    this.setState((previousState, currentProps) => {
                        return { ...previousState, city };
                    })
                })
                .catch(error => {
                    this.setState({
                        city: null,
                        searchValue: ""
                    })
                    console.log(error.message);

                })

        }
    }

    goBack = () => {
        return this.setState((previousState, currentProps) => {
            return {
                ...previousState,
                city: null,
                searchValue: "",
            }
        })
    }

    seeCurrentLocationForecast = () => {
        const city = JSON.parse(sessionStorage.getItem("currentWeather"));

        this.setState((previousState, currentProps) => {
            return { ...previousState, city }
        })
    }

    displayLocationForecast = () => {
        const { city, currentCity } = this.state;


        if (!city) {
            if (currentCity) {
                const weather = JSON.parse(sessionStorage.getItem("currentWeather"));
                return <div className="input-search-holder">

                    <p className="default-page-title">Weather Forecast</p>

                    <input type="search" className="input-search"
                        name="searchValue" value={this.state.searchValue}
                        onChange={this.getSearchValue}
                        onKeyDown={this.startSearch} />
                    <p className="default-page-message">
                        {`Search place to see weather forecast...`}
                        <span onClick={this.seeCurrentLocationForecast}>{`Or see forecast for ${weather.cityName} >>`}</span>
                    </p>
                </div>
            } else {
                return <div className="input-search-holder">

                    <p className="default-page-title">Weather Forecast</p>

                    <input type="search" className="input-search"
                        name="searchValue" value={this.state.searchValue}
                        onChange={this.getSearchValue}
                        onKeyDown={this.startSearch} />

                    <p className="default-page-message">Search place to see weather forecast.</p>
                </div>
            }
        } else if (city) {
            return <DayForecast city={city} goBack={this.goBack} />
        }
    }


    render() {
        const { city } = this.state;

        return (
            <Fragment>
                {this.displayLocationForecast()}
                {/* {(!city)
                    ? <div className="input-search-holder">

                        <p className="default-page-title">Weather Forecast</p>

                        <input type="search" className="input-search"
                            name="searchValue" value={this.state.searchValue}
                            onChange={this.getSearchValue}
                            onKeyDown={this.startSearch} />

                        <p className="default-page-message">Search place to see weather forecast.</p>
                    </div>
                    : <DayForecast city={city} goBack={this.goBack} />} */}

            </Fragment>
        );
    };
};

// export default withRouter(SearchCity);
export default SearchCity;