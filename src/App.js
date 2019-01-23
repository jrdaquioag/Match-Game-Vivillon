import React from "react";
import {Component} from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import cards from "./cards.json"

class App extends Component {

  //Initial state
  state = {
    cards,
    score: 0,
    topScore: 0
  }


  render() {
    return (
      <div className = "container-fluid">
        <Navbar score = {this.state.score} topScore = {this.state.topScore} />
        {this.state.cards.map(card => (
          <Card name = {card.name} image = {card.image} />
        ))}
      </div>
    )
  }
}

export default App;