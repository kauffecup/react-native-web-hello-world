import React, { Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import HelloWorld from '../components/HelloWorld';

// actions
import {
  toggleColor,
} from '../../actions/actions';

// load our css
require('../styles/containers/about.sass');

class About extends Component {
  render() {
    // injected by connect call
    const { dispatch, color, data } = this.props;

    return (
      <div className="about" >
        <h1>About youpi</h1>
        <HelloWorld
          onClick={() => dispatch(toggleColor())}
          color={color}
        />
      </div>
    );
  }
}

About.propTypes = {
  dispatch: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

const select = state => state;

// Wrap the component to inject dispatch and state into it
export default connect(select)(About);
