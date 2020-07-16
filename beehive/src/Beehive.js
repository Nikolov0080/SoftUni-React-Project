import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './main.module.css'
import HoneyCard from './components/home/honeyCard';
import { Row, Container } from 'react-bootstrap';


const data = {
  title: "Honey",
  description: "Entrepreneurs Ryan Hudson and George Ruan founded Honey[11] he browser extension in late October 2012.",
  imageUrl: "https://images.indianexpress.com/2019/12/Honey_1200.jpg"
}
// {styles.products_container

function App() {
  return (
    <div className="container-sm">
      <Container >
        <Row>
          <HoneyCard {...data} />
          <HoneyCard {...data} />
          <HoneyCard {...data} />
          <HoneyCard {...data} />
          <HoneyCard {...data} />
          <HoneyCard {...data} />
          <HoneyCard {...data} />
        </Row>
      </Container>
    </div>
  );
}

export default App;
