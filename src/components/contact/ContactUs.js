import React from 'react';
import Container from 'react-bootstrap/Container';
import Sticky from 'react-sticky-el';
import NavBody from '../body/NavBody';

const ContactUs = () => {
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
      <h1>Contact Us</h1>
    </Container>
  );
};


export default ContactUs;
