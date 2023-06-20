// import { weatherKey, weatherURL } from "../../Config/WeatherConfig";
import axios from "axios";

export const getWeatherDetails = async (cityName) => {
  try {
    const url = `http://api.weatherapi.com/v1/forecast.json?key=055db4dceae4405d968111810231906&q=${cityName}&days=1&aqi=no&alerts=no`;
    const weatherData = await axios.get(url);
    console.log(weatherData);
    return weatherData;
  } catch (error) {
    console.log(error);
    return error;
  }
};
