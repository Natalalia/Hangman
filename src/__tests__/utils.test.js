const { formatFilm, divideHiddenSentence } = require("../utils");

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

describe("divideHiddenSentence", () => {
  it("returns a new array", () => {
    const hiddenSentence = [];
    expect(divideHiddenSentence(hiddenSentence)).not.toBe(hiddenSentence);
  });
  it("does not mutate the given array", () => {
    const hiddenSentence = [];
    divideHiddenSentence(hiddenSentence);
    expect(hiddenSentence).toEqual([]);
  });
  it("returns a nested array when an array with a single null has been passed, BASE CASE", () => {
    expect(divideHiddenSentence([null])).toEqual([[null]]);
  });
  it("returns a nested array when an array with multiple null has been passed, BASE CASE", () => {
    expect(divideHiddenSentence([null, null])).toEqual([[null, null]]);
  });
  it("returns a multiple nested array when an array with multiple null and spaces has been passed", () => {
    expect(divideHiddenSentence([null, " ", null])).toEqual([[null], [null]]);
    expect(
      divideHiddenSentence([null, null, null, " ", null, null, " ", null])
    ).toEqual([[null, null, null], [null, null], [null]]);
  });
});
