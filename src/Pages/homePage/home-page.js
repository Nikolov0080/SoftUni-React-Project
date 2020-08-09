import React, { useState, useEffect, useContext } from 'react';
import PageLayout from '../../components/pageLayout/pageLayout';
import db from '../../fire/fire';
import style from './homePage.module.css'
import { Card} from 'react-bootstrap';
import honey_1 from './images/honey_1.jpg'
import honey_2 from './images/honey_2.jpg'
import UserContext from '../../context/context';
import ButtonLink from '../../components/button-link/button-link';

const ref = db.database().ref("totalSpend/usd");

const App = () => {

  const context = useContext(UserContext);
  const [statistics, setStatistics] = useState({});

  const isLogged = context.user;

  useEffect(() => {
    ref.on('value', (snapshot) => {
      setStatistics(snapshot.val())
    });
  }, []);

  const pageView = () => {
    if (!isLogged) {
      return (
        <div>
          <Card.Footer className="text-muted"><h5>Last purchase by client at </h5>
            <br />
            <h5>{statistics.lastOrderTime}</h5>
            <br />
            <h5>For: {statistics.for} USD</h5>
          </Card.Footer>
          <Card.Title>So <ButtonLink to="/login" value="Login" /> and make yours</Card.Title>
          <Card.Title>If you don't have an account just <ButtonLink to="/register" value="Register" /></Card.Title>
        </div>

      )
    } else {
      return (
        <div>

          <Card>
            <Card.Title className={style.total}>
              <h5>You are logged in !</h5>
              <br></br>
              <h5>Now you can make you purchase !</h5>
          
            </Card.Title >
            <ButtonLink to="/products" value="Go to products" variant="success"/>

            <Card.Title className={style.total}>
              <br></br>
              <h5>Or complete complete you orders.</h5> 
              <br></br>
            <ButtonLink to="/profile" value="Go to Cart" variant="success"/>

            </Card.Title>
          </Card>
        </div>
      )
    }
  }

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

              <img alt="honey" className={style.img} src={honey_2} />

            </div>
            <div className="col">
              {pageView()}
            </div>
            <div className="col text-center">

              <img alt="honey" className={style.img} src={honey_1} />

            </div>

          </div>
        </Card.Body>
      </Card>
    </PageLayout>
  );


}

export default App;
