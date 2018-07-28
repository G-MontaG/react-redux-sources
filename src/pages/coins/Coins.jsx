import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CoinCard from '../../components/CoinCard';
import './Coins.css';
import Input from '../../components/Input';

class Coins extends Component {
  static propTypes = {
    coinsList: PropTypes.array.isRequired,
  };

  state = {
    search: '',
  };

  handleSearchChange = (search) => {
    this.setState({ search });
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
          <Input value={search} onChange={this.handleSearchChange} />
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
