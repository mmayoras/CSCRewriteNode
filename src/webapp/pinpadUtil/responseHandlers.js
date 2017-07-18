import $ from 'jquery';
import * as pinPadActionCreators from '../redux/pinpad/actionCreators';
import * as pinPadCardActionCreators from '../redux/pinpadCardDetails/actionCreators';
import {processingMsrScreen} from './requestHandlers';

/**
 * Jquery function to parse data out of xml from Pinpad
 */
function parseXml(data) {
  const xmlDoc = $.parseXML(data);
  return $(xmlDoc);
}

export function processProcessingScreenResponse({data}) {
  console.log('Debugging: in processProcessingScreenResponse()');
  console.log('processing auth screen:', data);
}

export function processPostalCodeResponse({data, dispatch}) {
  console.log('processPostalCodeResponse');
  const $xml = parseXml(data);
  const keyedResponse = $xml.find('KeyPad');
  processingMsrScreen();
  // If an MSR element was not returned, we will not process the response
  // This is being done because the MSRListener will sometimes fire an extra event
  // that we do not want to process, or it breaks the pinpad flow.
  if (keyedResponse.length === 0) {
    return;
  }
  const keyedData = keyedResponse.attr('keyedData') || null;
  dispatch(pinPadCardActionCreators.updateZipCode(keyedData));

  if (keyedResponse.attr('buttonPressed') === '2') {
    console.log('Customer pressed cancel while keying zip code');
    dispatch(pinPadCardActionCreators.resetCardDetails());
    dispatch(pinPadActionCreators.resetCardActionStatus());
  }

  return;
}

export function processDOBResponse({data, dispatch}) {
  console.log('processDOBResponse');
  const $xml = parseXml(data);
  const keyedResponse = $xml.find('KeyPad');
  processingMsrScreen();
  // If an MSR element was not returned, we will not process the response
  // This is being done because the MSRListener will sometimes fire an extra event
  // that we do not want to process, or it breaks the pinpad flow.
  if (keyedResponse.length === 0) {
    return;
  }
  const keyedData = keyedResponse.attr('keyedData') || null;
  dispatch(pinPadCardActionCreators.updateDOB(keyedData));

  if (keyedResponse.attr('buttonPressed') === '2') {
    console.log('Customer pressed cancel while keying date of birth');
    dispatch(pinPadCardActionCreators.resetCardDetails());
    dispatch(pinPadActionCreators.resetCardActionStatus());
  }

  return;
}

export function processSSNResponse({data, dispatch}) {
  console.log('processSSNResponse');
  const $xml = parseXml(data);
  const keyedResponse = $xml.find('KeyPad');
  processingMsrScreen();
  // If an MSR element was not returned, we will not process the response
  // This is being done because the MSRListener will sometimes fire an extra event
  // that we do not want to process, or it breaks the pinpad flow.
  if (keyedResponse.length === 0) {
    return;
  }
  const keyedData = keyedResponse.attr('keyedData') || null;
  dispatch(pinPadCardActionCreators.updateSSN(keyedData));

  if (keyedResponse.attr('buttonPressed') === '2') {
    console.log('Customer pressed cancel while keying ssn');
    dispatch(pinPadCardActionCreators.resetCardDetails());
    dispatch(pinPadActionCreators.resetCardActionStatus());
  }

  return;
}

export function processPhoneNumberResponse({data, dispatch}) {
  console.log('processPhoneNumberResponse');
  const $xml = parseXml(data);
  const keyedResponse = $xml.find('KeyPad');
  processingMsrScreen();
  // If an MSR element was not returned, we will not process the response
  // This is being done because the MSRListener will sometimes fire an extra event
  // that we do not want to process, or it breaks the pinpad flow.
  if (keyedResponse.length === 0) {
    return;
  }
  const keyedData = keyedResponse.attr('keyedData') || null;
  dispatch(pinPadCardActionCreators.updatePhoneNumber(keyedData));

  if (keyedResponse.attr('buttonPressed') === '2') {
    console.log('Customer pressed cancel while keying ssn');
    dispatch(pinPadCardActionCreators.resetCardDetails());
    dispatch(pinPadActionCreators.resetCardActionStatus());
  }

  return;
}

export default {
  MSRProcessing: processProcessingScreenResponse,
  GetPostalCode: processPostalCodeResponse,
  DOBKeyPad: processDOBResponse,
  SSNKeyPad: processSSNResponse,
  HomePhoneKeyPad: processPhoneNumberResponse,
};
