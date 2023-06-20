import React, { useState } from "react";
import { getWeatherDetails } from "../../Shared/Api/WeatherApi";
import Input from "../../Shared/Input";
import Button from "../../Shared/Button";
import moment from "moment/moment";
import Loader from "../../Shared/Loader";

const Weather = () => {
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [time, setTime] = useState("");
  const [country, setCountry] = useState("");

  const [cityname, setCityname] = useState("");

  const [loader, setLoader] = useState(true);

  const getCurrentWeatherHandler = async () => {
    const weatherDetails = await getWeatherDetails(cityname);
    const weatherData = (await weatherDetails.data) || {};
    console.log(weatherData?.location);
    setCity(weatherData?.location?.name);
    setRegion(weatherData?.location?.region);
    setCountry(weatherData?.location?.country);
    const customTime = moment
      .unix(weatherData?.location?.localtime_epoch)
      .format("MMMM Do YYYY, h:mm:ss a");
    setTime(customTime);
    setLoader(false);
  };

  const cityNameHandler = (event) => {
    console.log(event.target.value);
    setCityname(event.target.value);

  };
  return (
    <>
      <div className="flex justify-center items-center my-4">
        <Input
          placeholder="enter City Name"
          className="w-80"
          onChange={cityNameHandler}
          type="text"
          value={cityname}
        />
      </div>

      <div className="flex justify-center items-center my-5">
        <Button buttonname="Submit" onClick={getCurrentWeatherHandler} />
      </div>

      <div className="flex justify-around items-center">
        {loader ? (
          <Loader />
        ) : (
          <div className="border rounded-sm my-10 mx-5 py-8 px-5">
            <div>City:- {city} </div>
            <div>Region:- {region} </div>
            <div>Time:- {time} </div>
            <div>Country:- {country} </div>
          </div>
        )}
      </div>

      {/* <button onClick={getCurrentWeatherHandler} className="btn btn-primary"> Get Weather</button> */}
    </>
  );
};

export default Weather;
