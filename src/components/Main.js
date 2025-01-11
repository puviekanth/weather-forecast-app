import '../styles/components/Main.scss'
import CurrentWeather from './CurrentWeather';
import Forecast  from './Forecast';
import { getHourlyWeather,getdailyWeather } from '../api';
import { useContext } from 'react';
import WeatherContext from '../context/weather.context';
import Loader from './Loader';


function Main(){

    const {loading,currentWeather,hourlyforecast,dailyForecast} = useContext(WeatherContext);
    return(
       <>
       <div className="Main">
            {loading ?
            <Loader />:
            <>
            <CurrentWeather data={currentWeather} />
            <Forecast type='hourly' title='HOURLY FORECAST' data={hourlyforecast} />
            <Forecast type='dail' title='DAILY FORECAST' data={dailyForecast} />
            </>}
           
          
        </div>
        </>
        
        
    )
}

export default Main;

