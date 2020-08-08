import React, { useState, useEffect, useContext } from 'react';
import PageLayout from '../../components/pageLayout/pageLayout';
import db from '../../fire/fire';
import style from './homePage.module.css'
import { Card, Button } from 'react-bootstrap';
import honey_1 from './images/honey_1.jpg'
import honey_2 from './images/honey_2.jpg'
import UserContext from '../../context/context';


const ref = db.database().ref("totalSpend/usd");



const App = () => {


  const context = useContext(UserContext);
  const [statistics, setStatistics] = useState({});
  console.log(context);

  useEffect(() => {
    ref.on('value', (snapshot) => {
      setStatistics(snapshot.val())
    });
  }, [])

  return (

    <PageLayout title="Welcome to the Beehive">
      <div className="container-lg text-center col" >
        <h1 className={style.total}>Total spend by clients:  {statistics.usd} USD</h1>
        <p>(Updates after every completed order!)</p>
      </div>

      <Card className="text-center">

        <Card.Body>

          <div className="row">
            <div className="col text-center">

              <img className={style.img} src={honey_2} />

            </div>
            <div className="col">
              <Card.Footer className="text-muted"><h5>Last purchase by client at </h5>
                <br />
                <h5>{statistics.lastOrderTime}</h5>
                <br />
                <h5>For: {statistics.for} USD</h5>
              </Card.Footer>
              <Card.Title>So <Button variant="primary">Login</Button> and make yours</Card.Title>
              
              <Card.Title>If you don't have an account just <Button variant="primary" >Register</Button></Card.Title>
              
            </div>
            <div className="col text-center">

              <img className={style.img} src={honey_1} />

            </div>

          </div>


        </Card.Body>




      </Card>
    </PageLayout>
  );


}

export default App;
