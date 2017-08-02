/**
 * Created by MXM6930 on 7/11/2017.
 */
import 'babel-polyfill';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {orange500, deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Router, Route} from 'react-router-dom';
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
  render = () => {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <Router history={this.props.history}>
            <Route path="/" component={CSCMain}/>
          </Router>
        </MuiThemeProvider>
    );
  }
}

CSC.propTypes = {
  history: PropTypes.object
};

export default CSC;
