/**
 * Created by MXM6930 on 6/13/2017.
 */
import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import Menu from '../components/Menu';
import Commercial from './commercial/Commercial';
import Consumer from './consumer/Consumer';
import Home from '../components/Home';
import About from '../components/About';
import Header from '../components/Header';
import * as LoginActions from '../redux/login/actionCreators';
import Cookies from 'universal-cookie';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

class CSCMain extends Component {
  constructor(props, context) {
    super(props, context);
    let cookies = new Cookies();
    let thdsso = cookies.get('THDSSO');
    if (!thdsso) {
      this.props.history.push('/login');
    }
    this.store = context.store;
    let loginState = this.store.getState().login;
    if (loginState.userProfile) {
      this.userProfile = loginState.userProfile;
    } else if (sessionStorage.getItem('userProfile')) {
      this.userProfile = JSON.parse(
          atob(sessionStorage.getItem('userProfile')));
    } else {
      this.userProfile = null;
    }
  }

  componentDidMount = () => {
    let useLogin = this.store.getState().login.useLogin;
    if (useLogin === true) {
      let unsubscribe = this.store.subscribe(() => {
        let loginState = this.store.getState().login;
        let sessionProfile = sessionStorage.getItem('userProfile');
        if (loginState.userProfile === null && sessionProfile === null) {
          unsubscribe();
          this.props.history.push('/login');
        }
      });
    }
  };

  render() {
    return (
        <div className="home">
          <Header empty={this.userProfile === null}
                  userProfile={this.userProfile}
                  logout={this.props.actions.logoutUser}/>
          <div className="home-layout navigation-wrapper">
            <Menu/>
            <div className="home-content">
              <Route exact path="/" component={Home}/>
              <Route path="/consumer" component={Consumer}/>
              <Route path="/commercial" component={Commercial}/>
              <Route path="/about" component={About}/>
              <Alert stack={true} timeout={2000}/>
            </div>
          </div>
        </div>
    );
  }
}

CSCMain.contextTypes = {
  store: PropTypes.object,
};

CSCMain.propTypes = {
  actions: PropTypes.object.isRequired,
  history: PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(LoginActions, dispatch),
});

export default connect(null, mapDispatchToProps)(CSCMain);