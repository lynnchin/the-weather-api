import React from 'react';
import {shallow} from 'enzyme';
import CurrentWeatherComponent from './CurrentWeatherComponent'

test ('renders "result not found"', () => {
    const wrapper = shallow(<CurrentWeatherComponent value={undefined} />)
    expect(wrapper.text()).toContain('Result not found')
})

test ('display current weather', () => {
    const wrapper = shallow(<CurrentWeatherComponent value={'12.0'} />)
    expect(wrapper.text()).toContain('12.0');
}) 
