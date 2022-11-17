export class HttpWeatherRequest {
    token = "2390d90e31c99990b071767bceaedf1051ef090cf3d9e107a34ed5af4b967235";

    constructor () {};

    /**
     * Methode permet de récuprérer la météo ou l'éphéméride du jour pour une ville donnée
     * @param zipCode code postal de la ville recherché
     * @param type Meteo ou ephemeride
     * @returns Une promise / les données en format Json
     */
    async get(zipCode, type) {
        const response = await fetch(`https://api.meteo-concept.com/api/${type}/0?token=${this.token}&insee=${zipCode}`, {
            method: 'GET'
        })
        const data = await response.json();
        return data;
    }
}