/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './Body.css';
import Footer from '../Footer/Footer';
import FirstBodySection from './FirstBodySection';
import SecondBodySection from './SecondBodySection';

const Body = () => (
  <div id="main-container">
    <main>

      <FirstBodySection />
      <SecondBodySection />
      <Footer />
    </main>
  </div>

);

export default Body;
