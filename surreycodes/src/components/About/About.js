import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render(){
    return(
      <div id="about">
        <div className="container">
          <div className="about-flex-container">
            <h1>About Us</h1>
            <p>The SurreyCodes Community was created with the inspiration of <a href="https://www.freecodecamp.org/">freecodecamp.com</a> to cultivate peer-to-peer technology learning. We strive to provide a venue where developers and coders alike can gather and exchange knowledge to elevate our Non-Profit's approach to technology within British Columbia.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
