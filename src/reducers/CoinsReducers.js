import { RECEIVE_COINS_LIST, REQUEST_COINS_LIST, ERROR_COINS_LIST } from '../actions/CoinsActions';

const initialState = {
  coinsList: [],
};

export function coinsReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_COINS_LIST:
      return {
        ...state,
        coinsList: [],
      };
    case RECEIVE_COINS_LIST:
      return {
        ...state,
        coinsList: action.payload,
      };
    case ERROR_COINS_LIST:
      return {
        ...state,
        coinsList: [],
      };
    default:
      return state;
  }
}
