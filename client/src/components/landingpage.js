import React from 'react';
import Cards from '../components/Cards';
import Cards2 from '../components/Cards2';
import Cards4 from '../components/Cards4';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';


class Landing extends React.Component {

  render() {

    return (
      < >
        <HeroSection />
        <Cards4 />
        <Cards />
        {/* <Cards2 /> */}
        <Footer />
      </>
    );
  }
}


export default Landing;
 