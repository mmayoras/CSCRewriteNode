import {pinpadCardDetailsReducer} from './pinpadCardDetailsReducer';
import {UPDATE_ZIP_CODE, RESET_CARD_DETAILS} from './actionTypes';

const defaultState = {
  zipCode: '',
};

const exampleState = {
  zipCode: '30339',
};

test('an undefined state and an unmatched action returns an empty string', () => {
  const state = undefined;
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = pinpadCardDetailsReducer(state, action);
  expect(value).toEqual(defaultState);
});

test('an unmatched action returns the state unchanged', () => {
  const state = exampleState;
  const action = {
    type: 'UNMATCHED_ACTION_TYPE',
    payload: null,
  };
  const value = pinpadCardDetailsReducer(state, action);
  expect(value).toEqual(state);
});

test('resetting card details results in default state being set', () => {
  const state = exampleState;
  const action = {
    type: RESET_CARD_DETAILS,
  };
  const value = pinpadCardDetailsReducer(state, action);
  expect(value).toEqual(defaultState);
});

test('update card zip code, returns a new state with updated card zip code', () => {
  const state = {
    zipCode: '',
  };
  const action = {
    type: UPDATE_ZIP_CODE,
    zipCode: '30339',
  };
  const value = pinpadCardDetailsReducer(state, action);
  const expectedState = {
    zipCode: '30339',
  };
  expect(value).toEqual(expectedState);
});
