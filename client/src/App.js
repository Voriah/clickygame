import React, { Component } from "react";
import Scoreboard from "./components/scoreboard"
import Image from "./components/image"
import "./App.css";

class App extends Component {
  render() {
    return (
    <div>
     <Scoreboard></Scoreboard>
     <Image></Image>
     </div>
    );
  }
}

export default App;
