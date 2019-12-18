const formatFilm = require("../utils");

describe("formatFilm", () => {
  it("returns an empty array when passed an empty string", () => {
    expect(formatFilm("")).toEqual([]);
  });
  it("returns a single letter array when passed a single letter", () => {
    expect(formatFilm("A")).toEqual([null]);
  });
  it("returns a multiple letter array when passed a word", () => {
    const actual = formatFilm("TITANIC");
    const expected = [null, null, null, null, null, null, null];
    expect(actual).toEqual(expected);
  });
  it("returns a multiple letter array when passed two letters separated by a space", () => {
    const actual = formatFilm("T A");
    const expected = [null, " ", null];
    expect(actual).toEqual(expected);
  });
  it("returns a multiple letter array when passed two words as separated letters with a space in between", () => {
    const actual = formatFilm("THE RING");
    const expected = [null, null, null, " ", null, null, null, null];
    expect(actual).toEqual(expected);
  });
});
