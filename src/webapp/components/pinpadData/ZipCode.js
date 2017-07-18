/**
 * Created by MXM6930 on 7/6/2017.
 */
import React, {Component} from 'react';
import {pinPadPostalCodeManualEntry} from '../../pinpadUtil/requestHandlers';

class ZipCode extends Component {
  getZipCode = () => {
    pinPadPostalCodeManualEntry();
  };

  render() {
    return (
        <div style={this.props.divStyle}>
          <button className="button primary small"
                  disabled={this.props.pinpadConnected ? null : true}
                  onClick={this.getZipCode}
          >
            Zip Code
          </button>
        </div>
    );
  }
}

export default ZipCode;
