/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  MDBCol, MDBContainer, MDBRow, MDBFooter,
} from 'mdbreact';


const Footer = () => (
  <MDBFooter color="indigo" className="font-small pt-0">
    <MDBContainer>
      <MDBRow className="pt-5 mb-3 text-center d-flex justify-content-center">
        <MDBCol md="2" className="b-3">
          <h6 className="title font-weight-bold">
            <a href="https://www.google.com/maps/place/Yuujin/@14.5975452,121.0382723,17z/data=!3m1!4b1!4m5!3m4!1s0x3397c8294701b833:0x6c326dc2cd445172!8m2!3d14.59754!4d121.040461">
        221 Wilson Street, Greenhills, San Juan, Philippines

            </a>
          </h6>
        </MDBCol>
        <MDBCol md="2" className="b-3">
          <h6 className="title font-weight-bold">
      (02) 706-0626
          </h6>
        </MDBCol>
        <MDBCol md="2" className="b-3">
          <h6 className="title font-weight-bold">
     Monday to Thursday
        11:00am - 3:00pm
            {' '}
            <br />
        5:30pm - 10:00pm
          </h6>
        </MDBCol>
        <MDBCol md="2" className="b-3">
          <h6 className="title font-weight-bold">
      Friday to Sunday
        11:00am - 3:00pm
            {' '}
            <br />
        5:30pm - 11:00pm
          </h6>
        </MDBCol>

      </MDBRow>

      <MDBRow className="d-flex text-center justify-content-center mb-md-0 mb-4">
        <MDBCol md="8" sm="12" className="mt-5">
          <p style={{ lineHeight: '1.7rem' }}>
      Owned and operated by:  Maeda's  Japanese Cuisine, Inc.
          </p>
        </MDBCol>
      </MDBRow>

      <MDBRow className="pb-3">
        <MDBCol md="12" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="mb-5 flex-center ">
            <a className="ic" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/yuujin.official/">
              <i className="fab fa-facebook-f fa-lg white-text mr-md-4" />
            </a>
            <a className="ic" target="_blank" rel="noopener noreferrer" href="https://www.yelp.com/biz/yuujin-japanese-cuisine-san-juan?rh_ident=unagi&rh_type=phrase">
              <i className="fab fa-yelp fa-lg white-text mr-md-4"> </i>
            </a>
            <a className="ic" target="_blank" rel="noopener noreferrer" href="https://www.tripadvisor.com/Restaurant_Review-g298573-d1150290-Reviews-Yuujin-Manila_Metro_Manila_Luzon.html">
              <i className="fab fa-tripadvisor fa-lg white-text mr-md-4"> </i>
            </a>
            <a className="ic" target="_blank" rel="noopener noreferrer" href="https://foursquare.com/v/yuujin/4bdc070b2a3a0f47cf51b1b6">
              <i className="fab fa-foursquare fa-lg white-text mr-md-4"> </i>
            </a>
            <a className="ic" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/explore/locations/277203942/yuujin-japanese-cuisine/">
              <i className="fab fa-instagram fa-lg white-text mr-md-4"> </i>
            </a>
          </div>

        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <div className="footer-copyright text-center py-3">
      <MDBContainer fluid>
  &copy;
        {' '}
        {new Date().getFullYear()}
        {' '}
Powered By:
        <a href="https://paupaugoz.github.io/paulogozum-webportfolio/" target="_blank" rel="noopener noreferrer">Paulo Gozum</a>
      </MDBContainer>
    </div>
  </MDBFooter>

);

export default Footer;
