import './main.scss';
import 'babel-polyfill';
import 'whatwg-fetch';
import 'es6-promise';
import 'font-awesome-webpack';
import 'classlist-polyfill';

require.context('./assets', true, /\.(png|ico|pdf)$/);

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App.jsx';

import configureStore from './store/configureStore';

const store = configureStore({});

ReactDOM.render(
    <Provider store={store}><App/></Provider>,
    document.getElementById('app')
);
