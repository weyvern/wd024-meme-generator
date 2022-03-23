import { useEffect, useState } from "react";

const useWeather = (location) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const locations = [
      { id: 1, name: "Leipzig", temp: 13, sky: "sunny" },
      { id: 2, name: "Berlin", temp: 16, sky: "sunny" }
    ];
    setWeather(locations.find((loc) => loc.name === location));
  }, [location]);

  return weather;
};

export default useWeather;
