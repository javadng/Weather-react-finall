import React from 'react';

const WeatherData = React.createContext({
  current: {},
  daily: [],
  search: {
    query: '',
  },
  isLoading: false,
  error: null,
  setCurrentData: () => {},
  setDailyData: () => {},
  getSearchData: query => {},
});

export default WeatherData;
