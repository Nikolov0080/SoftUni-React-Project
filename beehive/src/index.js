import React from 'react';
import ReactDOM from 'react-dom';
import Beehive from './Pages/homePage/home-page';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Sidebar from './components/sidebar/sidebar'
// import database from './db/firebaseConfig'; // database reference

ReactDOM.render(
  <React.StrictMode>
    <Beehive />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
