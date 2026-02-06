import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [submittedCity, setSubmittedCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const trimmed = city.trim();
    if (!trimmed) return;

    setSubmittedCity(trimmed);
  }

  return (
    <div>
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
        <button type="submit">Search</button>
      </form>

      {submittedCity && <p>Searching for: {submittedCity}</p>}
    </div>
  );
}

export default App;
