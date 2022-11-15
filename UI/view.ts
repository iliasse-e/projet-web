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
        const paragraphs = this.document.getElementById("ephemeride")?.getElementsByTagName("p");
        if (paragraphs != undefined && paragraphs.length >= 4) {
            paragraphs[0].innerText = this.ephemerideData.ephemeride.day.toString();
            paragraphs[1].innerText = this.ephemerideData.ephemeride.datetime;
            paragraphs[2].innerText = this.ephemerideData.ephemeride.sunrise;
            paragraphs[3].innerText = this.ephemerideData.ephemeride.sunset;

        }


    }
}