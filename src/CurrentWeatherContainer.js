import React from 'react';
import CurrentWeatherComponent from './CurrentWeatherComponent';
import axios from 'axios';

const APP_ID = '930fc96a';
const API_KEY = 'bd8f96bc469b5f3a186a7b87da0f8ddd';

class CurrentWeatherContainer extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          loading: true
      }

      this.getCurrentWeather = this.getCurrentWeather.bind(this);
  }

  getCurrentWeather = (location) => {
    return axios.get(`http://api.weatherunlocked.com/api/current/${location}?app_id=${APP_ID}&app_key=${API_KEY}`
    , {
      headers: {
          'Content-Type': 'application/json'
      }}).then((response) => { 
       this.setState({ value: response.data.temp_c, loading: false });
    });
}
 
  componentWillMount() {
      // GET API request here...
      // I didn't write a test for fetching the current weather because it's too much effort for now...
      if(this.props.location) {
         this.getCurrentWeather(this.props.location)  
      }
  }

  render() {
      if(!this.props.location) {
          return <div><label>Location not defined</label></div>
      } else {
          if(this.state.loading) {
              return <div><label>Loading data...</label></div>
          } else {
              return <CurrentWeatherComponent value={this.state.value} />
          }
      }
  }
}

export default CurrentWeatherContainer;