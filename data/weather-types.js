export const getWeather = (code) => {
  switch (code) {
    case 0:
      return {value:"Nuageux", image: "assets/images/eclaircies.png"};
    case 1:
      return {value:"Pluvieux", image: "assets/images/eclaircies.png"};
    case 2:
      return {value:"Eclaircies", image: "assets/images/eclaircies.png"};
    default:
      return {value:"Ensoleillé", image: "assets/images/ensoleille.png"};
  }
};
