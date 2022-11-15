enum WeatherType {
    EPHEMERIDE = "ephemeride",
    METEO = "forecast/daily"
}

type WeatherData = {
    city: City,
    update: string,
    forecast: [
        {
            country: string,
            city: string,
            latitude: number,
            longitude: number,
            datetime: string,
            wind1numberm: number,
            gust1numberm: number,
            dirwind1numberm: number,
            weather: number,
            probafrost: number,
            probafog: number,
            probawind7number: number,
            probawind1numbernumber: number,
            day: 13,
            rr1number: number,
            rr1: number,
            tmin: number,
            tmax: number,
            sun_hours: number,
            etp: number,
            gustx: number
        },
        {
            insee: string,
            cp: number,
            latitude: number,
            longitude: number,
            datetime: string,
            wind1numberm: number,
            gust1numberm: number,
            dirwind1numberm: number,
            weather: number,
            probafrost: number,
            probafog: number,
            probawind7number: number,
            probawind1numbernumber: number,
            day: 13,
            rr1number: number,
            rr1: number,
            tmin: number,
            tmax: number,
            sun_hours: number,
            etp: number,
            gustx: number
        }
    ]
}

type EphemerideData = {
    city: City,
    ephemeride: {
        latitude: number,
        longitude: number,
        insee: string,
        day: number,
        datetime: string,
        sunrise: string,
        sunset: string,
        duration_day: string,
        diff_duration_day: number,
        moon_age: number,
        moon_phase: string
    }
}

type City = {
    name: string,
    latitude: number,
    longitude: number,
    altitude: number,
    country: string,
    city: string
}