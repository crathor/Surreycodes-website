import React, { Component } from 'react';
import './components/App.css';
import Header from './components/Header';
import Meetup from './components/Meetup';
import Hook from './components/Hook';
import About from './components/About';
import Community from './components/Community';
import Subscribe from './components/Subscribe';
import Friends from './components/Friends';
import Members from './components/Members';
import Footer from './components/Footer';
import WhenLeavingView from './components/WhenLeavingView';



class App extends Component {

  render() {
    return (
      <div className="App">
        <WhenLeavingView>
          {({ isLeavingView }) =>
            <Header animate={isLeavingView}/>
          }
        </WhenLeavingView>
          <article id="section-one">
            <Hook />
            <Meetup />
          </article>
          <article id="section-two">
            <About />
          </article>
          <article id="section-three">
            <div className="green-section"></div>
            <Community />
            <Members />
            <Subscribe />
            <Friends />
          </article>
        <Footer />
      </div>
    );
  }
}

export default App;
