import React from 'react';

const CurrentWeatherComponent = ({value}) => {
  return (<div>
      <label>Current weather: {value ? value : 'Result not found'}</label>
  </div>)
}

export default CurrentWeatherComponent;
