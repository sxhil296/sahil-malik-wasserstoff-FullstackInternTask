import React, { useState } from "react";
import { FiSearch, FiMapPin } from "react-icons/fi";

const Header = ({ onSearch, onToggleUnit, unit }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city) {
      onSearch(city); // Trigger the API call with the city name
    }
  };

  const handleUseLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          onSearch(null, latitude, longitude); // Pass the coordinates to onSearch
        },
        (error) => {
          console.error("Error retrieving location:", error);
          alert("Unable to retrieve your location.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <header className="bg-black text-white p-4 flex flex-row justify-center items-center gap-2 sm:gap-8">
      {/* Logo */}
      <div className="logo text-lg sm:text-2xl font-bold flex mb-1 sm:mb-0">
        <img src="/favicon.png" alt="logo" width={50} />
      </div>

      {/* Search Bar */}
      <div className="search-bar flex items-center bg-[#28282B] rounded-md w-full sm:w-[50%] px-2 sm:px-4 mb-2 sm:mb-0">
        <input
          type="text"
          placeholder="Search location..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="bg-transparent text-white w-full p-2 focus:outline-none"
        />
        <FiSearch
          className="text-white text-lg cursor-pointer"
          onClick={handleSearch}
        />
      </div>

      {/* Buttons */}
      {/* Toggle Unit Button */}
      <button
        className="toggle-unit-button sm:w-[15%]  bg-purple-500 px-[12px] sm:px-4 py-2 text-[16px] font-bold  rounded-md hover:bg-purple-600 mb-2 sm:mb-0"
        onClick={onToggleUnit}
      >
        {unit === "metric" ? "°F" : "°C"}
      </button>
      {/* Use Location Button */}
      <button
        className="location-button font-medium sm:w-[15%] flex items-center justify-center bg-purple-500 px-2 sm:px-4 py-2 text-[24px] rounded-md hover:bg-purple-600 mb-2 sm:mb-0"
        onClick={handleUseLocation}
      >
        <FiMapPin />
      </button>
    </header>
  );
};

export default Header;
