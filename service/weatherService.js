/**
 * Service qui permet de récuper les données météo et ephéméride
 */
export class WeatherService {
  // token pour l'API Meteo concept seulement
  TOKEN = "2390d90e31c99990b071767bceaedf1051ef090cf3d9e107a34ed5af4b967235";

  constructor() {}

  /**
   * Methode permet de récuprérer la météo du jour pour une ville donnée
   * @param inseeCode code insee de la ville recherché
   * @returns Une promise / les données en format Json
   */
  async getWeather(inseeCode) {
    const response = await fetch(
      `https://api.meteo-concept.com/api/forecast/daily/0?token=${this.TOKEN}&insee=${inseeCode}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    return data;
  }

  /**
   * Methode permet de récuprérer l'éphéméride du jour pour une ville donnée
   * @param inseeCode code insee de la ville recherché
   * @returns Une promise / les données en format Json
   */
  async getEphemeride(inseeCode) {
    const response = await fetch(
      `https://api.meteo-concept.com/api/ephemeride/0?token=${this.TOKEN}&insee=${inseeCode}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    return data;
  }

  /**
   * Methode permet de récuprérer la météo des 3 prochains jours pour une ville donnée
   * @param inseeCode code insee de la ville recherché
   * @returns Une promise / les données en format Json
   */
  async getWeatherThreeDays(inseeCode) {
    const response = await fetch(
      `https://api.meteo-concept.com/api/forecast/daily?start=1&end=3&token=${this.TOKEN}&insee=${inseeCode}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    return data;
  }

  /**
   * Methode qui permet de récupérer le libéllé météo et l'icone associé d'une ville donnée
   * @param {string} city Prend le nom de la ville en argument
   * @return un tableau d'objets avec en clé "value" le type de météo, et en clé "image" la source de l'icone
   */
  async getThreeDaysWeather(city) {
    const response = await fetch(
      `https://prevision-meteo.ch/services/json/${city}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();

    return [
      { libelle: data.fcst_day_0.condition, image: data.fcst_day_0.icon },
      { libelle: data.fcst_day_1.condition, image: data.fcst_day_1.icon },
      { libelle: data.fcst_day_2.condition, image: data.fcst_day_2.icon },
    ];
  }

  /**
   * Methode permet de récuprérer un tableau regroupants les saints du jour
   * @returns Une promise / les données en format Json
   */
  async getSaintsOfTheDay() {
    const response = await fetch(`https://nominis.cef.fr/json/nominis.php`, {
      method: "GET",
    });
    const data = await response.json();
    console.log(data);
    return Object.keys(data.response.prenoms.majeurs)
      .toString()
      .replaceAll(",", ", ");
  }
}
