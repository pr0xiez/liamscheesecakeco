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
      <strong>Prices:</strong>
      <ul>
        <li>Large Mason Jar: $8</li>
        <li>Small Mason Jar $5</li>
      </ul>
    </div>
      <p>
        Reach out to us via email or social media to order at this time
      </p>
      <div>
        <a href="mailto:liamscheesecakeco@gmail.com">Email Us</a>
        <span>
          Instagram:
          <a href="https://www.instagram.com/liamscheesecakeco" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </span>
        <span>
          Facebook:
          <a href="https://www.facebook.com/Liams-Cheescake-243775213031817/" target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare />
          </a>
        </span>
        <span>
          Snapchat:
          <a href="https://www.snapchat.com/add/Liamscheesecakeco" target="_blank" rel="noopener noreferrer">
            <FaSnapchatSquare />
          </a>
        </span>
      </div>
    </Container>
    <Footer />
  </div>
);

export default Ordering;
