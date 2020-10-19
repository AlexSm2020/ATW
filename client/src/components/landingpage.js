import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import { Card, Row } from 'react-bootstrap';
import Cards from '../components/Cards';
import Cards2 from '../components/Cards2';
import Cards3 from '../components/Cards3';
import Cards4 from '../components/Cards4';
import Footer from '../components/Footer';


class Landing extends React.Component {

  render() {

    return (
      <div className="container2" >
        <Cards3 />
        <Cards4 />
        <Cards />
        <Cards2 />
        <Footer />
      </div>
    );
  }
}


export default Landing;
 