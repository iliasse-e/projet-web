export class ViewBuilder {
    weatherData;
    ephemerideData;
    document;

    constructor(weatherData, ephemerideData , document) {
        this.weatherData = weatherData;
        this.ephemerideData = ephemerideData;
        this.document = document;
    }

    buildTable() {
        const container = this.document.getElementById("meteo_semaine");
    }

    buildTemperatures() {
        const container = this.document.getElementById("temperature_jour");
    }

    buildEphemeride() {
        console.log(this.weatherData, this.ephemerideData, this.document);
        this.document.getElementById("ephemeride-date").textContent = "Nous sommes le " + this.ephemerideData.ephemeride.datetime;
        this.document.getElementById("ephemeride-heure").textContent = "Il est " + this.ephemerideData.ephemeride.datetime;
        this.document.getElementById("ephemeride-lever").textContent = "Le soleil se lève à " + this.ephemerideData.ephemeride.sunrise
        this.document.getElementById("ephemeride-coucher").textContent = "Et se couche à " + this.ephemerideData.ephemeride.sunset

    }
}