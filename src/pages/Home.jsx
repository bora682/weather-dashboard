import { useEffect, useState } from "react";

export default function Home() {
  const [city, setCity] = useState("");
  const [submittedCity, setSubmittedCity] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [weather, setWeather] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    const trimmed = city.trim();
    if (!trimmed) return;

    setSubmittedCity(trimmed);
    setCity("");
    setError("");
  }

  useEffect(() => {
    if (!submittedCity) return;

    async function fetchWeather() {
      setLoading(true);
      setError("");
      setWeather(null);

      try {
        const geoRes = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
            submittedCity
          )}&count=1&language=en&format=json`
        );

        if (!geoRes.ok) throw new Error("Geocoding request failed.");

        const geoData = await geoRes.json();
        const first = geoData?.results?.[0];

        if (!first) throw new Error("City not found. Try another name.");

        const { latitude, longitude, name, country } = first;

        const weatherRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=auto`
        );

        if (!weatherRes.ok) throw new Error("Weather request failed.");

        const weatherData = await weatherRes.json();

        setWeather({
          locationName: `${name}, ${country}`,
          current: weatherData.current_weather,
          daily: weatherData.daily,
        });
      } catch (err) {
        setError(err.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [submittedCity]);

  return (
    <div className="app-container">
      <h1>Weather Dashboard</h1>
      <p>
        This app helps users quickly check current and upcoming weather for any
        city.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {!submittedCity && !loading && !error && !weather && (
        <p>Type a city and click Search to see the forecast.</p>
      )}

      {submittedCity && <p>Searching for: {submittedCity}</p>}

      {error && <p style={{ color: "crimson" }}>Error: {error}</p>}

      {weather && (
        <div className="weather-card">
          <h2>{weather.locationName}</h2>

          <p>
            <strong>Current temperature:</strong> {weather.current.temperature}°C
          </p>
          <p>
            <strong>Wind:</strong> {weather.current.windspeed} km/h
          </p>

          <h3>Next days</h3>
          <ul>
            {weather.daily.time.slice(0, 5).map((date, idx) => (
              <li key={date}>
                {date}: {weather.daily.temperature_2m_min[idx]}°C –{" "}
                {weather.daily.temperature_2m_max[idx]}°C
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
