import React, { Component } from 'react'
import './Hero.css';
import { HashLink as Link } from 'react-router-hash-link';

export default class HeroPicture extends Component {

render() {
    return ( 

  <div className="hero-picture-container">
    
    <div className="hero-image"></div>
    <div className="hero-image-wrapper">
        
      <h1 className="hero-image-text">Yuujin: A Gathering of Friends</h1>
      <h2 className="hero-image-text">Serving Authentic Japanese Cuisine for 14 Years</h2>
       
    </div>
      <div className="arrow-container">
         <Link smooth to="#first-pic"><div className="arrow"></div></Link>
      </div>
 
  </div>
 

    )
  }
}
