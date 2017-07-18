/**
 * Created by MXM6930 on 7/11/2017.
 */
import 'babel-polyfill';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {orange500, deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Authentication from '../utils/authHelper';
import {Router, Route, Switch} from 'react-router-dom';
import Login from './login/Login';
import CSCMain from './CSCMain';

const muiTheme = getMuiTheme({
  palette: {
    primaryColor: orange500,
    accent2Color: deepOrange500
  }
});

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class CSC extends Component {
  constructor(props, context) {
    super(props, context);
    this.store = context.store;

    let useLogin = this.store.getState().login.useLogin;
    if (useLogin === true) {
      Authentication.isAuthenticated()
      .then((authenticated) => {
        if (!authenticated) {
          this.props.history.push('/login');
        }
      });
    } else {
      this.props.history.push('/');
    }
  }

  render() {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <Router history={this.props.history}>
            {/*<div className="progress-linear indeterminate global-loader" />*/}
            <Switch>
              <Route path="/login" component={Login}/>
              <Route path="/" component={CSCMain}/>
            </Switch>
          </Router>
        </MuiThemeProvider>
    );
  }
}

CSC.contextTypes = {
  store: PropTypes.object
};

CSC.propTypes = {
  history: PropTypes.object
};

export default CSC;
