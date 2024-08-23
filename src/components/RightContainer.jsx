import React from "react";
import {
  WiSunrise,
  WiSunset,
  WiHumidity,
  WiBarometer,
  WiThermometer,
} from "react-icons/wi";
import { MdOutlineVisibility } from "react-icons/md";
import { GiDirectionSigns } from "react-icons/gi";
import { FaWind } from "react-icons/fa6";

const RightContainer = ({ highlights }) => {
  return (
    <div className="p-4 bg-[#28282B] rounded-md shadow-xl text-white">
      <h1 className="text-white text-lg font-bold mb-4">Today's Highlights</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* First Row: Wind Speed and Wind Direction */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Wind Speed */}
          <div className="highlight p-4 bg-[#343434] rounded-md shadow-xl flex items-center">
            <FaWind className="text-3xl sm:text-4xl mr-3" />
            <div>
              <h4 className="text-sm sm:text-lg font-bold">Wind Speed</h4>
              <p className="text-xs sm:text-base">
                {highlights.windSpeed} km/h
              </p>
            </div>
          </div>

          {/* Wind Direction */}
          <div className="highlight p-4 bg-[#343434] rounded-md shadow-xl flex items-center">
            <GiDirectionSigns className="text-3xl sm:text-4xl mr-3" />
            <div>
              <h4 className="text-sm sm:text-lg font-bold">Wind Direction</h4>
              <p className="text-xs sm:text-base">
                {highlights.windDirection}°
              </p>
            </div>
          </div>
        </div>

        {/* Second Row: Sunrise and Sunset */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Sunrise */}
          <div className="highlight p-4 bg-[#343434] rounded-md shadow-xl flex items-center">
            <WiSunrise className="text-3xl sm:text-4xl mr-3" />
            <div>
              <h4 className="text-sm sm:text-lg font-bold">Sunrise</h4>
              <p className="text-xs sm:text-base">
                {new Date(highlights.sunrise * 1000).toLocaleTimeString()}
              </p>
            </div>
          </div>

          {/* Sunset */}
          <div className="highlight p-4 bg-[#343434] rounded-md shadow-xl flex items-center">
            <WiSunset className="text-3xl sm:text-4xl mr-3" />
            <div>
              <h4 className="text-sm sm:text-lg font-bold">Sunset</h4>
              <p className="text-xs sm:text-base">
                {new Date(highlights.sunset * 1000).toLocaleTimeString()}
              </p>
            </div>
          </div>
        </div>

        {/* Third Row: Humidity and Pressure */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Humidity */}
          <div className="highlight p-4 bg-[#343434] rounded-md shadow-xl flex items-center">
            <WiHumidity className="text-3xl sm:text-4xl mr-3" />
            <div>
              <h4 className="text-sm sm:text-lg font-bold">Humidity</h4>
              <p className="text-xs sm:text-base">{highlights.humidity}%</p>
            </div>
          </div>

          {/* Pressure */}
          <div className="highlight p-4 bg-[#343434] rounded-md shadow-xl flex items-center">
            <WiBarometer className="text-3xl sm:text-4xl mr-3" />
            <div>
              <h4 className="text-sm sm:text-lg font-bold">Pressure</h4>
              <p className="text-xs sm:text-base">{highlights.pressure} hPa</p>
            </div>
          </div>
        </div>

        {/* Fourth Row: Visibility and Feels Like */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Visibility */}
          <div className="highlight p-4 bg-[#343434] rounded-md shadow-xl flex items-center">
            <MdOutlineVisibility className="text-3xl sm:text-4xl mr-3" />
            <div>
              <h4 className="text-sm sm:text-lg font-bold">Visibility</h4>
              <p className="text-xs sm:text-base">
                {highlights.visibility / 1000} km
              </p>
            </div>
          </div>

          {/* Feels Like */}
          <div className="highlight p-4 bg-[#343434] rounded-md shadow-xl flex items-center">
            <WiThermometer className="text-3xl sm:text-4xl mr-3" />
            <div>
              <h4 className="text-sm sm:text-lg font-bold">Feels Like</h4>
              <p className="text-xs sm:text-base">{highlights.feelsLike}°C</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightContainer;
