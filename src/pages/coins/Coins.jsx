import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CoinCard from '../../components/CoinCard';
import './Coins.css';
import Input from '../../components/Input';
import { searchCoinsAction } from '../../actions/SearchActions';

class Coins extends Component {
  static propTypes = {
    coinsList: PropTypes.array.isRequired,
    search: PropTypes.string.isRequired,
    searchCoinsAction: PropTypes.func.isRequired,
  };

  handleSearchChange = (search) => {
    this.props.searchCoinsAction(search);
  };

  filterListBySearchTerm = (list, searchTerm) => (
    list.filter(coin => coin.CoinName.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  render() {
    const { coinsList, search } = this.props;

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

const mapStateToProps = state => ({
  search: state.searchReducer.search,
});

const mapDispatchToProps = {
  searchCoinsAction,
};

const CoinsComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Coins);

export default CoinsComponent;
