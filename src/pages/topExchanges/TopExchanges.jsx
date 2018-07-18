import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import Coins from '../coins/Coins';
import News from '../news/News';

const TopExchanges = ({ match }) => (
  <div>
    <ul>
      <li>
        <NavLink to={match.path} activeClassName="active" exact>Main</NavLink>
      </li>
      <li>
        <NavLink to={`${match.path}/coins`} activeClassName="active">Coins</NavLink>
      </li>
      <li>
        <NavLink to={`${match.path}/news`} activeClassName="active">News</NavLink>
      </li>
    </ul>
    <Switch>
      <Route path={`${match.path}/coins`} component={Coins} />
      <Route path={`${match.path}/news`} component={News} />
    </Switch>
    Top Exchanges
  </div>
);

export default TopExchanges;
