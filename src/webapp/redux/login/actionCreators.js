/**
 * Created by MXM6930 on 7/10/2017.
 */
import fetch from 'isomorphic-fetch';
import {USER_LOGIN, USER_LOGOUT, LOGIN_ERROR} from './actionTypes';
import Cookies from 'universal-cookie';
import {CONFIG} from '../../envconfig/globals';

export const loginUser = (storeNumber, username, password) => {
  const appName = 'cscrewritepoc';
  const loginUrl = CONFIG.loginUrl;
  return dispatch => {
    return fetch(loginUrl + '/api/login', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        callingPrgm: appName,
        storeNbr: storeNumber,
        username: username,
        password: password,
      }),
    }).then(response => {
      if (response.ok) {
        return response.json();
      }
    }).then(data => {
      dispatch(getUserProfile(data));
      if (data.serviceResponseStatus.success) {
        let cookies = new Cookies();
        cookies.set('THDSSO', data.thdSSOCookie, {path: '/'});
      } else {
        return dispatch({
          type: LOGIN_ERROR,
        });
      }
    }).catch((error) => {
      console.error('login error', error);
    });
  };
};

export const getUserProfile = (data) => {
  const getUserProfileUrl = CONFIG.getUserProfileUrl;
  return dispatch => {
    return fetch(getUserProfileUrl + '/api/getUserProfile', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'thdSSOCookie': data.thdSSOCookie,
        'callingPrgm': 'cscrewritepoc',
      },
    }).then(response => response.json()).then((json) => {
      return dispatch({
        type: USER_LOGIN,
        user: json,
      });
    }).catch((error) => {
      console.log('getUserProfile error', error);
    });
  };
};

export const logoutUser = () => {
  return dispatch => {
    dispatch({
      type: USER_LOGOUT,
    });
  };
};
