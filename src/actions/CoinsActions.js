export const REQUEST_COINS_LIST = 'REQUEST_COINS_LIST';
export const RECEIVE_COINS_LIST = 'RECEIVE_COINS_LIST';
export const ERROR_COINS_LIST = 'ERROR_COINS_LIST';

export const requestCoinsListAction = () => ({
  type: REQUEST_COINS_LIST,
});

export const receiveCoinsListAction = coinsList => ({
  type: RECEIVE_COINS_LIST,
  payload: coinsList,
});

export const errorCoinsListAction = (err) => ({
  type: ERROR_COINS_LIST,
});

export const getCoinsList = () => (dispatch) => {
  dispatch(requestCoinsListAction());
  return fetch('https://min-api.cryptocompare.com/data/all/coinlist')
    .then(responce => responce.json())
    .then(responce => dispatch(receiveCoinsListAction(Object.keys(responce.Data).slice(0, 10).map(key => responce.Data[key]))))
    .catch(err => dispatch(errorCoinsListAction(err)));
};
