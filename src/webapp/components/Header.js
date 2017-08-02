import React, {Component} from 'react';
import {AppVersion} from '../envconfig/globals';

export default class Header extends Component {
  constructor() {
    super();

    this.state = {
      name: 'cscrewritepoc',
      version: AppVersion,
    };
  }

  render() {
    return (
        <div className="header">
          <div className="header-logo">
            <i className="icon_homedepot"/>
          </div>
          <div className="header-info">
            <label className="product-info">{this.name}
              <label className="version"> {this.version}</label>
            Welcome Test!</label>
          </div>
          <div className="header-search"/>
          <div className="header-actions">
            <div><i className="icon_exit_to_app"/>Logout</div>
          </div>
        </div>
    );
  }
}
