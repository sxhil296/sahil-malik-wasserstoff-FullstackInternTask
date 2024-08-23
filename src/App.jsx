// import React, { useState } from "react";
// import Header from "./components/Header";
// import LeftUpperContainer from "./components/LeftUpperContainer";
// import LeftLowerContainer from "./components/LeftLowerContainer";
// import RightContainer from "./components/RightContainer";

// const App = () => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [forecastData, setForecastData] = useState(null);

//   const fetchWeatherData = async (city, latitude, longitude) => {
//     try {
//       let weatherResponse, forecastResponse;
//       const apiKey = "ec870ddf40f1fcb6c2d35ab7a4dd4b1c";

//       if (city) {
//         weatherResponse = await fetch(
//           `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
//         );
//         forecastResponse = await fetch(
//           `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
//         );
//       } else if (latitude && longitude) {
//         weatherResponse = await fetch(
//           `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
//         );
//         forecastResponse = await fetch(
//           `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
//         );
//       }

//       const weather = await weatherResponse.json();
//       const forecast = await forecastResponse.json();

//       setWeatherData(weather);
//       setForecastData(forecast.list.filter((_, index) => index % 8 === 0));

//       console.log(weather);
//       console.log(forecast);
//     } catch (error) {
//       console.error("Error fetching weather data:", error);
//     }
//   };

//   return (
//     <div className="bg-black min-h-screen w-full">
//       <div className="max-w-[1280px] mx-auto">
//         <Header onSearch={fetchWeatherData} />

//         <div className="main-content flex flex-col sm:flex-row p-4 justify-center sm:mt-20 h-full gap-4">
//           <div className="left-side flex flex-col sm:w-1/3 w-full">
//             {weatherData && (
//               <>
//                 <LeftUpperContainer weather={weatherData} />
//                 <LeftLowerContainer forecast={forecastData} />
//               </>
//             )}
//           </div>

//           <div className="right-side sm:w-2/3 w-full">
//             {weatherData && (
//               <RightContainer
//                 highlights={{
//                   windDirection: weatherData.wind.deg,
//                   windSpeed: weatherData.wind.speed,
//                   sunrise: weatherData.sys.sunrise,
//                   sunset: weatherData.sys.sunset,
//                   humidity: weatherData.main.humidity,
//                   pressure: weatherData.main.pressure,
//                   visibility: weatherData.visibility,
//                   feelsLike: weatherData.main.feels_like,
//                 }}
//               />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;



import React, { useState } from "react";
import Header from "./components/Header";
import LeftUpperContainer from "./components/LeftUpperContainer";
import LeftLowerContainer from "./components/LeftLowerContainer";
import RightContainer from "./components/RightContainer";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const fetchWeatherData = async (city, latitude, longitude) => {
    try {
      let weatherResponse, forecastResponse;
      const apiKey = "ec870ddf40f1fcb6c2d35ab7a4dd4b1c";

      if (city) {
        weatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        forecastResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
        );
      } else if (latitude && longitude) {
        weatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
        );
        forecastResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
        );
      }

      const weather = await weatherResponse.json();
      const forecast = await forecastResponse.json();

      setWeatherData(weather);
      setForecastData(forecast.list.filter((_, index) => index % 8 === 0));

      console.log(weather);
      console.log(forecast);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="bg-black min-h-screen w-full justify-center overflow-hidden">
      <div className="max-w-[1280px] mx-auto sm:px-4">
        <Header onSearch={fetchWeatherData} />

        {!weatherData ? (
          <div className="flex flex-col items-center justify-center h-[calc(100vh-120px)]">
            <TiWeatherPartlySunny className="text-5xl text-white mb-2" />
            <h1 className="text-white text-4xl font-bold mb-3 text-center">Welcome to Weatherlyyy</h1>
            <p className="text-white text-lg text-center text-balance mb-3">Enter a city name or give location to get weather updates</p>
            <a target="_blank" href="https://github.com/sxhil296/sahil-malik-wasserstoff-FullstackInternTask" className="text-white text-[16px] text-center text-balance border px-3 py-1 border-gray-400 rounded-md cursor-pointer hover:bg-gray-800">Star on <FaGithub className="inline" /> </a>

          </div>
        ) : (
          <div className="main-content flex flex-col sm:flex-row p-4 justify-center sm:mt-20 h-full gap-4">
            <div className="left-side flex flex-col sm:w-1/3 w-full">
              <LeftUpperContainer weather={weatherData} />
              <LeftLowerContainer forecast={forecastData} />
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
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
