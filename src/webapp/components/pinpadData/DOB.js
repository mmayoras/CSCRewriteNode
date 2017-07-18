/**
 * Created by MXM6930 on 7/6/2017.
 */
import React, {Component} from 'react';
import {pinPadDOBHandlerManualEntry} from '../../pinpadUtil/requestHandlers';

class DOB extends Component {
  getDOB = () => {
    pinPadDOBHandlerManualEntry();
  };

  render() {
    return (
        <div style={this.props.divStyle}>
          <button className="button primary small"
                  disabled={this.props.pinpadConnected ? null : true}
                  onClick={this.getDOB}
          >
            Date Of Birth
          </button>
        </div>
    );
  }
}

export default DOB;
