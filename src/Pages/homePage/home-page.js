import React, { useState, useEffect, useContext } from 'react';
import PageLayout from '../../components/pageLayout/pageLayout';
import db from '../../fire/fire';
import style from './homePage.module.css'
import { Card } from 'react-bootstrap';
import honey_1 from './images/honey_1.jpg'
import honey_2 from './images/honey_2.jpg'
import UserContext from '../../context/context';
import HomeView from '../../components/utils/homeView/homeView';
import LastFive from '../../components/utils/lastFive/lastFive';

const ref = db.database().ref("totalSpend/usd");

const Home = (props) => {

  const status = props.location.state;

  const context = useContext(UserContext);
  const [statistics, setStatistics] = useState({});

  const isLogged = context.user;

  useEffect(() => {
    ref.on('value', (snapshot) => {
      setStatistics(snapshot.val())
    });
  }, []);


  return (

    <PageLayout title="Welcome to the Beehive">
      <div className="container-lg text-center col" >
        <h1 className={style.total}>Total spend by clients:  {statistics.usd} USD</h1>
        <p>(Updates after every completed order!)</p>
      </div>

      <Card className="text-center" style={{border:"none"}}>

        <Card.Body>

          <div className="row">

            <div className="col text-center">
              <img alt="honey" className={style.img} src={honey_2} />
            </div>

            <div className="col">
              <HomeView status={status} isLogged={isLogged} statistics={statistics} style={style} />
            </div>

            <div className="col text-center">
              <img alt="honey" className={style.img} src={honey_1} />
            </div>

          </div>
        </Card.Body>
      </Card>

      <LastFive />

    </PageLayout>
  );
}

export default Home; 