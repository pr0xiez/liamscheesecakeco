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
      <h2>A Unique Twist to a Traditional Dessert</h2>
      <p>
        Founded in 2018, Liam's Cheesecake's purpose for business is to provide people like you the tastiest 
        cheesecake creations ever to be enjoyed. The company was founded by Liam Danz, an
        entrepreneur with a passion for making people the best desserts. The idea for this 
        unique twist of cheesecake came from seeing posts on Instagram of different desserts in 
        mason jars and Liam's love for cheesecake itself! Who doesn’t love cheesecake?! The future goal of Liam's Cheesecake 
        is to be able to ship our cheesecake right to your door! We at Liam's Cheesecake 
        believe everyone should get to enjoy cheesecake in a non-traditional way.
      </p>

      <h2>Liam Danz - Founder &amp; CEO</h2>
      <p>
        Liam Danz is the founder and CEO of Liamscheesecakeco, a company dedicated to 
        bringing you the best cheesecake to-go you’ve ever enjoyed.  Liam is an 
        entrepreneur who has always loved working for himself and networking with different 
        people. His love for sweets and passion to create a 
        lasting business is the reason for this unique and tasty creation.
      </p>
    </Container>
    <Footer />
  </div>
);

export default About;
