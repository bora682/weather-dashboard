# Weather Dashboard

## Live Demo
https://bora-weather-dashboard.netlify.app

A React + Vite single page application (SPA) that allows users to search for a city and view current weather plus a short multi-day forecast.

## Features

- Search for any city by name
- Displays current temperature and wind speed
- Shows upcoming daily high and low temperature
- Handles errors (e.g., city not found)
- Multi-page navigation using React Router (Home, About, Help)

## APIs used

- **Open-Meteo Geocoding API**  
  Converts city name into latitude and longitude. 
  Endpoint: `https://geocoding-api.open-meteo.com/v1/search`

- **Open-Meteo Forecast API**  
  Returns current weather and daily forecast data. 
  Endpoint: `https://api.open-meteo.com/v1/forecast`
  

## Tech Stack

- React
- Vite
- React Router DOM

## Installation

Clone the repository:

```bash
git clone https://github.com/bora682/weather-dashboard.git
```

Install dependencies:

```bash
npm install
```

Start development server:
```
npm run dev
```

Open the local URL shown in your terminal (for example: http://localhost:5174/)

## Routes
- `/` -> Home (Search and weather display)
- `/about` -> About page
- `/help` -> Help / usage instructions