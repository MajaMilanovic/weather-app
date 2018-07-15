const filterForecastArrayByDays = (arr) => {

    let begin = 0;
    let end = 0;

    let result = {};

    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1].day !== arr[i].day) {
            let weekDayNumber = arr[i - 1].day;
            let weekDay = "";

            switch (weekDayNumber) {
                case 1:
                    weekDay = "Monday";
                    break;
                case 2:
                    weekDay = "Tuesday";
                    break;
                case 3:
                    weekDay = "Wednesday";
                    break;
                case 4:
                    weekDay = "Thursday";
                    break;
                case 5:
                    weekDay = "Friday";
                    break;
                case 6:
                    weekDay = "Saturday";
                    break;
                case 7:
                    weekDay = "Sunday";
                    break;
            }

            end = i;
            result[weekDay] = arr.slice(begin, end);
            begin = i;
        }
    }

    return result;
}


export {
    filterForecastArrayByDays
};