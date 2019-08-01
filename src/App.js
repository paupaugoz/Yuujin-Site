import React from 'react';
import './App.css';
import Hero from './components/hero/Hero';
import Reveal from 'react-reveal/Reveal';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import NavBody from './components/body/NavBody';
import Sticky from 'react-sticky-el';


function App() {
    var divStyle = {
  color: 'white',
  backgroundColor: 'white'
 
};
  return (
    <div className="App">
      <div className="sticky-container">
        <Sticky style={divStyle} topOffset={500}>
          <NavBody />
        </Sticky>
      </div>
    
      <Hero />
      <Fade right>
     
      </Fade>

      <div id="test">
      <Fade left>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit faucibus mollis. Praesent ultrices vehicula hendrerit. Maecenas ut ante ut magna viverra consequat. Sed pretium viverra quam non blandit. Nullam bibendum odio non posuere venenatis. Aliquam a quam non velit pharetra convallis. Duis lorem libero, vehicula fermentum elementum vel, finibus at purus. Curabitur feugiat felis a dolor ultricies interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras sit amet sem interdum, lacinia nulla ac, tincidunt odio.</p>
      </Fade>
       <Fade right>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit faucibus mollis. Praesent ultrices vehicula hendrerit. Maecenas ut ante ut magna viverra consequat. Sed pretium viverra quam non blandit. Nullam bibendum odio non posuere venenatis. Aliquam a quam non velit pharetra convallis. Duis lorem libero, vehicula fermentum elementum vel, finibus at purus. Curabitur feugiat felis a dolor ultricies interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras sit amet sem interdum, lacinia nulla ac, tincidunt odio.</p>
      </Fade>
       <Fade left>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit faucibus mollis. Praesent ultrices vehicula hendrerit. Maecenas ut ante ut magna viverra consequat. Sed pretium viverra quam non blandit. Nullam bibendum odio non posuere venenatis. Aliquam a quam non velit pharetra convallis. Duis lorem libero, vehicula fermentum elementum vel, finibus at purus. Curabitur feugiat felis a dolor ultricies interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras sit amet sem interdum, lacinia nulla ac, tincidunt odio.</p>
      </Fade>
       <Fade right>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit faucibus mollis. Praesent ultrices vehicula hendrerit. Maecenas ut ante ut magna viverra consequat. Sed pretium viverra quam non blandit. Nullam bibendum odio non posuere venenatis. Aliquam a quam non velit pharetra convallis. Duis lorem libero, vehicula fermentum elementum vel, finibus at purus. Curabitur feugiat felis a dolor ultricies interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras sit amet sem interdum, lacinia nulla ac, tincidunt odio.</p>
      </Fade>
       <Fade left>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit faucibus mollis. Praesent ultrices vehicula hendrerit. Maecenas ut ante ut magna viverra consequat. Sed pretium viverra quam non blandit. Nullam bibendum odio non posuere venenatis. Aliquam a quam non velit pharetra convallis. Duis lorem libero, vehicula fermentum elementum vel, finibus at purus. Curabitur feugiat felis a dolor ultricies interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras sit amet sem interdum, lacinia nulla ac, tincidunt odio.</p>
      </Fade>
       <Fade right>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit faucibus mollis. Praesent ultrices vehicula hendrerit. Maecenas ut ante ut magna viverra consequat. Sed pretium viverra quam non blandit. Nullam bibendum odio non posuere venenatis. Aliquam a quam non velit pharetra convallis. Duis lorem libero, vehicula fermentum elementum vel, finibus at purus. Curabitur feugiat felis a dolor ultricies interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras sit amet sem interdum, lacinia nulla ac, tincidunt odio.</p>
      </Fade>
</div>
    
    </div>
  );
}

export default App;
