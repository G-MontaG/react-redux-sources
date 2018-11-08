import { combineReducers } from 'redux';
import { searchReducer } from './SearchReducers';
import { coinsReducer } from './CoinsReducers';

const cryptoApp = combineReducers({
  searchReducer,
  coinsReducer,
});

export default cryptoApp;
