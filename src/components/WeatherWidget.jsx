import { useEffect, useState } from "react";

import '../styles/weatherwidget.css';

const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;

export default function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!API_KEY) {
      setError("API Key de OpenWeather no configurada");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;

        try {
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=es&appid=${API_KEY}`
          );

          if (!res.ok) {
            throw new Error("Error API OpenWeather");
          }

          const data = await res.json();
          setWeather(data);
        } catch (err) {
          setError("No se pudo cargar el clima");
        }
      },
      () => setError("Permiso de ubicación denegado")
    );
  }, []);

  if (error) return <p>{error}</p>;
  if (!weather) return <p>Cargando clima...</p>;
  

  return (
    <div className="weather-box">
  <h4 className="weather-city">{weather.name}</h4>

  <img
    className="weather-icon"
    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
    alt={weather.weather[0].description}
  />

  <p className="weather-temp">
    {Math.round(weather.main.temp)}°C
  </p>

  <small className="weather-desc">
    {weather.weather[0].description}
  </small>
</div>
  );
}