import '../styles/components/CurrentWeather.scss'
import { getCurrentWeather } from "../api";
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

    return(
        <>
        <div className="CurrentWeather">
            <div className="temperature">
                
            </div>
            <div className="other-infos">

            </div>
        </div>
        </>
    );
}

export default CurrentWeather;