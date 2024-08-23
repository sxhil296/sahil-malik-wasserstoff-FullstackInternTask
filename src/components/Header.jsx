// import React, { useState } from "react";
// import { FiSearch, FiMapPin } from "react-icons/fi";

// const Header = ({ onSearch }) => {
//   const [city, setCity] = useState("");

//   const handleSearch = () => {
//     if (city) {
//       onSearch(city); // Trigger the API call with the city name
//     }
//   };

//   const handleUseLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           onSearch(null, latitude, longitude); // Pass the coordinates to onSearch
//         },
//         (error) => {
//           console.error("Error retrieving location:", error);
//           alert("Unable to retrieve your location.");
//         }
//       );
//     } else {
//       alert("Geolocation is not supported by your browser.");
//     }
//   };

//   return (
//     <header className="bg-black text-white p-4 flex flex-col sm:flex-row justify-between items-center">
//       {/* Logo */}
//       <div className="logo text-lg sm:text-3xl font-bold mb-4 sm:mb-0">
//         Weatherlyyy
//       </div>

//       {/* Search Bar */}
//       <div className="search-bar flex items-center bg-[#28282B] rounded-md w-full sm:w-[30%] px-2 sm:px-4 mb-4 sm:mb-0">
//         <input
//           type="text"
//           placeholder="Search location..."
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           className="bg-transparent text-white w-full p-2 focus:outline-none"
//         />
//         <FiSearch
//           className="text-white text-lg cursor-pointer"
//           onClick={handleSearch}
//         />
//       </div>

//       {/* Use Location Button */}
//       <button
//         className="location-button font-medium flex items-center bg-purple-500 px-4 py-2 rounded-md hover:bg-purple-600"
//         onClick={handleUseLocation}
//       >
//         <FiMapPin className="mr-2" />
//         Use Location
//       </button>
//     </header>
//   );
// };

// export default Header;



import React, { useState } from "react";
import { FiSearch, FiMapPin } from "react-icons/fi";
import { FaBars } from "react-icons/fa";

const Header = ({ onSearch, onToggleUnit, unit }) => {
  const [city, setCity] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-black text-white p-4 flex flex-col sm:flex-row justify-between items-center">
      {/* Logo */}
      <div className="logo text-lg sm:text-3xl font-bold mb-4 sm:mb-0">
        Weatherlyyy
      </div>

      <div className="flex flex-col sm:flex-row items-center w-full justify-between sm:w-auto">
        {/* Search Bar */}
        <div className="search-bar flex items-center bg-[#28282B] rounded-md w-full sm:w-[30%] px-2 sm:px-4 mb-4 sm:mb-0">
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

        {/* Menu Button */}
        <FaBars
          className="text-white text-lg cursor-pointer sm:hidden"
          onClick={toggleMenu}
        />

        {/* Menu */}
        <div
          className={`menu flex-col sm:flex-row sm:items-center ${
            menuOpen ? "flex" : "hidden"
          } sm:flex w-full sm:w-auto`}
        >
          {/* Use Location Button */}
          <button
            className="location-button font-medium flex items-center bg-purple-500 px-4 py-2 rounded-md hover:bg-purple-600 mb-2 sm:mb-0"
            onClick={handleUseLocation}
          >
            <FiMapPin className="mr-2" />
            Use Location
          </button>

          {/* Toggle Unit Button */}
          <button
            className="toggle-unit-button font-medium bg-purple-500 px-4 py-2 rounded-md hover:bg-purple-600 ml-2"
            onClick={onToggleUnit}
          >
            {unit === "metric" ? "°C" : "°F"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

