import React from 'react';
import Title from "./components/title"
import Form from "./components/form"
import Weather from "./components/weather"
import "./App.css";

const API_KEY = "53e8db7883d46c11daee344d54297d3c"
// api.openweathermap.org/data/2.5/weather?q={cityName},{countryName}&appid={API_KEY}&units=metric


function App() {

  const [temp, setTemp] = React.useState(undefined)
  const [city, setCity] = React.useState(undefined)
  const [country, setCountry] = React.useState(undefined)
  const [humidity, setHumidity] = React.useState(undefined)
  const [description, setDescription ] = React.useState(undefined)
  const [error, setError] = React.useState(undefined)

  const fetchWeather = (e, city, country) => {
    e.preventDefault();

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
    .then((response) => response.json())
    .then((data) => {
      if(city && country){
        setTemp(data.main.temp)
        setCity(data.name)
        setCountry(data.sys.country)
        setHumidity(data.main.humidity)
        setDescription(data.weather[0].description)
        setError("")
        console.log(data)
      } else {
        setTemp(undefined)
        setCity(undefined)
        setCountry(undefined)
        setHumidity(undefined)
        setDescription(undefined)
        setError("Please enter location values.")
        console.log(data)
      }
    }).catch(error => console.log('Request failed:', error));  
  }

  return (
    <div className="App">
      <div className='wrapper'>
        <div className="main">
          <div className="container">
            <div className="row">
              <div className='col-xs-5 title-container'>
                <Title />
              </div>
              <div className='col-xs-7 form-container'>
                <main>
                  < Form fetchWeather={fetchWeather}/>
                  < Weather 
                    temp={temp}
                    city={city}
                    country={country}
                    humidity={humidity}
                    description={description}
                    error={error}
                  />
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>         
    </div>
  );
}

export default App;
