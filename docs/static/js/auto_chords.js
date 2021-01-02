define("st/auto_chords", ["exports", "st/music", "st/song_note_list"], function (_exports, _music, _song_note_list) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.BossaNovaAutoChords = _exports.ArpAutoChords = _exports.Root5AutoChords = _exports.TriadAutoChords = _exports.RootAutoChords = _exports.AutoChords = void 0;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var AutoChords = /*#__PURE__*/function () {
    _createClass(AutoChords, null, [{
      key: "defaultChords",
      value: function defaultChords(song) {
        return new BossaNovaAutoChords(song);
      } // attempt to parse chord from macro name

    }, {
      key: "coerceChord",
      value: function coerceChord(macro) {
        var m = macro.match(/([a-gA-G][#b]?)(.*)/);

        if (!m) {
          return;
        }

        var _m = _slicedToArray(m, 3),
            root = _m[1],
            shape = _m[2];

        root = root.substr(0, 1).toUpperCase() + root.substr(1);

        if (shape == "") {
          shape = "M";
        }

        if (!_music.Chord.SHAPES[shape]) {
          return;
        }

        return [root, shape];
      }
    }]);

    function AutoChords(song) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, AutoChords);

      this.song = song;
      this.options = options;
    }

    _createClass(AutoChords, [{
      key: "findChordBlocks",
      value: function findChordBlocks() {
        var beatsPerMeasure = this.song.metadata.beatsPerMeasure;

        if (!beatsPerMeasure) {
          throw "Missing beats per measure for autochords";
        }

        if (!this.song.autoChords) {
          throw "Song missing autochords";
        }

        var chords = _toConsumableArray(this.song.autoChords);

        chords.reverse();
        var chordBlocks = [];
        var chordsUntil = null;

        var _iterator = _createForOfIteratorHelper(chords),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _step$value = _slicedToArray(_step.value, 2),
                position = _step$value[0],
                chord = _step$value[1];

            var start = position;
            var stop = (Math.floor(position / beatsPerMeasure) + 1) * beatsPerMeasure;

            if (chordsUntil) {
              stop = Math.min(stop, chordsUntil);
            }

            if (start >= stop) {
              console.warn("rejecting chord", chord, start, stop);
              continue;
            }

            chordBlocks.push({
              start: start,
              stop: stop,
              chord: chord
            });
            chordsUntil = start;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        chordBlocks.reverse();
        return chordBlocks;
      }
    }, {
      key: "addChords",
      value: function addChords() {
        var blocks = this.findChordBlocks();
        var notesToAdd = []; // the final set of notes added

        var _iterator2 = _createForOfIteratorHelper(blocks),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var block = _step2.value;

            var _block$chord = _slicedToArray(block.chord, 2),
                root = _block$chord[0],
                shape = _block$chord[1];

            var toAdd = this.notesForChord(root, shape, block.start, block.stop);

            if (toAdd) {
              notesToAdd.push.apply(notesToAdd, _toConsumableArray(toAdd));
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        var trackId = this.song.findEmptyTrackIdx(); // just mutate the song for now

        for (var _i2 = 0, _notesToAdd = notesToAdd; _i2 < _notesToAdd.length; _i2++) {
          var note = _notesToAdd[_i2];
          this.song.pushWithTrack(note, trackId);
        }

        var track = this.song.getTrack(trackId);
        track.trackName = "Autochords";
      }
    }, {
      key: "minPitchInRange",
      value: function minPitchInRange(start, stop) {
        var notes = this.song.notesInRange(start, stop);
        var pitches = [_music.MIDDLE_C_PITCH + 5].concat(_toConsumableArray(notes.map(function (n) {
          return (0, _music.parseNote)(n.note);
        })));
        var minPitch = Math.min.apply(Math, _toConsumableArray(pitches));

        if (this.options.chordMinSpacing) {
          minPitch -= this.options.chordMinSpacing;
        }

        return minPitch;
      } // find the closest root beneath the notes in range

    }, {
      key: "rootBelow",
      value: function rootBelow(name, maxPitch) {
        var rootPitch = (0, _music.parseNote)(name + "0");
        var chordRootPitch = Math.floor((maxPitch - 1 - rootPitch) / 12) * 12 + rootPitch;
        return (0, _music.noteName)(chordRootPitch);
      }
    }, {
      key: "notesForChord",
      value: function notesForChord(root, shape, blockStart, blockStop) {
        console.warn("Autochords doesn't generate any notes");
        return [];
      }
    }, {
      key: "inDivisions",
      value: function inDivisions(start, stop, count, fn) {
        var bpm = this.song.metadata.beatsPerMeasure;
        var chunkSize = bpm / Math.pow(2, count - 1);
        var left = start;
        var k = 0;

        while (true) {
          var right = Math.min(stop, left + chunkSize);
          fn(left, right, k);
          left += chunkSize;
          k += 1;

          if (right >= stop) {
            break;
          }
        }
      }
    }]);

    return AutoChords;
  }();

  _exports.AutoChords = AutoChords;

  var RootAutoChords = /*#__PURE__*/function (_AutoChords) {
    _inherits(RootAutoChords, _AutoChords);

    var _super = _createSuper(RootAutoChords);

    function RootAutoChords() {
      _classCallCheck(this, RootAutoChords);

      return _super.apply(this, arguments);
    }

    _createClass(RootAutoChords, [{
      key: "notesForChord",
      value: function notesForChord(root, shape, blockStart, blockStop) {
        var _this = this;

        var maxPitch = this.minPitchInRange(blockStart, blockStop);
        var rate = this.options.rate || 1;
        var out = [];
        this.inDivisions(blockStart, blockStop, rate, function (start, stop) {
          out.push(new _song_note_list.SongNote(_this.rootBelow(root, maxPitch), start, stop - start));
        });
        return out;
      }
    }]);

    return RootAutoChords;
  }(AutoChords);

  _exports.RootAutoChords = RootAutoChords;

  _defineProperty(RootAutoChords, "displayName", "Root");

  var TriadAutoChords = /*#__PURE__*/function (_AutoChords2) {
    _inherits(TriadAutoChords, _AutoChords2);

    var _super2 = _createSuper(TriadAutoChords);

    function TriadAutoChords() {
      _classCallCheck(this, TriadAutoChords);

      return _super2.apply(this, arguments);
    }

    _createClass(TriadAutoChords, [{
      key: "notesForChord",
      value: function notesForChord(root, shape, blockStart, blockStop) {
        var notesToAdd = [];
        var maxPitch = this.minPitchInRange(blockStart, blockStop);
        var chordRoot = this.rootBelow(root, maxPitch);
        var rate = this.options.rate || 1;
        var out = [];
        this.inDivisions(blockStart, blockStop, rate, function (start, stop) {
          _music.Chord.notes(chordRoot, shape).map(function (note) {
            return out.push(new _song_note_list.SongNote(note, start, stop - start));
          });
        });
        return out;
      }
    }]);

    return TriadAutoChords;
  }(AutoChords);

  _exports.TriadAutoChords = TriadAutoChords;

  _defineProperty(TriadAutoChords, "displayName", "Triad");

  var Root5AutoChords = /*#__PURE__*/function (_AutoChords3) {
    _inherits(Root5AutoChords, _AutoChords3);

    var _super3 = _createSuper(Root5AutoChords);

    function Root5AutoChords() {
      _classCallCheck(this, Root5AutoChords);

      return _super3.apply(this, arguments);
    }

    _createClass(Root5AutoChords, [{
      key: "notesForChord",
      value: function notesForChord(root, shape, blockStart, blockStop) {
        var maxPitch = this.minPitchInRange(blockStart, blockStop);
        var chordRoot = this.rootBelow(root, maxPitch);

        var chordNotes = _music.Chord.notes(chordRoot, shape);

        if ((0, _music.parseNote)(chordNotes[2]) > maxPitch) {
          chordRoot = (0, _music.addInterval)(chordRoot, -_music.OCTAVE_SIZE);
          chordNotes = _music.Chord.notes(chordRoot, shape);
        }

        var rate = this.options.rate || 1;
        var bpm = this.song.metadata.beatsPerMeasure || 2;
        var out = [];
        this.inDivisions(blockStart, blockStop, 1 + rate, function (start, stop, k) {
          if (k % bpm == 0) {
            // root on beat
            out.push(new _song_note_list.SongNote(chordNotes[0], start, stop - start));
          } else {
            // 5 on everything else
            out.push(new _song_note_list.SongNote(chordNotes[2], start, stop - start));
          }
        });
        return out;
      }
    }]);

    return Root5AutoChords;
  }(AutoChords);

  _exports.Root5AutoChords = Root5AutoChords;

  _defineProperty(Root5AutoChords, "displayName", "Root+5");

  var ArpAutoChords = /*#__PURE__*/function (_AutoChords4) {
    _inherits(ArpAutoChords, _AutoChords4);

    var _super4 = _createSuper(ArpAutoChords);

    function ArpAutoChords() {
      _classCallCheck(this, ArpAutoChords);

      return _super4.apply(this, arguments);
    }

    _createClass(ArpAutoChords, [{
      key: "notesForChord",
      value: function notesForChord(root, shape, blockStart, blockStop) {
        var maxPitch = this.minPitchInRange(blockStart, blockStop);
        var chordRoot = this.rootBelow(root, maxPitch);

        var chordNotes = _music.Chord.notes(chordRoot, shape);

        var out = [];
        this.inDivisions(blockStart, blockStop, 3, function (start, stop, k) {
          switch (k) {
            case 0:
              out.push(new _song_note_list.SongNote(chordNotes[0], start, stop - start));
              break;

            case 1:
              out.push(new _song_note_list.SongNote(chordNotes[1], start, stop - start));
              break;

            case 2:
              out.push(new _song_note_list.SongNote(chordNotes[3] || chordNotes[2], start, stop - start));
              break;

            case 3:
              out.push(new _song_note_list.SongNote(chordNotes[1], start, stop - start));
              break;
          }
        });

        for (var _i3 = 0, _out = out; _i3 < _out.length; _i3++) {
          var note = _out[_i3];

          while ((0, _music.parseNote)(note.note) >= maxPitch) {
            // shift everything done by octave
            var _iterator3 = _createForOfIteratorHelper(out),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _note = _step3.value;
                _note.note = (0, _music.noteName)((0, _music.parseNote)(_note.note) - 12);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        }

        return out;
      }
    }]);

    return ArpAutoChords;
  }(AutoChords);

  _exports.ArpAutoChords = ArpAutoChords;

  _defineProperty(ArpAutoChords, "displayName", "Arp");

  var BossaNovaAutoChords = /*#__PURE__*/function (_AutoChords5) {
    _inherits(BossaNovaAutoChords, _AutoChords5);

    var _super5 = _createSuper(BossaNovaAutoChords);

    function BossaNovaAutoChords() {
      _classCallCheck(this, BossaNovaAutoChords);

      return _super5.apply(this, arguments);
    }

    _createClass(BossaNovaAutoChords, [{
      key: "notesForChord",
      value: function notesForChord(root, shape, blockStart, blockStop) {
        var maxPitch = this.minPitchInRange(blockStart, blockStop);
        var chordRoot = this.rootBelow(root, maxPitch);

        var chordNotes = _music.Chord.notes(chordRoot, shape);

        var out = [];
        this.inDivisions(blockStart, blockStop, 3, function (start, stop, k) {
          var d = (stop - start) / 2;
          var one = chordNotes[0];
          var two = chordNotes[2];

          if ((0, _music.parseNote)(two) >= maxPitch) {
            one = (0, _music.noteName)((0, _music.parseNote)(chordNotes[2]) - 12);
            two = chordNotes[0];
          }

          switch (k) {
            case 0:
              out.push(new _song_note_list.SongNote(one, start, d * 3));
              break;

            case 1:
              out.push(new _song_note_list.SongNote(one, start + d, d));
              break;

            case 2:
              out.push(new _song_note_list.SongNote(two, start, d * 3));
              break;

            case 3:
              out.push(new _song_note_list.SongNote(two, start + d, d));
              break;
          }
        });
        return out;
      }
    }]);

    return BossaNovaAutoChords;
  }(AutoChords);

  _exports.BossaNovaAutoChords = BossaNovaAutoChords;

  _defineProperty(BossaNovaAutoChords, "displayName", "Bossa Nova");

  AutoChords.allGenerators = [RootAutoChords, TriadAutoChords, Root5AutoChords, ArpAutoChords, BossaNovaAutoChords];
});

