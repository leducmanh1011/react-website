import React from 'react';
import '../App.css'
import { Button } from './Button';
import './HeroSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>ADVEBTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          WATCH TRAILER
          <FontAwesomeIcon icon={icons.faPlayCircle} />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection;
