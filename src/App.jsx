import { useState } from "react";

function App() {
  const [city, setCity] = useState("");

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <h1>Weather Dashboard</h1>
      <p>
        This app helps users quickly check current and upcoming weather for any
        city.
      </p>

      <input
        type="text"
        placeholder="Enter a city name"
        value={city}
        onChange={handleCityChange}
      />

      <p>City: {city}</p>
    </div>
  );
}

export default App;
