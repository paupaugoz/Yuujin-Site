import React, { Component } from 'react'
import './Hero.css';
import HeroPicture from './HeroPicture';
import Zoom from 'react-reveal/Zoom';
import NavBody from '../body/NavBody';
import Sticky from 'react-sticky-el';

export default class Hero extends Component {

  render() {
    return (
<div id="hero-container">
  <header>
   <div className="sticky-container">
    <Sticky topOffset={800}>
    <NavBody />
    </Sticky>
    </div>
    <Zoom>
    <HeroPicture/>
    </Zoom>
    



   
 

   
    
   
  </header>

    
</div>
    )
  }

}
