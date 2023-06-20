import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="header section__padding" id="home">
    <div className="header-content">
      <h1 className="gradient__text">Blockchain & Web3 Development Company</h1>
      <p>As a Full-Stack Blockchain & Web3 Development Company, we help enterprises to leverage the decentralized network built on the blockchain. Our Blockchain Development Team utilizes our technical capabilities, innovation & product mindset and expertise to build solutions that introduce a new level of automation, transparency and efficiency into the business process of our clients.</p>

      <div className="header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="header-content__people">
        <img src={people} alt='people' />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="header-image">
      <img src={ai} alt='ai'/>
    </div>
  </div>
);

export default Header;