import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import cryptoApp from './reducers/index';
import { searchCoins } from './actions/SearchActions';

const store = createStore(cryptoApp);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// Log the initial state
console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()));

// Dispatch some actions
store.dispatch(searchCoins('Some user input'));
store.dispatch(searchCoins('Some user input again'));
store.dispatch(searchCoins('Some user inputand again'));

// Stop listening to state updates
unsubscribe();
