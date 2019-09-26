import React, { Component } from "react";

class InputGuess extends Component {
  state = { letterGuess: "" };
  handleChange = event => {
    this.setState({ letterGuess: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    // this.props.updateIncorrectCount();
    const { letterGuess } = this.state;
    this.props.updateLetterGuess(letterGuess);
    this.setState({ letterGuess: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="inputWord">Guess Letter</label>
        <input
          onChange={this.handleChange}
          name="inputLetter"
          id="inputLetter"
          value={this.state.letterGuess}
        />
        <input type="submit" value="Guess!" />
      </form>
    );
  }
}

export default InputGuess;
