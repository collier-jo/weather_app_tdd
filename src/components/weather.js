import React from 'react';

function Weather (props){

  return(
    <div>
      <h2 id="weatherTitle">Weather Component</h2>
      <div id="weather-info">
        <p id="temp-info">{props.temp}</p> 
        <p>{props.city}</p> 
        <p>{props.country}</p> 
        <p>{props.humidity}</p> 
        <p>{props.description}</p> 
        <p>{props.error}</p> 
      </div>

    </div>
  )
    
}

export default Weather;
