import { useState, useEffect } from "react";
import Loading from "./Loading";
import ErrorPage from "./ErrorPage";

function MainContent({ city }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      setLoading(true);
      setError("");
      setWeather(null);

      try {
        const res = await fetch(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=${apiKey}&contentType=json`,
        );

        if (!res.ok) {
          setError("Please Enter A Valid City Name");
          setLoading(false);
          return;
        }

        const data = await res.json();
        setWeather(data);
      } catch {
        setError("Error Fetching Weather Data");
      }

      setLoading(false);
    };

    fetchWeather();
  }, [city]);

  if (!city) {
    return (
      <div className="loading-screen">
        <h2>Please Enter Your City Name 🌍</h2>
      </div>
    );
  }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage message={error} />;
  }

  if (!weather) {
    return (
      <div className="loading-screen">
        <h2>Fetching Weather Data...</h2>
      </div>
    );
  }

  return (
    <div className="data-container">
      <div className="cards p-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {/* City Data */}
          <div className="col">
            <div className="cCard h-100">
              <div className="img-container border-bottom">
                <img
                  src="/WeatherIcons-main/map.png"
                  className="card-img-top"
                />
              </div>

              <div className="card-body m-4">
                <h5 className="card-title mb-3">City Data</h5>
                <p>City: {weather.address}</p>
                <p>Latitude: {weather.latitude}</p>
                <p>Longitude: {weather.longitude}</p>
                <p>Address: {weather.resolvedAddress}</p>
                <p>Timezone: {weather.timezone}</p>
                <p>Description: {weather.description}</p>
              </div>
            </div>
          </div>

          {/* Current Weather */}
          <div className="col">
            <div className="cCard h-100">
              <div className="img-container border-bottom">
                <img
                  src={`/WeatherIcons-main/SVG/3rd Set - Color/${weather.currentConditions.icon}.svg`}
                  className="card-img-top"
                />
              </div>

              <div className="card-body m-4">
                <h5 className="card-title mb-3">Current Conditions</h5>

                <p>Datetime: {weather.currentConditions.datetime}</p>
                <p>Feels Like: {weather.currentConditions.feelslike}</p>
                <p>Humidity: {weather.currentConditions.humidity}</p>
                <p>Wind Speed: {weather.currentConditions.windspeed}</p>
                <p>Pressure: {weather.currentConditions.pressure}</p>
                <p>Visibility: {weather.currentConditions.visibility}</p>
                <p>Conditions: {weather.currentConditions.conditions}</p>
                <p>Sunrise: {weather.currentConditions.sunrise}</p>
                <p>Sunset: {weather.currentConditions.sunset}</p>
              </div>
            </div>
          </div>

          {/* Forecast */}
          {weather?.days?.slice(0, 7).map((day) => (
            <div className="col" key={day.datetime}>
              <div className="cCard">
                <div className="img-container border-bottom">
                  <img
                    src={`WeatherIcons-main/SVG/3rd Set - Color/${day.icon}.svg`}
                    className="card-img-top"
                  />
                </div>

                <div className="card-body m-4">
                  <h5 className="card-title mb-3">Date: {day.datetime}</h5>

                  <p>Max Temp: {day.tempmax}</p>
                  <p>Min Temp: {day.tempmin}</p>
                  <p>Temp: {day.temp}</p>
                  <p>Humidity: {day.humidity}</p>
                  <p>Wind Speed: {day.windspeed}</p>
                  <p>Pressure: {day.pressure}</p>
                  <p>Conditions: {day.conditions}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainContent;
