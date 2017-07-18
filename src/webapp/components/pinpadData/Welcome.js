/**
 * Created by MXM6930 on 7/6/2017.
 */
import React, {Component} from 'react';
import {sendWelcome} from '../../pinpadUtil/requestHandlers';

class Welcome extends Component {
  sendWelcomeMessage = () => {
    sendWelcome();
  };

  render() {
    return (
        <div style={this.props.divStyle}>
          <button className="button primary small"
                  disabled={this.props.pinpadConnected ? null : true}
                  onClick={this.sendWelcomeMessage}>
            Home
          </button>
        </div>
    );
  }
}

export default Welcome;
