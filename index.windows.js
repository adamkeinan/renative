import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/app';
import { Api } from './src/renative';
import { WINDOWS, FORM_FACTOR_DESKTOP, registerServiceWorker } from './src/renative';

Api.platform = WINDOWS;
Api.formFactor = FORM_FACTOR_DESKTOP;

ReactDOM.render(React.createElement(App), document.getElementById('root'));
registerServiceWorker();
