import { HttpWeatherRequest } from "./service/service.js";
import { ViewBuilder } from "./UI/view.js"

// Create parameters

// Paramètres
const ville = "Nîmes";
const insee = 30189;
const httpWeatherRequest = new HttpWeatherRequest();
let dataMeteo = httpWeatherRequest.get(insee, "forecast/daily").then(data => { dataMeteo = data})
let dataEphemeride = httpWeatherRequest.get(insee, "ephemeride").then(data => { dataEphemeride = data});
let viewBuilder;

console.log(insee);

// Get data
Promise.all([httpWeatherRequest.get(insee, "forecast/daily"), httpWeatherRequest.get(insee, "ephemeride")])
.then(response => {
  console.log(response);
  // then build the page
  viewBuilder = new ViewBuilder(response[0], response[1], document);
  viewBuilder.buildEphemeride();
})



// Build the page out of data
