import React, { Component } from 'react'
import './Hero.css';
import Carousel from 'react-bootstrap/Carousel';
import { fadeIn } from 'react-animations'; 
import Jumbotron from 'react-bootstrap/Jumbotron';

export default class HeroCarousel extends Component {

render() {
    return (
<div className="carousel-container">
  <Carousel>
    <Carousel.Item>
      <img
      className="d-block w-100"
      src="yuujin_bar_1080.jpg" 
      alt="Hero slide"/>
      <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
    </Carousel.Item>

    
    
   </Carousel>
</div>
    )
  }
}
