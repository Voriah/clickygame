import React, { Component } from "react"
import Bowser from "./images/bowser.jpg"
import Captain from "./images/captain.jpg"
import Falco from "./images/falco.jpg"
import Fox from "./images/fox.jpg"
import Link from "./images/link.jpg"
import Mac from "./images/mac.jpg"
import Marth from "./images/marth.jpg"
import Meta from "./images/meta.jpg"
import Peach from "./images/peach.jpg"
import Pit from "./images/pit.jpg"
import Ryu from "./images/ryu.jpg"
import Wario from "./images/wario.jpg"

var imgArr = [Bowser, Captain, Falco, Fox, Link, Mac, Marth, Meta, Peach, Pit, Ryu, Wario]

class Image extends Component {

  state = {
    score: 0,
    highScore: 0,
    clicked: []
  }

  shuffle = (array) => {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

 
  check = (event) => {
    this.shuffle(imgArr)
    console.log(event.target.getAttribute("data-clicked"))
    if (event.target.getAttribute("data-clicked") === "f") {
      this.setState({ score: this.state.score + 1 })
      event.target.setAttribute("data-clicked", "t")
    } else {
      if (this.state.score > this.state.highScore) {
        this.setState({ highScore: this.state.score })
      }
      this.setState({ score: 0 })
    }

  }
  

render() {
  return (
    <div>
      <h2>Score: {this.state.score}</h2>
      <h2>High Score: {this.state.highScore}</h2>

    <span>
      {imgArr.map(src => {
        return (
          <img key={src} className="imgs" onClick={this.check} data-clicked="f" src={src} alt="wops"  />
          )
        })}
    </span>
  </div>
  )
}
}

export default Image