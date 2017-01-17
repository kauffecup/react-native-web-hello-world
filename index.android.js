import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Root           from './app/Root';
import configureStore from './app/store/configureStore.prod.js';

const store = configureStore();

class ReactNativeWebHelloWorld extends Component {
  render() {
    return (
      <Root store={store} />
    );
  }
}

AppRegistry.registerComponent('ReactNativeWebHelloWorld', () => ReactNativeWebHelloWorld);
