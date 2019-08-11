import React from 'react';
import './App.css';
import Hero from './components/hero/Hero';
import Fade from 'react-reveal/Fade';
import NavBody from './components/body/NavBody';
import Body from './components/body/Body';
import Sticky from 'react-sticky-el';
import ScrollUpButton from 'react-scroll-up-button';



function App() {
    var divStyle = {
  color: 'white',
  backgroundColor: 'var(--violet)'
 
};
  return (

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
      

     
      
        <Body/>
     
      

    
    </div>
  );
}

export default App;
