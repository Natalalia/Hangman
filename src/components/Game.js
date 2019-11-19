import React from "react";

import Chars from "./Chars";
import HiddenSentence from "./HiddenSentence";
import Hangman from "./Hangman";

class Game extends React.Component {
  state = {
    hiddenSentence: ["_", "_", "_", "_", "_", "_", "_"],
    sentenceToGuess: "TITANIC",
    hangmanSteps: 0
  };
  render() {
    const { hiddenSentence, hangmanSteps } = this.state;

    return (
      <>
        <Chars charSelector={this.onCharSelected} />
        <HiddenSentence hiddenSentence={hiddenSentence} />
        <Hangman hangmanSteps={hangmanSteps} />
      </>
    );
  }

  onCharSelected = char => {
    const { sentenceToGuess } = this.state;
    let { hiddenSentence, hangmanSteps } = this.state;
    let anyExist = false;

    for (let i = 0; i < sentenceToGuess.length; i++) {
      if (char === sentenceToGuess[i]) {
        anyExist = true;
        hiddenSentence.splice(i, 1, char);
      }
    }
    if (!anyExist) {
      hangmanSteps++;
    }
    this.setState({ hiddenSentence, hangmanSteps });
  };
}

export default Game;
