import { WeatherService } from "./service/weatherService.js";
import { ViewBuilder } from "./UI/viewBuilder.js";

// récupérer l'entrée utilisateur

// Creation des arguments / informations
const ville = { insee: 30189, libelle: "Nimes" };
const weatherService = new WeatherService(); // init le service
let viewBuilder; // init le service

// Regrouper toutes les informations rassemblés
Promise.all([
  weatherService.getWeather(ville.insee),
  weatherService.getEphemeride(ville.insee),
  weatherService.getThreeDaysWeather(ville.libelle),
  weatherService.getSaintsOfTheDay(),
]).then((response) => {
  console.log(response);
  // then construire la page
  viewBuilder = new ViewBuilder(
    response[0],
    response[1],
    response[2],
    response[3],
    document
  );
  viewBuilder.buildEphemeride();
  viewBuilder.buildTemperatures();
  viewBuilder.buildTable();
});
// Si non afficher un chargeur de page css
