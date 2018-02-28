import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

// Import Files
// import 'react-bootstrap';
// import 'popper.js';
// import 'jquery';
// import 'bootstrap';
import 'react-bootstrap/dist/react-bootstrap.js'
import 'jquery/dist/jquery.min.js'
import 'jquery'
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
import 'jquery'
import './style/App.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
),
  document.getElementById('root')
);
registerServiceWorker();
