import { WeatherService } from "./service/weatherService.js";
import { ViewBuilder } from "./UI/viewBuilder.js"

// Create parameters
const insee = 30189;
const weatherService = new WeatherService();
let viewBuilder;

// Get data
Promise.all([weatherService.getWeather(insee), weatherService.getEphemeride(insee), weatherService.getWeatherThreeDays(insee), weatherService.getSaintsOfTheDay()])
.then(response => {
  console.log(response);
  // then build the page
  viewBuilder = new ViewBuilder(response[0], response[1], response[2], response[3], document);
  viewBuilder.buildEphemeride();
  viewBuilder.buildTemperatures();
  viewBuilder.buildTable();
})



// Build the page out of data
