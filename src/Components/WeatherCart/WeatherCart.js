import React, { useContext } from 'react';

import './WeatherCart.scss';
import WeatherBack from './WeatherBack';
import WeatherFront from './WearherFront';
import Card from '../UI/Card';
import WeatherData from '../../store/weather-context';

const WeatherCart = () => {
  const dataCtx = useContext(WeatherData);

  const { daily: dailyCtx } = dataCtx.daily;

  return (
    <Card className="weather__cart">
      {dataCtx.isLoading && <h2 className="loading">Is Loading...</h2>}
      {dataCtx.error && <h2 className="error">{dataCtx.error.errorMessage}</h2>}
      {!dataCtx.isLoading && !dataCtx.error && dataCtx.current.length !== 0 && (
        <React.Fragment>
          <WeatherFront currentData={dataCtx.current} />
          <WeatherBack forecastData={dailyCtx.slice(1, 4)} />
        </React.Fragment>
      )}
    </Card>
  );
};

export default WeatherCart;
