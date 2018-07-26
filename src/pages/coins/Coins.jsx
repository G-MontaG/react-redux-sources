import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
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

  filterListById = (list, id) => (
    list.find(coin => coin.Id === id)
  );

  render() {
    const { coinsList, search } = this.state;
    const { match } = this.props;

    return (
      <div>
        <Switch>
          <Route
            path={`${match.path}/:id`}
            component={props => (
              <CoinCard {...props} coin={this.filterListById(coinsList, props.match.params.id)} />
            )}
          />
        </Switch>
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
            <CoinCard coin={coin} key={coin.Id} search={search} />
          ))}
        </div>
      </div>
    );
  }
}

export default Coins;
