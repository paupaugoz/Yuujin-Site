import React, { Component } from 'react'
import { Nav, Navbar, Navlink } from 'react-bootstrap'
import './Body.css';
import Fade from 'react-reveal/Fade';
import Button from 'react-bootstrap/Button'

export default class SecondBodySection extends Component {

render() {

    return (
  <div id="second-pic">
    <section className="flex-row-lg flex-column-reverse">
    <Fade left>
      <div className="body-text">
        <p>Satiate your hunger, cherish the sweet aroma, and immerse yourself in the Japanese experience.</p>
      </div>
      </Fade>
       <Fade right>
      <div className="img-container">
         <div className="yuujin-front"></div>
      </div>
      </Fade>


    </section>
  
  </div>

    )
  }
}



