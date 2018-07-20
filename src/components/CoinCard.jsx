import React from 'react';
import { CRYPTO_COMPARE_URL } from '../constants';

const CoinCard = ({ coin }) => (
  <div className="coin-card">
    <h4>{coin.Name}</h4>
    <img src={`${CRYPTO_COMPARE_URL}${coin.ImageUrl}`} alt={coin.Name} />
  </div>
);

export default CoinCard;
