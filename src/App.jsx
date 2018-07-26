import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import Coins from './pages/coins/Coins';
import Converter from './pages/converter/Converter';
import History from './pages/history/History';
import News from './pages/news/News';
import TopExchanges from './pages/topExchanges/TopExchanges';
import ForOFor from './pages/404';
import CoinCard from './components/CoinCard';
import coinsData from './data/coinsList.json';
import './App.css';

class App extends Component {
  state = {
    coinsList: Object.keys(coinsData.Data).slice(0, 10).map(key => coinsData.Data[key]),
  };

  filterListById = (list, id) => (
    list.find(coin => coin.Id === id)
  );

  render() {
    const { coinsList } = this.state;

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

export default App;
