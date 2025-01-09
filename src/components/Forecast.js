import '../styles/components/Forecast.scss'
import DailyForecastWidget from './DailyForecastWidget';
import HourlyForecastWidget from './HourlyForecastWidget';

function Forecast({title,data,type}){
    return(
        <>
            <div className="Forecast">
                <div className="forecast-container">
                    <h3>{title}</h3>
                    <div className='widget-container'>
                       {
                        data.map((singleData)=>(
                            <div>
                                {
                                    type === 'hourly'?
                                    <HourlyForecastWidget data={singleData} /> : 
                                    <DailyForecastWidget data={singleData}/>
                                }
                            </div>
                        ))
                       }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Forecast;