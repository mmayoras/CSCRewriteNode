import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../../components/Header';
import * as LoginActions from '../../redux/login/actionCreators';
import Cookies from 'universal-cookie';

let classNames = require('classnames');

export class Login extends Component {
  constructor(props, context) {
    super(props, context);
    let cookies = new Cookies();
    let thdsso = cookies.get('THDSSO');
    if (thdsso) {
      this.props.history.push('/');
    }
    this.store = context.store;
    this.loginBtn = null;
    this.state = {
      location: 'store',
      storeNumber: '9751', //remove when developing
      username: 'dts001', //remove when developing
      password: 'qa02Test!', //remove when developing
      passwordType: 'password',
      showError: false,
    };
  }

  componentDidMount = () => {
    this.loginBtn = LoaderBtn.create(document.querySelector('#loginBtn'));
    let unsubscribe = this.store.subscribe(() => {
      let loginState = this.store.getState().login;
      this.setState({showError: loginState.error});
      this.loginBtn.stop();
      if (loginState.userProfile) {
        unsubscribe();
        this.props.history.push('/');
      }
    });
  };

  changeLocation = (event) => {
    this.setState({location: event.target.value});
  };

  changeStoreNumber = (event) => {
    this.setState({storeNumber: event.target.value});
  };

  changeUsername = (event) => {
    this.setState({username: event.target.value});
  };

  changePassword = (event) => {
    this.setState({password: event.target.value});
  };

  disableLogin = () => {
    return (this.state.username === null || this.state.username === '') ||
        (this.state.password === null || this.state.password === '') ||
        (this.state.location === 'store' && (this.state.storeNumber === null
        || this.state.storeNumber === ''));
  };

  showPassword = () => {
    let type = this.state.passwordType;
    if (type === 'password') {
      this.setState({passwordType: 'text'});
    } else {
      this.setState({passwordType: 'password'});
    }
  };

  clearError = () => {
    this.setState({showError: false});
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter' && !this.disableLogin()) {
      this.login();
    }
  };

  login = () => {
    this.loginBtn.start('Logging in...');
    const actions = this.props.actions;
    actions.loginUser(this.state.storeNumber, this.state.username,
        this.state.password);
  };

  render() {
    const loginDisabled = this.disableLogin();
    const inputContainerClasses = classNames({
      'text-input-container': true,
      'error': this.state.showError,
    });
    return (
        <div className="login">
          <Header empty={true}/>
          <section className="main-container">
            {this.state.showError &&
            <div className="banner error">
              <span className="message">Invalid Credentials: The information you provided did not match. Please try again.</span>
              <span className="close" onClick={this.clearError}/>
            </div>
            }
            <div className="flex-row">
              <div className="card login-card">
                <div className="card-toolbar">
                  <span className="card-title">Provide your login credentials below.</span>
                </div>
                <div className="card-content">
                  <div className="radio-container horizontal">
                    <input type="radio" id="storeLocation" name="loginLocation"
                           title="Store Number" value="store"
                           checked={this.state.location === 'store'}
                           onChange={this.changeLocation}/>
                    <label htmlFor="storeLocation"><span><span /></span>Store
                      Number</label>
                  </div>
                  <div className="radio-container horizontal">
                    <input type="radio" id="otherLocation" name="loginLocation"
                           title="Other Location" value="other"
                           checked={this.state.location === 'other'}
                           onChange={this.changeLocation}/>
                    <label htmlFor="otherLocation"><span><span /></span>Other
                      Location</label>
                  </div>
                  {this.state.location === 'store' &&
                  <div className={inputContainerClasses}>
                    <input type="text" id="storeNumber" name="storeNumber"
                           title="Store Number" placeholder="#0000"
                           maxLength="4"
                           value={this.state.storeNumber}
                           onChange={this.changeStoreNumber}
                           onKeyPress={this.handleKeyPress}/>
                    <label htmlFor="storeNumber">Store Number</label>
                  </div>
                  }
                  <div className={inputContainerClasses}>
                    <input type="text" id="userId" name="userId" title="User ID"
                           placeholder="Enter Your User ID"
                           value={this.state.username}
                           onChange={this.changeUsername}
                           onKeyPress={this.handleKeyPress}/>
                    <label htmlFor="userId">User ID</label>
                  </div>
                  <div className={inputContainerClasses}>
                    <input type={this.state.passwordType} id="password"
                           name="password" title="Password"
                           placeholder="Enter Your Password"
                           value={this.state.password}
                           onChange={this.changePassword}
                           onKeyPress={this.handleKeyPress}/>
                    <label htmlFor="password">Password</label>
                    <span className="show-password" onClick={this.showPassword}>Show</span>
                  </div>
                </div>
                <div className="card-actions">
                  <button className="loader-btn primary" id="loginBtn"
                          disabled={loginDisabled}
                          onClick={this.login} ref={(thisBtn) => {
                    thisBtn
                        ? thisBtn.setAttribute('indeterminate', true)
                        : null;
                  }}>Login
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div >
    );
  }
}

Login.contextTypes = {
  store: PropTypes.object,
};

Login.propTypes = {
  actions: PropTypes.object.isRequired,
  history: PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(LoginActions, dispatch),
});

export default connect(null, mapDispatchToProps)(Login);
