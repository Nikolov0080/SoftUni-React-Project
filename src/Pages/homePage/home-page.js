import React, { Component } from 'react';
import HoneyCard from '../../components/honeyCard/honeyCard';
import { Row } from 'react-bootstrap';
import PageLayout from '../../components/pageLayout/pageLayout';
import db from '../../fire/fire'

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
