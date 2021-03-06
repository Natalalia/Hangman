import React from "react";

class Chars extends React.Component {
  state = {
    clickedChars: []
  };

  componentDidUpdate(prevProps) {
    if (this.props.flippedGame !== prevProps.flippedGame) {
      this.setState({ clickedChars: [] });
    }
  }

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
            <button
              className="chars"
              key={letter}
              onClick={() => {
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
            </button>
          );
        })}

        {numbers.map(number => {
          return (
            <button
              className="chars"
              key={number}
              onClick={() => {
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
            </button>
          );
        })}
      </div>
    );
  }
}

export default Chars;
