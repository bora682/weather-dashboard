export default function About() {
    return (
      <div className="app-container">
        <h1>About</h1>
        <p>
          Weather Dashboard is a React app that lets users search any city and view
          current weather plus a short forecast.
        </p>
  
        <h2>APIs Used</h2>
        <ul>
          <li>Open-Meteo Geocoding API (city → latitude/longitude)</li>
          <li>Open-Meteo Forecast API (current weather + daily highs/lows)</li>
        </ul>
      </div>
    );
  }
  