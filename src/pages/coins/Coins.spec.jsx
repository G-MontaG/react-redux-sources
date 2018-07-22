import React from 'react';
import renderer from 'react-test-renderer';
import Coins from './Coins';

test('Coins render correctly', () => {
  const component = renderer.create(<Coins />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
