import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Landing from './pages/landing/Landing';
import Coins from './pages/coins/Coins';
import Converter from './pages/converter/Converter';
import History from './pages/history/History';
import News from './pages/news/News';
import TopExchanges from './pages/topExchanges/TopExchanges';
import ForOFor from './pages/404';
import CoinCard from './components/CoinCard';
import { getCoinsList } from './actions/CoinsActions';
import './App.css';

class AppComponent extends Component {
  static propTypes = {
    coinsList: PropTypes.array,
    getCoinsList: PropTypes.func,
  };

  filterListById = (list, id) => (
    list.find(coin => coin.Id === id)
  );

  componentDidMount() {
    this.props.getCoinsList();
  }

  render() {
    const { coinsList } = this.props;

    return (
      <BrowserRouter>
        <div className="App">
          <ul>
            <li>
              <NavLink to="/" activeClassName="active" exact>Landing</NavLink>
            </li>
            <li>
              <NavLink to="/coins" activeClassName="active">Coins</NavLink>
            </li>
            <li>
              <NavLink to="/converter" activeClassName="active">Converter</NavLink>
            </li>
            <li>
              <NavLink to="/history" activeClassName="active">History</NavLink>
            </li>
            <li>
              <NavLink to="/news" activeClassName="active">News</NavLink>
            </li>
            <li>
              <NavLink to="/top-exchanges" activeClassName="active">TopExchanges</NavLink>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/coins" component={props => <Coins {...props} coinsList={coinsList} />} />
            <Route
              path="/coins/:id"
              component={props => (
                <CoinCard {...props} coin={this.filterListById(coinsList, props.match.params.id)} />
              )}
            />
            <Route path="/converter" component={Converter} />
            <Route path="/history" component={History} />
            <Route path="/news" component={News} />
            <Route path="/top-exchanges" component={TopExchanges} />
            <Route component={ForOFor} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  coinsList: state.coinsReducer.coinsList,
});

const mapDispatchToProps = {
  getCoinsList,
};

const App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppComponent);

export default App;
