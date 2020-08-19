import React, { useState } from "react";

import "./App.css";
import { dateBuilder, showNotif } from "./helpers/helpers";

const api = {
  key: "8a7ece7c8d9c1de8f1439a34f030c2ad",
  base: "https://api.openweathermap.org/data/2.5/",
};

//

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [show, setShow] = useState(false);

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          console.log(result.sys.country);
          setWeather(result);
          setQuery("");
        })
        .catch((error) => {
          // console.log("please enter a valid location");
          setQuery("");
          showNotif(setShow);
        });
    }
  };

  const bg = {
    Clouds: "App Clouds",
    Rain: "App Rain",
    Clear: "App Clear",
    Snow: "App Snow",
  };

  return (
    <div
      className={
        typeof weather.main != "undefined" ? bg[weather.weather[0].main] : "App"
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            placeholder="search..."
            className="search-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">{`${weather.name}, ${weather.sys.country}`}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{`${Math.round(weather.main.temp)}°c`}</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className={show ? "notification show" : "notification"}>
          Please enter a valid location
        </div>
      </main>
    </div>
  );
}

export default App;
