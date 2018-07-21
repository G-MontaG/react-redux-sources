import React, { Component } from 'react';
import coinsList from '../../data/coinsList.json';
import CoinCard from '../../components/CoinCard';

class Coins extends Component {
  constructor(props) {
    super(props);
    console.log(coinsList);
  }

  render() {
    return (
      <div>
        Coins
        {Object.keys(coinsList.Data).map(key => (
          <CoinCard coin={coinsList.Data[key]} key={coinsList.Data[key].Id} />
        ))}
      </div>
    );
  }
}

export default Coins;
