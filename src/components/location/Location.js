import React from 'react';
import Container from 'react-bootstrap/Container';
import Sticky from 'react-sticky-el';
import NavBody from '../body/NavBody';

const Location = () => {
  const divStyle = {
    color: 'white',
    backgroundColor: 'var(--violet)',

  };
  return (
    <Container fluid style={{ padding: '0px' }}>
      <div className="sticky-container">
        <Sticky style={divStyle} topOffset={300}>
          <NavBody />
        </Sticky>
      </div>
      <h1>Location</h1>
    </Container>
  );
};


export default Location;
