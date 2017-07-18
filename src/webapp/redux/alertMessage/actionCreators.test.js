import {
  REMOVE_ALERT,
  REMOVE_ALL_ALERTS,
  ADD_ALERT__ERROR,
  ADD_ALERT__INFO,
  ADD_ALERT__SUCCESS,
  ADD_ALERT__WARNING,
} from './actionTypes';
import {
  removeAlert,
  removeAllAlerts,
  addAlertError,
  addAlertInfo,
  addAlertSuccess,
  addAlertWarning,
} from './actionCreators';

test('the alert can be removed', () => {
  const actual = removeAlert(1);
  expect(actual).toEqual({
    payload: 1,
    type: REMOVE_ALERT,
  });
});

test('all alerts can be removed', () => {
  const actual = removeAllAlerts();
  expect(actual).toEqual({
    type: REMOVE_ALL_ALERTS,
  });
});

test('the warning alert can be thrown', () => {
  const actual = addAlertWarning('titleText', 'messageText');
  expect(actual).toEqual({
    title: 'titleText',
    message: 'messageText',
    type: ADD_ALERT__WARNING,
  });
});

test('the info alert can be thrown', () => {
  const actual = addAlertInfo('titleText', 'messageText');
  expect(actual).toEqual({
    title: 'titleText',
    message: 'messageText',
    type: ADD_ALERT__INFO,
  });
});

test('the error alert can be thrown', () => {
  const actual = addAlertError('titleText', 'messageText');
  expect(actual).toEqual({
    title: 'titleText',
    message: 'messageText',
    type: ADD_ALERT__ERROR,
  });
});

test('the success alert can be thrown', () => {
  const actual = addAlertSuccess('titleText', 'messageText');
  expect(actual).toEqual({
    title: 'titleText',
    message: 'messageText',
    type: ADD_ALERT__SUCCESS,
  });
});
