import React, { Component } from 'react';

export default function logProps(WrappedComponent) {
  return class extends Component {
    componentWillReceiveProps(nextProps) {
      console.log('Current props: ', this.props);
      console.log('Next props: ', nextProps);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
