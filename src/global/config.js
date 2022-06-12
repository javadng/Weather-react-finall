export const UNIT = 'metric';
// export const API_KEY = 'be49115ba23e2d2792cd558a205812ae';
export const API_KEY = '26c4d8ad14b57209671494df9bd9fcb9';

export const API_URL_forecast = `https://api.openweathermap.org/data/2.5/onecall?exclude=hourly,current&units=${UNIT}&appid=${API_KEY}`;

export const API_URL_weather = `https://api.openweathermap.org/data/2.5/weather?units=${UNIT}&appid=${API_KEY}&q=`;
// export const API_URL2 = 'https://api.openweathermap.org/data/2.5/weather?q=';
export const API_SEARCH = 'http://api.openweathermap.org/geo/1.0/direct';

/* second API */
// export const API_REVERSEGOE = 'https://api.geoapify.com/v1/geocode/reverse';
// export const API_GOE_KEY = '6278dd73e3574985b8357260c78e8f0a';

export const [lat, lon] = [32.653897, 51.665966];
// export const locale = 'fa-IR';
export const locale = navigator.language;
export const TIMEOUT_SEC = 10;
