import React from 'react';
import { shallow } from 'enzyme';
import Coins from './Coins';
import Coin from '../../components/CoinCard';
import coinsData from '../../data/coinsList.json';

const coinsList = Object.keys(coinsData.Data).slice(0, 10).map(key => coinsData.Data[key]);

test('Coins render correctly', () => {
  const component = shallow(<Coins />);
  expect(component).toMatchSnapshot();
});

test('Search should render correct amount of coins', () => {
  const component = shallow(<Coins />);
  expect(component.find(Coin).length).toEqual(coinsList.length);
});

test('Search should render correct amount of coins based on seach term', () => {
  const component = shallow(<Coins />);
  const searchTerm = 'bitcoin';
  component.find('input').simulate('change', { target: { value: searchTerm } });
  const searchCount = component.instance().filterListBySearchTerm(coinsList, searchTerm).length;
  expect(component.find(Coin).length).toEqual(searchCount);
});
