import React from "react";

function Hangman({ hangmanSteps }) {
  return (
    <img src={`./images/hangman${hangmanSteps}.png`} alt="step 0 in hangman" />
  );
}

export default Hangman;
