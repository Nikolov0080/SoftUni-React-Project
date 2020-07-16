import React from 'react';
import ReactDOM from 'react-dom';
import Beehive from './Beehive';
import Footer from './components/footer/footer';
import * as serviceWorker from './serviceWorker';
import Navigation from './components/navigation';
import styles from './main.module.css'
// import Sidebar from './components/sidebar/sidebar'
// import database from './db/firebaseConfig'; // database reference

ReactDOM.render(

  <div className={styles.main}>
    <Navigation />

    <React.StrictMode>
      <Beehive />
    </React.StrictMode>

    <Footer />
  </div>,
  

  document.getElementById('root')
);

serviceWorker.unregister();
