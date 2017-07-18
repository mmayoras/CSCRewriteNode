import {dispatch} from './dispatchIndex';
import {updatePinPadRequestType} from '../redux/pinpad/actionCreators';
import {sendToPinPad} from './index';
import {sessionId} from './socket';
import {
  processingMsrRequest,
  pinPadZipPostalCodeManualEntry,
  welcomeRequest,
  pinPadDOBManualEntry,
  pinPadSSNManualEntry,
  pinPadPhoneNumberManualEntry,
} from './requests';

export function sendWelcome() {
  dispatch(updatePinPadRequestType('Welcome'));
  sendToPinPad(welcomeRequest(sessionId));
}

export function processingMsrScreen() {
  dispatch(updatePinPadRequestType('MSRProcessing'));
  sendToPinPad(processingMsrRequest(sessionId));
}

export function pinPadPostalCodeManualEntry() {
  dispatch(updatePinPadRequestType('GetPostalCode'));
  sendToPinPad(pinPadZipPostalCodeManualEntry(sessionId));
}

export function pinPadDOBHandlerManualEntry() {
  dispatch(updatePinPadRequestType('DOBKeyPad'));
  sendToPinPad(pinPadDOBManualEntry(sessionId));
}

export function pinPadSSNHandlerManualEntry() {
  dispatch(updatePinPadRequestType('SSNKeyPad'));
  sendToPinPad(pinPadSSNManualEntry(sessionId));
}

export function pinPadPhoneNumberHandlerManualEntry() {
  dispatch(updatePinPadRequestType('HomePhoneKeyPad'));
  sendToPinPad(pinPadPhoneNumberManualEntry(sessionId));
}
