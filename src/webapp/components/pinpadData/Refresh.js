/**
 * Created by MXM6930 on 7/6/2017.
 */
import React, {Component} from 'react';

class Refresh extends Component {
  render() {
    return (
        <div style={this.props.divStyle}>
          <button className="button primary small"
                  disabled={this.props.pinpadConnected ? null : true}
                  onClick={this.props.refreshData}
          >
            Refresh Data
          </button>
        </div>
    );
  }
}

export default Refresh;