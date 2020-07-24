import React, { Component } from 'react';
import HoneyCard from '../../components/honeyCard/honeyCard';
import { Row } from 'react-bootstrap';
import PageLayout from '../../components/pageLayout/pageLayout';
import db from '../../fire/fire'
const data = {
  title: "Honey",
  description: "Entrepreneurs Ryan Hudson and George Ruan founded Honey[11] he browser extension in late October 2012.",
  imageUrl: "https://images.indianexpress.com/2019/12/Honey_1200.jpg"
}

const ref = db.database().ref().child('products');


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: []
    }

    ref.on('value', daa => {
      this.setState({
        products: daa.val()
      })
    })

  }

  printProducts() {
    const honeyData = Object.values(this.state.products);
  return  honeyData.map((product,i) => {
      return <HoneyCard key={i}{...product} />
    })
  }

  render() {

    return (

      <PageLayout title="Welcome to the Beehive">
        <div className="container-xl">
          <Row className="col-12">

{this.printProducts()}
           
          </Row>
        </div>
      </PageLayout>
    );
  }

}

export default App;
