import { EphemerideData, WeatherData } from "./enum";

/**
 * Cette classe est un service regroupant les différentes méthodes HTTP 
 * permettant de récupérer les données d'une API météo
 */
export class HttpWeatherRequest {
    private token: string = "2390d90e31c99990b071767bceaedf1051ef090cf3d9e107a34ed5af4b967235";

    public constructor () {};

    /**
     * Methode permet de récuprérer la météo du jour pour une ville donnée
     * @param zipCode code postal de la ville recherché
     * @returns Une promise / les données en format Json
     */
    public async getWeather(zipCode: number): Promise<WeatherData> {
        const response = await fetch(`https://api.meteo-concept.com/api/forecast/daily/periods?start=0&end=2&token=${this.token}&insee=${zipCode}`, {
            method: 'GET'
        })
        const data = await response.json();
        return data;
    }

    /**
     * Methode permet de récuprérer l'éphéméride du jour pour une ville donnée
     * @param zipCode code postal de la ville recherché
     * @returns Une promise / les données en format Json
     */
     public async getEphemeride(zipCode: number): Promise<EphemerideData> {
        const response = await fetch(`https://api.meteo-concept.com/api/ephemeride/0?token=${this.token}&insee=${zipCode}`, {
            method: 'GET'
        })
        const data = await response.json();
        return data;
    }

    /**
     * Methode permet de récuprérer la météo des 15 prochains jours pour une ville donnée
     * @param zipCode code postal de la ville recherché
     * @returns Une promise / les données en format Json
     */
     public async getWeatherTwoWeeks(zipCode: number): Promise<any> {
        const response = await fetch(`https://api.meteo-concept.com/api/forecast/daily/periods/0?token=${this.token}&insee=${zipCode}`, {
            method: 'GET'
        })
        const data = await response.json();
        return data;
    }
}

