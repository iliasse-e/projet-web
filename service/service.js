export class HttpWeatherRequest {
    token = "2390d90e31c99990b071767bceaedf1051ef090cf3d9e107a34ed5af4b967235";

    constructor () {};

    /**
     * Methode permet de récuprérer la météo du jour pour une ville donnée
     * @param zipCode code postal de la ville recherché
     * @returns Une promise / les données en format Json
     */
     async getWeather(zipCode) {
        const response = await fetch(`https://api.meteo-concept.com/api/forecast/daily/0?token=${this.token}&insee=${zipCode}`, {
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
     async getEphemeride(zipCode) {
        const response = await fetch(`https://api.meteo-concept.com/api/ephemeride/0?token=${this.token}&insee=${zipCode}`, {
            method: 'GET'
        })
        const data = await response.json();
        return data;
    }

    /**
     * Methode permet de récuprérer la météo des 3 prochains jours pour une ville donnée
     * @param zipCode code postal de la ville recherché
     * @returns Une promise / les données en format Json
     */
     async getWeatherThreeDays(zipCode) {
        const response = await fetch(`https://api.meteo-concept.com/api/forecast/daily?start=1&end=3&token=${this.token}&insee=${zipCode}`, {
            method: 'GET'
        })
        const data = await response.json();
        return data;
    }
}