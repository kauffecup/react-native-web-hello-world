import React, { Component, PropTypes } from 'react';
import { Provider }             from 'react-redux';
import { Router, Route,IndexRoute, browserHistory } from 'react-router'

import App from './App';
import Welcome from '../containers/Welcome';
import About from '../containers/About';


export default class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Welcome} />
            <Route path="about" component={About}/>
          </Route>
        </Router>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
};
