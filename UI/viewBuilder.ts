import { EphemerideData, WeatherData, WeatherThreeDaysData } from "../service/enum";


class ViewBuilder {
    private weatherData: WeatherData;
    private ephemerideData: EphemerideData;
    private weatherThreeDaysData: WeatherThreeDaysData;
    private document: Document;

    constructor(weatherData: WeatherData, ephemerideData: EphemerideData, weatherThreeDaysData: WeatherThreeDaysData , document: Document) {
        this.weatherData = weatherData;
        this.ephemerideData = ephemerideData;
        this.weatherThreeDaysData = weatherThreeDaysData;
        this.document = document;
    }

    public buildTable(): void {
        const weatherCode = weatherCode[this.weatherThreeDaysData.forecast[0].weather]
        this.document.querySelector("#jour-0 .jour")?.textContent = this.weatherThreeDaysData.forecast[0].day;
        this.document.querySelector("#jour-0 .icone-meteo")?.textContent = `<img src="./assets/images/ensoleille.png"></img>`;
        this.document.querySelector("#jour-0 .libelle-meteo")?.textContent = "Eclaircies"
    }

    public buildTemperatures(): void {
        this.document.getElementById("max").textContent = this.weatherData.forecast.tmax;
        this.document.getElementById("min").textContent = this.weatherData.forecast.tmin
        this.document.getElementById("moy").textContent = (this.weatherData.forecast.tmax+this.weatherData.forecast.tmin)/2
    }

    public buildEphemeride(): void {
        console.log(this.weatherData, this.ephemerideData, this.document);
        this.document.getElementById("ephemeride-date").textContent = "Nous sommes le " + this.ephemerideData.ephemeride.datetime;
        this.document.getElementById("ephemeride-heure").textContent = "Il est " + this.ephemerideData.ephemeride.datetime;
        this.document.getElementById("ephemeride-lever").textContent = "Le soleil se lève à " + this.ephemerideData.ephemeride.sunrise
        this.document.getElementById("ephemeride-coucher").textContent = "Et se couche à " + this.ephemerideData.ephemeride.sunset
    }
}