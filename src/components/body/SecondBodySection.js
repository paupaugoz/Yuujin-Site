import React, { Component } from 'react'
import { Nav, Navbar, Navlink } from 'react-bootstrap'
import './Body.css';
import Fade from 'react-reveal/Fade';
import Button from 'react-bootstrap/Button'

export default class SecondBodySection extends Component {

render() {

    return (
  <div id="second-pic">
    <section className="flex-row-lg">
    <Fade right>
      <div className="test">
        <p>Experience authentic Japanese food in the heart of Little Baguio.</p>
        <Button variant="outline-primary">Browse Menu</Button>
      </div>
      </Fade>
       <Fade left>
      <div className="img-container">
         <div className="yuujin-image1"></div>
      </div>
      </Fade>
      

    </section>
  
  </div>

    )
  }
}



