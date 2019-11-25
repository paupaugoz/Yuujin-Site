import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Body.css';
import { HashLink as Link } from 'react-router-hash-link';
import Sticky from 'react-sticky-el';

const NavBody = (props) => {
  const { onClick } = props;
  const divStyle = {
    color: 'white',
    backgroundColor: 'var(--violet)',

  };
  return (
    <div className="navbar-container hero">
      <header>

        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Navbar.Brand href="/"><img className="logo-image" alt="Yuujin-logo" src="yuujin_web.png" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav />
            <Nav>
              <Nav.Link><Link className="navbar-text" to="menu" onClick={onClick}>MENU</Link></Nav.Link>
              <Nav.Link><Link className="navbar-text" smooth to="contact">CONTACT US</Link></Nav.Link>
              <Nav.Link><Link className="navbar-text" smooth to="location">LOCATION</Link></Nav.Link>
              <Nav.Link><Link className="navbar-text" smooth to="about">ABOUT US</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>


      </header>
    </div>
  );
};

export default NavBody;
