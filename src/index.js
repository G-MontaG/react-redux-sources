import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import cryptoApp from './reducers/index';
import coinsSaga from './actions/CoinsActionsBySaga';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const sagaMiddleware = createSagaMiddleware();

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  applyMiddleware(sagaMiddleware),
  // other store enhancers if any
);

const store = createStore(
  cryptoApp,
  enhancer,
);

sagaMiddleware.run(coinsSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'),
);
registerServiceWorker();
