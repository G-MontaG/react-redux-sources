import React, { Component } from 'react';
import coinsData from '../../data/coinsList.json';
import CoinCard from '../../components/CoinCard';
import './Coins.css';

class Coins extends Component {
  state = {
    coinsList: Object.keys(coinsData.Data).slice(0, 10).map(key => coinsData.Data[key]),
    search: '',
  };

  handleSearchChange = (event) => {
    this.setState({ search: event.target.value });
  };

  render() {
    const { coinsList, search } = this.state;

    return (
      <div>
        <div>
          <label htmlFor="search">
            Search
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Type to search"
              value={search}
              onChange={this.handleSearchChange}
            />
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
