import combineReducers from 'redux/lib/combineReducers';
import {routerReducer} from 'react-router-redux';
import {alertMessagesReducer} from './alertMessage/alertMessagesReducer';
import {pinPadReducer} from './pinpad/pinpadReducer';
import {pinpadCardDetailsReducer} from './pinpadCardDetails/pinpadCardDetailsReducer';
import {loginReducer} from './login/loginReducer';

export default combineReducers({
  routing: routerReducer,
  alerts: alertMessagesReducer,
  pinpad: pinPadReducer,
  pinpadCardDetails: pinpadCardDetailsReducer,
  login: loginReducer,
});
