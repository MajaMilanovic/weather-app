const filterForecastArrayByDays = (arr) => {

    let begin = 0;
    let end = 0;

    let result = {};


    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1].day !== arr[i].day) {
            let weekDayNumber = arr[i - 1].day;
            let weekDay = getDayName(weekDayNumber);

            end = i;
            result[weekDay] = arr.slice(begin, end);
            begin = i;
        }
    }

    return result;
}



const getDayName = (num) => {
    const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return dayNames[num - 1];
}


const ordinalNumbers = (num) => {

    var result = "";
    var remains = num % 100;

    if (remains > 10 && remains < 14) {
        result = num + "th";
    } else if (remains > 14) {
        var lastDigit = remains % 10;

        switch (lastDigit) {
            case 1:
                result = num + "st";
                break;
            case 2:
                result = num + "nd";
                break;
            case 3:
                result = num + "rd";
                break;
            default:
                result = num + "th";
                break;
        }
    }
    return result;
}

const getMonthName = (monthNumber) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[monthNumber - 1];
}


export {
    filterForecastArrayByDays,
    ordinalNumbers,
    getMonthName
};