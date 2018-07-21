import React, { Component } from 'react';
import coinsList from '../../data/coinsList.json';
import CoinCard from '../../components/CoinCard';
import './Coins.css';

class Coins extends Component {
  constructor(props) {
    super(props);
    console.log(coinsList);
  }

  render() {
    return (
      <div className="coin-list">
        {Object.keys(coinsList.Data).slice(0, 10).map(key => (
          <CoinCard coin={coinsList.Data[key]} key={coinsList.Data[key].Id} />
        ))}
      </div>
    );
  }
}

export default Coins;
