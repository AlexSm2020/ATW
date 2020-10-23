import React from 'react';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>We Make Your Dreams Come True</h1>
      <p>ATW makes it much easier for you to find your dream school all Around The World! You have our support to start your education in your future dream school</p>
      <div className='hero-btns'>
        <Button 
          className='btns3'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          style={{fontWeight:"800"}}
        >
          Register Today
        </Button>

      </div>
    </div>
  );
}

export default HeroSection;
