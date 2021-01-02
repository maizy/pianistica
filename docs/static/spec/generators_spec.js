define(["jasmine_boot", "st/generators", "st/chord_generators", "st/music"], function (_jasmine_boot, _generators, _chord_generators, _music) {
  "use strict";

  describe("generators", function () {
    describe("shape generators", function () {
      it("gets inversions of triad", function () {
        var g = new _generators.ShapeGenerator();
        expect(g.inversions([0, 2, 4])).toEqual([[0, 2, 4], [0, 2, 5], [0, 3, 5]]);
      });
      it("gets inversions of triad out of order", function () {
        var g = new _generators.ShapeGenerator();
        expect(g.inversions([4, 0, 2])).toEqual([[0, 2, 4], [0, 2, 5], [0, 3, 5]]);
      });
      it("gets inversions of seven", function () {
        var g = new _generators.ShapeGenerator();
        expect(g.inversions([0, 2, 4, 6])).toEqual([[0, 2, 4, 6], [0, 2, 4, 5], [0, 2, 3, 5], [0, 1, 3, 5]]);
      });
    });
    describe("smoothing", function () {
      it("ranks notes using individual minimizer", function () {
        var g = new _generators.Generator();
        g.lastNotes = ["C3", "C6"];
        var k = 0;
        var available = [["A2", "D6"], ["D3", "D6"]];

        var nextNote = function nextNote() {
          return available[k++ % available.length];
        };

        var res = g.sortedCandidatesIndividual(2, nextNote);
        expect(res).toEqual([[4, available[1]], [5, available[0]]]);
      });
    });
  });
  describe("chord generator", function () {
    it("gets all chords for scale", function () {
      var generator = new _chord_generators.ChordGenerator(new _music.KeySignature(0));
      var chords = generator.allChords();
      expect(chords).toEqual([new _music.Chord("C", "M"), new _music.Chord("D", "m"), new _music.Chord("E", "m"), new _music.Chord("F", "M"), new _music.Chord("G", "M"), new _music.Chord("A", "m"), new _music.Chord("B", "dim")]);
    });
    it("generates some chords without an error", function () {
      var generator = new _chord_generators.ChordGenerator(new _music.KeySignature(0));

      for (var i = 0; i < 10; i++) {
        var chord = generator.nextChord();
        expect(chord).toBeTruthy();
      }
    });
    describe("multi key chord generator", function () {
      it("should create generator", function () {
        var generator = new _chord_generators.MultiKeyChordGenerator(new _music.KeySignature(0));

        for (var i = 0; i < 10; i++) {
          var chord = generator.nextChord();
          expect(chord).toBeTruthy();
        }
      });
    });
  });
});

