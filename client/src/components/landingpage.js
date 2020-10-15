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
            <Card className="cardLandingPage2" style={{ borderStyle: "none", width: "35%", backgroundColor: "transparent", paddingTop: 200 }} >
              <Card.Body>
                <Card.Title style={{ fontSize: 60 }}>We Make Your Dreams Come True</Card.Title>
                <Card.Text style={{ fontSize: 22 }}>
                  ATW makes it much easier for you to find your dream school all Around the World!
              </Card.Text>
                <Card.Link style={{ fontSize: 27, color: "indigo", float: 'right', marginRight: 55 }} href="#">Discover How It Works...</Card.Link>
              </Card.Body>
            </Card>
            <img src="/images/1.png" className="cardLandingPageImage" style={{ textAlign: 'right' }} alt="logo"></img>
          </Row>

        </div>
        <h3>Your Career Upgrade Starts Here.....</h3>
        <Link to="/register"><Button>Register</Button></Link>
        <Link to="/login">Already a member? Click to log in.</Link>
      </div>
    );
  }
}


export default Landing;