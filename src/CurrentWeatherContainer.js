import React from 'react';
import CurrentWeatherComponent from './CurrentWeatherComponent';
import { getCurrentWeather } from './api';

class CurrentWeatherContainer extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          loading: true
      }
  }
 
  componentWillMount() {
      // GET API request here...
      if(this.props.location) {
        getCurrentWeather(this.props.location).then((data) => {
            this.setState({ value: data.temp_c, loading: false });
        })
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