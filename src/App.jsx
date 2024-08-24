import React, { useState } from "react";
import Header from "./components/Header";
import LeftUpperContainer from "./components/LeftUpperContainer";
import LeftLowerContainer from "./components/LeftLowerContainer";
import RightContainer from "./components/RightContainer";
import ErrorMessage from './components/ErrorMessage'
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [unit, setUnit] = useState("metric"); // "metric" for Celsius, "imperial" for Fahrenheit
  const [error, setError] = useState("");



  const apiKey = "ec870ddf40f1fcb6c2d35ab7a4dd4b1c"
  // const apiKey = import.meta.env.VITE_API_KEY;
  // console.log(apiKey);

  const fetchWeatherData = async (city, latitude, longitude) => {

    //error when city name is not entered
    if (!city && (!latitude || !longitude)) {
      setError("Please enter a city name or allow location access.");
      return;
    }

    setError("");
    
    try {
      let weatherResponse, forecastResponse;

      // URLs based on input
      const weatherByCityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
      const forecastByCityUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${unit}`;

      const weatherByLocationUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;
      const forecastByLocationUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;

      // API requests based on city or coordinates
      if (city) {
        weatherResponse = await fetch(weatherByCityUrl);
        forecastResponse = await fetch(forecastByCityUrl);
      } else if (latitude && longitude) {
        weatherResponse = await fetch(weatherByLocationUrl);
        forecastResponse = await fetch(forecastByLocationUrl);
      }

      //error when city name is incorrect
      if (!weatherResponse.ok || !forecastResponse.ok) {
        setError("Please enter correct city name.")
        setWeatherData(null)
        setForecastData(null)
        return;
      }
      setError("");

      const weather = await weatherResponse.json();
      const forecast = await forecastResponse.json();

      // Update the state with fetched data
      setWeatherData(weather);
      setForecastData(forecast.list.filter((_, index) => index % 8 === 0));

      // console.log(weather);
      // console.log(forecast);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };
  

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === "metric" ? "imperial" : "metric"));
  };

  return (
    <div className="bg-black min-h-screen w-full justify-center overflow-hidden">
      <div className="max-w-[1280px] mx-auto sm:px-4">
        <Header
          onSearch={fetchWeatherData}
          onToggleUnit={toggleUnit}
          unit={unit}
          setError={setError}
        />
{error ? (
          <div>
            <ErrorMessage error={error} />
          </div>
        ) : (
          <>
            {!weatherData ? (
              <div className="flex flex-col items-center justify-center h-[calc(100vh-120px)]">
                <TiWeatherPartlySunny className="text-5xl text-white mb-2" />
                <h1 className="text-white text-4xl font-bold mb-3 text-center">
                  Welcome to weatherlyyy
                </h1>
                <p className="text-white text-lg text-center text-balance mb-3">
                  Enter a city name or give location to get weather updates.
                </p>
                <a
                  target="_blank"
                  href="https://github.com/sxhil296/sahil-malik-wasserstoff-FullstackInternTask"
                  className="text-white text-[16px] text-center text-balance border px-3 py-1 border-gray-400 rounded-md cursor-pointer hover:bg-gray-800"
                >
                  Star on <FaGithub className="inline" />{" "}
                </a>
              </div>
            ) : (
              <div className="main-content flex flex-col sm:flex-row p-4 justify-center sm:mt-20 h-full gap-4">
                <div className="left-side flex flex-col sm:w-1/3 w-full">
                  <LeftUpperContainer weather={weatherData} unit={unit} />
                  <LeftLowerContainer forecast={forecastData} unit={unit} />
                </div>

                <div className="right-side sm:w-2/3 w-full">
                  <RightContainer
                    highlights={{
                      windDirection: weatherData.wind.deg,
                      windSpeed: weatherData.wind.speed,
                      sunrise: weatherData.sys.sunrise,
                      sunset: weatherData.sys.sunset,
                      humidity: weatherData.main.humidity,
                      pressure: weatherData.main.pressure,
                      visibility: weatherData.visibility,
                      feelsLike: weatherData.main.feels_like,
                    }}
                    unit={unit}
                  />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
