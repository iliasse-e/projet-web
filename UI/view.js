import { getWeekday } from "../data/days-of-week.js";
import { weatherCode as code } from "../data/weather-types.js";

export class ViewBuilder {
    weatherData;
    ephemerideData;
    weatherThreeDaysData;
    document;

    constructor(weatherData, ephemerideData, weatherThreeDaysData, document) {
        this.weatherData = weatherData;
        this.ephemerideData = ephemerideData;
        this.weatherThreeDaysData = weatherThreeDaysData;
        this.document = document;
    }

    buildTable() {
            const today = new Date().getDay();
            this.document.getElementById('meteo_semaine').innerHTML = `
            <div id="jour-0" class="table-row">
                    <div class="jour">${getWeekday(today + this.weatherThreeDaysData.forecast[0].day)}</div>
                    <div class="icone-meteo"><img src="./assets/images/ensoleille.png"></div>
                    <div class="libelle-meteo">${code[this.weatherThreeDaysData.forecast[0].weather]}</div>
                </div>
                <div id="jour-1" class="table-row">
                    <div class="jour">${getWeekday(today + this.weatherThreeDaysData.forecast[1].day)}</div>
                    <div class="icone-meteo"><img src="./assets/images/ensoleille.png"></div>
                    <div class="libelle-meteo">${code[this.weatherThreeDaysData.forecast[1].weather]}</div>
                </div>
                <div id="jour-2" class="table-row">
                    <div class="jour">${getWeekday(today + this.weatherThreeDaysData.forecast[2].day)}</div>
                    <div class="icone-meteo"><img src="./assets/images/ensoleille.png"></div>
                    <div class="libelle-meteo">${code[this.weatherThreeDaysData.forecast[2].weather]}</div>
                </div>
            `
    }

    buildTemperatures() {
        this.document.getElementById("max").textContent = this.weatherData.forecast.tmax;
        this.document.getElementById("min").textContent = this.weatherData.forecast.tmin
        this.document.getElementById("moy").textContent = (this.weatherData.forecast.tmax+this.weatherData.forecast.tmin)/2
    }

    buildEphemeride() {
        const date = new Date;
        console.log(this.weatherData, this.ephemerideData, this.document);
        this.document.getElementById("ephemeride-date").textContent = "Nous sommes le " + date.getDate()+"/"+ date.getMonth() +"/"+date.getFullYear();
        this.document.getElementById("ephemeride-heure").textContent = "Il est " + date.getHours() + ":" + date.getMinutes();
        this.document.getElementById("ephemeride-lever").textContent = "Le soleil se lève à " + this.ephemerideData.ephemeride.sunrise
        this.document.getElementById("ephemeride-coucher").textContent = "Et se couche à " + this.ephemerideData.ephemeride.sunset

    }
}