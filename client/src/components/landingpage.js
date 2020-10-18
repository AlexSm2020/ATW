import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import { Card, Row } from 'react-bootstrap';
import Cards from '../components/Cards';
import Cards2 from '../components/Cards2';
import Cards3 from '../components/Cards3';
import Cards4 from '../components/Cards4';


class Landing extends React.Component {

  render() {

    return (
      <div className="container2" >
        <Cards3 />
        <Cards4 />
        <Cards />
        <Cards2 />
        




        




        <h3>Your Career Upgrade Starts Here.....</h3>
        <Link to="/register"><Button>Register</Button></Link>
        <Link to="/login">Already a member? Click to log in.</Link>
      </div>
    );
  }
}


export default Landing;
 