import React from "react";

function TheEnd({ hangmanSteps, sentenceToGuess }) {
  return (
    <>
      {hangmanSteps && <span>You Lose!</span>}
      {sentenceToGuess && <span>You Win!</span>}
    </>
  );
}

export default TheEnd;
