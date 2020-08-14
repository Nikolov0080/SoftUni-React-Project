import React from 'react'
import { Card } from 'react-bootstrap'
import Notification from '../../../notifications/notification';
import ButtonLink from '../../../components/utils/button-link/button-link';

const HomeView = ({ statistics, style, status, isLogged }) => {

  if (!isLogged) {
    return (
      <div>
        <Card.Footer className="text-muted"><h5>Last purchase by client at </h5>
          <br />
          <h5>{statistics.lastOrderTime}</h5>
          <br />
          <h5>For: {statistics.for} USD</h5>
          <h5>By User [{statistics.username}]</h5>
        </Card.Footer>
        <Card.Title>So <ButtonLink to="/login" value="Login" /> and make yours</Card.Title>
        <Card.Title>If you don't have an account just <ButtonLink to="/register" value="Register" /></Card.Title>
      </div>
    )
  } else {
    return (
      <div>

        {status === "logged"
          ? <Notification type="success" message="You are now Logged in !" /> : ''}

        {status === "registered"
          ? <Notification type="success" message="Registration successful !" /> : ''}

        <Card  style={{border:"none"}}>
          <Card.Title className={style.total}>
            <h5>You are logged in !</h5>
            <br></br>
            <h5>Now you can make you purchase !</h5>

          </Card.Title >
          <ButtonLink to="/products" value="Go to products" variant="success" />

          <Card.Title className={style.total} style={{marginTop:'1em'}}>
            <br></br>
            <h5>Or complete complete you orders.</h5>
            <br></br>
            <h5>Last Order {statistics.for} USD</h5>
            <h5>By User [{statistics.username}]</h5>
            <ButtonLink to="/profile" value="Go to Cart" variant="success" />
          </Card.Title>
        </Card>
      </div>
    )
  }
}

export default HomeView;