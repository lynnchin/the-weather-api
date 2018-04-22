import React from 'react';
import {shallow, mount} from 'enzyme';
import CurrentWeatherContainer from './CurrentWeatherContainer';

test ('display message when no location is defined', () => {
    const wrapper = shallow(<CurrentWeatherContainer location={undefined} />)
    expect(wrapper.text()).toEqual('Location not defined')
});

test ('display loading message', () => {
    const wrapper = shallow(<CurrentWeatherContainer location={'12.0,-21.0'} />)
    expect(wrapper.text()).toEqual('Loading data...')
});

test ('renders current weather component', () => {
    const wrapper = shallow(<CurrentWeatherContainer location={'12.0,-21.0'} />)
    wrapper.setState({ loading: false });
    expect(wrapper.find('CurrentWeatherComponent')).toHaveLength(1);
});
