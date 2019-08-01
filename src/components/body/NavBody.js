import React, { Component } from 'react'
import { Nav, Navbar, Navlink } from 'react-bootstrap'
import './Body.css';

export default class NavBody extends Component {

render() {

    return (

  <div className="navbar-container hero">
    
    <Navbar  collapseOnSelect expand="lg"  variant="dark">
  <Navbar.Brand href="#hero-container"><img className="logo-image" src="yuujin_web.png"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
      
    </Nav>
    <Nav>
      <Nav.Link className="navbar-text" href="#test">CONTACT US</Nav.Link>
      <Nav.Link className="navbar-text" href="#test">LOCATION</Nav.Link>
      <Nav.Link className="navbar-text" href="#test">ABOUT US</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>



  </div>

    )
  }
}



