import React, { useContext } from 'react';

import Card from '../UI/Card';
import Search from '../UI/SearchComponent/Search';
import classes from './Header.module.scss';

import WeatherData from '../../store/weather-context';

const Header = props => {
  const dataCtx = useContext(WeatherData);

  const searchHandler = query => {
    dataCtx.search.query = query;

    dataCtx.getSearchData(query);
  };

  return (
    <header className={classes.header}>
      <Card className={classes.header__container}>
        <div className={classes.header__title}>Weather React-App</div>
        <div className={classes.header__icon}>
          <img
            alt="some Dummy img"
            src="https://img.icons8.com/color/48/000000/partly-cloudy-day--v1.png"
          />
        </div>

        <Search className={classes.header__search} onSubmit={searchHandler} />
      </Card>
    </header>
  );
};

export default Header;
