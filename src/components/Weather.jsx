import React, { useState } from 'react';
import Form from './Form';
import Card from './Card';
 

const Weather = () => {
  const [weather, setWeather] = useState([]);
 
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState('');

  const getLocation = async (loc) => {
    setLoading(true);
    setLocation(loc);

    let urlWeather = `https://api.openweathermap.org/data/2.5/weather?appid=${
      import.meta.env.VITE_API_KEY
    }&lang=es&q=${loc}`;
 

    try {
      const weatherResponse = await fetch(urlWeather);
      if (!weatherResponse.ok) {
        throw new Error(weatherResponse.statusText);
      }
      const weatherData = await weatherResponse.json();
      console.log(weatherData);
      setWeather(weatherData);

 
      setLoading(false);
      setShow(true);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setShow(false);
    }
  };

  return (
    <div>
      <Form newLocation={getLocation} />
      <Card showData={show} loadingData={loading} weather={weather}  />
    </div>
  );
};

export default Weather;
