import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.module.css'
import PageRouter from './router';
import Auth from './auth';

ReactDOM.render(
  <React.StrictMode>
    <Auth>
    <PageRouter />
    </Auth>
  </React.StrictMode>,
  document.getElementById('root')
);

