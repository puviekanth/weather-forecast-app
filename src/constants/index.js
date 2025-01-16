export const DEFAULT_PLACE = {
    name:"Kandy",
    place_id:"kandy",
    adm_area1:"Central",
    adm_area2:null,
    country:"Sri Lanka",
    lat:"7.2906N",
    lon:"80.6336E",
    timezone:"Asia/Colombo",
    type:"settlement",
};
export const MEASUREMENT_SYSTEMS = {
    AUTO : 'auto',
    METRIC : 'metric',
    UK : 'uk',
    US : 'us',
    CA : 'ca',
};
export const UNITS = {
    metric : {
        temperature : '°C',
        precipitation : 'mm/h',
        wind_speed : 'm/s',
        visibility : 'km',
        humidity : '%',
        uv_index : '',
        cloud_cover : '%',
    },
    us:{
        
            temperature : '°F',
            precipitation : 'in/h',
            wind_speed : 'mph',
            visibility : 'mi',
            humidity : '%',
            uv_index : '',
            cloud_cover : '%',
    },
    uk : {
        temperature : '°C',
        precipitation : 'mm/h',
        wind_speed : 'mph',
        visibility : 'mi',
        humidity : '%',
        uv_index : '',
        cloud_cover : '%',
    },
    ca : {
        temperature : '°C',
        precipitation : 'mm/h',
        wind_speed : 'km/h',
        visibility : 'mi',
        humidity : '%',
        uv_index : '',
        cloud_cover : '%',
    }
}