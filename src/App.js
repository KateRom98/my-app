import React from "react";
import WeatherSearch from "./WeatherSearch";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather forecast🌡</h1>
      <WeatherSearch />
      <footer>
        <a href="" target="_blank">
          Open-source code
        </a>
        by Kateryna Dibtsova
      </footer>
    </div>
  );
}
