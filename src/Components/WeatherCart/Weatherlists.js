import WeatherItem from './WeatherItem';
import classes from './WeatherLists.module.scss';

const WeatherLists = props => {
  const styles = `${classes['weather__list']} ${props.className}`;

  // console.log(props.data);

  return (
    <ul className={styles}>
      {
        <WeatherItem
          key={props.data.dt}
          icon={props.data.weather[0].icon}
          desc={props.data.weather[0].description}
          sunrise={props.data.sunrise}
          sunset={props.data.sunset}
          temp={props.data.temp.eve}
          unixTime={props.data.dt}
        />
      }
    </ul>
  );
};

export default WeatherLists;
