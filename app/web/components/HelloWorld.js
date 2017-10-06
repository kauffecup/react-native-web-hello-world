import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class HelloWorld extends Component {

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired,
  }
  render() {
    const { onClick, color } = this.props;
    return (
      <div className="hello-world" onClick={onClick} style={{color: color}}>Hello World</div>
    );
  }
}
