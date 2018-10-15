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

xtest('Search should render correct amount of coins', () => {
  const component = shallow(<UnwrappedCoins coinsList={coinsList} />).dive();
  expect(component.find(Coin).length).toEqual(coinsList.length);
});

xtest('Search should render correct amount of coins based on seach term', () => {
  const component = shallow(<UnwrappedCoins coinsList={coinsList} />).dive();
  const searchTerm = 'bitcoin';
  component.setState({ search: searchTerm });
  const searchCount = component.instance().filterListBySearchTerm(coinsList, searchTerm).length;
  expect(component.find(Coin).length).toEqual(searchCount);
});
