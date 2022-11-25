import { getWeekday } from "../data/days-of-week.js";

/**
 * Permet de construire la vue de la page station météo
 * en y injectant les données reçues des différentes API
 * Cette classe est donc dépendante de la classe weatherService,
 */
export class ViewBuilder {
    weatherData;
    ephemerideData;
    weatherThreeDaysData;
    saintsNames;
    document;

    constructor(weatherData, ephemerideData, weatherThreeDaysData, saintsNames, document) {
        this.weatherData = weatherData;
        this.ephemerideData = ephemerideData;
        this.weatherThreeDaysData = weatherThreeDaysData;
        this.saintsNames = saintsNames;
        this.document = document;
    }

    // construit la table météo sur 3 jours
    buildTable() {
            const today = new Date().getDay();
            this.document.getElementById('meteo_semaine').innerHTML = `
            <div id="jour-0" class="table-row">
                    <div class="jour">${getWeekday(today)}</div>
                    <div class="icone-meteo"><img src=${this.weatherThreeDaysData[0].image}></div>
                    <div class="libelle-meteo">${this.weatherThreeDaysData[0].libelle}</div>
                </div>
                <div id="jour-1" class="table-row">
                <div class="jour">${getWeekday(today+1)}</div>
                <div class="icone-meteo"><img src=${this.weatherThreeDaysData[1].image}></div>
                <div class="libelle-meteo">${this.weatherThreeDaysData[1].libelle}</div>
                </div>
                <div id="jour-2" class="table-row">
                <div class="jour">${getWeekday(today+2)}</div>
                <div class="icone-meteo"><img src=${this.weatherThreeDaysData[2].image}></div>
                <div class="libelle-meteo">${this.weatherThreeDaysData[2].libelle}</div>
                </div>
            `
    }

    // construit la vue aside des température max, moy, min
    buildTemperatures() {
        this.document.getElementById("max").textContent = this.weatherData.forecast.tmax;
        this.document.getElementById("min").textContent = this.weatherData.forecast.tmin
        this.document.getElementById("moy").textContent = (this.weatherData.forecast.tmax+this.weatherData.forecast.tmin)/2
    }

    // construit la vue ephéméride
    buildEphemeride() {
        const date = new Date;
        console.log(this.weatherData, this.ephemerideData, this.document);
        this.document.getElementById("ephemeride-date").textContent = "Nous sommes le " + date.getDate()+ "/" + date.getMonth() + "/" +date.getFullYear();
        this.document.getElementById("ephemeride-heure").textContent = "Il est " + date.getHours() + ":" + date.getMinutes();
        this.document.getElementById("ephemeride-lever").textContent = "Le soleil se lève à " + this.ephemerideData.ephemeride.sunrise
        this.document.getElementById("ephemeride-coucher").textContent = "Et se couche à " + this.ephemerideData.ephemeride.sunset;
        this.document.getElementById("saints-du-jour").textContent = "Nous fêtons les saint(e)s : " + this.saintsNames;
    }
}