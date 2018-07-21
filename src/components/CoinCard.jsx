import React from 'react';
import PropTypes from 'prop-types';
import { CRYPTO_COMPARE_URL } from '../constants';
import './CoinCard.css';

const CoinCard = ({ coin }) => (
  <div className="coin-card">
    <h4>{coin.Name}</h4>
    <img src={`${CRYPTO_COMPARE_URL}${coin.ImageUrl}`} alt={coin.Name} />
  </div>
);

CoinCard.propTypes = {
  coin: PropTypes.object.isRequired,
};

export default CoinCard;
