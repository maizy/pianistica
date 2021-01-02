define(["jasmine_boot", "st/song_note_list", "st/auto_chords"], function (_jasmine_boot, _song_note_list, _auto_chords) {
  "use strict";

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  var stripIds = function stripIds(notes) {
    return notes.map(function (n) {
      return Object.assign({}, n, {
        id: undefined
      });
    });
  };

  var matchNotes = function matchNotes(have, expected) {
    return expect(stripIds(have)).toEqual(stripIds(expected));
  };

  describe("song", function () {
    it("creates an empty song notes", function () {
      var song = new _song_note_list.SongNoteList();
      expect(song.getStopInBeats()).toEqual(0);
    });
    it("gets duration from song with notes", function () {
      var song = new _song_note_list.SongNoteList();
      song.push(new _song_note_list.SongNote("C5", 2, 1));
      song.push(new _song_note_list.SongNote("D5", 0, 1));
      expect(song.getStartInBeats()).toEqual(0);
      expect(song.getStopInBeats()).toEqual(3);
    });
    it("gets notes in time range", function () {
      var song = _song_note_list.SongNoteList.newSong([["C5", 0, 1], ["D5", 1, 1], ["E5", 3, 1], ["D5", 5, 1], ["F5", 1, 5], // overlap (1 - 6)
      ["F5", 1, 3], // overlap start (1 - 4)
      ["F5", 4, 2] // overlap end (4 - 6)
      ]);

      var range = song.notesInRange(3, 5);
      matchNotes(range, [new _song_note_list.SongNote("E5", 3, 1), new _song_note_list.SongNote("F5", 1, 5), new _song_note_list.SongNote("F5", 1, 3), new _song_note_list.SongNote("F5", 4, 2)]);
    });
  });
  describe("autochords", function () {
    describe("coerceChord", function () {
      [[undefined, function () {
        return _auto_chords.AutoChords.coerceChord("hello world");
      }], [["G", "M"], function () {
        return _auto_chords.AutoChords.coerceChord("g");
      }], [["A", "M"], function () {
        return _auto_chords.AutoChords.coerceChord("aM");
      }], [["B", "m"], function () {
        return _auto_chords.AutoChords.coerceChord("bm");
      }], [["Fb", "M"], function () {
        return _auto_chords.AutoChords.coerceChord("fbM");
      }], [["G#", "m"], function () {
        return _auto_chords.AutoChords.coerceChord("g#m");
      }], [["Cb", "dimM7"], function () {
        return _auto_chords.AutoChords.coerceChord("cbdimM7");
      }]].map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            expected = _ref2[0],
            fn = _ref2[1];

        var name = expected && expected.join ? expected.join("") : "non-chord";
        it("coerces chord ".concat(name), function () {
          expect(fn()).toEqual(expected);
        });
      });
    });
    it("finds chord blocks for basic song", function () {
      var song = _song_note_list.SongNoteList.newSong([["C5", 0, 1], ["D5", 1, 1], ["E5", 3, 1], ["D5", 5, 1]]);

      song.metadata = {
        beatsPerMeasure: 2
      };
      song.autoChords = [[0, "g"], [1, "d"], [2, "c"], [4, "d"]];
      var chordBlocks = new _auto_chords.AutoChords(song).findChordBlocks();
      expect(chordBlocks).toEqual([{
        chord: "g",
        start: 0,
        stop: 1
      }, {
        chord: "d",
        start: 1,
        stop: 2
      }, {
        chord: "c",
        start: 2,
        stop: 4
      }, {
        chord: "d",
        start: 4,
        stop: 6
      }]);
    });
  });
});

