import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
