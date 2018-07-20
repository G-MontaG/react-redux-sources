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
      </div>
    );
  }
}

export default Coins;
