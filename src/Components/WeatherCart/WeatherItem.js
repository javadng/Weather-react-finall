import classes from './WearherItem.module.scss';
import React from 'react';
import useCovertTime from '../../hooks/time-convert-API';
const WeatherItem = props => {
  const timeOption = {
    month: 'long',
    day: 'numeric',
  };

  const sunrise = useCovertTime(props.sunrise, 'en-US');

  const sunset = useCovertTime(props.sunset, 'en-US');

  const unixTime = useCovertTime(props.unixTime, 'fa-IR', timeOption);
  return (
    <React.Fragment>
      <li className={classes.weather__items}>
        <span className={classes.weather__item}>{unixTime}</span>
        <span className={classes.weather__item}>{props.desc}</span>
      </li>

      <li className={classes.weather__items}>
        <img
          className={classes.weather__img}
          alt="sun icon"
          src="https://img.icons8.com/color/48/000000/sunrise.png"
        />
        <span className={classes.weather__item}>{sunrise}</span>
      </li>
      <li className={classes.weather__items}>
        <img
          className={classes.weather__img}
          alt="sun icon"
          src="https://img.icons8.com/color/48/000000/sunset.png"
        />
        <span className={classes.weather__item}>{sunset}</span>
      </li>
      <li className={classes.weather__items}>
        <span>Temperature</span>
        <span className={classes.weather__item}>
          {Math.round(props.temp)} <sup>°</sup>
        </span>
      </li>
    </React.Fragment>
  );
};

export default WeatherItem;
