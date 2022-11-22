export const weatherCode = {
  0: "Nuageux",
  1: "Pluvieux",
  2: "Eclaircies",
  3: "Ensoleillé",
  4: "Ensoleillé",
};

export const getWeather = (code) => {
  switch (code) {
    case 0:
      return "Nuageux";
    case 1:
      return "Pluvieux";
    case 2:
      return "Eclaircies";
    default:
      return "Ensoleillé";
  }
};
