import React from "react";
import logo from "./logo.svg";
import "./App.css";
import InputWord from "./Components/InputWord";
import Guess from "./Components/Guess";
import WordToGuess from "./Components/WordToGuess";
import InputGuess from "./Components/InputGuess";

class App extends React.Component {
  state = { wordToGuess: "", letterGuess: "", incorrectCount: 0 };
  updateWordToGuess = wordToGuess => {
    this.setState({ wordToGuess: wordToGuess });
    this.setState({ letterGuess: "" });
  };

  updateLetterGuess = letterGuess => {
    this.setState({ letterGuess });
  };

  updateIncorrectCount = () => {
    this.setState(currentState => {
      return (this.state.incorrectCount = currentState.incorrectCount + 1);
    });
  };

  render() {
    return (
      <>
        <InputWord updateWordToGuess={this.updateWordToGuess} />
        <WordToGuess
          wordToGuess={this.state.wordToGuess}
          letterGuess={this.state.letterGuess}
        />
        <InputGuess
          updateLetterGuess={this.updateLetterGuess}
          updateIncorrectCount={this.updateIncorrectCount}
        />
      </>
    );
  }
}

export default App;
