import {Observable} from 'rxjs/Rx';
import 'rxjs/operator/share';

export const sessionId = Date.now();

let socket;
const OPEN = 1;

export function isOpen() {
  return socket.readyState === OPEN;
}

export const connect = Observable.create((observer) => {

  socket = new WebSocket(
      `wss://saptpinpad.homedepot.com:8083/PS-DeviceManagerClient/ws/WebSocket?clientUUID=${sessionId}`);

  socket.onopen = () => {
    console.info('Websocket connection established');
    //socket.send(`<PinPadRequest sessionId="${sessionId}"><Action name="GetMSRData" waitForResponse="false"></Action></PinPadRequest>`);
  };

  socket.onerror = e => observer.error(e);

  socket.onmessage = (e) => {
    observer.next(e);
  };

  socket.onclose = () => {
    console.info('Socket closed');
  };

  return () => {
    socket.close();
  };
}).share();

export function sendMessage(data) {
  socket.send(data);
}
