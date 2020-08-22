import React from 'react';
import App from './App';
import { mount } from 'enzyme';

describe("Weather app", () => {

  let wrapper 

  beforeEach(() => {
    wrapper = mount(<App />)
  });
  
  test('renders title', () => {
    expect(wrapper.find("#title").text()).toContain("Weather App")
  });
});