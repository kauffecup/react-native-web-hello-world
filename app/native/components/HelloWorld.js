import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class HelloWorld extends Component {

  static propTypes = {
    onPress: PropTypes.func.isRequired,
  }
  render() {
    const { onPress, color } = this.props;
    const style = StyleSheet.create({
      helloWorld: {
        color: color,
        textAlign: 'center',
      }
    });
    return (
      <View>
        <Text onPress={onPress} style={style.helloWorld}>Hello World</Text>
      </View>
    );
  }
}
