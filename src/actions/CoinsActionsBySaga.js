import { REQUEST_COINS_LIST, RECEIVE_COINS_LIST, ERROR_COINS_LIST } from "./CoinsActions";
import { takeEvery, call, put } from 'redux-saga/effects';

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

export function* getCoinsList(action) {
  try {
    const responce = yield call(
      () => fetch('https://min-api.cryptocompare.com/data/all/coinlist').then(responce => responce.json()),
    );
    yield put(receiveCoinsListAction(Object.keys(responce.Data).slice(0, 10).map(key => responce.Data[key])));
  } catch (err) {
    yield put(errorCoinsListAction(err));
  }
};

export default function* coinsSaga() {
  yield takeEvery('REQUEST_COINS_LIST', getCoinsList);
}
