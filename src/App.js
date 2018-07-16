"use strict";

// Grab react components 
import React, { Component } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Img from "./components/Img.json"
import Main from "./components/Main";
import Image from "./components/Image";

// Grab local images
import alien from "./images/alien.png";
import ash from "./images/ash.png";
import baby from "./images/baby.png";
import brett from "./images/brett.png";
import dallas from "./images/dallas.png";
import facehugger from "./images/facehugger.png";
import jonesy from "./images/jonesy.png";
import kane from "./images/kane.png";
import lambert from "./images/lambert.png";
import nostromo from "./images/nostromo.png";
import parker  from "./images/parker.png";
import ripley from "./images/ripley.png";

// Grab local CSS
import './App.css';

class App extends Component {
  state = {
    picked: [],
    correct: 0,
    topscore: 0,
    message: 'Click an image to start the game!'
  };

  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  shuffleArray = (array) => {
  }

  pickImg = (name) => {
  }

  imgSwitch = (name) => {

  }

  render() {
    return (
      <div>
        <Navbar correct={this.state.correct} topscore={this.state.topscore} message={this.state.message}/>
        <Header />
        <Main>
          {this.shuffleArray(Img).map(image => (
            <Image src={this.imgSwitch(image.name)} name={image.name} key={image.name} pickImg={this.pickImg}  />
          ))}
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;