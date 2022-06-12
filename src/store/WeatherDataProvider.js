import { useReducer, useEffect, useCallback } from 'react';

import WeatherData from './weather-context';
import { API_URL_forecast, API_URL_weather } from '../global/config';
import useAJAX from '../hooks/ajax-call';
import useSearchAJAX from '../hooks/search-api';

// const [lat, lon] = [32.653897, 51.665966];

const defaultData = {
  current: [],
  daily: [],
  search: {
    query: '',
  },
  isLoading: false,
  error: null,
};

const stateReducer = (state, action) => {
  if (action.type === 'DAILY_AJAX') {
    return {
      current: state.current,
      daily: action.data,
      search: {
        query: '',
      },
    };
  }

  if (action.type === 'WEATHER_AJAX') {
    return {
      current: action.data,
      daily: state.daily,
      search: {
        query: '',
      },
    };
  }

  return defaultData;
};

const WeatherDataProvider = props => {
  let { isLoading, error, AJAXCALL } = useAJAX();
  const {searchAJAX } = useSearchAJAX();

  const [state, dispatchData] = useReducer(stateReducer, defaultData);

  const getSearchData = async query => {
    const coords = await searchAJAX(query);

    if (!coords) return console.log('search Error');

    const { lat, lon } = coords;
    getWeatherData(lat, lon);
  };

  const getWeatherData = useCallback(
    (lat, lon) => {
      // daily
      const dailyData = AJAXCALL(`${API_URL_forecast}&lat=${lat}&lon=${lon}`);
      // current
      const currentData = AJAXCALL(`${API_URL_weather}&lat=${lat}&lon=${lon}`);

      Promise.all([currentData, dailyData])
        .then(res => {
          dispatchData({ type: 'WEATHER_AJAX', data: res[0] });
          dispatchData({ type: 'DAILY_AJAX', data: res[1] });
        })
        .catch(err => console.log(err));
    },
    [AJAXCALL]
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      getWeatherData(latitude, longitude);
    });
  }, [getWeatherData]);

  const stateContext = {
    current: state.current,
    daily: state.daily,
    search: { query: '' },
    isLoading,
    error,
    getSearchData,
  };

  return (
    <WeatherData.Provider value={stateContext}>
      {props.children}
    </WeatherData.Provider>
  );
};

export default WeatherDataProvider;
