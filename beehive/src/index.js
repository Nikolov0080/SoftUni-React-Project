import React from 'react';
import ReactDOM from 'react-dom';
import Beehive from './Beehive';
import * as serviceWorker from './serviceWorker';
import './db/firebaseConfig'; // database configuration


ReactDOM.render(
  <React.StrictMode>
    <Beehive />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
