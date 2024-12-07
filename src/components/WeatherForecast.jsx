import '../WeatherForecast.css'
const WeatherForecast = ({ weatherForecasts }) => {
  return (
    <div className="weather">
      <h2>{weatherForecasts.day}</h2>
      <img src={weatherForecasts.img} alt={weatherForecasts.imgAlt} />
      <p>
        <span>conditions: </span>
        {weatherForecasts.conditions}
      </p>
      <p>
        <span>time: </span>
        {weatherForecasts.time}
      </p>
    </div>
  )
}
export default WeatherForecast
