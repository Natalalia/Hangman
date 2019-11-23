import React from "react";

import Chars from "./Chars";
import HiddenSentence from "./HiddenSentence";
import Hangman from "./Hangman";
import TheEnd from "./TheEnd";

class Game extends React.Component {
  state = {
    hiddenSentence: ["_", "_", "_", "_", "_", "_", "_"],
    sentenceToGuess: "TITANIC",
    hangmanSteps: 0
  };
  render() {
    const { hiddenSentence, hangmanSteps, sentenceToGuess } = this.state;

    return (
      <>
        <Chars charSelector={this.onCharSelected} />
        <HiddenSentence hiddenSentence={hiddenSentence} />
        <Hangman hangmanSteps={hangmanSteps} />
        {hangmanSteps === 10 && <TheEnd hangmanSteps={hangmanSteps} />}
        {hiddenSentence.join("") === sentenceToGuess && (
          <TheEnd sentenceToGuess={sentenceToGuess} />
        )}
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
    if (
      !anyExist &&
      hangmanSteps < 10 &&
      sentenceToGuess !== hiddenSentence.join("")
    ) {
      hangmanSteps++;
    }
    this.setState({ hiddenSentence, hangmanSteps });
  };
}

export default Game;
