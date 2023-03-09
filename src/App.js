import React from "react";
import WeatherSearch from "./WeatherSearch";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather forecast🌡</h1>
      <WeatherSearch />
      <footer>
        <a
          href="https://github.com/KateRom98/my-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        by Kateryna Dibtsova
      </footer>
    </div>
  );
}
