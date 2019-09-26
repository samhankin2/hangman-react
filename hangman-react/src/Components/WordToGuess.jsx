import React, { Component } from "react";
import Guess from "./Guess";

class WordToGuess extends Component {
  render() {
    const { wordToGuess } = this.props;
    return wordToGuess.split("").map(letter => {
      return (
        <Guess
          letter={letter}
          letterGuess={this.props.letterGuess}
          updateIncorrectCount={this.props.updateIncorrectCount}
        />
      );
    });
  }
}

export default WordToGuess;
