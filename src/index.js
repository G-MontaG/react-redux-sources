import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import cryptoApp from './reducers/index';

const logger = store => next => (action) => {
  console.log('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  return result;
};

const crashReporter = store => next => (action) => {
  try {
    return next(action);
  } catch (err) {
    console.error('Caught an exception!', err);
    // send it to some third party logger
    throw err;
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(logger, crashReporter),
  // other store enhancers if any
);
const store = createStore(
  cryptoApp,
  enhancer,
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'),
);
registerServiceWorker();
