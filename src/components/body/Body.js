import React, { Component } from 'react'
import { Nav, Navbar, Navlink } from 'react-bootstrap'
import './Body.css';
import Fade from 'react-reveal/Fade';
import Button from 'react-bootstrap/Button';
import FirstBodySection from './FirstBodySection';
import SecondBodySection from './SecondBodySection';
export default class Body extends Component {

render() {

    return (
  <div id="main-container">
    <main>
      <FirstBodySection />
      <SecondBodySection />
    </main>
  </div>

    )
  }
}



