class ViewBuilder {
    private weatherData: WeatherData;
    private ephemerideData: EphemerideData;
    private document: Document;

    constructor(weatherData: WeatherData, ephemerideData: EphemerideData , document: Document) {
        this.weatherData = weatherData;
        this.ephemerideData = ephemerideData;
        this.document = document;
    }

    public buildTable(): void {
        const container = this.document.getElementById("meteo_semaine");
    }

    public buildTemperatures(): void {
        const container = this.document.getElementById("temperature_jour");
    }

    public buildEphemeride(): void {
        console.log(this.weatherData, this.ephemerideData, this.document);
        this.document.getElementById("ephemeride-date").textContent = "Nous sommes le " + this.ephemerideData.ephemeride.datetime;
        this.document.getElementById("ephemeride-heure").textContent = "Il est " + this.ephemerideData.ephemeride.datetime;
        this.document.getElementById("ephemeride-lever").textContent = "Le soleil se lève à " + this.ephemerideData.ephemeride.sunrise
        this.document.getElementById("ephemeride-coucher").textContent = "Et se couche à " + this.ephemerideData.ephemeride.sunset
    }
}