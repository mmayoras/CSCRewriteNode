import {
  REMOVE_ALERT,
  REMOVE_ALL_ALERTS,
  ADD_ALERT__ERROR,
  ADD_ALERT__INFO,
  ADD_ALERT__SUCCESS,
  ADD_ALERT__WARNING,
} from './actionTypes';

function actionCreator(type) {
  return (title, message) => ({
    title,
    message,
    type,
  });
}

export function removeAlert(index) {
  return {
    payload: index,
    type: REMOVE_ALERT,
  };
}

export function removeAllAlerts() {
  return {
    type: REMOVE_ALL_ALERTS,
  };
}

export const addAlertWarning = actionCreator(ADD_ALERT__WARNING);
export const addAlertError = actionCreator(ADD_ALERT__ERROR);
export const addAlertInfo = actionCreator(ADD_ALERT__INFO);
export const addAlertSuccess = actionCreator(ADD_ALERT__SUCCESS);
