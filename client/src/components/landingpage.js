import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import { Card, Row } from 'react-bootstrap';
import Cards from '../components/Cards';


class Landing extends React.Component {

  render() {

    return (
      <div className="container2" >
        <div className="cardLandingPage">
          <Row>
            <Card className="cardLandingPage2" style={{ borderStyle: "none", width: "35%", backgroundColor: "transparent", paddingTop: 200 }} >
              <Card.Body>
                <Card.Title style={{ fontSize: 60 }}>We Make Your Dreams Come True</Card.Title>
                <Card.Text style={{ fontSize: 22 }}>
                  ATW makes it much easier for you to find your dream school all Around The World!
              </Card.Text>
                <Card.Link style={{ fontSize: 27, color: "indigo", float: 'right', marginRight: 55 }} href="#aref">Discover How It Works...</Card.Link>
              </Card.Body>
            </Card>
            <img src="/images/1.png" className="cardLandingPageImage" style={{ textAlign: 'right' }} alt="logo"></img>
          </Row>

        </div>

        <Cards />

        <div className="row2" >
          <div className="column2">
            <Card className="lastCard" style={{ height: 500, width: 500, borderRadius: 500 }}>
              <Card.Img style={{ height: 500, width: 500, borderRadius: 500 }} src="/images/students.jpg" alt="Card image" />
              <Card.ImgOverlay style={{ height: 300, width: 300, borderRadius: 500, display: "block", marginLeft: "auto", marginRight: "auto", marginTop: 20 }}>
                <Card.Title>Welcome to School</Card.Title>
                <Card.Text>
                  No worries... We will send you all the required information regarding your registration process and orientation. 
             </Card.Text>
                <Card.Text></Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>
          <div className="column2" style={{ alignContent:"space-evenly"}}>
            <Card className="lastCard" style={{ height: 500, width: 500, borderRadius: 500 }}>
              <Card.Img style={{ height: 500, width: 500, borderRadius: 500 }} src="/images/scholarship.png" alt="Card image" />
              <Card.ImgOverlay style={{ height: 300, width: 300, borderRadius: 500, display: "block", marginLeft: "auto", marginRight: "auto", marginTop: 20 }}>
                <Card.Title>Looking for scholarship?</Card.Title>
                <Card.Text>
                  Our professional consultants will help you to find what fits you and you future major! 
             </Card.Text>
                <Card.Text></Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>
          <div className="column2">
            <Card className="lastCard" style={{ float: "left", height: 500, width: 500, borderRadius: 500 }}>
              <Card.Img style={{ height: 500, width: 500, borderRadius: 500 }} src="/images/move.jpg" alt="Card image" />
              <Card.ImgOverlay style={{ height: 300, width: 300, borderRadius: 500, display: "block", marginLeft: "auto", marginRight: "auto", marginTop: 20 }}>
                <Card.Title style={{marginTop:200, color:"darkblue"}}>Free temporary accommodation</Card.Title>
                <Card.Text>
                  We understand how hard it is to start your life in a new country. We may able to find a temporary place to live.  
              </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>
        </div>
        <div className="cardLandingPage">
          <Row>
            <Card className="cardLandingPage2" style={{ borderStyle: "none", width: "35%", backgroundColor: "transparent", paddingTop: 200 }} >
              <Card.Body>
                <Card.Title style={{ fontSize: 60 }}>We Make Your Dreams Come True</Card.Title>
                <Card.Text style={{ fontSize: 22 }}>
                  ATW makes it much easier for you to find your dream school all Around The World!
              </Card.Text>
                <Card.Link style={{ fontSize: 27, color: "indigo", float: 'right', marginRight: 55 }} href="#aref">Discover How It Works...</Card.Link>
              </Card.Body>
            </Card>
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
 