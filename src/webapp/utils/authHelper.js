import Cookies from 'universal-cookie';
import fetch from 'isomorphic-fetch';
import {CONFIG} from '../envconfig/globals';

export default class Authentication {

  static isAuthenticated() {
    let cookies = new Cookies();
    let thdsso = cookies.get('THDSSO');
    if (thdsso) {
      return this.checkIsSessionValid(thdsso).then((response) => {
        return response.userSession.valid;
      });
    } else {
      this.clearSession();
      return Promise.resolve(false);
    }
  }

  static checkIsSessionValid(thdsso) {
    const isSessionValidUrl = CONFIG.isSessionValidUrl;
    return fetch(isSessionValidUrl + '/api/isSessionValid', {
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'thdSSOCookie': thdsso,
        'callingPrgm': 'ps-giftcard-ui',
      },
    }).then(response => response.json()).then((json) => {
      return json;
    }).catch((error) => {
      console.log('isSessionValid error', error);
    });
  }

  static clearSession() {
    let cookies = new Cookies();
    cookies.remove('THDSSO');
    sessionStorage.removeItem('userProfile');
  }
}
