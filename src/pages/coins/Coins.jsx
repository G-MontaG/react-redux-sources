import React, { Component } from 'react';
import coinsData from '../../data/coinsList.json';
import CoinCard from '../../components/CoinCard';
import './Coins.css';

class Coins extends Component {
  state = {
    coinsList: Object.keys(coinsData.Data).slice(0, 10).map(key => coinsData.Data[key]),
    search: '',
  };

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  handleSearchChange = (event) => {
    this.setState({ search: event.target.value });
  };

  filterListBySearchTerm = (list, searchTerm) => (
    list.filter(coin => coin.CoinName.toLowerCase().includes(searchTerm.toLowerCase()))
  );

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
          {this.filterListBySearchTerm(coinsList, search).map(coin => (
            <CoinCard coin={coin} key={coin.Id} />
          ))}
        </div>
      </div>
    );
  }
}

export default Coins;
