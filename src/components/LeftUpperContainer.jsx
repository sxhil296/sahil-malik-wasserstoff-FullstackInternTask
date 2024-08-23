import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const LeftUpperContainer = ({ weather, unit }) => {
  const { name, main, weather: weatherDetails } = weather;
  const currentWeather = weatherDetails[0];

  // Convert temperature if needed
  const convertTemperature = (temp) => {
    return unit === "metric"
      ? `${temp}°C`
      : `${((temp * 9) / 5 + 32).toFixed(1)}°F`;
  };

  return (
    <div className="left-upper-container p-4 bg-[#28282B] shadow-xl text-white rounded-md mb-4">
      <div className="flex items-center mt-4">
        <div className="ml-2">
          <p className="text-lg font-medium mb-1">Now</p>
          <p className="text-4xl mb-1">{convertTemperature(main.temp)}</p>
          <p className="text-lg capitalize mb-1">
            {currentWeather.description}
          </p>
          <p className="text-sm">
            Max Temp : {convertTemperature(main.temp_max)}
          </p>
          <p className="text-sm">
            Min Temp : {convertTemperature(main.temp_min)}
          </p>
        </div>
        <img
          src={`http://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`}
          alt={currentWeather.description}
          className="w-18 h-18"
        />
      </div>
      <div className="border-b-2 my-4 w-[90%] ml-2"></div>
      <div className="ml-2">
        <h2 className="text-2xl font-bold flex items-center">
          <FaMapMarkerAlt className="mr-2" /> {name}
        </h2>
        <p className="text-lg flex items-center">
          <FaCalendarAlt className="mr-3" />
          {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default LeftUpperContainer;
