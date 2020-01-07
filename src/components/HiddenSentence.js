import React from "react";

function HiddenSentence({ hiddenSentence }) {
  return (
    <div id="hiddenSentence">
      {hiddenSentence.map((char, i) => {
        if (char === null) {
          return <div key={i} className="hiddenChar"></div>;
        }
        return (
          <div key={i} className="guessedChars">
            {char}
          </div>
        );
      })}
    </div>
  );
}

export default HiddenSentence;
