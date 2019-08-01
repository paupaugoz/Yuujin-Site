import React, { Component } from 'react'
import './Hero.css';


export default class HeroPicture extends Component {

render() {
    return ( 

  <div className="hero-picture-container">
    
   
    <img className="hero-image" src="yuujin_bar_1080.jpg"/>
      <div className="hero-image-wrapper">
        
          <h1 className="hero-image-text">Yuujin: A Gathering of Friends</h1>
          <h2 className="hero-image-text">Serving Authentic Japanese Cuisine for 14 Years</h2>
       
      </div>
        <div className="arrow-container">

         <a href="#test"> <div className="arrow"></div></a>
        </div>
 
  </div>
 

    )
  }
}
