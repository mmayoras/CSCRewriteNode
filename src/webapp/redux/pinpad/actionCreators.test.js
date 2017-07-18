import {
  UPDATE_PIN_PAD_REQUEST,
  RESET_PINPAD_DATA,
  RESET_CARD_ACTION_STATUS,
} from './actionTypes';
import {
  updatePinPadRequestType,
  resetPinPadData,
  resetCardActionStatus,
} from './actionCreators';

test('pinpad request type is changed', () => {
  const actual = updatePinPadRequestType('TEST_MSR');
  expect(actual).toEqual({
    type: UPDATE_PIN_PAD_REQUEST,
    payload: 'TEST_MSR',
  });
});

test('executing resetPinPadData returns this action', () => {
  const actual = resetPinPadData();
  expect(actual).toEqual({
    type: RESET_PINPAD_DATA,
  });
});

test('executing resetCardActionStatus sends this action', () => {
  const actual = resetCardActionStatus();
  expect(actual).toEqual({
    type: RESET_CARD_ACTION_STATUS,
  });
});
