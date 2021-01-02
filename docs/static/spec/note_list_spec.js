define(["jasmine_boot", "st/note_list"], function (_jasmine_boot, _note_list) {
  "use strict";

  _note_list = _interopRequireDefault(_note_list);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  describe("NoteList", function () {
    describe("matchesHead", function () {
      it("matches with singular notes", function () {
        var notes = new _note_list["default"](["D5", "C5"]);
        expect(notes.matchesHead(["D5"])).toBe(true);
        expect(notes.matchesHead(["D6"])).toBe(false);
        expect(notes.matchesHead(["C5"])).toBe(false); // singular notes wrapped in array

        var notes2 = new _note_list["default"]([["D5"], ["C5"]]);
        expect(notes2.matchesHead(["D5"])).toBe(true);
        expect(notes2.matchesHead(["C5"])).toBe(false);
        var enharmonic = new _note_list["default"](["C#4"]);
        expect(enharmonic.matchesHead(["Db4"])).toBe(true);
        var enharmonic2 = new _note_list["default"](["Bb4"]);
        expect(enharmonic2.matchesHead(["A#4"])).toBe(true); // wrapped

        var enharmonic3 = new _note_list["default"]([["C#4"]]);
        expect(enharmonic3.matchesHead(["Db4"])).toBe(true);
        var enharmonic4 = new _note_list["default"]([["Bb4"]]);
        expect(enharmonic4.matchesHead(["A#4"])).toBe(true);
      });
      it("matches with multiple notes", function () {
        var notes = new _note_list["default"]([["D5", "C5"]]);
        expect(notes.matchesHead(["C5"])).toBe(false);
        expect(notes.matchesHead(["C5", "D5"])).toBe(true);
        expect(notes.matchesHead(["D5", "C5"])).toBe(true);
        expect(notes.matchesHead(["D6", "C5"])).toBe(false);
      });
      it("matches with singular notes, anyOctave", function () {
        var notes = new _note_list["default"](["D5", "C5"]);
        expect(notes.matchesHead(["D5"], true)).toBe(true);
        expect(notes.matchesHead(["D6"], true)).toBe(true);
        expect(notes.matchesHead(["C5"], true)).toBe(false); // singular notes wrapped in array

        var notes2 = new _note_list["default"]([["D5"], ["C5"]]);
        expect(notes2.matchesHead(["D5"], true)).toBe(true);
        expect(notes2.matchesHead(["D6"], true)).toBe(true);
        expect(notes2.matchesHead(["C5"], true)).toBe(false);
      });
    });
  });
});

