import React from "react";
import utils from "../utils";
const { divideHiddenSentence } = utils;

function HiddenSentence({ hiddenSentence }) {
  const dividedSentence = divideHiddenSentence(hiddenSentence);
  return (
    <div id="hiddenSentence">
      {dividedSentence.map((hiddenWord, j) => {
        return (
          <div key={j} className="hiddenWord">
            {hiddenWord.map((char, i) => {
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
      })}
    </div>
  );
}

export default HiddenSentence;
