import "./WeatherForecast.css";

const WeatherForecast = ({day, img, imgAlt, conditions, time}) => {
    return ( 
<div className="weather">
  <h2>{day}</h2>
  <img src={img} alt={imgAlt} />
  <p><span>conditions: </span>current weather conditions</p>
  <p><span>time: </span>time of day</p>
</div>);
};

export default WeatherForecast; 