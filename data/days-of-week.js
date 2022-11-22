const weekday = ["Dimanche","Lundi ","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];

export const getWeekday = (dayNb) => {
    if (dayNb < 7) {
        return weekday[dayNb]
    }
    else {
        return weekday[dayNb-7]
    }
}