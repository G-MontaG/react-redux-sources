import React from 'react';
import { shallow } from 'enzyme';
import { UnwrappedCoins } from './Coins';
import Coin from '../../components/CoinCard';
import coinsData from '../../data/coinsList.json';

const coinsList = Object.keys(coinsData.Data).slice(0, 10).map(key => coinsData.Data[key]);

test('Coins render correctly', () => {
  const component = shallow(<UnwrappedCoins coinsList={coinsList} search="" searchCoinsAction={() => {}} />);
  expect(component).toMatchSnapshot();
});

test('Search should render correct amount of coins', () => {
  const component = shallow(<UnwrappedCoins coinsList={coinsList} search="" searchCoinsAction={() => {}} />);
  expect(component.find(Coin).length).toEqual(coinsList.length);
});

test('Search should render correct amount of coins based on seach term', () => {
  const searchTerm = 'bitcoin';
  const component = shallow(<UnwrappedCoins coinsList={coinsList} search={searchTerm} searchCoinsAction={() => {}} />);
  const searchCount = component.instance().filterListBySearchTerm(coinsList, searchTerm).length;
  expect(component.find(Coin).length).toEqual(searchCount);
});
