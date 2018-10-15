import { SEARCH_COINS, searchCoinsAction } from './SearchActions';

describe('Search actions', () => {
  test('should create an action for user input in search field', () => {
    const userInput = 'test';
    const expectedAction = {
      type: SEARCH_COINS,
      payload: userInput,
    };
    expect(searchCoinsAction(userInput)).toEqual(expectedAction);
  });
});
