import '../styles/components/CurrentWeather.scss'
import { getCurrentWeather } from "../api";
import { Value } from 'sass';
import WeatherIcon from './WeatherIcon';
function CurrentWeather(){
    const data = getCurrentWeather();
    const {
        cloud_cover, 
        feels_like,
        humidity,
        precipitation,
        uv_index,
        wind,
        visibility,
        icon_num,
        summary,
        temperature,
    } = data;

    const otherInfoWidgets = [
        {
            id:0,
            icon:'droplet',
            name:'Precipitation',
            value:Math.round(precipitation.total),
            unit:'in/h',
        },{
            id:1,
            icon:'wind',
            name:'Wind',
            value:wind.speed,
            unit:'mph',
        },{
            id:2,
            icon:'moisture',
            name:'Humidity',
            value:Math.round(humidity),
            unit:'%',
        },{
            id:3,
            icon:'sunglasses',
            name:'UV Index',
            value:Math.round(uv_index),
            unit:'',
        },{
            id:4,
            icon:'clouds-fill',
            name:'Clouds Cover',
            value:Math.round(cloud_cover),
            unit:'mi',
        },{
            id:5,
            icon:'eye',
            name:'Visibility',
            value:Math.round(visibility),
            unit:'mi',
        },
    ];

    return(
        <>
        <div className="CurrentWeather">
            <div className="temperature">
                <div className='weather-icon'>
                    <WeatherIcon iconNumber={icon_num} summary={summary} />
                </div>
                <div className='value'>
                    <div className='real'>
                        {temperature} &deg;
                    </div>
                    <div className='feels_like'>
                        Feels like {feels_like} &deg;
                    </div>
                </div>
                <div className='summary'>
                    {summary}
                </div>
            </div>
            <div className="other-infos">
                {otherInfoWidgets.map(({id,value,name,unit,icon})=>
                    <div className='widget' key={id}> 
                        <div className='widget-container'> 
                            <div className='info'>
                                <div className='icon'>
                                    <i className={`bi bi-${icon}`}></i>
                                </div>
                                <div className='value'>
                                    {value} {unit}
                                </div>
                            </div>
                            <div className='name'>
                                {name}
                            </div>
                        </div>
                    </div>

                )}
            </div>
        </div>
        </>
    );
}

export default CurrentWeather;