import React from "react";

import Chars from "./Chars";
import HiddenSentence from "./HiddenSentence";
import Hangman from "./Hangman";
import TheEnd from "./TheEnd";

class Game extends React.Component {
  state = {
    hiddenSentence: [null, null, null, null, null, null, null],
    sentenceToGuess: "TITANIC",
    hangmanSteps: 0
  };
  render() {
    const { hiddenSentence, hangmanSteps, sentenceToGuess } = this.state;

    return (
      <div id="main">
        <Chars charSelector={this.onCharSelected} />
        <HiddenSentence hiddenSentence={hiddenSentence} />
        <Hangman hangmanSteps={hangmanSteps} />
        {hangmanSteps === 10 && <TheEnd hangmanSteps={hangmanSteps} />}
        {hiddenSentence.join("") === sentenceToGuess && (
          <TheEnd sentenceToGuess={sentenceToGuess} />
        )}
      </div>
    );
  }

  onCharSelected = char => {
    const { sentenceToGuess } = this.state;
    let { hiddenSentence, hangmanSteps } = this.state;
    let anyExist = false;

    if (hangmanSteps >= 10) return;
    for (let i = 0; i < sentenceToGuess.length; i++) {
      if (char === sentenceToGuess[i]) {
        anyExist = true;
        hiddenSentence.splice(i, 1, char);
      }
    }

    if (!anyExist && sentenceToGuess !== hiddenSentence.join("")) {
      hangmanSteps++;
    }
    this.setState({ hiddenSentence, hangmanSteps });
  };
}

export default Game;
