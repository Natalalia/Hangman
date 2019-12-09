import React from "react";

function HiddenSentence({ hiddenSentence }) {
  return (
    <div id="hiddenSentence">
      {hiddenSentence.map((char, i) => {
        if (char === null) {
          return <div key={i} className="hiddenChar"></div>;
        }
        return (
          <span key={i} className="guessedChars">
            {char}
          </span>
        );
      })}
    </div>
  );
}

export default HiddenSentence;
