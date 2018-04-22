import axios from 'axios';

const APP_ID = '930fc96a';
const API_KEY = 'bd8f96bc469b5f3a186a7b87da0f8ddd';

export const getCurrentWeather = (location) => {
    return axios.get(`http://api.weatherunlocked.com/api/current/${location}?app_id=${APP_ID}&app_key=${API_KEY}`
    , {
      headers: {
          'Content-Type': 'application/json'
      }}).then((response) => response.data);
}