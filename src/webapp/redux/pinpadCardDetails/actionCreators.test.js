import {resetCardDetails, updateZipCode} from './actionCreators';
import {RESET_CARD_DETAILS, UPDATE_ZIP_CODE} from './actionTypes';

// const module = require('./actionCreators');

test('executing resetCardDetails returns this action', () => {
  const actual = resetCardDetails();
  expect(actual).toEqual({
    type: RESET_CARD_DETAILS,
  });
});

test('card zip code can be updated', () => {
  const actual = updateZipCode('30318');
  expect(actual).toEqual({
    zipCode: '30318',
    type: UPDATE_ZIP_CODE,
  });
});
