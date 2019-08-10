import React, { Component } from 'react'
import { Nav, Navbar, Navlink } from 'react-bootstrap'
import './Body.css';
import Fade from 'react-reveal/Fade';
import Button from 'react-bootstrap/Button'

export default class FirstBodySection extends Component {

render() {

    return (
  <div id="first-pic">
    <section className="flex-row-lg">
       <Fade left>
      <div className="img-container">
        <div className="yuujin-image"></div>
        
      </div>
      </Fade>
      <Fade right>
      <div className="body-text">
        <p>Experience authentic Japanese food in the heart of Little Baguio.</p>
         <Button variant="outline-primary">Browse Menu</Button>
      </div>
      </Fade>

    </section>
  
  </div>

    )
  }
}



