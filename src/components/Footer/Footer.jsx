import React from 'react';
import styles from './Footer.module.scss';
import config from '../../../config/SiteConfig';

const Footer = () => (
  <footer className={styles.footer}>
    {config.copyright}
    <p>
      <a href="mailto:liamscheesecakeco@gmail.com">Contact Us</a>
    </p>
  </footer>
);

export default Footer;
