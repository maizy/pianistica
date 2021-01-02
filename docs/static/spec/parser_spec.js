define(["jasmine_boot", "st/song_parser", "st/song_note_list"], function (_jasmine_boot, _song_parser, _song_note_list) {
  "use strict";

  _song_parser = _interopRequireDefault(_song_parser);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  var stripIds = function stripIds(notes) {
    return notes.map(function (n) {
      return Object.assign({}, n, {
        id: undefined
      });
    });
  };

  var matchNotes = function matchNotes(have, expected) {
    return expect(stripIds(_toConsumableArray(have))).toEqual(stripIds(expected));
  };

  describe("song parser", function () {
    it("parses single note song", function () {
      expect(new _song_parser["default"]().parse("a5")).toEqual([["note", "A5"]]);
    });
    it("parses single note song with some whitespace", function () {
      expect(new _song_parser["default"]().parse("\n      a5\n    ")).toEqual([["note", "A5"]]);
    });
    it("parses notes with timing information", function () {
      expect(new _song_parser["default"]().parse("\n      g4 a5.1 b2 f3.1.2\n    ")).toEqual([["note", "G4"], ["note", "A5", {
        duration: 1
      }], ["note", "B2"], ["note", "F3", {
        duration: 1,
        start: 2
      }]]);
    });
    it("parses rests and notes", function () {
      expect(new _song_parser["default"]().parse("g4.1 r2 a4.3 r b2")).toEqual([["note", "G4", {
        duration: 1
      }], ["rest", {
        duration: 2
      }], ["note", "A4", {
        duration: 3
      }], ["rest"], ["note", "B2"]]);
    });
    it("parses key signature", function () {
      expect(new _song_parser["default"]().parse("ks-4 g5 ks2 d6")).toEqual([["keySignature", -4], ["note", "G5"], ["keySignature", 2], ["note", "D6"]]);
    });
    it("parses time adjustments", function () {
      expect(new _song_parser["default"]().parse("ht ht dt dt m1 m2 ht")).toEqual([["halfTime"], ["halfTime"], ["doubleTime"], ["doubleTime"], ["measure", 1], ["measure", 2], ["halfTime"]]);
    });
    it("parses accidental", function () {
      expect(new _song_parser["default"]().parse("\n      a+5\n      a-5\n      a=5\n    ")).toEqual([["note", "A5", {
        sharp: true
      }], ["note", "A5", {
        flat: true
      }], ["note", "A5", {
        natural: true
      }]]);
    });
    it("parses a block", function () {
      expect(new _song_parser["default"]().parse("\n      m1 {\n        a5\n      }\n    ")).toEqual([["measure", 1], ["block", [["note", "A5"]]]]);
    });
    it("ignores a comment", function () {
      expect(new _song_parser["default"]().parse("\n      # this is comment\n      a5 c5 # a good one\n\n      #more comment\n\n      b6 #a5\n    ")).toEqual([["note", "A5"], ["note", "C5"], ["note", "B6"]]);
    });
    it("parses time signature", function () {
      expect(new _song_parser["default"]().parse("\n      ts4/4\n      ts3/4\n      ts6/8\n    ")).toEqual([["timeSignature", 4, 4], ["timeSignature", 3, 4], ["timeSignature", 6, 8]]);
    });
    it("parses macro", function () {
      expect(new _song_parser["default"]().parse("\n      $hello $w $cm7\n    ")).toEqual([["macro", "hello"], ["macro", "w"], ["macro", "cm7"]]);
    });
  });
  describe("load song", function () {
    it("loads empty song", function () {
      var song = _song_parser["default"].load("ks0");

      expect(_toConsumableArray(song)).toEqual([]);
    });
    it("loads some notes", function () {
      var song = _song_parser["default"].load("\n      ks1\n      b6 a6 g6 a6\n      b6 b6 b6.2\n      a6 a6 a6.2\n    ");

      matchNotes(song, [new _song_note_list.SongNote("B6", 0, 1), new _song_note_list.SongNote("A6", 1, 1), new _song_note_list.SongNote("G6", 2, 1), new _song_note_list.SongNote("A6", 3, 1), new _song_note_list.SongNote("B6", 4, 1), new _song_note_list.SongNote("B6", 5, 1), new _song_note_list.SongNote("B6", 6, 2), new _song_note_list.SongNote("A6", 8, 1), new _song_note_list.SongNote("A6", 9, 1), new _song_note_list.SongNote("A6", 10, 2)]);
    });
    it("loads some notes with rests", function () {
      var song = _song_parser["default"].load("\n      r1 g5 r2 a5 r3 r1.1 f6\n    ");

      matchNotes(song, [new _song_note_list.SongNote("G5", 1, 1), new _song_note_list.SongNote("A5", 4, 1), new _song_note_list.SongNote("F6", 8, 1)]);
    });
    it("loads notes with timing", function () {
      var song = _song_parser["default"].load("\n      dt\n      m0 c5 c5 c5\n      m0 g5 a5 g5\n      ht\n      m1 c6\n    ");

      matchNotes(song, [// first measure
      new _song_note_list.SongNote("C5", 0, 0.5), new _song_note_list.SongNote("C5", 0.5, 0.5), new _song_note_list.SongNote("C5", 1.0, 0.5), new _song_note_list.SongNote("G5", 0, 0.5), new _song_note_list.SongNote("A5", 0.5, 0.5), new _song_note_list.SongNote("G5", 1.0, 0.5), // second measure
      new _song_note_list.SongNote("C6", 4, 1)]);
    });
    it("sets position and time correctly when using half and double time", function () {
      var song = _song_parser["default"].load("\n      ht\n      a5.2\n      dt\n      b5.2\n      dt\n      c5.2\n      c5\n      dt\n      g5\n\n      m2\n      a5\n    ");

      matchNotes(song, [new _song_note_list.SongNote("A5", 0, 4), new _song_note_list.SongNote("B5", 4, 2), new _song_note_list.SongNote("C5", 6, 1), new _song_note_list.SongNote("C5", 7, 0.5), new _song_note_list.SongNote("G5", 7.5, 0.25), new _song_note_list.SongNote("A5", 8, 0.25)]);
    });
    it("parses keysignature into metadata", function () {
      var song = _song_parser["default"].load("\n      ks-5\n      c5\n    ");

      expect(song.metadata).toEqual({
        keySignature: -5,
        beatsPerMeasure: 4
      });
    });
    it("applies key signature to notes", function () {
      var song = _song_parser["default"].load("\n      ks2\n      c5\n      d5\n      e5\n      f5\n      g5\n      a5\n      b5\n    ");

      matchNotes(song, [new _song_note_list.SongNote("C#5", 0, 1), new _song_note_list.SongNote("D5", 1, 1), new _song_note_list.SongNote("E5", 2, 1), new _song_note_list.SongNote("F#5", 3, 1), new _song_note_list.SongNote("G5", 4, 1), new _song_note_list.SongNote("A5", 5, 1), new _song_note_list.SongNote("B5", 6, 1)]);

      var song2 = _song_parser["default"].load("\n      ks-2\n      c5\n      d5\n      e5\n      f5\n      g5\n      a5\n      b5\n    ");

      matchNotes(song2, [new _song_note_list.SongNote("C5", 0, 1), new _song_note_list.SongNote("D5", 1, 1), new _song_note_list.SongNote("Eb5", 2, 1), new _song_note_list.SongNote("F5", 3, 1), new _song_note_list.SongNote("G5", 4, 1), new _song_note_list.SongNote("A5", 5, 1), new _song_note_list.SongNote("Bb5", 6, 1)]);
    });
    it("sets position when using blocks", function () {
      var song = _song_parser["default"].load("\n      {\n        dt\n        a5\n        a5.2\n      }\n      g6\n    ");

      matchNotes(song, [new _song_note_list.SongNote("A5", 0, 0.5), new _song_note_list.SongNote("A5", 0.5, 1), new _song_note_list.SongNote("G6", 1.5, 1)]);
    });
    it("renders a chord with restore position", function () {
      var song = _song_parser["default"].load("\n      c5 | e5 | g5\n      a6\n    ");

      matchNotes(song, [new _song_note_list.SongNote("C5", 0, 1), new _song_note_list.SongNote("E5", 0, 1), new _song_note_list.SongNote("G5", 0, 1), new _song_note_list.SongNote("A6", 1, 1)]);
    });
    it("loads song with 3/4 time", function () {
      var song = _song_parser["default"].load("\n      ts3/4\n      m0 {\n        c5\n        d5.2\n        |\n        g4.3\n      }\n\n      m1 {\n        e5\n        d5\n        c5\n      }\n    ");

      matchNotes(song, [new _song_note_list.SongNote("C5", 0, 1), new _song_note_list.SongNote("D5", 1, 2), new _song_note_list.SongNote("G4", 0, 3), new _song_note_list.SongNote("E5", 3, 1), new _song_note_list.SongNote("D5", 4, 1), new _song_note_list.SongNote("C5", 5, 1)]);
    });
    it("loads song with 6/8 time", function () {
      var song = _song_parser["default"].load("\n      ts6/8\n      m0 {\n        c5\n        d5.2\n        |\n        g4.3\n      }\n\n      m1 {\n        c6\n      }\n    ");

      matchNotes(song, [new _song_note_list.SongNote("C5", 0, 0.5), new _song_note_list.SongNote("D5", 0.5, 1), new _song_note_list.SongNote("G4", 0, 1.5), new _song_note_list.SongNote("C6", 3, 0.5)]);
    });
    it("loads song with autochords", function () {
      var song = _song_parser["default"].load("\n      ts6/8\n      m0 $g\n      m1 $bbm\n    ");

      expect(song.metadata.beatsPerMeasure).toEqual(3);
      expect(song.autoChords).toEqual([[0, ["G", "M"]], [3, ["Bb", "m"]]]);
    });
  });
});

