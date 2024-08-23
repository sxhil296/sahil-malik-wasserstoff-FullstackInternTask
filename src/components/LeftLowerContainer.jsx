import React from "react";

const LeftLowerContainer = ({ forecast, unit }) => {
  // Convert temperature if needed
  const convertTemperature = (temp) => {
    return unit === "metric"
      ? `${Math.round(temp)}°C`
      : `${((temp * 9) / 5 + 32).toFixed(1)}°F`;
  };

  return (
    <div className="left-lower-container p-4 bg-[#28282B] shadow-xl text-white rounded-md">
      <h3 className="text-xl font-bold mb-4">5-Day Forecast</h3>
      <div className="flex flex-col space-y-2">
        {forecast.map((day, index) => (
          <div
            key={index}
            className="day-forecast grid grid-cols-3 gap-4 items-center"
          >
            {/* Temperature with Icon */}
            <div className="flex items-center">
              <img
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                alt={day.weather[0].description}
                className="w-8 h-8 mr-2"
              />
              <span>{convertTemperature(day.main.temp)}</span>
            </div>

            {/* Date */}
            <div>
              <span>
                {new Date(day.dt * 1000).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                })}
              </span>
            </div>

            {/* Day */}
            <div>
              <span>
                {new Date(day.dt * 1000).toLocaleDateString("en-US", {
                  weekday: "long",
                })}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftLowerContainer;
