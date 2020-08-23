import React from 'react';

function Form (props){

  const [city, setCity] = React.useState(undefined)
  const [country, setCountry] = React.useState(undefined)

  const updateCityField = (e) => {
    setCity(e.target.value)
  }

  const updateCountryField = (e) => {
    setCountry(e.target.value)
  }
  
  const cancelCourse = () => { 
    setCity("")
    setCountry("")
  }

  const submitForm = (event) => {
    let city = event.target.elements.city.value;
    let country = event.target.elements.country.value;
    props.fetchWeather(event, city, country)
  }
  

  return(
    <div>
      <h2 id="formTitle">Form Component</h2>
      <form id="weather-form" onSubmit={submitForm}>
        <input id="city-name-input" type="text" name="city" placeholder="City.." value={city} onChange={updateCityField}></input>
        <input id="country-name-input" type="text" name="country" placeholder="Country.." value={country} onChange={updateCountryField}></input>
        <button id="submit-weather-form">Get Weather</button>
      </form>
      <button id="resetButton" onClick={cancelCourse}>Reset</button>

    </div>
  )
    
}

export default Form;
