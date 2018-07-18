import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import Coins from './pages/coins/Coins';
import Converter from './pages/converter/Converter';
import History from './pages/history/History';
import News from './pages/news/News';
import TopExchanges from './pages/topExchanges/TopExchanges';
import ForOFor from './pages/404';
import './App.css';

const App = () => (
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
        <Route path="/coins" component={Coins} />
        <Route path="/converter" component={Converter} />
        <Route path="/history" component={History} />
        <Route path="/news" component={News} />
        <Route path="/top-exchanges" component={TopExchanges} />
        <Route component={ForOFor} />
      </Switch>
    </div>
  </BrowserRouter>
);

App.displayName = 'App';

export default App;
