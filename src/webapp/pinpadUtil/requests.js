import {Map} from 'core-js/es6';

export function welcomeRequest(sessionId) {
  return `<PinPadRequest sessionID="${sessionId}"><Action name="Welcome" waitForResponse="false"></Action></PinPadRequest>`;
}

export function processingMsrRequest(sessionId) {
  return `<PinPadRequest sessionID="${sessionId}"><Action name="MSRProcessing" waitForResponse="false"></Action></PinPadRequest>`;
}

export function pinPadZipPostalCodeManualEntry(sessionId) {
  return `<PinPadRequest sessionID="${sessionId}"><Action name="GetPostalCode" waitForResponse="false"></Action></PinPadRequest>`;
}

export function pinPadDOBManualEntry(sessionId) {
  return `<PinPadRequest sessionID="${sessionId}"><Action name="AA_GetKeyPadData" waitForResponse="false"><KeyPad formatSpecifier="%m8%M8%o  %h/%o  %h/%o    " keypadPrompt="Enter your DOB (mm/dd/yyyy)"></KeyPad><Form name="DOB Form"></Form></Action></PinPadRequest>`;
}

export function pinPadSSNManualEntry(sessionId) {
  return `<PinPadRequest sessionID="${sessionId}"><Action name="AA_GetKeyPadData" waitForResponse="false"><KeyPad formatSpecifier="%p*%m9%M9%h %o  %s  %h-%o  %h-%o    " keypadPrompt="Enter your Social Security Number"></KeyPad><Form name="SSN Form"></Form></Action></PinPadRequest>`;
}

export function pinPadPhoneNumberManualEntry(sessionId) {
  return `<PinPadRequest sessionID="${sessionId}"><Action name="AA_GetKeyPadData" waitForResponse="false"><KeyPad formatSpecifier="%m10%M10%o  %s %h-%o   %h-%o    " keypadPrompt="Enter your primary phone number"></KeyPad><Form name="Home Phone Form"></Form></Action></PinPadRequest>`;
}
