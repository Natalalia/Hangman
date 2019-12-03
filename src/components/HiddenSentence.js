import React from "react";

function HiddenSentence({ hiddenSentence }) {
  return (
    <div id="hiddenSentence">
      {hiddenSentence.map(char => {
        if (char === null) {
          return <div class="hiddenChar"></div>;
        }
        return <span class="guessedChars">{char}</span>;
      })}
    </div>
  );
}

export default HiddenSentence;
