import React from 'react';
import { shallow } from 'enzyme';
import Coins from './Coins';

test('Coins render correctly', () => {
  const component = shallow(<Coins />);
  expect(component).toMatchSnapshot();
});
