import React, { Component } from 'react';
import { Link } from 'react-router';
import DevTools from './DevTools';

// dumb components
import Header from '../components/Header';

/** The app entry point */
export default class ReactNativeWebHelloWorld extends Component {
  render() {


    return (
      <div className="react-native-web">
        <Header />

        {this.props.children}
        <Link to="/about">About</Link>
        <Link to="/">Welcome</Link>
        <DevTools />
      </div>
    );
  }
}
