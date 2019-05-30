import React, { Component } from "react";
import "./WeatherApp.css";
import * as ELEMENTS from "./elements";
import { Http } from "./Http";
import { WeatherData, WEATHER_PROXY_HANDLER } from "weather-data";

const APP_ID = "7a16ae5f00183236823cfba9b7915108";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isResultVisible: false,
      city: null
    };
    this.city = null;
  }

  handleSearch = () => {
    if (this.city) {
      console.log(this.city);
      this.setState({ isResultVisible: true });
    } else this.setState({ isResultVisible: false });
    const URL =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      this.city +
      "&units=metric&appid=" +
      APP_ID;

    Http.fetchData(URL)
      .then(responseData => {
        const WEATHER_DATA = new WeatherData(
          this.city,
          responseData.weather[0].description.toUpperCase()
        );
        const WEATHER_PROXY = new Proxy(WEATHER_DATA, WEATHER_PROXY_HANDLER);
        WEATHER_PROXY.temperature = responseData.main.temp;
      })
      .catch(error => alert(error));
  };

  updateWeather = weatherData => {
    console.log(weatherData);
    ELEMENTS.ELEMENT_WEATHER_CITY.textContent = weatherData.cityName;
    ELEMENTS.ELEMENT_WEATHER_DESCRIPTION.textContent = weatherData.description;
    ELEMENTS.ELEMENT_WEATHER_TEMPERATURE.textContent = weatherData.temperature;

    ELEMENTS.ELEMENT_LOADING_TEXT.style.display = "none";
    ELEMENTS.ELEMENT_WEATHER_BOX.style.display = "block";
  };

  handleCityChange = e => {
    this.city = e.target.value.trim();
  };

  render() {
    // SectionA.revokeProxy();
    console.log("this.state: ", this.state);

    return (
      <section>
        <div className="header">The Weirdest Weather Forecast Application</div>
        <div className="setup">
          <label className="label">City Name</label>
          <input
            className="input"
            type="text"
            value={this.state.city}
            onChange={this.handleCityChange}
          />
          <button className="button" type="button" onClick={this.handleSearch}>
            Show Weather!
          </button>
        </div>
        {this.state.isResultVisible && (
          <div className="result">
            <div className="result-city">{this.city}</div>
            <div className="result-footer">
              <div className="result-condition">CONDITION</div>
              <div className="result-temperature">TEMP</div>
            </div>
          </div>
        )}
        <div className="footer">Seek JS Understanding</div>
      </section>
    );
  }
}

export default App;
