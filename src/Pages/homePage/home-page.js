import React, { Component } from 'react';
import HoneyCard from '../../components/honeyCard/honeyCard';
import { Row } from 'react-bootstrap';
import PageLayout from '../../components/pageLayout/pageLayout';
import db from '../../fire/fire'
// import auth from '../../fire/fireAuth'
import firebase from 'firebase';

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log(user)
    // ...
  } else {
    // User is signed out.
    console.log('pls login e brat')
    // ...
  }
});

const ref = db.database().ref().child('products');

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: []
    }
  }

  componentDidMount() {
    ref.on('value', prod => {
      this.setState({
        products: prod.val()
      })
    })
  }
  
  printProducts() {
    const honeyData = Object.values(this.state.products);
    return honeyData.map((product, i) => {
      return <HoneyCard key={i}{...product} />
    })
  }

  render() {
   
    return (

      <PageLayout title="Welcome to the Beehive">
        <div className="container-xxl">
          <Row className="col-12">

            {this.printProducts()}

          </Row>
        </div>
      </PageLayout>
    );
  }

}

export default App;
