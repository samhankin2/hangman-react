import React, { Component } from "react";

class Guess extends Component {
  state = { hasBeenGuessed: false, isGoodGuess: true, beenGuessed: false };

  isCorrectGuess = () => {
    if (this.props.letter === this.props.letterGuess) {
      if (!this.state.hasBeenGuessed) {
        // this.props.letterGuess = "";
        this.setState(currentState => {
          return {
            hasBeenGuessed: true,
            isGoodGuess: currentState.isGoodGuess
          };
        });
      }
    }
  };

  render() {
    this.isCorrectGuess();
    return <h3>{this.state.hasBeenGuessed ? this.props.letter : "_"} </h3>;
  }
}

export default Guess;
