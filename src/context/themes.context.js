import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();
const Theme_Key = 'theme';

function ThemeProvider({children}){ 
    const [dark,setDark] = useState(true);
    const saveThemeToLocalStorage = (theme) =>{
        localStorage.setItem(Theme_Key,JSON.stringify(theme));
    }

    useEffect(()=>{
        const savedTheme = JSON.parse(localStorage.getItem(Theme_Key));
        console.log(savedTheme)
        if(savedTheme !== null){
            setDark(savedTheme);
            return;
        }

        const isSystemThemeDark = window.matchMedia('(prefers-color-scheme : dark)').matches;

        setDark(isSystemThemeDark === true);
         
    },[])
    return (
    <ThemeContext.Provider value={{dark,setDark,saveThemeToLocalStorage}}>
        {children}
    </ThemeContext.Provider>
    );
}
export {ThemeProvider};
export default ThemeContext;