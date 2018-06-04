import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';

const About = () => (
  <div className="container about-container">
    <Helmet title={`About | ${config.siteTitle}`} />
    <Header>About Us</Header>
    <Container text>
      <h2>Liam's Cheesecake: A Unique Twist to a Traditional Desert</h2>
      <p>
      Liam's Cheesecake's purpose for business is to provide people like you and I the tastiest 
      cheesecake creations ever to be enjoyed. The company was founded by Liam Danz, an
      entrepreneur with a passion for making people the best desserts. The idea for this 
      unique twist with cheesecake came to me from seeing posts on instagram of different desserts in 
      mason jars and Liam's love for cheesecake itself! Who doesn’t love cheesecake?! The goal of Liam's Cheesecake 
      is to be able to ship our cheesecake right to your door, can you say heaven? We at Liamscheesecakeco 
      believe everyone should get to taste our product, not just local. Click here to order! (Link to order site) 
      Our location is based out of Findlay Ohio, for the exact address you can go to @liamscheesecakeco on instagramlink, 
      Snapchat link, Facebook link. Open times, stock for the day and close times will be posted daily on them. 
      </p>
    </Container>
    <Footer />
  </div>
);

export default About;
