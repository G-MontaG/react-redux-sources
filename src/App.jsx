import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Landing from './pages/landing/Landing';

import './App.css';
import Coins from './pages/coins/Coins';
import Converter from './pages/converter/Converter';
import History from './pages/history/History';
import News from './pages/news/News';
import TopExchanges from './pages/topExchanges/TopExchanges';

const App = () => (
  <HashRouter>
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route path="/coins" component={Coins} />
      <Route path="/converter" component={Converter} />
      <Route path="/history" component={History} />
      <Route path="/news" component={News} />
      <Route path="/top-exchanges" component={TopExchanges} />
    </div>
  </HashRouter>
);

App.displayName = 'App';

export default App;
