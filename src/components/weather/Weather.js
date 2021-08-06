import { useEffect, useState } from "react";
import { dateBuilder } from "./helpers.js";
export default function Weather({
  api_key = "7af4edd80277ecd98c9eb7b15f9cfb84",
  country_code = "US",
  zip_code = 37416,
  state_code = "Tennesse",
  city_name = "Chattanooga",
}) {
  const [location, setLocation] = useState({ lon: null, lat: null });
  const [weather, setWeather] = useState();
  const [fetchData, setFetchData] = useState(false);
  let [isLoading, setIsLoading] = useState(true);
  let [hide, setHide] = useState(true);
  useEffect(() => {
    async function getWeather() {
      try {
        const resp = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${api_key}&units=imperial`
        );
        if (resp.ok) {
          const response = await resp.json();
          setWeather(response);
          setIsLoading(false);
          setHide(false);
        }
      } catch (err) {
        setHide(false);
        alert("Cannot obtain weather");
        setIsLoading(false);
        console.log(err);
      }
    }
    if (fetchData) {
      getWeather();
    }
  });
  const useNavigation = async () => {
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        let { longitude, latitude } = position.coords;
        setLocation({ lat: latitude, lon: longitude });
        console.log(location)
        setFetchData(true);
      });
    } catch (err) {
      alert("Unable to retrieve your location");
    }
  };
  useEffect(() => {
    if (!navigator.geolocation) {
      alert("Geolocation may not be supported");
      return;
    }
  }, []);
  return (
    <div>
      {isLoading ? (
        <div>
          <button onClick={useNavigation}>Get My Location</button>
          {hide || <h3>Obtaining Location</h3>}
        </div>
      ) : (
        <div className="app">
          <div className="location-box">
            <div className="location">
              {weather.name}, {weather.sys.country}
            </div>
            <div className="date">{dateBuilder()}</div>
          </div>
          <div className="weather-box">
            <div>
              <img
                alt={`weather icon shows ${weather?.weather[0]?.main}`}
                src={`http://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
              />
            </div>
            <div className="temp">
              {`Air Temperature: ${weather.main.temp} °F`}
            </div>
            <div className="temp">
              {`Feels Like: ${weather.main.feels_like} °F`}
            </div>
            <div className="weather">{weather?.weather[0].main}</div>
            <div className="description">{weather?.weather[0].description}</div>
          </div>
        </div>
      )}
    </div>
  );
}
