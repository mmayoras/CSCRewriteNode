/**
 * Created by MXM6930 on 6/27/2017.
 */
import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  changeActive = (event) => {
    // Find parent element for list of links
    let parent = document.getElementById('menu');

    // Loop through all links until the 'active' className is removed
    for (let i = 0; i < parent.children.length; i++) {
      let anchor = parent.children[i].children[0];
      anchor.classList.remove('active');
    }

    // Add the 'active' className to the current link
    document.getElementById(event.target.id).classList.add('active');
  };

  render() {
    return (
        <div className="sidenav scrollable">
          <ul className="nav" id="menu">
            <li><Link onClick={this.changeActive}
                      className={this.props.location.pathname === '/'
                          ? 'active'
                          : ''} id=" " to="/">Home</Link>
            </li>
            <li><Link onClick={this.changeActive}
                      className={this.props.location.pathname === '/consumer'
                          ? 'active'
                          : ''} id="consumer" to="/consumer">Consumer Credit
              App</Link></li>
            <li><Link onClick={this.changeActive}
                      className={this.props.location.pathname === '/commercial'
                          ? 'active'
                          : ''} id="commercial" to="/commercial">Commercial
              Credit App</Link></li>
            <li><Link onClick={this.changeActive}
                      className={this.props.location.pathname === '/about'
                          ? 'active'
                          : ''} id="about" to="/about">About</Link></li>
          </ul>
        </div>
    );
  }
}

export default withRouter(Menu);
