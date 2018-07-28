import React from 'react';
import PropTypes from 'prop-types';
import { CRYPTO_COMPARE_URL } from '../constants';
import withLogProps from '../HOC/withLogProps';
import './CoinCard.css';

const CoinCard = ({ coin, handleSearchChange }) => (
  <div className="coin-card">
    <h4
      onClick={() => handleSearchChange({ target: { value: coin.CoinName } })}>
      {coin.CoinName}
    </h4>
    {coin.ImageUrl && <img src={`${CRYPTO_COMPARE_URL}${coin.ImageUrl}`} alt={coin.CoinName} />}
  </div>
);

CoinCard.propTypes = {
  coin: PropTypes.object.isRequired,
  handleSearchChange: PropTypes.func,
};

export default withLogProps(CoinCard);
