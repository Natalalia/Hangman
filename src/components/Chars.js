import React from "react";

function Chars({ charSelector }) {
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "Ñ",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div id="charsBox">
      {letters.map(letter => {
        return (
          <span
            className="chars"
            key={letter}
            onClick={() => {
              charSelector(letter);
            }}
          >
            {letter}
          </span>
        );
      })}
      {numbers.map(number => {
        return (
          <span
            className="chars"
            key={number}
            onClick={() => {
              charSelector(number);
            }}
          >
            {number}
          </span>
        );
      })}
    </div>
  );
}

export default Chars;
