import React from 'react';
import Cards from '../components/cards/Cards';
import Cards4 from '../components/cards/Cards4';
// import Footer from '../components/Footer';
import HeroSection from '../components/cards/HeroSection';


class Landing extends React.Component {

  render() {

    return (
      < >
        <HeroSection />
        <Cards4 />
        <Cards />
        {/* <Cards2 /> */}
        {/* <Footer /> */}
      </>
    );
  }
}


export default Landing;
 