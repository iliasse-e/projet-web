const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

export const getWeekday = (dayNb) => {
    if (dayNb < 7) {
        return weekday[dayNb]
    }
    else {
        return weekday[dayNb-7]
    }
}