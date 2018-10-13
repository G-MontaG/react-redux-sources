export const SEARCH_COINS = 'SEARCH_COINS';

export const searchCoinsAction = userInputInSearchField => ({
  type: SEARCH_COINS,
  payload: userInputInSearchField,
});
