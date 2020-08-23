import React from 'react';
import ReactDOM from "react-dom";
import App from './App';
import Weather from './components/weather';
import Form from './components/form';

import { mount, shallow  } from 'enzyme';

const simulateChangeOnInput = (wrapper, inputSelector, newValue) => {
  let input = wrapper.find(inputSelector)
  input.simulate('change', {
    target: { value: newValue }
  })
  return wrapper.find(inputSelector)
}

describe("Weather app", () => {

  let wrapper 

  beforeEach(() => {
    wrapper = mount(<App />)
    
  });

  test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  
  
  describe("Title", () =>{
    test('renders title', () => {
      expect(wrapper.find("#title").text()).toContain("Weather Finder")
    });
  })

  describe("Weather", () =>{
    test('renders title', () => {
      expect(wrapper.find("#weatherTitle").text()).toContain("Weather Component")
    });

    test("Renders the weather condition", () => {
      let wrapper2 = mount(<Weather 
        temp="16"
        city="London"
        country="GB"
        humidity="55"
        description="few clouds"
        error=""
      />)
      
      console.log(wrapper2.find("#weather-info").text())

      expect(wrapper2.find("#weather-info").text()).toContain("16LondonGB55few clouds")
    });
  });


  describe("Form", () =>{

    beforeEach(() =>{
      jest.resetAllMocks()
    });

    test('renders title', () => {
      expect(wrapper.find("#formTitle").text()).toContain("Form Component")
    });

    test("Lets me fill in form", () => {
      let cityValue = simulateChangeOnInput(wrapper, "#city-name-input", "London")
      let countryValue = simulateChangeOnInput(wrapper, "#country-name-input", "UK")

      expect(cityValue.props().value).toEqual("London")
      expect(countryValue.props().value).toEqual("UK")
    });

    test("Reset button to clear form", () => {
      let cityValue = simulateChangeOnInput(wrapper, "#city-name-input", "London")
      let countryValue = simulateChangeOnInput(wrapper, "#country-name-input", "UK")

      expect(cityValue.props().value).toEqual("London")
      expect(countryValue.props().value).toEqual("UK")
    
      let resetButton = wrapper.find("#resetButton")
      
      resetButton.simulate("click")

      expect(wrapper.find("#city-name-input").props().value).toEqual("")
      expect(wrapper.find("#country-name-input").props().value).toEqual("")

    });

    test("Sends form info to API", () => {

      const spy = jest.spyOn(global, "fetch")

      let cityValue = simulateChangeOnInput(wrapper, "#city-name-input", "London")
      let countryValue = simulateChangeOnInput(wrapper, "#country-name-input", "UK")

      wrapper.find("form").simulate("submit", {
        preventDefault: () => {}
      });

      expect(global.fetch).toHaveBeenCalledWith(`https://api.openweathermap.org/data/2.5/weather?q=London,UK&appid=53e8db7883d46c11daee344d54297d3c&units=metric`)
    });
  });

  

});

// test('submits username and password', () => {
//   const username = 'me';
//   const password = 'please';
//   const onSubmit = jest.fn();
//   const wrapper = mount(<Login onSubmit={onSubmit} />);

//   wrapper
//     .find({ 'data-testid': 'loginForm-username' })
//     .simulate('change', { target: { value: username } });

//   wrapper
//     .find({ 'data-testid': 'loginForm-password' })
//     .simulate('change', { target: { value: password } });

//   wrapper.update();
//   wrapper.find({ 'data-testid': 'loginForm' }).simulate('submit', {
//     preventDefault: () => {}
//   });

//   expect(onSubmit).toHaveBeenCalledTimes(1);
//   expect(onSubmit).toHaveBeenCalledWith({
//     username,
//     password
//   });
// });


 // const spy2 = jest.spyOn(global, "fetch").mockImplementation(() => {
      //   var data = {
      //     "coord": {
      //         "lon": -0.13,
      //         "lat": 51.51
      //     },
      //     "weather": [
      //         {
      //             "id": 801,
      //             "main": "Clouds",
      //             "description": "few clouds",
      //             "icon": "02d"
      //         }
      //     ],
      //     "base": "stations",
      //     "main": {
      //         "temp": 294.38,
      //         "feels_like": 291.21,
      //         "temp_min": 293.71,
      //         "temp_max": 295.37,
      //         "pressure": 1016,
      //         "humidity": 53
      //     },
      //     "visibility": 10000,
      //     "wind": {
      //         "speed": 5.1,
      //         "deg": 260
      //     },
      //     "clouds": {
      //         "all": 20
      //     },
      //     "dt": 1598193514,
      //     "sys": {
      //         "type": 1,
      //         "id": 1414,
      //         "country": "GB",
      //         "sunrise": 1598158769,
      //         "sunset": 1598209623
      //     },
      //     "timezone": 3600,
      //     "id": 2643743,
      //     "name": "London",
      //     "cod": 200
    //   //    }
    //   // })
  
    //   let cityValue = simulateChangeOnInput(wrapper, "#city-name-input", "London")
    //   let countryValue = simulateChangeOnInput(wrapper, "#country-name-input", "UK")
  
    //     wrapper.find("form").simulate("submit", {
    //       preventDefault: () => {}
    //     });
  
    //   expect(wrapper.state()).to.have.property()
  
    
    // })