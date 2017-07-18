/**
 * Created by MXM6930 on 7/10/2017.
 */
import { USER_LOGIN, USER_LOGOUT, LOGIN_ERROR } from './actionTypes';
import Authentication from '../../utils/authHelper';

const initialState = {
  userProfile: null,
  useLogin: true,
  error: false,
};

export function loginReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case USER_LOGIN:
      newState = Object.assign({}, state);
      newState.userProfile = action.user.user;
      const groups = action.user.user.userGroups.groups;

      //new groupd have to be created
      newState.userProfile.isCardMgmt = false;
      newState.userProfile.isDesignMgmt = false;
      var includeUserGroups = [];
      for (var i = 0; i < groups.length; i++) {
        if("Depot Direct Users"===groups[i]){ //asm001
          newState.userProfile.isCardMgmt = true;
          includeUserGroups.push(groups[i]);
          break;
        }

        if("HR Dept Sups"===groups[i]){
          includeUserGroups.push(groups[i]);
          newState.userProfile.isDesignMgmt = true;
          break;
        }
      }
      newState.userProfile.userGroups = includeUserGroups;

      newState.userProfile.full_name = action.user.user.userProfile.firstName + " " + action.user.user.userProfile.lastName;
      newState.error = false;
      sessionStorage.setItem('userProfile', btoa(JSON.stringify(newState.userProfile)));
      return newState;
    case USER_LOGOUT:
      newState = Object.assign({}, state);
      newState.userProfile = null;
      newState.error = false;
      Authentication.clearSession();
      return newState;
    case LOGIN_ERROR:
      newState = Object.assign({}, state);
      newState.error = true;
      return newState;
    default:
      return state;
  }
}
