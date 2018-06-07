import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';

const Pricing = () => (
  <div className="container pricing-container">
    <Helmet title={`Pricing | ${config.siteTitle}`} />
    <Header>Pricing</Header>
    <Container text>
      <h2>Large Mason Jar: $8</h2>
      <h2>Small Mason Jar: $5</h2>
      <p>
        Reach out to us for ordering information via our social media
        or by clicking contact us below!
      </p>
    </Container>
    <Footer />
  </div>
);

export default Pricing;
