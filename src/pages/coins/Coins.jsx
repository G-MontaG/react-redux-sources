import React, { Component } from 'react';
import coinsData from '../../data/coinsList.json';
import CoinCard from '../../components/CoinCard';
import './Coins.css';

class Coins extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      coinsList: Object.keys(coinsData.Data).slice(0, 10).map(key => coinsData.Data[key]),
    };
  }

  render() {
    const { coinsList } = this.state;

    return (
      <div>
        <div>
          <label htmlFor="search">
            Search
            <input type="text" name="search" id="search" />
          </label>
        </div>
        <div className="coin-list">
          {coinsList.map(coin => (
            <CoinCard coin={coin} key={coin.Id} />
          ))}
        </div>
      </div>
    );
  }
}

export default Coins;
