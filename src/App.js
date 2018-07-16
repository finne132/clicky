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
  // shuffle the array 
  shuffleArray = (array) => {
    let imgArray = Img;
    for (let i = imgArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
    }
    return imgArray
  }
  // onClick handler for image
  pickImg = (name) => {
    let picked = this.state.picked;
    
    if (picked.indexOf(name) === -1) {
      this.setState({
        picked: picked.concat(name),
        correct: this.state.correct + 1,
        topscore: this.state.correct + 1 > this.state.topscore ? this.state.correct + 1 : this.state.topscore,
        message: "Correct" 
      })
      this.shuffleArray();
    }
    else {
    }
  }

  // switch statement to return results based on clicked image
  imgSwitch = (name) => {
    switch (name) {
      case "alien":
        return `${alien}`
      case "ash":
        return `${ash}`
      case "baby":
        return `${baby}`
      case "brett":
        return `${brett}`
      case "dallas":
        return `${dallas}`
      case "facehugger":
        return `${facehugger}`
      case "jonesy":
        return `${jonesy}`
      case "kane":
        return `${kane}`
      case "lambert":
        return `${lambert}`
      case "nostormo":
        return `${nostromo}`
      case "parker":
        return `${parker}`
      case "ripley":
        return `${ripley}`
      default:
        return `${alien}`
    }
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