import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import PortfolioInsights from './App';

export default class Root extends Component {

	static propTypes = {
		store: PropTypes.object.isRequired
  };
	render() {
		return (
			<Provider store={this.props.store}>
				<PortfolioInsights />
			</Provider>
		);
	}
}
