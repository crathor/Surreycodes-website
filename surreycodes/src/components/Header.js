import React, { Component } from 'react';
import Logo from '../assets/SurreyCodeCampLogoNew.svg';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      togglerIsToggled: false
    };
  }

  toggleMenu(){
    let toggler = !this.state.togglerIsToggled;
    if (toggler === true) {
      document.getElementById('header').classList.remove('header-mobile-drop');
    } else {
      document.getElementById('header').classList.add('header-mobile-drop');
    }
    this.setState({
      togglerIsToggled: toggler
      });
  }

  render(){
    return(
      <header id="header" className="header-mobile">
        <div className="container">
          <nav className="navbar">
            <Link className={this.props.animate ? "branding logo-true" : "branding logo"} to="/">
              <img src={Logo} width="50" height="50" alt="SurreyCodes"/>
            </Link>
            <button id="toggler" onClick={this.toggleMenu.bind(this)}><i className="fa fa-bars"></i></button>
            <Link className="nav-link active" to="/">Home</Link>
            <Link className="nav-link" to="/meetup">Meetup</Link>
            <Link className="nav-link" to="/about">About Us</Link>
            <Link className="nav-link" to="/events">Events</Link>
            <Link className="nav-link" to="/about">Members</Link>
            <Link className="nav-link" to="/sponsors">Sponsors</Link>
          </nav>
        </div>

      </header>
    );
  }
}

export default Header;
