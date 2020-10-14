import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import { Card, Row } from 'react-bootstrap';

class Landing extends React.Component {

  render() {

    return (
      <div className="container2" id="landing-container2">
        <div className="cardLandingPage">
        <Row>
          <Card className="cardLandingPage2" style={{borderStyle:"none", width: "35%", backgroundColor: "transparent", paddingTop: 200 }} >
            <Card.Body>
              <Card.Title style={{ fontSize:60 }}>We Make Dreams Come True</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
          <div className="cardLandingPageImage" style={{textAlign: 'right'}}>
            <img src="/images/1.png" className="cardLandingPageImage" alt="logo"></img>
          </div>
        </Row>

        </div>
        <h3>Your Career Upgrade Starts Here.</h3>
        <Link to="/register"><Button>Register</Button></Link>
        <Link to="/login">Already a member? Click to log in.</Link>
      </div>
    );
  }
}


export default Landing;