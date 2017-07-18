import {
  removeAlert,
  removeAllAlerts,
  addAlertError,
  addAlertInfo,
  addAlertSuccess,
  addAlertWarning,
} from './actionCreators';
import { alertMessagesReducer } from './alertMessagesReducer';

const testWarningMessage = {
  title: 'Alert Title',
  message: 'This is a test warning message',
  type: 'warning',
};
const testInfoMessage = {
  title: 'Alert Title',
  message: 'This is a test info message',
  type: 'information',
};
const testErrorMessage = {
  title: 'Alert Title',
  message: 'This is a test error message',
  type: 'error',
};
const testSuccessMessage = {
  title: 'Alert Title',
  message: 'This is a test success message',
  type: 'success',
};

test('an undefined state and an unmatched action returns an empty list', () => {
  const state = undefined;
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = alertMessagesReducer(state, action);
  expect(value).toEqual([]);
});

test('an unmatched action returns the state unchanged', () => {
  const state = [testWarningMessage];
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = alertMessagesReducer(state, action);
  expect(value).toEqual(state);
});

test('a list of 1 alert, remove one, returns an empty list', () => {
  const state = [testWarningMessage];
  const action = removeAlert(0);
  const value = alertMessagesReducer(state, action);
  expect(value).toEqual([]);
});

test('a list of 3 alerts, remove one, returns a list of 2 alerts', () => {
  const state = [testWarningMessage, testInfoMessage, testErrorMessage];
  const action = removeAlert(0);
  const value = alertMessagesReducer(state, action);
  expect(value).toEqual([testInfoMessage, testErrorMessage]);
  expect(value.length).toBe(2);
});

test('a list of 3 alerts, remove all, returns 0 alerts', () => {
  const state = [testWarningMessage, testInfoMessage, testErrorMessage];
  const action = removeAllAlerts();
  const value = alertMessagesReducer(state, action);
  expect(value).toEqual([]);
  expect(value.length).toBe(0);
});

test('a list of 0 alerts, remove all, returns 0 alerts', () => {
  const state = [];
  const action = removeAllAlerts();
  const value = alertMessagesReducer(state, action);
  expect(value).toEqual([]);
  expect(value.length).toBe(0);
});

test('throwing a warning message updates state', () => {
  const state = [];
  const action = addAlertWarning('Alert Title', 'This is a test warning message');
  const value = alertMessagesReducer(state, action);
  expect(value).toEqual([testWarningMessage]);
  expect(value.length).toBe(1);
});

test('throwing a error message updates state', () => {
  const state = [];
  const action = addAlertError('Alert Title', 'This is a test error message');
  const value = alertMessagesReducer(state, action);
  expect(value).toEqual([testErrorMessage]);
  expect(value.length).toBe(1);
});

test('throwing a info message updates state', () => {
  const state = [];
  const action = addAlertInfo('Alert Title', 'This is a test info message');
  const value = alertMessagesReducer(state, action);
  expect(value).toEqual([testInfoMessage]);
  expect(value.length).toBe(1);
});


test('testing ADD_ALERT__SUCCESS', () => {
  const state = [];
  const action = addAlertSuccess('Alert Title', 'This is a test success message');
  const value = alertMessagesReducer(state, action);
  expect(value).toEqual([testSuccessMessage]);
  expect(value.length).toBe(1);
});
