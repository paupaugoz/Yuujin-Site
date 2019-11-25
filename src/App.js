import React from 'react';
import './App.css';
import Fade from 'react-reveal/Fade';
import Sticky from 'react-sticky-el';
import Container from 'react-bootstrap/Container';
import ScrollUpButton from 'react-scroll-up-button';
import Hero from './components/hero/Hero';
import NavBody from './components/body/NavBody';
import Body from './components/body/Body';


function App() {
  const divStyle = {
    color: 'white',
    backgroundColor: 'var(--violet)',

  };
  return (
    <Container fluid style={{ padding: '0' }}>
      <div className="App wrap">
        <div>
          <ScrollUpButton AnimationDuration={500} />
        </div>
        <Fade>
          <div className="sticky-container">
            <Sticky style={divStyle} topOffset={300}>
              <NavBody />
            </Sticky>
          </div>

          <Hero />
        </Fade>


        <Body />


      </div>

    </Container>

  );
}

export default App;
