import React, { Component } from "react";

class InputWord extends Component {
  state = { word: "" };
  handleChange = event => {
    this.setState({ word: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { word } = this.state;
    this.props.updateWordToGuess(word);
    this.setState({ word: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="inputWord">Word for user to guess:</label>
        <input
          onChange={this.handleChange}
          name="inputWord"
          id="inputWord"
          value={this.state.word}
        />
        <input type="submit" value="save word!" />
      </form>
    );
  }
}

export default InputWord;
