import React, { Component } from 'react';
import coinsList from '../../data/coinsList.json';

class Coins extends Component {
  constructor(props) {
    super(props);
    console.log(coinsList);
  }

  render() {
    return (
      <div>
        Coins
        {Object.keys(coinsList.Data).map(key => (
          <p>
            {coinsList.Data[key].Name}
          </p>
        ))}
      </div>
    );
  }
}

export default Coins;
