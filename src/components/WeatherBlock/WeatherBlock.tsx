import React from 'react';

interface WeatherBlockProps {
  temperature: number;
  icon?: string;
  forecast: string;
}

const WeatherBlock: React.FC<WeatherBlockProps> = ({
  temperature,
  icon = 'src/assets/images/star.png',
  forecast
}) => {
  return (
    <div className="weather-block">
      <div className="weather-block__header">
        <img
          src={icon}
          alt="Погода"
          className="weather-icon"
        />
        <div className="temperature">{temperature}°C</div>
      </div>
      <div className="forecast">{forecast}</div>
    </div>
  );
};


export default WeatherBlock;

