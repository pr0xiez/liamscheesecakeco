import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';

const Contact = () => (
  <div className="container contact-container">
    <Helmet title={`Contact | ${config.siteTitle}`} />
    <Header>Contact</Header>
    <Container text>
      <h1>Contact Us!</h1>
      <p>
        We encourage people to email us at *INSERT EMAIL LINK* or contact us
        via our social media which can be found in the navigation bar above.
      </p>
    </Container>
    <Footer />
  </div>
);

export default Contact;
