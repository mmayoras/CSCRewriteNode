import {
  updatePinPadRequestType,
  resetPinPadData,
  resetCardActionStatus,
} from './actionCreators';
import {pinPadReducer} from './pinpadReducer';

const defaultState = {
  requestType: '',
};

const exampleState = {
  requestType: 'DEBIT',
};

test('an undefined state and an unmatched action returns an empty string',
    () => {
      const state = undefined;
      const action = {
        type: 'UNMATCHED_ACTION_TYPE',
        payload: null,
      };
      const value = pinPadReducer(state, action);
      expect(value).toEqual(defaultState);
});

test('an unmatched action returns the state unchanged', () => {
  const state = {
    requestType: 'MSRRequest',
  };
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = pinPadReducer(state, action);
  expect(value).toEqual(state);
});

test('update request type, returns a new state with updated request type',
    () => {
      const state = {
        requestType: '',
      };
      const action = updatePinPadRequestType('MSRRequest');
      const value = pinPadReducer(state, action);
      const expectedState = {
        requestType: 'MSRRequest',
      };
      expect(value).toEqual(expectedState);
});

test('resetting pinpad data results in default state being set', () => {
  const state = exampleState;
  const action = resetPinPadData();
  const value = pinPadReducer(state, action);
  expect(value).toEqual(defaultState);
});

test('execute resetCardActionStatus, returns a new state',
    () => {
      const state = {};
      const action = resetCardActionStatus();
      const value = pinPadReducer(state, action);
      const expectedState = {};
      expect(value).toEqual(expectedState);
});
