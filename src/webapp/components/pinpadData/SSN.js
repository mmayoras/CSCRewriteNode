/**
 * Created by MXM6930 on 7/6/2017.
 */
import React, {Component} from 'react';
import {pinPadSSNHandlerManualEntry} from '../../pinpadUtil/requestHandlers';

class SSN extends Component {
  getSSN = () => {
    pinPadSSNHandlerManualEntry();
  };

  render() {
    return (
        <div style={this.props.divStyle}>
          <button className="button primary small"
                  disabled={this.props.pinpadConnected ? null : true}
                  onClick={this.getSSN}>
            SSN
          </button>
        </div>
    );
  }
}

export default SSN;