import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap.js';

import registerServiceWorker from './registerServiceWorker';
import Header from './header';

ReactDOM.render(<Header />, document.getElementById('root'));
registerServiceWorker();