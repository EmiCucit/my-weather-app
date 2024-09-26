import { TWeather } from "../../store/slice/weatherSlice"

const formatWeather = (text: TWeather) => {
  switch (text) {
    case "Clear":
      return "Despejado";
    case "Clouds":
      return "Nublado";
    case "Rain":
      return "Lluvia";
    case "Dizzle":
      return "Llovizna";  
    case "Thunderstorm":
      return "Tormenta eléctrica";
    case "Snow":
      return "Nieve";
    case "Mist":
      return "Neblina";
    case "Smoke":
      return "Humo";
    case "Haze":
      return "Calina";  
    case "Dust":
      return "Polvo";
    case "Fog":
      return "Niebla";
    case "Sand":
      return "Arena";
    case "Ash":
      return "Ceniza";
    case "Squall":
      return "Chubasco";  
    case "Tornado":
      return "Tornado";
    default:
      return "Desconocido";
    }
}

export default formatWeather;