import React from 'react';
import useCovertTime from '../../hooks/time-convert-API';

import './WeatherStyle.scss';

const WeatherFront = props => {
  const data = props.currentData;

  const time = useCovertTime(data.dt, 'en-US');

  return (
    <div className="front cart--setup">
      <div className="weather__city">
        <span>{time}</span>
        <br />
        <span className="city__name">{data.name}</span>
      </div>

      <div className="weather__temp">
        <h3 className="weather__temp--deg">
          {Math.round(data.main.temp)}
          <sup>°</sup>
        </h3>
      </div>

      <div className="weather__icon">
        <img
          alt="some"
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        />
      </div>

      <div className="weather__desc">
        <span>
          Sky : {data.weather[0].main} and Humidity : {data.main.humidity}%
        </span>
      </div>
    </div>
  );
};

export default React.memo(WeatherFront);
