import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import PortfolioInsights from './App';

export default class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <PortfolioInsights />
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
};
