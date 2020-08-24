import React from 'react';

function Weather (props){

  return(
    <div>
      <div id="weather-info" className="weather-info">
        { 
        props.city && props.country && <p className="weather__key">Location:  
          <span className="weather__value"> { props.city}, {props.country }</span>
         </p>
        }
        { 
        props.temp && <p className="weather__key">Temperature: 
            <span className="weather__value"> {props.temp}</span>
          </p> 
        }       
        { 
        props.humidity && <p className="weather__key">Humidity: 
            <span className="weather__value"> {props.humidity}</span>
          </p> 
        }       
        { 
        props.description && <p className="weather__key">Description: 
            <span className="weather__value"> {props.description}</span>
          </p> 
        }
        { 
        props.error && <p className="weather__error">
            <span>{props.error}</span>
          </p> 
        }
      </div>

    </div>
  )
    
}

export default Weather;
