import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { CRYPTO_COMPARE_URL } from '../constants';
import withLogProps from '../HOC/withLogProps';
import './CoinCard.css';

const CoinCard = ({ coin, history }) => (
  <div className="coin-card">
    <h4 onClick={(e) => {history.push(`/coins/${coin.Id}`)}}>{coin.CoinName}</h4>
    {coin.ImageUrl && <img src={`${CRYPTO_COMPARE_URL}${coin.ImageUrl}`} alt={coin.CoinName} />}
  </div>
);

CoinCard.propTypes = {
  coin: PropTypes.object.isRequired,
};

export default withRouter(withLogProps(CoinCard));
