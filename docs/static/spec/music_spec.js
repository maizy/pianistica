define(["jasmine_boot", "st/music"], function (_jasmine_boot, _music) {
  "use strict";

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  describe("music", function () {
    it("less than", function () {
      expect((0, _music.notesLessThan)("C5", "C#5")).toBe(true);
      expect((0, _music.notesLessThan)("B5", "D6")).toBe(true);
      expect((0, _music.notesLessThan)("B5", "B5")).toBe(false);
    });
    it("notesSame", function () {
      expect((0, _music.notesSame)("C5", "C6")).toBe(true);
      expect((0, _music.notesSame)("C5", "C5")).toBe(true);
      expect((0, _music.notesSame)("C5", "D5")).toBe(false);
      expect((0, _music.notesSame)("C#5", "C5")).toBe(false);
      expect((0, _music.notesSame)("Ab5", "A3")).toBe(false);
      expect((0, _music.notesSame)("Db5", "Db6")).toBe(true);
      expect((0, _music.notesSame)("G#5", "G#7")).toBe(true); // wrapping

      expect((0, _music.notesSame)("B#5", "C6")).toBe(true);
      expect((0, _music.notesSame)("B#5", "C7")).toBe(true);
      expect((0, _music.notesSame)("B3", "Cb5")).toBe(true);
      expect((0, _music.notesSame)("B5", "Cb3")).toBe(true);
    });
    it("greater than", function () {
      expect((0, _music.notesGreaterThan)("G5", "C#5")).toBe(true);
      expect((0, _music.notesGreaterThan)("G5", "Fb5")).toBe(true);
      expect((0, _music.notesGreaterThan)("E#5", "F5")).toBe(false);
    });
    it("compare", function () {
      expect((0, _music.compareNotes)("E#5", "F5")).toBe(0);
    });
    it("gets note names", function () {
      var pitches = [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]; // sharpened

      expect(pitches.map(function (p) {
        return (0, _music.noteName)(p);
      })).toEqual(["C2", "C#2", "D2", "D#2", "E2", "F2", "F#2", "G2", "G#2", "A2", "A#2", "B2", "C3"]); // flattened

      expect(pitches.map(function (p) {
        return (0, _music.noteName)(p, false);
      })).toEqual(["C2", "Db2", "D2", "Eb2", "E2", "F2", "Gb2", "G2", "Ab2", "A2", "Bb2", "B2", "C3"]);
    });
    it("gets notes pitches", function () {
      var sharpNames = ["C2", "C#2", "D2", "D#2", "E2", "F2", "F#2", "G2", "G#2", "A2", "A#2", "B2", "C3"];
      var flatNames = ["C2", "Db2", "D2", "Eb2", "E2", "F2", "Gb2", "G2", "Ab2", "A2", "Bb2", "B2", "C3"];
      expect(sharpNames.map(function (n) {
        return (0, _music.parseNote)(n);
      })).toEqual([24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);
      expect(flatNames.map(function (n) {
        return (0, _music.parseNote)(n);
      })).toEqual([24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);
    });
  });
  describe("scales", function () {
    it("gets notes in chromatic scale", function () {
      var scale = new _music.ChromaticScale("C");
      expect(scale.getRange(5)).toEqual(["C5", "C#5", "D5", "D#5", "E5", "F5", "F#5", "G5", "G#5", "A5", "A#5", "B5", "C6"]);
    });
    it("gets notes in C MajorScale", function () {
      var scale = new _music.MajorScale("C");
      expect(scale.getRange(5)).toEqual(["C5", "D5", "E5", "F5", "G5", "A5", "B5", "C6"]);
    });
    it("gets notes in D MajorScale", function () {
      var scale = new _music.MajorScale("D");
      expect(scale.getRange(5)).toEqual(["D5", "E5", "F#5", "G5", "A5", "B5", "C#6", "D6"]);
    });
    it("gets notes in D MajorScale", function () {
      var scale = new _music.MajorScale("Gb"); // G♭, A♭, B♭, C♭, D♭, E♭, F

      expect(scale.getRange(5)).toEqual(["Gb5", "Ab5", "Bb5", "Cb6", "Db6", "Eb6", "F6", "Gb6"]);
    });
    it("gets notes in F MajorScale", function () {
      var scale = new _music.MajorScale("F"); // TODO: should be Bb5

      expect(scale.getRange(5)).toEqual(["F5", "G5", "A5", "Bb5", "C6", "D6", "E6", "F6"]);
    });
    it("gets notes in loose range for scale", function () {
      var scale = new _music.MajorScale("G");
      var range = scale.getLooseRange("C5", "C6");
      expect(range).toEqual(["C5", "D5", "E5", "F#5", "G5", "A5", "B5", "C6"]);
    });
    it("gets scale degrees for C major", function () {
      var scale = new _music.MajorScale("C");
      var range = scale.getLooseRange("C5", "C6");
      expect(range.map(scale.getDegree.bind(scale))).toEqual([1, 2, 3, 4, 5, 6, 7, 1]);
    });
    it("gets scale degrees for G major", function () {
      var scale = new _music.MajorScale("G");
      var range = scale.getLooseRange("C5", "C6");
      expect(range.map(scale.getDegree.bind(scale))).toEqual([4, 5, 6, 7, 1, 2, 3, 4]);
    });
    it("converts degree to note name", function () {
      var scale = new _music.MajorScale("G");
      expect(scale.degreeToName(1)).toEqual("G");
      expect(scale.degreeToName(2)).toEqual("A");
      expect(scale.degreeToName(3)).toEqual("B");
      expect(scale.degreeToName(4)).toEqual("C");
      expect(scale.degreeToName(5)).toEqual("D");
      expect(scale.degreeToName(6)).toEqual("E");
      expect(scale.degreeToName(7)).toEqual("F#");
      expect(scale.degreeToName(8)).toEqual("G");
      expect(scale.degreeToName(9)).toEqual("A");
    });
    it("gets notes in A MinorScale", function () {
      var scale = new _music.MinorScale("A");
      expect(scale.getRange(5)).toEqual(["A5", "B5", "C6", "D6", "E6", "F6", "G6", "A6"]);
    });
    it("gets notes in C MinorScale", function () {
      var scale = new _music.MinorScale("C");
      expect(scale.getRange(5)).toEqual(["C5", "D5", "Eb5", "F5", "G5", "Ab5", "Bb5", "C6"]);
    });
    it("gets notes in C HarmonicMinorScale", function () {
      var scale = new _music.HarmonicMinorScale("C"); // TODO: this should be giving flats not sharps

      expect(scale.getRange(5)).toEqual(["C5", "D5", "Eb5", "F5", "G5", "Ab5", "B5", "C6"]);
    });
    describe("buildChordSteps", function () {
      it("builds triad steps for major scale", function () {
        var scale = new _music.MajorScale("C");
        expect(scale.buildChordSteps(1, 2)).toEqual(_music.Chord.SHAPES.M);
        expect(scale.buildChordSteps(2, 2)).toEqual(_music.Chord.SHAPES.m);
        expect(scale.buildChordSteps(3, 2)).toEqual(_music.Chord.SHAPES.m);
        expect(scale.buildChordSteps(4, 2)).toEqual(_music.Chord.SHAPES.M);
        expect(scale.buildChordSteps(5, 2)).toEqual(_music.Chord.SHAPES.M);
        expect(scale.buildChordSteps(6, 2)).toEqual(_music.Chord.SHAPES.m);
      });
      it("builds seventh chord steps for major scale", function () {
        var scale = new _music.MajorScale("C");
        expect(scale.buildChordSteps(1, 3)).toEqual(_music.Chord.SHAPES.M7);
        expect(scale.buildChordSteps(2, 3)).toEqual(_music.Chord.SHAPES.m7);
        expect(scale.buildChordSteps(3, 3)).toEqual(_music.Chord.SHAPES.m7);
        expect(scale.buildChordSteps(4, 3)).toEqual(_music.Chord.SHAPES.M7);
        expect(scale.buildChordSteps(5, 3)).toEqual(_music.Chord.SHAPES["7"]);
        expect(scale.buildChordSteps(6, 3)).toEqual(_music.Chord.SHAPES.m7);
      });
      it("builds triads chord steps for minor scale", function () {
        var scale = new _music.MinorScale("C");
        expect(scale.buildChordSteps(1, 2)).toEqual(_music.Chord.SHAPES.m);
        expect(scale.buildChordSteps(3, 2)).toEqual(_music.Chord.SHAPES.M);
        expect(scale.buildChordSteps(4, 2)).toEqual(_music.Chord.SHAPES.m);
        expect(scale.buildChordSteps(5, 2)).toEqual(_music.Chord.SHAPES.m);
        expect(scale.buildChordSteps(6, 2)).toEqual(_music.Chord.SHAPES.M);
        expect(scale.buildChordSteps(7, 2)).toEqual(_music.Chord.SHAPES.M);
      });
    });
    describe("allChords", function () {
      it("gets all triads in major scale", function () {
        var scale = new _music.MajorScale("C");
        var chords = scale.allChords(3);
        expect(chords.map(function (chord) {
          return chord.toString();
        })).toEqual(["C", "Dm", "Em", "F", "G", "Am", "Bdim"]);
      });
      it("gets all 7 chords in major scale", function () {
        var scale = new _music.MajorScale("C");
        var chords = scale.allChords(4);
        expect(chords.map(function (chord) {
          return chord.toString();
        })).toEqual(["CM7", "Dm7", "Em7", "FM7", "G7", "Am7", "Bm7b5"]);
      });
      it("gets all triads in harmonic minor scale", function () {
        var scale = new _music.HarmonicMinorScale("C");
        var chords = scale.allChords(3);
        expect(chords.map(function (chord) {
          return chord.toString();
        })).toEqual(["Cm", "Ddim", "Ebaug", "Fm", "G", "Ab", "Bdim"]);
      });
      it("gets all 7 chords in harmonic minor scale", function () {
        var scale = new _music.HarmonicMinorScale("C");
        var chords = scale.allChords(4);
        expect(chords.map(function (chord) {
          return chord.toString();
        })).toEqual(["CmM7", "Dm7b5", "EbaugM7", "Fm7", "G7", "AbM7", "Bdim7"]);
      });
      it("gets all 7 chords in ascending melodic minor scale", function () {
        var scale = new _music.AscendingMelodicMinorScale("C");
        var chords = scale.allChords(4);
        expect(chords.map(function (chord) {
          return chord.toString();
        })).toEqual(["CmM7", "Dm7", "EbaugM7", "F7", "G7", "Am7b5", "Bm7b5"]);
      });
    });
  });
  describe("chords", function () {
    it("gets notes for major chord", function () {
      expect(_music.Chord.notes("C5", "M")).toEqual(["C5", "E5", "G5"]);
      expect(_music.Chord.notes("C5", "M", 1)).toEqual(["E5", "G5", "C6"]);
      expect(_music.Chord.notes("C5", "M", -1)).toEqual(["G4", "C5", "E5"]);
      expect(_music.Chord.notes("C5", "M", -2)).toEqual(["E4", "G4", "C5"]);
      expect(_music.Chord.notes("C5", "M", -3)).toEqual(["C4", "E4", "G4"]);
    });
    it("gets notes for minor chord", function () {
      expect(_music.Chord.notes("C5", "m")).toEqual(["C5", "D#5", "G5"]);
      expect(_music.Chord.notes("C5", "m", 1)).toEqual(["D#5", "G5", "C6"]);
    });
    it("gets notes for major 7 chord", function () {
      expect(_music.Chord.notes("C5", "M7")).toEqual(["C5", "E5", "G5", "B5"]);
      expect(_music.Chord.notes("C5", "M7", 1)).toEqual(["E5", "G5", "B5", "C6"]);
      expect(_music.Chord.notes("C5", "M7", -1)).toEqual(["B4", "C5", "E5", "G5"]);
      expect(_music.Chord.notes("C5", "M7", -2)).toEqual(["G4", "B4", "C5", "E5"]);
      expect(_music.Chord.notes("C5", "M7", -3)).toEqual(["E4", "G4", "B4", "C5"]);
    });
    it("gets notes for dominant 7 chord", function () {
      expect(_music.Chord.notes("C5", "7")).toEqual(["C5", "E5", "G5", "A#5"]);
      expect(_music.Chord.notes("C5", "7", 1)).toEqual(["E5", "G5", "A#5", "C6"]);
    });
    it("gets notes for minor 7 chord", function () {
      expect(_music.Chord.notes("C5", "m7")).toEqual(["C5", "D#5", "G5", "A#5"]);
    });
    it("gets notes for minor 7 flat 5 chord", function () {
      expect(_music.Chord.notes("C5", "m7b5")).toEqual(["C5", "D#5", "F#5", "A#5"]);
    });
    describe("chordShapeName", function () {
      it("gets the chord name of a M7 chord", function () {
        var chord = new _music.Chord("C", "M7");
        expect(chord.chordShapeName()).toBe("M7");
      });
      it("gets the chord name of a M chord", function () {
        var chord = new _music.Chord("D", "M");
        expect(chord.chordShapeName()).toBe("M");
      });
      it("gets the chord name of a m chord", function () {
        var chord = new _music.Chord("E", "m");
        expect(chord.chordShapeName()).toBe("m");
      });
      it("gets the chord name of a 7 chord", function () {
        var chord = new _music.Chord("F", "7");
        expect(chord.chordShapeName()).toBe("7");
      });
      it("gets the chord name of a m7 chord", function () {
        var chord = new _music.Chord("G", "m7");
        expect(chord.chordShapeName()).toBe("m7");
      });
      it("gets the chord name of a m7b5 chord", function () {
        var chord = new _music.Chord("A", "m7b5");
        expect(chord.chordShapeName()).toBe("m7b5");
      });
    });
    describe("secondary dominant", function () {
      it("checks if chords are dominant", function () {
        expect(new _music.Chord("A", "m7b5").isDominant()).toBe(false);
        expect(new _music.Chord("F#", "7").isDominant()).toBe(true);
        expect(new _music.Chord("G", "M").isDominant()).toBe(true);
        expect(new _music.Chord("G", "m").isDominant()).toBe(false);
      });
      it("gets secondary dominant targets", function () {
        var targets = function targets(root, steps) {
          var noteCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
          return new _music.Chord(root, steps).getSecondaryDominantTargets(noteCount).map(function (c) {
            return c.toString();
          });
        };

        expect(targets("A", "M")).toEqual(["D", "Dm"]);
        expect(targets("B", "M")).toEqual(["E", "Em"]);
        expect(targets("C", "M")).toEqual(["F", "Fm"]);
        expect(targets("D", "M")).toEqual(["G", "Gm"]);
        expect(targets("E", "M")).toEqual(["A", "Am"]);
        expect(targets("A", "7")).toEqual(["D", "Dm"]);
        expect(targets("B", "7")).toEqual(["E", "Em"]);
        expect(targets("C", "7")).toEqual(["F", "Fm"]);
        expect(targets("D", "7")).toEqual(["G", "Gm"]);
        expect(targets("E", "7")).toEqual(["A", "Am"]);
        expect(targets("A", "7", 4)).toEqual(["DM7", "Dm7"]);
        expect(targets("B", "7", 4)).toEqual(["EM7", "Em7"]);
        expect(targets("C", "7", 4)).toEqual(["FM7", "Fm7"]);
        expect(targets("D", "7", 4)).toEqual(["GM7", "Gm7"]);
        expect(targets("E", "7", 4)).toEqual(["AM7", "Am7"]);
      });
    });
    describe("containsNote", function () {
      it("checks notes in CM7", function () {
        var chord = new _music.Chord("C", "M7");

        for (var _i = 0, _arr = [4, 5, 6]; _i < _arr.length; _i++) {
          var octave = _arr[_i];
          expect(chord.containsNote("C".concat(octave))).toBe(true);
          expect(chord.containsNote("E".concat(octave))).toBe(true);
          expect(chord.containsNote("G".concat(octave))).toBe(true);
          expect(chord.containsNote("B".concat(octave))).toBe(true);
          expect(chord.containsNote("D".concat(octave))).toBe(false);
          expect(chord.containsNote("F".concat(octave))).toBe(false);
          expect(chord.containsNote("A".concat(octave))).toBe(false);
        }
      });
      it("checks notes in Cm", function () {
        var chord = new _music.Chord("C", "m");

        for (var _i2 = 0, _arr2 = [4, 5, 6]; _i2 < _arr2.length; _i2++) {
          var octave = _arr2[_i2];
          expect(chord.containsNote("C".concat(octave))).toBe(true);
          expect(chord.containsNote("D#".concat(octave))).toBe(true);
          expect(chord.containsNote("Eb".concat(octave))).toBe(true);
          expect(chord.containsNote("G".concat(octave))).toBe(true);
          expect(chord.containsNote("B".concat(octave))).toBe(false);
          expect(chord.containsNote("D".concat(octave))).toBe(false);
          expect(chord.containsNote("F".concat(octave))).toBe(false);
          expect(chord.containsNote("A".concat(octave))).toBe(false);
        }
      });
    });
    it("gets shared notes", function () {
      expect(new _music.Chord("C", "M").countSharedNotes(new _music.Chord("G", "M"))).toEqual(1);
      expect(new _music.Chord("C", "M").countSharedNotes(new _music.Chord("E", "m"))).toEqual(2);
      expect(new _music.Chord("C", "M").countSharedNotes(new _music.Chord("D", "m"))).toEqual(0);
      expect(new _music.Chord("C", "M").countSharedNotes(new _music.Chord("C", [12, 4]))).toEqual(2);
    });
  });
  describe("key signature", function () {
    var trebleCleff = ["A4", "C7"];
    var bassCleff = ["C3", "E5"];
    it("gets name for key signature", function () {
      expect(new _music.KeySignature(0).name()).toBe("C");
      expect(new _music.KeySignature(1).name()).toBe("G");
      expect(new _music.KeySignature(2).name()).toBe("D");
      expect(new _music.KeySignature(3).name()).toBe("A");
      expect(new _music.KeySignature(4).name()).toBe("E");
      expect(new _music.KeySignature(5).name()).toBe("B");
      expect(new _music.KeySignature(-1).name()).toBe("F");
      expect(new _music.KeySignature(-2).name()).toBe("Bb");
      expect(new _music.KeySignature(-3).name()).toBe("Eb");
      expect(new _music.KeySignature(-4).name()).toBe("Ab");
      expect(new _music.KeySignature(-5).name()).toBe("Db");
      expect(new _music.KeySignature(-6).name()).toBe("Gb");
    });
    it("gets key signature notes for C", function () {
      var key = new _music.KeySignature(0);
      expect(key.isFlat()).toBe(false);
      expect(key.isSharp()).toBe(false);
      expect(key.accidentalNotes()).toEqual([]);
      expect(key.notesInRange.apply(key, trebleCleff)).toEqual([]);
    });
    it("gets key signature notes for D", function () {
      var key = new _music.KeySignature(2);
      expect(key.isFlat()).toBe(false);
      expect(key.isSharp()).toBe(true);
      expect(key.accidentalNotes()).toEqual(["F", "C"]);
      expect(key.notesInRange.apply(key, trebleCleff)).toEqual(["F5", "C6"]);
      expect(key.notesInRange.apply(key, trebleCleff)).toEqual(["F5", "C6"]);
    });
    it("gets key signature notes for Bb", function () {
      var key = new _music.KeySignature(-2);
      expect(key.isFlat()).toBe(true);
      expect(key.isSharp()).toBe(false);
      expect(key.accidentalNotes()).toEqual(["B", "E"]);
      expect(key.notesInRange.apply(key, trebleCleff)).toEqual(["B5", "E5"]);
      expect(key.notesInRange.apply(key, trebleCleff)).toEqual(["B5", "E5"]);
    });
    it("gets key signature notes for E", function () {
      var key = new _music.KeySignature(4);
      expect(key.isFlat()).toBe(false);
      expect(key.isSharp()).toBe(true);
      expect(key.accidentalNotes()).toEqual(["F", "C", "G", "D"]);
      expect(key.notesInRange.apply(key, trebleCleff)).toEqual(["F5", "C6", "G6", "D6"]);
      expect(key.notesInRange.apply(key, trebleCleff)).toEqual(["F5", "C6", "G6", "D6"]);
    });
    it("gets accidentals for notes in D", function () {
      var key = new _music.KeySignature(2); // f c

      var examples = [["C5", 0], ["C#5", null], ["Cb5", -1], ["D5", null], ["D#5", 1], ["Db5", -1], ["E5", null], ["E#5", 1], ["Eb5", -1], ["F5", 0], ["F#5", null], ["Fb5", -1], ["G5", null], ["G#5", 1], ["Gb5", -1], ["A5", null], ["A#5", 1], ["Ab5", -1], ["B5", null], ["B#5", 1], ["Bb5", -1]];

      for (var _i3 = 0, _examples = examples; _i3 < _examples.length; _i3++) {
        var _examples$_i = _slicedToArray(_examples[_i3], 2),
            note = _examples$_i[0],
            accidentals = _examples$_i[1];

        expect(key.accidentalsForNote(note)).toBe(accidentals);
      }
    });
    it("gets accidentals for notes in Eb", function () {
      var key = new _music.KeySignature(-3); // b e a

      var examples = [["C5", null], ["C#5", 1], ["Cb5", -1], ["D5", null], ["D#5", 1], ["Db5", -1], ["E5", 0], ["E#5", 1], ["Eb5", null], ["F5", null], ["F#5", 1], ["Fb5", -1], ["G5", null], ["G#5", 1], ["Gb5", -1], ["A5", 0], ["A#5", 1], ["Ab5", null], ["B5", 0], ["B#5", 1], ["Bb5", null]];

      for (var _i4 = 0, _examples2 = examples; _i4 < _examples2.length; _i4++) {
        var _examples2$_i = _slicedToArray(_examples2[_i4], 2),
            note = _examples2$_i[0],
            accidentals = _examples2$_i[1];

        expect(key.accidentalsForNote(note)).toBe(accidentals);
      }
    });
    it("gets enharmonic spelling of notes for key", function () {
      var key = new _music.KeySignature(-3); // b e a

      var notes = new _music.MajorScale(key.name()).getRange(4).map(function (n) {
        return key.enharmonic(n);
      });
      expect(notes).toEqual(["Eb4", "F4", "G4", "Ab4", "Bb4", "C5", "D5", "Eb5"]);
    });
  });
  describe("noteStaffOffset", function () {
    it("gets offsets for notes", function () {
      var notes = ["A#3", "B#3", "C#4", "Ab3", "Bb3", "Cb4", "A3", "B3", "C4"];
      expect(notes.map(_music.noteStaffOffset)).toEqual([26, 27, 28, 26, 27, 28, 26, 27, 28]);
    });
  });
});

