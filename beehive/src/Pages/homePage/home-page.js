import React from 'react';
import HoneyCard from '../../components/honeyCard/honeyCard';
import { Row } from 'react-bootstrap';
import PageLayout from '../../components/pageLayout/pageLayout';
import Sidebar from '../../components/title/title';

const data = {
  title: "Honey",
  description: "Entrepreneurs Ryan Hudson and George Ruan founded Honey[11] he browser extension in late October 2012.",
  imageUrl: "https://images.indianexpress.com/2019/12/Honey_1200.jpg"
}

function App() {
  return (
    <PageLayout>
      <Sidebar />
      <div className="container-lg">
        <Row>
          <HoneyCard {...data} />
          <HoneyCard {...data} />
          <HoneyCard {...data} />
          <HoneyCard {...data} />
          <HoneyCard {...data} />
          <HoneyCard {...data} />
        </Row>
      </div>
    </PageLayout>
  );
}

export default App;
