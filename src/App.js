import React from 'react';
import {render} from 'react-dom';
import CSC from './webapp/containers/CSC';
import {Provider} from 'react-redux';
import {createHashHistory} from 'history';
import configureStore from './webapp/pinpadUtil/configureStore';
import './webapp/styles/base.scss';

const history = createHashHistory();
const store = configureStore();

render(
    <Provider store={store}>
      <CSC history={history}/>
    </Provider>, document.getElementById('csc'),
);
