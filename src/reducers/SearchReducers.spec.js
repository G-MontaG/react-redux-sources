import { searchReducer } from './SearchReducers';
import { SEARCH_COINS } from '../actions/SearchActions';

describe('Search reducers', () => {
  test('should return the initial state', () => {
    expect(searchReducer(undefined, {})).toEqual({
      search: '',
    });
  });

  test('should handle SEARCH_COINS', () => {
    expect(
      searchReducer({ search: '' }, {
        type: SEARCH_COINS,
        payload: 'test',
      }),
    ).toEqual({ search: 'test' });

    expect(
      searchReducer({ search: 'initial state' }, {
        type: SEARCH_COINS,
        payload: 'test2',
      }),
    ).toEqual({ search: 'test2' });
  });
});
