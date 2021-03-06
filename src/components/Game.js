import React from "react";

import Chars from "./Chars";
import HiddenSentence from "./HiddenSentence";
import Hangman from "./Hangman";
import TheEnd from "./TheEnd";
import Modal from "./Modal";

import films from "../data/films";
import utils from "../utils";
const { formatFilm } = utils;

class Game extends React.Component {
  state = {
    hiddenSentence: [],
    sentenceToGuess: "",
    hangmanSteps: 0,
    flippedGame: true
  };

  componentDidMount() {
    this.fetchFilm();
  }

  fetchFilm = () => {
    const randomIndex = Math.floor(Math.random() * (films.length - 0) + 0);
    const sentenceToGuess = films[randomIndex].toUpperCase();
    const hiddenSentence = formatFilm(sentenceToGuess);

    this.setState(state => ({
      hiddenSentence,
      sentenceToGuess,
      hangmanSteps: 0,
      flippedGame: !state.flippedGame
    }));
  };

  playAgain = () => {
    this.fetchFilm();
  };

  render() {
    const {
      hiddenSentence,
      hangmanSteps,
      sentenceToGuess,
      flippedGame
    } = this.state;

    let didYouWin;

    if (hangmanSteps >= 10) didYouWin = false;
    if (hiddenSentence.join("") === sentenceToGuess) didYouWin = true;

    return (
      <div id="main">
        <Chars charSelector={this.onCharSelected} flippedGame={flippedGame} />
        <HiddenSentence hiddenSentence={hiddenSentence} />
        <Hangman hangmanSteps={hangmanSteps} />
        <Modal show={didYouWin !== undefined} playAgain={this.playAgain}>
          <TheEnd didYouWin={didYouWin} />
        </Modal>
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
