import axios from 'axios';
export async function getWeatherdata(endpoint, place_id, measurementSystem)
{
   

const options = {
  method: 'GET',
  url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endpoint}`,
  params: {
    place_id,
    language: 'en',
    units: measurementSystem,
  },
  headers: {
    'x-rapidapi-key': '059f4bb93amsh181497324054852p14013djsn368e80703ca9',
    'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	return response.data;
} catch (error) {
	console.error(error);
}
}

export async function searchPlaces(text){
  const options = {
    method: 'GET',
    url: 'https://ai-weather-by-meteosource.p.rapidapi.com/find_places',
    params: {
      text: text,
      language: 'en'
    },
    headers: {
      'x-rapidapi-key': '059f4bb93amsh181497324054852p14013djsn368e80703ca9',
      'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

 