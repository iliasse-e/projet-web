import { HttpWeatherRequest } from "./service/service.js";
import { ViewBuilder } from "./UI/view.js"

// Create parameters

// Paramètres
const ville = "Nîmes";
const insee = 30189;
const httpWeatherRequest = new HttpWeatherRequest();
let viewBuilder;

console.log(document);

// Get data
Promise.all([httpWeatherRequest.getWeather(insee), httpWeatherRequest.getEphemeride(insee), httpWeatherRequest.getWeatherThreeDays(insee)])
.then(response => {
  console.log(response);
  // then build the page
  viewBuilder = new ViewBuilder(response[0], response[1], response[2], document);
  viewBuilder.buildEphemeride();
  viewBuilder.buildTemperatures();
  viewBuilder.buildTable();
})



// Build the page out of data
