import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const baseURL = process.env.REACT_APP_ENDPOINT;

const Weather = () => {
  const [icon, setIcon] = useState("");

  const getWeatherFromApi = async () => {
    try {
      const response = await fetch(`${baseURL}/weather`);
      const data = await response.json();
      if (data.icon) {
        setIcon(data.icon.slice(0, -1));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getWeatherFromApi();
  }, []);

  return (
    <div className="icon">
      {icon && <img src={`/img/${icon}.svg`} alt="weather icon" />}
    </div>
  );
};

ReactDOM.render(
  <Weather />,
  document.getElementById('app')
);