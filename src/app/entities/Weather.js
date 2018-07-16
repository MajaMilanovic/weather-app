class Weather {
    constructor(item) {
        this.dayTime = (new Date(item.dt * 1000).toLocaleTimeString('en-US', {
            hour12: false,
        })).slice(0, 5);
        this.dayDate = new Date(item.dt * 1000).getDate();
        this.month=new Date(item.dt * 1000).getMonth()+1;
        this.day = (new Date(item.dt * 1000).getDay())
        this.temp = item.main.temp;
        this.tempMax = item.main.temp_max;
        this.tempMin = item.main.temp_min;
        this.pressure = parseInt(item.main.pressure);
        this.humidity = item.main.humidity;
        this.wind = item.wind.speed;
        this.icon = item.weather[0].icon;
    };
};

export {
    Weather
};