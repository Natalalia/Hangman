import React from "react";

import Chars from "./Chars";
import HiddenSentence from "./HiddenSentence";
import Hangman from "./Hangman";

class Game extends React.Component {
  state = {
    hiddenSentence: "_ _ _ _ _ _ _",
    selectedChar: "",
    sentenceToGuess: "Titanic",
    hangmanSteps: 0
  };
  render() {
    const { hiddenSentence, hangmanSteps } = this.state;
    return (
      <>
        <Chars charSelector={this.charSelector} />
        <HiddenSentence hiddenSentence={hiddenSentence} />
        <Hangman hangmanSteps={hangmanSteps} />
      </>
    );
  }

  charSelector = char => {
    this.setState({
      selectedChar: char
    });
  };
}

export default Game;
