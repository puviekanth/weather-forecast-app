import currentWeeather from './current-weather.json'
import dailyForecast from './daily-forecast.json'
import hourltyForecast from './hourly-forecast.json'

function getCurrentWeather(){
    return currentWeeather.current
}



function getdailyWeather(){
    return dailyForecast.daily.data;
}



function getHourlyWeather(){
    return hourltyForecast.hourly.data;
}


export {getCurrentWeather,getdailyWeather,getHourlyWeather}
 