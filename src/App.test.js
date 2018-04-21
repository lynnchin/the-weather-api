import React from 'react';
import {shallow} from 'enzyme';

test('render a label', () => {
  const wrapper = shallow(
      <div>hello!</div>
  );
  expect(wrapper).toMatchSnapshot();
});