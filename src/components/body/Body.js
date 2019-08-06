import React, { Component } from 'react'
import { Nav, Navbar, Navlink } from 'react-bootstrap'
import './Body.css';
import Fade from 'react-reveal/Fade';
import Button from 'react-bootstrap/Button'

export default class Body extends Component {

render() {

    return (

  <div id="first-pic">
    <section>
       <Fade left>
      <div className="img-container">
        <img className="hero-image" src="yuujin_sign.jpg"/>
      </div>
      </Fade>
      <Fade right>
      <div className="test">
        <p>Experience authentic Japanese food in the heart of Little Baguio.</p>
        <Button variant="outline-primary">Browse Menu</Button>
      </div>
      </Fade>

    </section>
    

  </div>

    )
  }
}



