import React, { useState } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Sticky from 'react-sticky-el';
import MainBody from './components/body/MainBody';
import NavBody from './components/body/NavBody';
import Menu from './components/body/Menu';

function App() {
  const divStyle = {
    color: 'white',
    backgroundColor: 'var(--violet)',

  };

  const [isHidden, setHidden] = useState({
    mainBody: false,
    menu: true,
    contactUs: true,
    location: true,
    aboutUs: true,
  });

  const onClick = () => {
    setHidden({ ...isHidden, mainBody: true, menu: false });
  };

  return (
    <Container fluid style={{ padding: '0' }}>
      <div className="App wrap">
        <div className="sticky-container">
          <Sticky style={divStyle} topOffset={300}>
            <NavBody onClick={onClick} />
          </Sticky>
        </div>
        <MainBody />


      </div>

    </Container>

  );
}

export default App;
