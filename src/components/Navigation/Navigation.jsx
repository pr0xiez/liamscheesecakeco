import React, { Component } from 'react';
import Link from 'gatsby-link';
import Headroom from 'react-headroom';
import { FaInstagram, FaFacebookSquare, FaSnapchatSquare } from 'react-icons/lib/fa';
import { slide as Menu } from 'react-burger-menu';
import { Fade } from 'react-reveal';
import config from '../../../config/SiteConfig';
import styles from './Navigation.module.scss';
import './Headroom.scss';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }
  render() {
    return (
      <header>
        <Headroom calcHeightOnResize disableInlineStyles>
          <Fade down duration={2000} className={styles.wrapper}>
            <nav className={styles.navigation}>
              <span>
                <Link to="/about" activeClassName="active">
                  About Us
                </Link>
                <Link to="/pricing" activeClassName="active">
                  Pricing
                </Link>
              </span>
            </nav>
            <div className={styles.name}>
              <span>
                <Link to="/">
                  <h3>{config.siteTitle}</h3>
                </Link>
              </span>
            </div>
            <div className={styles.socialMedia}>
              <span>
                <a href="https://www.instagram.com/liamscheesecakeco" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://www.facebook.com/Liams-Cheescake-243775213031817/" target="_blank" rel="noopener noreferrer">
                  <FaFacebookSquare />
                </a>
                <a href="https://www.snapchat.com/add/Liamscheesecakeco" target="_blank" rel="noopener noreferrer">
                  <FaSnapchatSquare />
                </a>
              </span>
            </div>
          </Fade>
        </Headroom>
        <div className={styles.mobileNav}>
          <div className={styles.mobileNavName}>
            <Link to="/">
              <h3>{config.siteTitle}</h3>
            </Link>
          </div>
          <div className={styles.menu}>
            <Menu isOpen={this.state.menuOpen} onStateChange={this.handleStateChange} width="100%">
              <Link to="/" onClick={() => this.closeMenu()}>
                <h1>{config.siteTitle}</h1>
              </Link>
              <Link to="/about" activeClassName="active" onClick={() => this.closeMenu()}>
                About
              </Link>
              <Link to="/pricing" activeClassName="active" onClick={() => this.closeMenu()}>
                Pricing
              </Link>
              <div className={styles.mobileNavSocialMedia}>
                <a href="https://www.instagram.com/liamscheesecakeco" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://www.facebook.com/Liams-Cheescake-243775213031817/" target="_blank" rel="noopener noreferrer">
                  <FaFacebookSquare />
                </a>
                <a href="https://www.snapchat.com/add/Liamscheesecakeco" target="_blank" rel="noopener noreferrer">
                  <FaSnapchatSquare />
                </a>
              </div>
            </Menu>
          </div>
        </div>
      </header>
    );
  }
}
