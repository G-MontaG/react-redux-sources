import { combineReducers } from 'redux';
import { searchReducer } from './SearchReducers';

const cryptoApp = combineReducers({
  searchReducer,
});

export default cryptoApp;
