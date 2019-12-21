import React from "react";

class Chars extends React.Component {
  state = {
    clickedChars: []
  };
  render() {
    const { charSelector } = this.props;
    const { clickedChars } = this.state;
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
                clickedChars.find(char => char === letter) === undefined &&
                  charSelector(letter);
                this.setState(state => {
                  return {
                    clickedChars: [letter, ...state.clickedChars]
                  };
                });
              }}
              disabled={
                clickedChars.find(char => char === letter) !== undefined
              }
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
                clickedChars.find(char => char === number) === undefined &&
                  charSelector(number);
                this.setState(state => {
                  return {
                    clickedChars: [number, ...state.clickedChars]
                  };
                });
              }}
              disabled={
                clickedChars.find(char => char === number) !== undefined
              }
            >
              {number}
            </span>
          );
        })}
      </div>
    );
  }
}

export default Chars;
