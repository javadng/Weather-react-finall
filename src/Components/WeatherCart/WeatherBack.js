import React from 'react';
import WearherLists from './Weatherlists';

import './WeatherStyle.scss';

const WeatherBack = props => {
  return (
    <div className="back cart--setup">
      {props.forecastData.map(list => (
        <WearherLists key={list.dt + Math.random() + ''} data={list} />
      ))}
    </div>
  );
};

export default React.memo(WeatherBack);
