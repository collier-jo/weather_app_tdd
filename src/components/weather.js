import React from 'react';

function Weather (props){

  return(
    <div>
      <h2 id="weatherTitle">Weather Component</h2>
      <div id="weather-info">
        { props.city && props.country && <p>Location: {props.city}, {props.country }</p>}
        { props.temp && <p>Temperature: {props.temp}</p> }       
        { props.humidity && <p>Humidity: {props.humidity}</p> }       
        { props.description && <p>Description: {props.description}</p> }
        { props.error && <p>{props.error}</p> }
      </div>

    </div>
  )
    
}

export default Weather;
