import '../styles/components/Main.scss'
import CurrentWeather from './CurrentWeather';
import Forecast  from './Forecast';
import { getHourlyWeather,getdailyWeather } from '../api';


function Main(){
    return(
        <>
        <div className="Main">
            < CurrentWeather />
            <Forecast type='hourly' title='Hourly Forecast' data={getHourlyWeather()} />
            <Forecast type='dail' title='21 Days Forecast' data={getdailyWeather()} />
        </div>
        </>
    )
}

export default Main;

