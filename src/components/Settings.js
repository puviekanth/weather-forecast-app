import { useContext } from 'react';
import ThemeContext from '../context/themes.context';
import '../styles/components/Settings.scss'
function Settings(){

    const {dark,setDark,saveThemeToLocalStorage} = useContext(ThemeContext);

    const toggleTheme = () =>{
        setDark(prevDark =>!prevDark);
        saveThemeToLocalStorage(!dark);
    };

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
            <div className="settings-btn">
            <i class="bi bi-gear-fill"></i>
            </div>
        </div>
        </>
    );
}
export default Settings;

