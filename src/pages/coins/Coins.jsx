import React, { Component } from 'react';
import coinsList from '../../data/coinsList.json';
import { CRYPTO_COMPARE_URL } from '../../constants';

class Coins extends Component {
  constructor(props) {
    super(props);
    console.log(coinsList);
  }

  render() {
    return (
      <div>
        Coins
        {Object.keys(coinsList.Data).map((key) => {
          const coin = coinsList.Data[key];
          return (
            <div className="coin-card">
              <h4>{coin.Name}</h4>
              <img src={`${CRYPTO_COMPARE_URL}${coin.ImageUrl}`} alt={coin.Name} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Coins;
