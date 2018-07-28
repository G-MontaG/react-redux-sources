import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CoinCard from '../../components/CoinCard';
import './Coins.css';

class Coins extends Component {
  propTypes = {
    coinsList: PropTypes.array.isRequired,
  };

  defaultProps = {
    coinsList: [],
  }

  state = {
    search: '',
  };

  handleSearchChange = (event) => {
    this.setState({ search: event.target.value });
  };

  filterListBySearchTerm = (list, searchTerm) => (
    list.filter(coin => coin.CoinName.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  render() {
    const { search } = this.state;
    const { coinsList } = this.props;

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
