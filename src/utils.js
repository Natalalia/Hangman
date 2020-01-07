const formatFilm = filmName => {
  return filmName.split("").map(letter => {
    if (letter !== " ") return null;
    return letter;
  });
};

const divideHiddenSentence = hiddenSentence => {
  const sentence = [...hiddenSentence];
  const spaceIndex = hiddenSentence.indexOf(" ");
  if (spaceIndex === -1) {
    return [sentence];
  }
  const sentenceToCarryOnChecking = sentence.splice(spaceIndex);

  return [
    sentence,
    ...divideHiddenSentence(sentenceToCarryOnChecking.splice(1))
  ];
};

module.exports = { formatFilm, divideHiddenSentence };
