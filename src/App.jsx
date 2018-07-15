import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Landing from './pages/landing/Landing';

import './App.css';

const App = () => (
  <HashRouter>
    <div className="App">
      <Route path="/" component={Landing} />
    </div>
  </HashRouter>
);

App.displayName = 'App';

export default App;
