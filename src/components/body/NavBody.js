import React, { Component } from 'react'
import { Nav, Navbar, Navlink } from 'react-bootstrap'
import './Body.css';
import { HashLink as Link } from 'react-router-hash-link';

export default class NavBody extends Component {

render() {

    return (

  <div className="navbar-container hero">
    <header>
    <Navbar  collapseOnSelect expand="lg"  variant="dark">
      <Navbar.Brand href="/Yuujin-Site"><img className="logo-image" src="yuujin_web.png"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav >
      
      
    </Nav>
    <Nav>
      <Nav.Link><Link className="navbar-text" smooth to="#first-pic">CONTACT US</Link></Nav.Link>
      <Nav.Link><Link className="navbar-text" smooth to="#first-pic">LOCATION</Link></Nav.Link>
      <Nav.Link><Link className="navbar-text" smooth to="#first-pic">ABOUT US</Link></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>


  </header>
  </div>

    )
  }
}



