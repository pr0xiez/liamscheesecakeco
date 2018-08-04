import React from 'react';
import Helmet from 'react-helmet';
import { FaInstagram, FaFacebookSquare, FaSnapchatSquare } from 'react-icons/lib/fa';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';

const Ordering = () => (
  <div className="container ordering-container">
    <Helmet title={`Ordering | ${config.siteTitle}`} />
    <Header>Ordering</Header>
    <Container text>
    <div className="pricing">
      <ul>
        <li>Large Mason Jar: $10</li>
        <li>Small Mason Jar $5</li>
      </ul>
    </div>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSc8GRbxA2eA9dtoL-FwRAjPz4oDUOJpqe-d_7putXIPC1k_yw/viewform?ts=5b65a2a4" target="_blank">
      Click here to order!
    </a>
    </Container>
    <Footer />
  </div>
);

export default Ordering;
