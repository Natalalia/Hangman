const formatFilm = filmName => {
  return filmName.split("").map(letter => {
    if (letter !== " ") return null;
    return letter;
  });
};

module.exports = formatFilm;
