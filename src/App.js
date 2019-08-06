import React from 'react';
import './App.css';
import Hero from './components/hero/Hero';
import Reveal from 'react-reveal/Reveal';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import NavBody from './components/body/NavBody';
import Body from './components/body/Body';
import Sticky from 'react-sticky-el';


function App() {
    var divStyle = {
  color: 'white',
  backgroundColor: 'var(--violet)'
 
};
  return (
    <div className="App wrap">
     <Fade>
      <div className="sticky-container">
        <Sticky style={divStyle} topOffset={500}>
          <NavBody />
        </Sticky>
      </div>
      
      <Hero />
      </Fade>
      

     
      
        <Body/>
     
      

    
    </div>
  );
}

export default App;
