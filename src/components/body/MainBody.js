import React from 'react';

import Fade from 'react-reveal/Fade';
import Sticky from 'react-sticky-el';

import ScrollUpButton from 'react-scroll-up-button';
import Hero from '../hero/Hero';
import NavBody from './NavBody';
import Body from './Body';

const MainBody = () => {
  const divStyle = {
    color: 'white',
    backgroundColor: 'var(--violet)',

  };
  return (
    <>
      <div>
        <ScrollUpButton AnimationDuration={500} />
      </div>
      <Fade>
        {/* <div className="sticky-container">
          <Sticky style={divStyle} topOffset={300}>
            <NavBody />
          </Sticky>
        </div> */}

        <Hero />
      </Fade>


      <Body />
    </>
  );
};

export default MainBody;
