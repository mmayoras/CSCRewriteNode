import React from 'react';
import {render} from 'react-dom';
import CSC from './webapp/containers/CSC';
import {createHashHistory} from 'history';
import './webapp/styles/base.scss';

const history = createHashHistory();

render(
    <CSC history={history}/>, document.getElementById('csc'),
);
