export const convertTemperature = (temp, unit) => {
    return unit === "metric"
      ? `${temp}°C`
      : `${((temp * 9) / 5 + 32).toFixed(1)}°F`;
  };