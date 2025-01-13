import { useContext, useState } from 'react';
import ThemeContext from '../context/themes.context';
import '../styles/components/Settings.scss'
import { MEASUREMENT_SYSTEMS } from '../constants/index';
import WeatherContext from '../context/weather.context';
function Settings(){


    const [openSettings, setOpenSettings] = useState(false);
    const {dark,setDark,saveThemeToLocalStorage} = useContext(ThemeContext);
    

    const toggleTheme = () =>{
        setDark(prevDark =>!prevDark);
        saveThemeToLocalStorage(!dark);
    };

    const {measurementSystem,setMeasurementSystem} = useContext(WeatherContext)

    const changeMeasurementSystem = (system) =>{
        setMeasurementSystem(system);
        setOpenSettings(false);
    }

    return(
        <>
        <div className="Settings">
            <div className="theme-toggler">
                <div className="theme-buttons" onClick={toggleTheme}>
                    <div className={`light-theme-btn ${dark? "" : "active"}`}>
                    <i class="bi bi-sun"></i>
                    </div>
                    <div className={`dark-theme-btn ${dark? "active" : ""}`}>
                    <i class="bi bi-moon"></i>
                    </div>
                </div>
            </div>
            <div className="settings-btn" onClick={()=>setOpenSettings(prevVal => !prevVal)}>
            <i class={`bi bi-gear${openSettings ? '-fill' : ''}`}></i>
            </div>
            <div className={`settings-menu ${openSettings ? 'open' : ''}`}>
                <div className='measurement-systems'>
                    <h4>Measurement systems :</h4>
                    <div className='systems'>
                        {
                            Object.values(MEASUREMENT_SYSTEMS).map((system) =>(
                                <div className={`system 
                                ${system === measurementSystem ? 'active' : ''}`} 
                                key={system}
                                onClick={() => changeMeasurementSystem(system)}>
                                    {system}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Settings;

