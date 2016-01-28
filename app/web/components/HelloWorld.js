import React, { Component, PropTypes } from 'react';

export default class HelloWorld extends Component {
  render() {
    const { onClick, color } = this.props;
    return (
      <div className="hello-world" onClick={onClick} style={{color: color}}>Hello World</div>
    );
  }
}

HelloWorld.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
}
