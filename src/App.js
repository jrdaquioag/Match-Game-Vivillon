import React from "react";
import {Component} from "react";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import cards from "./cards.json"

class App extends Component {

  //Initial state
  state = {
    cards,
    clickedCardIds: [],
    score: 0,
    highScore: 0
  }

  cardClick(clickId) {
    // clickedCardIds array contains card ids that have been clicked this game
    // If card was not clicked yet, game continues
    if (this.state.clickedCardIds.indexOf(clickId) === -1) 
      this.incrementScore(clickId);
    // If card was clicked already, player loses
    else 
      this.gameOver(false);

    this.setState({cards: this.state.cards.sort(() => 0.5 - Math.random())});
  }

  // Increment handler for score, highScore, and clickedCardIds
  incrementScore(clickId) {
    this.setState({
      score: this.state.score + 1,
      clickedCardIds: [...this.state.clickedCardIds, clickId]
    }, () => {
      console.log(this.state.score);
      console.log(this.state.clickedCardIds);
      // Set high score
      if (this.state.score > this.state.highScore)
        this.setState({highScore: this.state.score});
      // If player was able to click on every card, player wins
      if (this.state.score === this.state.cards.length)
        this.gameOver(true);
    })
  }

  gameOver(win) {
    win ? alert(`You win!\nYou clicked all ${this.state.cards.length} cards!`) : 
          alert(`You lose...\nYour Score: ${this.state.score}`);
    this.setState({
      score: 0,
      clickedCardIds: []
    });
  }


  render() {
    return (
      <div className = "container-fluid">

        <Navbar score = {this.state.score} highScore = {this.state.highScore} />
        <Wrapper>
          {this.state.cards.map((card, i) => (
            <Card key = {Math.random()+i} id = {card.id} name = {card.name} image = {card.image} cardClick = {this.cardClick.bind(this)}/>       
          ))}
        </Wrapper>
      </div>
    )
  }
}

export default App;