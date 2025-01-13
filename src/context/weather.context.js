import { createContext, useEffect, useState } from "react";
import { DEFAULT_PLACE,MEASUREMENT_SYSTEMS } from "../constants/index";
import { getWeatherdata } from "../api";

const WeatherContext = createContext();


function WeatherProvider({children}){

    const [place,setPlace] = useState(DEFAULT_PLACE);
    const [loading,setLoading] = useState(true);
    const [currentWeather,setCurrentWeather] = useState({});
    const [hourlyforecast , setHourlyForecast] = useState([]);
    const [dailyForecast , setDailyForecast] = useState([]);
    const [measurementSystem,setMeasurementSystem] = useState(MEASUREMENT_SYSTEMS.AUTO);

    useEffect(()=>{
        async function _getWeatherData() {
           setLoading(true);
           
            const cw = await getWeatherdata('current',place.place_id,'auto');
            setCurrentWeather(cw.current);
            console.log(cw)

            const hf = await getWeatherdata('hourly',place.place_id,'auto');
            setHourlyForecast(hf.hourly.data);
           
            const df = await getWeatherdata('daily',place.place_id,'auto');
            setDailyForecast(df.daily.data);

           setLoading(false);


        }
        _getWeatherData();
    },[place])

    return <WeatherContext.Provider value={{place,loading,currentWeather,hourlyforecast,dailyForecast,measurementSystem,setMeasurementSystem}}>
        {children}
    </WeatherContext.Provider>
}

export {WeatherProvider};
export default WeatherContext;