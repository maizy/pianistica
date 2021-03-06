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

define("st/browser", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.isMobile = isMobile;

  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
});

define("st/chord_generators", ["exports", "st/music", "lib", "st/util"], function (_exports, _music, _lib, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.MultiKeyChordGenerator = _exports.ChordGenerator = void 0;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var ChordGenerator = /*#__PURE__*/function () {
    function ChordGenerator(keySignature) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, ChordGenerator);

      this.noteCount = opts.notes || 3;
      this.keySignature = keySignature;

      if (opts.commonNotes > 0) {
        this.commonNotes = opts.commonNotes;
      }

      this.generator = new _lib.MersenneTwister();

      if (keySignature.isChromatic()) {
        this.scale = keySignature.defaultScale();
      } else {
        switch (opts.scale) {
          case "major":
            this.scale = new _music.MajorScale(keySignature.name());
            break;

          case "natural minor":
            this.scale = new _music.MinorScale(keySignature.name());
            break;

          case "harmonic minor":
            this.scale = new _music.HarmonicMinorScale(keySignature.name());
            break;

          case "melodic minor":
            this.scale = new _music.AscendingMelodicMinorScale(keySignature.name());
            break;

          case "major blues":
            this.scale = new _music.MajorBluesScale(keySignature.name());
            break;

          default:
            this.scale = keySignature.defaultScale();
        }
      }
    }

    _createClass(ChordGenerator, [{
      key: "allChords",
      value: function allChords() {
        var _this = this;

        if (!this.keySignature.isChromatic()) {
          return this.scale.allChords(this.noteCount);
        }

        var out = [];
        var shapes = this.noteCount == 3 ? ["M", "m"] : ["M7", "7", "m7"];

        var _loop = function _loop(i) {
          var degree = i + 1;

          var root = _this.scale.degreeToName(degree);

          shapes.forEach(function (s) {
            out.push(new _music.Chord(root, s));
          });
        };

        for (var i = 0; i < this.scale.steps.length; i++) {
          _loop(i);
        }

        return out;
      }
    }, {
      key: "nextChord",
      value: function nextChord() {
        var _this2 = this;

        if (!this.chords) {
          this.chords = this.allChords();
          this.chordOccurrences = new Map();
        }

        var availableChords = [];
        this.chords.forEach(function (chord) {
          if (_this2.lastChord && _this2.lastChord.toString() == chord.toString()) {
            return;
          }

          if (_this2.commonNotes && _this2.lastChord) {
            var common = _this2.lastChord.countSharedNotes(chord);

            if (common < _this2.commonNotes) {
              return;
            }
          }

          availableChords.push(chord);
        });
        var groupedByOccurence = {};
        availableChords.forEach(function (chord) {
          var count = _this2.chordOccurrences.get(chord.toString()) || 0;
          groupedByOccurence[count] = groupedByOccurence[count] || [];
          groupedByOccurence[count].push(chord);
        });
        var chordGroups = Object.keys(groupedByOccurence).map(function (key) {
          return [+key, (0, _util.shuffled)(groupedByOccurence[key], _this2.generator)];
        });
        chordGroups.sort(function (a, b) {
          return a[0] - b[0];
        });
        availableChords = chordGroups.reduce(function (list, group) {
          return list.concat(group[1]);
        }, []);
        this.lastChord = (0, _util.dithered)(availableChords, 3, this.generator)[0];
        this.chordOccurrences.set(this.lastChord.toString(), (this.chordOccurrences.get(this.lastChord.toString()) || 0) + 1);
        return this.lastChord;
      }
    }]);

    return ChordGenerator;
  }(); // chord generator that moves between all keys


  _exports.ChordGenerator = ChordGenerator;

  var MultiKeyChordGenerator = /*#__PURE__*/function (_ChordGenerator) {
    _inherits(MultiKeyChordGenerator, _ChordGenerator);

    var _super = _createSuper(MultiKeyChordGenerator);

    function MultiKeyChordGenerator(keySignature) {
      var _this3;

      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, MultiKeyChordGenerator);

      _this3 = _super.call(this, keySignature, opts);

      var keys = _music.KeySignature.allKeySignatures();

      _this3.chordToKeys = {};

      var _iterator = _createForOfIteratorHelper(keys),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var key = _step.value;

          var _iterator2 = _createForOfIteratorHelper(new _music.MajorScale(key).allChords(_this3.noteCount)),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var chord = _step2.value;
              var cName = chord.toString();
              _this3.chordToKeys[cName] = _this3.chordToKeys[cName] || [];

              _this3.chordToKeys[cName].push(key);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return _this3;
    } // find another key that uses the chord, that isn't the current key


    _createClass(MultiKeyChordGenerator, [{
      key: "changeKeyFromChord",
      value: function changeKeyFromChord() {
        var _this4 = this;

        var chord = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.lastChord;
        // common key modulation
        var keys = this.chordToKeys[chord.toString()];

        if (!keys) {
          // chord doesn't have key, eg. A#m
          return;
        }

        keys = keys.filter(function (key) {
          return key.name() != _this4.keySignature.name();
        });

        if (!keys.length) {
          // some chords are only in one key
          return;
        }

        var newKey = keys[this.generator["int"]() % keys.length]; // console.warn(`Going from ${this.keySignature.name()} to ${newKey.name()}`)

        this.keySignature = newKey;
        this.scale = this.keySignature.defaultScale();
        this.chords = null;
      }
    }, {
      key: "nextChord",
      value: function nextChord() {
        var _this5 = this;

        if (this.lastChord) {
          // time to change keys?
          var r = this.generator.random();

          if (r < 0.2) {
            if (this.lastChord.isDominant() && r < 0.15) {
              var targets = this.lastChord.getSecondaryDominantTargets(this.noteCount);
              targets = targets.filter(function (t) {
                var name = t.toString();
                return !_this5.chords.find(function (other) {
                  return other.toString() == name;
                });
              });
              var target = targets[this.generator["int"]() % targets.length];
              this.changeKeyFromChord(target);
            } else {
              this.changeKeyFromChord(this.lastChord);
            }
          }
        }

        return _get(_getPrototypeOf(MultiKeyChordGenerator.prototype), "nextChord", this).call(this);
      }
    }]);

    return MultiKeyChordGenerator;
  }(ChordGenerator);

  _exports.MultiKeyChordGenerator = MultiKeyChordGenerator;
});

define("st/chord_list", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

  function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  var ChordList = /*#__PURE__*/function (_Array) {
    _inherits(ChordList, _Array);

    var _super = _createSuper(ChordList);

    function ChordList(chords) {
      var _this;

      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, ChordList);

      _this = _super.call(this);
      Object.setPrototypeOf(_assertThisInitialized(_this), ChordList.prototype);

      if (opts.generator) {
        _this.generator = opts.generator;
      }

      if (chords && chords.length) {
        _this.push.apply(_assertThisInitialized(_this), chords);
      }

      return _this;
    } // TODO: there is some duplication between this and notes list


    _createClass(ChordList, [{
      key: "pushRandom",
      value: function pushRandom() {
        return this.push(this.generator.nextChord());
      }
    }, {
      key: "fillBuffer",
      value: function fillBuffer(count) {
        for (var i = 0; i < count; i++) {
          this.pushRandom();
        }
      }
    }, {
      key: "matchesHead",
      value: function matchesHead(notes) {
        return this[0].containsNotes(notes);
      }
    }]);

    return ChordList;
  }( /*#__PURE__*/_wrapNativeSuper(Array));

  _exports["default"] = ChordList;
});

define("st/components/app", ["exports", "st/components/pages/sight_reading_page", "st/components/pages/login_page", "st/components/pages/register_page", "st/components/pages/guide_pages", "st/components/pages/stats", "st/components/pages/flash_card_page", "st/components/pages/ear_training_page", "st/components/pages/play_along_page", "st/components/pages/latency", "st/components/pages/songs", "st/components/pages/not_found", "st/components/header", "st/components/device_picker_lightbox", "st/events", "st/config", "st/globals", "react", "react-router-dom", "react-transition-group", "st/sample_output"], function (_exports, _sight_reading_page, _login_page, _register_page, _guide_pages, _stats, _flash_card_page, _ear_training_page, _play_along_page, _latency, _songs, _not_found, _header, _device_picker_lightbox, _events, _config, _globals, React, _reactRouterDom, _reactTransitionGroup, _sample_output) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _sight_reading_page = _interopRequireDefault(_sight_reading_page);
  _login_page = _interopRequireDefault(_login_page);
  _register_page = _interopRequireDefault(_register_page);
  _guide_pages = _interopRequireDefault(_guide_pages);
  _stats = _interopRequireDefault(_stats);
  _flash_card_page = _interopRequireDefault(_flash_card_page);
  _ear_training_page = _interopRequireDefault(_ear_training_page);
  _play_along_page = _interopRequireDefault(_play_along_page);
  _latency = _interopRequireDefault(_latency);
  _songs = _interopRequireDefault(_songs);
  _not_found = _interopRequireDefault(_not_found);
  _header = _interopRequireDefault(_header);
  _device_picker_lightbox = _interopRequireDefault(_device_picker_lightbox);
  React = _interopRequireWildcard(React);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  var Layout = /*#__PURE__*/function (_React$Component) {
    _inherits(Layout, _React$Component);

    var _super = _createSuper(Layout);

    function Layout(props) {
      var _this;

      _classCallCheck(this, Layout);

      _this = _super.call(this, props);
      var device = (0, _config.readConfig)("defaults:outputDeviceType") || "none";
      var midiOutputChannel;

      if (device == "internal") {
        midiOutputChannel = _sample_output.SampleOutput.getInstance();
      }

      _this.state = {
        outputDeviceType: device,
        forwardMidi: (0, _config.readConfig)("defaults:forwardMidi") == 1,
        midiOutputChannel: midiOutputChannel
      };

      if (navigator.requestMIDIAccess) {
        navigator.requestMIDIAccess().then(function (midi) {
          _this.setState({
            midi: midi
          });

          _this.loadDefaultSettings();
        }, function (error) {
          return console.warn("failed to get MIDI access");
        });
      } else {
        console.warn("MIDI support not found");
      }

      return _this;
    }

    _createClass(Layout, [{
      key: "loadDefaultSettings",
      value: function loadDefaultSettings() {
        var defaultMidiInput = (0, _config.readConfig)("defaults:midiIn");

        if (defaultMidiInput) {
          var idx = 0;

          var _iterator = _createForOfIteratorHelper(this.midiInputs()),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var input = _step.value;

              if (input.name == defaultMidiInput) {
                this.setInput(idx);
              }

              idx++;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        (0, _events.dispatch)(this, {
          "lightboxClosed": function lightboxClosed(e) {
            return _this2.setState({
              currentLightbox: null
            });
          },
          "closeLightbox": function closeLightbox(e) {
            return _this2.refs.currentLightbox.close();
          },
          "showLightbox": function showLightbox(e, lb) {
            _this2.setState({
              currentLightbox: lb
            });
          },
          "pickMidi": function pickMidi(e) {
            _this2.setState({
              currentLightbox: _this2.renderMidiLightbox()
            });
          }
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.state.midiInput) {
          console.log("Unbinding: ".concat(this.state.midiInput.name));
          this.state.midiInput.onmidimessage = undefined;
        }
      } // these are mixed into all children's props (lightboxes included)

    }, {
      key: "childProps",
      value: function childProps() {
        return {
          midi: this.state.midi,
          midiInput: this.state.midiInput,
          midiOutput: this.state.midiOutputChannel
        };
      }
    }, {
      key: "pageLayout",
      value: function pageLayout(children) {
        return /*#__PURE__*/React.createElement("div", {
          className: "page_layout"
        }, /*#__PURE__*/React.createElement("div", {
          className: "header_spacer"
        }, this.renderHeader()), /*#__PURE__*/React.createElement(_reactRouterDom.Switch, null, children, /*#__PURE__*/React.createElement(_reactRouterDom.Route, null, /*#__PURE__*/React.createElement(_not_found["default"], null))), /*#__PURE__*/React.createElement(_reactTransitionGroup.TransitionGroup, {
          className: "lightboxes"
        }, this.renderCurrentLightbox()));
      }
    }, {
      key: "renderRoutes",
      value: function renderRoutes(routes) {
        var _this3 = this;

        var childProps = this.childProps();
        return routes.map(function (_ref, i) {
          var C = _ref.page,
              moreProps = _ref.props,
              path = _ref.path,
              exact = _ref.exact;
          return /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
            key: i,
            exact: exact,
            path: path,
            render: function render(props) {
              return /*#__PURE__*/React.createElement(C, _extends({
                ref: function ref(comp) {
                  return _this3.currentPage = comp;
                }
              }, moreProps, childProps, props));
            }
          });
        });
      }
    }, {
      key: "render",
      value: function render() {
        return this.pageLayout(this.renderRoutes([{
          path: "/",
          page: _sight_reading_page["default"],
          exact: true
        }, {
          path: "/login",
          page: _login_page["default"],
          exact: true
        }, {
          path: "/register",
          page: _register_page["default"],
          exact: true
        }, {
          path: "/ear-training",
          page: _ear_training_page["default"]
        }, {
          path: "/flash-cards/note-math",
          page: _flash_card_page["default"],
          exact: true,
          props: {
            exercise: "note_math"
          }
        }, {
          path: "/flash-cards/chord-identification",
          page: _flash_card_page["default"],
          exact: true,
          props: {
            exercise: "chord_identification"
          }
        }, {
          path: "/play-along",
          page: _songs["default"]
        }, {
          path: "/stats",
          page: _stats["default"],
          exact: true
        }, {
          path: "/latency",
          page: _latency["default"],
          exact: true
        }, {
          path: "/new-song",
          page: _play_along_page["default"],
          exact: true,
          props: {
            newSong: true,
            editorOpen: true
          }
        }, {
          path: "/song/:song_id/:song_slug",
          page: _play_along_page["default"],
          exact: true
        }, {
          path: ["/about", "/guide"],
          page: _guide_pages["default"]
        }]));
      }
    }, {
      key: "renderCurrentLightbox",
      value: function renderCurrentLightbox() {
        var _this4 = this;

        if (!this.state.currentLightbox) {
          return;
        }

        var lb = React.cloneElement(this.state.currentLightbox, _objectSpread({
          ref: "currentLightbox"
        }, this.childProps()));
        return /*#__PURE__*/React.createElement(_reactTransitionGroup.CSSTransition, {
          classNames: "show_lightbox",
          timeout: {
            enter: 200,
            exit: 100
          }
        }, /*#__PURE__*/React.createElement("div", {
          className: "lightbox_shroud",
          onClick: function onClick(e) {
            if (e.target.classList.contains("lightbox_shroud")) {
              _this4.refs.currentLightbox.close();

              e.preventDefault();
            }
          }
        }, lb));
      }
    }, {
      key: "doLogout",
      value: function doLogout() {
        var request = new XMLHttpRequest();
        request.open("POST", "/logout.json");
        var data = new FormData();
        data.append("csrf_token", (0, _globals.csrfToken)());
        request.send(data);

        request.onload = function (e) {
          var res = JSON.parse(request.responseText);
          N.init(res);
        };
      }
    }, {
      key: "renderHeader",
      value: function renderHeader() {
        return /*#__PURE__*/React.createElement(_header["default"], {
          midiInput: this.state.midiInput,
          doLogout: this.doLogout.bind(this)
        });
      }
    }, {
      key: "midiInputs",
      value: function midiInputs() {
        if (!this.state.midi) return;
        var inputs = [];
        var iter = this.state.midi.inputs.values();

        for (var o = iter.next(); !o.done; o = iter.next()) {
          inputs.push(o.value);
        }

        return inputs;
      }
    }, {
      key: "setInput",
      value: function setInput(idx) {
        if (idx === undefined) {
          return;
        }

        var input = this.midiInputs()[idx];

        if (!input) {
          this.setState({
            midiInput: null,
            midiInputIdx: null
          });
          return;
        }

        if (this.state.midiInput) {
          console.log("Unbinding: ".concat(this.state.midiInput.name));
          this.state.midiInput.onmidimessage = undefined;
        }

        console.log("Binding to: ".concat(input.name));
        input.onmidimessage = this.onMidiMessage.bind(this);
        this.setState({
          midiInput: input,
          midiInputIdx: idx
        });
        return input;
      }
    }, {
      key: "onMidiMessage",
      value: function onMidiMessage(message) {
        // forward to output if necessary
        if (this.state.forwardMidi && this.state.midiOutputChannel) {
          this.state.midiOutputChannel.sendMessage(message.data);
        } // proxy message to the current page


        if (this.currentPage && this.currentPage.onMidiMessage) {
          this.currentPage.onMidiMessage(message);
        }
      }
    }, {
      key: "renderMidiLightbox",
      value: function renderMidiLightbox() {
        var _this5 = this;

        return /*#__PURE__*/React.createElement(_device_picker_lightbox["default"], {
          forwardMidi: this.state.forwardMidi,
          selectedInputIdx: this.state.midiInputIdx,
          selectedOutputChannel: this.state.midiOutputChannel,
          selectedOutputIdx: this.state.midiOutputIdx,
          selectedOutputDeviceType: this.state.outputDeviceType,
          onClose: function onClose(lb) {
            var config = lb.midiConfiguration();

            var input = _this5.setInput(config.inputIdx);

            var output = config.outputChannel;

            if (config.outputDeviceType == "internal") {
              output = _sample_output.SampleOutput.getInstance();
            }

            _this5.setState({
              forwardMidi: config.forwardMidi,
              midiOutputChannel: output,
              midiOutputIdx: config.outputIdx,
              outputDeviceType: config.outputDeviceType
            });

            (0, _config.writeConfig)("defaults:midiIn", input ? input.name : undefined);
            (0, _config.writeConfig)("defaults:forwardMidi", config.forwardMidi ? "1" : undefined);
            (0, _config.writeConfig)("defaults:outputDeviceType", config.outputDeviceType || undefined);
          }
        });
      }
    }]);

    return Layout;
  }(React.Component);

  var App = /*#__PURE__*/function (_React$Component2) {
    _inherits(App, _React$Component2);

    var _super2 = _createSuper(App);

    function App() {
      _classCallCheck(this, App);

      return _super2.apply(this, arguments);
    }

    _createClass(App, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/React.createElement(Layout, null));
      }
    }]);

    return App;
  }(React.Component);

  _exports["default"] = App;

  _defineProperty(App, "Layout", Layout);
});

define("st/components/device_picker_lightbox", ["exports", "react", "prop-types", "st/components/lightbox", "st/components/midi_selector", "st/components/midi_instrument_picker", "st/components/select", "st/midi"], function (_exports, React, types, _lightbox, _midi_selector, _midi_instrument_picker, _select, _midi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);
  types = _interopRequireWildcard(types);
  _lightbox = _interopRequireDefault(_lightbox);
  _midi_selector = _interopRequireDefault(_midi_selector);
  _midi_instrument_picker = _interopRequireDefault(_midi_instrument_picker);
  _select = _interopRequireDefault(_select);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var DevicePickerLightbox = /*#__PURE__*/function (_Lightbox) {
    _inherits(DevicePickerLightbox, _Lightbox);

    var _super = _createSuper(DevicePickerLightbox);

    function DevicePickerLightbox(props) {
      var _this;

      _classCallCheck(this, DevicePickerLightbox);

      _this = _super.call(this, props);
      _this.state = {
        selectedInput: _this.props.selectedInputIdx,
        selectedOutput: _this.props.selectedOutputIdx,
        outputDeviceType: _this.props.selectedOutputDeviceType,
        forwardMidi: _this.props.forwardMidi || false
      };
      _this.instrumentPickerRef = React.createRef();
      return _this;
    }

    _createClass(DevicePickerLightbox, [{
      key: "midiConfiguration",
      value: function midiConfiguration() {
        var instrumentPicker = this.instrumentPickerRef.current;
        return {
          forwardMidi: this.state.forwardMidi,
          inputIdx: this.state.selectedInput,
          outputIdx: instrumentPicker ? instrumentPicker.getSelectedIdx() : null,
          outputChannel: instrumentPicker ? instrumentPicker.getCurrentChannel() : null,
          outputDeviceType: this.state.outputDeviceType
        };
      }
    }, {
      key: "midiInputs",
      value: function midiInputs() {
        if (!this.props.midi) return [];
        var inputs = [];
        var iter = this.props.midi.inputs.values();

        for (var o = iter.next(); !o.done; o = iter.next()) {
          inputs.push(o.value);
        }

        return inputs;
      }
    }, {
      key: "renderOutputPicker",
      value: function renderOutputPicker() {
        var _this2 = this;

        var outputDetails;

        if (this.state.outputDeviceType == "midi") {
          var channel = this.props.selectedOutputChannel; // don't let sample output go into midi picker

          if (!(channel instanceof _midi.MidiChannel)) {
            channel = null;
          }

          outputDetails = /*#__PURE__*/React.createElement(_midi_instrument_picker["default"], {
            midi: this.props.midi,
            defaultChannel: channel,
            ref: this.instrumentPickerRef
          });
        }

        var devices = [{
          value: "internal",
          name: "Internal piano"
        }, {
          value: "none",
          name: "None"
        }];

        if (this.props.midi) {
          devices.push({
            value: "midi",
            name: "MIDI Device"
          });
        }

        return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h4", null, "Select Output Device"), /*#__PURE__*/React.createElement("p", null, "Used for the on-screen keyboard, ear training, and play-along mode."), /*#__PURE__*/React.createElement("div", {
          className: "input_row device_type_picker"
        }, /*#__PURE__*/React.createElement("span", {
          className: "label"
        }, "Output type"), " ", /*#__PURE__*/React.createElement(_select["default"], {
          value: this.state.outputDeviceType,
          onChange: function onChange(value) {
            return _this2.setState({
              outputDeviceType: value
            });
          },
          options: devices
        })), outputDetails);
      }
    }, {
      key: "renderContent",
      value: function renderContent() {
        var _this3 = this;

        var midiSetup;

        if (this.props.midi) {
          midiSetup = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Select MIDI input device"), /*#__PURE__*/React.createElement("p", null, "An input device will allow you to play notes and chords on your keyboard into this website."), /*#__PURE__*/React.createElement(_midi_selector["default"], {
            defaultIdx: this.state.selectedInput,
            onChange: function onChange(idx) {
              return _this3.setState({
                selectedInput: idx
              });
            },
            midiOptions: this.midiInputs()
          }), /*#__PURE__*/React.createElement("div", {
            className: "input_row"
          }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
            onChange: function onChange(e) {
              return _this3.setState({
                forwardMidi: e.target.checked
              });
            },
            type: "checkbox",
            checked: this.state.forwardMidi
          }), " ", /*#__PURE__*/React.createElement("span", {
            className: "label"
          }, "Forward MIDI input to output"))));
        } else {
          midiSetup = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Select MIDI input device"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "MIDI support not detected on your computer."), " You'll only be able to use the on-srcreen keyboard and build in synthesizer. (Try Chrome for MIDI device support)"));
        }

        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Device Setup"), midiSetup, this.renderOutputPicker(), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("button", {
          onClick: this.close.bind(this)
        }, "Save selections")));
      }
    }]);

    return DevicePickerLightbox;
  }(_lightbox["default"]);

  _exports["default"] = DevicePickerLightbox;

  _defineProperty(DevicePickerLightbox, "className", "device_picker_lightbox");

  _defineProperty(DevicePickerLightbox, "propTypes", {
    midi: types.object
  });
});

define("st/components/draggable", ["exports", "react", "react-dom", "lib", "prop-types"], function (_exports, React, ReactDOM, _lib, types) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);
  ReactDOM = _interopRequireWildcard(ReactDOM);
  types = _interopRequireWildcard(types);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  var Draggable = /*#__PURE__*/function (_React$Component) {
    _inherits(Draggable, _React$Component);

    var _super = _createSuper(Draggable);

    function Draggable(props) {
      _classCallCheck(this, Draggable);

      return _super.call(this, props);
    }

    _createClass(Draggable, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this = this;

        var node = ReactDOM.findDOMNode(this);

        if (!node) {
          console.error("Failed to bind mouse drag method due to null children");
        }

        node.addEventListener("mousedown", function (e) {
          _this.startDrag(e.pageX, e.pageY);
        });
        node.addEventListener("touchstart", function (e) {
          var _e$targetTouches$ = e.targetTouches[0],
              x = _e$targetTouches$.pageX,
              y = _e$targetTouches$.pageY;

          _this.startTouchDrag(x, y);
        });
      }
    }, {
      key: "startTouchDrag",
      value: function startTouchDrag(startX, startY) {
        var _this2 = this;

        if (this.props.disabled) {
          return true;
        }

        if (this.props.startDrag) {
          this.props.startDrag();
        }

        var upListener = function upListener(e) {
          document.body.removeEventListener("touchmove", moveListener);
          document.body.removeEventListener("touchend", upListener);

          if (_this2.props.stopDrag) {
            _this2.props.stopDrag();
          }
        };

        var moveListener = function moveListener(e) {
          var _e$targetTouches$2 = e.targetTouches[0],
              x = _e$targetTouches$2.pageX,
              y = _e$targetTouches$2.pageY;
          var dx = x - startX;
          var dy = y - startX;
          startX = x;
          startY = y;

          if (_this2.props.onDrag) {
            _this2.props.onDrag(dx, dy);
          }
        };

        document.body.addEventListener("touchmove", moveListener);
        document.body.addEventListener("touchend", upListener);
      }
    }, {
      key: "startDrag",
      value: function startDrag(startX, startY) {
        var _this3 = this;

        if (this.props.disabled) {
          return true;
        }

        if (this.props.startDrag) {
          this.props.startDrag();
        }

        var upListener = function upListener(e) {
          document.body.removeEventListener("mousemove", moveListener);
          document.body.removeEventListener("mouseup", upListener);

          if (_this3.props.stopDrag) {
            _this3.props.stopDrag();
          }
        };

        var moveListener = function moveListener(e) {
          var x = e.pageX,
              y = e.pageX;
          var dx = x - startX;
          var dy = y - startX;

          if (e.buttons == 0) {
            upListener();
            return;
          }

          startX = x;
          startY = y;

          if (_this3.props.onDrag) {
            _this3.props.onDrag(dx, dy);
          }

          e.preventDefault();
        };

        document.body.addEventListener("mousemove", moveListener);
        document.body.addEventListener("mouseup", upListener);
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("div", {
          className: "draggable"
        }, this.props.children);
      }
    }]);

    return Draggable;
  }(React.Component);

  _exports["default"] = Draggable;
});

define("st/components/forms", ["exports", "react", "st/globals", "window", "lib", "prop-types"], function (_exports, React, _globals, _window, _lib, types) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.JsonForm = _exports.TextInputRow = void 0;
  React = _interopRequireWildcard(React);
  types = _interopRequireWildcard(types);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var TextInputRow = /*#__PURE__*/function (_React$Component) {
    _inherits(TextInputRow, _React$Component);

    var _super = _createSuper(TextInputRow);

    function TextInputRow() {
      _classCallCheck(this, TextInputRow);

      return _super.apply(this, arguments);
    }

    _createClass(TextInputRow, [{
      key: "render",
      value: function render() {
        var _this = this;

        var inputProps = {
          type: this.props.type || "text",
          name: this.props.name
        };
        ["onChange", "value", "required", "disabled"].forEach(function (k) {
          if (k in _this.props) {
            inputProps[k] = _this.props[k];
          }
        });
        return /*#__PURE__*/React.createElement("div", {
          className: (0, _lib.classNames)("input_row", this.props.className)
        }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("div", {
          className: "label"
        }, this.props.children), /*#__PURE__*/React.createElement("input", inputProps)));
      }
    }]);

    return TextInputRow;
  }(React.Component);

  _exports.TextInputRow = TextInputRow;

  _defineProperty(TextInputRow, "propTypes", {
    name: types.string.isRequired
  });

  var JsonForm = /*#__PURE__*/function (_React$Component2) {
    _inherits(JsonForm, _React$Component2);

    var _super2 = _createSuper(JsonForm);

    function JsonForm() {
      var _this2;

      _classCallCheck(this, JsonForm);

      _this2 = _super2.call(this);
      _this2.state = {
        loading: false
      };
      return _this2;
    }

    _createClass(JsonForm, [{
      key: "submitHandler",
      value: function submitHandler(e) {
        var _this3 = this;

        e.preventDefault();

        if (this.state.loading) {
          return;
        }

        if (this.props.beforeSubmit) {
          this.props.beforeSubmit();
        }

        var formData = new _window.FormData(this.refs.form);
        formData.append("csrf_token", (0, _globals.csrfToken)());

        if (this.props.validate && !this.props.validate(formData)) {
          return;
        }

        var url = this.refs.form.getAttribute("action");
        var request = new _window.XMLHttpRequest();
        request.open(this.props.method, url);
        request.send(formData);

        request.onload = function (e) {
          _this3.setState({
            loading: false
          });

          try {
            var res = JSON.parse(request.responseText);

            if (_this3.props.afterSubmit) {
              _this3.props.afterSubmit(res);
            }
          } catch (e) {
            console.error(e);

            if (_this3.props.afterSubmit) {
              _this3.props.afterSubmit({
                errors: ["Server error, please try again later"]
              });
            }
          }
        };

        this.setState({
          loading: true
        });
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("form", {
          ref: "form",
          className: this.props.className,
          action: this.props.action,
          method: this.props.method,
          onSubmit: this.submitHandler.bind(this)
        }, this.props.children);
      }
    }]);

    return JsonForm;
  }(React.Component);

  _exports.JsonForm = JsonForm;

  _defineProperty(JsonForm, "defaultProps", {
    method: "POST"
  });

  _defineProperty(JsonForm, "propTypes", {
    action: types.string.isRequired,
    validate: types.func,
    beforeSubmit: types.func,
    afterSubmit: types.func,
    method: types.string
  });
});

define("st/components/header", ["exports", "react", "react-dom", "react-router-dom", "st/components/midi_button", "st/events", "lib", "st/components/icons"], function (_exports, React, ReactDOM, _reactRouterDom, _midi_button, _events, _lib, _icons) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);
  ReactDOM = _interopRequireWildcard(ReactDOM);
  _midi_button = _interopRequireDefault(_midi_button);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  var SizedElement = /*#__PURE__*/function (_React$Component) {
    _inherits(SizedElement, _React$Component);

    var _super = _createSuper(SizedElement);

    function SizedElement(props) {
      var _this;

      _classCallCheck(this, SizedElement);

      _this = _super.call(this, props);
      _this.state = {};
      return _this;
    }

    _createClass(SizedElement, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        this.refreshWidth();
        var timeout = null;

        this.resizeCallback = function (e) {
          if (timeout) {
            window.clearTimeout(timeout);
            timeout = null;
          }

          timeout = window.setTimeout(function () {
            _this2.refreshWidth();

            timeout = null;
          }, 100);
        };

        window.addEventListener("resize", this.resizeCallback);
        this.resizeCallback();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        window.removeEventListener("resize", this.resizeCallback);
      }
    }, {
      key: "refreshWidth",
      value: function refreshWidth() {
        var el = ReactDOM.findDOMNode(this);
        var width = el.getBoundingClientRect().width;

        if (this.state.width != width) {
          this.setState({
            width: width
          }, function () {
            if (this.props.onWidth) {
              this.props.onWidth(this.state.width);
            }
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("div", {
          className: (0, _lib.classNames)("sized_element", this.props.className)
        }, this.state.width ? this.props.children : null);
      }
    }]);

    return SizedElement;
  }(React.Component);

  var Header = /*#__PURE__*/function (_React$Component2) {
    _inherits(Header, _React$Component2);

    var _super2 = _createSuper(Header);

    function Header(props) {
      var _this3;

      _classCallCheck(this, Header);

      _this3 = _super2.call(this, props);
      _this3.state = {
        // TODO: add build option to show & hide backend elements
        showBackendItems: false,
        menuOpen: false
      };
      return _this3;
    }

    _createClass(Header, [{
      key: "renderNavigationMenu",
      value: function renderNavigationMenu() {
        var _this4 = this;

        var userLinks = this.getPageLinks();
        var menu = null;
        var showMidiButton = !this.state.width || this.state.width < 450;

        if (this.state.menuOpen) {
          var account_area = null;

          if (this.state.showBackendItems) {
            if (N.session.currentUser) {
              account_area = /*#__PURE__*/React.createElement("div", {
                className: "account_area logged_in"
              }, /*#__PURE__*/React.createElement("span", {
                className: "username"
              }, N.session.currentUser.username), /*#__PURE__*/React.createElement("a", {
                href: "#",
                onClick: this.props.doLogout
              }, "Log out"));
            } else {
              account_area = /*#__PURE__*/React.createElement("div", {
                className: "account_area logged_out"
              }, /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
                to: "/login",
                activeClassName: "active"
              }, "Log in"), /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
                to: "/register",
                activeClassName: "active"
              }, "Register"));
            }
          }

          menu = /*#__PURE__*/React.createElement("div", {
            key: "navigation_menu",
            ref: function ref(el) {
              if (el) {
                el.focus();
              }
            },
            onClick: function onClick(e) {
              if (e.target.matches("a")) {
                _this4.setState({
                  menuOpen: false
                });
              }
            },
            className: "navigation_menu",
            tabIndex: "-1"
          }, account_area, showMidiButton ? /*#__PURE__*/React.createElement("div", {
            className: "midi_button_wrapper"
          }, this.renderMidiButton()) : null, /*#__PURE__*/React.createElement("ul", null, userLinks.map(function (link, i) {
            return /*#__PURE__*/React.createElement("li", {
              key: i
            }, link);
          })));
        }

        return /*#__PURE__*/React.createElement("div", {
          className: "menu_toggle"
        }, /*#__PURE__*/React.createElement("button", {
          type: "button",
          onClick: function onClick(e) {
            _this4.setState({
              menuOpen: !_this4.state.menuOpen
            });
          }
        }, "Menu ", /*#__PURE__*/React.createElement(_icons.IconDownArrow, {
          width: 12
        })), menu ? /*#__PURE__*/React.createElement("div", {
          onClick: function onClick(e) {
            return _this4.setState({
              menuOpen: false
            });
          },
          className: "menu_shroud"
        }) : null, menu);
      }
    }, {
      key: "renderHorizontalNavigation",
      value: function renderHorizontalNavigation() {
        var userPanel = null;
        var userLinks = this.getPageLinks();

        if (this.state.showBackendItems) {
          if (N.session.currentUser) {
            userPanel = /*#__PURE__*/React.createElement("div", {
              className: "right_section",
              key: "user_in"
            }, N.session.currentUser.username, " ", /*#__PURE__*/React.createElement("a", {
              href: "#",
              onClick: this.props.doLogout
            }, "Log out"));
          } else {
            userPanel = /*#__PURE__*/React.createElement("div", {
              className: "right_section",
              key: "user_out"
            }, /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
              to: "/login",
              activeClassName: "active"
            }, "Log in"), " or ", /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
              to: "/register",
              activeClassName: "active"
            }, "Register"));
          }
        }

        return [].concat(_toConsumableArray(userLinks), [userPanel]);
      }
    }, {
      key: "getPageLinks",
      value: function getPageLinks() {
        var links = [/*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
          exact: true,
          key: "root",
          to: "/",
          activeClassName: "active"
        }, "Staff"), /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
          exact: true,
          key: "ear-training",
          to: "/ear-training/interval-melodies",
          activeClassName: "active"
        }, "Ear Training"), /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
          exact: true,
          key: "flash-cards",
          to: "/flash-cards/note-math",
          activeClassName: "active"
        }, "Flash Cards")];

        if (this.state.showBackendItems) {
          links.push( /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
            key: "play-along",
            to: "/play-along",
            activeClassName: "active"
          }, "Play Along"));
        }

        links.push( /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
          exact: true,
          key: "about",
          to: "/about",
          activeClassName: "active"
        }, "Guide"));

        if (N.session.currentUser) {
          links.push( /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
            exact: true,
            key: "stats",
            to: "/stats",
            activeClassName: "active"
          }, "Stats"));
        }

        return links;
      }
    }, {
      key: "renderMidiButton",
      value: function renderMidiButton() {
        var _this5 = this;

        return /*#__PURE__*/React.createElement(_midi_button["default"], {
          midiInput: this.props.midiInput,
          pickMidi: function pickMidi() {
            (0, _events.trigger)(_this5, "pickMidi");
          }
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this6 = this;

        var userPanel = null;
        var enableDropdown = this.state.width && this.state.width < 700;
        var hideMidiButton = !this.state.width || this.state.width < 450;
        return /*#__PURE__*/React.createElement("div", {
          className: "header"
        }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
          to: "/",
          className: "logo_link"
        }, /*#__PURE__*/React.createElement("span", {
          "class": "logo"
        }, "\u266C Pianistica"), /*#__PURE__*/React.createElement("span", {
          "class": "logo_small"
        }, "\u266C")), /*#__PURE__*/React.createElement(SizedElement, {
          className: "user_links",
          onWidth: function onWidth(w) {
            _this6.setState({
              width: w
            });
          }
        }, enableDropdown ? this.renderNavigationMenu() : this.renderHorizontalNavigation()), hideMidiButton ? null : this.renderMidiButton());
      }
    }]);

    return Header;
  }(React.Component);

  _exports["default"] = Header;
});

define("st/components/hotkeys", ["exports", "react", "st/keyboard_input", "prop-types"], function (_exports, React, _keyboard_input, types) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);
  types = _interopRequireWildcard(types);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var Hotkeys = /*#__PURE__*/function (_React$Component) {
    _inherits(Hotkeys, _React$Component);

    var _super = _createSuper(Hotkeys);

    function Hotkeys(props) {
      var _this;

      _classCallCheck(this, Hotkeys);

      _this = _super.call(this, props);
      _this.state = {
        heldKeys: {}
      };
      return _this;
    }

    _createClass(Hotkeys, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        this.downListener = function (event) {
          if (event.shiftKey || event.altKey || event.ctrlKey) {
            return;
          }

          if (event.target.matches("input, button, textarea")) {
            return;
          }

          if (_this2.state.heldKeys[event.keyCode]) {
            // ignore keyboard repeat
            return;
          }

          _this2.state.heldKeys[event.keyCode] = true;
          var key = (0, _keyboard_input.keyCodeToChar)(event.keyCode);

          _this2.triggerKeyMap(key, event);

          if (_this2.props.onDown) {
            _this2.props.onDown(key, event);
          }
        };

        this.upListener = function (event) {
          var key = (0, _keyboard_input.keyCodeToChar)(event.keyCode);

          if (!_this2.state.heldKeys[event.keyCode]) {
            return;
          }

          delete _this2.state.heldKeys[event.keyCode];

          if (_this2.props.onUp) {
            _this2.props.onUp(key, event);
          }
        };

        window.addEventListener("keydown", this.downListener);
        window.addEventListener("keyup", this.upListener);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        window.removeEventListener("keydown", this.downListener);
        window.removeEventListener("keyup", this.upListener);
      }
    }, {
      key: "triggerKeyMap",
      value: function triggerKeyMap(key, event) {
        if (!this.props.keyMap) {
          return;
        }

        var fn = this.props.keyMap[key];

        if (fn) {
          fn(event);
          return true;
        }

        return false;
      }
    }, {
      key: "render",
      value: function render() {
        // placholder element
        return /*#__PURE__*/React.createElement("span", {
          className: "hotkeys",
          style: {
            display: "none"
          }
        });
      }
    }]);

    return Hotkeys;
  }(React.Component);

  _exports["default"] = Hotkeys;

  _defineProperty(Hotkeys, "propTypes", {
    onDown: types.func,
    onUp: types.func,
    keyMap: types.object
  });
});

define("st/components/icons", ["exports", "react", "prop-types"], function (_exports, React, types) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.IconMenu = _exports.IconShuffle = _exports.IconRewind = _exports.IconDownArrow = _exports.IconBase = void 0;
  React = _interopRequireWildcard(React);
  types = _interopRequireWildcard(types);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var IconBase = /*#__PURE__*/function (_React$Component) {
    _inherits(IconBase, _React$Component);

    var _super = _createSuper(IconBase);

    function IconBase() {
      _classCallCheck(this, IconBase);

      return _super.apply(this, arguments);
    }

    _createClass(IconBase, [{
      key: "render",
      value: function render() {
        var width = this.props.width || this.width;
        var height = this.props.height || width / this.width * this.height;
        return /*#__PURE__*/React.createElement("svg", _extends({}, this.svgOpts || {}, {
          viewBox: "0 0 ".concat(this.width, " ").concat(this.height),
          "aria-hidden": "true",
          width: width,
          height: height,
          className: "svgicon",
          role: "img",
          version: "1.1",
          dangerouslySetInnerHTML: {
            __html: this.path
          }
        }));
      }
    }]);

    return IconBase;
  }(React.Component);

  _exports.IconBase = IconBase;

  _defineProperty(IconBase, "propTypes", {
    width: types.number,
    height: types.number
  });

  var IconDownArrow = /*#__PURE__*/function (_IconBase) {
    _inherits(IconDownArrow, _IconBase);

    var _super2 = _createSuper(IconDownArrow);

    function IconDownArrow() {
      var _this;

      _classCallCheck(this, IconDownArrow);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super2.call.apply(_super2, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "width", 37);

      _defineProperty(_assertThisInitialized(_this), "height", 20);

      _defineProperty(_assertThisInitialized(_this), "path", "<path d=\"m2.0858 0c-1.1535 0-2.0858 0.86469-2.0858 1.9331 0 0.5139 0.21354 1.0183 0.38704 1.1881l18.113 16.879 18.112-16.879c0.174-0.1696 0.388-0.674 0.388-1.1879 0-1.0684-0.932-1.9331-2.086-1.9331-0.577 0-1.111 0.23008-1.49 0.57992l-14.924 13.894-14.925-13.893c-0.3777-0.34998-0.9134-0.581-1.4902-0.581z\"/>");

      return _this;
    }

    return IconDownArrow;
  }(IconBase);

  _exports.IconDownArrow = IconDownArrow;

  var IconRewind = /*#__PURE__*/function (_IconBase2) {
    _inherits(IconRewind, _IconBase2);

    var _super3 = _createSuper(IconRewind);

    function IconRewind() {
      var _this2;

      _classCallCheck(this, IconRewind);

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      _this2 = _super3.call.apply(_super3, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this2), "width", 512);

      _defineProperty(_assertThisInitialized(_this2), "height", 512);

      _defineProperty(_assertThisInitialized(_this2), "path", "<path d=\"M128 448v-384h64v176l160-160v352l-160-160v176z\" />");

      return _this2;
    }

    return IconRewind;
  }(IconBase);

  _exports.IconRewind = IconRewind;

  var IconShuffle = /*#__PURE__*/function (_IconBase3) {
    _inherits(IconShuffle, _IconBase3);

    var _super4 = _createSuper(IconShuffle);

    function IconShuffle() {
      var _this3;

      _classCallCheck(this, IconShuffle);

      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      _this3 = _super4.call.apply(_super4, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this3), "width", 24);

      _defineProperty(_assertThisInitialized(_this3), "height", 24);

      _defineProperty(_assertThisInitialized(_this3), "svgOpts", {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      });

      _defineProperty(_assertThisInitialized(_this3), "path", "<polyline points=\"16 3 21 3 21 8\"></polyline><line x1=\"4\" y1=\"20\" x2=\"21\" y2=\"3\"></line><polyline points=\"21 16 21 21 16 21\"></polyline><line x1=\"15\" y1=\"15\" x2=\"21\" y2=\"21\"></line><line x1=\"4\" y1=\"4\" x2=\"9\" y2=\"9\"></line>");

      return _this3;
    }

    return IconShuffle;
  }(IconBase);

  _exports.IconShuffle = IconShuffle;

  var IconMenu = /*#__PURE__*/function (_IconBase4) {
    _inherits(IconMenu, _IconBase4);

    var _super5 = _createSuper(IconMenu);

    function IconMenu() {
      var _this4;

      _classCallCheck(this, IconMenu);

      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      _this4 = _super5.call.apply(_super5, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this4), "width", 24);

      _defineProperty(_assertThisInitialized(_this4), "height", 24);

      _defineProperty(_assertThisInitialized(_this4), "svgOpts", {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      });

      _defineProperty(_assertThisInitialized(_this4), "path", "<line x1=\"3\" y1=\"12\" x2=\"21\" y2=\"12\"></line><line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"></line><line x1=\"3\" y1=\"18\" x2=\"21\" y2=\"18\"></line>");

      return _this4;
    }

    return IconMenu;
  }(IconBase);

  _exports.IconMenu = IconMenu;
});

define("st/components/keyboard", ["exports", "react", "lib", "st/music", "st/keyboard_input", "prop-types"], function (_exports, React, _lib, _music, _keyboard_input, types) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);
  types = _interopRequireWildcard(types);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var Keyboard = /*#__PURE__*/function (_React$PureComponent) {
    _inherits(Keyboard, _React$PureComponent);

    var _super = _createSuper(Keyboard);

    function Keyboard(props) {
      var _this;

      _classCallCheck(this, Keyboard);

      _this = _super.call(this, props);

      _defineProperty(_assertThisInitialized(_this), "defaultLower", "C5");

      _defineProperty(_assertThisInitialized(_this), "defaultUpper", "B6");

      _this.state = {
        // used for showing :active effect on keys when using touch device
        activeNotes: {}
      };
      _this.heldKeyboardKeys = {};
      _this.activeTouches = {};
      _this.onMouseDown = _this.onMouseDown.bind(_assertThisInitialized(_this));
      _this.onTouchStart = _this.onTouchStart.bind(_assertThisInitialized(_this));
      _this.onTouchEnd = _this.onTouchEnd.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(Keyboard, [{
      key: "isBlack",
      value: function isBlack(pitch) {
        return _music.LETTER_OFFSETS[pitch % 12] === undefined;
      }
    }, {
      key: "isC",
      value: function isC(pitch) {
        return _music.LETTER_OFFSETS[pitch % 12] === 0;
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        this.downListener = function (event) {
          if (event.shiftKey || event.altKey || event.ctrlKey) {
            return;
          }

          if (event.target.matches("input")) {
            return;
          }

          var key = (0, _keyboard_input.keyCodeToChar)(event.keyCode);
          var note = (0, _keyboard_input.noteForKey)("C5", key);

          if (note && !_this2.heldKeyboardKeys[note]) {
            _this2.heldKeyboardKeys[note] = true;

            _this2.triggerNoteDown(note);
          }
        };

        this.upListener = function (event) {
          var key = (0, _keyboard_input.keyCodeToChar)(event.keyCode);
          var note = (0, _keyboard_input.noteForKey)("C5", key);

          if (note && _this2.heldKeyboardKeys[note]) {
            _this2.heldKeyboardKeys[note] = false;

            _this2.triggerNoteUp(note);
          }
        };

        window.addEventListener("keydown", this.downListener);
        window.addEventListener("keyup", this.upListener);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        window.removeEventListener("keydown", this.downListener);
        window.removeEventListener("keyup", this.upListener);
      }
    }, {
      key: "triggerNoteDown",
      value: function triggerNoteDown(note) {
        if (this.props.onKeyDown) {
          this.props.onKeyDown(note);
        }

        if (this.props.midiOutput) {
          this.props.midiOutput.noteOn((0, _music.parseNote)(note), 100);
        }
      }
    }, {
      key: "triggerNoteUp",
      value: function triggerNoteUp(note) {
        if (this.props.onKeyUp) {
          this.props.onKeyUp(note);
        }

        if (this.props.midiOutput) {
          this.props.midiOutput.noteOff((0, _music.parseNote)(note), 100);
        }
      }
    }, {
      key: "onTouchStart",
      value: function onTouchStart(e) {
        var note = e.target.dataset.note;
        this.setState(function (s) {
          return {
            activeNotes: Object.assign({}, s.activeNotes, _defineProperty({}, note, true))
          };
        });

        for (var i = 0; i < e.changedTouches.length; i++) {
          var touch = e.changedTouches[i];
          this.activeTouches[note] = touch.identifier;
        }

        this.triggerNoteDown(note);
      }
    }, {
      key: "onTouchEnd",
      value: function onTouchEnd(e) {
        var _this3 = this;

        e.preventDefault();

        for (var i = 0; i < e.changedTouches.length; i++) {
          var touch = e.changedTouches[i];

          var _loop = function _loop() {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                note = _Object$entries$_i[0],
                tid = _Object$entries$_i[1];

            if (tid == touch.identifier) {
              delete _this3.activeTouches[note];

              _this3.setState(function (s) {
                var activeNotes = Object.assign({}, s.activeNotes);
                delete activeNotes[note];
                return {
                  activeNotes: activeNotes
                };
              });

              _this3.triggerNoteUp(note);
            }
          };

          for (var _i = 0, _Object$entries = Object.entries(this.activeTouches); _i < _Object$entries.length; _i++) {
            _loop();
          }
        }
      }
    }, {
      key: "onMouseDown",
      value: function onMouseDown(e) {
        var _this4 = this;

        e.preventDefault();
        var note = e.target.dataset.note;
        this.triggerNoteDown(note);

        if (this.props.onKeyUp) {
          var onUp = function onUp(e) {
            e.preventDefault();

            _this4.triggerNoteUp(note);

            document.removeEventListener("mouseup", onUp);
          };

          document.addEventListener("mouseup", onUp);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var keys = [];
        var lower = this.props.lower || this.defaultLower;
        var upper = this.props.upper || this.defaultUpper;

        if (typeof lower == "string") {
          lower = (0, _music.parseNote)(lower);
        }

        if (typeof upper == "string") {
          upper = (0, _music.parseNote)(upper);
        }

        if (lower >= upper) {
          throw "lower must be less than upper for keyboard";
        }

        for (var pitch = lower; pitch <= upper; pitch++) {
          var black = this.isBlack(pitch);
          var name = (0, _music.noteName)(pitch);
          var classes = (0, _lib.classNames)("key", {
            labeled: this.isC(pitch),
            white: !black,
            black: black,
            held: this.props.heldNotes && this.props.heldNotes[name],
            active: this.state.activeNotes[name]
          });
          keys.push( /*#__PURE__*/React.createElement("div", {
            key: pitch,
            className: "key_wrapper"
          }, /*#__PURE__*/React.createElement("div", {
            onMouseDown: this.onMouseDown,
            onTouchStart: this.onTouchStart,
            onTouchEnd: this.onTouchEnd,
            "data-note": name,
            "data-note-fixed": (0, _music.fixNoteOctaveNum)(name),
            className: classes
          })));
        }

        return /*#__PURE__*/React.createElement("div", {
          className: "keyboard"
        }, keys);
      }
    }]);

    return Keyboard;
  }(React.PureComponent);

  _exports["default"] = Keyboard;

  _defineProperty(Keyboard, "propTypes", {
    lower: types.oneOfType([types.string, types.number]),
    upper: types.oneOfType([types.string, types.number]),
    heldNotes: types.object
  });
});

define("st/components/lightbox", ["exports", "react", "lib", "prop-types", "st/events"], function (_exports, React, _lib, types, _events) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);
  types = _interopRequireWildcard(types);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var Lightbox = /*#__PURE__*/function (_React$Component) {
    _inherits(Lightbox, _React$Component);

    var _super = _createSuper(Lightbox);

    function Lightbox() {
      _classCallCheck(this, Lightbox);

      return _super.apply(this, arguments);
    }

    _createClass(Lightbox, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this = this;

        this.closeListener = function (e) {
          if (e.keyCode == 27) {
            _this.close();
          }
        };

        document.body.addEventListener("keydown", this.closeListener);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        document.body.removeEventListener("keydown", this.closeListener);
      }
    }, {
      key: "renderContent",
      value: function renderContent() {
        return this.props.children;
      }
    }, {
      key: "close",
      value: function close() {
        if (!this.canClose()) {
          return;
        }

        (0, _events.trigger)(this, "lightboxClosed");

        if (this.props.onClose) {
          this.props.onClose(this);
        }
      }
    }, {
      key: "canClose",
      value: function canClose() {
        return true;
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("div", {
          className: (0, _lib.classNames)("lightbox", this.constructor.className, this.props.className)
        }, this.renderContent());
      }
    }]);

    return Lightbox;
  }(React.Component);

  _exports["default"] = Lightbox;

  _defineProperty(Lightbox, "className", null);

  _defineProperty(Lightbox, "propTypes", {
    onClose: types.func
  });
});

define("st/components/midi_button", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = MidiButton;

  function MidiButton(props) {
    return /*#__PURE__*/React.createElement("button", {
      onClick: function onClick(e) {
        e.preventDefault();
        props.pickMidi();
      },
      className: "midi_button"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
      src: "/static/svg/midi.svg",
      alt: "MIDI"
    }), /*#__PURE__*/React.createElement("span", {
      className: "current_input_name"
    }, props.midiInput ? props.midiInput.name : "Select device")));
  }
});

define("st/components/midi_instrument_picker", ["exports", "react", "st/components/midi_selector", "st/components/slider", "st/components/select", "st/midi", "prop-types"], function (_exports, React, _midi_selector, _slider, _select, _midi, types) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);
  _midi_selector = _interopRequireDefault(_midi_selector);
  _slider = _interopRequireDefault(_slider);
  _select = _interopRequireDefault(_select);
  types = _interopRequireWildcard(types);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var MidiInstrumentPicker = /*#__PURE__*/function (_React$PureComponent) {
    _inherits(MidiInstrumentPicker, _React$PureComponent);

    var _super = _createSuper(MidiInstrumentPicker);

    function MidiInstrumentPicker(props) {
      var _this;

      _classCallCheck(this, MidiInstrumentPicker);

      _this = _super.call(this, props);
      _this.state = {
        outputIdx: null,
        outChannel: 0,
        outInstrument: 0
      };
      var c = _this.props.defaultChannel;

      if (c) {
        _this.state.outChannel = c.channel;
        _this.state.outInstrument = c.lastProgramNumber;

        _this.midiOutputs().map(function (output, idx) {
          if (output == c.output) {
            _this.state.outputIdx = idx;
          }
        });
      }

      return _this;
    }

    _createClass(MidiInstrumentPicker, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        return /*#__PURE__*/React.createElement("div", {
          className: "midi_instrument_picker_component"
        }, /*#__PURE__*/React.createElement("div", {
          className: "midi_options"
        }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "Channel"), /*#__PURE__*/React.createElement(_slider["default"], {
          min: 1,
          max: 16,
          onChange: function onChange(value) {
            _this2.setState({
              outChannel: value - 1
            });
          },
          value: this.state.outChannel + 1
        }), /*#__PURE__*/React.createElement("span", null, this.state.outChannel + 1)), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "Instrument"), /*#__PURE__*/React.createElement(_select["default"], {
          value: this.state.outInstrument,
          onChange: function onChange(v) {
            return _this2.setState({
              outInstrument: v
            });
          },
          options: [{
            name: "Piano",
            value: 0
          }, {
            name: "Celesta",
            value: 8
          }, {
            name: "Organ",
            value: 16
          }, {
            name: "Guitar",
            value: 24
          }, {
            name: "Acoustic Bass",
            value: 32
          }, {
            name: "Violin",
            value: 40
          }, {
            name: "String Ensamble",
            value: 48
          }, {
            name: "Trumpet",
            value: 56
          }, {
            name: "Sax",
            value: 64
          }, {
            name: "Piccolo",
            value: 72
          }, {
            name: "Square Synth",
            value: 80
          }, {
            name: "Pad",
            value: 88
          }, {
            name: "Brightness",
            value: 100
          }]
        }))), /*#__PURE__*/React.createElement(_midi_selector["default"], {
          defaultIdx: this.state.outputIdx,
          onChange: function onChange(idx) {
            return _this2.setState({
              outputIdx: idx
            });
          },
          midiOptions: this.midiOutputs()
        }), /*#__PURE__*/React.createElement("div", {
          className: "midi_instrument_test_buttons"
        }, /*#__PURE__*/React.createElement("button", {
          onClick: function onClick(e) {
            e.preventDefault();

            _this2.getCurrentChannel().testNote();
          },
          disabled: this.state.outputIdx == null
        }, "Play test note")));
      }
    }, {
      key: "getCurrentChannel",
      value: function getCurrentChannel() {
        if (this.state.outputIdx == null || this.state.outInstrument == null) {
          return null;
        }

        var output = this.midiOutputs()[this.state.outputIdx];
        var channel = new _midi.MidiChannel(output, this.state.outChannel);
        channel.setInstrument(this.state.outInstrument);
        return channel;
      }
    }, {
      key: "getSelectedIdx",
      value: function getSelectedIdx() {
        return this.state.outputIdx;
      }
    }, {
      key: "midiOutputs",
      value: function midiOutputs() {
        if (!this.props.midi) return [];
        var outputs = [];
        var iter = this.props.midi.outputs.values();

        for (var o = iter.next(); !o.done; o = iter.next()) {
          outputs.push(o.value);
        }

        return outputs;
      }
    }]);

    return MidiInstrumentPicker;
  }(React.PureComponent);

  _exports["default"] = MidiInstrumentPicker;

  _defineProperty(MidiInstrumentPicker, "propTypes", {
    midi: types.object.isRequired,
    defaultChannel: types.object
  });
});

define("st/components/midi_selector", ["exports", "react", "lib", "prop-types"], function (_exports, React, _lib, types) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);
  types = _interopRequireWildcard(types);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var MidiSelector = /*#__PURE__*/function (_React$PureComponent) {
    _inherits(MidiSelector, _React$PureComponent);

    var _super = _createSuper(MidiSelector);

    function MidiSelector(props) {
      var _this;

      _classCallCheck(this, MidiSelector);

      _this = _super.call(this, props);
      _this.state = {
        selected: _this.props.defaultIdx
      };
      return _this;
    }

    _createClass(MidiSelector, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var midiOptions = this.props.midiOptions;

        if (!midiOptions.length) {
          return /*#__PURE__*/React.createElement("p", null, "No MIDI devices connected");
        }

        return /*#__PURE__*/React.createElement("div", {
          className: "midi_selector"
        }, midiOptions.map(function (option, i) {
          return /*#__PURE__*/React.createElement("div", {
            key: i,
            className: (0, _lib.classNames)("midi_input_row", {
              selected: _this2.state.selected == i
            }),
            onClick: function onClick() {
              if (_this2.state.selected == i) {
                _this2.setState({
                  selected: null
                });

                if (_this2.props.onChange) {
                  _this2.props.onChange(null);
                }
              } else {
                _this2.setState({
                  selected: i
                });

                if (_this2.props.onChange) {
                  _this2.props.onChange(i);
                }
              }
            }
          }, /*#__PURE__*/React.createElement("img", {
            className: "row_icon",
            src: "/static/img/notes_icon.svg",
            alt: "MIDI Device"
          }), /*#__PURE__*/React.createElement("div", {
            className: "input_name"
          }, option.name));
        }));
      }
    }]);

    return MidiSelector;
  }(React.PureComponent);

  _exports["default"] = MidiSelector;

  _defineProperty(MidiSelector, "propTypes", {
    midiOptions: types.array.isRequired,
    onChange: types.func
  });
});

define("st/components/position_field", ["exports", "react", "prop-types"], function (_exports, React, types) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);
  types = _interopRequireWildcard(types);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var PositionField = /*#__PURE__*/function (_React$PureComponent) {
    _inherits(PositionField, _React$PureComponent);

    var _super = _createSuper(PositionField);

    function PositionField(props) {
      var _this;

      _classCallCheck(this, PositionField);

      _this = _super.call(this, props);
      _this.state = {
        value: null,
        editValue: null
      };
      return _this;
    }

    _createClass(PositionField, [{
      key: "formattedValue",
      value: function formattedValue() {
        var value = 0;

        if (this.props.value != null) {
          value = this.props.value;
        }

        if (this.state.value != null) {
          value = this.state.value;
        }

        return value.toFixed(1);
      }
    }, {
      key: "confirmEdit",
      value: function confirmEdit() {
        if (!this.state.editValue) {
          return;
        }

        if (this.state.editValue.match(/[^0-9.]/)) {
          this.cancelEdit();
        }

        var value = +this.state.editValue;

        if (this.props.min != null) {
          value = Math.max(this.props.min, value);
        }

        if (this.props.max != null) {
          value = Math.min(this.props.max, value);
        }

        this.setValue(value);
      }
    }, {
      key: "setValue",
      value: function setValue(value) {
        this.setState({
          value: value,
          editValue: null
        });

        if (this.props.onUpdate) {
          this.props.onUpdate(value);
        }
      }
    }, {
      key: "cancelEdit",
      value: function cancelEdit() {
        this.setState({
          editValue: null
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var displayValue = this.state.editValue;

        if (displayValue == null) {
          displayValue = this.formattedValue();
        }

        return /*#__PURE__*/React.createElement("input", {
          className: "position_field_input",
          type: "text",
          title: this.props.title,
          readOnly: this.props.readOnly,
          value: displayValue,
          onKeyDown: function onKeyDown(e) {
            if (e.keyCode == 27) {
              if (!_this2.state.editValue && _this2.props.resetValue != null) {
                _this2.setValue(_this2.props.resetValue);
              } else {
                _this2.cancelEdit();
              }

              e.stopPropagation();
              return;
            }

            if (e.keyCode == 13) {
              _this2.confirmEdit();

              e.stopPropagation();
              return;
            } // todo: allow up/down keys

          },
          onFocus: function onFocus(e) {
            return e.target.select();
          },
          onChange: function onChange(e) {
            _this2.setState({
              editValue: e.target.value
            });
          },
          onBlur: function onBlur(e) {
            return _this2.confirmEdit();
          }
        });
      }
    }]);

    return PositionField;
  }(React.PureComponent);

  _exports["default"] = PositionField;

  _defineProperty(PositionField, "propTypes", {
    min: types.number,
    max: types.number,
    value: types.number
  });
});

define("st/components/select", ["exports", "react", "lib", "prop-types", "st/components/icons"], function (_exports, React, _lib, types, _icons) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);
  types = _interopRequireWildcard(types);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var Select = /*#__PURE__*/function (_React$Component) {
    _inherits(Select, _React$Component);

    var _super = _createSuper(Select);

    function Select(props) {
      var _this;

      _classCallCheck(this, Select);

      _this = _super.call(this, props);
      _this.state = {};
      return _this;
    }

    _createClass(Select, [{
      key: "onChange",
      value: function onChange(e) {
        var value = e.target.value;

        if (this.props.onChange) {
          if (value == this.props.value) {
            return;
          }

          this.props.onChange(value);
        } else {
          if (value == this.state.value) {
            return;
          }

          this.setState({
            value: value
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var current = this.currentOption();
        return /*#__PURE__*/React.createElement("div", {
          className: (0, _lib.classNames)("select_component", this.props.className, {
            focused: this.state.focused
          })
        }, /*#__PURE__*/React.createElement("div", {
          className: "selected_option"
        }, /*#__PURE__*/React.createElement("span", {
          className: "selected_option_name"
        }, current.name), /*#__PURE__*/React.createElement(_icons.IconDownArrow, {
          width: 12
        })), /*#__PURE__*/React.createElement("select", {
          value: current.value,
          name: this.props.name,
          onFocus: function onFocus(e) {
            return _this2.setState({
              focused: true
            });
          },
          onBlur: function onBlur(e) {
            return _this2.setState({
              focused: false
            });
          },
          onChange: function onChange(e) {
            return _this2.onChange(e);
          }
        }, this.props.options.map(function (o, idx) {
          return /*#__PURE__*/React.createElement("option", {
            key: idx,
            value: o.value
          }, o.name);
        })));
      }
    }, {
      key: "findOption",
      value: function findOption(optionValue) {
        var _iterator = _createForOfIteratorHelper(this.props.options),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var o = _step.value;

            if (o.value == optionValue) {
              return o;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } // name of what's currently selected

    }, {
      key: "currentOption",
      value: function currentOption() {
        var searchValue = this.props.value || this.state.value;

        if (searchValue != undefined) {
          return this.findOption(searchValue);
        } else {
          return this.props.options[0];
        }
      }
    }]);

    return Select;
  }(React.Component);

  _exports["default"] = Select;

  _defineProperty(Select, "propTypes", {
    options: types.array.isRequired,
    name: types.string
  });
});

define("st/components/slider", ["exports", "react", "lib", "prop-types"], function (_exports, React, _lib, types) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);
  types = _interopRequireWildcard(types);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var Slider = /*#__PURE__*/function (_React$PureComponent) {
    _inherits(Slider, _React$PureComponent);

    var _super = _createSuper(Slider);

    function Slider(props) {
      var _this;

      _classCallCheck(this, Slider);

      _this = _super.call(this, props);
      _this.state = {};
      return _this;
    }

    _createClass(Slider, [{
      key: "onChange",
      value: function onChange(value) {
        value = Math.round(value);

        if (this.props.onChange) {
          if (value == this.props.value) {
            return;
          }

          this.props.onChange(value);
        } else {
          if (value == this.state.value) {
            return;
          }

          this.setState({
            value: value
          });
        }
      }
    }, {
      key: "startDrag",
      value: function startDrag(startX, startY) {
        var _this2 = this;

        if (this.props.disabled) {
          return true;
        } // width of slider


        var width = this.refs.track.clientWidth;
        var startValue = this.currentValue();

        var moveListener = function moveListener(e) {
          var x = e.pageX,
              y = e.pageX;
          var dx = x - startX;
          var newValue = dx / width * (_this2.props.max - _this2.props.min) + startValue;
          newValue = Math.min(_this2.props.max, Math.max(_this2.props.min, newValue));

          if (newValue != _this2.currentValue()) {
            _this2.onChange(newValue);
          }
        };

        var upListener = function upListener(e) {
          document.body.removeEventListener("mousemove", moveListener);
          document.body.removeEventListener("mouseup", upListener);
        };

        document.body.addEventListener("mousemove", moveListener);
        document.body.addEventListener("mouseup", upListener);
      }
    }, {
      key: "currentValue",
      value: function currentValue() {
        if ("value" in this.state) {
          return this.state.value;
        } else {
          return this.props.value;
        }
      }
    }, {
      key: "percent",
      value: function percent() {
        return (this.currentValue() - this.props.min) / (this.props.max - this.props.min);
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        return /*#__PURE__*/React.createElement("div", {
          onClick: function onClick(e) {
            if (e.target == _this3.refs.sliderNub) {
              return;
            }

            var rect = _this3.refs.track.getBoundingClientRect();

            var p = Math.min(rect.width, Math.max(0, e.pageX - rect.left)) / rect.width;
            var newValue = _this3.props.min + p * (_this3.props.max - _this3.props.min);
            newValue = Math.min(_this3.props.max, Math.max(_this3.props.min, newValue));

            if (newValue != _this3.currentValue()) {
              _this3.onChange(newValue);
            }
          },
          className: (0, _lib.classNames)("slider_component", {
            disabled: this.props.disabled
          })
        }, /*#__PURE__*/React.createElement("div", {
          ref: "track",
          className: "slider_track"
        }, /*#__PURE__*/React.createElement("button", {
          ref: "sliderNub",
          onMouseDown: function onMouseDown(e) {
            return _this3.startDrag(e.pageX, e.pageY);
          },
          onKeyDown: function onKeyDown(e) {
            var delta = 0;

            switch (e.keyCode) {
              case 37:
                // left
                delta = -1;
                break;

              case 39:
                // right
                delta = 1;
                break;

              case 38:
                // up
                delta = 10;
                break;

              case 40:
                // down
                delta = -10;
                break;
            }

            _this3.onChange(Math.max(_this3.props.min, Math.min(_this3.props.max, _this3.currentValue() + delta)));
          },
          style: {
            left: this.percent() * 100 + "%"
          },
          className: "slider_nub"
        })));
      }
    }]);

    return Slider;
  }(React.PureComponent);

  _exports["default"] = Slider;

  _defineProperty(Slider, "propTypes", {
    min: types.number,
    max: types.number,
    value: types.number,
    onChange: types.func,
    disabled: types.bool
  });
});

define("st/components/song_editor", ["exports", "react", "st/song_parser", "st/events", "st/components/forms", "react-router-dom", "st/components/lightbox", "st/components/tabs", "st/components/select", "st/music", "st/config"], function (_exports, React, _song_parser, _events, _forms, _reactRouterDom, _lightbox, _tabs, _select, _music, _config) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);
  _song_parser = _interopRequireDefault(_song_parser);
  _lightbox = _interopRequireDefault(_lightbox);
  _tabs = _interopRequireDefault(_tabs);
  _select = _interopRequireDefault(_select);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  var DeleteSongForm = React.memo(function DeleteSongForm(props) {
    var history = (0, _reactRouterDom.useHistory)();

    function afterSubmit(res) {
      props.lightbox.close();

      if (res.redirect_to) {
        history.push(res.redirect_to);
      }
    }

    return /*#__PURE__*/React.createElement(_forms.JsonForm, {
      method: "DELETE",
      action: props.action,
      afterSubmit: afterSubmit,
      className: "delete_song_form"
    }, /*#__PURE__*/React.createElement("p", null, "Are you sure you want to delete this song? You can't un-delete"), /*#__PURE__*/React.createElement("button", null, "Delete"));
  });

  var SongDetailsLightbox = /*#__PURE__*/function (_Lightbox) {
    _inherits(SongDetailsLightbox, _Lightbox);

    var _super = _createSuper(SongDetailsLightbox);

    function SongDetailsLightbox(opts) {
      var _this;

      _classCallCheck(this, SongDetailsLightbox);

      _this = _super.call(this, opts);
      _this.state = {
        tab: "details"
      };
      return _this;
    }

    _createClass(SongDetailsLightbox, [{
      key: "renderContent",
      value: function renderContent() {
        var _this2 = this;

        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", null, "More options"), /*#__PURE__*/React.createElement(_tabs["default"], {
          currentTab: this.state.tab,
          onChangeTab: function onChangeTab(t) {
            return _this2.setState({
              tab: t.name
            });
          },
          tabs: [{
            name: "details",
            label: "Details"
          }, {
            name: "delete",
            label: "Delete"
          }]
        }), this.renderCurrentTab());
      }
    }, {
      key: "renderCurrentTab",
      value: function renderCurrentTab() {
        switch (this.state.tab) {
          case "details":
            return this.renderDetails();

          case "delete":
            return /*#__PURE__*/React.createElement(DeleteSongForm, {
              lightbox: this,
              action: this.props.action
            });
        }
      }
    }, {
      key: "renderDetails",
      value: function renderDetails() {
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Created at: "), this.props.song.created_at), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Updated at: "), this.props.song.updated_at));
      }
    }]);

    return SongDetailsLightbox;
  }(_lightbox["default"]);

  var SongEditor = /*#__PURE__*/function (_React$Component) {
    _inherits(SongEditor, _React$Component);

    var _super2 = _createSuper(SongEditor);

    function SongEditor(props) {
      var _this3;

      _classCallCheck(this, SongEditor);

      _this3 = _super2.call(this, props);
      var song = _this3.props.song;
      _this3.notesCountInputRef = React.createRef();
      _this3.beatsLengthInputRef = React.createRef();
      _this3.codeInputRef = React.createRef();
      _this3.fieldUpdaters = {
        code: function code(e) {
          return _this3.updateCode(e.target.value);
        }
      };
      var initial = song;

      if (!song) {
        initial = (0, _config.readConfig)("wip:newSong"); // render the initial song

        if (initial) {
          window.setTimeout(function () {
            if (_this3.state.code == initial.code) {
              if (_this3.props.onCode) {
                _this3.props.onCode(initial.code);
              }
            }
          }, 0);
        }
      }

      _this3.state = {
        song: song,
        newSong: !song,
        loading: false,
        title: initial ? initial.title : "",
        code: _this3.props.code || (initial ? initial.code : null) || "",
        source: initial ? initial.source : "",
        album: initial ? initial.album : "",
        artist: initial ? initial.artist : "",
        publishStatus: initial ? initial.publish_status : undefined
      };
      return _this3;
    }

    _createClass(SongEditor, [{
      key: "updateCode",
      value: function updateCode(code, callback) {
        var update = {
          code: code
        };
        this.setState(update, callback);
        this.updateWip(update);

        if (this.props.onCode) {
          this.props.onCode(code);
        }
      }
    }, {
      key: "beforeSubmit",
      value: function beforeSubmit() {
        if (this.props.songNotes) {
          this.notesCountInputRef.current.value = this.props.songNotes.length;
          var duration = Math.max.apply(Math, _toConsumableArray(this.props.songNotes.map(function (n) {
            return n.getStop();
          })));
          this.beatsLengthInputRef.current.value = duration;
        }

        this.setState({
          errors: null
        });
      }
    }, {
      key: "afterSubmit",
      value: function afterSubmit(res) {
        if (res.errors) {
          this.setState({
            errors: res.errors
          });
        }

        if (res.song) {
          this.setState({
            newSong: false,
            song: res.song
          });
          (0, _config.writeConfig)("wip:newSong", undefined);
        }
      }
    }, {
      key: "updateWip",
      value: function updateWip(update) {
        if (!this.state.newSong) {
          return false;
        }

        var wip = (0, _config.readConfig)("wip:newSong") || {};
        wip = Object.assign({}, wip, update);
        (0, _config.writeConfig)("wip:newSong", wip);
        return true;
      }
    }, {
      key: "render",
      value: function render() {
        var _this4 = this;

        var action = "/songs.json";

        if (this.state.song && this.state.song.allowed_to_edit) {
          action = "/songs/".concat(this.state.song.id, ".json");
        }

        var errors;

        if (this.state.errors) {
          errors = /*#__PURE__*/React.createElement("ul", null, this.state.errors.map(function (e) {
            return /*#__PURE__*/React.createElement("li", {
              key: e
            }, e);
          }));
        }

        var moreButton, saveButton;

        if (this.state.song && this.state.song.allowed_to_edit) {
          moreButton = /*#__PURE__*/React.createElement("button", {
            onClick: function onClick(e) {
              (0, _events.trigger)(_this4, "showLightbox", /*#__PURE__*/React.createElement(SongDetailsLightbox, {
                action: action,
                song: _this4.state.song
              }));
            },
            type: "button",
            className: "outline"
          }, "More...");
        }

        if (this.state.song && !this.state.song.allowed_to_edit) {
          saveButton = /*#__PURE__*/React.createElement("button", null, "Save copy");
        } else if (this.state.song) {
          saveButton = /*#__PURE__*/React.createElement("button", null, "Save");
        } else {
          saveButton = /*#__PURE__*/React.createElement("button", null, "Save new song");
        }

        var originalSongIdInput;

        if (this.state.song && !this.state.song.allowed_to_edit) {
          originalSongIdInput = /*#__PURE__*/React.createElement("input", {
            type: "hidden",
            name: "song[original_song_id]",
            value: this.state.song.id
          });
        }

        var songVisibility;

        if (!this.state.song || this.state.song.allowed_to_edit) {
          songVisibility = /*#__PURE__*/React.createElement(_select["default"], {
            name: "song[publish_status]",
            value: this.state.publishStatus,
            onChange: function onChange(value) {
              _this4.setState({
                publishStatus: value
              });
            },
            options: [{
              value: "draft",
              name: "Unlisted"
            }, {
              value: "public",
              name: "Public"
            }]
          });
        }

        var hasAutochords = false;

        if (this.props.songNotes && this.props.songNotes.autoChords) {
          hasAutochords = true;
        }

        return /*#__PURE__*/React.createElement(_forms.JsonForm, {
          action: action,
          beforeSubmit: this.beforeSubmit.bind(this),
          afterSubmit: this.afterSubmit.bind(this),
          className: "song_editor"
        }, /*#__PURE__*/React.createElement("input", {
          type: "hidden",
          ref: this.notesCountInputRef,
          name: "song[notes_count]"
        }), /*#__PURE__*/React.createElement("input", {
          type: "hidden",
          ref: this.beatsLengthInputRef,
          name: "song[beats_duration]"
        }), /*#__PURE__*/React.createElement("input", {
          type: "hidden",
          value: hasAutochords ? "true" : "",
          name: "song[has_autochords]"
        }), originalSongIdInput, /*#__PURE__*/React.createElement("textarea", {
          ref: this.codeInputRef,
          placeholder: "Type some LML",
          disabled: this.state.loading,
          name: "song[song]",
          value: this.state.code,
          onChange: this.fieldUpdaters.code
        }), /*#__PURE__*/React.createElement("div", {
          className: "song_editor_tools"
        }, errors, this.textInput("Title", "title", {
          required: true
        }), this.textInput("Source", "source"), this.textInput("Artist", "artist"), this.textInput("Album", "album"), /*#__PURE__*/React.createElement("div", {
          className: "form_tools"
        }, saveButton, " ", songVisibility, " ", moreButton)));
      }
    }, {
      key: "textInput",
      value: function textInput(title, field) {
        var _this5 = this;

        var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        if (!this.fieldUpdaters[field]) {
          this.fieldUpdaters[field] = function (e) {
            var update = _defineProperty({}, field, e.target.value);

            _this5.setState(update);

            _this5.updateWip(update);
          };
        }

        return /*#__PURE__*/React.createElement(_forms.TextInputRow, {
          required: opts.required,
          disabled: this.state.loading,
          onChange: this.fieldUpdaters[field],
          value: this.state[field] || "",
          name: "song[".concat(field, "]")
        }, title);
      }
    }, {
      key: "pressNote",
      value: function pressNote(note) {
        var input = this.codeInputRef.current;

        if (!input) {
          return;
        }

        var code = this.state.code;
        var selectionStart = input.selectionStart;
        var selectionEnd = input.selectionEnd;
        var before = code.substring(0, input.selectionStart);
        var after = code.substring(input.selectionEnd, code.length);

        var keySignature = _music.KeySignature.forCount(0);

        if (this.props.songNotes && this.props.songNotes.metadata) {
          keySignature = _music.KeySignature.forCount(this.props.songNotes.metadata.keySignature || 0);
        }

        var _note$match = note.match(/([A-G])(#|b)?(\d+)/),
            _note$match2 = _slicedToArray(_note$match, 4),
            noteName = _note$match2[1],
            octave = _note$match2[3];

        var accidental = "";

        switch (keySignature.accidentalsForNote(note)) {
          case 0:
            {
              accidental = "=";
              break;
            }

          case 1:
            {
              accidental = "-";
              break;
            }

          case -1:
            {
              accidental = "+";
              break;
            }
        }

        var noteCode = noteName.toLowerCase() + accidental + octave;

        if (before && !before.match(/\s$/)) {
          noteCode = " " + noteCode;
        }

        if (after && !after.match(/^\s/)) {
          noteCode = noteCode + " ";
        }

        this.updateCode(before + noteCode + after, function () {
          // make the modification using execCommand to ensure undo works
          input.value = code;
          input.selectionStart = selectionStart;
          input.selectionEnd = selectionEnd;
          input.focus();
          document.execCommand("insertText", false, noteCode);
        });
      }
    }]);

    return SongEditor;
  }(React.Component);

  _exports["default"] = SongEditor;
});

define("st/components/staff_notes", ["exports", "react", "lib", "prop-types", "st/music", "st/song_note_list", "st/components/staff/ledger_lines", "st/components/staff/whole_notes"], function (_exports, React, _lib, types, _music, _song_note_list, _ledger_lines, _whole_notes) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);
  types = _interopRequireWildcard(types);
  _ledger_lines = _interopRequireDefault(_ledger_lines);
  _whole_notes = _interopRequireDefault(_whole_notes);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var StaffNotes = /*#__PURE__*/function (_React$Component) {
    _inherits(StaffNotes, _React$Component);

    var _super = _createSuper(StaffNotes);

    function StaffNotes() {
      _classCallCheck(this, StaffNotes);

      return _super.apply(this, arguments);
    }

    _createClass(StaffNotes, [{
      key: "render",
      value: function render() {
        var _this$convertToSongNo = this.convertToSongNotes(),
            _this$convertToSongNo2 = _slicedToArray(_this$convertToSongNo, 2),
            songNotes = _this$convertToSongNo2[0],
            noteClasses = _this$convertToSongNo2[1];

        var heldSongNotes = this.convertHeldToSongNotes();
        var count = Math.abs(this.props.keySignature.count);
        var keySignatureWidth = count > 0 ? count * 20 + 20 : 0;
        return /*#__PURE__*/React.createElement("div", {
          ref: "notes",
          className: this.classNames()
        }, /*#__PURE__*/React.createElement(_ledger_lines["default"], {
          key: "ledger_lines",
          offsetLeft: keySignatureWidth,
          upperRow: this.props.upperRow,
          lowerRow: this.props.lowerRow,
          notes: songNotes.concat(heldSongNotes),
          pixelsPerBeat: this.props.noteWidth
        }), /*#__PURE__*/React.createElement(_whole_notes["default"], {
          key: "notes",
          offsetLeft: keySignatureWidth,
          keySignature: this.props.keySignature,
          upperRow: this.props.upperRow,
          lowerRow: this.props.lowerRow,
          notes: songNotes,
          noteClasses: noteClasses,
          pixelsPerBeat: this.props.noteWidth
        }), /*#__PURE__*/React.createElement(_whole_notes["default"], {
          key: "held_notes",
          offsetLeft: keySignatureWidth,
          keySignature: this.props.keySignature,
          upperRow: this.props.upperRow,
          lowerRow: this.props.lowerRow,
          notes: heldSongNotes,
          staticNoteClasses: "held",
          pixelsPerBeat: this.props.noteWidth
        }), this.renderAnnotations());
      }
    }, {
      key: "convertHeldToSongNotes",
      value: function convertHeldToSongNotes() {
        var _this = this;

        if (!this.props.heldNotes) {
          return [];
        }

        var notes = new _song_note_list.SongNoteList();
        var dur = 40 / this.props.noteWidth; // notes that are held down but aren't correct

        Object.keys(this.props.heldNotes).filter(function (note) {
          return !_this.props.notes.inHead(note);
        }).forEach(function (note, idx) {
          notes.push(new _song_note_list.SongNote(note, 0, dur));
        });
        return this.filterVisibleNotes(notes);
      } // filter notes so only the ones visible for this staff returned

    }, {
      key: "filterVisibleNotes",
      value: function filterVisibleNotes(notes) {
        var _this2 = this;

        if (notes.length == 0) {
          return notes;
        }

        if (!this.props.filterPitch) {
          return notes;
        }

        var out = new _song_note_list.SongNoteList();
        notes.forEach(function (n) {
          var pitch = (0, _music.parseNote)(n.note);

          if (_this2.props.filterPitch(pitch)) {
            out.push(n);
          }
        });
        return out;
      }
    }, {
      key: "convertToSongNotes",
      value: function convertToSongNotes() {
        var _this3 = this;

        var notes = new _song_note_list.SongNoteList();
        var beat = 0;
        var dur = 40 / this.props.noteWidth;
        var noteClasses = {};

        var toRow = function toRow(n) {
          return (0, _music.noteStaffOffset)(_this3.props.keySignature.enharmonic(n));
        };

        var appendClass = function appendClass(note, cls) {
          if (noteClasses[note.id]) {
            noteClasses[note.id].push(cls);
          } else {
            noteClasses[note.id] = [cls];
          }
        };

        this.props.notes.forEach(function (column, columnIdx) {
          var withClasses = function withClasses(note) {
            if (columnIdx == 0) {
              if (_this3.props.noteShaking) {
                appendClass(note, "noteshake");
              }

              if (_this3.props.heldNotes[note.note]) {
                appendClass(note, "held");
              }
            }

            return note;
          };

          if (Array.isArray(column)) {
            var tuples = column.map(function (n) {
              return [toRow(n), n];
            });
            var lastRow = null;
            var offset = 0;
            tuples.forEach(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  row = _ref2[0],
                  n = _ref2[1];

              if (lastRow && Math.abs(lastRow - row) == 1) {
                if (offset == 0) {
                  offset = 1;
                } else {
                  offset = 0;
                }
              } else {
                offset = 0;
              }

              var sNote = new _song_note_list.SongNote(n, beat, dur);

              if (offset == 1) {
                appendClass(sNote, "group_offset");
              }

              lastRow = row;
              notes.push(withClasses(sNote));
            });
          } else {
            notes.push(withClasses(new _song_note_list.SongNote(column, beat, dur)));
          }

          beat += 1;
        });
        return [this.filterVisibleNotes(notes), noteClasses];
      }
    }, {
      key: "classNames",
      value: function classNames() {
        return "staff_notes";
      }
    }, {
      key: "setOffset",
      value: function setOffset(amount) {
        this.refs.notes.style.transform = "translate3d(".concat(amount, "px, 0, 0)");
      }
    }, {
      key: "renderAnnotations",
      value: function renderAnnotations() {
        var _this4 = this;

        if (this.props.showAnnotations === false) {
          return null;
        }

        var out = [];
        this.props.notes.forEach(function (column, idx) {
          var annotation = [];

          if (column.annotation) {
            annotation.push(column.annotation);
          }

          if (_this4.props.showLabels === true) {
            if (Array.isArray(column) && column.length > 0) {
              annotation.push(column.map(_music.fixNoteOctaveNum).join(' '));
            }
          }

          if (annotation.length > 0) {
            var style = {
              top: "-60%",
              left: "".concat(idx * _this4.props.noteWidth, "px")
            };
            out.push( /*#__PURE__*/React.createElement("div", {
              style: style,
              className: "annotation",
              key: "annotation-".concat(idx)
            }, annotation.map(function (i) {
              return /*#__PURE__*/React.createElement("span", null, i);
            }).reduce(function (prev, curr) {
              return [prev, /*#__PURE__*/React.createElement("br", null), curr];
            })));
          }
        });
        return out;
      }
    }]);

    return StaffNotes;
  }(React.Component);

  _exports["default"] = StaffNotes;

  _defineProperty(StaffNotes, "propTypes", {
    keySignature: types.object.isRequired,
    noteWidth: types.number.isRequired,
    notes: types.array.isRequired,
    upperRow: types.number.isRequired,
    lowerRow: types.number.isRequired,
    heldNotes: types.object.isRequired,
    noteShaking: types.bool,
    showLabels: types.bool
  });
});

define("st/components/staff_song_notes", ["exports", "react", "react-dom", "lib", "st/components/staff_notes", "st/music", "prop-types", "st/components/staff/ledger_lines", "st/components/staff/bar_notes", "st/song_note_list"], function (_exports, React, ReactDOM, _lib, _staff_notes, _music, types, _ledger_lines, _bar_notes, _song_note_list) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);
  ReactDOM = _interopRequireWildcard(ReactDOM);
  _staff_notes = _interopRequireDefault(_staff_notes);
  types = _interopRequireWildcard(types);
  _ledger_lines = _interopRequireDefault(_ledger_lines);
  _bar_notes = _interopRequireDefault(_bar_notes);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var MeasureLines = /*#__PURE__*/function (_React$PureComponent) {
    _inherits(MeasureLines, _React$PureComponent);

    var _super = _createSuper(MeasureLines);

    function MeasureLines() {
      _classCallCheck(this, MeasureLines);

      return _super.apply(this, arguments);
    }

    _createClass(MeasureLines, [{
      key: "render",
      // how many beats each chunk of rendering is
      value: function render() {
        var props = this.props;
        var beatsPerMeasure = 4;

        if (props.notes.metadata) {
          beatsPerMeasure = props.notes.metadata.beatsPerMeasure || beatsPerMeasure;
        }

        var stop = props.notes.getStopInBeats();
        var measures = Math.ceil(stop / beatsPerMeasure);
        var lines = [];
        var pixelsPerBeat = props.pixelsPerBeat;
        var measureLeft = Math.max(0, Math.floor(this.props.renderLeft / beatsPerMeasure));
        var measureRight = Math.min(measures, Math.ceil(this.props.renderRight / beatsPerMeasure));
        var offsetLeft = this.props.offsetLeft;

        for (var m = measureLeft; m <= measureRight; m++) {
          var fromLeft = m * beatsPerMeasure * pixelsPerBeat;
          lines.push( /*#__PURE__*/React.createElement("div", {
            style: {
              left: "".concat(offsetLeft + fromLeft - 2, "px")
            },
            "data-label": m + 1,
            key: "measure-".concat(m),
            className: "measure_line"
          }));
        }

        return lines;
      }
    }]);

    return MeasureLines;
  }(React.PureComponent);

  _defineProperty(MeasureLines, "bucketSize", 4);

  _defineProperty(MeasureLines, "defaultProps", {
    offsetLeft: 0
  });

  _defineProperty(MeasureLines, "propTypes", {
    pixelsPerBeat: types.number.isRequired,
    notes: types.array.isRequired,
    renderLeft: types.number.isRequired,
    renderRight: types.number.isRequired,
    offsetLeft: types.number.isRequired
  });

  var StaffSongNotes = /*#__PURE__*/function (_React$PureComponent2) {
    _inherits(StaffSongNotes, _React$PureComponent2);

    var _super2 = _createSuper(StaffSongNotes);

    function StaffSongNotes(props) {
      var _this;

      _classCallCheck(this, StaffSongNotes);

      _this = _super2.call(this, props);
      _this.state = {};
      _this.notesRef = React.createRef();
      return _this;
    }

    _createClass(StaffSongNotes, [{
      key: "classNames",
      value: function classNames() {
        return "staff_notes staff_song_notes";
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        this.resizeHandler = function () {
          var el = ReactDOM.findDOMNode(_this2);
          var rect = el.getBoundingClientRect();

          if (rect.width != _this2.state.width) {
            _this2.setState({
              width: rect.width
            });

            _this2.refreshRenderBuckets(rect.width);
          }
        };

        this.resizeHandler();
        window.addEventListener("resize", this.resizeHandler);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.resizeHandler) {
          window.removeEventListener("resize", this.resizeHandler);
        }
      }
    }, {
      key: "render",
      value: function render() {
        if (!this.state.width) {
          return /*#__PURE__*/React.createElement("div", null);
        }

        var count = Math.abs(this.props.keySignature.count);
        var offsetLeft = 0;
        var renderLeft = this.state.chunkLeft * MeasureLines.bucketSize;
        var renderRight = this.state.chunkRight * MeasureLines.bucketSize;
        var notes = this.state.filteredNotes.filter(function (note) {
          var left = note.getStart();
          var right = note.getStop();
          return right > renderLeft && left <= renderRight;
        });
        var style = {};

        if (this.offset) {
          style.transform = "translate3d(".concat(this.offset, "px, 0, 0)");
        }

        return /*#__PURE__*/React.createElement("div", {
          style: style,
          className: this.classNames()
        }, /*#__PURE__*/React.createElement(MeasureLines, {
          notes: this.props.notes,
          renderLeft: Math.max(0, renderLeft),
          renderRight: renderRight,
          pixelsPerBeat: this.props.pixelsPerBeat,
          offsetLeft: offsetLeft
        }), /*#__PURE__*/React.createElement(_ledger_lines["default"], {
          key: "ledger_lines",
          upperRow: this.props.upperRow,
          lowerRow: this.props.lowerRow,
          notes: notes,
          pixelsPerBeat: this.props.pixelsPerBeat,
          offsetLeft: offsetLeft
        }), /*#__PURE__*/React.createElement(_bar_notes["default"], {
          key: "bar_notes",
          heldNotes: this.props.heldNotes,
          keySignature: this.props.keySignature,
          upperRow: this.props.upperRow,
          lowerRow: this.props.lowerRow,
          loopLeft: this.props.loopLeft,
          loopRight: this.props.loopRight,
          notes: notes,
          pixelsPerBeat: this.props.pixelsPerBeat,
          offsetLeft: offsetLeft
        }));
      }
    }, {
      key: "refreshRenderBuckets",
      value: function refreshRenderBuckets() {
        var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.width;

        if (!width) {
          return;
        }

        var offset = this.offset ? -this.offset : 0;
        var beatLeft = -4 + offset / this.props.pixelsPerBeat;
        var beatRight = (width + offset) / this.props.pixelsPerBeat;
        var chunkLeft = Math.floor(beatLeft / MeasureLines.bucketSize);
        var chunkRight = Math.floor(beatRight / MeasureLines.bucketSize) + 1;

        if (this.state.chunkLeft != chunkLeft || this.state.chunkRight != chunkRight) {
          this.setState({
            chunkLeft: chunkLeft,
            chunkRight: chunkRight
          });
        }
      }
    }, {
      key: "setOffset",
      value: function setOffset(amount) {
        this.offset = amount;
        var el = ReactDOM.findDOMNode(this);
        el.style.transform = "translate3d(".concat(amount, "px, 0, 0)");
        this.refreshRenderBuckets();
      }
    }], [{
      key: "filterNotes",
      value: function filterNotes(notes, filter) {
        if (notes.length == 0) {
          return notes;
        }

        if (!filter) {
          return notes;
        }

        var out = new _song_note_list.SongNoteList();
        notes.forEach(function (n) {
          var pitch = (0, _music.parseNote)(n.note);

          if (filter(pitch)) {
            out.push(n);
          }
        });
        return out;
      }
    }, {
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(props, state) {
        if (props.notes != state.notes || props.filterPitch != state.filterPitch) {
          return {
            notes: props.notes,
            filterPitch: props.filterPitch,
            filteredNotes: StaffSongNotes.filterNotes(props.notes, props.filterPitch)
          };
        }

        return null;
      }
    }]);

    return StaffSongNotes;
  }(React.PureComponent);

  _exports["default"] = StaffSongNotes;

  _defineProperty(StaffSongNotes, "defaultPixelsPerBeat", 100);

  _defineProperty(StaffSongNotes, "propTypes", {
    keySignature: types.object.isRequired,
    notes: types.array.isRequired,
    loopLeft: types.number,
    loopRight: types.number,
    pixelsPerBeat: types.number.isRequired,
    heldNotes: types.object.isRequired
  });
});

define("st/components/staves", ["exports", "react", "lib", "prop-types", "st/note_list", "st/song_note_list", "st/chord_list", "st/music", "st/components/staff_notes", "st/components/staff_song_notes"], function (_exports, React, _lib, types, _note_list, _song_note_list, _chord_list, _music, _staff_notes, _staff_song_notes) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.ChordStaff = _exports.GrandStaff = _exports.FStaff = _exports.GStaff = _exports.Staff = void 0;
  React = _interopRequireWildcard(React);
  types = _interopRequireWildcard(types);
  _note_list = _interopRequireDefault(_note_list);
  _chord_list = _interopRequireDefault(_chord_list);
  _staff_notes = _interopRequireDefault(_staff_notes);
  _staff_song_notes = _interopRequireDefault(_staff_song_notes);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var DEFAULT_HEIGHT = 120;
  var DEFAULT_MARGIN = 60;

  var Staff = /*#__PURE__*/function (_React$Component) {
    _inherits(Staff, _React$Component);

    var _super = _createSuper(Staff);

    function Staff() {
      _classCallCheck(this, Staff);

      return _super.apply(this, arguments);
    }

    _createClass(Staff, [{
      key: "setOffset",
      // skips react for performance
      value: function setOffset(amount) {
        var scale = this.props.scale || 1;
        var noteWidth = this.props.noteWidth || 1;
        this.refs.notes.setOffset(amount * noteWidth * scale);
      } // find the min/max note range in rows

    }, {
      key: "notesRowRange",
      value: function notesRowRange() {
        var _this = this;

        var min, max;

        if (this.props.notes instanceof _song_note_list.SongNoteList) {
          this.props.notes.forEach(function (note) {
            if (_this.props.filterPitch) {
              var pitch = (0, _music.parseNote)(note.note);

              if (!_this.props.filterPitch(pitch)) {
                return;
              }
            }

            var row = (0, _music.noteStaffOffset)(note.note);

            if (min == null || row < min) {
              min = row;
            }

            if (max == null || row > max) {
              max = row;
            }
          });
        }

        return [min, max];
      }
    }, {
      key: "render",
      value: function render() {
        var staffNotes = null;

        if (this.props.notes instanceof _note_list["default"]) {
          var scale = this.props.scale || 1;
          var noteWidth = Math.floor(this.props.noteWidth * scale);
          staffNotes = /*#__PURE__*/React.createElement(_staff_notes["default"], _extends({
            ref: "notes"
          }, this.props, {
            noteWidth: noteWidth,
            showLabels: this.props.showNotesLabel
          }));
        }

        if (this.props.notes instanceof _song_note_list.SongNoteList) {
          staffNotes = /*#__PURE__*/React.createElement(_staff_song_notes["default"], _extends({
            ref: "notes"
          }, this.props));
        }

        if (!staffNotes) {
          return /*#__PURE__*/React.createElement("div", {
            "data-error": "Missing note list"
          });
        }

        var height = DEFAULT_HEIGHT * (this.props.scale || 1);
        var noteHeight = height * 0.2; // height of 1 bar

        var _this$notesRowRange = this.notesRowRange(),
            _this$notesRowRange2 = _slicedToArray(_this$notesRowRange, 2),
            minRow = _this$notesRowRange2[0],
            maxRow = _this$notesRowRange2[1];

        var marginTop, marginBottom;

        if (minRow != null && minRow < this.props.lowerRow) {
          marginBottom = noteHeight * (this.props.lowerRow - minRow) / 2 + noteHeight;

          if (marginBottom < DEFAULT_MARGIN) {
            marginBottom = null;
          }
        }

        if (maxRow != null && maxRow > this.props.upperRow) {
          marginTop = noteHeight * (maxRow - this.props.upperRow) / 2 + noteHeight;

          if (marginTop < DEFAULT_MARGIN) {
            marginTop = null;
          }
        }

        return /*#__PURE__*/React.createElement("div", {
          style: {
            height: "".concat(height, "px"),
            marginTop: marginTop ? "".concat(marginTop, "px") : null,
            marginBottom: marginBottom ? "".concat(marginBottom, "px") : null
          },
          className: (0, _lib.classNames)("staff", this.props.staffClass)
        }, /*#__PURE__*/React.createElement("img", {
          className: "cleff",
          src: this.props.cleffImage
        }), /*#__PURE__*/React.createElement("div", {
          className: "lines"
        }, /*#__PURE__*/React.createElement("div", {
          className: "line1 line"
        }), /*#__PURE__*/React.createElement("div", {
          className: "line2 line"
        }), /*#__PURE__*/React.createElement("div", {
          className: "line3 line"
        }), /*#__PURE__*/React.createElement("div", {
          className: "line4 line"
        }), /*#__PURE__*/React.createElement("div", {
          className: "line5 line"
        })), this.renderKeySignature(), staffNotes, this.props.children);
      }
    }, {
      key: "renderKeySignature",
      value: function renderKeySignature() {
        var keySignature = this.props.keySignature;

        if (!keySignature) {
          return;
        }

        if (keySignature.count == 0) {
          return;
        }

        var ksCenter = (0, _music.parseNote)(this.props.keySignatureCenter);

        if (keySignature.isFlat()) {
          ksCenter -= 2;
        }

        var sigNotes = keySignature.notesInRange(ksCenter - 10, ksCenter + 2);
        var topOffset = this.props.upperRow;
        var sigClass = keySignature.isFlat() ? "flat" : "sharp";
        var src = keySignature.isFlat() ? "/static/svg/flat.svg" : "/static/svg/sharp.svg";
        return /*#__PURE__*/React.createElement("div", {
          className: "key_signature"
        }, sigNotes.map(function (n, i) {
          var fromTop = topOffset - (0, _music.noteStaffOffset)(n);
          var style = {
            top: "".concat(Math.floor(fromTop * 25 / 2), "%"),
            left: "".concat(i * 20, "px")
          };
          return /*#__PURE__*/React.createElement("img", {
            key: "sig-".concat(n),
            "data-note": n,
            style: style,
            className: (0, _lib.classNames)("accidental", sigClass),
            src: src
          });
        }));
      }
    }]);

    return Staff;
  }(React.Component);

  _exports.Staff = Staff;

  _defineProperty(Staff, "propTypes", {
    // rendering props
    upperRow: types.number.isRequired,
    lowerRow: types.number.isRequired,
    cleffImage: types.string.isRequired,
    staffClass: types.string.isRequired,
    keySignature: types.object,
    // state props
    notes: types.array.isRequired,
    heldNotes: types.object.isRequired,
    inGrand: types.bool,
    scale: types.number,
    showNotesLabel: types.bool
  });

  var GStaff = /*#__PURE__*/function (_Staff) {
    _inherits(GStaff, _Staff);

    var _super2 = _createSuper(GStaff);

    function GStaff() {
      _classCallCheck(this, GStaff);

      return _super2.apply(this, arguments);
    }

    return GStaff;
  }(Staff);

  _exports.GStaff = GStaff;

  _defineProperty(GStaff, "defaultProps", {
    // where the key signature is centered around
    keySignatureCenter: "F6",
    upperRow: 45,
    lowerRow: 37,
    cleffImage: "/static/svg/clefs.G.svg",
    staffClass: "g_staff"
  });

  var FStaff = /*#__PURE__*/function (_Staff2) {
    _inherits(FStaff, _Staff2);

    var _super3 = _createSuper(FStaff);

    function FStaff() {
      _classCallCheck(this, FStaff);

      return _super3.apply(this, arguments);
    }

    return FStaff;
  }(Staff);

  _exports.FStaff = FStaff;

  _defineProperty(FStaff, "defaultProps", {
    keySignatureCenter: "F4",
    upperRow: 33,
    lowerRow: 25,
    cleffImage: "/static/svg/clefs.F_change.svg",
    staffClass: "f_staff"
  });

  var GrandStaff = /*#__PURE__*/function (_React$Component2) {
    _inherits(GrandStaff, _React$Component2);

    var _super4 = _createSuper(GrandStaff);

    function GrandStaff(props) {
      var _this2;

      _classCallCheck(this, GrandStaff);

      _this2 = _super4.call(this, props);
      _this2.gstaff = React.createRef();
      _this2.fstaff = React.createRef();
      _this2.filterGStaff = _this2.filterGStaff.bind(_assertThisInitialized(_this2));
      _this2.filterFStaff = _this2.filterFStaff.bind(_assertThisInitialized(_this2));
      return _this2;
    } // skips react for performance


    _createClass(GrandStaff, [{
      key: "setOffset",
      value: function setOffset(amount) {
        if (this.gstaff.current) {
          this.gstaff.current.setOffset(amount);
        }

        if (this.fstaff.current) {
          this.fstaff.current.setOffset(amount);
        }
      }
    }, {
      key: "filterGStaff",
      value: function filterGStaff(pitch) {
        if (pitch < _music.MIDDLE_C_PITCH) {
          return false;
        }

        return true;
      }
    }, {
      key: "filterFStaff",
      value: function filterFStaff(pitch) {
        if (pitch >= _music.MIDDLE_C_PITCH) {
          return false;
        }

        return true;
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("div", {
          className: "grand_staff"
        }, /*#__PURE__*/React.createElement(GStaff, _extends({
          ref: this.gstaff,
          filterPitch: this.filterGStaff
        }, this.props)), /*#__PURE__*/React.createElement(FStaff, _extends({
          ref: this.fstaff,
          filterPitch: this.filterFStaff,
          showAnnotations: false
        }, this.props)));
      }
    }]);

    return GrandStaff;
  }(React.Component);

  _exports.GrandStaff = GrandStaff;

  var ChordStaff = /*#__PURE__*/function (_React$Component3) {
    _inherits(ChordStaff, _React$Component3);

    var _super5 = _createSuper(ChordStaff);

    function ChordStaff() {
      _classCallCheck(this, ChordStaff);

      return _super5.apply(this, arguments);
    }

    _createClass(ChordStaff, [{
      key: "setOffset",
      value: function setOffset(amount) {
        this.refs.chordScrolling.style.transform = "translate3d(".concat(amount, "px, 0, 0)");
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        if (!(this.props.chords instanceof _chord_list["default"])) {
          return /*#__PURE__*/React.createElement("div", null);
        }

        var touchedNotes = Object.keys(this.props.touchedNotes);
        return /*#__PURE__*/React.createElement("div", {
          className: "chord_staff"
        }, /*#__PURE__*/React.createElement("div", {
          className: "chord_scrolling",
          ref: "chordScrolling"
        }, this.props.chords.map(function (c, i) {
          var pressedIndicator;

          if (i == 0 && touchedNotes.length) {
            pressedIndicator = /*#__PURE__*/React.createElement("span", {
              className: "touched"
            }, touchedNotes.map(function (n) {
              if (c.containsNote(n)) {
                return /*#__PURE__*/React.createElement("span", {
                  key: "right-".concat(n),
                  className: "right"
                }, "\u2022");
              } else {
                return /*#__PURE__*/React.createElement("span", {
                  key: "wrong-".concat(n),
                  className: "wrong"
                }, "\xD7");
              }
            }));
          }

          return /*#__PURE__*/React.createElement("div", {
            key: "".concat(c, "-").concat(i),
            className: (0, _lib.classNames)("chord", {
              errorshake: _this3.props.noteShaking && i == 0
            })
          }, c.toString(), pressedIndicator);
        })));
      }
    }]);

    return ChordStaff;
  }(React.Component);

  _exports.ChordStaff = ChordStaff;

  _defineProperty(ChordStaff, "propTypes", {
    chords: types.array
  });
});

define("st/components/tabs", ["exports", "react", "prop-types", "lib"], function (_exports, React, types, _lib) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);
  types = _interopRequireWildcard(types);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var Tabs = /*#__PURE__*/function (_React$Component) {
    _inherits(Tabs, _React$Component);

    var _super = _createSuper(Tabs);

    function Tabs() {
      _classCallCheck(this, Tabs);

      return _super.apply(this, arguments);
    }

    _createClass(Tabs, [{
      key: "currentTab",
      value: function currentTab() {
        var _this = this;

        var found;

        if (this.props.currentTab) {
          found = this.props.tabs.find(function (opt) {
            return opt.name == _this.props.currentTab;
          });
        }

        return found;
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var currentTab = this.currentTab();
        return /*#__PURE__*/React.createElement("ul", {
          className: "tabs_component"
        }, this.props.tabs.map(function (opt, idx) {
          return /*#__PURE__*/React.createElement("li", {
            key: "tab-".concat(idx)
          }, /*#__PURE__*/React.createElement("button", {
            type: "button",
            onClick: function onClick(e) {
              if (_this2.props.onChangeTab) {
                _this2.props.onChangeTab(opt);
              }
            },
            className: (0, _lib.classNames)("tab_button", {
              active: currentTab == opt
            })
          }, opt.label || opt.name));
        }));
      }
    }]);

    return Tabs;
  }(React.Component);

  _exports["default"] = Tabs;

  _defineProperty(Tabs, "propTypes", {
    currentTab: types.string,
    onChangeTab: types.func,
    tabs: types.array.isRequired
  });
});

define("st/components/ear_training/melody_playback_exercise", ["exports", "react", "lib", "prop-types", "st/note_list", "st/components/slider", "st/components/select", "st/music", "st/midi", "st/generators", "st/data", "st/components/keyboard", "st/globals"], function (_exports, React, _lib, types, _note_list, _slider, _select, _music, _midi, _generators, _data, _keyboard, _globals) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);
  types = _interopRequireWildcard(types);
  _note_list = _interopRequireDefault(_note_list);
  _slider = _interopRequireDefault(_slider);
  _select = _interopRequireDefault(_select);
  _keyboard = _interopRequireDefault(_keyboard);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var MelodyPlaybackExercise = /*#__PURE__*/function (_React$Component) {
    _inherits(MelodyPlaybackExercise, _React$Component);

    var _super = _createSuper(MelodyPlaybackExercise);

    function MelodyPlaybackExercise(props) {
      var _this;

      _classCallCheck(this, MelodyPlaybackExercise);

      _this = _super.call(this, props);

      _this.setNotesPerMelody = function (value) {
        return _this.setState({
          notesPerMelody: value
        });
      };

      _this.state = {
        noteHistory: new _note_list["default"]([]),
        touchedNotes: {},
        keyboardHeldNotes: {},
        notesPerMelody: 3,
        notesPerColumn: 1,
        continuousMelody: false,
        melodyDirection: "any",
        melodyRange: ["C4", "C6"],
        melodyScaleRoot: "random",
        rand: new _lib.MersenneTwister(),
        successes: 0
      };
      _this.keyboardPressNote = _this.keyboardPressNote.bind(_assertThisInitialized(_this));
      _this.keyboardReleaseNote = _this.keyboardReleaseNote.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(MelodyPlaybackExercise, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        (0, _globals.setTitle)("Play Back Melodies Ear Training Exercise");
      }
    }, {
      key: "midiOutputs",
      value: function midiOutputs() {
        if (!this.props.midi) return [];
        return _toConsumableArray(this.props.midi.outputs.values());
      }
    }, {
      key: "onMidiMessage",
      value: function onMidiMessage(message) {
        var parsed = (0, _midi.parseMidiMessage)(message);

        if (!parsed) {
          return;
        }

        var _parsed = _slicedToArray(parsed, 2),
            e = _parsed[0],
            note = _parsed[1];

        if (e == "dataEntry") {
          if (!this.state.playing) {
            // use the pitch wheel to trigger new melody or replay
            if (this.state.currentNotes) {
              this.playMelody();
            } else {
              this.pushMelody();
            }
          }
        }

        if (e == "noteOn") {
          this.pressNote(note);
        }

        if (e == "noteOff") {
          this.releaseNote(note);
        }
      } // see if the pressed notes buffer matches the melody

    }, {
      key: "checkForMatch",
      value: function checkForMatch() {
        var _this2 = this;

        if (!this.state.currentNotes || !this.state.noteHistory) {
          return;
        }

        if (this.state.noteHistory.length < this.state.currentNotes.length) {
          return;
        }

        while (this.state.noteHistory.length > this.state.currentNotes.length) {
          this.state.noteHistory.shift();
        }

        if (this.state.noteHistory.toNoteString() == this.state.currentNotes.toNoteString()) {
          this.setState({
            noteHistory: new _note_list["default"]([]),
            locked: true,
            successes: this.state.successes + 1,
            statusMessage: "You got it"
          });
          setTimeout(function () {
            _this2.setState({
              locked: false,
              statusMessage: null
            });

            _this2.pushMelody();
          }, 1000);
        }
      }
    }, {
      key: "playMelody",
      value: function playMelody() {
        var _this3 = this;

        var notes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.currentNotes;

        // need to add cancel
        if (this.state.playing) {
          console.warn("aborting playing, something is already playing");
          return;
        }

        this.setState({
          playing: true
        });
        this.props.midiOutput.playNoteList(notes).then(function () {
          _this3.setState({
            playing: false
          });
        });
      }
    }, {
      key: "pushMelody",
      value: function pushMelody() {
        var _MajorScale,
            _this4 = this;

        var scaleRoot = null;

        if (this.state.melodyScaleRoot == "random") {
          scaleRoot = MelodyPlaybackExercise.ROOTS[this.state.rand["int"]() % MelodyPlaybackExercise.ROOTS.length];
        } else {
          scaleRoot = this.state.melodyScaleRoot;
        }

        var notes = (_MajorScale = new _music.MajorScale(scaleRoot)).getLooseRange.apply(_MajorScale, _toConsumableArray(this.state.melodyRange));

        var generator;

        if (this.state.continuousMelody && this.currentNotes) {
          // reuse the same generator so the melody is smooth
          generator = this.state.currentNotes.generator;
          generator.notes = notes; // replace notes with the new set generated

          generator.notesPerColumn = this.state.notesPerColumn;
        } else {
          generator = new _generators.RandomNotes(notes, {
            smoothness: 6,
            notes: this.state.notesPerColumn,
            hands: 1
          });
        } // create a test melody


        var list = new _note_list["default"]([], {
          generator: generator
        });
        list.fillBuffer(this.state.notesPerMelody);

        if (this.state.melodyDirection == "asc") {
          console.warn("sorted asc");
          list.sort(function (rowA, rowB) {
            return (0, _music.parseNote)(rowA[0]) - (0, _music.parseNote)(rowB[0]);
          });
        }

        if (this.state.melodyDirection == "desc") {
          console.warn("sorted desc");
          list.sort(function (rowA, rowB) {
            return (0, _music.parseNote)(rowB[0]) - (0, _music.parseNote)(rowA[0]);
          });
        }

        this.props.midiOutput.playNoteList(list).then(function () {
          _this4.setState({
            playing: false
          });
        });
        this.setState({
          playing: true,
          currentNotes: list
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this5 = this;

        var locked = this.state.playing || this.state.locked || false;
        var repeatButton;

        if (this.state.currentNotes) {
          repeatButton = /*#__PURE__*/React.createElement("button", {
            disabled: locked,
            onClick: function onClick(e) {
              e.preventDefault();

              _this5.playMelody();
            }
          }, "Repeat melody");
        }

        var ranges = [{
          name: "singing",
          range: ["C4", "C6"]
        }].concat(_toConsumableArray(_data.STAVES.filter(function (s) {
          return s.mode == "notes";
        })));
        var page = /*#__PURE__*/React.createElement("div", {
          className: "page_container"
        }, /*#__PURE__*/React.createElement("details", {
          className: "instructions"
        }, /*#__PURE__*/React.createElement("summary", null, "How does this work?"), /*#__PURE__*/React.createElement("p", null, "Click ", /*#__PURE__*/React.createElement("em", null, "New melody"), " to listen to a randomly generated melody. Play it back using the on-screen keyboard or your MIDI input device to complete the exercise. You'll be given a new melody after figuring out what you heard. You can trigger current the melody to replay by interacting with any of the sliders or pedals on your MIDI controller.")), /*#__PURE__*/React.createElement("div", {
          className: "stat_controls"
        }, repeatButton, /*#__PURE__*/React.createElement("button", {
          disabled: locked,
          onClick: function onClick(e) {
            e.preventDefault();

            _this5.pushMelody();
          }
        }, "New melody"), /*#__PURE__*/React.createElement("span", null, this.state.statusMessage), /*#__PURE__*/React.createElement("div", {
          className: "stats_row"
        }, /*#__PURE__*/React.createElement("div", {
          className: "stat_container"
        }, /*#__PURE__*/React.createElement("div", {
          className: "value"
        }, this.state.successes), /*#__PURE__*/React.createElement("div", {
          className: "label"
        }, "Melodies")))), /*#__PURE__*/React.createElement("fieldset", null, /*#__PURE__*/React.createElement("legend", null, "Notes per melody"), /*#__PURE__*/React.createElement(_slider["default"], {
          min: 2,
          max: 8,
          onChange: this.setNotesPerMelody,
          value: this.state.notesPerMelody
        }), /*#__PURE__*/React.createElement("span", null, this.state.notesPerMelody), /*#__PURE__*/React.createElement("span", {
          className: "spacer"
        }), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
          type: "checkbox",
          checked: this.state.continuousMelody,
          onChange: function onChange(e) {
            _this5.setState({
              continuousMelody: e.target.checked
            });
          }
        }), /*#__PURE__*/React.createElement("span", {
          className: "label"
        }, "Continuous melody"))), /*#__PURE__*/React.createElement("fieldset", null, /*#__PURE__*/React.createElement("legend", null, "Notes per column"), /*#__PURE__*/React.createElement(_slider["default"], {
          min: 1,
          max: 4,
          onChange: function onChange(value) {
            _this5.setState({
              notesPerColumn: value
            });
          },
          value: this.state.notesPerColumn
        }), /*#__PURE__*/React.createElement("span", null, this.state.notesPerColumn)), /*#__PURE__*/React.createElement("fieldset", {
          className: "range_picker"
        }, /*#__PURE__*/React.createElement("legend", null, "Range"), ranges.map(function (r) {
          return /*#__PURE__*/React.createElement("button", {
            className: (0, _lib.classNames)({
              active: r.range.join(",") == _this5.state.melodyRange.join(",")
            }),
            onClick: function onClick(e) {
              e.preventDefault();

              _this5.setState({
                melodyRange: r.range
              });
            },
            key: r.name
          }, r.name);
        })), /*#__PURE__*/React.createElement("fieldset", null, /*#__PURE__*/React.createElement("legend", null, "Direction"), /*#__PURE__*/React.createElement(_select["default"], {
          value: this.state.melodyDirection,
          onChange: function onChange(val) {
            _this5.setState({
              melodyDirection: val
            });
          },
          options: [{
            name: "Any",
            value: "any"
          }, {
            name: "Ascending",
            value: "asc"
          }, {
            name: "Descending",
            value: "desc"
          }]
        })), /*#__PURE__*/React.createElement("fieldset", null, /*#__PURE__*/React.createElement("legend", null, "Scale"), this.renderScalePicker()));
        return /*#__PURE__*/React.createElement("div", {
          className: "melody_playback_exercise"
        }, /*#__PURE__*/React.createElement("div", {
          className: "exercise_header"
        }, this.props.toggleSidebarButton, /*#__PURE__*/React.createElement("h1", {
          className: "exercise_label"
        }, "Melody Playback")), page, this.renderKeyboard());
      }
    }, {
      key: "renderScalePicker",
      value: function renderScalePicker() {
        var _this6 = this;

        if (!this.props.midi) {
          return;
        }

        return /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement(_select["default"], {
          value: this.state.melodyScaleRoot,
          onChange: function onChange(val) {
            return _this6.setState({
              melodyScaleRoot: val
            });
          },
          options: [{
            name: "Random",
            value: "random"
          }].concat(_toConsumableArray(MelodyPlaybackExercise.ROOTS.map(function (r) {
            return {
              name: "".concat(r, " major"),
              value: r
            };
          })))
        }));
      }
    }, {
      key: "keyboardPressNote",
      value: function keyboardPressNote(note) {
        if (this.props.midiOutput) {
          this.props.midiOutput.noteOn((0, _music.parseNote)(note), 100);
        }

        this.pressNote(note);
      }
    }, {
      key: "keyboardReleaseNote",
      value: function keyboardReleaseNote(note) {
        if (this.props.midiOutput) {
          this.props.midiOutput.noteOff((0, _music.parseNote)(note));
        }

        this.releaseNote(note);
      }
    }, {
      key: "pressNote",
      value: function pressNote(note) {
        this.setState({
          keyboardHeldNotes: _objectSpread({}, this.state.keyboardHeldNotes, _defineProperty({}, note, true))
        });
        this.pressedNotes = this.pressedNotes || {};
        var newColumn = Object.keys(this.pressedNotes) == 0;

        if (newColumn) {
          this.state.noteHistory.push([note]);
        } else {
          this.state.noteHistory[this.state.noteHistory.length - 1].push(note);
        }

        this.pressedNotes[note] = this.pressedNotes[note] || 0;
        this.pressedNotes[note] += 1;
      }
    }, {
      key: "releaseNote",
      value: function releaseNote(note) {
        if (!this.pressedNotes) {
          return;
        }

        if (!this.pressedNotes[note]) {
          return;
        }

        this.pressedNotes[note] -= 1;

        if (this.pressedNotes[note] < 1) {
          delete this.pressedNotes[note];
        }

        if (Object.keys(this.pressedNotes).length == 0) {
          this.checkForMatch();
        }

        this.setState({
          keyboardHeldNotes: _objectSpread({}, this.state.keyboardHeldNotes, _defineProperty({}, note, false))
        });
      }
    }, {
      key: "renderKeyboard",
      value: function renderKeyboard() {
        return /*#__PURE__*/React.createElement(_keyboard["default"], {
          lower: this.state.melodyRange[0],
          upper: this.state.melodyRange[1],
          heldNotes: this.state.keyboardHeldNotes,
          midiOutput: this.props.midiOutput,
          onKeyDown: this.keyboardPressNote,
          onKeyUp: this.keyboardReleaseNote
        });
      }
    }]);

    return MelodyPlaybackExercise;
  }(React.Component);

  _exports["default"] = MelodyPlaybackExercise;

  _defineProperty(MelodyPlaybackExercise, "exerciseName", "Melody Playback");

  _defineProperty(MelodyPlaybackExercise, "exerciseId", "melody_playback");

  _defineProperty(MelodyPlaybackExercise, "ROOTS", ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"]);
});

define("st/components/ear_training/melody_recognition_exercise", ["exports", "react", "lib", "prop-types", "st/song_note_list", "st/components/slider", "st/components/select", "st/music", "st/song_parser", "st/browser", "st/components/icons", "st/globals"], function (_exports, React, _lib, types, _song_note_list, _slider, _select, _music, _song_parser, _browser, _icons, _globals) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);
  types = _interopRequireWildcard(types);
  _slider = _interopRequireDefault(_slider);
  _select = _interopRequireDefault(_select);
  _song_parser = _interopRequireDefault(_song_parser);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var MelodyRecognitionExercise = /*#__PURE__*/function (_React$Component) {
    _inherits(MelodyRecognitionExercise, _React$Component);

    var _super = _createSuper(MelodyRecognitionExercise);

    _createClass(MelodyRecognitionExercise, null, [{
      key: "fetchMelody",
      value: function fetchMelody(name) {
        if (!this.melodyCache[name]) {
          this.melodyCache[name] = new Promise(function (resolve, reject) {
            var request = new XMLHttpRequest();
            request.open("GET", "/static/music/interval_melodies/".concat(name, ".lml?").concat(+new Date()));

            request.onerror = function () {
              return reject(request.statusText);
            };

            request.onload = function (e) {
              var songText = request.responseText;
              var song;

              try {
                song = _song_parser["default"].load(songText);
              } catch (e) {
                console.log(e);
                return reject("Failed to parse: ".concat(name));
              } // transpose to middle c


              var root = (0, _music.parseNote)(song[0].note);
              song = song.transpose(60 - root);
              resolve(song);
            };

            request.send();
          });
        }

        return this.melodyCache[name];
      }
    }]);

    function MelodyRecognitionExercise(props) {
      var _this;

      _classCallCheck(this, MelodyRecognitionExercise);

      _this = _super.call(this, props);
      _this.state = {
        loading: true,
        playbackBpm: 90,
        playbackTranspose: 0,
        enabledIntervals: {},
        rand: new _lib.MersenneTwister(),
        autoplayRandomizeRoot: true,
        autoplayIntervalOrder: "default"
      };
      return _this;
    }

    _createClass(MelodyRecognitionExercise, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        var loadingCount = 0;
        (0, _globals.setTitle)("Learn Intervals Ear Training Exercise");
        this.setState({
          loading: true
        });
        var melodySongs = {};
        var enabled = {};
        MelodyRecognitionExercise.melodies.forEach(function (m) {
          loadingCount += 1;
          MelodyRecognitionExercise.fetchMelody(m.song).then(function (song) {
            loadingCount -= 1;
            melodySongs[m.song] = song;
            enabled["".concat(m.interval, "-").concat(m.direction)] = true;

            if (loadingCount == 0) {
              _this2.setState({
                loading: false,
                melodySongs: melodySongs,
                enabledIntervals: enabled
              });
            }
          })["catch"](function (e) {
            return console.warn(e);
          });
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.state.playingTimer) {
          this.state.playingTimer.stop();
        }

        if (this.state.autoplayTimer) {
          this.state.autoplayTimer.stop();
        }

        if (this.nosleep && this.nosleepEnabled) {
          this.nosleep.disable();
          this.nosleepEnabled = false;
        }
      }
    }, {
      key: "nextMelody",
      value: function nextMelody(fn) {
        var _this3 = this;

        var intervals = MelodyRecognitionExercise.melodies.filter(function (m) {
          return _this3.state.enabledIntervals["".concat(m.interval, "-").concat(m.direction)];
        });
        var interval = intervals[this.state.rand["int"]() % intervals.length];
        this.setState({
          currentMelody: interval
        }, fn);
      }
    }, {
      key: "playCurrentRoot",
      value: function playCurrentRoot() {
        var current = this.state.currentMelody;

        if (!current) {
          return;
        }

        var song = this.state.melodySongs[current.song];
        var first = new _song_note_list.SongNoteList();
        var note = song[0].clone();
        note.duration = 1;
        first.push(note);
        return this.playSong(first);
      }
    }, {
      key: "playCurrentInterval",
      value: function playCurrentInterval() {
        var current = this.state.currentMelody;

        if (!current) {
          return;
        }

        var song = this.state.melodySongs[current.song];
        var first = new _song_note_list.SongNoteList();
        var note1 = song[0].clone();
        var note2 = song[1].clone();
        note1.duration = 1;
        note2.duration = 1;

        if (this.state.autoplayIntervalOrder == "reverse") {
          note1.start = 1;
          note2.start = 0;
        } else if (this.state.autoplayIntervalOrder == "harmonic") {
          note1.start = 0;
          note2.start = 0;
        } else {
          note1.start = 0;
          note2.start = 1;
        }

        first.push(note1);
        first.push(note2);
        return this.playSong(first);
      }
    }, {
      key: "playCurrentSong",
      value: function playCurrentSong() {
        var current = this.state.currentMelody;

        if (!current) {
          return;
        }

        return this.playSong(this.state.melodySongs[current.song]);
      }
    }, {
      key: "playSong",
      value: function playSong(song) {
        var _this4 = this;

        song = song.transpose(this.state.playbackTranspose);
        var timer = song.play(this.props.midiOutput, {
          bpm: this.state.playbackBpm
        });
        this.setState({
          playing: true,
          playingTimer: timer
        });
        timer.getPromise().then(function () {
          _this4.setState({
            playing: false,
            playingTimer: null
          });
        });
        return timer;
      }
    }, {
      key: "autoplayDelay",
      value: function autoplayDelay(time, fn) {
        var _this5 = this;

        var timer;
        var t = window.setTimeout(function () {
          if (_this5.state.autoplayTimer == timer) {
            _this5.setState({
              autoplayTimer: undefined
            });
          }

          fn();
        }, time);
        timer = {
          stop: function stop(reason) {
            window.clearTimeout(t);

            if (reason == "skip") {
              fn();
            }
          }
        };
        this.setState({
          autoplayTimer: timer
        });
      }
    }, {
      key: "autoplayNextInterval",
      value: function autoplayNextInterval() {
        var _this6 = this;

        if ((0, _browser.isMobile)() && !this.nosleepEnabled) {
          this.nosleep = this.nosleep || new _lib.NoSleep();
          this.nosleep.enable();
          this.nosleepEnabled = true;
        }

        if (this.state.autoplayRandomizeRoot) {
          this.setState({
            playbackTranspose: this.state.rand["int"]() % 36 - 18
          });
        }

        this.nextMelody(function () {
          var timer = _this6.playCurrentInterval();

          _this6.setState({
            autoplayTimer: timer,
            autoplayState: "playingInterval"
          });

          timer.getPromise().then(function (reason) {
            if (reason == "stop") {
              return;
            }

            _this6.autoplayDelay(2000, function () {
              var timer = _this6.playCurrentSong();

              _this6.setState({
                autoplayTimer: timer,
                autoplayState: "playingMelody"
              });

              timer.getPromise().then(function (reason) {
                if (reason == "stop") {
                  return;
                }

                _this6.autoplayDelay(2000, function () {
                  _this6.autoplayNextInterval();
                });
              });
            });
          });
        });
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("div", {
          className: "melody_recognition_exercise"
        }, /*#__PURE__*/React.createElement("div", {
          className: "exercise_header"
        }, this.props.toggleSidebarButton, /*#__PURE__*/React.createElement("h1", {
          className: "exercise_label"
        }, "Interval Recognition")), this.state.loading ? /*#__PURE__*/React.createElement("div", {
          className: "page_container"
        }, "Loading") : /*#__PURE__*/React.createElement("div", {
          className: "page_container"
        }, this.renderSongPlayer(), this.renderIntervalSettings(), this.renderAutoplayer()));
      }
    }, {
      key: "renderAutoplayer",
      value: function renderAutoplayer() {
        var _this7 = this;

        var skipButton;

        if (this.state.autoplayTimer) {
          skipButton = /*#__PURE__*/React.createElement("button", {
            onClick: function onClick(e) {
              _this7.state.autoplayTimer.stop("skip");
            }
          }, "Skip");
        }

        return /*#__PURE__*/React.createElement("section", {
          className: "auto_player"
        }, /*#__PURE__*/React.createElement("h3", null, "Autoplay Mode"), /*#__PURE__*/React.createElement("p", null, "Repeatedly plays a random interval, a pause, then the associated melody. No input required, listen along and try to identify the intervals."), /*#__PURE__*/React.createElement("fieldset", {
          className: "autoplay_options"
        }, /*#__PURE__*/React.createElement("legend", null, "Autoplay options"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
          checked: this.state.autoplayRandomizeRoot,
          onChange: function onChange(e) {
            _this7.setState({
              autoplayRandomizeRoot: e.target.checked
            });
          },
          type: "checkbox"
        }), /*#__PURE__*/React.createElement("span", {
          className: "input_label"
        }, "Randomly transpose"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", {
          className: "input_label"
        }, "Playback mode"), /*#__PURE__*/React.createElement(_select["default"], {
          value: this.state.autoplayIntervalOrder,
          onChange: function onChange(v) {
            return _this7.setState({
              autoplayIntervalOrder: v
            });
          },
          options: [{
            name: "In order",
            value: "default"
          }, {
            name: "Reverse",
            value: "reverse"
          }, {
            name: "Harmonic",
            value: "harmonic"
          }]
        }))))), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("button", {
          onClick: function onClick(e) {
            e.preventDefault();

            if (_this7.state.autoplayTimer) {
              _this7.state.autoplayTimer.stop();

              if (_this7.nosleep && _this7.nosleepEnabled) {
                _this7.nosleep.disable();

                _this7.nosleepEnabled = false;
              }

              _this7.setState({
                autoplayTimer: undefined,
                autoplayState: undefined
              });
            } else {
              _this7.autoplayNextInterval();
            }
          }
        }, this.state.autoplayTimer ? "Stop" : "Start autoplay"), " ", skipButton));
      }
    }, {
      key: "renderSongPlayer",
      value: function renderSongPlayer() {
        var _this8 = this;

        var current = this.state.currentMelody;
        var currentSongTools;

        if (current) {
          var currentSong = this.state.melodySongs[current.song];
          var stopSong;

          if (this.state.playingTimer && !this.state.autoplayTimer) {
            stopSong = /*#__PURE__*/React.createElement("button", {
              type: "button",
              onClick: function onClick(e) {
                return _this8.state.playingTimer.stop();
              }
            }, "Stop");
          }

          var firstNote = (0, _music.noteName)((0, _music.parseNote)(currentSong[0].note) + this.state.playbackTranspose);

          var _disabled = !!(this.state.playing || this.state.autoplayTimer);

          var title = "".concat(current.interval, " - ").concat(current.title, " (").concat(firstNote, ")");

          if (this.state.autoplayState == "playingInterval") {
            title = "Listen to interval...";
          }

          currentSongTools = /*#__PURE__*/React.createElement("div", {
            className: "current_song"
          }, /*#__PURE__*/React.createElement("div", {
            className: "song_title"
          }, title), /*#__PURE__*/React.createElement("div", {
            className: "song_controls"
          }, /*#__PURE__*/React.createElement("button", {
            disabled: _disabled,
            type: "button",
            onClick: function onClick(e) {
              _this8.playCurrentRoot();
            }
          }, "Play root"), /*#__PURE__*/React.createElement("button", {
            disabled: _disabled,
            type: "button",
            onClick: function onClick(e) {
              _this8.playCurrentInterval();
            }
          }, "Play interval"), /*#__PURE__*/React.createElement("button", {
            type: "button",
            disabled: _disabled,
            onClick: function onClick(e) {
              _this8.playCurrentSong();
            }
          }, "Play melody"), stopSong));
        } else {
          currentSongTools = /*#__PURE__*/React.createElement("div", {
            className: "current_song"
          }, "Press ", /*#__PURE__*/React.createElement("strong", null, "Next melody"), " to randomly pick a interval to practice");
        }

        var disabled = !!(this.state.playing || this.state.autoplayTimer);
        return /*#__PURE__*/React.createElement("div", {
          className: "song_selector"
        }, /*#__PURE__*/React.createElement("div", {
          className: "global_controls"
        }, /*#__PURE__*/React.createElement("button", {
          disabled: disabled,
          onClick: function onClick(e) {
            _this8.nextMelody();
          }
        }, "Next melody"), /*#__PURE__*/React.createElement("label", {
          className: "slider_group"
        }, /*#__PURE__*/React.createElement("span", null, "BPM"), /*#__PURE__*/React.createElement(_slider["default"], {
          min: 40,
          max: 160,
          onChange: function onChange(value) {
            _this8.setState({
              playbackBpm: value
            });
          },
          value: this.state.playbackBpm
        }), /*#__PURE__*/React.createElement("code", null, this.state.playbackBpm)), /*#__PURE__*/React.createElement("label", {
          className: "slider_group"
        }, /*#__PURE__*/React.createElement("span", null, "Transpose"), /*#__PURE__*/React.createElement(_slider["default"], {
          min: -24,
          max: 24,
          onChange: function onChange(value) {
            _this8.setState({
              playbackTranspose: value
            });
          },
          value: this.state.playbackTranspose
        }), /*#__PURE__*/React.createElement("code", null, this.state.playbackTranspose), /*#__PURE__*/React.createElement("button", {
          type: "button",
          title: "Randomize Transpose",
          onClick: function onClick(e) {
            return _this8.setState({
              playbackTranspose: _this8.state.rand["int"]() % 36 - 18
            });
          },
          className: "shuffle_button"
        }, /*#__PURE__*/React.createElement(_icons.IconShuffle, {
          width: 16,
          height: 16
        })))), currentSongTools);
      }
    }, {
      key: "renderIntervalSettings",
      value: function renderIntervalSettings() {
        var _this9 = this;

        var inputs = MelodyRecognitionExercise.melodies.map(function (m) {
          var key = "".concat(m.interval, "-").concat(m.direction);
          return /*#__PURE__*/React.createElement("li", {
            key: key,
            title: m.title
          }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
            type: "checkbox",
            onChange: function onChange(e) {
              _this9.setState({
                enabledIntervals: _objectSpread({}, _this9.state.enabledIntervals, _defineProperty({}, key, e.target.checked))
              });
            },
            checked: _this9.state.enabledIntervals[key] || false
          }), " ", /*#__PURE__*/React.createElement("span", {
            className: "label"
          }, m.interval, " ", m.name, " (", m.direction, ")")));
        });

        var enabledFiltered = function enabledFiltered(fn) {
          var keys = MelodyRecognitionExercise.melodies.filter(fn).map(function (m) {
            return "".concat(m.interval, "-").concat(m.direction);
          });
          var enabled = {};

          var _iterator = _createForOfIteratorHelper(keys),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var key = _step.value;
              enabled[key] = true;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return enabled;
        };

        var toggleAllButton = null; // if it's empty add a toggle all button

        if (Object.keys(this.state.enabledIntervals || {}).length == 0) {
          toggleAllButton = /*#__PURE__*/React.createElement("button", {
            type: "button",
            onClick: function onClick(e) {
              return _this9.setState({
                enabledIntervals: enabledFiltered(function (m) {
                  return true;
                })
              });
            }
          }, "All on");
        } else {
          toggleAllButton = /*#__PURE__*/React.createElement("button", {
            type: "button",
            onClick: function onClick(e) {
              return _this9.setState({
                enabledIntervals: {}
              });
            }
          }, "All off");
        }

        return /*#__PURE__*/React.createElement("section", {
          className: "interval_settings"
        }, /*#__PURE__*/React.createElement("fieldset", {
          className: "enabled_intervals"
        }, /*#__PURE__*/React.createElement("legend", null, "Intervals"), /*#__PURE__*/React.createElement("ul", null, inputs), /*#__PURE__*/React.createElement("div", {
          className: "button_toggles"
        }, toggleAllButton, " ", /*#__PURE__*/React.createElement("button", {
          type: "button",
          onClick: function onClick(e) {
            return _this9.setState({
              enabledIntervals: enabledFiltered(function (m) {
                return m.direction == "asc";
              })
            });
          }
        }, "All Ascending"), " ", /*#__PURE__*/React.createElement("button", {
          type: "button",
          onClick: function onClick(e) {
            return _this9.setState({
              enabledIntervals: enabledFiltered(function (m) {
                return m.direction == "desc";
              })
            });
          }
        }, "All Descending"))));
      }
    }]);

    return MelodyRecognitionExercise;
  }(React.Component);

  _exports["default"] = MelodyRecognitionExercise;

  _defineProperty(MelodyRecognitionExercise, "exerciseName", "Interval Melodies");

  _defineProperty(MelodyRecognitionExercise, "exerciseId", "melody_recognition");

  _defineProperty(MelodyRecognitionExercise, "melodies", [{
    interval: "m2",
    direction: "asc",
    song: "m2_asc",
    title: "Jaws"
  }, {
    interval: "m2",
    direction: "desc",
    song: "m2_desc",
    title: "Joy To The World"
  }, {
    interval: "M2",
    direction: "asc",
    song: "mm2_asc",
    title: "Silent Night"
  }, {
    interval: "M2",
    direction: "desc",
    song: "mm2_desc",
    title: "Mary Had A Little Lamb"
  }, {
    interval: "m3",
    direction: "asc",
    song: "m3_asc",
    title: "Greensleves"
  }, {
    interval: "m3",
    direction: "desc",
    song: "m3_desc",
    title: "Hey Jude"
  }, {
    interval: "M3",
    direction: "asc",
    song: "mm3_asc",
    title: "On When The Saints"
  }, {
    interval: "M3",
    direction: "desc",
    song: "mm3_desc",
    title: "Swing Low Sweet Chariot"
  }, {
    interval: "P4",
    direction: "asc",
    song: "pp4_asc",
    title: "Here Comes The Bride"
  }, {
    interval: "P4",
    direction: "desc",
    song: "pp4_desc",
    title: "I've Been Working On The Rail Road"
  }, {
    interval: "T",
    direction: "asc",
    song: "tt_asc",
    title: "The Simpsons"
  }, {
    interval: "P5",
    direction: "asc",
    song: "pp5_asc",
    title: "Star Wars"
  }, {
    interval: "P5",
    direction: "desc",
    song: "pp5_desc",
    title: "Flintstones"
  }, {
    interval: "m6",
    direction: "asc",
    song: "m6_asc",
    title: "Entertainer"
  }, {
    interval: "M6",
    direction: "asc",
    song: "mm6_asc",
    title: "NBC"
  }, {
    interval: "m7",
    direction: "asc",
    song: "m7_asc",
    title: "Star Trek"
  }, {
    interval: "M7",
    direction: "asc",
    song: "mm7_asc",
    title: "Take On Me"
  }, {
    interval: "P8",
    direction: "asc",
    song: "pp8_asc",
    title: "Somewhere Over The Rainbow"
  }, {
    interval: "P8",
    direction: "desc",
    song: "pp8_desc",
    title: "To Zanarkand"
  }]);

  _defineProperty(MelodyRecognitionExercise, "melodyCache", {});
});

define("st/components/flash_cards/chord_identification_exercise", ["exports", "st/components/flash_cards/common", "react", "lib", "prop-types", "st/note_list", "st/music", "st/chord_generators", "st/components/staves"], function (_exports, _common, React, _lib, types, _note_list, _music, _chord_generators, _staves) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);
  types = _interopRequireWildcard(types);
  _note_list = _interopRequireDefault(_note_list);

  var _class, _temp;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var ChordIdentificationExercise = /*#__PURE__*/function (_React$PureComponent) {
    _inherits(ChordIdentificationExercise, _React$PureComponent);

    var _super = _createSuper(ChordIdentificationExercise);

    _createClass(ChordIdentificationExercise, null, [{
      key: "defaultSettings",
      value: function defaultSettings() {
        return {
          keySignatures: {
            "0": true
          }
        };
      }
    }]);

    function ChordIdentificationExercise(props) {
      var _this;

      _classCallCheck(this, ChordIdentificationExercise);

      _this = _super.call(this, props);
      _this.rand = new _lib.MersenneTwister();
      _this.state = {
        cardNumber: 1
      };
      return _this;
    }

    _createClass(ChordIdentificationExercise, [{
      key: "componentWillMount",
      value: function componentWillMount() {
        this.setupNext();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (prevProps.settings != this.props.settings) {
          this.setupNext();
        }
      }
    }, {
      key: "render",
      value: function render() {
        var card = this.state.currentCard;
        var errorMessage = card ? null : /*#__PURE__*/React.createElement("strong", {
          className: "no_cards_error"
        }, "Please enable some cards from settings");
        return /*#__PURE__*/React.createElement("div", {
          className: "chord_identification_exercise flash_card_exercise"
        }, errorMessage, /*#__PURE__*/React.createElement(_common.CardHolder, null, this.renderCurrentCard()), this.renderCardOptions());
      }
    }, {
      key: "setupNext",
      value: function setupNext() {
        var _this2 = this;

        var sigs = _music.KeySignature.allKeySignatures().filter(function (ks) {
          return _this2.props.settings.keySignatures["" + ks.count];
        });

        var notes = 3;
        var keySignature = sigs[this.rand["int"]() % sigs.length];

        if (!keySignature) {
          this.setState({
            currentCard: null
          });
          return;
        }

        if (!this.generators) {
          this.generators = {};
        }

        var generatorKey = "".concat(keySignature.count, "-").concat(notes);

        if (!this.generators[generatorKey]) {
          this.generators[generatorKey] = new _chord_generators.ChordGenerator(keySignature, {
            notes: notes
          });
        }

        var chord = this.generators[generatorKey].nextChord();
        var inversion = this.props.settings.inversions ? this.rand["int"]() % 3 : 0;
        this.setState({
          cardNumber: this.state.cardNumber + 1,
          cardError: false,
          cardMistakes: null,
          partialAnswer: null,
          currentCard: {
            notes: notes,
            octave: 5,
            keySignature: keySignature,
            chord: chord,
            inversion: inversion
          }
        });
      }
    }, {
      key: "renderCurrentCard",
      value: function renderCurrentCard() {
        var card = this.state.currentCard;

        if (!card) {
          return;
        }

        var notes = card.chord.getRange(card.octave, card.notes, card.inversion);
        return /*#__PURE__*/React.createElement("div", {
          key: this.state.cardNumber,
          className: "card_row"
        }, /*#__PURE__*/React.createElement("div", {
          className: (0, _lib.classNames)("flash_card", {
            errorshake: this.state.cardError
          })
        }, /*#__PURE__*/React.createElement(_staves.GStaff, {
          heldNotes: {},
          notes: new _note_list["default"]([notes]),
          keySignature: card.keySignature,
          noteWidth: 100,
          noteShaking: false,
          scale: 0.8
        })));
      }
    }, {
      key: "renderCardOptions",
      value: function renderCardOptions() {
        var _this3 = this;

        if (!this.state.currentCard) {
          return;
        }

        var levels = [this.constructor.notes, [].concat(_toConsumableArray(this.constructor.chordTypes), [{
          value: "b",
          label: /*#__PURE__*/React.createElement("span", {
            style: {
              transform: "scale(1.5, 1.5)",
              display: "inline-block"
            }
          }, "\u266D")
        }, {
          value: "#",
          label: /*#__PURE__*/React.createElement("span", {
            style: {
              transform: "scale(1.5, 1.5)",
              display: "inline-block"
            }
          }, "\u266F")
        }]), this.constructor.chordTypes];
        var partialAnswer = this.state.partialAnswer || [];

        var isCompleteAnswer = function isCompleteAnswer(v) {
          return _this3.constructor.chordTypes.some(function (t) {
            return v.endsWith(t);
          });
        };

        var options = levels[partialAnswer.length].map(function (value) {
          var displayLabel = typeof value == "string" ? value : value.label;
          var pushValue = typeof value == "string" ? value : value.value;
          var newAnswer = [].concat(_toConsumableArray(partialAnswer), [pushValue]);
          var newAnswerStr = newAnswer.join("");
          return /*#__PURE__*/React.createElement("button", {
            key: "".concat(partialAnswer.length, "-").concat(pushValue),
            type: "button",
            disabled: _this3.state.cardMistakes && _this3.state.cardMistakes[newAnswerStr],
            onClick: function onClick(e) {
              if (isCompleteAnswer(newAnswerStr)) {
                _this3.checkAnswer(newAnswerStr);
              } else {
                _this3.setState({
                  partialAnswer: newAnswer
                });
              }
            }
          }, displayLabel);
        });

        if (partialAnswer.length) {
          options.push( /*#__PURE__*/React.createElement("button", {
            key: "".concat(partialAnswer.length, " back"),
            className: "outline back_btn",
            onClick: function onClick(e) {
              var newAnswer = _toConsumableArray(partialAnswer);

              newAnswer.pop();

              _this3.setState({
                partialAnswer: newAnswer
              });
            }
          }, "\u25C0 Back"));
        }

        return /*#__PURE__*/React.createElement("div", {
          className: "card_options",
          ref: "cardOptions"
        }, options);
      }
    }, {
      key: "checkAnswer",
      value: function checkAnswer(answer) {
        var _this4 = this;

        if (!this.state.currentCard) {
          return;
        }

        var card = this.state.currentCard;
        var cardAnswer = "".concat(card.chord.root).concat(card.chord.chordShapeName());
        console.log("checking answer", answer, "expected", cardAnswer);

        if (cardAnswer == answer) {
          this.setupNext();
        } else {
          var mistakes = this.state.cardMistakes || {};
          mistakes[answer] = true;
          this.setState({
            cardMistakes: mistakes,
            cardError: true,
            partialAnswer: null
          });
          var cardNumber = this.state.cardNumber;
          window.setTimeout(function () {
            if (_this4.state.cardNumber == cardNumber) {
              _this4.setState({
                cardError: false
              });
            }
          }, 600);
        }
      }
    }]);

    return ChordIdentificationExercise;
  }(React.PureComponent);

  _exports["default"] = ChordIdentificationExercise;

  _defineProperty(ChordIdentificationExercise, "exerciseName", "Chord Identification");

  _defineProperty(ChordIdentificationExercise, "exerciseId", "chord_identification");

  _defineProperty(ChordIdentificationExercise, "notes", ["C", "D", "E", "F", "G", "A", "B"]);

  _defineProperty(ChordIdentificationExercise, "chordTypes", ["M", "m", "dim"]);

  _defineProperty(ChordIdentificationExercise, "propTypes", {
    settings: types.object.isRequired
  });

  _defineProperty(ChordIdentificationExercise, "ExerciseOptions", (_temp = _class = /*#__PURE__*/function (_React$PureComponent2) {
    _inherits(_class, _React$PureComponent2);

    var _super2 = _createSuper(_class);

    function _class() {
      _classCallCheck(this, _class);

      return _super2.apply(this, arguments);
    }

    _createClass(_class, [{
      key: "render",
      value: function render() {
        var _this5 = this;

        var settings = this.props.currentSettings;
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
          className: "settings_group"
        }, /*#__PURE__*/React.createElement("h4", null, "Key signature"), _music.KeySignature.allKeySignatures().map(function (ks) {
          var count = "" + ks.count;
          return /*#__PURE__*/React.createElement("label", {
            key: ks.name()
          }, /*#__PURE__*/React.createElement("input", {
            checked: settings.keySignatures[count] || false,
            onChange: function onChange(e) {
              return _this5.props.updateSettings(_objectSpread({}, settings, {
                keySignatures: _objectSpread({}, settings.keySignatures, _defineProperty({}, count, !settings.keySignatures[count]))
              }));
            },
            type: "checkbox"
          }), " ", ks.name());
        })), /*#__PURE__*/React.createElement("section", {
          className: "settings_group"
        }, /*#__PURE__*/React.createElement("h4", null, "Inversions"), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
          checked: settings.inversions || false,
          onChange: function onChange(e) {
            return _this5.props.updateSettings(_objectSpread({}, settings, {
              inversions: !settings.inversions
            }));
          },
          type: "checkbox"
        }), " ", "Enabled")));
      }
    }]);

    return _class;
  }(React.PureComponent), _defineProperty(_class, "propTypes", {
    updateSettings: types.func.isRequired
  }), _temp));
});

define("st/components/flash_cards/common", ["exports", "react-transition-group", "react"], function (_exports, _reactTransitionGroup, React) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.CardHolder = void 0;
  React = _interopRequireWildcard(React);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  var CardHolder = /*#__PURE__*/function (_React$Component) {
    _inherits(CardHolder, _React$Component);

    var _super = _createSuper(CardHolder);

    function CardHolder() {
      _classCallCheck(this, CardHolder);

      return _super.apply(this, arguments);
    }

    _createClass(CardHolder, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("div", {
          className: "card_holder"
        }, /*#__PURE__*/React.createElement(_reactTransitionGroup.TransitionGroup, {
          component: "div",
          className: "transition_group"
        }, this.cardAnimation(this.props.children)));
      }
    }, {
      key: "cardAnimation",
      value: function cardAnimation(card) {
        if (card.key == null) {
          throw new Error("Card should have key for card holder");
        }

        return /*#__PURE__*/React.createElement(_reactTransitionGroup.CSSTransition, {
          key: card.key,
          classNames: "show_card",
          timeout: {
            enter: 400,
            exit: 400
          }
        }, card);
      }
    }]);

    return CardHolder;
  }(React.Component);

  _exports.CardHolder = CardHolder;
});

define("st/components/flash_cards/note_math_exercise", ["exports", "st/keyboard_input", "st/components/flash_cards/common", "react", "lib", "st/util", "prop-types"], function (_exports, _keyboard_input, _common, React, _lib, _util, types) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);
  types = _interopRequireWildcard(types);

  var _class, _temp;

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var NoteMathExercise = /*#__PURE__*/function (_React$PureComponent) {
    _inherits(NoteMathExercise, _React$PureComponent);

    var _super = _createSuper(NoteMathExercise);

    _createClass(NoteMathExercise, null, [{
      key: "defaultSettings",
      value: function defaultSettings() {
        return {
          enabledRoots: {
            "D": true
          }
        };
      }
    }]);

    function NoteMathExercise(props) {
      var _this;

      _classCallCheck(this, NoteMathExercise);

      _this = _super.call(this, props);
      _this.state = {
        cardNumber: 0
      };
      _this.rand = new _lib.MersenneTwister();
      return _this;
    }

    _createClass(NoteMathExercise, [{
      key: "componentWillMount",
      value: function componentWillMount() {
        this.showNext(this.refreshCards());
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        this.upListener = function (event) {
          var key = (0, _keyboard_input.keyCodeToChar)(event.keyCode);

          if (key == null) {
            return;
          }

          if (!_this2.refs.cardOptions) {
            return;
          }

          if (key.match(/^\d$/)) {
            var option = +key - 1;
            var button = _this2.refs.cardOptions.children[option];

            if (button) {
              button.click();
            }
          } else {
            var _iterator = _createForOfIteratorHelper(_this2.refs.cardOptions.children),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _button = _step.value;

                if (_button.textContent == key.toUpperCase()) {
                  _button.click();
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        };

        window.addEventListener("keyup", this.upListener);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        window.removeEventListener("keyup", this.upListener);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (prevProps.settings != this.props.settings) {
          this.refreshCards(function () {
            _this3.showNext();
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var card = this.state.currentCard;
        var errorMessage = card ? null : /*#__PURE__*/React.createElement("strong", {
          className: "no_cards_error"
        }, "Please enable some cards from settings");
        return /*#__PURE__*/React.createElement("div", {
          className: "note_math_exercise flash_card_exercise"
        }, errorMessage, /*#__PURE__*/React.createElement(_common.CardHolder, null, this.renderCurrentCard()), this.renderCardOptions());
      }
    }, {
      key: "renderCurrentCard",
      value: function renderCurrentCard() {
        var card = this.state.currentCard;

        if (!card) {
          return;
        }

        return /*#__PURE__*/React.createElement("div", {
          key: this.state.cardNumber,
          className: "card_row"
        }, /*#__PURE__*/React.createElement("div", {
          className: (0, _lib.classNames)("flash_card", {
            errorshake: this.state.cardError
          })
        }, card.label));
      }
    }, {
      key: "renderCardOptions",
      value: function renderCardOptions() {
        var _this4 = this;

        var card = this.state.currentCard;

        if (!card) {
          return;
        }

        var options = card.options.map(function (a) {
          return /*#__PURE__*/React.createElement("button", {
            key: a,
            disabled: _this4.state.cardMistakes && _this4.state.cardMistakes[a],
            onClick: function onClick(e) {
              e.preventDefault();

              _this4.checkAnswer(a);
            }
          }, a);
        });
        return /*#__PURE__*/React.createElement("div", {
          className: "card_options",
          ref: "cardOptions"
        }, options);
      }
    }, {
      key: "normalizeScores",
      value: function normalizeScores() {
        var minScore = Math.min.apply(Math, _toConsumableArray(this.state.cards.map(function (c) {
          return c.score;
        })));
        minScore -= 1;

        if (minScore == 0) {
          return;
        }

        var _iterator2 = _createForOfIteratorHelper(this.state.cards),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var card = _step2.value;
            card.score -= minScore;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }, {
      key: "refreshCards",
      value: function refreshCards(fn) {
        var enabledRoots = this.props.settings.enabledRoots;
        var cards = [];
        var notes = this.constructor.notes;
        var offsets = [1, 2, 3, 4, 5, 6];
        var roots = [];

        for (var key in enabledRoots) {
          if (enabledRoots[key]) {
            var idx = notes.indexOf(key);

            if (idx >= 0) {
              roots.push(idx);
            }
          }
        }

        for (var _i = 0, _roots = roots; _i < _roots.length; _i++) {
          var rootIdx = _roots[_i];
          var note = notes[rootIdx];

          var _iterator3 = _createForOfIteratorHelper(offsets),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var offset = _step3.value;
              var answer = notes[(rootIdx + offset) % notes.length];
              cards.push({
                score: 1,
                label: "".concat(offset + 1, " of ").concat(note, " is"),
                answer: answer,
                options: notes
              });
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }

        this.setState({
          cardOrder: null,
          cards: cards
        }, fn);
        return cards;
      }
    }, {
      key: "showNext",
      value: function showNext() {
        var cards = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.cards;

        if (!cards) {
          this.setState({
            currentCard: null
          });
          return;
        }

        var cardOrder = this.state.cardOrder ? _toConsumableArray(this.state.cardOrder) : [];
        cardOrder = _toConsumableArray(cardOrder);

        if (cardOrder.length <= 1) {
          var moreCards = (0, _util.shuffled)(cards.map(function (_, idx) {
            return idx;
          }));

          if (moreCards[0] == cardOrder[cardOrder.length - 1]) {
            moreCards.reverse();
          }

          cardOrder = cardOrder.concat(moreCards);
        }

        console.log("pulling from", cardOrder);
        var nextCardIdx = cardOrder.shift();
        var chosenCard = cards[nextCardIdx];
        this.setState({
          cardMistakes: null,
          cardError: false,
          cardNumber: this.state.cardNumber + 1,
          currentCard: chosenCard,
          cardOrder: cardOrder
        });
      }
    }, {
      key: "checkAnswer",
      value: function checkAnswer(answer) {
        var _this5 = this;

        if (!this.state.currentCard) {
          return;
        }

        if (answer == this.state.currentCard.answer) {
          if (!this.state.cardMistakes) {
            this.state.currentCard.score += 1;
            this.normalizeScores();
          }

          this.showNext();
        } else {
          var card = this.state.currentCard;
          var cardNumber = this.state.cardNumber;

          if (!this.state.cardMistakes) {
            card.score -= 1;
            this.normalizeScores();
          }

          var mistakes = this.state.cardMistakes || {};
          mistakes[answer] = true;
          this.setState({
            cardMistakes: mistakes,
            cardError: true
          });
          window.setTimeout(function () {
            if (_this5.state.cardNumber == cardNumber) {
              _this5.setState({
                cardError: false
              });
            }
          }, 600);
        }
      }
    }]);

    return NoteMathExercise;
  }(React.PureComponent);

  _exports["default"] = NoteMathExercise;

  _defineProperty(NoteMathExercise, "exerciseName", "Note Math");

  _defineProperty(NoteMathExercise, "exerciseId", "note_math");

  _defineProperty(NoteMathExercise, "notes", ["C", "D", "E", "F", "G", "A", "B"]);

  _defineProperty(NoteMathExercise, "propTypes", {
    settings: types.object.isRequired
  });

  _defineProperty(NoteMathExercise, "ExerciseOptions", (_temp = _class = /*#__PURE__*/function (_React$PureComponent2) {
    _inherits(_class, _React$PureComponent2);

    var _super2 = _createSuper(_class);

    function _class() {
      _classCallCheck(this, _class);

      return _super2.apply(this, arguments);
    }

    _createClass(_class, [{
      key: "render",
      value: function render() {
        var _this6 = this;

        var notes = NoteMathExercise.notes;
        var settings = this.props.currentSettings;
        return /*#__PURE__*/React.createElement("section", {
          className: "settings_group"
        }, /*#__PURE__*/React.createElement("h4", null, "Root notes"), notes.map(function (note) {
          return /*#__PURE__*/React.createElement("label", {
            key: note,
            className: (0, _lib.classNames)("test_group", {
              selected: settings.enabledRoots[note]
            })
          }, /*#__PURE__*/React.createElement("input", {
            type: "checkbox",
            checked: settings.enabledRoots[note] || false,
            onChange: function onChange(e) {
              _this6.props.updateSettings(_objectSpread({}, settings, {
                enabledRoots: _objectSpread({}, settings.enabledRoots, _defineProperty({}, note, !settings.enabledRoots[note]))
              }));
            }
          }), note);
        }));
      }
    }]);

    return _class;
  }(React.PureComponent), _defineProperty(_class, "propTypes", {
    updateSettings: types.func.isRequired
  }), _temp));
});

define("st/components/pages/ear_training_page", ["exports", "react", "lib", "st/components/select", "st/globals", "prop-types", "react-transition-group", "st/components/midi_button", "st/events", "st/components/ear_training/melody_recognition_exercise", "st/components/ear_training/melody_playback_exercise", "react-router-dom", "st/components/icons"], function (_exports, React, _lib, _select, _globals, types, _reactTransitionGroup, _midi_button, _events, _melody_recognition_exercise, _melody_playback_exercise, _reactRouterDom, _icons) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);
  _select = _interopRequireDefault(_select);
  types = _interopRequireWildcard(types);
  _midi_button = _interopRequireDefault(_midi_button);
  _melody_recognition_exercise = _interopRequireDefault(_melody_recognition_exercise);
  _melody_playback_exercise = _interopRequireDefault(_melody_playback_exercise);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  var EarTrainingPage = /*#__PURE__*/function (_React$Component) {
    _inherits(EarTrainingPage, _React$Component);

    var _super = _createSuper(EarTrainingPage);

    function EarTrainingPage(props) {
      var _this;

      _classCallCheck(this, EarTrainingPage);

      _this = _super.call(this, props);
      _this.state = {};
      return _this;
    }

    _createClass(EarTrainingPage, [{
      key: "onMidiMessage",
      value: function onMidiMessage(message) {
        if (this.currentExercise) {
          this.currentExercise.onMidiMessage(message);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var contents;

        if (this.props.midiOutput) {
          contents = this.renderExercise();
        } else {
          contents = this.renderIntro();
        }

        return /*#__PURE__*/React.createElement("div", {
          className: (0, _lib.classNames)("ear_training_page has_sidebar", {
            sidebar_open: this.state.sidebarOpen
          })
        }, /*#__PURE__*/React.createElement("div", {
          className: "sidebar"
        }, /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("div", {
          className: "nav_header"
        }, "Choose Exercise"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
          to: "/ear-training/interval-melodies",
          activeClassName: "active"
        }, "Learn Intervals")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
          to: "/ear-training/melody-playback",
          activeClassName: "active"
        }, "Play Back Melodies")))), /*#__PURE__*/React.createElement("button", {
          type: "button",
          onClick: function onClick() {
            return _this2.toggleSidebar();
          },
          className: "button toggle_sidebar_button"
        }, "Close")), /*#__PURE__*/React.createElement("div", {
          className: "content_column"
        }, contents));
      }
    }, {
      key: "toggleSidebar",
      value: function toggleSidebar() {
        this.setState(function (s) {
          return {
            sidebarOpen: !s.sidebarOpen
          };
        });
      }
    }, {
      key: "renderExercise",
      value: function renderExercise() {
        var _this3 = this;

        var toggleSidebarButton = /*#__PURE__*/React.createElement("button", {
          type: "button",
          className: "toggle_sidebar_button button outline",
          onClick: function onClick() {
            return _this3.toggleSidebar();
          }
        }, /*#__PURE__*/React.createElement(_icons.IconMenu, {
          width: 20,
          height: 20
        }), "Exercises");
        var exerciseProps = {
          ref: function ref(e) {
            return _this3.currentExercise = e;
          },
          midi: this.props.midi,
          midiOutput: this.props.midiOutput,
          midiInput: this.props.midiInput,
          toggleSidebarButton: toggleSidebarButton
        };
        return /*#__PURE__*/React.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
          exact: true,
          path: "/ear-training/interval-melodies"
        }, /*#__PURE__*/React.createElement(_melody_recognition_exercise["default"], exerciseProps)), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
          exact: true,
          path: "/ear-training/melody-playback"
        }, /*#__PURE__*/React.createElement(_melody_playback_exercise["default"], exerciseProps)), /*#__PURE__*/React.createElement(_reactRouterDom.Route, null, /*#__PURE__*/React.createElement(_reactRouterDom.Redirect, {
          to: "/ear-training/interval-melodies"
        })));
      }
    }, {
      key: "renderIntro",
      value: function renderIntro() {
        var _this4 = this;

        return /*#__PURE__*/React.createElement("div", {
          className: "page_container choose_device"
        }, /*#__PURE__*/React.createElement("h3", null, "Choose a MIDI output device for ear training"), /*#__PURE__*/React.createElement("p", null, "The ear training tools require an output device to be configured."), /*#__PURE__*/React.createElement(_midi_button["default"], {
          midiInput: this.props.midiOutput,
          pickMidi: function pickMidi() {
            (0, _events.trigger)(_this4, "pickMidi");
          }
        }));
      }
    }]);

    return EarTrainingPage;
  }(React.Component);

  _exports["default"] = EarTrainingPage;
});

define("st/components/pages/flash_card_page", ["exports", "react", "lib", "prop-types", "react-transition-group", "st/globals", "st/components/select", "st/components/flash_cards/note_math_exercise", "st/components/flash_cards/chord_identification_exercise", "react-router-dom"], function (_exports, React, _lib, types, _reactTransitionGroup, _globals, _select, _note_math_exercise, _chord_identification_exercise, _reactRouterDom) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);
  types = _interopRequireWildcard(types);
  _select = _interopRequireDefault(_select);
  _note_math_exercise = _interopRequireDefault(_note_math_exercise);
  _chord_identification_exercise = _interopRequireDefault(_chord_identification_exercise);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var SettingsPanel = /*#__PURE__*/function (_React$PureComponent) {
    _inherits(SettingsPanel, _React$PureComponent);

    var _super = _createSuper(SettingsPanel);

    function SettingsPanel() {
      _classCallCheck(this, SettingsPanel);

      return _super.apply(this, arguments);
    }

    _createClass(SettingsPanel, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("section", {
          className: "settings_panel"
        }, /*#__PURE__*/React.createElement("div", {
          className: "settings_header"
        }, /*#__PURE__*/React.createElement("button", {
          onClick: this.props.close
        }, "Close"), /*#__PURE__*/React.createElement("h3", null, "Settings")), /*#__PURE__*/React.createElement("section", {
          className: "settings_group"
        }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
          to: "/flash-cards/chord-identification",
          activeClassName: "active"
        }, "Chord Identification")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
          to: "/flash-cards/note-math",
          activeClassName: "active"
        }, "Note Math")))), this.renderExerciseOptions());
      }
    }, {
      key: "renderExerciseOptions",
      value: function renderExerciseOptions() {
        if (!this.props.currentExercise) {
          return;
        }

        var ExerciseOptions = this.props.currentExercise.ExerciseOptions;
        return /*#__PURE__*/React.createElement(ExerciseOptions, {
          updateSettings: this.props.updateSettings,
          currentSettings: this.props.currentExerciseSettings
        });
      }
    }]);

    return SettingsPanel;
  }(React.PureComponent);

  _defineProperty(SettingsPanel, "propTypes", {
    close: types.func,
    updateSettings: types.func.isRequired,
    currentExercise: types.func.isRequired,
    // class
    currentExerciseSettings: types.object.isRequired
  });

  var FlashCardPage = /*#__PURE__*/function (_React$PureComponent2) {
    _inherits(FlashCardPage, _React$PureComponent2);

    var _super2 = _createSuper(FlashCardPage);

    function FlashCardPage(props) {
      var _this;

      _classCallCheck(this, FlashCardPage);

      _this = _super2.call(this, props);
      _this.exercises = [_note_math_exercise["default"], _chord_identification_exercise["default"]];
      _this.state = {
        currentExerciseSettings: {},
        settingsPanelOpen: false
      };
      _this.state.currentExerciseSettings = _this.getExercise().defaultSettings();
      _this.updateExerciseSettings = _this.updateExerciseSettings.bind(_assertThisInitialized(_this));

      _this.closeSettingsPanel = function () {
        return _this.setState({
          settingsPanelOpen: false
        });
      };

      return _this;
    }

    _createClass(FlashCardPage, [{
      key: "getExercise",
      value: function getExercise() {
        var _this2 = this;

        var exercise = this.exercises.find(function (e) {
          return e.exerciseId == _this2.props.exercise;
        });

        if (!exercise) {
          exercise = this.exercises[0];
        }

        return exercise;
      }
    }, {
      key: "updateExerciseSettings",
      value: function updateExerciseSettings(settings) {
        this.setState({
          currentExerciseSettings: settings
        });
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        (0, _globals.setTitle)("Flash Cards");
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var Exercise = this.getExercise();
        return /*#__PURE__*/React.createElement("div", {
          className: "flash_card_page"
        }, /*#__PURE__*/React.createElement("div", {
          className: "flash_card_header"
        }, /*#__PURE__*/React.createElement("div", {
          className: "exercise_label"
        }, Exercise ? Exercise.exerciseName : ""), /*#__PURE__*/React.createElement("button", {
          onClick: function onClick(e) {
            return _this3.setState({
              settingsPanelOpen: !_this3.state.settingsPanelOpen
            });
          },
          type: "button"
        }, "Settings")), this.renderExercise(), /*#__PURE__*/React.createElement(_reactTransitionGroup.TransitionGroup, null, this.renderSettings()));
      }
    }, {
      key: "renderExercise",
      value: function renderExercise() {
        var Exercise = this.getExercise();
        return /*#__PURE__*/React.createElement(Exercise, {
          settings: this.state.currentExerciseSettings
        });
      }
    }, {
      key: "renderSettings",
      value: function renderSettings() {
        if (!this.state.settingsPanelOpen) {
          return;
        }

        var Exercise = this.getExercise();
        return /*#__PURE__*/React.createElement(_reactTransitionGroup.CSSTransition, {
          classNames: "slide_right",
          timeout: {
            enter: 200,
            exit: 100
          }
        }, /*#__PURE__*/React.createElement(SettingsPanel, {
          close: this.closeSettingsPanel,
          setExercise: function setExercise() {
            alert("fix me");
          },
          currentExercise: Exercise,
          currentExerciseSettings: this.state.currentExerciseSettings,
          updateSettings: this.updateExerciseSettings
        }));
      }
    }]);

    return FlashCardPage;
  }(React.PureComponent);

  _exports["default"] = FlashCardPage;

  _defineProperty(FlashCardPage, "defaultProps", {
    exercise: "chord_identification"
  });
});

define("st/components/pages/guide_pages", ["exports", "react", "react-router-dom", "st/globals", "prop-types"], function (_exports, React, _reactRouterDom, _globals, types) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);
  types = _interopRequireWildcard(types);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var GuideContents = /*#__PURE__*/function (_React$PureComponent) {
    _inherits(GuideContents, _React$PureComponent);

    var _super = _createSuper(GuideContents);

    function GuideContents(props) {
      var _this;

      _classCallCheck(this, GuideContents);

      _this = _super.call(this, props);
      _this.state = {};
      return _this;
    }

    _createClass(GuideContents, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.loadPage();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        if (prevProps.pageSource != this.props.pageSource) {
          this.loadPage();
        }
      }
    }, {
      key: "loadPage",
      value: function loadPage() {
        var _this2 = this;

        if (this.request) {
          this.request.abort();
          delete this.request;
        }

        (0, _globals.setTitle)(this.props.title);
        var request = new XMLHttpRequest();
        var url = "/static/guides/".concat(this.props.pageSource, ".json");
        request.open("GET", url);
        request.send();

        request.onload = function (e) {
          if (request.status != 200) {
            console.error("Failed to load guide page", url);

            _this2.setState({
              contents: "Failed to load guide page. Check console."
            });

            return;
          }

          var res = JSON.parse(request.responseText);

          _this2.setState({
            contents: res.contents
          });
        };

        this.request = request;
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.request) {
          this.request.abort();
          delete this.request;
        }
      }
    }, {
      key: "render",
      value: function render() {
        if (this.state.contents) {
          return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
            className: "page_container",
            dangerouslySetInnerHTML: {
              __html: this.state.contents
            }
          }), /*#__PURE__*/React.createElement("section", {
            className: "page_container"
          }, /*#__PURE__*/React.createElement("a", {
            target: "_blank",
            href: "https://github.com/leafo/sightreading.training/edit/master/static/guides/".concat(this.props.pageSource, ".md")
          }, "Edit this page on GitHub")));
        } else {
          return /*#__PURE__*/React.createElement("div", {
            className: "page_container loading_message"
          }, "Loading...");
        }
      }
    }]);

    return GuideContents;
  }(React.PureComponent);

  _defineProperty(GuideContents, "propTypes", {
    title: types.string.isRequired,
    pageSource: types.string.isRequired
  });

  var GuidePage = /*#__PURE__*/function (_React$PureComponent2) {
    _inherits(GuidePage, _React$PureComponent2);

    var _super2 = _createSuper(GuidePage);

    function GuidePage() {
      _classCallCheck(this, GuidePage);

      return _super2.apply(this, arguments);
    }

    _createClass(GuidePage, [{
      key: "render",
      value: function render() {
        var link = function link(url, label) {
          return /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
            activeClassName: "active",
            to: url
          }, label);
        };

        return /*#__PURE__*/React.createElement("main", {
          className: "guide_page"
        }, /*#__PURE__*/React.createElement("section", {
          className: "page_navigation"
        }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
          className: "nav_header"
        }, "Overview"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, link("/about", "About")), /*#__PURE__*/React.createElement("li", null, link("/guide/generators", "Generators")), /*#__PURE__*/React.createElement("li", null, link("/guide/chords", "Chords")), /*#__PURE__*/React.createElement("li", null, link("/guide/ear-training", "Ear Training"))))), /*#__PURE__*/React.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
          exact: true,
          path: "/about"
        }, /*#__PURE__*/React.createElement(GuideContents, {
          title: "About Pianistica",
          pageSource: "about"
        })), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
          exact: true,
          path: "/guide/generators"
        }, /*#__PURE__*/React.createElement(GuideContents, {
          title: "Sight Reading Random Notes",
          pageSource: "generators"
        })), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
          exact: true,
          path: "/guide/chords"
        }, /*#__PURE__*/React.createElement(GuideContents, {
          title: "Sight Reading Random Chords",
          pageSource: "chord_generators"
        })), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
          exact: true,
          path: "/guide/ear-training"
        }, /*#__PURE__*/React.createElement(GuideContents, {
          title: "Ear Training Tools",
          pageSource: "ear_training"
        })), /*#__PURE__*/React.createElement(_reactRouterDom.Route, null, /*#__PURE__*/React.createElement("div", {
          className: "page_container"
        }, /*#__PURE__*/React.createElement("h2", null, "Not found"), /*#__PURE__*/React.createElement("p", null, "Failed to find documentation page")))));
      }
    }]);

    return GuidePage;
  }(React.PureComponent);

  _exports["default"] = GuidePage;
});

define("st/components/pages/latency", ["exports", "react", "st/midi", "prop-types"], function (_exports, React, _midi, types) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);
  types = _interopRequireWildcard(types);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  var LatencyPage = /*#__PURE__*/function (_React$Component) {
    _inherits(LatencyPage, _React$Component);

    var _super = _createSuper(LatencyPage);

    function LatencyPage() {
      _classCallCheck(this, LatencyPage);

      return _super.apply(this, arguments);
    }

    _createClass(LatencyPage, [{
      key: "render",
      value: function render() {
        var _this = this;

        var metronomeButton = /*#__PURE__*/React.createElement("button", {
          onClick: function onClick(e) {
            e.preventDefault();

            var metronome = _this.props.midiOutput.getMetronome();

            _this.setState({
              metronome: metronome
            });

            metronome.start(60);
          }
        }, "Start metronome");
        return /*#__PURE__*/React.createElement("div", {
          className: "latency_page"
        }, this.props.midiOutput ? metronomeButton : "Configure output to test latency");
      }
    }, {
      key: "onMidiMessage",
      value: function onMidiMessage(message) {
        if (!this.state.metronome) {
          return;
        }

        var _message$data = _slicedToArray(message.data, 3),
            raw = _message$data[0],
            pitch = _message$data[1],
            velocity = _message$data[2];

        var cmd = raw >> 4,
            channel = raw & 0xf,
            type = raw & 0xf0;

        if (_midi.NOTE_EVENTS[type] == "noteOn") {
          if (velocity != 0) {
            console.log(this.state.metronome.getLatency());
          }
        }
      }
    }]);

    return LatencyPage;
  }(React.Component);

  _exports["default"] = LatencyPage;
});

define("st/components/pages/login_page", ["exports", "react", "react-router-dom", "st/globals", "st/components/forms"], function (_exports, React, _reactRouterDom, _globals, _forms) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  var LoginPage = /*#__PURE__*/function (_React$Component) {
    _inherits(LoginPage, _React$Component);

    var _super = _createSuper(LoginPage);

    _createClass(LoginPage, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        (0, _globals.setTitle)("Log In");
      }
    }, {
      key: "afterSubmit",
      value: function afterSubmit(res) {
        if (res.errors) {
          this.setState({
            errorMessage: res.errors[0]
          });
          return;
        }

        N.init(res);
        this.setState({
          redirectTo: "/"
        });
      }
    }]);

    function LoginPage() {
      var _this;

      _classCallCheck(this, LoginPage);

      _this = _super.call(this);
      _this.state = {};
      return _this;
    }

    _createClass(LoginPage, [{
      key: "render",
      value: function render() {
        if (this.state.redirectTo) {
          return /*#__PURE__*/React.createElement(_reactRouterDom.Redirect, {
            to: this.state.redirectTo
          });
        }

        return /*#__PURE__*/React.createElement("div", {
          className: "login_page page_container"
        }, /*#__PURE__*/React.createElement("h2", null, "Log in"), /*#__PURE__*/React.createElement(_forms.JsonForm, {
          action: "/login.json",
          afterSubmit: this.afterSubmit.bind(this)
        }, this.state.errorMessage ? /*#__PURE__*/React.createElement("div", {
          className: "form_error"
        }, this.state.errorMessage) : null, /*#__PURE__*/React.createElement(_forms.TextInputRow, {
          name: "username",
          required: true
        }, "Username"), /*#__PURE__*/React.createElement(_forms.TextInputRow, {
          name: "password",
          type: "password",
          required: true
        }, "Password"), /*#__PURE__*/React.createElement("div", {
          className: "form_buttons"
        }, /*#__PURE__*/React.createElement("button", {
          className: "big_button"
        }, "Submit"), " or ", /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
          to: "/register"
        }, "Register"))));
      }
    }]);

    return LoginPage;
  }(React.Component);

  _exports["default"] = LoginPage;
});

define("st/components/pages/not_found", ["exports", "react", "st/globals"], function (_exports, React, _globals) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  var NotFoundPage = /*#__PURE__*/function (_React$PureComponent) {
    _inherits(NotFoundPage, _React$PureComponent);

    var _super = _createSuper(NotFoundPage);

    function NotFoundPage() {
      _classCallCheck(this, NotFoundPage);

      return _super.apply(this, arguments);
    }

    _createClass(NotFoundPage, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        (0, _globals.setTitle)("Not Found");
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("div", {
          className: "not_found_page page_container"
        }, /*#__PURE__*/React.createElement("h2", null, "Not found"), /*#__PURE__*/React.createElement("p", null, "The URL you requested doesn't exist."));
      }
    }]);

    return NotFoundPage;
  }(React.PureComponent);

  _exports["default"] = NotFoundPage;
});

define("st/components/pages/play_along_page", ["exports", "react", "st/components/keyboard", "st/components/staff_song_notes", "st/components/slider", "st/components/position_field", "st/components/hotkeys", "st/components/draggable", "st/components/lightbox", "st/components/song_editor", "st/song_parser", "st/song_timer", "st/music", "st/midi", "st/events", "st/data", "st/note_stats", "st/globals", "lib", "st/components/icons", "prop-types", "st/auto_chords", "react-transition-group"], function (_exports, React, _keyboard, _staff_song_notes, _slider, _position_field, _hotkeys, _draggable, _lightbox, _song_editor, _song_parser, _song_timer, _music, _midi, _events, _data, _note_stats, _globals, _lib, _icons, types, _auto_chords, _reactTransitionGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);
  _keyboard = _interopRequireDefault(_keyboard);
  _staff_song_notes = _interopRequireDefault(_staff_song_notes);
  _slider = _interopRequireDefault(_slider);
  _position_field = _interopRequireDefault(_position_field);
  _hotkeys = _interopRequireDefault(_hotkeys);
  _draggable = _interopRequireDefault(_draggable);
  _lightbox = _interopRequireDefault(_lightbox);
  _song_editor = _interopRequireDefault(_song_editor);
  _song_parser = _interopRequireDefault(_song_parser);
  _song_timer = _interopRequireDefault(_song_timer);
  _note_stats = _interopRequireDefault(_note_stats);
  types = _interopRequireWildcard(types);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var TimeBar = /*#__PURE__*/React.createElement("div", {
    className: "time_bar"
  });
  var EmptySong = [];

  var SettingsPanel = /*#__PURE__*/function (_React$Component) {
    _inherits(SettingsPanel, _React$Component);

    var _super = _createSuper(SettingsPanel);

    function SettingsPanel(props) {
      var _this;

      _classCallCheck(this, SettingsPanel);

      _this = _super.call(this, props);

      _this.setMinChordSpacing = function (value) {
        return (0, _events.trigger)(_assertThisInitialized(_this), "setMinChordSpacing", value);
      };

      _this.setAutochordsRate = function (value) {
        return (0, _events.trigger)(_assertThisInitialized(_this), "setAutochordsRate", value);
      };

      return _this;
    }

    _createClass(SettingsPanel, [{
      key: "render",
      value: function render() {
        var chordMinSpacing = this.props.chordMinSpacing || 0;
        var autochordsRate = this.props.autochordsRate || 1;
        return /*#__PURE__*/React.createElement("section", {
          className: "settings_panel"
        }, /*#__PURE__*/React.createElement("div", {
          className: "settings_header"
        }, /*#__PURE__*/React.createElement("button", {
          onClick: this.props.close
        }, "Close"), /*#__PURE__*/React.createElement("h3", null, "Settings")), /*#__PURE__*/React.createElement("section", {
          className: "settings_group"
        }, /*#__PURE__*/React.createElement("h4", null, "Autochords"), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("div", {
          className: "input_label"
        }, "Note spacing"), /*#__PURE__*/React.createElement("div", {
          className: "slider_row"
        }, /*#__PURE__*/React.createElement(_slider["default"], {
          min: -5,
          max: 10,
          onChange: this.setMinChordSpacing,
          value: chordMinSpacing
        }), /*#__PURE__*/React.createElement("span", {
          className: "current_value"
        }, chordMinSpacing))), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("div", {
          className: "input_label"
        }, "Multiplier"), /*#__PURE__*/React.createElement("div", {
          className: "slider_row"
        }, /*#__PURE__*/React.createElement(_slider["default"], {
          min: 1,
          max: 4,
          onChange: this.setAutochordsRate,
          value: autochordsRate
        }), /*#__PURE__*/React.createElement("span", {
          className: "current_value"
        }, autochordsRate))), this.renderAutochords()));
      }
    }, {
      key: "renderAutochords",
      value: function renderAutochords() {
        var _this2 = this;

        return _auto_chords.AutoChords.allGenerators.map(function (type, idx) {
          var name = type.displayName;
          return /*#__PURE__*/React.createElement("button", {
            onClick: function onClick(e) {
              return (0, _events.trigger)(_this2, "setAutochords", idx);
            },
            className: (0, _lib.classNames)("toggle_option", {
              active: idx == _this2.props.autoChordType
            }),
            key: name
          }, name);
        });
      }
    }]);

    return SettingsPanel;
  }(React.Component);

  _defineProperty(SettingsPanel, "propTypes", {
    autoChordType: types.number.isRequired
  });

  var PlayAlongPage = /*#__PURE__*/function (_React$Component2) {
    _inherits(PlayAlongPage, _React$Component2);

    var _super2 = _createSuper(PlayAlongPage);

    function PlayAlongPage(props) {
      var _this3;

      _classCallCheck(this, PlayAlongPage);

      _this3 = _super2.call(this, props);
      _this3.songEditorRef = React.createRef();
      _this3.state = {
        heldNotes: {},
        // notes by name, for the keyboard
        heldSongNotes: {},
        bpm: 60,
        pixelsPerBeat: _staff_song_notes["default"].defaultPixelsPerBeat,
        loopLeft: 0,
        loopRight: 0,
        playNotes: true,
        metronomeMultiplier: 1.0,
        autoChordType: 0,
        enableEditor: _this3.props.editorOpen || false,
        enablePauseOnMiss: false,
        enabledTracks: {},
        metronome: props.midiOutput ? props.midiOutput.getMetronome() : null
      };
      _this3.stats = new _note_stats["default"](N.session.currentUser);

      _this3.resetHitNotes();

      _this3.midiInput = new _midi.MidiInput({
        sustainPedalEnabled: true,
        noteOn: function noteOn(note) {
          return _this3.pressNote(note);
        },
        noteOff: function noteOff(note) {
          return _this3.releaseNote(note);
        }
      });
      _this3.pressNote = _this3.pressNote.bind(_assertThisInitialized(_this3));
      _this3.releaseNote = _this3.releaseNote.bind(_assertThisInitialized(_this3));

      _this3.seekBpm = function (pos) {
        return _this3.state.songTimer.seek(pos);
      };

      _this3.keyMap = {
        " ": function _(e) {
          return _this3.togglePlay();
        },
        "esc": function esc(e) {
          if (!_this3.state.songTimer) return;

          if (_this3.state.songTimer.running) {
            _this3.state.songTimer.pause();
          } else {
            _this3.state.songTimer.reset(_this3.state.loopLeft || 0);
          }
        },
        "left": function left(e) {
          if (!_this3.state.songTimer) return;

          _this3.state.songTimer.scrub(-1);
        },
        "right": function right(e) {
          if (!_this3.state.songTimer) return;

          _this3.state.songTimer.scrub(1);
        }
      };
      return _this3;
    }

    _createClass(PlayAlongPage, [{
      key: "resetHitNotes",
      value: function resetHitNotes() {
        this.hitNotes = new Set();
      }
    }, {
      key: "getSetter",
      value: function getSetter(name) {
        var _this4 = this;

        if (!this.setters) {
          this.setters = {};
        }

        if (!this.setters[name]) {
          this.setters[name] = function (val) {
            return _this4.setState(_defineProperty({}, name, val));
          };
        }

        return this.setters[name];
      }
    }, {
      key: "getToggler",
      value: function getToggler(name) {
        var _this5 = this;

        if (!this.setters) {
          this.setters = {};
        }

        if (!this.setters[name]) {
          this.setters[name] = function (e) {
            return _this5.setState(_defineProperty({}, name, e.target.checked));
          };
        }

        return this.setters[name];
      }
    }, {
      key: "songParserParams",
      value: function songParserParams() {
        var autoChordIdx = this.state.autoChordType % _auto_chords.AutoChords.allGenerators.length;
        return {
          autoChords: _auto_chords.AutoChords.allGenerators[autoChordIdx],
          autoChordsSettings: {
            chordMinSpacing: this.state.chordMinSpacing,
            rate: this.state.autochordsRate
          }
        };
      } // re-render the song with new autochords

    }, {
      key: "refreshSong",
      value: function refreshSong() {
        var code = this.state.currentSongCode;

        try {
          var song = _song_parser["default"].load(code, this.songParserParams());

          this.setSong(song);
        } catch (e) {
          this.setState({
            songError: e.message
          });
          return;
        }
      }
    }, {
      key: "loadSong",
      value: function loadSong() {
        var _this6 = this;

        if (this.state.loading) {
          return;
        }

        this.setState({
          loading: true
        });
        var request = new XMLHttpRequest();
        var songId = this.props.match.params.song_id;

        if (!songId) {
          console.error("no song id to load");
        }

        request.open("GET", "/songs/".concat(songId, ".json"));

        request.onload = function (e) {
          try {
            var res = JSON.parse(request.responseText);

            _this6.setState({
              songModel: res.song,
              currentSongCode: res.song.song
            });

            _this6.stats.setTimerUrl("/songs/".concat(res.song.id, "/stats.json"));
          } catch (e) {
            _this6.setState({
              songError: "Failed to fetch song"
            });
          }
        };

        request.send();
      }
    }, {
      key: "setSong",
      value: function setSong(song) {
        var _this7 = this;

        var currentBeat = this.currentBeat;

        if (this.state.songTimer) {
          this.state.songTimer.reset();
        }

        this.setState({
          loading: false,
          songError: null,
          song: song,
          loopLeft: 0,
          loopRight: song.getStopInBeats(),
          songTimer: new _song_timer["default"]({
            onUpdate: this.updateBeat.bind(this),
            onNoteStart: this.onNoteStart.bind(this),
            onNoteStop: this.onNoteStop.bind(this),
            song: song
          })
        }, function () {
          // restore our position in the song (temporary while we edit)
          _this7.state.songTimer.beat = currentBeat || 0;

          _this7.updateBeat(currentBeat || 0);
        });
      }
    }, {
      key: "onNoteStart",
      value: function onNoteStart(note) {
        var _this8 = this;

        var noteStart = note.getStart();

        if (noteStart >= this.state.loopRight) {
          return;
        }

        if (noteStart < this.state.loopLeft) {
          return;
        }

        if (this.state.playNotes && this.props.midiOutput) {
          this.props.midiOutput.noteOn((0, _music.parseNote)(note.note), 100);
        }

        if (this.state.enablePauseOnMiss) {
          var currentSong = this.state.song;

          if (!this.hitNotes.has(note)) {
            window.setTimeout(function () {
              if (_this8.state.song != currentSong) {
                return;
              }

              if (!_this8.state.songTimer.running) {
                return;
              }

              if (_this8.hitNotes.has(note)) {
                return;
              }

              if (noteStart > _this8.currentBeat) {
                return;
              }

              _this8.state.songTimer.pause();

              _this8.state.songTimer.seek(noteStart);
            }, 100);
          }
        }
      }
    }, {
      key: "onNoteStop",
      value: function onNoteStop(note) {
        if (this.state.playNotes && this.props.midiOutput) {
          this.props.midiOutput.noteOff((0, _music.parseNote)(note.note), 100);
        }
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this9 = this;

        (0, _globals.setTitle)("Play along");
        this.updateBeat(0);

        if (!this.props.newSong) {
          this.loadSong();
        }

        (0, _events.dispatch)(this, {
          setMinChordSpacing: function setMinChordSpacing(e, value) {
            _this9.setState({
              chordMinSpacing: value
            }, function () {
              return _this9.refreshSong();
            });
          },
          setAutochordsRate: function setAutochordsRate(e, value) {
            _this9.setState({
              autochordsRate: value
            }, function () {
              return _this9.refreshSong();
            });
          },
          setAutochords: function setAutochords(e, t) {
            _this9.setState({
              autoChordType: t
            }, function () {
              return _this9.refreshSong();
            });
          }
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.state.songTimer) {
          this.state.songTimer.reset();
        }
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.midiOutput != this.props.midiOutput) {
          this.setState({
            metronome: nextProps.midiOutput ? nextProps.midiOutput.getMetronome() : null
          });
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        if (prevState.bpm != this.state.bpm) {
          if (this.state.songTimer) {
            this.state.songTimer.setBpm(this.state.bpm);
          }
        }

        if (prevState.currentSongCode != this.state.currentSongCode) {
          this.refreshSong();
        }
      }
    }, {
      key: "updateBeat",
      value: function updateBeat(beat) {
        var _this10 = this;

        if (this.state.song) {
          if (beat > this.state.loopRight) {
            this.resetHitNotes();
            this.state.songTimer.seek(this.state.loopLeft);
          }

          if (this.trackRefs) {
            this.trackRefs.forEach(function (r) {
              if (r.current) {
                r.current.setOffset(-beat * _this10.state.pixelsPerBeat + 100);
              }
            });
          }

          if (this.refs.staff) {
            // if the staff isn't on the page yet then it will render with correct
            // default?
            this.refs.staff.setOffset(-beat * this.state.pixelsPerBeat + 100);
          }
        }

        if (this.state.metronome) {
          var mm = this.state.metronomeMultiplier;
          var beatsMeasure = 4;

          if (this.state.song && this.state.song.metadata.beatsPerMeasure) {
            beatsMeasure = this.state.song.metadata.beatsPerMeasure;
          }

          if ("currentBeat" in this) {
            if (Math.floor(this.currentBeat * mm) < Math.floor(beat * mm)) {
              var m = Math.floor(beat * mm);

              if (m % beatsMeasure == 0) {
                this.state.metronome.tick();
              } else {
                this.state.metronome.tock();
              }
            }
          }
        }

        this.currentBeat = beat;
        this.refs.currentBeatField.setState({
          value: beat
        });
      }
    }, {
      key: "getTrackRef",
      value: function getTrackRef(idx) {
        if (!this.trackRefs) {
          this.trackRefs = [];
        }

        if (!this.trackRefs[idx]) {
          this.trackRefs[idx] = React.createRef();
        }

        return this.trackRefs[idx];
      }
    }, {
      key: "renderTracks",
      value: function renderTracks() {
        var _this11 = this;

        if (!this.state.song) {
          return null;
        }

        var keySignature = _music.KeySignature.forCount(0);

        if (this.state.song && this.state.song.metadata) {
          keySignature = _music.KeySignature.forCount(this.state.song.metadata.keySignature);
        }

        var renderedTracks = this.state.song.tracks.filter(function (t) {
          return !!t;
        }).map(function (track, idx) {
          var staff = track.fittingStaff();

          var staffType = _data.STAVES.find(function (s) {
            return s.name == staff;
          });

          if (!staffType) {
            return;
          }

          if (_this11.state.enabledTracks[idx] == false) {
            return;
          }

          var staffProps = {
            ref: _this11.getTrackRef(idx),
            key: "track-".concat(idx),
            notes: track,
            heldNotes: _this11.state.heldSongNotes,
            keySignature: keySignature,
            pixelsPerBeat: _this11.state.pixelsPerBeat,
            children: TimeBar,
            loopLeft: _this11.state.loopLeft,
            loopRight: _this11.state.loopRight
          };
          return staffType.render.call(_this11, staffProps);
        });

        if (!renderedTracks.find(function (t) {
          return !!t;
        })) {
          return /*#__PURE__*/React.createElement("div", {
            className: "empty_tracks"
          }, "No tracks to display");
        }

        return /*#__PURE__*/React.createElement(_draggable["default"], {
          onDrag: function onDrag(dx, dy) {
            _this11.state.songTimer.scrub(-dx / _this11.state.pixelsPerBeat);
          }
        }, renderedTracks);
      }
    }, {
      key: "render",
      value: function render() {
        var keySignature = _music.KeySignature.forCount(0);

        if (this.state.song && this.state.song.metadata) {
          keySignature = _music.KeySignature.forCount(this.state.song.metadata.keySignature);
        }

        var songError = null;

        if (this.state.songError) {
          songError = /*#__PURE__*/React.createElement("div", {
            className: "song_error"
          }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "There was an error loading the song: "), this.state.songError));
        }

        var renderedTracks = this.renderTracks();
        return /*#__PURE__*/React.createElement("div", {
          className: (0, _lib.classNames)("play_along_page", {
            has_song: !!renderedTracks
          })
        }, /*#__PURE__*/React.createElement(_reactTransitionGroup.TransitionGroup, null, this.renderSettings()), /*#__PURE__*/React.createElement("div", {
          className: (0, _lib.classNames)("play_along_workspace", {
            settings_open: this.state.settingsPanelOpen
          })
        }, this.state.songModel ? /*#__PURE__*/React.createElement("h2", null, this.state.songModel.title) : null, this.renderSongTrackTools(), /*#__PURE__*/React.createElement("div", {
          className: "staff_wrapper"
        }, songError, renderedTracks, this.renderTransportControls()), this.state.enableEditor ? this.renderEditor() : this.renderKeyboard()), /*#__PURE__*/React.createElement(_hotkeys["default"], {
          keyMap: this.keyMap
        }));
      }
    }, {
      key: "renderSongTrackTools",
      value: function renderSongTrackTools() {
        var _this12 = this;

        if (!this.state.song || !this.state.song.tracks) {
          return;
        }

        var tracks = this.state.song.tracks.filter(function (t) {
          return !!t;
        });

        if (tracks.length <= 1) {
          return;
        }

        return /*#__PURE__*/React.createElement("ul", {
          className: "song_tracks"
        }, tracks.map(function (t, idx) {
          var title = "Track ".concat(idx + 1);

          if (t.trackName) {
            title = t.trackName;
          }

          var trackEnabled = _this12.state.enabledTracks[idx];

          if (trackEnabled == undefined) {
            trackEnabled = true;
          }

          return /*#__PURE__*/React.createElement("li", {
            key: idx
          }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
            checked: trackEnabled,
            type: "checkbox",
            onChange: function onChange(e) {
              _this12.setState({
                enabledTracks: Object.assign({}, _this12.state.enabledTracks, _defineProperty({}, idx, e.target.checked))
              });
            }
          }), " ", title));
        }));
      }
    }, {
      key: "renderSettings",
      value: function renderSettings() {
        var _this13 = this;

        if (!this.state.settingsPanelOpen) {
          return;
        }

        return /*#__PURE__*/React.createElement(_reactTransitionGroup.CSSTransition, {
          classNames: "slide_right",
          timeout: {
            enter: 200,
            exit: 100
          }
        }, /*#__PURE__*/React.createElement(SettingsPanel, {
          autoChordType: this.state.autoChordType,
          chordMinSpacing: this.state.chordMinSpacing,
          autochordsRate: this.state.autochordsRate,
          close: function close() {
            return _this13.setState({
              settingsPanelOpen: !_this13.state.settingsPanelOpen
            });
          }
        }));
      }
    }, {
      key: "togglePlay",
      value: function togglePlay() {
        if (!this.state.songTimer) {
          return;
        }

        if (this.state.songTimer.running) {
          this.state.songTimer.pause();
        } else {
          this.resetHitNotes();
          this.state.songTimer.start(this.state.bpm);
        }

        this.forceUpdate();
      }
    }, {
      key: "pressNote",
      value: function pressNote(note) {
        if (!this.state.song) return;

        if (this.songEditorRef.current) {
          this.songEditorRef.current.pressNote(note);
          return;
        }

        if (!this.state.songTimer.running) {
          this.resetHitNotes();
          this.state.songTimer.start(this.state.bpm);
        }

        var songNoteIdx = this.state.song.matchNoteFast(note, this.currentBeat, this.state.loopRight, this.state.loopLeft);
        var songNote = this.state.song[songNoteIdx];
        var recordHit = false;

        if (songNote) {
          var accuracy = this.state.songTimer.beatsToSeconds(this.currentBeat - songNote.start);

          if (Math.abs(accuracy) < 1 && !this.hitNotes.has(songNote)) {
            this.hitNotes.add(songNote);
            recordHit = true;
          }
        }

        if (recordHit) {
          this.stats.hitNotes([songNote.note]);
        } else {
          if (songNote) {
            this.stats.missNotes([songNote.note]);
          } else {
            this.stats.missNotes([]);
          }
        }

        var heldNotes = _objectSpread({}, this.state.heldNotes, _defineProperty({}, note, {
          songNote: songNote
        }));

        var heldSongNotes = this.state.heldSongNotes;

        if (songNote) {
          heldSongNotes = _objectSpread({}, heldSongNotes, _defineProperty({}, songNote.id, songNote));
        }

        this.setState({
          heldNotes: heldNotes,
          heldSongNotes: heldSongNotes
        });
      }
    }, {
      key: "releaseNote",
      value: function releaseNote(note) {
        var held = this.state.heldNotes[note];
        if (!held) return; // song changed between press/relese

        var heldNotes = _objectSpread({}, this.state.heldNotes);

        delete heldNotes[note];
        var heldSongNotes = this.state.heldSongNotes;

        if (held.songNote) {
          heldSongNotes = _objectSpread({}, heldSongNotes);
          delete heldSongNotes[held.songNote.id];
        }

        this.setState({
          heldNotes: heldNotes,
          heldSongNotes: heldSongNotes
        });
      }
    }, {
      key: "onMidiMessage",
      value: function onMidiMessage(message) {
        this.midiInput.onMidiMessage(message);
      }
    }, {
      key: "renderKeyboard",
      value: function renderKeyboard() {
        return /*#__PURE__*/React.createElement(_keyboard["default"], {
          lower: "C4",
          upper: "C7",
          midiOutput: this.props.midiOutput,
          heldNotes: this.state.heldNotes,
          onKeyDown: this.pressNote,
          onKeyUp: this.releaseNote
        });
      }
    }, {
      key: "renderEditor",
      value: function renderEditor() {
        var _this14 = this;

        return /*#__PURE__*/React.createElement(_song_editor["default"], {
          parserParams: this.songParserParams(),
          ref: this.songEditorRef,
          songNotes: this.state.song,
          song: this.state.songModel,
          code: this.state.currentSongCode,
          onCode: function onCode(code) {
            return _this14.setState({
              currentSongCode: code
            });
          }
        });
      }
    }, {
      key: "renderTransportControls",
      value: function renderTransportControls() {
        var _this15 = this;

        var stop = 0;

        if (this.state.song) {
          stop = this.state.song.getStopInBeats();
        }

        return /*#__PURE__*/React.createElement("div", {
          className: "transport_controls"
        }, this.state.songTimer ? /*#__PURE__*/React.createElement("button", {
          type: "button",
          title: "Rewind to beginning",
          onClick: function onClick(e) {
            if (_this15.state.songTimer.running) {
              _this15.state.songTimer.pause();
            } else {
              _this15.state.songTimer.reset(_this15.state.loopLeft || 0);
            }
          }
        }, /*#__PURE__*/React.createElement(_icons.IconRewind, {
          width: 15
        })) : null, this.state.songTimer ? /*#__PURE__*/React.createElement("button", {
          className: "play_pause",
          type: "button",
          onClick: function onClick(e) {
            return _this15.togglePlay();
          }
        }, this.state.songTimer.running ? "Pause" : "Play") : null, /*#__PURE__*/React.createElement(_position_field["default"], {
          ref: "currentBeatField",
          min: 0,
          max: stop,
          value: this.currentBeat,
          onUpdate: this.seekBpm,
          title: "Play position (in beats)"
        }), /*#__PURE__*/React.createElement("input", {
          checked: this.state.enablePauseOnMiss || false,
          onChange: this.getToggler("enablePauseOnMiss"),
          title: "Automatically pause on miss",
          type: "checkbox"
        }), /*#__PURE__*/React.createElement("span", {
          className: "loop_controls"
        }, /*#__PURE__*/React.createElement("span", {
          className: "label_text"
        }, "Loop"), /*#__PURE__*/React.createElement(_position_field["default"], {
          ref: "loopLeft",
          min: 0,
          max: this.state.loopRight,
          resetValue: 0,
          value: this.state.loopLeft,
          title: "Loop left",
          onUpdate: this.getSetter("loopLeft")
        }), /*#__PURE__*/React.createElement(_position_field["default"], {
          ref: "loopRight",
          min: this.state.loopLeft,
          max: stop,
          resetValue: stop,
          value: this.state.loopRight,
          title: "Loop right",
          onUpdate: this.getSetter("loopRight")
        })), /*#__PURE__*/React.createElement("div", {
          className: "spacer"
        }), /*#__PURE__*/React.createElement(_position_field["default"], {
          min: 1,
          max: 10,
          title: "Metronome multiplier",
          value: this.state.metronomeMultiplier,
          onUpdate: this.getSetter("metronomeMultiplier")
        }), /*#__PURE__*/React.createElement("input", {
          checked: this.state.playNotes || false,
          onChange: function onChange(e) {
            _this15.state.songTimer.clearPlayingNotes();

            _this15.getToggler("playNotes")(e);
          },
          title: "Play notes to MIDI output",
          type: "checkbox"
        }), /*#__PURE__*/React.createElement("button", {
          onClick: function onClick(e) {
            return _this15.setState({
              enableEditor: !_this15.state.enableEditor
            });
          }
        }, "Editor"), /*#__PURE__*/React.createElement("button", {
          onClick: function onClick(e) {
            return _this15.setState({
              settingsPanelOpen: !_this15.state.settingsPanelOpen
            });
          }
        }, "Settings"), /*#__PURE__*/React.createElement("span", {
          className: "slider_input transport_slider"
        }, /*#__PURE__*/React.createElement("span", {
          className: "slider_label",
          title: "Beats per minute (how fast the songs plays)"
        }, "BPM"), /*#__PURE__*/React.createElement(_slider["default"], {
          min: 10,
          max: 300,
          onChange: this.getSetter("bpm"),
          value: +this.state.bpm
        }), /*#__PURE__*/React.createElement("span", {
          className: "slider_value"
        }, this.state.bpm)), /*#__PURE__*/React.createElement("span", {
          className: "slider_input transport_slider"
        }, /*#__PURE__*/React.createElement("span", {
          className: "slider_label",
          title: "Pixels per beat (how spaced out the notes are)"
        }, "PPB"), /*#__PURE__*/React.createElement(_slider["default"], {
          min: 50,
          max: 300,
          onChange: this.getSetter("pixelsPerBeat"),
          value: +this.state.pixelsPerBeat
        }), /*#__PURE__*/React.createElement("span", {
          className: "slider_value"
        }, this.state.pixelsPerBeat)));
      }
    }, {
      key: "midiOutputs",
      value: function midiOutputs() {
        if (!this.props.midi) return [];
        return _toConsumableArray(this.props.midi.outputs.values());
      }
    }]);

    return PlayAlongPage;
  }(React.Component);

  _exports["default"] = PlayAlongPage;
});

define("st/components/pages/register_page", ["exports", "react", "react-router-dom", "st/globals", "st/components/forms"], function (_exports, React, _reactRouterDom, _globals, _forms) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  var RegisterPage = /*#__PURE__*/function (_React$Component) {
    _inherits(RegisterPage, _React$Component);

    var _super = _createSuper(RegisterPage);

    _createClass(RegisterPage, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        (0, _globals.setTitle)("Register Account");
      }
    }, {
      key: "afterSubmit",
      value: function afterSubmit(res) {
        if (res.errors) {
          this.setState({
            errorMessage: res.errors[0]
          });
          return;
        }

        N.init(res);
        this.setState({
          redirectTo: "/"
        });
      }
    }]);

    function RegisterPage() {
      var _this;

      _classCallCheck(this, RegisterPage);

      _this = _super.call(this);
      _this.state = {};
      return _this;
    }

    _createClass(RegisterPage, [{
      key: "render",
      value: function render() {
        if (this.state.redirectTo) {
          return /*#__PURE__*/React.createElement(_reactRouterDom.Redirect, {
            to: this.state.redirectTo
          });
        }

        return /*#__PURE__*/React.createElement("div", {
          className: "register_page page_container"
        }, /*#__PURE__*/React.createElement("h2", null, "Register"), /*#__PURE__*/React.createElement("p", null, "Create an account to keep track of your progress over time."), /*#__PURE__*/React.createElement(_forms.JsonForm, {
          action: "/register.json",
          afterSubmit: this.afterSubmit.bind(this)
        }, this.state.errorMessage ? /*#__PURE__*/React.createElement("div", {
          className: "form_error"
        }, this.state.errorMessage) : null, /*#__PURE__*/React.createElement(_forms.TextInputRow, {
          name: "username",
          required: true
        }, "Username"), /*#__PURE__*/React.createElement(_forms.TextInputRow, {
          name: "email",
          type: "email",
          required: true
        }, "Email address"), /*#__PURE__*/React.createElement(_forms.TextInputRow, {
          name: "password",
          type: "password",
          required: true
        }, "Password"), /*#__PURE__*/React.createElement(_forms.TextInputRow, {
          name: "password_repeat",
          type: "password",
          required: true
        }, "Confirm password"), /*#__PURE__*/React.createElement("div", {
          className: "form_buttons"
        }, /*#__PURE__*/React.createElement("button", {
          className: "big_button"
        }, "Submit"), " or ", /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
          to: "/login"
        }, "Log in to existing account"))));
      }
    }]);

    return RegisterPage;
  }(React.Component);

  _exports["default"] = RegisterPage;
});

define("st/components/pages/sight_reading_page", ["exports", "st/note_list", "st/chord_list", "st/note_stats", "st/slide_to_zero", "st/components/slider", "st/components/keyboard", "st/components/sight_reading/stats_lightbox", "st/music", "st/data", "st/components/sight_reading/settings_panel", "st/globals", "st/events", "st/midi", "st/generators", "react", "lib", "st/browser", "prop-types", "react-transition-group"], function (_exports, _note_list, _chord_list, _note_stats, _slide_to_zero, _slider, _keyboard, _stats_lightbox, _music, _data, _settings_panel, _globals, _events, _midi, _generators, React, _lib, _browser, types, _reactTransitionGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _note_list = _interopRequireDefault(_note_list);
  _chord_list = _interopRequireDefault(_chord_list);
  _note_stats = _interopRequireDefault(_note_stats);
  _slide_to_zero = _interopRequireDefault(_slide_to_zero);
  _slider = _interopRequireDefault(_slider);
  _keyboard = _interopRequireDefault(_keyboard);
  _stats_lightbox = _interopRequireDefault(_stats_lightbox);
  React = _interopRequireWildcard(React);
  types = _interopRequireWildcard(types);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  var DEFAULT_NOTE_WIDTH = 100;
  var DEFAULT_SPEED = 4;

  var SightReadingPage = /*#__PURE__*/function (_React$Component) {
    _inherits(SightReadingPage, _React$Component);

    var _super = _createSuper(SightReadingPage);

    function SightReadingPage(props) {
      var _this;

      _classCallCheck(this, SightReadingPage);

      _this = _super.call(this, props);
      _this.pressNote = _this.pressNote.bind(_assertThisInitialized(_this));
      _this.releaseNote = _this.releaseNote.bind(_assertThisInitialized(_this));
      _this.onFullscreenChange = _this.onFullscreenChange.bind(_assertThisInitialized(_this));
      _this.state = {
        midi: null,
        noteShaking: false,
        anyOctave: false,
        heldNotes: {},
        touchedNotes: {},
        scrollSpeed: 100,
        noteWidth: DEFAULT_NOTE_WIDTH,
        bufferSize: 10,
        keyboardOpen: true,
        settingsOpen: false,
        scale: window.innerWidth < 1000 ? 0.8 : 1,
        stats: new _note_stats["default"](N.session.currentUser),
        keySignature: new _music.KeySignature(0),
        staffOptions: {}
      };
      return _this;
    }

    _createClass(SightReadingPage, [{
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        // transitioning to new staff or generator or key signature
        if (prevState.currentStaff != this.state.currentStaff || prevState.currentGenerator != this.state.currentGenerator || prevState.currentGeneratorSettings != this.state.currentGeneratorSettings || prevState.keySignature != this.state.keySignature) {
          this.refreshNoteList();
        }
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        (0, _globals.setTitle)();
        this.setStaff(_data.STAVES[0], function () {
          _this2.enterWaitMode();
        });
        (0, _events.dispatch)(this, {
          saveGeneratorPreset: function saveGeneratorPreset(e, form) {
            if (_this2.state.savingPreset) {
              return;
            }

            var preset = JSON.stringify({
              type: "notes",
              name: _this2.state.currentGenerator.name,
              settings: _this2.state.currentGeneratorSettings
            });

            _this2.setState({
              savingPreset: true
            });

            var request = new XMLHttpRequest();
            request.open("POST", "/new-preset.json");
            var data = new FormData(form);
            data.append("csrf_token", (0, _globals.csrfToken)());
            data.append("preset", preset);
            request.send(data);

            request.onload = function (e) {
              var res = JSON.parse(request.responseText);

              _this2.setState({
                savingPreset: false
              });
            };
          }
        });
        document.addEventListener("webkitfullscreenchange", this.onFullscreenChange);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        document.removeEventListener("webkitfullscreenchange", this.onFullscreenChange);

        if (this.nosleep && this.state.fullscreen) {
          this.nosleep.disable();
        }
      }
    }, {
      key: "onFullscreenChange",
      value: function onFullscreenChange(event) {
        if (document.webkitIsFullScreen) {
          console.log("is mobile", (0, _browser.isMobile)());

          if ((0, _browser.isMobile)()) {
            this.nosleep = this.nosleep || new _lib.NoSleep();
            this.nosleep.enable();
          }
        } else {
          if (this.nosleep) {
            this.nosleep.disable();
          }
        }

        this.setState({
          fullscreen: document.webkitIsFullScreen
        });
      }
    }, {
      key: "refreshNoteList",
      value: function refreshNoteList() {
        var generator = this.state.currentGenerator;

        var generatorSettings = _objectSpread({}, (0, _generators.generatorDefaultSettings)(generator, this.state.currentStaff), {}, this.state.currentGeneratorSettings);

        var generatorInstance = generator.create.call(generator, this.state.currentStaff, this.state.keySignature, generatorSettings);
        var notes;

        switch (generator.mode) {
          case "notes":
            notes = new _note_list["default"]([], {
              generator: generatorInstance
            });
            break;

          case "chords":
            notes = new _chord_list["default"]([], {
              generator: generatorInstance
            });
            break;
        }

        if (!notes) {
          throw new Error("unknown generator mode: ".concat(generator.mode));
        }

        notes.fillBuffer(this.state.bufferSize);
        return this.setState({
          notes: notes
        });
      } // called when held notes reaches 0

    }, {
      key: "checkRelease",
      value: function checkRelease() {
        var _this3 = this;

        switch (this.state.currentGenerator.mode) {
          case "notes":
            {
              var missed = this.state.notes.currentColumn().filter(function (n) {
                return !_this3.state.heldNotes[n];
              });
              (0, _globals.gaEvent)("sight_reading", "note", "miss");
              this.state.stats.missNotes(missed);
              this.setState({
                noteShaking: true,
                heldNotes: {},
                touchedNotes: {}
              });
              setTimeout(function () {
                return _this3.setState({
                  noteShaking: false
                });
              }, 500);
              break;
            }

          case "chords":
            {
              var touched = Object.keys(this.state.touchedNotes);

              if (this.state.notes.matchesHead(touched) && touched.length > 2) {
                (0, _globals.gaEvent)("sight_reading", "chord", "hit");
                this.state.notes.shift();
                this.state.notes.pushRandom();
                this.state.stats.hitNotes([]);
                this.setState({
                  notes: this.state.notes,
                  noteShaking: false,
                  heldNotes: {},
                  touchedNotes: {}
                });
                this.state.slider.add(1);
              } else {
                (0, _globals.gaEvent)("sight_reading", "chord", "miss");
                this.state.stats.missNotes([]);
                this.setState({
                  noteShaking: true,
                  heldNotes: {},
                  touchedNotes: {}
                });
                setTimeout(function () {
                  return _this3.setState({
                    noteShaking: false
                  });
                }, 500);
              }

              break;
            }
        }
      } // called on every noteOn
      // return true to trigger redraw

    }, {
      key: "checkPress",
      value: function checkPress() {
        switch (this.state.currentGenerator.mode) {
          case "notes":
            {
              var touched = Object.keys(this.state.touchedNotes);

              if (this.state.notes.matchesHead(touched, this.state.anyOctave)) {
                (0, _globals.gaEvent)("sight_reading", "note", "hit");
                this.state.notes.shift();
                this.state.notes.pushRandom();
                this.state.stats.hitNotes(touched);
                this.setState({
                  notes: this.state.notes,
                  noteShaking: false,
                  heldNotes: {},
                  touchedNotes: {}
                });
                this.state.slider.add(1);
                return true;
              } else {
                return false;
              }
            }

          case "chords":
            {
              // chords only check on release
              return false;
            }
        }
      }
    }, {
      key: "pressNote",
      value: function pressNote(note) {
        switch (this.state.currentGenerator.mode) {
          case "chords":
            {
              var ignoreAbove = this.state.currentGeneratorSettings.ignoreAbove;

              if (ignoreAbove != null) {
                console.log((0, _music.parseNote)(note), ignoreAbove, (0, _music.parseNote)(note) > ignoreAbove);

                if ((0, _music.parseNote)(note) > ignoreAbove) {
                  return;
                }
              }

              break;
            }
        }

        this.state.heldNotes[note] = true;
        this.state.touchedNotes[note] = true;

        if (!this.checkPress()) {
          this.forceUpdate();
        }
      }
    }, {
      key: "releaseNote",
      value: function releaseNote(note) {
        // note might no longer be considered held if we just moved to next note
        if (this.state.heldNotes[note]) {
          delete this.state.heldNotes[note];

          if (Object.keys(this.state.heldNotes).length == 0) {
            this.checkRelease();
          }
        }
      }
    }, {
      key: "onMidiMessage",
      value: function onMidiMessage(message) {
        var _message$data = _slicedToArray(message.data, 3),
            raw = _message$data[0],
            pitch = _message$data[1],
            velocity = _message$data[2];

        var cmd = raw >> 4,
            channel = raw & 0xf,
            type = raw & 0xf0;
        var n = (0, _music.noteName)(pitch);

        if (_midi.NOTE_EVENTS[type] === "noteOn") {
          if (velocity === 0) {
            this.releaseNote(n);
          } else if (!document.hidden) {
            // ignore when the browser tab isn't active
            this.pressNote(n);
          }
        }

        if (_midi.NOTE_EVENTS[type] === "noteOff") {
          this.releaseNote(n);
        }
      }
    }, {
      key: "toggleMode",
      value: function toggleMode() {
        if (this.state.mode === "wait") {
          this.enterScrollMode();
        } else {
          this.enterWaitMode();
        }
      }
    }, {
      key: "enterWaitMode",
      value: function enterWaitMode() {
        if (this.state.slider) {
          this.state.slider.cancel();
        }

        this.setState({
          mode: "wait",
          noteWidth: DEFAULT_NOTE_WIDTH,
          slider: new _slide_to_zero["default"]({
            speed: DEFAULT_SPEED,
            onUpdate: this.setOffset.bind(this)
          })
        });
      }
    }, {
      key: "enterScrollMode",
      value: function enterScrollMode() {
        var _this4 = this;

        var noteWidth = DEFAULT_NOTE_WIDTH * 2;

        if (this.state.slider) {
          this.state.slider.cancel();
        }

        this.setState({
          mode: "scroll",
          noteWidth: noteWidth,
          slider: new _slide_to_zero["default"]({
            speed: this.state.scrollSpeed / 100,
            loopPhase: 1,
            initialValue: 4,
            onUpdate: function onUpdate(value) {
              if (value < 0.5) {
                _this4.state.slider.value = 0.5;

                _this4.state.slider.cancel();
              }

              _this4.setOffset(value);
            },
            onLoop: function () {
              this.state.stats.missNotes(this.state.notes.currentColumn());
              this.state.notes.shift();
              this.state.notes.pushRandom();
              this.forceUpdate();
            }.bind(this)
          })
        });
      }
    }, {
      key: "setStaff",
      value: function setStaff(staff, callback) {
        var update = {
          currentStaff: staff
        }; // if the current generator is not compatible with new staff change it

        if (!this.state.currentGenerator || this.state.currentGenerator.mode != staff.mode) {
          var newGenerator = _data.GENERATORS.find(function (g) {
            return staff.mode == g.mode;
          });

          update.currentGenerator = newGenerator;
          update.currentGeneratorSettings = {};
        }

        this.setState(update, callback);
        return update;
      }
    }, {
      key: "setStaffOptions",
      value: function setStaffOptions(setOpts) {
        this.setState({
          staffOptions: Object.assign(this.state.staffOptions, setOpts)
        });
      }
    }, {
      key: "setOffset",
      value: function setOffset(value) {
        if (!this.staff) {
          return;
        }

        this.staff.setOffset(value);
      }
    }, {
      key: "toggleFullscreen",
      value: function toggleFullscreen() {
        var el = this.refs.page_container;

        if (el.webkitRequestFullscreen) {
          if (this.state.fullscreen) {
            document.webkitExitFullscreen();
            return;
          }

          el.webkitRequestFullscreen();

          if (window.screen && window.screen.orientation && window.screen.orientation.lock) {
            window.screen.orientation.lock("landscape");
          }
        }
      }
    }, {
      key: "toggleSettings",
      value: function toggleSettings() {
        this.setState({
          settingsOpen: !this.state.settingsOpen
        });
        this.recalcFlex();
      }
    }, {
      key: "toggleKeyboard",
      value: function toggleKeyboard() {
        this.setState({
          keyboardOpen: !this.state.keyboardOpen
        });
        this.recalcFlex();
      }
    }, {
      key: "recalcFlex",
      value: function recalcFlex() {
        this.refs.workspace.style.height = "0px";
        this.refs.workspace.offsetHeight;
        this.refs.workspace.style.height = "auto";
      }
    }, {
      key: "openStatsLightbox",
      value: function openStatsLightbox() {
        var _this5 = this;

        (0, _events.trigger)(this, "showLightbox", /*#__PURE__*/React.createElement(_stats_lightbox["default"], {
          resetStats: function resetStats() {
            return _this5.setState({
              stats: new _note_stats["default"]()
            });
          },
          stats: this.state.stats
        }));
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("div", {
          ref: "page_container",
          className: (0, _lib.classNames)("sight_reading_page", {
            fullscreen: this.state.fullscreen,
            keyboard_open: this.state.keyboardOpen,
            settings_open: this.state.settingsOpen,
            scroll_mode: this.state.mode == "scroll",
            wait_mode: this.state.mode == "wait"
          })
        }, this.renderWorkspace(), this.renderKeyboard(), /*#__PURE__*/React.createElement(_reactTransitionGroup.TransitionGroup, null, this.renderSettings()), this.renderKeyboardToggle());
      }
    }, {
      key: "renderKeyboardToggle",
      value: function renderKeyboardToggle() {
        if (!this.state.currentStaff) {
          return;
        }

        if (this.state.currentStaff.mode != "notes") {
          return;
        }

        return /*#__PURE__*/React.createElement("button", {
          onClick: this.toggleKeyboard.bind(this),
          className: "keyboard_toggle"
        }, this.state.keyboardOpen ? "Hide Keyboard" : "Show Keyboard");
      }
    }, {
      key: "renderSettings",
      value: function renderSettings() {
        var _this6 = this;

        if (!this.state.settingsOpen) {
          return;
        }

        return /*#__PURE__*/React.createElement(_reactTransitionGroup.CSSTransition, {
          classNames: "slide_right",
          timeout: {
            enter: 200,
            exit: 100
          }
        }, /*#__PURE__*/React.createElement(_settings_panel.SettingsPanel, {
          close: this.toggleSettings.bind(this),
          staves: _data.STAVES,
          generators: _data.GENERATORS,
          saveGeneratorPreset: this.state.savingPreset,
          currentGenerator: this.state.currentGenerator,
          currentGeneratorSettings: this.state.currentGeneratorSettings,
          currentStaff: this.state.currentStaff,
          currentKey: this.state.keySignature,
          setGenerator: function setGenerator(g, settings) {
            return _this6.setState({
              currentGenerator: g,
              currentGeneratorSettings: settings
            });
          },
          setStaff: this.setStaff.bind(this),
          setStaffOptions: this.setStaffOptions.bind(this),
          setKeySignature: function setKeySignature(k) {
            return _this6.setState({
              keySignature: k
            });
          },
          staffOptions: this.state.staffOptions
        }));
      }
    }, {
      key: "renderKeyboard",
      value: function renderKeyboard() {
        if (!this.state.currentStaff) {
          return;
        }

        if (this.state.currentStaff.mode != "notes") {
          return;
        }

        if (!this.state.keyboardOpen) {
          return;
        }

        var _this$state$currentSt = _slicedToArray(this.state.currentStaff.range, 2),
            lower = _this$state$currentSt[0],
            upper = _this$state$currentSt[1];

        return /*#__PURE__*/React.createElement(_keyboard["default"], {
          lower: lower,
          upper: upper,
          midiOutput: this.props.midiOutput,
          heldNotes: this.state.heldNotes,
          onKeyDown: this.pressNote,
          onKeyUp: this.releaseNote
        });
      }
    }, {
      key: "renderWorkspace",
      value: function renderWorkspace() {
        var _this7 = this;

        if (this.state.stats.streak) {
          var streak = /*#__PURE__*/React.createElement("div", {
            className: "stat_container"
          }, /*#__PURE__*/React.createElement("div", {
            className: "value"
          }, this.state.stats.streak), /*#__PURE__*/React.createElement("div", {
            className: "label"
          }, "streak"));
        }

        var fullscreenButton;

        if (document.body.webkitRequestFullscreen && !this.state.fullscreen) {
          fullscreenButton = /*#__PURE__*/React.createElement("button", {
            type: "button",
            onClick: function onClick(e) {
              return _this7.toggleFullscreen();
            }
          }, "Fullscreen");
        }

        var header = /*#__PURE__*/React.createElement("div", {
          className: "workspace_header"
        }, /*#__PURE__*/React.createElement("div", {
          className: "header_buttons"
        }, /*#__PURE__*/React.createElement("button", {
          onClick: this.toggleSettings.bind(this),
          className: "settings_toggle"
        }, "Configure"), " ", fullscreenButton), /*#__PURE__*/React.createElement("div", {
          className: "stats"
        }, streak, /*#__PURE__*/React.createElement("div", {
          className: "stat_container",
          onClick: this.openStatsLightbox.bind(this)
        }, /*#__PURE__*/React.createElement("div", {
          className: "value"
        }, this.state.stats.hits), /*#__PURE__*/React.createElement("div", {
          className: "label"
        }, "hits")), /*#__PURE__*/React.createElement("div", {
          className: "stat_container",
          onClick: this.openStatsLightbox.bind(this)
        }, /*#__PURE__*/React.createElement("div", {
          className: "value"
        }, this.state.stats.misses), /*#__PURE__*/React.createElement("div", {
          className: "label"
        }, "misses"))));
        var debug = /*#__PURE__*/React.createElement("div", {
          className: "debug"
        }, /*#__PURE__*/React.createElement("pre", null, "held: ", JSON.stringify(this.state.heldNotes), " ", "pressed: ", JSON.stringify(this.state.touchedNotes)));
        var modeToggle = /*#__PURE__*/React.createElement("div", {
          className: "tool"
        }, /*#__PURE__*/React.createElement("span", {
          className: "label"
        }, "Mode"), /*#__PURE__*/React.createElement("div", {
          onClick: this.toggleMode.bind(this),
          className: (0, _lib.classNames)("toggle_switch", {
            first: this.state.mode == "wait",
            second: this.state.mode == "scroll"
          })
        }, /*#__PURE__*/React.createElement("span", {
          className: "toggle_option"
        }, "Wait"), /*#__PURE__*/React.createElement("span", {
          className: "toggle_option"
        }, "Scroll")), /*#__PURE__*/React.createElement("span", {
          className: "speed_picker slider_input"
        }, /*#__PURE__*/React.createElement("span", {
          className: "slider_label"
        }, "Speed"), /*#__PURE__*/React.createElement(_slider["default"], {
          min: 50,
          max: 300,
          disabled: this.state.mode == "scroll",
          onChange: function onChange(value) {
            return _this7.setState({
              scrollSpeed: Math.round(value)
            });
          },
          value: +this.state.scrollSpeed
        }), /*#__PURE__*/React.createElement("span", {
          className: "slider_value"
        }, this.state.scrollSpeed)));
        var staff;

        if (this.state.currentStaff && this.state.notes) {
          staff = this.state.currentStaff.render.call(this, {
            heldNotes: this.state.heldNotes,
            notes: this.state.notes,
            keySignature: this.state.keySignature,
            noteWidth: this.state.noteWidth,
            noteShaking: this.state.noteShaking,
            scale: this.state.scale,
            showNotesLabel: !!this.state.staffOptions.showNotesLabel
          });
        }

        return /*#__PURE__*/React.createElement("div", {
          ref: "workspace",
          className: "workspace"
        }, /*#__PURE__*/React.createElement("div", {
          className: "workspace_wrapper"
        }, header, /*#__PURE__*/React.createElement("div", {
          className: "staff_wrapper"
        }, staff), /*#__PURE__*/React.createElement("div", {
          className: "toolbar"
        }, modeToggle)));
      }
    }]);

    return SightReadingPage;
  }(React.Component);

  _exports["default"] = SightReadingPage;
});

define("st/components/pages/songs", ["exports", "react", "react-router-dom"], function (_exports, React, _reactRouterDom) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  var SongCell = /*#__PURE__*/function (_React$PureComponent) {
    _inherits(SongCell, _React$PureComponent);

    var _super = _createSuper(SongCell);

    function SongCell() {
      _classCallCheck(this, SongCell);

      return _super.apply(this, arguments);
    }

    _createClass(SongCell, [{
      key: "render",
      value: function render() {
        var song = this.props.song;
        var publishStatus;
        var timePlayed;

        if (song.publish_status == "draft") {
          publishStatus = /*#__PURE__*/React.createElement("div", {
            className: "publish_status"
          }, "Draft");
        }

        if (song.current_user_time) {
          var minutes = song.current_user_time.time_spent / 60;
          timePlayed = /*#__PURE__*/React.createElement("div", {
            className: "time_played"
          }, "Played for ", minutes.toFixed(2).replace(/0+$/, "").replace(/\.$/, ""), " ", minutes == 1 ? "minute" : "minutes");
        }

        return /*#__PURE__*/React.createElement("div", {
          className: "song_cell"
        }, publishStatus, /*#__PURE__*/React.createElement("div", {
          className: "song_title"
        }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
          to: song.url
        }, song.title)), /*#__PURE__*/React.createElement("div", {
          className: "song_creator"
        }, song.user.name), timePlayed, /*#__PURE__*/React.createElement("div", {
          className: "song_stats"
        }, /*#__PURE__*/React.createElement("span", null, "Notes: ", song.notes_count), /*#__PURE__*/React.createElement("span", null, "Duration: ", song.beats_duration)));
      }
    }]);

    return SongCell;
  }(React.PureComponent);

  var SongsPage = /*#__PURE__*/function (_React$Component) {
    _inherits(SongsPage, _React$Component);

    var _super2 = _createSuper(SongsPage);

    function SongsPage(props) {
      var _this;

      _classCallCheck(this, SongsPage);

      _this = _super2.call(this, props);
      _this.state = {};
      return _this;
    }

    _createClass(SongsPage, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.refreshSongs();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.request) {
          this.request.abort();
          delete this.request;
        }
      }
    }, {
      key: "refreshSongs",
      value: function refreshSongs() {
        var _this2 = this;

        if (this.state.loading) {
          return;
        }

        this.setState({
          loading: true
        });
        var request = new XMLHttpRequest();
        var url = "/songs.json";

        if (this.props.filter) {
          url += "?filter=".concat(this.props.filter);
        }

        request.open("GET", url);
        request.send();

        request.onload = function (e) {
          delete _this2.request;

          try {
            var res = JSON.parse(request.responseText);
            console.log(res);

            _this2.setState({
              loading: false,
              songs: res.songs || [],
              mySongs: res.my_songs || []
            });
          } catch (e) {
            _this2.setState({
              loading: false,
              error_message: "Failed to fetch stats"
            });
          }
        };

        this.request = request;
      }
    }, {
      key: "renderSidebar",
      value: function renderSidebar() {
        return /*#__PURE__*/React.createElement("section", {
          className: "sidebar"
        }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
          to: "/new-song",
          className: "button new_song_button"
        }, "Create a new song"), /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
          exact: true,
          activeClassName: "active",
          to: "/play-along"
        }, "Overview")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
          exact: true,
          activeClassName: "active",
          to: "/play-along/recent"
        }, "Recently played")))));
      }
    }, {
      key: "renderMySongs",
      value: function renderMySongs() {
        if (!N.session.currentUser) {
          return null;
        }

        var songList;

        if (this.state.mySongs && this.state.mySongs.length) {
          songList = /*#__PURE__*/React.createElement("ul", {
            className: "song_cell_list"
          }, this.state.mySongs.map(function (song) {
            return /*#__PURE__*/React.createElement("li", {
              key: song.id
            }, /*#__PURE__*/React.createElement(SongCell, {
              song: song,
              key: song.id
            }));
          }));
        } else {
          songList = /*#__PURE__*/React.createElement("p", {
            className: "empty_message"
          }, "No results");
        }

        if (!songList) {
          songList = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Any songs you create or edit will show up here."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
            to: "/new-song",
            className: "button new_song_button"
          }, "Create a new song")));
        }

        return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", null, "My Songs"), songList);
      }
    }, {
      key: "renderOverview",
      value: function renderOverview() {
        if (!this.state.songs) {
          return /*#__PURE__*/React.createElement("div", {
            className: "page_container"
          }, "Loading...");
        }

        var songList;

        if (this.state.songs.length) {
          songList = /*#__PURE__*/React.createElement("ul", {
            className: "song_cell_list"
          }, this.state.songs.map(function (song) {
            return /*#__PURE__*/React.createElement("li", {
              key: song.id
            }, /*#__PURE__*/React.createElement(SongCell, {
              song: song,
              key: song.id
            }));
          }));
        } else {
          songList = /*#__PURE__*/React.createElement("p", {
            className: "empty_message"
          }, "No results");
        }

        return /*#__PURE__*/React.createElement("section", {
          className: "content_column"
        }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", null, "Songs"), songList), this.renderMySongs());
      }
    }, {
      key: "renderRecent",
      value: function renderRecent() {
        if (!this.state.songs) {
          return /*#__PURE__*/React.createElement("div", {
            className: "page_container"
          }, "Loading...");
        }

        var songList;

        if (this.state.songs.length) {
          songList = /*#__PURE__*/React.createElement("ul", {
            className: "song_cell_list"
          }, this.state.songs.map(function (song) {
            return /*#__PURE__*/React.createElement("li", {
              key: song.id
            }, /*#__PURE__*/React.createElement(SongCell, {
              song: song,
              key: song.id
            }));
          }));
        } else {
          songList = /*#__PURE__*/React.createElement("p", {
            className: "empty_message"
          }, "No results");
        }

        return /*#__PURE__*/React.createElement("section", {
          className: "content_column"
        }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", null, "Recently played"), songList));
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        return /*#__PURE__*/React.createElement("div", {
          className: "songs_page has_sidebar"
        }, this.renderSidebar(), /*#__PURE__*/React.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
          exact: true,
          path: "/play-along",
          render: function render() {
            return _this3.renderOverview();
          }
        }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
          exact: true,
          path: "/play-along/recent",
          render: function render() {
            return _this3.renderRecent();
          }
        }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, null, /*#__PURE__*/React.createElement("div", {
          className: "page_container"
        }, /*#__PURE__*/React.createElement("h2", null, "Not found"), /*#__PURE__*/React.createElement("p", null, "Invalid filter")))));
      }
    }]);

    return SongsPage;
  }(React.Component);

  _exports["default"] = SongsPage;
});

define("st/components/pages/stats", ["exports", "react", "lib", "st/globals", "react-chartjs-2"], function (_exports, React, _lib, _globals, _reactChartjs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  var StatsPage = /*#__PURE__*/function (_React$Component) {
    _inherits(StatsPage, _React$Component);

    var _super = _createSuper(StatsPage);

    function StatsPage(props) {
      var _this;

      _classCallCheck(this, StatsPage);

      _this = _super.call(this, props);
      _this.state = {};
      return _this;
    }

    _createClass(StatsPage, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        (0, _globals.setTitle)("Stats");

        if (!N.session.currentUser) {
          this.props.router.push("/");
        } else {
          this.loadStats();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.request) {
          this.request.abort();
          delete this.request;
        }
      }
    }, {
      key: "loadStats",
      value: function loadStats() {
        var _this2 = this;

        this.setState({
          loading: true,
          error_message: undefined,
          stats: undefined
        });
        var request = new XMLHttpRequest();
        var offset = new Date().getTimezoneOffset();
        request.open("GET", "/stats.json?offset=".concat(offset));
        request.send();

        request.onload = function (e) {
          delete _this2.request;

          try {
            var res = JSON.parse(request.responseText);

            _this2.setState({
              loading: false,
              stats: res.stats || []
            });
          } catch (e) {
            _this2.setState({
              loading: false,
              error_message: "Failed to fetch stats"
            });
          }
        };

        if (this.request) {
          this.request.abort();
          delete this.request;
        }

        this.request = request;
      }
    }, {
      key: "dateStops",
      value: function dateStops() {
        var days = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 15;
        var d = (0, _lib.moment)().utc().startOf("day");
        var out = [];

        for (var i = 0; i < days; i++) {
          out.push(d.format("YYYY-MM-DD"));
          d.add(-1, "d");
        }

        out.reverse();
        return out;
      }
    }, {
      key: "renderStats",
      value: function renderStats() {
        var stops = this.dateStops();
        var statsByDate = {};

        var _iterator = _createForOfIteratorHelper(this.state.stats),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var stat = _step.value;
            statsByDate[stat.date] = stat;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        var hits = [];
        var misses = [];

        var _iterator2 = _createForOfIteratorHelper(stops),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var stop = _step2.value;
            var s = statsByDate[stop];

            if (s) {
              hits.push(s.hits);
              misses.push(s.misses);
            } else {
              hits.push(0);
              misses.push(0);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        var options = {
          scales: {
            yAxes: [{
              stacked: true
            }]
          }
        };
        var data = {
          labels: stops.map(function (v, i) {
            if (i % 2 == 0) {
              return (0, _lib.moment)(v).format("MM/DD");
            }

            return "";
          }),
          datasets: [{
            label: "Misses",
            data: misses,
            backgroundColor: "rgba(251,145,117,0.1)",
            borderColor: "rgba(251,145,117,0.8)"
          }, {
            label: "Hits",
            data: hits,
            backgroundColor: "rgba(170,218,128,0.1)",
            borderColor: "rgba(170,218,128,0.8)"
          }]
        };
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Daily stats"), /*#__PURE__*/React.createElement(_reactChartjs.Line, {
          data: data,
          options: options,
          width: 600,
          height: 300
        }));
      }
    }, {
      key: "render",
      value: function render() {
        var inside;

        if (this.state.stats) {
          inside = this.renderStats();
        } else {
          inside = "Loading stats";
        }

        return /*#__PURE__*/React.createElement("div", {
          className: "stats_page page_container"
        }, inside);
      }
    }]);

    return StatsPage;
  }(React.Component);

  _exports["default"] = StatsPage;
});

define("st/components/sight_reading/settings_panel", ["exports", "react", "lib", "st/components/slider", "st/components/select", "st/events", "st/generators", "st/music", "prop-types"], function (_exports, React, _lib, _slider, _select, _events, _generators, _music, types) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.GeneratorSettings = _exports.SettingsPanel = void 0;
  React = _interopRequireWildcard(React);
  _slider = _interopRequireDefault(_slider);
  _select = _interopRequireDefault(_select);
  types = _interopRequireWildcard(types);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var SettingsPanel = /*#__PURE__*/function (_React$Component) {
    _inherits(SettingsPanel, _React$Component);

    var _super = _createSuper(SettingsPanel);

    function SettingsPanel(props) {
      var _this;

      _classCallCheck(this, SettingsPanel);

      _this = _super.call(this, props);
      _this.state = {};
      return _this;
    }

    _createClass(SettingsPanel, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (N.enable_presets) {
          this.loadPresets();
        }
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("section", {
          className: "settings_panel"
        }, /*#__PURE__*/React.createElement("div", {
          className: "settings_header"
        }, /*#__PURE__*/React.createElement("button", {
          onClick: this.props.close
        }, "Close"), /*#__PURE__*/React.createElement("h3", null, "Settings")), this.renderPresets(), /*#__PURE__*/React.createElement("section", {
          className: "settings_group"
        }, /*#__PURE__*/React.createElement("h4", null, "Staff"), this.renderStaves(), this.renderStaffOptions()), /*#__PURE__*/React.createElement("section", {
          className: "settings_group"
        }, /*#__PURE__*/React.createElement("h4", null, "Generator"), this.renderGenerators()), this.renderGeneratorInputs(), /*#__PURE__*/React.createElement("section", {
          className: "settings_group"
        }, /*#__PURE__*/React.createElement("h4", null, "Key"), this.renderKeys()));
      }
    }, {
      key: "savePreset",
      value: function savePreset(e) {
        e.preventDefault();
        (0, _events.trigger)(this, "saveGeneratorPreset", this.refs.presetForm);
      }
    }, {
      key: "loadPresets",
      value: function loadPresets() {
        var _this2 = this;

        if (!N.session.currentUser) {
          return;
        }

        this.setState({
          loadingPresets: true
        });
        var request = new XMLHttpRequest();
        request.open("GET", "/presets.json");
        request.send();

        request.onload = function (e) {
          try {
            var res = JSON.parse(request.responseText);

            _this2.setState({
              loadingPresets: false,
              presets: res.presets
            });
          } catch (e) {
            _this2.setState({
              loadingPresets: false
            });
          }
        };
      }
    }, {
      key: "renderPresets",
      value: function renderPresets() {
        if (!N.enable_presets) {
          return;
        }

        if (!N.session.currentUser) {
          return;
        }

        var presetsPicker;

        if (this.state.presets && this.state.presets.length) {
          presetsPicker = /*#__PURE__*/React.createElement("div", {
            className: "presetsPicker"
          }, /*#__PURE__*/React.createElement(_select["default"], {
            name: "preset",
            options: this.state.presets.map(function (p) {
              return {
                name: p.name,
                value: p.name
              };
            })
          }));
        }

        return /*#__PURE__*/React.createElement("div", {
          className: "settings_group"
        }, presetsPicker, /*#__PURE__*/React.createElement("form", {
          onSubmit: this.savePreset.bind(this),
          ref: "presetForm"
        }, /*#__PURE__*/React.createElement("label", null, "Name", /*#__PURE__*/React.createElement("input", {
          type: "text",
          name: "name"
        })), /*#__PURE__*/React.createElement("button", {
          disabled: this.props.savePreset || false
        }, "Save preset")));
      }
    }, {
      key: "renderStaves",
      value: function renderStaves() {
        var _this3 = this;

        return this.props.staves.map(function (staff, i) {
          return /*#__PURE__*/React.createElement("button", {
            type: "button",
            key: staff.name,
            onClick: function onClick(e) {
              e.preventDefault();

              _this3.props.setStaff(staff);
            },
            className: (0, _lib.classNames)("toggle_option", {
              active: _this3.props.currentStaff == staff
            })
          }, staff.name);
        });
      }
    }, {
      key: "renderStaffOptions",
      value: function renderStaffOptions() {
        var _this4 = this;

        var showNotesLabel = this.props.staffOptions && this.props.staffOptions.showNotesLabel;
        return /*#__PURE__*/React.createElement("div", {
          className: "bool_row"
        }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
          type: "checkbox",
          defaultChecked: showNotesLabel,
          onChange: function onChange(e) {
            console.debug(e.target.checked);

            _this4.props.setStaffOptions({
              showNotesLabel: e.target.checked
            });
          }
        }), "Show notes label"));
      }
    }, {
      key: "renderGenerators",
      value: function renderGenerators() {
        var _this5 = this;

        return this.props.generators.map(function (generator, i) {
          if (generator.debug) {
            return;
          }

          if (generator.mode != _this5.props.currentStaff.mode) {
            return;
          }

          return /*#__PURE__*/React.createElement("button", {
            key: generator.name,
            onClick: function onClick(e) {
              e.preventDefault();

              _this5.props.setGenerator(generator, (0, _generators.fixGeneratorSettings)(generator, _this5.props.currentGeneratorSettings));
            },
            className: (0, _lib.classNames)("toggle_option", {
              active: _this5.props.currentGenerator == generator
            })
          }, generator.name);
        });
      }
    }, {
      key: "renderGeneratorInputs",
      value: function renderGeneratorInputs() {
        var g = this.props.currentGenerator;
        if (!g.inputs || !g.inputs.length) return;
        return /*#__PURE__*/React.createElement("div", {
          className: "settings_group"
        }, /*#__PURE__*/React.createElement(GeneratorSettings, {
          key: "".concat(g.name, "-").concat(g.mode),
          generator: g,
          currentKey: this.props.currentKey,
          currentStaff: this.props.currentStaff,
          currentSettings: this.props.currentGeneratorSettings,
          setGenerator: this.props.setGenerator
        }));
      }
    }, {
      key: "renderKeys",
      value: function renderKeys() {
        var _this6 = this;

        var keyButton = function keyButton(key) {
          return /*#__PURE__*/React.createElement("button", {
            onClick: function onClick(e) {
              _this6.props.setKeySignature(key);
            },
            className: (0, _lib.classNames)("toggle_option", {
              active: _this6.props.currentKey.name() == key.name()
            }),
            key: key.name()
          }, key.name());
        };

        return _music.KeySignature.allKeySignatures().concat([new _music.ChromaticKeySignature()]).map(function (key) {
          return keyButton(key);
        });
      }
    }]);

    return SettingsPanel;
  }(React.Component);

  _exports.SettingsPanel = SettingsPanel;

  _defineProperty(SettingsPanel, "propTypes", {
    close: types.func.isRequired,
    staves: types.array.isRequired,
    generators: types.array.isRequired,
    setStaff: types.func.isRequired,
    setGenerator: types.func.isRequired,
    setStaffOptions: types.func.isRequired,
    staffOptions: types.object
  });

  var GeneratorSettings = /*#__PURE__*/function (_React$PureComponent) {
    _inherits(GeneratorSettings, _React$PureComponent);

    var _super2 = _createSuper(GeneratorSettings);

    function GeneratorSettings() {
      _classCallCheck(this, GeneratorSettings);

      return _super2.apply(this, arguments);
    }

    _createClass(GeneratorSettings, [{
      key: "render",
      value: function render() {
        var _this7 = this;

        // calculate full settings with defaults
        this.cachedSettings = _objectSpread({}, (0, _generators.generatorDefaultSettings)(this.props.generator, this.props.currentStaff), {}, this.props.currentSettings);
        var inputs = this.props.generator.inputs;
        return /*#__PURE__*/React.createElement("div", {
          className: "generator_inputs"
        }, inputs.map(function (input, idx) {
          var fn;

          switch (input.type) {
            case "select":
              fn = _this7.renderSelect;
              break;

            case "range":
              fn = _this7.renderRange;
              break;

            case "noteRange":
              fn = _this7.renderNoteRange;
              break;

            case "note":
              fn = _this7.renderNote;
              break;

            case "bool":
              fn = _this7.renderBool;
              break;

            case "toggles":
              fn = _this7.renderToggles;
              break;

            default:
              console.error("No input renderer for ".concat(input.type));
              return;
          }

          var el = input.type == "toggles" ? "div" : "label";
          var inside = React.createElement.apply(React, [el, null].concat([/*#__PURE__*/React.createElement("div", {
            className: "input_label"
          }, input.label || input.name), fn.call(_this7, input, idx)]));
          return /*#__PURE__*/React.createElement("div", {
            key: input.name,
            className: "generator_input"
          }, inside);
        }));
      }
    }, {
      key: "updateInputValue",
      value: function updateInputValue(input, value) {
        this.props.setGenerator(this.props.generator, _objectSpread({}, this.props.currentSettings, _defineProperty({}, input.name, value)));
      }
    }, {
      key: "renderSelect",
      value: function renderSelect(input, idx) {
        var _this8 = this;

        var currentValue = this.cachedSettings[input.name];
        var options = input.values.map(function (input_val, input_val_idx) {
          return {
            name: input_val.name,
            value: input_val.name
          };
        });
        return /*#__PURE__*/React.createElement(_select["default"], {
          onChange: function onChange(value) {
            return _this8.updateInputValue(input, value);
          },
          value: currentValue,
          options: options
        });
      }
    }, {
      key: "renderNote",
      value: function renderNote(input, idx) {
        var _this9 = this;

        var currentValue = this.cachedSettings[input.name];
        var options = [];

        for (var i = input.max; i >= input.min; i--) {
          options.push((0, _music.noteName)(i));
        }

        return /*#__PURE__*/React.createElement("div", {
          className: "note_range_row"
        }, /*#__PURE__*/React.createElement("label", null, "Note", /*#__PURE__*/React.createElement(_select["default"], {
          onChange: function onChange(value) {
            _this9.updateInputValue(input, (0, _music.parseNote)(value));
          },
          value: (0, _music.noteName)(currentValue),
          options: options.map(function (name) {
            return {
              value: name,
              name: name
            };
          })
        })));
      }
    }, {
      key: "renderNoteRange",
      value: function renderNoteRange(input, idx) {
        var _this10 = this;

        var currentValue = this.cachedSettings[input.name];

        var _currentValue = _slicedToArray(currentValue, 2),
            min = _currentValue[0],
            max = _currentValue[1];

        var possibleMin = [];
        var possibleMax = [];
        var staffMin, staffMax;

        if (this.props.currentStaff) {
          var staff = this.props.currentStaff;
          staffMin = (0, _music.parseNote)(staff.range[0]);
          staffMax = (0, _music.parseNote)(staff.range[1]);
        }

        for (var i = input.max; i >= input.min; i--) {
          var iName = (0, _music.noteName)(i);

          if (i < staffMin) {
            continue;
          }

          if (i > staffMax) {
            continue;
          }

          if (i >= min) {
            possibleMax.push(iName);
          }

          if (i <= max) {
            possibleMin.push(iName);
          }
        }

        return /*#__PURE__*/React.createElement("div", {
          className: "note_range_row"
        }, /*#__PURE__*/React.createElement("label", null, "Min", /*#__PURE__*/React.createElement(_select["default"], {
          onChange: function onChange(value) {
            _this10.updateInputValue(input, [(0, _music.parseNote)(value), currentValue[1]]);
          },
          value: (0, _music.noteName)(currentValue[0]),
          options: possibleMin.map(function (name) {
            return {
              value: name,
              name: (0, _music.fixNoteOctaveNum)(name)
            };
          })
        })), /*#__PURE__*/React.createElement("label", null, "Max", /*#__PURE__*/React.createElement(_select["default"], {
          onChange: function onChange(value) {
            _this10.updateInputValue(input, [currentValue[0], (0, _music.parseNote)(value)]);
          },
          value: (0, _music.noteName)(currentValue[1]),
          options: possibleMax.map(function (name) {
            return {
              value: name,
              name: (0, _music.fixNoteOctaveNum)(name)
            };
          })
        })));
      }
    }, {
      key: "renderRange",
      value: function renderRange(input, idx) {
        var _this11 = this;

        var currentValue = this.cachedSettings[input.name];
        return /*#__PURE__*/React.createElement("div", {
          className: "slider_row"
        }, /*#__PURE__*/React.createElement(_slider["default"], {
          min: input.min,
          max: input.max,
          onChange: function onChange(value) {
            return _this11.updateInputValue(input, value);
          },
          value: currentValue
        }), /*#__PURE__*/React.createElement("span", {
          className: "current_value"
        }, currentValue));
      }
    }, {
      key: "renderBool",
      value: function renderBool(input, idx) {
        var _this12 = this;

        var currentValue = !!this.cachedSettings[input.name];
        return /*#__PURE__*/React.createElement("div", {
          className: "bool_row"
        }, /*#__PURE__*/React.createElement("input", {
          type: "checkbox",
          checked: currentValue,
          onChange: function onChange(e) {
            return _this12.updateInputValue(input, e.target.checked);
          }
        }), input.hint);
      }
    }, {
      key: "renderToggles",
      value: function renderToggles(input, idx) {
        var _this13 = this;

        var currentValue = this.cachedSettings[input.name] || {};
        return /*#__PURE__*/React.createElement("div", {
          className: "toggles"
        }, input.options.map(function (subName) {
          return /*#__PURE__*/React.createElement("label", {
            className: "toggle",
            key: subName
          }, /*#__PURE__*/React.createElement("input", {
            onChange: function onChange(e) {
              return _this13.updateInputValue(input, _objectSpread({}, currentValue, _defineProperty({}, subName, e.target.checked)));
            },
            checked: currentValue[subName] || false,
            type: "checkbox"
          }), " ", subName);
        }));
      }
    }]);

    return GeneratorSettings;
  }(React.PureComponent);

  _exports.GeneratorSettings = GeneratorSettings;

  _defineProperty(GeneratorSettings, "propTypes", {
    generator: types.object.isRequired,
    currentSettings: types.object.isRequired,
    setGenerator: types.func.isRequired,
    currentKey: types.object.isRequired,
    currentStaff: types.object.isRequired
  });
});

define("st/components/sight_reading/stats_lightbox", ["exports", "react", "st/components/lightbox", "st/components/tabs", "prop-types"], function (_exports, React, _lightbox, _tabs, types) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);
  _lightbox = _interopRequireDefault(_lightbox);
  _tabs = _interopRequireDefault(_tabs);
  types = _interopRequireWildcard(types);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var StatsLightbox = /*#__PURE__*/function (_Lightbox) {
    _inherits(StatsLightbox, _Lightbox);

    var _super = _createSuper(StatsLightbox);

    function StatsLightbox(props) {
      var _this;

      _classCallCheck(this, StatsLightbox);

      _this = _super.call(this, props);
      _this.state = {
        tab: "ratios"
      };
      return _this;
    }

    _createClass(StatsLightbox, [{
      key: "renderContent",
      value: function renderContent() {
        var _this2 = this;

        var statsContent;
        var availableNotes = Object.keys(this.props.stats.noteHitStats);
        availableNotes.sort();

        if (availableNotes.length) {
          if (this.state.tab == "ratios") {
            statsContent = this.renderNoteHitRatios(availableNotes);
          } else if (this.state.tab == "timings") {
            statsContent = this.renderNoteTimings(availableNotes);
          }
        } else {
          statsContent = /*#__PURE__*/React.createElement("p", {
            className: "empty_message"
          }, "You don't have any stats yet. Try playing some notes first.");
        }

        if (this.props.stats.averageHitTime) {
          var hitTime = /*#__PURE__*/React.createElement("div", {
            className: "hit_time"
          }, "Average hit time", /*#__PURE__*/React.createElement("strong", null, " ", Math.round(this.props.stats.averageHitTime), "ms"));
        }

        if (availableNotes.length) {
          var clearButton = /*#__PURE__*/React.createElement("button", {
            onClick: function onClick() {
              _this2.props.resetStats();

              _this2.close();
            }
          }, "Clear stats");
        }

        var statTabs;

        if (availableNotes.length) {
          statTabs = /*#__PURE__*/React.createElement(_tabs["default"], {
            onChangeTab: function onChangeTab(opt) {
              return _this2.setState({
                tab: opt.name
              });
            },
            currentTab: this.state.tab,
            tabs: [{
              name: "ratios",
              label: "Ratios"
            }, {
              name: "timings",
              label: "Timings"
            }]
          });
        }

        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Session stats"), statTabs, statsContent, hitTime, /*#__PURE__*/React.createElement("div", {
          className: "footer_buttons"
        }, /*#__PURE__*/React.createElement("button", {
          onClick: this.close.bind(this)
        }, "Close"), /*#__PURE__*/React.createElement("div", {
          className: "spacer"
        }), clearButton));
      }
    }, {
      key: "renderNoteHitRatios",
      value: function renderNoteHitRatios(availableNotes) {
        var hitStats = this.props.stats.noteHitStats;
        var statsContent = availableNotes.map(function (note) {
          var stats = hitStats[note];
          var hits = stats.hits || 0;
          var misses = stats.misses || 0;
          var hit_rate = hits / (hits + misses) * 100;
          var miss_rate = misses / (hits + misses) * 100;

          if (hit_rate > 0) {
            var hit_bar = /*#__PURE__*/React.createElement("div", {
              className: "hit_bar",
              style: {
                width: "".concat(hit_rate, "%")
              }
            }, hits);
          }

          if (miss_rate > 0) {
            var miss_bar = /*#__PURE__*/React.createElement("div", {
              className: "miss_bar",
              style: {
                width: "".concat(miss_rate, "%")
              }
            }, misses);
          }

          return /*#__PURE__*/React.createElement("div", {
            key: note,
            className: "note_stat_row"
          }, /*#__PURE__*/React.createElement("div", {
            className: "note_name"
          }, note), /*#__PURE__*/React.createElement("div", {
            className: "note_rates"
          }, hit_bar, miss_bar));
        }.bind(this));
        statsContent = /*#__PURE__*/React.createElement("div", {
          className: "note_bars_container"
        }, statsContent);
        return statsContent;
      }
    }, {
      key: "renderNoteTimings",
      value: function renderNoteTimings(availableNotes) {
        var hitStats = this.props.stats.noteHitStats;
        var globalAverage = this.props.stats.averageHitTime;
        var maxRange = 0;

        var _iterator = _createForOfIteratorHelper(availableNotes),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var note = _step.value;
            var stats = hitStats[note];
            if (!stats.averageHitTime) continue;
            maxRange = Math.max(maxRange, Math.abs(globalAverage - stats.averageHitTime));
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        var graphRange = Math.max(0.1 * globalAverage, maxRange * 2);
        var statsContent = availableNotes.map(function (note) {
          var stats = hitStats[note];

          if (!stats.averageHitTime) {
            return;
          }

          var widthPercent = 0.5 + (stats.averageHitTime - globalAverage) / (graphRange * 2);
          return /*#__PURE__*/React.createElement("div", {
            key: note,
            className: "note_timing_row"
          }, /*#__PURE__*/React.createElement("div", {
            className: "note_name"
          }, note), /*#__PURE__*/React.createElement("div", {
            className: "note_timing"
          }, /*#__PURE__*/React.createElement("div", {
            className: "timing_progress",
            style: {
              width: widthPercent * 100 + "%"
            }
          }), /*#__PURE__*/React.createElement("div", {
            className: "timing_label"
          }, Math.round(stats.averageHitTime), "ms")));
        });
        return /*#__PURE__*/React.createElement("div", {
          className: "note_timings_container"
        }, /*#__PURE__*/React.createElement("div", {
          className: "timing_legend"
        }, "Average"), /*#__PURE__*/React.createElement("div", {
          className: "line_container"
        }, /*#__PURE__*/React.createElement("div", {
          className: "average_line"
        })), statsContent);
      }
    }]);

    return StatsLightbox;
  }(_lightbox["default"]);

  _exports["default"] = StatsLightbox;

  _defineProperty(StatsLightbox, "className", "stats_lightbox");

  _defineProperty(StatsLightbox, "propTypes", {
    stats: types.object.isRequired
  });
});

define("st/config", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.storageAvailable = storageAvailable;
  _exports.writeConfig = writeConfig;
  _exports.readConfig = readConfig;

  function storageAvailable(type) {
    try {
      var storage = window[type];
      var x = "__test";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return false;
    }
  }

  function writeConfig(name, value) {
    if (storageAvailable("localStorage")) {
      if (value == undefined) {
        console.warn("Removing config", name);
        return window.localStorage.removeItem(name);
      }

      if (typeof value != "string") {
        value = JSON.stringify(value);
      }

      console.warn("Writing config", name, value);
      return window.localStorage.setItem(name, value);
    }
  }

  function readConfig(name) {
    var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

    if (storageAvailable("localStorage")) {
      console.warn("Reading config", name);
      var ret = window.localStorage.getItem(name);

      if (ret == undefined) {
        ret = defaultValue;
      } else {
        try {
          ret = JSON.parse(ret);
        } catch (e) {}
      }

      return ret;
    } else {
      return defaultValue;
    }
  }
});

define("st/data", ["exports", "st/music", "st/generators", "st/chord_generators", "st/components/staves"], function (_exports, _music, _generators, _chord_generators, _staves) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.GENERATORS = _exports.STAVES = void 0;

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  var smoothInput = {
    name: "smoothness",
    type: "range",
    "default": 3,
    min: 0,
    max: 6
  };
  var noteRangeInput = {
    name: "noteRange",
    type: "noteRange",
    label: "note range",
    // default: [0, 99], // default is set automatically
    min: 0,
    max: 100
  };

  function staffRange(staff, noteRange) {
    if (noteRange) {
      return [(0, _music.noteName)(Math.max(noteRange[0], (0, _music.parseNote)(staff.range[0]))), (0, _music.noteName)(Math.min(noteRange[1], (0, _music.parseNote)(staff.range[1])))];
    } else {
      return staff.range;
    }
  }

  var STAVES = [{
    mode: "notes",
    name: "treble",
    range: ["A4", "C7"],
    render: function render() {
      var _this = this;

      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
      return /*#__PURE__*/React.createElement(_staves.GStaff, _extends({
        ref: function ref(staff) {
          return _this.staff = staff;
        }
      }, props));
    }
  }, {
    mode: "notes",
    name: "bass",
    range: ["C3", "E5"],
    render: function render() {
      var _this2 = this;

      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
      return /*#__PURE__*/React.createElement(_staves.FStaff, _extends({
        ref: function ref(staff) {
          return _this2.staff = staff;
        }
      }, props));
    }
  }, {
    mode: "notes",
    name: "grand",
    range: ["C3", "C7"],
    render: function render() {
      var _this3 = this;

      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
      return /*#__PURE__*/React.createElement(_staves.GrandStaff, _extends({
        ref: function ref(staff) {
          return _this3.staff = staff;
        }
      }, props));
    }
  }, {
    mode: "chords",
    name: "chord",
    range: ["B7", "C8"],
    render: function render(props) {
      var _this4 = this;

      return /*#__PURE__*/React.createElement(_staves.ChordStaff, _extends({
        chords: this.state.notes,
        noteShaking: this.state.noteShaking,
        touchedNotes: this.state.touchedNotes,
        ref: function ref(staff) {
          return _this4.staff = staff;
        }
      }, props));
    }
  }];
  _exports.STAVES = STAVES;
  var GENERATORS = [{
    name: "random",
    mode: "notes",
    inputs: [{
      name: "notes",
      type: "range",
      min: 1,
      max: 5
    }, {
      name: "hands",
      type: "range",
      "default": 2,
      min: 1,
      max: 2
    }, smoothInput, noteRangeInput, {
      label: "chord based",
      name: "musical",
      type: "bool",
      hint: "Column fits random chord"
    }],
    create: function create(staff, keySignature, options) {
      var scale = keySignature.defaultScale();
      var notes = scale.getLooseRange.apply(scale, _toConsumableArray(staffRange(staff, options.noteRange))); // send the scale

      if (options.musical) {
        options = _objectSpread({
          scale: scale
        }, options);
      }

      return new _generators.RandomNotes(notes, options);
    }
  }, {
    name: "sweep",
    mode: "notes",
    debug: true,
    create: function create(staff, keySignature) {
      var _MajorScale;

      var notes = (_MajorScale = new _music.MajorScale(keySignature)).getLooseRange.apply(_MajorScale, _toConsumableArray(staff.range));

      return new _generators.SweepRangeNotes(notes);
    }
  }, {
    name: "steps",
    mode: "notes",
    debug: true,
    // not needed anymore with smoothness
    create: function create(staff, keySignature) {
      var _MajorScale2;

      var notes = (_MajorScale2 = new _music.MajorScale(keySignature)).getLooseRange.apply(_MajorScale2, _toConsumableArray(staff.range));

      return new _generators.MiniSteps(notes);
    }
  }, {
    name: "triads",
    mode: "notes",
    inputs: [smoothInput],
    create: function create(staff, keySignature, options) {
      var _MajorScale3;

      var notes = (_MajorScale3 = new _music.MajorScale(keySignature)).getLooseRange.apply(_MajorScale3, _toConsumableArray(staff.range));

      return new _generators.TriadNotes(notes, options);
    }
  }, {
    name: "sevens",
    mode: "notes",
    inputs: [smoothInput, noteRangeInput],
    create: function create(staff, keySignature, options) {
      var scale = keySignature.defaultScale();
      var notes = scale.getLooseRange.apply(scale, _toConsumableArray(staffRange(staff, options.noteRange)));
      return new _generators.SevenOpenNotes(notes, options);
    }
  }, {
    name: "progression",
    mode: "notes",
    inputs: [smoothInput, {
      name: "progression",
      type: "select",
      values: [{
        name: "autumn leaves",
        // in major degrees
        value: [[2, "m7"], [5, "7"], [1, "M7"], [4, "M7"], [7, "m7b5"], [3, "7"], [6, "m"]] // // iv7 – VII7 – IIImaj7 – VImaj7 – ii7(b5) – V7 – i
        // // in minor degrees
        // // TODO: make it work with minor progressions
        // let progression = [
        //   [4, "m7"],
        //   [7, "7"],
        //   [3, "M7"],
        //   [6, "M7"],
        //   [2, "m7b5"],
        //   [5, "7"],
        //   [1, "m"],
        // ]

      }, {
        name: "50s",
        value: [[1, "M"], [6, "m"], [4, "M"], [5, "M"]]
      }, {
        name: "circle",
        value: [[6, "m"], [2, "m"], [5, "M"], [1, "M"]]
      }, {
        name: "basic substitution",
        value: [[1, "M7"], [2, "7"], [5, "7"]]
      }]
    }],
    create: function create(staff, keySignature, options) {
      var scale = new _music.MajorScale(keySignature);
      var progressionInputs = this.inputs.find(function (i) {
        return i.name == "progression";
      });
      var progression = progressionInputs.values.find(function (v) {
        return v.name == options.progression;
      });
      return new _generators.ProgressionGenerator(scale, staff.range, progression.value, options);
    }
  }, {
    name: "position",
    mode: "notes",
    inputs: [],
    create: function create(staff, keySignature, options) {
      var _MajorScale4;

      var notes = (_MajorScale4 = new _music.MajorScale(keySignature)).getLooseRange.apply(_MajorScale4, _toConsumableArray(staff.range));

      return new _generators.PositionGenerator(notes, options);
    }
  }, {
    name: "intervals",
    mode: "notes",
    inputs: [{
      name: "intervals",
      type: "toggles",
      options: ["2", "3", "4", "5", "6", "7"]
    }, noteRangeInput],
    create: function create(staff, keySignature, options) {
      var _MajorScale5;

      var notes = (_MajorScale5 = new _music.MajorScale(keySignature)).getLooseRange.apply(_MajorScale5, _toConsumableArray(staffRange(staff, options.noteRange)));

      return new _generators.IntervalGenerator(notes, options);
    }
  }, {
    name: "random",
    mode: "chords",
    inputs: [{
      name: "scale",
      type: "select",
      values: [{
        name: "major"
      }, {
        name: "natural minor"
      }, {
        name: "harmonic minor"
      }, {
        name: "melodic minor"
      }]
    }, {
      name: "notes",
      type: "range",
      "default": 3,
      min: 3,
      max: 4
    }, {
      name: "ignoreAbove",
      label: "ignore above",
      type: "note",
      "default": 100,
      min: 0,
      max: 100
    }, {
      name: "commonNotes",
      label: "common notes",
      type: "select",
      values: [{
        name: "any",
        value: -1
      }, {
        name: "1",
        value: 1
      }, {
        name: "2",
        value: 2
      }]
    }],
    create: function create(staff, keySignature, options) {
      return new _chord_generators.ChordGenerator(keySignature, options);
    }
  }, {
    name: "multi-key",
    mode: "chords",
    inputs: [{
      name: "notes",
      type: "range",
      "default": 3,
      min: 3,
      max: 4
    }, {
      name: "commonNotes",
      label: "common notes",
      type: "select",
      values: [{
        name: "any",
        value: -1
      }, {
        name: "1",
        value: 1
      }, {
        name: "2",
        value: 2
      }]
    }],
    create: function create(staff, keySignature, options) {
      return new _chord_generators.MultiKeyChordGenerator(keySignature, options);
    }
  }];
  _exports.GENERATORS = GENERATORS;
});

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

define("st/events", ["exports", "react-dom"], function (_exports, ReactDOM) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.scopeEvent = scopeEvent;
  _exports.trigger = trigger;
  _exports.dispatch = dispatch;
  ReactDOM = _interopRequireWildcard(ReactDOM);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function scopeEvent(name) {
    return "notes:".concat(name);
  }

  function trigger(component, name) {
    var node = ReactDOM.findDOMNode(component);

    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    var ev = new CustomEvent(scopeEvent(name), {
      detail: args,
      bubbles: true
    });
    return node.dispatchEvent(ev);
  }

  function dispatch(component, event_table) {
    var node = ReactDOM.findDOMNode(component);

    var _loop = function _loop() {
      var key = _Object$keys[_i];

      (function (name, fn) {
        node.addEventListener(scopeEvent(key), function (e) {
          fn.apply(void 0, [e].concat(_toConsumableArray(e.detail)));
        });
      })(key, event_table[key]);
    };

    for (var _i = 0, _Object$keys = Object.keys(event_table); _i < _Object$keys.length; _i++) {
      _loop();
    }
  }
});

define("st/generators", ["exports", "st/music", "lib", "st/util"], function (_exports, _music, _lib, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.generatorDefaultSettings = generatorDefaultSettings;
  _exports.fixGeneratorSettings = fixGeneratorSettings;
  _exports.testRandomNotes = testRandomNotes;
  _exports.testSkewRand = testSkewRand;
  _exports.IntervalGenerator = _exports.PositionGenerator = _exports.ProgressionGenerator = _exports.SevenOpenNotes = _exports.TriadNotes = _exports.ShapeGenerator = _exports.MiniSteps = _exports.SweepRangeNotes = _exports.RandomNotes = _exports.Generator = void 0;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  // takes generator object from data
  function generatorDefaultSettings(generator, staff) {
    var out = {};

    if (!generator.inputs) {
      return out;
    }

    var defaultValue = function defaultValue(input) {
      if ("default" in input) {
        return input["default"];
      }

      switch (input.type) {
        case "select":
          return input.values[0].name;

        case "range":
          return input.min;

        case "noteRange":
          if (staff && input.name == "noteRange") {
            return [(0, _music.parseNote)(staff.range[0]), (0, _music.parseNote)(staff.range[1])];
          } else {
            return [input.min, input.max];
          }

      }
    };

    var _iterator = _createForOfIteratorHelper(generator.inputs),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var input = _step.value;
        out[input.name] = defaultValue(input);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return out;
  } // strip any values that don't make sense


  function fixGeneratorSettings(generator, settings) {
    var out = {};

    if (!generator.inputs) {
      return out;
    }

    var _iterator2 = _createForOfIteratorHelper(generator.inputs),
        _step2;

    try {
      var _loop = function _loop() {
        var input = _step2.value;
        var currentValue = settings[input.name];

        if (currentValue != null) {
          switch (input.type) {
            case "select":
              {
                var found = input.values.filter(function (v) {
                  return v.name == currentValue;
                });

                if (!found) {
                  currentValue = null;
                }

                break;
              }

            case "range":
              {
                if (typeof currentValue == "number") {
                  currentValue = Math.min(input.max, Math.max(input.min, +currentValue));
                } else {
                  currentValue = null;
                }

                break;
              }

            case "bool":
              {
                if (typeof currentValue != "boolean") {
                  currentValue = null;
                }

                break;
              }
          }

          if (currentValue == null) {
            console.warn("Truncating generator input: ".concat(input.name));
            return "continue";
          }

          out[input.name] = currentValue;
        }
      };

      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _ret = _loop();

        if (_ret === "continue") continue;
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return out;
  }

  function testRandomNotes() {
    var scale = new _music.MajorScale("C"); // let notes = scale.getLooseRange("A4", "C7")

    var notes = scale.getLooseRange("C3", "C7");
    var r = new RandomNotes(notes, {});
    var totalCount = 0;
    var counts = {};

    var _iterator3 = _createForOfIteratorHelper(notes),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var note = _step3.value;
        counts[note] = 0;
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    for (var i = 0; i < 10000; i++) {
      var _iterator4 = _createForOfIteratorHelper(r.handGroups()),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var group = _step4.value;

          var _iterator5 = _createForOfIteratorHelper(group),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var n = _step5.value;
              counts[n] += 1;
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      totalCount += 1;
    }

    console.log("total", totalCount, counts);
    var ratios = {};

    var _iterator6 = _createForOfIteratorHelper(notes),
        _step6;

    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var _note = _step6.value;
        ratios[_note] = counts[_note] / totalCount * 100;
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }

    console.log("ratios", ratios);
  }

  function testSkewRand() {
    var iterations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var r = new RandomNotes([], {});
    var counts = {};
    var totalCount = 0;

    for (var i = 0; i < 10000; i++) {
      var k = r.skewRand(5, iterations);
      counts[k] = (counts[k] || 0) + 1;
      totalCount++;
    }

    console.log(counts);
  }

  var Generator = /*#__PURE__*/function () {
    function Generator() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Generator);

      this.smoothness = opts.smoothness || 0;
    }

    _createClass(Generator, [{
      key: "averagePitch",
      value: function averagePitch(notes) {
        if (notes.length == 0) {
          throw new Error("trying to find average of empty note list");
        }

        var pitches = notes.map(_music.parseNote);
        return pitches.reduce(function (a, b) {
          return a + b;
        }, 0) / pitches.length;
      }
    }, {
      key: "_nextNote",
      value: function _nextNote() {
        throw new Error("missing _nextNote implementation");
      }
    }, {
      key: "nextNote",
      value: function nextNote() {
        return this.nextNoteSmooth(this.smoothness + 1, this._nextNote.bind(this));
      } // sort by minimizing min pitch difference

    }, {
      key: "sortedCandidatesIndividual",
      value: function sortedCandidatesIndividual() {
        var iterations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        var nextNote = arguments.length > 1 ? arguments[1] : undefined;

        if (iterations == 1) {
          return nextNote();
        }

        if (!this.lastNotes) {
          this.lastNotes = nextNote();
          return this.lastNotes;
        }

        var pitches = this.lastNotes.map(_music.parseNote);
        var candidates = [];

        for (var i = 0; i < iterations; i++) {
          var c = nextNote();
          var score = 0;

          var _iterator7 = _createForOfIteratorHelper(c),
              _step7;

          try {
            var _loop2 = function _loop2() {
              var n = _step7.value;
              var scores = pitches.map(function (p) {
                return Math.abs(p - (0, _music.parseNote)(n));
              });
              score += Math.min.apply(Math, _toConsumableArray(scores));
            };

            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              _loop2();
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }

          candidates.push([score, c]);
        }

        candidates.sort(function (_ref, _ref2) {
          var _ref3 = _slicedToArray(_ref, 1),
              a = _ref3[0];

          var _ref4 = _slicedToArray(_ref2, 1),
              b = _ref4[0];

          return a - b;
        });
        return candidates;
      } // sorts by minimizing average pitch

    }, {
      key: "sortedCandidatesAverage",
      value: function sortedCandidatesAverage(iterations, nextNote) {
        var target = this.averagePitch(this.lastNotes);
        var candidates = [];

        for (var i = 0; i < iterations; i++) {
          var c = nextNote();
          var avg = this.averagePitch(c);
          candidates.push([Math.abs(avg - target), c]);
        }

        candidates.sort(function (_ref5, _ref6) {
          var _ref7 = _slicedToArray(_ref5, 1),
              a = _ref7[0];

          var _ref8 = _slicedToArray(_ref6, 1),
              b = _ref8[0];

          return a - b;
        });
        return candidates;
      }
    }, {
      key: "nextNoteSmooth",
      value: function nextNoteSmooth() {
        var iterations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        var nextNote = arguments.length > 1 ? arguments[1] : undefined;

        // not smoothing, don't care
        if (iterations == 1) {
          return nextNote();
        }

        if (!this.lastNotes) {
          this.lastNotes = nextNote();
          return this.lastNotes;
        }

        var candidates = this.sortedCandidatesIndividual(iterations, nextNote);
        var out = candidates[0][1]; // abandon case

        var _iterator8 = _createForOfIteratorHelper(candidates),
            _step8;

        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var _step8$value = _slicedToArray(_step8.value, 2),
                diff = _step8$value[0],
                notes = _step8$value[1];

            // no repeats
            if (diff == 0 && notes.sort().join("-") == this.lastNotes.sort().join("-")) {
              continue;
            }

            out = notes;
            break;
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }

        this.lastNotes = out;
        return out;
      }
    }]);

    return Generator;
  }();

  _exports.Generator = Generator;

  var RandomNotes = /*#__PURE__*/function (_Generator) {
    _inherits(RandomNotes, _Generator);

    var _super = _createSuper(RandomNotes);

    function RandomNotes(notes) {
      var _this;

      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, RandomNotes);

      _this = _super.call(this, opts);

      _defineProperty(_assertThisInitialized(_this), "handSize", 11);

      _this.generator = new _lib.MersenneTwister();
      _this.notes = notes;
      _this.notesPerColumn = opts.notes || 1;
      _this.scale = opts.scale;
      _this.hands = opts.hands || 2;
      return _this;
    } // divide up items into n groups, pick a item from each group
    // items: list of items
    // n: number of groups (and items selected)


    _createClass(RandomNotes, [{
      key: "pickNDist",
      value: function pickNDist(items, n) {
        var _this2 = this;

        if (!items.length) {
          return [];
        }

        if (n == 0) {
          return [];
        }

        if (n == 1) {
          return [items[this.generator["int"]() % items.length]];
        }

        var groups = [];

        for (var k = 0; k < items.length; k++) {
          var group = Math.min(n - 1, Math.floor(k / (items.length - 1) * n));

          if (!groups[group]) {
            groups[group] = [];
          }

          groups[group].push(items[k]);
        }

        return groups.map(function (g) {
          return g[_this2.generator["int"]() % g.length];
        });
      }
    }, {
      key: "getNotesForHand",
      value: function getNotesForHand(pitches, left) {
        var _this3 = this;

        var start = pitches[0] + left;
        return pitches.map(function (p) {
          return p - start;
        }).filter(function (p) {
          return p >= 0 && p < _this3.handSize;
        }).map(function (p) {
          return p + start;
        }); // put it back
      } // generate random number [0,n[ with skew towards 0 based on normal dist
      // iterations controls how normal the normal dist is, 1 is flat dist

    }, {
      key: "skewRand",
      value: function skewRand(n) {
        var iterations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var r = 0;

        for (var i = 0; i < iterations; i++) {
          r += this.generator.random();
        } // from 0 to 1 with bias towards 0


        r = Math.abs((r / iterations - 0.5) * 2);
        return Math.floor(n * r);
      }
    }, {
      key: "handGroups",
      value: function handGroups() {
        var notes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.notes;
        var pitches = notes.map(_music.parseNote);
        pitches.sort(function (a, b) {
          return a - b;
        });
        var range = pitches[pitches.length - 1] - pitches[0]; // rake a random hand if we only need one

        if (this.hands == 1) {
          var rootRange = range - this.handSize;
          return [this.getNotesForHand(pitches, this.generator["int"]() % rootRange).map(_music.noteName)];
        } // how much space between hands if hands are at ends


        var handSpace = range - 2 * this.handSize + 1;
        var firstHandMovement = handSpace > 0 ? this.skewRand(handSpace, 2) : 0;
        var remainingSpace = handSpace - firstHandMovement;
        var secondHandMovement = remainingSpace > 0 ? this.skewRand(remainingSpace, 2) : 0;
        var rightHandStart = range - this.handSize + 1;
        var moveLeftFirst = this.generator["int"]() % 2 == 0;
        var leftHand, rightHand;

        if (moveLeftFirst) {
          leftHand = this.getNotesForHand(pitches, firstHandMovement);
          rightHand = this.getNotesForHand(pitches, rightHandStart - secondHandMovement);
        } else {
          leftHand = this.getNotesForHand(pitches, secondHandMovement);
          rightHand = this.getNotesForHand(pitches, rightHandStart - firstHandMovement);
        } // resolve overlaps


        if (leftHand[leftHand.leftHand - 1] > rightHand[0]) {
          console.warn("fixing overlap");
          var mid = leftHand[leftHand.leftHand - 1] + rightHand[0] / 2;
          leftHand = leftHand.filter(function (n) {
            return n <= mid;
          });
          rightHand = rightHand.filter(function (n) {
            return n > mid;
          });
        }

        return [leftHand.map(_music.noteName), rightHand.map(_music.noteName)];
      }
    }, {
      key: "notesInRandomChord",
      value: function notesInRandomChord() {
        var degree = 1 + this.generator["int"]() % this.scale.steps.length;
        var steps = this.scale.buildChordSteps(degree, 3); // seven chords

        var chord = new _music.Chord(this.scale.degreeToName(degree), steps);
        this.lastChord = chord;
        return this.notes.filter(function (n) {
          return chord.containsNote(n);
        });
      }
    }, {
      key: "nextNoteWithoutAnnotation",
      value: function nextNoteWithoutAnnotation() {
        this.lastChord = null;
        var notes = this.scale ? this.notesInRandomChord() : this.notes;

        if (this.notesPerColumn < (this.hands == 1 ? 2 : 3)) {
          // skip the hand stuff since it messes with the distribution
          return this.pickNDist(notes, this.notesPerColumn);
        }

        var hands = this.handGroups(notes);

        if (hands.length == 1) {
          return this.pickNDist(hands[0], this.notesPerColumn);
        } // take some notes from each hand group


        var notesForLeft = Math.floor(this.notesPerColumn / 2);
        var notesForRight = Math.floor(this.notesPerColumn / 2); // odd amount, randomly assign last note

        if (this.notesPerColumn % 2 == 1) {
          if (this.generator["int"]() % 2 == 0) {
            notesForLeft += 1;
          } else {
            notesForRight += 1;
          }
        }

        return this.pickNDist(hands[0], notesForLeft).concat(this.pickNDist(hands[1], notesForRight));
      }
    }, {
      key: "_nextNote",
      value: function _nextNote() {
        var out = this.nextNoteWithoutAnnotation(); // // how to annotate chords:
        // if (this.lastChord) {
        //   out.annotation = this.lastChord.root + this.lastChord.chordShapeName()
        // }

        return out;
      }
    }]);

    return RandomNotes;
  }(Generator); // for debugging staves


  _exports.RandomNotes = RandomNotes;

  var SweepRangeNotes = /*#__PURE__*/function () {
    function SweepRangeNotes(notes) {
      _classCallCheck(this, SweepRangeNotes);

      this.notes = notes;
      this.i = 0;
      this.ascending = true;
    }

    _createClass(SweepRangeNotes, [{
      key: "nextNote",
      value: function nextNote() {
        if (this.i < 0) {
          this.i = 1;
          this.ascending = !this.ascending;
        }

        if (this.i >= this.notes.length) {
          this.i = this.notes.length - 2;
          this.ascending = !this.ascending;
        }

        if (this.ascending) {
          return this.notes[this.i++ % this.notes.length];
        } else {
          return this.notes[this.i-- % this.notes.length];
        }
      }
    }]);

    return SweepRangeNotes;
  }();

  _exports.SweepRangeNotes = SweepRangeNotes;

  var MiniSteps = /*#__PURE__*/function () {
    function MiniSteps(notes) {
      _classCallCheck(this, MiniSteps);

      this.notes = notes;
      this.generator = new _lib.MersenneTwister();
    }

    _createClass(MiniSteps, [{
      key: "nextStep",
      value: function nextStep() {
        return {
          position: this.generator["int"]() % this.notes.length,
          remaining: 2 + this.generator["int"]() % 2,
          direction: this.generator["int"]() % 2 == 0 ? 1 : -1
        };
      }
    }, {
      key: "nextNote",
      value: function nextNote() {
        if (!this.currentStep || this.currentStep.remaining == 0) {
          this.currentStep = this.nextStep();
        }

        var position = this.currentStep.position + this.notes.length;
        this.currentStep.position += this.currentStep.direction;
        this.currentStep.remaining -= 1;
        return this.notes[position % this.notes.length];
      }
    }]);

    return MiniSteps;
  }();

  _exports.MiniSteps = MiniSteps;

  var ShapeGenerator = /*#__PURE__*/function (_Generator2) {
    _inherits(ShapeGenerator, _Generator2);

    var _super2 = _createSuper(ShapeGenerator);

    function ShapeGenerator(opts) {
      var _this4;

      _classCallCheck(this, ShapeGenerator);

      _this4 = _super2.call(this, opts);
      _this4.generator = new _lib.MersenneTwister();
      return _this4;
    }

    _createClass(ShapeGenerator, [{
      key: "_nextNote",
      value: function _nextNote() {
        var _this5 = this;

        var shape = this.shapes[this.generator["int"]() % this.shapes.length];
        var shapeMax = Math.max.apply(Math, _toConsumableArray(shape));

        if (shapeMax > this.notes.length) {
          throw "shape too big for available notes";
        }

        var bass = this.generator["int"]() % (this.notes.length - shapeMax);
        return shape.map(function (offset) {
          return _this5.notes[(bass + offset) % _this5.notes.length];
        });
      } // get the shape and all the inversions for it

    }, {
      key: "inversions",
      value: function inversions(shape) {
        shape = _toConsumableArray(shape);
        shape.sort(function (a, b) {
          return a - b;
        });
        var out = [shape];
        var count = shape.length - 1;

        while (count > 0) {
          var dupe = _toConsumableArray(out[out.length - 1]);

          dupe.push(dupe.shift() + 7);
          dupe.sort(function (a, b) {
            return a - b;
          });

          while (dupe[0] > 0) {
            for (var i in dupe) {
              dupe[i] -= 1;
            }
          }

          out.push(dupe);
          count--;
        }

        return out;
      }
    }]);

    return ShapeGenerator;
  }(Generator);

  _exports.ShapeGenerator = ShapeGenerator;

  var TriadNotes = /*#__PURE__*/function (_ShapeGenerator) {
    _inherits(TriadNotes, _ShapeGenerator);

    var _super3 = _createSuper(TriadNotes);

    function TriadNotes(notes, opts) {
      var _this6;

      _classCallCheck(this, TriadNotes);

      _this6 = _super3.call(this, opts);
      _this6.notes = notes;
      _this6.shapes = _this6.inversions([0, 2, 4]);
      return _this6;
    }

    return TriadNotes;
  }(ShapeGenerator);

  _exports.TriadNotes = TriadNotes;

  var SevenOpenNotes = /*#__PURE__*/function (_ShapeGenerator2) {
    _inherits(SevenOpenNotes, _ShapeGenerator2);

    var _super4 = _createSuper(SevenOpenNotes);

    function SevenOpenNotes(notes, opts) {
      var _this7;

      _classCallCheck(this, SevenOpenNotes);

      _this7 = _super4.call(this, opts);
      _this7.notes = notes; // some random inversions spaced apart

      _this7.shapes = [// root on bottom
      [0, 4, 9, 13], [0, 6, 9, 11], // third on bottom
      [2 - 2, 6 - 2, 11 - 2, 14 - 2], [2 - 2, 7 - 2, 11 - 2, 13 - 2], // fifth on bottom
      [4 - 4, 6 - 4, 9 - 4, 14 - 4], [4 - 4, 7 - 4, 9 - 4, 13 - 4]];
      return _this7;
    }

    return SevenOpenNotes;
  }(ShapeGenerator);

  _exports.SevenOpenNotes = SevenOpenNotes;

  var ProgressionGenerator = /*#__PURE__*/function (_Generator3) {
    _inherits(ProgressionGenerator, _Generator3);

    var _super5 = _createSuper(ProgressionGenerator);

    function ProgressionGenerator(scale, range, progression, opts) {
      var _this8;

      _classCallCheck(this, ProgressionGenerator);

      _this8 = _super5.call(this, opts);
      _this8.position = 0;
      _this8.progression = progression;
      _this8.generator = new _lib.MersenneTwister();
      _this8.scale = scale;
      _this8.range = range; // calculate all the roots we can use to build chords on top of

      var roots = scale.getLooseRange.apply(scale, _toConsumableArray(range));
      _this8.rootsByDegree = {};

      var _iterator9 = _createForOfIteratorHelper(roots),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var r = _step9.value;
          var degree = scale.getDegree(r);
          _this8.rootsByDegree[degree] = _this8.rootsByDegree[degree] || [];

          _this8.rootsByDegree[degree].push(r);
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }

      return _this8;
    }

    _createClass(ProgressionGenerator, [{
      key: "_nextNote",
      value: function _nextNote() {
        var _this$scale;

        var _this$progression = _slicedToArray(this.progression[this.position % this.progression.length], 2),
            degree = _this$progression[0],
            shape = _this$progression[1];

        this.position += 1;
        var name = this.scale.degreeToName(degree);
        var chord = new _music.Chord(name, shape);

        var notes = (_this$scale = this.scale).getLooseRange.apply(_this$scale, _toConsumableArray(this.range)).filter(function (n) {
          return chord.containsNote(n);
        });

        var notesPerChord = 4;
        var starts = notes.length - notesPerChord;
        var p = this.generator["int"]() % starts;
        return notes.slice(p, p + notesPerChord);
      }
    }, {
      key: "nextNoteOld",
      value: function nextNoteOld() {
        var _this$progression2 = _slicedToArray(this.progression[this.position % this.progression.length], 2),
            degree = _this$progression2[0],
            chord = _this$progression2[1];

        var availableRoots = this.rootsByDegree[degree];
        this.position += 1;

        if (!availableRoots) {
          throw new Error("chord doesn't fit in scale range");
        } // console.log("availalbe roots", availableRoots)
        // console.log(chord)


        return _music.Chord.notes(availableRoots[this.generator["int"]() % availableRoots.length], chord);
      }
    }]);

    return ProgressionGenerator;
  }(Generator); // a generator that generates series of notes from positions


  _exports.ProgressionGenerator = ProgressionGenerator;

  var PositionGenerator = /*#__PURE__*/function (_Generator4) {
    _inherits(PositionGenerator, _Generator4);

    var _super6 = _createSuper(PositionGenerator);

    function PositionGenerator(notes, opts) {
      var _this9;

      _classCallCheck(this, PositionGenerator);

      _this9 = _super6.call(this, opts);
      _this9.notes = notes;
      _this9.generator = new _lib.MersenneTwister();
      return _this9;
    }

    _createClass(PositionGenerator, [{
      key: "getFingerSet",
      value: function getFingerSet() {
        var _this10 = this;

        // choose a finger
        var offset = this.generator["int"]() % (this.notes.length - 5);
        return [0].concat((0, _util.shuffled)([1, 2, 3, 4], this.generator)).map(function (i) {
          return _this10.notes[offset + i];
        });
      }
    }, {
      key: "nextNote",
      value: function nextNote() {
        var first = false;

        if (!this.fingerSet || !this.fingerSet.length) {
          this.fingerSet = this.getFingerSet();
          first = true;
        }

        var out = [this.fingerSet.shift()];

        if (first) {
          out.annotation = "1";
        }

        return out;
      }
    }]);

    return PositionGenerator;
  }(Generator);

  _exports.PositionGenerator = PositionGenerator;

  var IntervalGenerator = /*#__PURE__*/function (_Generator5) {
    _inherits(IntervalGenerator, _Generator5);

    var _super7 = _createSuper(IntervalGenerator);

    function IntervalGenerator(notes, opts) {
      var _this11;

      _classCallCheck(this, IntervalGenerator);

      _this11 = _super7.call(this, opts);
      _this11.notes = notes;
      console.log(notes);
      var seed = new Date().getTime();
      seed = 1509875466444;
      console.log("interval with seed", seed);
      _this11.generator = new _lib.MersenneTwister(seed);
      _this11.opts = opts;
      return _this11;
    }

    _createClass(IntervalGenerator, [{
      key: "nextNote",
      value: function nextNote() {
        // hard code interval for testing
        var inputIntervals = this.opts.intervals || {};
        var intervals = {};

        for (var _i2 = 0, _Object$keys = Object.keys(inputIntervals); _i2 < _Object$keys.length; _i2++) {
          var key = _Object$keys[_i2];

          if (key.match(/\d+/) && inputIntervals[key]) {
            intervals[key] = true;
          }
        }

        if (Object.keys(intervals).length == 0) {
          return "C5";
        }

        if (this.currentNote != null) {
          var intervalArray = Object.keys(intervals).map(function (i) {
            return +i - 1;
          });
          var interval = intervalArray[this.generator["int"]() % intervalArray.length];
          var sign = this.generator["int"]() % 2 == 0 ? -1 : 1;
          var nextNote = this.currentNote + sign * interval;

          if (nextNote < 0 || nextNote >= this.notes.length) {
            sign = -sign;
          }

          this.currentNote = this.currentNote + sign * interval;
        } else {
          this.currentNote = this.generator["int"]() % this.notes.length;
        }

        return this.notes[this.currentNote];
      }
    }]);

    return IntervalGenerator;
  }(Generator);

  _exports.IntervalGenerator = IntervalGenerator;
});

define("st/globals", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setTitle = setTitle;
  _exports.csrfToken = csrfToken;
  _exports.gaEvent = gaEvent;

  /*global ga*/
  function setTitle(title) {
    if (title) {
      document.title = "".concat(title, " | Pianistica");
    } else {
      document.title = "Pianistica";
    }
  }

  function csrfToken() {
    return document.getElementById("csrf_token").getAttribute("content");
  }

  function gaEvent(category, action, label, value) {
    var interactive = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
    var opts = {
      hitType: "event",
      eventCategory: category,
      eventAction: action,
      eventLabel: label,
      eventValue: value
    };

    if (!interactive) {
      opts.nonInteraction = 1;
    }

    try {
      if (window.ga) {
        ga("send", opts);
      } else {
        console.debug("event:", opts);
      }
    } catch (e) {}
  }
});

define("st/keyboard_input", ["exports", "st/music"], function (_exports, _music) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.keyCodeToChar = keyCodeToChar;
  _exports.noteForKey = noteForKey;
  _exports.SYMBOL_MAP_INVERSE = _exports.SYMBOL_MAP = _exports.KEYBOARD_MAP = void 0;
  // based off mapping here
  // http://tutorials.renoise.com/w//images/d/d6/2.8_renoisekeyboard.png
  // letter, and number of halfsteps from root
  var KEYBOARD_MAP = {
    // octave 1
    "z": 0,
    "s": 1,
    "x": 2,
    "d": 3,
    "c": 4,
    "v": 5,
    "g": 6,
    "b": 7,
    "h": 8,
    "n": 9,
    "j": 10,
    "m": 11,
    // octave 2
    ",": 12 + 0,
    "l": 12 + 1,
    ".": 12 + 2,
    ";": 12 + 3,
    "/": 12 + 4,
    "q": 12 + 0,
    "2": 12 + 1,
    "w": 12 + 2,
    "3": 12 + 3,
    "e": 12 + 4,
    "r": 12 + 5,
    "5": 12 + 6,
    "t": 12 + 7,
    "6": 12 + 8,
    "y": 12 + 9,
    "7": 12 + 10,
    "u": 12 + 11,
    // octave 3
    "i": 12 * 2 + 0,
    "9": 12 * 2 + 1,
    "o": 12 * 2 + 2,
    "0": 12 * 2 + 3,
    "p": 12 * 2 + 4,
    "[": 12 * 2 + 5,
    "=": 12 * 2 + 6,
    "]": 12 * 2 + 7
  };
  _exports.KEYBOARD_MAP = KEYBOARD_MAP;
  var SYMBOL_MAP = {
    106: "*",
    107: "+",
    109: "-",
    110: ".",
    111: "/",
    186: ";",
    187: "=",
    188: ",",
    189: "-",
    190: ".",
    191: "/",
    192: "`",
    219: "[",
    220: "\\",
    221: "]",
    222: "'",
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    27: "esc"
  };
  _exports.SYMBOL_MAP = SYMBOL_MAP;
  var SYMBOL_MAP_INVERSE = {};
  _exports.SYMBOL_MAP_INVERSE = SYMBOL_MAP_INVERSE;

  for (var key in SYMBOL_MAP) {
    SYMBOL_MAP_INVERSE[SYMBOL_MAP[key]] = key;
  }

  function keyCodeToChar(keyCode) {
    var symbol = SYMBOL_MAP[keyCode];

    if (symbol) {
      return symbol;
    }

    if (keyCode >= 32 || keyCode < 127) {
      var chr = String.fromCharCode(keyCode).toLowerCase();

      if (SYMBOL_MAP_INVERSE[chr]) {
        return; // invalid symbol
      }

      return chr;
    }
  }

  function noteForKey(root, key) {
    var offset = KEYBOARD_MAP[key];

    if (offset === undefined) {
      return;
    }

    return (0, _music.noteName)((0, _music.parseNote)(root) + offset);
  }
});

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

define("st/main", ["exports", "st/components/app", "react-dom", "react"], function (_exports, _app, ReactDOM, React) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.init = init;
  _exports.testPage = testPage;
  _exports.installServiceWorker = installServiceWorker;
  _app = _interopRequireDefault(_app);
  ReactDOM = _interopRequireWildcard(ReactDOM);
  React = _interopRequireWildcard(React);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  /*global N*/
  window.N = window.N || {};
  N.enable_presets = false;
  N.init = init;

  function init(session) {
    N.session = session || {};
    ReactDOM.render( /*#__PURE__*/React.createElement(_app["default"], null), document.getElementById("page"));
    installServiceWorker(session.cacheBuster);
  }

  function testPage(session) {
    N.session = session || {};
    ReactDOM.render( /*#__PURE__*/React.createElement(_app["default"], {
      layout: _app["default"].BlankLayout
    }), document.getElementById("page"));
  }

  function installServiceWorker(timestamp) {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js?".concat(timestamp)).then(function (registration) {
        console.log("Service worker registered", registration.scope);
      }, function (err) {
        console.error("Service worker failed to register", err);
      });
    }
  }
});

define("st/midi", ["exports", "st/music"], function (_exports, _music) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.parseMidiMessage = parseMidiMessage;
  _exports.Metronome = _exports.MidiChannel = _exports.BaseOutputChannel = _exports.MidiInput = _exports.NOTE_EVENTS = void 0;

  var _NOTE_EVENTS;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var NOTE_EVENTS = (_NOTE_EVENTS = {}, _defineProperty(_NOTE_EVENTS, 144, "noteOn"), _defineProperty(_NOTE_EVENTS, 128, "noteOff"), _defineProperty(_NOTE_EVENTS, 176, "dataEntry"), _NOTE_EVENTS);
  _exports.NOTE_EVENTS = NOTE_EVENTS;

  function parseMidiMessage(message) {
    var _message$data = _slicedToArray(message.data, 3),
        raw = _message$data[0],
        pitch = _message$data[1],
        velocity = _message$data[2];

    var channel = raw & 0xf;
    var type = raw & 0xf0;
    var n = (0, _music.noteName)(pitch);

    if (NOTE_EVENTS[type] == "dataEntry") {
      return ["dataEntry"];
    }

    if (NOTE_EVENTS[type] == "noteOn") {
      if (velocity == 0) {
        return ["noteOff", n];
      } else {
        return ["noteOn", n, channel, velocity];
      }
    }

    if (NOTE_EVENTS[type] == "noteOff") {
      return ["noteOff", n];
    }
  } // takes input, transforms it into note events


  var MidiInput = /*#__PURE__*/function () {
    function MidiInput() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, MidiInput);

      this.sustainPedalEnabled = opts.sustainPedalEnabled;
      this.heldNotes = {};
      this.sustainPedalOn = false;
      this.opts = opts;
    }

    _createClass(MidiInput, [{
      key: "noteOn",
      value: function noteOn(name, velocity) {
        if (this.heldNotes[name]) {
          if (this.heldNotes[name].sustain) {
            delete this.heldNotes[name];

            if (this.opts.noteOff) {
              this.opts.noteOff(name);
            }
          } else {
            return;
          }
        }

        this.heldNotes[name] = {
          held: true
        };

        if (this.opts.noteOn) {
          this.opts.noteOn(name, velocity);
        }
      }
    }, {
      key: "noteOff",
      value: function noteOff(name) {
        if (!this.heldNotes[name]) {
          return;
        }

        if (this.sustainPedalOn) {
          this.heldNotes[name].held = false;
          this.heldNotes[name].sustain = true;
        } else {
          delete this.heldNotes[name];

          if (this.opts.noteOff) {
            this.opts.noteOff(name);
          }
        }
      }
    }, {
      key: "pedalOn",
      value: function pedalOn() {
        if (!this.sustainPedalEnabled) {
          return;
        }

        this.sustainPedalOn = true;
      }
    }, {
      key: "pedalOff",
      value: function pedalOff() {
        var _this = this;

        if (!this.sustainPedalEnabled || !this.sustainPedalOn) {
          return;
        }

        this.sustainPedalOn = false; // see who to turn off

        var toTurnOff = Object.keys(this.heldNotes).filter(function (name) {
          return _this.heldNotes[name].sustain && !_this.heldNotes[name].held;
        });

        var _iterator = _createForOfIteratorHelper(toTurnOff),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var name = _step.value;
            delete this.heldNotes[name];

            if (this.opts.noteOff) {
              this.opts.noteOff(name);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }, {
      key: "onMidiMessage",
      value: function onMidiMessage(message) {
        var _message$data2 = _slicedToArray(message.data, 3),
            raw = _message$data2[0],
            pitch = _message$data2[1],
            velocity = _message$data2[2];

        var cmd = raw >> 4,
            channel = raw & 0xf,
            type = raw & 0xf0;
        var n = (0, _music.noteName)(pitch);

        if (NOTE_EVENTS[type] == "noteOn") {
          if (velocity == 0) {
            this.noteOff(n);
          } else if (!document.hidden) {
            // ignore when the browser tab isn't active
            this.noteOn(n, velocity);
          }
        }

        if (NOTE_EVENTS[type] == "noteOff") {
          this.noteOff(n);
        }

        if (NOTE_EVENTS[type] == "dataEntry") {
          if (pitch == 64) {
            if (velocity > 0) {
              this.pedalOn();
            } else {
              this.pedalOff();
            }
          }
        }
      }
    }]);

    return MidiInput;
  }();

  _exports.MidiInput = MidiInput;

  var BaseOutputChannel = /*#__PURE__*/function () {
    function BaseOutputChannel() {
      _classCallCheck(this, BaseOutputChannel);
    }

    _createClass(BaseOutputChannel, [{
      key: "playNoteList",
      value: function playNoteList(list) {
        var _this2 = this;

        var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
        list = _toConsumableArray(list); // copy to avoid edits

        var idx = 0;
        return new Promise(function (resolve) {
          var playNextColumn = function playNextColumn() {
            if (idx >= list.length) {
              resolve();
              return;
            }

            var col = list[idx];

            var _iterator2 = _createForOfIteratorHelper(col),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var note = _step2.value;

                _this2.noteOn((0, _music.parseNote)(note), 100);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            setTimeout(function () {
              var col = list[idx];

              var _iterator3 = _createForOfIteratorHelper(col),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var note = _step3.value;

                  _this2.noteOff((0, _music.parseNote)(note));
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }

              idx += 1;
              playNextColumn();
            }, delay);
          };

          playNextColumn();
        });
      }
    }, {
      key: "testNote",
      value: function testNote() {
        var _this3 = this;

        // play middle C for 1 second
        console.log("playing test note");
        this.noteOn(_music.MIDDLE_C_PITCH, 100);
        setTimeout(function () {
          console.log("stopping test note");

          _this3.noteOff(_music.MIDDLE_C_PITCH);
        }, 500);
      }
    }]);

    return BaseOutputChannel;
  }();

  _exports.BaseOutputChannel = BaseOutputChannel;

  var MidiChannel = /*#__PURE__*/function (_BaseOutputChannel) {
    _inherits(MidiChannel, _BaseOutputChannel);

    var _super = _createSuper(MidiChannel);

    function MidiChannel(output, channel) {
      var _this4;

      _classCallCheck(this, MidiChannel);

      _this4 = _super.call(this);
      _this4.output = output;

      if (channel > 15 || channel < 0) {
        throw "invalid channel:" + channel;
      }

      _this4.channel = channel;
      return _this4;
    }

    _createClass(MidiChannel, [{
      key: "sendMessage",
      value: function sendMessage(message) {
        this.output.send(message);
      }
    }, {
      key: "setInstrument",
      value: function setInstrument(programNumber) {
        this.lastProgramNumber = +programNumber;
        this.output.send([(12 << 4) + this.channel, programNumber]);
      }
    }, {
      key: "noteOn",
      value: function noteOn(pitch, velocity) {
        this.output.send([(9 << 4) + this.channel, pitch, velocity]);
      }
    }, {
      key: "noteOff",
      value: function noteOff(pitch) {
        this.output.send([(8 << 4) + this.channel, pitch, 0]);
      }
    }, {
      key: "getMetronome",
      value: function getMetronome() {
        return new Metronome(this.output);
      }
    }]);

    return MidiChannel;
  }(BaseOutputChannel);

  _exports.MidiChannel = MidiChannel;

  var Metronome = /*#__PURE__*/function (_MidiChannel) {
    _inherits(Metronome, _MidiChannel);

    var _super2 = _createSuper(Metronome);

    function Metronome(output) {
      _classCallCheck(this, Metronome);

      return _super2.call(this, output, 9);
    }

    _createClass(Metronome, [{
      key: "hit",
      value: function hit(n) {
        var _this5 = this;

        var v = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
        this.noteOn(n, v);
        setTimeout(function () {
          return _this5.noteOff(n);
        }, 10);
      }
    }, {
      key: "tick",
      value: function tick() {
        this.hit(75);
      }
    }, {
      key: "tock",
      value: function tock() {
        this.hit(76);
      }
    }, {
      key: "start",
      value: function start() {
        var _this6 = this;

        var bpm = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 60;

        if (this.running) {
          console.warn("Attempted to start already running metronome");
          return;
        }

        this.running = true;
        var signature = 4;
        var bps = bpm / 60;
        var beatDurationMs = 1 / bps * 1000;
        this.beatDurationMs = beatDurationMs;
        var beat = 0;

        var tick = function tick() {
          if (beat % signature == 0) {
            _this6.tick();
          } else {
            _this6.tock();
          }

          beat += 1;
        };

        var startTime = performance.now();
        this.currentTick = startTime;
        var epsilon = 5; // ms threshold

        var frameUpdate = function frameUpdate(time) {
          var delta = time - startTime;

          if (delta >= beatDurationMs - epsilon) {
            startTime += beatDurationMs;
            _this6.currentTick = startTime;
            tick();
          }

          if (_this6.running) {
            window.requestAnimationFrame(frameUpdate);
          }
        };

        window.requestAnimationFrame(frameUpdate);
        tick();
      }
    }, {
      key: "getLatency",
      value: function getLatency() {
        if (!this.running) {
          console.error("metronome not running");
          return;
        }

        var now = performance.now();
        var nextTick = this.currentTick + this.beatDurationMs;

        if (Math.abs(now - this.currentTick) < Math.abs(now - nextTick)) {
          return now - this.currentTick;
        } else {
          return now - nextTick;
        }
      }
    }, {
      key: "stop",
      value: function stop() {
        this.running = false;
      }
    }]);

    return Metronome;
  }(MidiChannel);

  _exports.Metronome = Metronome;
});

define("st/music", ["exports", "st/note_list", "require"], function (_exports, _note_list, _require) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.noteName = noteName;
  _exports.parseNote = parseNote;
  _exports.fixNoteOctaveNum = fixNoteOctaveNum;
  _exports.noteStaffOffset = noteStaffOffset;
  _exports.notesSame = notesSame;
  _exports.addInterval = addInterval;
  _exports.compareNotes = compareNotes;
  _exports.notesLessThan = notesLessThan;
  _exports.notesGreaterThan = notesGreaterThan;
  _exports.Chord = _exports.ChromaticScale = _exports.MinorBluesScale = _exports.MajorBluesScale = _exports.AscendingMelodicMinorScale = _exports.HarmonicMinorScale = _exports.MinorScale = _exports.MajorScale = _exports.Scale = _exports.ChromaticKeySignature = _exports.KeySignature = _exports.NOTE_NAME_OFFSETS = _exports.LETTER_OFFSETS = _exports.OFFSETS = _exports.OCTAVE_SIZE = _exports.MIDDLE_C_PITCH = void 0;
  _require = _interopRequireDefault(_require);

  var _OFFSETS, _LETTER_OFFSETS;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var MIDDLE_C_PITCH = 60;
  _exports.MIDDLE_C_PITCH = MIDDLE_C_PITCH;
  var OCTAVE_SIZE = 12;
  _exports.OCTAVE_SIZE = OCTAVE_SIZE;
  var OFFSETS = (_OFFSETS = {}, _defineProperty(_OFFSETS, 0, "C"), _defineProperty(_OFFSETS, 2, "D"), _defineProperty(_OFFSETS, 4, "E"), _defineProperty(_OFFSETS, 5, "F"), _defineProperty(_OFFSETS, 7, "G"), _defineProperty(_OFFSETS, 9, "A"), _defineProperty(_OFFSETS, 11, "B"), _defineProperty(_OFFSETS, "C", 0), _defineProperty(_OFFSETS, "D", 2), _defineProperty(_OFFSETS, "E", 4), _defineProperty(_OFFSETS, "F", 5), _defineProperty(_OFFSETS, "G", 7), _defineProperty(_OFFSETS, "A", 9), _defineProperty(_OFFSETS, "B", 11), _OFFSETS);
  _exports.OFFSETS = OFFSETS;
  var LETTER_OFFSETS = (_LETTER_OFFSETS = {}, _defineProperty(_LETTER_OFFSETS, 0, 0), _defineProperty(_LETTER_OFFSETS, 2, 1), _defineProperty(_LETTER_OFFSETS, 4, 2), _defineProperty(_LETTER_OFFSETS, 5, 3), _defineProperty(_LETTER_OFFSETS, 7, 4), _defineProperty(_LETTER_OFFSETS, 9, 5), _defineProperty(_LETTER_OFFSETS, 11, 6), _LETTER_OFFSETS);
  _exports.LETTER_OFFSETS = LETTER_OFFSETS;
  var NOTE_NAME_OFFSETS = {
    "C": 0,
    "D": 1,
    "E": 2,
    "F": 3,
    "G": 4,
    "A": 5,
    "B": 6
  };
  _exports.NOTE_NAME_OFFSETS = NOTE_NAME_OFFSETS;

  function noteName(pitch) {
    var sharpen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var octave = Math.floor(pitch / OCTAVE_SIZE);
    var offset = pitch - octave * OCTAVE_SIZE;
    var name = OFFSETS[offset];

    if (!name) {
      if (sharpen) {
        name = OFFSETS[offset - 1] + "#";
      } else {
        name = OFFSETS[offset + 1] + "b";
      }
    }

    return "".concat(name).concat(octave);
  }

  function parseNoteAccidentals(note) {
    var _note$match = note.match(/^([A-G])(#|b)?/),
        _note$match2 = _slicedToArray(_note$match, 3),
        letter = _note$match2[1],
        accidental = _note$match2[2];

    var n = 0;

    if (accidental == "#") {
      n += 1;
    }

    if (accidental == "b") {
      n -= 1;
    }

    return n;
  } // get the octave independent offset in halfsteps (from C), used for comparison


  function parseNoteOffset(note) {
    var _note$match3 = note.match(/^([A-G])(#|b)?/),
        _note$match4 = _slicedToArray(_note$match3, 3),
        letter = _note$match4[1],
        accidental = _note$match4[2];

    if (OFFSETS[letter] == undefined) {
      throw "invalid note letter: ".concat(letter);
    }

    var n = OFFSETS[letter];

    if (accidental == "#") {
      n += 1;
    }

    if (accidental == "b") {
      n -= 1;
    }

    return (n + 12) % 12; // wrap around for Cb and B#
  }

  function parseNote(note) {
    var parsed = note.match(/^([A-G])(#|b)?(\d+)$/);

    if (!parsed) {
      throw new Error("parseNote: invalid note format '".concat(note, "'"));
    }

    var _parsed = _slicedToArray(parsed, 4),
        letter = _parsed[1],
        accidental = _parsed[2],
        octave = _parsed[3];

    if (OFFSETS[letter] == undefined) {
      throw "invalid note letter: ".concat(letter);
    }

    var n = OFFSETS[letter] + parseInt(octave, 10) * OCTAVE_SIZE;

    if (accidental == "#") {
      n += 1;
    }

    if (accidental == "b") {
      n -= 1;
    }

    return n;
  } // very dirty way to fix octave number


  function fixNoteOctaveNum(note) {
    var parsed = note.match(/^([A-G])(#|b)?(\d+)$/);

    if (!parsed) {
      throw new Error("parseNote: invalid note format '".concat(note, "'"));
    }

    var _parsed2 = _slicedToArray(parsed, 4),
        letter = _parsed2[1],
        accidental = _parsed2[2],
        octave = _parsed2[3];

    return letter + (accidental || '') + (parseInt(octave, 10) - 1);
  }

  function noteStaffOffset(note) {
    var _note$match5 = note.match(/(\w)[#b]?(\d+)/),
        _note$match6 = _slicedToArray(_note$match5, 3),
        _ = _note$match6[0],
        name = _note$match6[1],
        octave = _note$match6[2];

    if (!name) {
      throw "Invalid note";
    }

    return +octave * 7 + NOTE_NAME_OFFSETS[name];
  } // octaveless note comparison


  function notesSame(a, b) {
    return parseNoteOffset(a) == parseNoteOffset(b);
  }

  function addInterval(note, halfSteps) {
    return noteName(parseNote(note) + halfSteps);
  } // returns 0 if notes are same
  // returns < 0 if a < b
  // returns > 0 if a > b


  function compareNotes(a, b) {
    a = parseNote(a);
    b = parseNote(b);
    return a - b;
  }

  function notesLessThan(a, b) {
    return compareNotes(a, b) < 0;
  }

  function notesGreaterThan(a, b) {
    return compareNotes(a, b) > 0;
  }

  var KeySignature = /*#__PURE__*/function () {
    _createClass(KeySignature, null, [{
      key: "allKeySignatures",
      // excludes the chromatic option
      value: function allKeySignatures() {
        return [0, 1, 2, 3, 4, 5, -1, -2, -3, -4, -5, -6].map(function (key) {
          return new KeySignature(key);
        });
      }
    }, {
      key: "forCount",
      value: function forCount(count) {
        if (!this.cache) {
          this.cache = this.allKeySignatures();
        }

        var _iterator = _createForOfIteratorHelper(this.cache),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var key = _step.value;

            if (key.count == count) {
              return key;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } // count: the number of accidentals in the key

    }]);

    function KeySignature(count) {
      _classCallCheck(this, KeySignature);

      this.count = count;
    }

    _createClass(KeySignature, [{
      key: "isChromatic",
      value: function isChromatic() {
        false;
      }
    }, {
      key: "isSharp",
      value: function isSharp() {
        return this.count > 0;
      }
    }, {
      key: "isFlat",
      value: function isFlat() {
        return this.count < 0;
      }
    }, {
      key: "name",
      value: function name() {
        var offset = this.count + 1;

        if (offset < 0) {
          offset += KeySignature.FIFTHS.length;
        }

        return KeySignature.FIFTHS[offset];
      }
    }, {
      key: "toString",
      value: function toString() {
        return this.name();
      } // the default scale root for building scales from key signature

    }, {
      key: "scaleRoot",
      value: function scaleRoot() {
        return this.name();
      } // the scale used on the random note generator

    }, {
      key: "defaultScale",
      value: function defaultScale() {
        return _construct(MajorScale, [this].concat(Array.prototype.slice.call(arguments)));
      } // convert note to enharmonic equivalent that fits into this key signature
      // TODO: this might have to be done at the scale level

    }, {
      key: "enharmonic",
      value: function enharmonic(note) {
        if (this.isFlat()) {
          if (note.indexOf("#") != -1) {
            return noteName(parseNote(note), false);
          }
        }

        if (this.isSharp()) {
          if (note.indexOf("b") != -1) {
            return noteName(parseNote(note), true);
          }
        }

        return note;
      } // which notes have accidentals in this key

    }, {
      key: "accidentalNotes",
      value: function accidentalNotes() {
        var fifths = KeySignature.FIFTHS_TRUNCATED;

        if (this.count > 0) {
          return fifths.slice(0, this.count);
        } else {
          return fifths.slice(fifths.length + this.count).reverse();
        }
      } // key note -> raw note

    }, {
      key: "unconvertNote",
      value: function unconvertNote(note) {
        if (this.count == 0) {
          return note;
        }

        if (typeof note == "number") {
          note = noteName(note);
        }

        var _note$match7 = note.match(/^([A-G])(\d+)?/),
            _note$match8 = _slicedToArray(_note$match7, 3),
            _ = _note$match8[0],
            name = _note$match8[1],
            octave = _note$match8[2];

        if (!name) {
          throw "can't unconvert note with accidental";
        }

        var _iterator2 = _createForOfIteratorHelper(this.accidentalNotes()),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var modifiedNote = _step2.value;

            if (modifiedNote == name) {
              return "".concat(name).concat(this.isSharp() ? "#" : "b").concat(octave);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        return note;
      } // how many accidentals should display on note for this key
      // null: nothing
      // 0: a natural
      // 1: a sharp
      // -1: a flat
      // 2: double sharp, etc.

    }, {
      key: "accidentalsForNote",
      value: function accidentalsForNote(note) {
        if (typeof note == "number") {
          note = noteName(note);
        }

        var _note$match9 = note.match(/^([A-G])(#|b)?/),
            _note$match10 = _slicedToArray(_note$match9, 3),
            _ = _note$match10[0],
            name = _note$match10[1],
            a = _note$match10[2];

        var n = 0;

        if (a == "#") {
          n += 1;
        }

        if (a == "b") {
          n -= 1;
        }

        var _iterator3 = _createForOfIteratorHelper(this.accidentalNotes()),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var modifiedNote = _step3.value;

            if (modifiedNote == name) {
              if (this.isSharp()) {
                if (a == "#") {
                  return null;
                }

                if (a == "b") {
                  return -1;
                }
              } else if (this.isFlat()) {
                if (a == "#") {
                  return 1;
                }

                if (a == "b") {
                  return null;
                }
              }

              return 0;
            }
          } // not modified by the key

        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        if (a == "#") {
          return 1;
        }

        if (a == "b") {
          return -1;
        }

        return null;
      } // the notes to give accidentals to within the range [min, max], the returned
      // notes will not be sharp or flat

    }, {
      key: "notesInRange",
      value: function notesInRange(min, max) {
        if (this.count == 0) {
          return [];
        }

        if (typeof max == "string") {
          max = parseNote(max);
        }

        if (typeof min == "string") {
          min = parseNote(min);
        }

        var octave = 5; // TODO: pick something close to min/max

        var notes = null;

        if (this.count > 0) {
          var count = this.count;
          notes = [parseNote("F".concat(octave))];

          while (count > 1) {
            count -= 1;
            notes.push(notes[notes.length - 1] + 7);
          }
        }

        if (this.count < 0) {
          var _count = -1 * this.count;

          notes = [parseNote("B".concat(octave))];

          while (_count > 1) {
            _count -= 1;
            notes.push(notes[notes.length - 1] - 7);
          }
        }

        return notes.map(function (n) {
          while (n <= min) {
            n += 12;
          }

          while (n > max) {
            n -= 12;
          }

          return noteName(n);
        });
      }
    }]);

    return KeySignature;
  }();

  _exports.KeySignature = KeySignature;

  _defineProperty(KeySignature, "FIFTHS", ["F", "C", "G", "D", "A", "E", "B", "Gb", "Db", "Ab", "Eb", "Bb"]);

  _defineProperty(KeySignature, "FIFTHS_TRUNCATED", ["F", "C", "G", "D", "A", "E", "B"]);

  var ChromaticKeySignature = /*#__PURE__*/function (_KeySignature) {
    _inherits(ChromaticKeySignature, _KeySignature);

    var _super = _createSuper(ChromaticKeySignature);

    function ChromaticKeySignature() {
      _classCallCheck(this, ChromaticKeySignature);

      return _super.call(this, 0); // render as c major
    }

    _createClass(ChromaticKeySignature, [{
      key: "isChromatic",
      value: function isChromatic() {
        return true;
      }
    }, {
      key: "name",
      value: function name() {
        return "Chromatic";
      }
    }, {
      key: "scaleRoot",
      value: function scaleRoot() {
        return "C";
      }
    }, {
      key: "defaultScale",
      value: function defaultScale() {
        return _construct(ChromaticScale, [this].concat(Array.prototype.slice.call(arguments)));
      }
    }]);

    return ChromaticKeySignature;
  }(KeySignature);

  _exports.ChromaticKeySignature = ChromaticKeySignature;

  var Scale = /*#__PURE__*/function () {
    function Scale(root) {
      _classCallCheck(this, Scale);

      if (root instanceof KeySignature) {
        root = root.scaleRoot();
      }

      if (!root.match(/^[A-G][b#]?$/)) {
        throw "scale root not properly formed: " + root;
      }

      this.root = root;
    }

    _createClass(Scale, [{
      key: "getFullRange",
      value: function getFullRange() {
        return this.getRange(0, (this.steps.length + 1) * 8);
      }
    }, {
      key: "getLooseRange",
      value: function getLooseRange(min, max) {
        return this.getFullRange().filterByRange(min, max);
      }
    }, {
      key: "getRange",
      value: function getRange(octave) {
        var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.steps.length + 1;
        var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var current = parseNote("".concat(this.root).concat(octave));
        var NoteList = (0, _require["default"])("st/note_list")["default"];
        var isFlat = this.isFlat();
        var range = new NoteList();
        var k = 0;

        while (offset < 0) {
          k--;

          if (k < 0) {
            k += this.steps.length;
          }

          current -= this.steps[k % this.steps.length];
          offset++;
        }

        for (var i = 0; i < count + offset; i++) {
          if (i >= offset) {
            range.push(noteName(current, this.chromatic || !isFlat));
          }

          current += this.steps[k++ % this.steps.length];
        }

        return range;
      }
    }, {
      key: "isFlat",
      value: function isFlat() {
        var idx = KeySignature.FIFTHS.indexOf(this.root);

        if (idx == -1) {
          // the root is sharp
          var letter = this.root.charCodeAt(0) + 1;

          if (letter > 71) {
            letter -= 5;
          }

          var realRoot = String.fromCharCode(letter) + "#";
          idx = KeySignature.FIFTHS.indexOf(realRoot);
        }

        if (this.minor) {
          idx -= 3;

          if (idx < 0) {
            idx += KeySignature.FIFTHS.length;
          }
        }

        return idx < 1 || idx > 6;
      }
    }, {
      key: "containsNote",
      value: function containsNote(note) {
        var pitch = parseNoteOffset(note);
        var rootPitch = parseNoteOffset(this.root); // move note within an octave of root

        while (pitch < rootPitch) {
          pitch += OCTAVE_SIZE;
        }

        while (pitch >= rootPitch + OCTAVE_SIZE) {
          pitch -= OCTAVE_SIZE;
        }

        var currentPitch = rootPitch;
        var i = 0; // keep incrementing until we hit it, or pass it

        while (currentPitch <= pitch) {
          if (currentPitch == pitch) {
            return true;
          }

          currentPitch += this.steps[i % this.steps.length];
          i++;
        }

        return false;
      } // degrees are 1 indexed

    }, {
      key: "degreeToName",
      value: function degreeToName(degree) {
        // truncat to reasonable range
        degree = (degree - 1) % this.steps.length + 1;
        var range = this.getRange(0, degree);
        var note = range[range.length - 1];
        var m = note.match(/^[^\d]+/);
        return m[0];
      } // degrees are 1 indexed

    }, {
      key: "getDegree",
      value: function getDegree(note) {
        var pitch = parseNoteOffset(note);
        var rootPitch = parseNoteOffset(this.root); // move note within an octave of root

        while (pitch < rootPitch) {
          pitch += OCTAVE_SIZE;
        }

        while (pitch >= rootPitch + OCTAVE_SIZE) {
          pitch -= OCTAVE_SIZE;
        }

        var degree = 1;
        var currentPitch = rootPitch;

        if (currentPitch == pitch) {
          return degree;
        }

        var _iterator4 = _createForOfIteratorHelper(this.steps),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var offset = _step4.value;
            currentPitch += offset;
            degree += 1;

            if (currentPitch == pitch) {
              return degree;
            }

            if (currentPitch > pitch) {
              break;
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }

        throw new Error("".concat(note, " is not in scale ").concat(this.root));
      } // degree is one index
      // new MajorScale().buildChordSteps(1, 2) -> major chord

    }, {
      key: "buildChordSteps",
      value: function buildChordSteps(degree, count) {
        var idx = degree - 1;
        var out = [];

        while (count > 0) {
          var stride = 2;
          var step = 0;

          while (stride > 0) {
            step += this.steps[idx % this.steps.length];
            idx++;
            stride--;
          }

          out.push(step);
          count--;
        }

        return out;
      } // all chords with count notes

    }, {
      key: "allChords",
      value: function allChords() {
        var noteCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
        var out = [];

        for (var i = 0; i < this.steps.length; i++) {
          var degree = i + 1;
          var root = this.degreeToName(degree);
          var steps = this.buildChordSteps(degree, noteCount - 1);
          out.push(new Chord(root, steps));
        }

        return out;
      }
    }]);

    return Scale;
  }();

  _exports.Scale = Scale;

  var MajorScale = /*#__PURE__*/function (_Scale) {
    _inherits(MajorScale, _Scale);

    var _super2 = _createSuper(MajorScale);

    function MajorScale(root) {
      var _this;

      _classCallCheck(this, MajorScale);

      _this = _super2.call(this, root);
      _this.steps = [2, 2, 1, 2, 2, 2, 1];
      return _this;
    }

    return MajorScale;
  }(Scale); // natural minor


  _exports.MajorScale = MajorScale;

  var MinorScale = /*#__PURE__*/function (_Scale2) {
    _inherits(MinorScale, _Scale2);

    var _super3 = _createSuper(MinorScale);

    function MinorScale(root) {
      var _this2;

      _classCallCheck(this, MinorScale);

      _this2 = _super3.call(this, root);

      _defineProperty(_assertThisInitialized(_this2), "minor", true);

      _this2.steps = [2, 1, 2, 2, 1, 2, 2];
      return _this2;
    }

    return MinorScale;
  }(Scale);

  _exports.MinorScale = MinorScale;

  var HarmonicMinorScale = /*#__PURE__*/function (_Scale3) {
    _inherits(HarmonicMinorScale, _Scale3);

    var _super4 = _createSuper(HarmonicMinorScale);

    function HarmonicMinorScale(root) {
      var _this3;

      _classCallCheck(this, HarmonicMinorScale);

      _this3 = _super4.call(this, root);

      _defineProperty(_assertThisInitialized(_this3), "minor", true);

      _this3.steps = [2, 1, 2, 2, 1, 3, 1];
      return _this3;
    }

    return HarmonicMinorScale;
  }(Scale);

  _exports.HarmonicMinorScale = HarmonicMinorScale;

  var AscendingMelodicMinorScale = /*#__PURE__*/function (_Scale4) {
    _inherits(AscendingMelodicMinorScale, _Scale4);

    var _super5 = _createSuper(AscendingMelodicMinorScale);

    function AscendingMelodicMinorScale(root) {
      var _this4;

      _classCallCheck(this, AscendingMelodicMinorScale);

      _this4 = _super5.call(this, root);

      _defineProperty(_assertThisInitialized(_this4), "minor", true);

      _this4.steps = [2, 1, 2, 2, 2, 2, 1];
      return _this4;
    }

    return AscendingMelodicMinorScale;
  }(Scale);

  _exports.AscendingMelodicMinorScale = AscendingMelodicMinorScale;

  var MajorBluesScale = /*#__PURE__*/function (_Scale5) {
    _inherits(MajorBluesScale, _Scale5);

    var _super6 = _createSuper(MajorBluesScale);

    function MajorBluesScale(root) {
      var _this5;

      _classCallCheck(this, MajorBluesScale);

      _this5 = _super6.call(this, root); //  C, D, D♯/E♭, E, G, A

      _this5.steps = [2, 1, 1, 3, 2, 3];
      return _this5;
    }

    return MajorBluesScale;
  }(Scale);

  _exports.MajorBluesScale = MajorBluesScale;

  var MinorBluesScale = /*#__PURE__*/function (_Scale6) {
    _inherits(MinorBluesScale, _Scale6);

    var _super7 = _createSuper(MinorBluesScale);

    function MinorBluesScale(root) {
      var _this6;

      _classCallCheck(this, MinorBluesScale);

      _this6 = _super7.call(this, root); // C, D♯/E♭, F, F♯/G♭, G, B♭

      _defineProperty(_assertThisInitialized(_this6), "minor", true);

      _this6.steps = [3, 2, 1, 1, 3, 2];
      return _this6;
    }

    return MinorBluesScale;
  }(Scale);

  _exports.MinorBluesScale = MinorBluesScale;

  var ChromaticScale = /*#__PURE__*/function (_Scale7) {
    _inherits(ChromaticScale, _Scale7);

    var _super8 = _createSuper(ChromaticScale);

    function ChromaticScale(root) {
      var _this7;

      _classCallCheck(this, ChromaticScale);

      _this7 = _super8.call(this, root);

      _defineProperty(_assertThisInitialized(_this7), "chromatic", true);

      _this7.steps = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
      return _this7;
    }

    return ChromaticScale;
  }(Scale);

  _exports.ChromaticScale = ChromaticScale;

  var Chord = /*#__PURE__*/function (_Scale8) {
    _inherits(Chord, _Scale8);

    var _super9 = _createSuper(Chord);

    _createClass(Chord, null, [{
      key: "notes",
      // Chord.notes("C5", "M", 1) -> first inversion C major chord
      value: function notes(note, chordName) {
        var inversion = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var notesCount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

        var _note$match11 = note.match(/^([^\d]+)(\d+)$/),
            _note$match12 = _slicedToArray(_note$match11, 3),
            root = _note$match12[1],
            octave = _note$match12[2];

        octave = +octave;
        var intervals = Chord.SHAPES[chordName];

        if (notesCount == 0) {
          notesCount = intervals.length + 1;
        }

        return new Chord(root, intervals).getRange(octave, notesCount, inversion);
      }
    }]);

    function Chord(root, intervals) {
      var _this8;

      _classCallCheck(this, Chord);

      _this8 = _super9.call(this, root);

      if (typeof intervals == "string") {
        intervals = Chord.SHAPES[intervals];
      }

      if (!intervals) {
        throw new Error("Missing intervals for chord");
      }

      _this8.steps = _toConsumableArray(intervals); // add wrapping interval to get back to octave

      var sum = 0;

      var _iterator5 = _createForOfIteratorHelper(_this8.steps),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var i = _step5.value;
          sum += i;
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      var rest = -sum;

      while (rest < 0) {
        rest += OCTAVE_SIZE;
      }

      _this8.steps.push(rest);

      return _this8;
    } // is major or dom7 chord


    _createClass(Chord, [{
      key: "isDominant",
      value: function isDominant() {
        var shapeName = this.chordShapeName();

        if (shapeName == "M" || shapeName == "7") {
          return true;
        }

        return false;
      } // can point to a chord that's a 4th below (third above)
      // the target chord can either be major or minor (2,3,5,6) in new key

    }, {
      key: "getSecondaryDominantTargets",
      value: function getSecondaryDominantTargets() {
        var noteCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;

        if (!this.isDominant()) {
          throw new Error("chord is not dominant to begin with: ".concat(this.chordShapeName()));
        } // new root is 5 halfsteps above the current (or 7 below)


        var _noteName$match = noteName(parseNote("".concat(this.root, "5")) + 5).match(/^([^\d]+)(\d+)$/),
            _noteName$match2 = _slicedToArray(_noteName$match, 2),
            _ = _noteName$match2[0],
            newRoot = _noteName$match2[1]; // triads


        if (noteCount == 3) {
          return ["M", "m"].map(function (quality) {
            return new Chord(newRoot, quality);
          });
        } // sevenths


        if (noteCount == 4) {
          return ["M7", "m7"].map(function (quality) {
            return new Chord(newRoot, quality);
          });
        }

        throw new Error("don't know how to get secondary dominant for note count: ".concat(noteCount));
      }
    }, {
      key: "chordShapeName",
      value: function chordShapeName() {
        for (var shape in Chord.SHAPES) {
          var intervals = Chord.SHAPES[shape];

          if (this.steps.length - 1 != intervals.length) {
            continue;
          }

          var match = true;

          for (var k = 0; k < intervals.length; k++) {
            if (intervals[k] != this.steps[k]) {
              match = false;
              break;
            }
          }

          if (match) {
            return shape;
          }
        }
      } // do all the notes fit this chord

    }, {
      key: "containsNotes",
      value: function containsNotes(notes) {
        if (!notes.length) {
          return false;
        }

        var _iterator6 = _createForOfIteratorHelper(notes),
            _step6;

        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var note = _step6.value;

            if (!this.containsNote(note)) {
              return false;
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }

        return true;
      } // how many notes do the two chords share

    }, {
      key: "countSharedNotes",
      value: function countSharedNotes(otherChord) {
        var myNotes = this.getRange(5, this.steps.length);
        var theirNotes = otherChord.getRange(5, this.steps.length);
        var count = 0;
        var noteNames = {};

        var normalizeNote = function normalizeNote(note) {
          return note.replace(/\d+$/, "");
        };

        var _iterator7 = _createForOfIteratorHelper(myNotes),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var note = _step7.value;
            noteNames[normalizeNote(note)] = true;
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }

        var _iterator8 = _createForOfIteratorHelper(theirNotes),
            _step8;

        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var _note = _step8.value;
            _note = normalizeNote(_note);

            if (noteNames[_note]) {
              count += 1;
            }

            delete noteNames[_note];
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }

        return count;
      }
    }, {
      key: "toString",
      value: function toString() {
        var name = this.chordShapeName();

        if (!name) {
          console.warn("don't know name of chord", this.root, this.steps, this.getRange(5, 3));
        }

        if (name == "M") {
          name = "";
        }

        return "".concat(this.root).concat(name);
      }
    }]);

    return Chord;
  }(Scale);

  _exports.Chord = Chord;

  _defineProperty(Chord, "SHAPES", {
    "M": [4, 3],
    "m": [3, 4],
    "dim": [3, 3],
    // diminished
    "dimM7": [3, 3, 5],
    "dim7": [3, 3, 3],
    "aug": [4, 4],
    "augM7": [4, 4, 3],
    "M6": [4, 3, 2],
    "m6": [3, 4, 2],
    "M7": [4, 3, 4],
    "7": [4, 3, 3],
    "m7": [3, 4, 3],
    "m7b5": [3, 3, 4],
    "mM7": [3, 4, 4],
    // exotic
    "Q": [5, 5],
    // quartal
    "Qb4": [4, 5]
  });
});

define("st/note_list", ["exports", "st/music"], function (_exports, _music) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

  function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  var NoteList = /*#__PURE__*/function (_Array) {
    _inherits(NoteList, _Array);

    var _super = _createSuper(NoteList);

    function NoteList(notes) {
      var _this;

      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, NoteList);

      _this = _super.call(this);
      Object.setPrototypeOf(_assertThisInitialized(_this), NoteList.prototype);

      if (opts.generator) {
        _this.generator = opts.generator;
      }

      if (notes && notes.length) {
        _this.push.apply(_assertThisInitialized(_this), notes);
      } // let scale = new MajorScale("C");
      // // this.generator = new StepNotes(scale.getRange(3, 24, 2));
      // // this.generator = new RandomNotes(scale.getRange(3, 24, 2));
      // // this.generator = new MiniSteps(scale.getRange(3, 24, 2));
      // this.generator = new Double(scale.getRange(3, 10, 2), scale.getRange(5, 12));


      return _this;
    }

    _createClass(NoteList, [{
      key: "getKeyRange",
      value: function getKeyRange() {
        var notes = new _music.MajorScale("C").getRange(3, 24, 2);
        return [notes[0], notes[notes.length - 1]];
      }
    }, {
      key: "filterByRange",
      value: function filterByRange(min, max) {
        return new NoteList(this.filter(function (n) {
          if ((0, _music.notesLessThan)(n, min)) {
            return false;
          }

          if ((0, _music.notesLessThan)(max, n)) {
            return false;
          }

          return true;
        }));
      }
    }, {
      key: "pushRandom",
      value: function pushRandom() {
        return this.push(this.generator.nextNote());
      }
    }, {
      key: "fillBuffer",
      value: function fillBuffer(count) {
        for (var i = 0; i < count; i++) {
          this.pushRandom();
        }
      } // must be an array of notes

    }, {
      key: "matchesHead",
      value: function matchesHead(notes) {
        var anyOctave = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var first = this[0];

        if (!Array.isArray(notes)) {
          throw new Error("matchesHead: notes should be an array");
        }

        if (Array.isArray(first)) {
          if (first.length != notes.length) {
            return false;
          }

          if (anyOctave) {
            var noteSet = {};
            notes.forEach(function (n) {
              return noteSet[n.replace(/\d+$/, "")] = true;
            });
            return first.every(function (n) {
              return noteSet[n.replace(/\d+$/, "")];
            });
          } else {
            var pitches = notes.map(_music.parseNote);
            return first.map(_music.parseNote).every(function (n) {
              return pitches.indexOf(n) >= 0;
            });
          }
        } else {
          if (anyOctave) {
            return notes.length == 1 && (0, _music.notesSame)(notes[0], first);
          } else {
            return notes.length == 1 && (0, _music.parseNote)(notes[0]) == (0, _music.parseNote)(first);
          }
        }
      }
    }, {
      key: "currentColumn",
      value: function currentColumn() {
        var first = this[0];

        if (Array.isArray(first)) {
          return first;
        } else {
          return [first];
        }
      } // if single note is in head

    }, {
      key: "inHead",
      value: function inHead(note) {
        var first = this[0];

        if (Array.isArray(first)) {
          return first.some(function (n) {
            return n == note;
          });
        } else {
          return note == first;
        }
      }
    }, {
      key: "toString",
      value: function toString() {
        return this.map(function (n) {
          return n.join(" ");
        }).join(", ");
      } // converts it to serialize list of note numbers for quick comparisons

    }, {
      key: "toNoteString",
      value: function toNoteString() {
        return this.map(function (n) {
          return n.map(_music.parseNote).join(" ");
        }).join(", ");
      }
    }]);

    return NoteList;
  }( /*#__PURE__*/_wrapNativeSuper(Array));

  _exports["default"] = NoteList;
});

define("st/note_stats", ["exports", "st/globals"], function (_exports, _globals) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;

  function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var NoteStats = /*#__PURE__*/function () {
    function NoteStats(currentUser) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, NoteStats);

      this.currentUser = currentUser;
      this.noteHitStats = {};
      this.streak = 0;
      this.hits = 0;
      this.misses = 0;
      this.lastHitTime = undefined;
      this.averageHitTime = 0;
      this.resetBuffer();
    }

    _createClass(NoteStats, [{
      key: "resetBuffer",
      value: function resetBuffer() {
        this.buffer = {
          hits: 0,
          misses: 0
        };
      }
    }, {
      key: "setTimerUrl",
      value: function setTimerUrl(url) {
        this.flushTimer();
        this.timerUrl = url;
      }
    }, {
      key: "startTimer",
      value: function startTimer() {
        var _this = this;

        if (!this.timerUrl) {
          return;
        }

        this.lastActivity = +new Date();

        if (this.timerFlushTimeout) {
          return;
        }

        var timerStart = +new Date();
        this.timerFlushTimeout = setTimeout(function () {
          var now = +new Date();
          var activityTime = _this.lastActivity - timerStart;

          _this.flushTimer(activityTime);

          delete _this.timerFlushTimeout;
          var sinceLastActivity = now - _this.lastActivity;

          if (sinceLastActivity < NoteStats.TIMER_SIZE / 2) {
            _this.startTimer();
          }
        }, NoteStats.TIMER_SIZE);
      }
    }, {
      key: "hitNotes",
      value: function hitNotes(notes) {
        var _iterator = _createForOfIteratorHelper(notes),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _note = _step.value;
            this.incrementNote(_note, 1);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        var now = +new Date();
        this.startTimer();

        if (this.lastHitTime) {
          var timeTaken = now - this.lastHitTime;

          if (!this.isOutlierTime(timeTaken)) {
            this.averageHitTime = (this.averageHitTime * this.hits + timeTaken) / (this.hits + 1);

            var _iterator2 = _createForOfIteratorHelper(notes),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var note = _step2.value;
                var noteStats = this.noteHitStats[this.normalizeNote(note)];
                noteStats.averageHitTime = ((noteStats.averageHitTime || 0) * (noteStats.hits || 0) + timeTaken) / (noteStats.hits + 1);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        }

        this.lastHitTime = now;
        this.streak += 1;
        this.hits += 1;
        this.buffer.hits += 1;
        this.flushLater();
      }
    }, {
      key: "missNotes",
      value: function missNotes(notes) {
        var _iterator3 = _createForOfIteratorHelper(notes),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var note = _step3.value;
            this.incrementNote(note, -1);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        this.startTimer();
        this.streak = 0;
        this.misses += 1;
        this.buffer.misses += 1;
        this.flushLater();
      }
    }, {
      key: "incrementNote",
      value: function incrementNote(note, val) {
        note = this.normalizeNote(note);
        var stats = this.noteHitStats[note] = this.noteHitStats[note] || {};

        if (val > 0) {
          stats.hits = (stats.hits || 0) + val;
        } else if (val < 0) {
          stats.misses = (stats.misses || 0) - val;
        }
      }
    }, {
      key: "makeThrottle",
      value: function makeThrottle(fn, wait) {
        var _arguments = arguments;
        var timer = null;
        return function () {
          var args = _arguments;

          if (timer) {
            return;
          }

          timer = setTimeout(function () {
            timer = null;
            fn.apply(args);
          }, wait);
        };
      }
    }, {
      key: "flushLater",
      value: function flushLater() {
        var _this2 = this;

        if (!this.currentUser) {
          return;
        }

        this.flushLater = this.makeThrottle(this.flush.bind(this), 5000);
        window.addEventListener("beforeunload", function () {
          _this2.flush();
        });
        this.flushLater();
      }
    }, {
      key: "flush",
      value: function flush() {
        var d = new FormData();
        d.append("csrf_token", (0, _globals.csrfToken)());

        for (var key in this.buffer) {
          d.append(key, "" + this.buffer[key]);
        }

        var request = new XMLHttpRequest();
        request.open("POST", "/hits.json");
        request.send(d);
        this.resetBuffer();
      }
    }, {
      key: "flushTimer",
      value: function flushTimer(activityTime) {
        if (!this.timerUrl) {
          return;
        }

        var d = new FormData();
        d.append("csrf_token", (0, _globals.csrfToken)());
        var sendTime = NoteStats.TIMER_SIZE;

        if (activityTime < sendTime / 2) {
          sendTime = activityTime;
        }

        sendTime = Math.round(sendTime / 1000);

        if (sendTime < 2) {
          return;
        }

        d.append("time_spent", "".concat(sendTime));
        var request = new XMLHttpRequest();
        request.open("POST", this.timerUrl);
        request.send(d);
      }
    }, {
      key: "isOutlierTime",
      value: function isOutlierTime(timeTaken) {
        if (this.averageHitTime == 0) {
          return false;
        }

        return timeTaken > this.averageHitTime * 10 + 1000;
      }
    }, {
      key: "normalizeNote",
      value: function normalizeNote(note) {
        return note.replace(/\d+$/, "");
      }
    }]);

    return NoteStats;
  }();

  _exports["default"] = NoteStats;

  _defineProperty(NoteStats, "TIMER_SIZE", 30 * 1000);
});

define("st/sample_output", ["exports", "st/music", "lib", "st/midi"], function (_exports, _music, _lib, _midi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.SampleOutputMetronome = _exports.SampleOutput = void 0;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  var SampleOutput = /*#__PURE__*/function (_BaseOutputChannel) {
    _inherits(SampleOutput, _BaseOutputChannel);

    var _super = _createSuper(SampleOutput);

    _createClass(SampleOutput, null, [{
      key: "getInstance",
      value: function getInstance() {
        if (!this.instance) {
          this.instance = new SampleOutput();
        }

        return this.instance;
      }
    }]);

    function SampleOutput() {
      var _this;

      var instrumentName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "acoustic_grand_piano";

      _classCallCheck(this, SampleOutput);

      _this = _super.call(this);
      _this.loading = true;
      _this.currentlyPlaying = {};
      _this.promise = _lib.Soundfont.instrument(new AudioContext(), "/static/soundfonts/MusyngKite/".concat(instrumentName, "-mp3.js"));

      _this.promise.then(function (instrument) {
        _this.loading = false;
        _this.instrument = instrument;
      });

      return _this;
    }

    _createClass(SampleOutput, [{
      key: "sendMessage",
      value: function sendMessage(message) {
        var _this2 = this;

        if (!this.midiInput) {
          this.midiInput = new _midi.MidiInput({
            noteOn: function noteOn(note, v) {
              return _this2.noteOn((0, _music.parseNote)(note), v);
            },
            noteOff: function noteOff(note) {
              return _this2.noteOff((0, _music.parseNote)(note));
            }
          });
        }

        this.midiInput.onMidiMessage({
          data: message
        });
      }
    }, {
      key: "noteOn",
      value: function noteOn(pitch, velocity) {
        if (!this.instrument) {
          return;
        }

        var note = (0, _music.noteName)(pitch - 12);
        this.noteOff(pitch);

        if (velocity == 0) {
          return;
        }

        this.currentlyPlaying[pitch] = this.instrument.play(note, 0, {
          gain: velocity / 127
        });
      }
    }, {
      key: "noteOff",
      value: function noteOff(pitch) {
        var node = this.currentlyPlaying[pitch];

        if (node) {
          delete this.currentlyPlaying[pitch];
          node.stop();
        }
      }
    }, {
      key: "getMetronome",
      value: function getMetronome() {
        if (!this.metronome) {
          this.metronome = new SampleOutputMetronome();
        }

        return this.metronome;
      }
    }]);

    return SampleOutput;
  }(_midi.BaseOutputChannel);

  _exports.SampleOutput = SampleOutput;

  var SampleOutputMetronome = /*#__PURE__*/function (_SampleOutput) {
    _inherits(SampleOutputMetronome, _SampleOutput);

    var _super2 = _createSuper(SampleOutputMetronome);

    function SampleOutputMetronome() {
      _classCallCheck(this, SampleOutputMetronome);

      return _super2.call(this, "woodblock");
    }

    _createClass(SampleOutputMetronome, [{
      key: "tick",
      value: function tick() {
        this.noteOn((0, _music.parseNote)("G5"), 100);
      }
    }, {
      key: "tock",
      value: function tock() {
        this.noteOn((0, _music.parseNote)("C5"), 70);
      }
    }]);

    return SampleOutputMetronome;
  }(SampleOutput);

  _exports.SampleOutputMetronome = SampleOutputMetronome;
});

define("st/slide_to_zero", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  // used to control animation outside of react
  var SlideToZero = /*#__PURE__*/function () {
    function SlideToZero() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, SlideToZero);

      this.value = 0;
      this.speed = opts.speed || 1; // 1 unit a second

      this.animating = false;

      this.onUpdate = opts.onUpdate || function () {};

      this.onStop = opts.onStop || function () {};

      this.onStart = opts.onStart || function () {};

      this.onLoop = opts.onLoop || function () {};

      if (opts.loopPhase) {
        this.looping = true;
        this.loopPhase = opts.loopPhase;
        this.add(opts.initialValue || this.loopPhase);
      }
    }

    _createClass(SlideToZero, [{
      key: "cancel",
      value: function cancel() {
        this.canceled = true;
      }
    }, {
      key: "add",
      value: function add(delta) {
        this.value += delta;
        this.checkAndStart();
      }
    }, {
      key: "checkAndStart",
      value: function checkAndStart() {
        var _this = this;

        if (this.animating || this.value == 0) {
          return;
        }

        var lastFrame = performance.now();
        this.animating = true;
        this.canceled = false;
        this.onStart();

        var frameUpdate = function frameUpdate(time) {
          var dt = (time - lastFrame) / 1000;
          lastFrame = time;

          if (_this.canceled) {
            _this.animating = false;
            return;
          }

          if (dt == 0) {
            return;
          }

          _this.value = _this.value - _this.speed * dt;

          if (_this.looping) {
            if (_this.value <= 0) {
              _this.value += _this.loopPhase;

              _this.onLoop();
            }
          } else {
            _this.value = Math.max(0, _this.value);
          }

          _this.onUpdate(_this.value);

          if (_this.value > 0) {
            window.requestAnimationFrame(frameUpdate);
          } else {
            _this.animating = false;

            _this.onStop();
          }
        };

        window.requestAnimationFrame(frameUpdate);
      }
    }]);

    return SlideToZero;
  }();

  _exports["default"] = SlideToZero;
});

define("st/song_note_list", ["exports", "st/music"], function (_exports, _music) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.SongNote = _exports.MultiTrackSong = _exports.SongNoteList = _exports.SongNoteTimer = void 0;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

  function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var SongNoteTimer = /*#__PURE__*/function () {
    function SongNoteTimer() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, SongNoteTimer);

      this.bpm = opts.bpm || 60;
      this.onTime = opts.onTime;
      this.onStop = opts.onStop;
      this.onStart = opts.onStart;
    }

    _createClass(SongNoteTimer, [{
      key: "getPromise",
      value: function getPromise() {
        return this.running;
      }
    }, {
      key: "start",
      value: function start() {
        var _this = this;

        if (this.running) {
          console.error("timer already running");
          return;
        }

        this.running = new Promise(function (resolve, reject) {
          _this.promiseResolve = resolve;
          _this.promiseReject = reject;
        });

        if (this.onStart) {
          this.onStart();
        }

        var startTime = performance.now();

        var frameUpdate = function frameUpdate(time) {
          var beat = (performance.now() - startTime) / 1000 / 60 * _this.bpm;

          if (_this.onTime) {
            _this.onTime(beat);
          }

          if (_this.running) {
            window.requestAnimationFrame(frameUpdate);
          }
        };

        window.requestAnimationFrame(frameUpdate);
      }
    }, {
      key: "stop",
      value: function stop(val) {
        if (!this.running) {
          console.error("timer not running");
          return;
        }

        if (this.onStop) {
          this.onStop();
        }

        this.promiseResolve(val || "stop");
        delete this.running;
        delete this.promiseResolve;
        delete this.promiseReject;
      }
    }]);

    return SongNoteTimer;
  }(); // like note list but notes in time


  _exports.SongNoteTimer = SongNoteTimer;

  var SongNoteList = /*#__PURE__*/function (_Array) {
    _inherits(SongNoteList, _Array);

    var _super = _createSuper(SongNoteList);

    // bucket size in beats
    function SongNoteList() {
      var _this2;

      _classCallCheck(this, SongNoteList);

      _this2 = _super.call(this);
      Object.setPrototypeOf(_assertThisInitialized(_this2), SongNoteList.prototype);
      return _this2;
    }

    _createClass(SongNoteList, [{
      key: "clone",
      value: function clone() {
        var song = new SongNoteList();
        this.forEach(function (note) {
          return song.push(note.clone());
        });
        return song;
      }
    }, {
      key: "clearCache",
      value: function clearCache() {
        delete this.buckets;
      }
    }, {
      key: "play",
      value: function play(midiOutput) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        // organize all notes by their start beat
        var currentIdx = 0;

        var notes = _toConsumableArray(this);

        notes.sort(function (a, b) {
          return a.start - b.start;
        });

        if (!notes.length) {
          return null;
        }

        var startBeat = notes[0].start;
        var playingNotes = [];
        var timer = new SongNoteTimer({
          bpm: opts.bpm,
          onStop: function onStop() {
            playingNotes.forEach(function (note) {
              return midiOutput.noteOff((0, _music.parseNote)(note.note));
            });
          },
          onTime: function onTime(beat) {
            beat = beat + startBeat; // start the melody immediately

            var haveFinished = false;

            var _iterator = _createForOfIteratorHelper(playingNotes),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _note = _step.value;

                if (beat >= _note.start + _note.duration) {
                  haveFinished = true;
                  break;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            if (haveFinished) {
              playingNotes = playingNotes.filter(function (note) {
                var finished = beat >= note.start + note.duration;

                if (finished) {
                  midiOutput.noteOff((0, _music.parseNote)(note.note));
                }

                return !finished;
              });
            }

            while (notes[currentIdx] && beat >= notes[currentIdx].start) {
              var note = notes[currentIdx];
              midiOutput.noteOn((0, _music.parseNote)(note.note), 100);
              playingNotes.push(note);
              currentIdx += 1;
            }

            if (currentIdx >= notes.length && playingNotes.length == 0) {
              timer.stop("finish");
            }
          }
        });
        timer.start();
        return timer;
      }
    }, {
      key: "transpose",
      value: function transpose() {
        var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

        if (amount == 0) {
          return this;
        }

        var song = new SongNoteList();
        this.forEach(function (note) {
          return song.push(note.transpose(amount));
        });
        return song;
      }
    }, {
      key: "humanize",
      value: function humanize() {
        var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        var song = this.clone();

        var _iterator2 = _createForOfIteratorHelper(song),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var note = _step2.value;
            note.start += Math.random() / 100 * amount;
            note.duration -= 0.2;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        return song;
      } // find the notes that fall in the time range

    }, {
      key: "notesInRange",
      value: function notesInRange(start, stop) {
        // TODO: this is slow
        return _toConsumableArray(this.filter(function (n) {
          return n.inRange(start, stop);
        }));
      }
    }, {
      key: "getStopInBeats",
      value: function getStopInBeats() {
        if (this.length == 0) {
          return 0;
        }

        return Math.max.apply(null, this.map(function (n) {
          return n.getStop();
        }));
      }
    }, {
      key: "getStartInBeats",
      value: function getStartInBeats() {
        if (this.length == 0) {
          return 0;
        }

        return Math.min.apply(null, this.map(function (n) {
          return n.getStart();
        }));
      }
    }, {
      key: "noteRange",
      value: function noteRange() {
        if (!this.length) {
          return;
        }

        var min = (0, _music.parseNote)(this[0].note);
        var max = min;

        var _iterator3 = _createForOfIteratorHelper(this),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var songNote = _step3.value;
            var pitch = (0, _music.parseNote)(songNote.note);

            if (pitch < min) {
              min = pitch;
            }

            if (pitch > max) {
              max = pitch;
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        return [(0, _music.noteName)(min), (0, _music.noteName)(max)];
      }
    }, {
      key: "fittingStaff",
      value: function fittingStaff() {
        if (this.cleffs && this.cleffs.length == 1) {
          var firstNote = this[0]; // it is at the start

          if (!firstNote || firstNote.getStart() >= this.cleffs[0][0]) {
            // return the staff that was assigned
            switch (this.cleffs[0][1]) {
              case "f":
                return "bass";

              case "g":
                return "treble";
            }
          }
        }

        var _this$noteRange = this.noteRange(),
            _this$noteRange2 = _slicedToArray(_this$noteRange, 2),
            min = _this$noteRange2[0],
            max = _this$noteRange2[1];

        var useBase = false;
        var useTreble = false;

        if ((0, _music.parseNote)(max) > _music.MIDDLE_C_PITCH + 4) {
          useTreble = true;
        }

        if ((0, _music.parseNote)(min) < _music.MIDDLE_C_PITCH - 4) {
          useBase = true;
        }

        if (useTreble && useBase) {
          return "grand";
        } else if (useBase) {
          return "bass";
        } else {
          return "treble";
        }
      }
    }, {
      key: "getBucketRange",
      value: function getBucketRange(start, stop) {
        var bucketSize = SongNoteList.bucketSize;
        var left = Math.floor(start / bucketSize);
        var right = Math.ceil(stop / bucketSize);
        return [left, right];
      }
    }, {
      key: "buildBuckets",
      value: function buildBuckets() {
        var _this3 = this;

        var buckets = {};
        this.forEach(function (songNote, idx) {
          var _this3$getBucketRange = _this3.getBucketRange(songNote.getStart(), songNote.getStop()),
              _this3$getBucketRange2 = _slicedToArray(_this3$getBucketRange, 2),
              left = _this3$getBucketRange2[0],
              right = _this3$getBucketRange2[1];

          for (var i = left; i < right; i++) {
            if (!buckets[i]) buckets[i] = [];
            buckets[i].push(idx);
          }
        });
        return buckets;
      } // get the buckets to scan to match notes for beat

    }, {
      key: "adjacentBuckets",
      value: function adjacentBuckets(beat) {
        return this.getBucketRange(beat - 1, beat + 1);
      }
    }, {
      key: "getBuckets",
      value: function getBuckets() {
        if (!this.buckets) {
          this.buckets = this.buildBuckets();
        }

        return this.buckets;
      }
    }, {
      key: "matchNoteFast",
      value: function matchNoteFast(findNote, beat, wrapRight, wrapLeft) {
        var buckets = this.getBuckets();

        var _this$adjacentBuckets = this.adjacentBuckets(beat),
            _this$adjacentBuckets2 = _slicedToArray(_this$adjacentBuckets, 2),
            left = _this$adjacentBuckets2[0],
            right = _this$adjacentBuckets2[1];

        var foundIdx = null;

        for (var bucketIdx = left; bucketIdx < right; bucketIdx++) {
          var bucket = buckets[bucketIdx];
          if (!bucket) continue;

          var _iterator4 = _createForOfIteratorHelper(bucket),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var songNoteIdx = _step4.value;
              var note = this[songNoteIdx];

              if (foundIdx == songNoteIdx) {
                continue;
              }

              if ((0, _music.parseNote)(note.note) != (0, _music.parseNote)(findNote)) {
                continue;
              }

              if (foundIdx != null) {
                var found = this[foundIdx];

                if (Math.abs(found.start - beat) > Math.abs(note.start - beat)) {
                  foundIdx = songNoteIdx;
                }
              } else {
                foundIdx = songNoteIdx;
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }

        if (wrapRight) {
          var delta = wrapRight - beat;

          if (delta < 2) {
            var wrapFoundIdx = this.matchNoteFast(findNote, wrapLeft - delta);

            if (wrapFoundIdx != null) {
              var _found = this[wrapFoundIdx];

              if (foundIdx != null) {
                var current = this[foundIdx];

                if (Math.abs(_found.start - (wrapLeft - delta)) < Math.abs(current.start - beat)) {
                  foundIdx = wrapFoundIdx;
                }
              } else {
                foundIdx = wrapFoundIdx;
              }
            }
          }
        }

        return foundIdx;
      } // see if we're hitting a valid note
      // TODO: this is very slow

    }, {
      key: "matchNote",
      value: function matchNote(findNote, beat) {
        var foundIdx = null;

        for (var idx = 0; idx < this.length; idx++) {
          var note = this[idx];

          if ((0, _music.parseNote)(note.note) != (0, _music.parseNote)(findNote)) {
            continue;
          }

          if (foundIdx != null) {
            var found = this[foundIdx];

            if (Math.abs(found.start - beat) > Math.abs(note.start - beat)) {
              foundIdx = idx;
            }
          } else {
            foundIdx = idx;
          }
        }

        return foundIdx;
      }
    }], [{
      key: "newSong",
      value: function newSong(noteTuples) {
        var notes = noteTuples.map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 3),
              note = _ref2[0],
              start = _ref2[1],
              duration = _ref2[2];

          return new SongNote(note, start, duration);
        });
        var song = new SongNoteList();

        var _iterator5 = _createForOfIteratorHelper(notes),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var note = _step5.value;
            song.push(note);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }

        return song;
      }
    }]);

    return SongNoteList;
  }( /*#__PURE__*/_wrapNativeSuper(Array));

  _exports.SongNoteList = SongNoteList;

  _defineProperty(SongNoteList, "bucketSize", 8);

  var MultiTrackSong = /*#__PURE__*/function (_SongNoteList) {
    _inherits(MultiTrackSong, _SongNoteList);

    var _super2 = _createSuper(MultiTrackSong);

    function MultiTrackSong() {
      var _this4;

      _classCallCheck(this, MultiTrackSong);

      _this4 = _super2.call(this);
      Object.setPrototypeOf(_assertThisInitialized(_this4), MultiTrackSong.prototype);
      _this4.tracks = [];
      return _this4;
    }

    _createClass(MultiTrackSong, [{
      key: "pushWithTrack",
      value: function pushWithTrack(note, trackIdx) {
        this.push(note);
        var track = this.getTrack(trackIdx);
        track.push(note);
        return note;
      } // find an empty track to put autochords in

    }, {
      key: "findEmptyTrackIdx",
      value: function findEmptyTrackIdx() {
        return this.tracks.length + 1;
      }
    }, {
      key: "getTrack",
      value: function getTrack(idx) {
        if (!this.tracks[idx]) {
          this.tracks[idx] = new SongNoteList();
        }

        return this.tracks[idx];
      }
    }]);

    return MultiTrackSong;
  }(SongNoteList); // note: C4, D#5, etc...
  // start: when note begings in beats
  // duration: how long note is in beats


  _exports.MultiTrackSong = MultiTrackSong;

  var SongNote = /*#__PURE__*/function () {
    function SongNote(note, start, duration) {
      _classCallCheck(this, SongNote);

      this.id = Symbol();
      this.note = note;
      this.start = start;
      this.duration = duration;
    }

    _createClass(SongNote, [{
      key: "clone",
      value: function clone() {
        return new SongNote(this.note, this.start, this.duration);
      }
    }, {
      key: "inRange",
      value: function inRange(min, max) {
        var stop = this.start + this.duration;

        if (min >= stop) {
          return false;
        }

        if (max <= this.start) {
          return false;
        }

        return true;
      }
    }, {
      key: "transpose",
      value: function transpose(semitones) {
        return new SongNote((0, _music.noteName)((0, _music.parseNote)(this.note) + semitones), this.start, this.duration);
      }
    }, {
      key: "getStart",
      value: function getStart() {
        return this.start;
      }
    }, {
      key: "getStop",
      value: function getStop() {
        return this.start + this.duration;
      }
    }, {
      key: "getRenderStop",
      value: function getRenderStop() {
        return this.start + this.duration;
      }
    }, {
      key: "toString",
      value: function toString() {
        return "".concat(this.note, ",").concat(this.start, ",").concat(this.duration);
      }
    }]);

    return SongNote;
  }();

  _exports.SongNote = SongNote;
});

define("st/song_parser", ["exports", "st/song_parser_peg", "st/music", "st/song_note_list", "st/auto_chords"], function (_exports, _song_parser_peg, _music, _song_note_list, _auto_chords) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _song_parser_peg = _interopRequireDefault(_song_parser_peg);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  // tokens are separated by whitepace
  // a note is a5.1.2
  //   - 5 is the octave
  //   - 1 is the duration
  //   - 2 is the start
  //
  //   duration and start are optional
  //   duration defaults to 1 beat (or the current duration)
  //   start defauls to current cusor position
  var SongParser = /*#__PURE__*/function () {
    function SongParser() {
      _classCallCheck(this, SongParser);
    }

    _createClass(SongParser, [{
      key: "parse",
      // convert song text to ast
      value: function parse(songText) {
        return _song_parser_peg["default"].parse(songText);
      } // compile ast to song notes

    }, {
      key: "compile",
      value: function compile(ast, opts) {
        var state = {
          startPosition: 0,
          position: 0,
          beatsPerNote: 1,
          beatsPerMeasure: 4,
          timeScale: 1,
          keySignature: new _music.KeySignature(0),
          currentTrack: 0
        };
        var song = new _song_note_list.MultiTrackSong();
        this.compileCommands(ast, state, song);
        song.metadata = {
          keySignature: state.keySignature.count,
          beatsPerMeasure: state.beatsPerMeasure
        };

        if (song.autoChords) {
          var settings = opts ? opts.autoChordsSettings : {};

          if (opts && opts.autoChords) {
            new opts.autoChords(song, settings).addChords();
          } else {
            new _auto_chords.AutoChords.defaultChords(song, settings).addChords();
          }
        }

        return song;
      }
    }, {
      key: "compileCommands",
      value: function compileCommands(commands, state, song) {
        var _iterator = _createForOfIteratorHelper(commands),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var command = _step.value;
            var t = command[0];

            switch (t) {
              case "restoreStartPosition":
                {
                  state.position = state.startPosition;
                  break;
                }

              case "block":
                {
                  var _command = _slicedToArray(command, 2),
                      blockCommands = _command[1];

                  var blockState = {
                    startPosition: state.position
                  };
                  Object.setPrototypeOf(blockState, state);
                  this.compileCommands(blockCommands, blockState, song);
                  state.position = blockState.position;
                  break;
                }

              case "halfTime":
                {
                  state.timeScale *= 2;
                  break;
                }

              case "doubleTime":
                {
                  state.timeScale *= 0.5;
                  break;
                }

              case "tripleTime":
                {
                  state.timeScale *= 1 / 3;
                  break;
                }

              case "measure":
                {
                  var _command2 = _slicedToArray(command, 2),
                      measure = _command2[1];

                  state.position = measure * state.beatsPerMeasure;
                  break;
                }

              case "setTrack":
                {
                  var _command3 = _slicedToArray(command, 2),
                      track = _command3[1];

                  state.currentTrack = +track;
                  break;
                }

              case "cleff":
                {
                  var _command4 = _slicedToArray(command, 2),
                      cleff = _command4[1];

                  var _track = song.getTrack(state.currentTrack);

                  if (!_track.cleffs) {
                    _track.cleffs = [];
                  }

                  _track.cleffs.push([state.position, cleff]);

                  break;
                }

              case "note":
                {
                  var _command5 = _slicedToArray(command, 3),
                      name = _command5[1],
                      noteOpts = _command5[2];

                  var duration = state.beatsPerNote * state.timeScale;
                  var start = null;
                  var hasAccidental = false;

                  if (noteOpts) {
                    if (noteOpts.duration) {
                      duration *= noteOpts.duration;
                    }

                    start = noteOpts.start;

                    if (noteOpts.sharp) {
                      hasAccidental = true;
                      name = name.substr(0, 1) + "#" + name.substr(1);
                    } else if (noteOpts.flat) {
                      hasAccidental = true;
                      name = name.substr(0, 1) + "b" + name.substr(1);
                    } else if (noteOpts.natural) {
                      hasAccidental = true;
                    }
                  }

                  if (!hasAccidental) {
                    // apply default accidental
                    name = state.keySignature.unconvertNote(name);
                  }

                  if (!start) {
                    start = state.position;
                    state.position += duration;
                  }

                  song.pushWithTrack(new _song_note_list.SongNote(name, start, duration), state.currentTrack);
                  break;
                }

              case "rest":
                {
                  var _command6 = _slicedToArray(command, 2),
                      restTiming = _command6[1];

                  var _duration = state.beatsPerNote * state.timeScale;

                  if (restTiming) {
                    if (restTiming.start) {
                      break; // do nothing
                    }

                    if (restTiming.duration) {
                      _duration *= restTiming.duration;
                    }
                  }

                  state.position += _duration;
                  break;
                }

              case "keySignature":
                {
                  state.keySignature = new _music.KeySignature(+command[1]);
                  break;
                }

              case "timeSignature":
                {
                  var _command7 = _slicedToArray(command, 3),
                      perBeat = _command7[1],
                      noteValue = _command7[2];

                  state.beatsPerNote = 4 / noteValue;
                  state.beatsPerMeasure = state.beatsPerNote * perBeat;
                  break;
                }

              case "macro":
                {
                  var _command8 = _slicedToArray(command, 2),
                      macroName = _command8[1];

                  var chord = _auto_chords.AutoChords.coerceChord(macroName);

                  if (chord) {
                    if (!song.autoChords) {
                      song.autoChords = [];
                    }

                    song.autoChords.push([state.position, chord]);
                  }

                  break;
                }

              default:
                {
                  console.warn("Got unknown command when parsing song", command);
                }
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }], [{
      key: "load",
      value: function load(songText, opts) {
        var parser = new SongParser();
        var ast = parser.parse(songText);
        return parser.compile(ast, opts);
      }
    }]);

    return SongParser;
  }();

  _exports["default"] = SongParser;

  _defineProperty(SongParser, "peg", _song_parser_peg["default"]);
});

"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */
define("st/song_parser_peg", [], function () {
  "use strict";

  function peg$subclass(child, parent) {
    function ctor() {
      this.constructor = child;
    }

    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function peg$SyntaxError(message, expected, found, location) {
    this.message = message;
    this.expected = expected;
    this.found = found;
    this.location = location;
    this.name = "SyntaxError";

    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, peg$SyntaxError);
    }
  }

  peg$subclass(peg$SyntaxError, Error);

  peg$SyntaxError.buildMessage = function (expected, found) {
    var DESCRIBE_EXPECTATION_FNS = {
      literal: function literal(expectation) {
        return "\"" + literalEscape(expectation.text) + "\"";
      },
      "class": function _class(expectation) {
        var escapedParts = "",
            i;

        for (i = 0; i < expectation.parts.length; i++) {
          escapedParts += expectation.parts[i] instanceof Array ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1]) : classEscape(expectation.parts[i]);
        }

        return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
      },
      any: function any(expectation) {
        return "any character";
      },
      end: function end(expectation) {
        return "end of input";
      },
      other: function other(expectation) {
        return expectation.description;
      }
    };

    function hex(ch) {
      return ch.charCodeAt(0).toString(16).toUpperCase();
    }

    function literalEscape(s) {
      return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\0/g, '\\0').replace(/\t/g, '\\t').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/[\x00-\x0F]/g, function (ch) {
        return '\\x0' + hex(ch);
      }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
        return '\\x' + hex(ch);
      });
    }

    function classEscape(s) {
      return s.replace(/\\/g, '\\\\').replace(/\]/g, '\\]').replace(/\^/g, '\\^').replace(/-/g, '\\-').replace(/\0/g, '\\0').replace(/\t/g, '\\t').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/[\x00-\x0F]/g, function (ch) {
        return '\\x0' + hex(ch);
      }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
        return '\\x' + hex(ch);
      });
    }

    function describeExpectation(expectation) {
      return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
    }

    function describeExpected(expected) {
      var descriptions = new Array(expected.length),
          i,
          j;

      for (i = 0; i < expected.length; i++) {
        descriptions[i] = describeExpectation(expected[i]);
      }

      descriptions.sort();

      if (descriptions.length > 0) {
        for (i = 1, j = 1; i < descriptions.length; i++) {
          if (descriptions[i - 1] !== descriptions[i]) {
            descriptions[j] = descriptions[i];
            j++;
          }
        }

        descriptions.length = j;
      }

      switch (descriptions.length) {
        case 1:
          return descriptions[0];

        case 2:
          return descriptions[0] + " or " + descriptions[1];

        default:
          return descriptions.slice(0, -1).join(", ") + ", or " + descriptions[descriptions.length - 1];
      }
    }

    function describeFound(found) {
      return found ? "\"" + literalEscape(found) + "\"" : "end of input";
    }

    return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
  };

  function peg$parse(input, options) {
    options = options !== void 0 ? options : {};

    var peg$FAILED = {},
        peg$startRuleFunctions = {
      start: peg$parsestart
    },
        peg$startRuleFunction = peg$parsestart,
        peg$c0 = function peg$c0(head, rest) {
      return [head].concat(rest.map(function (m) {
        return m[1];
      }));
    },
        peg$c1 = "ks",
        peg$c2 = peg$literalExpectation("ks", false),
        peg$c3 = "-",
        peg$c4 = peg$literalExpectation("-", false),
        peg$c5 = /^[0-9]/,
        peg$c6 = peg$classExpectation([["0", "9"]], false, false),
        peg$c7 = function peg$c7(mod) {
      return ["keySignature", +mod];
    },
        peg$c8 = "ts",
        peg$c9 = peg$literalExpectation("ts", false),
        peg$c10 = "/",
        peg$c11 = peg$literalExpectation("/", false),
        peg$c12 = function peg$c12(upper, lower) {
      return ["timeSignature", +upper, +lower];
    },
        peg$c13 = "t",
        peg$c14 = peg$literalExpectation("t", false),
        peg$c15 = function peg$c15(track) {
      return ["setTrack", +track];
    },
        peg$c16 = /^[gcfGCF]/,
        peg$c17 = peg$classExpectation(["g", "c", "f", "G", "C", "F"], false, false),
        peg$c18 = function peg$c18(cleff) {
      return ["cleff", cleff.toLowerCase()];
    },
        peg$c19 = "$",
        peg$c20 = peg$literalExpectation("$", false),
        peg$c21 = /^[a-zA-Z0-9_]/,
        peg$c22 = peg$classExpectation([["a", "z"], ["A", "Z"], ["0", "9"], "_"], false, false),
        peg$c23 = function peg$c23(name) {
      return ["macro", name.join("")];
    },
        peg$c24 = "|",
        peg$c25 = peg$literalExpectation("|", false),
        peg$c26 = function peg$c26() {
      return ["restoreStartPosition"];
    },
        peg$c27 = /^[a-gA-G]/,
        peg$c28 = peg$classExpectation([["a", "g"], ["A", "G"]], false, false),
        peg$c29 = /^[+=\-]/,
        peg$c30 = peg$classExpectation(["+", "=", "-"], false, false),
        peg$c31 = ".",
        peg$c32 = peg$literalExpectation(".", false),
        peg$c33 = function peg$c33(name, accidental, octave, t) {
      return t;
    },
        peg$c34 = function peg$c34(name, accidental, octave, timing) {
      var opts = _objectSpread({}, timing);

      if (accidental == "+") {
        opts.sharp = true;
      } else if (accidental == "-") {
        opts.flat = true;
      } else if (accidental == "=") {
        opts.natural = true;
      }

      var note = ["note", "".concat(name.toUpperCase()).concat(octave)];

      if (timing || accidental) {
        note.push(opts);
      }

      return note;
    },
        peg$c35 = /^[rR]/,
        peg$c36 = peg$classExpectation(["r", "R"], false, false),
        peg$c37 = function peg$c37(timing) {
      var rest = ["rest"];

      if (timing) {
        rest.push(timing);
      }

      return rest;
    },
        peg$c38 = function peg$c38(duration, s) {
      return s;
    },
        peg$c39 = function peg$c39(duration, start) {
      var timing = {};

      if (duration) {
        timing.duration = +duration;
      }

      if (start) {
        timing.start = +start;
      }

      return timing;
    },
        peg$c40 = "ht",
        peg$c41 = peg$literalExpectation("ht", false),
        peg$c42 = function peg$c42() {
      return ["halfTime"];
    },
        peg$c43 = "dt",
        peg$c44 = peg$literalExpectation("dt", false),
        peg$c45 = function peg$c45() {
      return ["doubleTime"];
    },
        peg$c46 = "tt",
        peg$c47 = peg$literalExpectation("tt", false),
        peg$c48 = function peg$c48() {
      return ["tripleTime"];
    },
        peg$c49 = "m",
        peg$c50 = peg$literalExpectation("m", false),
        peg$c51 = function peg$c51(measure) {
      return ["measure", +measure];
    },
        peg$c52 = "{",
        peg$c53 = peg$literalExpectation("{", false),
        peg$c54 = "}",
        peg$c55 = peg$literalExpectation("}", false),
        peg$c56 = function peg$c56(commands) {
      return ["block", commands];
    },
        peg$c57 = "#",
        peg$c58 = peg$literalExpectation("#", false),
        peg$c59 = /^[^\n]/,
        peg$c60 = peg$classExpectation(["\n"], true, false),
        peg$c61 = /^[\t\r\n ]/,
        peg$c62 = peg$classExpectation(["\t", "\r", "\n", " "], false, false),
        peg$currPos = 0,
        peg$savedPos = 0,
        peg$posDetailsCache = [{
      line: 1,
      column: 1
    }],
        peg$maxFailPos = 0,
        peg$maxFailExpected = [],
        peg$silentFails = 0,
        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$savedPos, peg$currPos);
    }

    function location() {
      return peg$computeLocation(peg$savedPos, peg$currPos);
    }

    function expected(description, location) {
      location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos);
      throw peg$buildStructuredError([peg$otherExpectation(description)], input.substring(peg$savedPos, peg$currPos), location);
    }

    function error(message, location) {
      location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos);
      throw peg$buildSimpleError(message, location);
    }

    function peg$literalExpectation(text, ignoreCase) {
      return {
        type: "literal",
        text: text,
        ignoreCase: ignoreCase
      };
    }

    function peg$classExpectation(parts, inverted, ignoreCase) {
      return {
        type: "class",
        parts: parts,
        inverted: inverted,
        ignoreCase: ignoreCase
      };
    }

    function peg$anyExpectation() {
      return {
        type: "any"
      };
    }

    function peg$endExpectation() {
      return {
        type: "end"
      };
    }

    function peg$otherExpectation(description) {
      return {
        type: "other",
        description: description
      };
    }

    function peg$computePosDetails(pos) {
      var details = peg$posDetailsCache[pos],
          p;

      if (details) {
        return details;
      } else {
        p = pos - 1;

        while (!peg$posDetailsCache[p]) {
          p--;
        }

        details = peg$posDetailsCache[p];
        details = {
          line: details.line,
          column: details.column
        };

        while (p < pos) {
          if (input.charCodeAt(p) === 10) {
            details.line++;
            details.column = 1;
          } else {
            details.column++;
          }

          p++;
        }

        peg$posDetailsCache[pos] = details;
        return details;
      }
    }

    function peg$computeLocation(startPos, endPos) {
      var startPosDetails = peg$computePosDetails(startPos),
          endPosDetails = peg$computePosDetails(endPos);
      return {
        start: {
          offset: startPos,
          line: startPosDetails.line,
          column: startPosDetails.column
        },
        end: {
          offset: endPos,
          line: endPosDetails.line,
          column: endPosDetails.column
        }
      };
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) {
        return;
      }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildSimpleError(message, location) {
      return new peg$SyntaxError(message, null, null, location);
    }

    function peg$buildStructuredError(expected, found, location) {
      return new peg$SyntaxError(peg$SyntaxError.buildMessage(expected, found), expected, found, location);
    }

    function peg$parsestart() {
      var s0;
      s0 = peg$parsecommands();
      return s0;
    }

    function peg$parsecommands() {
      var s0, s1, s2, s3, s4, s5, s6;
      s0 = peg$currPos;
      s1 = peg$parsewhite();

      if (s1 === peg$FAILED) {
        s1 = null;
      }

      if (s1 !== peg$FAILED) {
        s2 = peg$parsecommand();

        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$currPos;
          s5 = peg$parsewhite();

          if (s5 !== peg$FAILED) {
            s6 = peg$parsecommand();

            if (s6 !== peg$FAILED) {
              s5 = [s5, s6];
              s4 = s5;
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }

          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$currPos;
            s5 = peg$parsewhite();

            if (s5 !== peg$FAILED) {
              s6 = peg$parsecommand();

              if (s6 !== peg$FAILED) {
                s5 = [s5, s6];
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          }

          if (s3 !== peg$FAILED) {
            s4 = peg$parsewhite();

            if (s4 === peg$FAILED) {
              s4 = null;
            }

            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c0(s2, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsecommand() {
      var s0;
      s0 = peg$parsenote();

      if (s0 === peg$FAILED) {
        s0 = peg$parserest();

        if (s0 === peg$FAILED) {
          s0 = peg$parsekeySignature();

          if (s0 === peg$FAILED) {
            s0 = peg$parsetimeSignature();

            if (s0 === peg$FAILED) {
              s0 = peg$parsehalfTime();

              if (s0 === peg$FAILED) {
                s0 = peg$parsedoubleTime();

                if (s0 === peg$FAILED) {
                  s0 = peg$parsetripleTime();

                  if (s0 === peg$FAILED) {
                    s0 = peg$parsemeasure();

                    if (s0 === peg$FAILED) {
                      s0 = peg$parseblock();

                      if (s0 === peg$FAILED) {
                        s0 = peg$parserestoreStartPosition();

                        if (s0 === peg$FAILED) {
                          s0 = peg$parsesetTrack();

                          if (s0 === peg$FAILED) {
                            s0 = peg$parsemacro();

                            if (s0 === peg$FAILED) {
                              s0 = peg$parsesetCleff();
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      return s0;
    }

    function peg$parsekeySignature() {
      var s0, s1, s2, s3, s4, s5, s6;
      s0 = peg$currPos;

      if (input.substr(peg$currPos, 2) === peg$c1) {
        s1 = peg$c1;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c2);
        }
      }

      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = peg$currPos;

        if (input.charCodeAt(peg$currPos) === 45) {
          s4 = peg$c3;
          peg$currPos++;
        } else {
          s4 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c4);
          }
        }

        if (s4 === peg$FAILED) {
          s4 = null;
        }

        if (s4 !== peg$FAILED) {
          s5 = [];

          if (peg$c5.test(input.charAt(peg$currPos))) {
            s6 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s6 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c6);
            }
          }

          if (s6 !== peg$FAILED) {
            while (s6 !== peg$FAILED) {
              s5.push(s6);

              if (peg$c5.test(input.charAt(peg$currPos))) {
                s6 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s6 = peg$FAILED;

                if (peg$silentFails === 0) {
                  peg$fail(peg$c6);
                }
              }
            }
          } else {
            s5 = peg$FAILED;
          }

          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }

        if (s3 !== peg$FAILED) {
          s2 = input.substring(s2, peg$currPos);
        } else {
          s2 = s3;
        }

        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c7(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsetimeSignature() {
      var s0, s1, s2, s3, s4, s5, s6;
      s0 = peg$currPos;

      if (input.substr(peg$currPos, 2) === peg$c8) {
        s1 = peg$c8;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c9);
        }
      }

      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = [];

        if (peg$c5.test(input.charAt(peg$currPos))) {
          s4 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s4 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c6);
          }
        }

        if (s4 !== peg$FAILED) {
          while (s4 !== peg$FAILED) {
            s3.push(s4);

            if (peg$c5.test(input.charAt(peg$currPos))) {
              s4 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s4 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c6);
              }
            }
          }
        } else {
          s3 = peg$FAILED;
        }

        if (s3 !== peg$FAILED) {
          s2 = input.substring(s2, peg$currPos);
        } else {
          s2 = s3;
        }

        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 47) {
            s3 = peg$c10;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c11);
            }
          }

          if (s3 !== peg$FAILED) {
            s4 = peg$currPos;
            s5 = [];

            if (peg$c5.test(input.charAt(peg$currPos))) {
              s6 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s6 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c6);
              }
            }

            if (s6 !== peg$FAILED) {
              while (s6 !== peg$FAILED) {
                s5.push(s6);

                if (peg$c5.test(input.charAt(peg$currPos))) {
                  s6 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s6 = peg$FAILED;

                  if (peg$silentFails === 0) {
                    peg$fail(peg$c6);
                  }
                }
              }
            } else {
              s5 = peg$FAILED;
            }

            if (s5 !== peg$FAILED) {
              s4 = input.substring(s4, peg$currPos);
            } else {
              s4 = s5;
            }

            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c12(s2, s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsesetTrack() {
      var s0, s1, s2, s3, s4;
      s0 = peg$currPos;

      if (input.charCodeAt(peg$currPos) === 116) {
        s1 = peg$c13;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c14);
        }
      }

      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = [];

        if (peg$c5.test(input.charAt(peg$currPos))) {
          s4 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s4 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c6);
          }
        }

        if (s4 !== peg$FAILED) {
          while (s4 !== peg$FAILED) {
            s3.push(s4);

            if (peg$c5.test(input.charAt(peg$currPos))) {
              s4 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s4 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c6);
              }
            }
          }
        } else {
          s3 = peg$FAILED;
        }

        if (s3 !== peg$FAILED) {
          s2 = input.substring(s2, peg$currPos);
        } else {
          s2 = s3;
        }

        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c15(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsesetCleff() {
      var s0, s1, s2;
      s0 = peg$currPos;

      if (input.charCodeAt(peg$currPos) === 47) {
        s1 = peg$c10;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c11);
        }
      }

      if (s1 !== peg$FAILED) {
        if (peg$c16.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c17);
          }
        }

        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c18(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsemacro() {
      var s0, s1, s2, s3;
      s0 = peg$currPos;

      if (input.charCodeAt(peg$currPos) === 36) {
        s1 = peg$c19;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c20);
        }
      }

      if (s1 !== peg$FAILED) {
        s2 = [];

        if (peg$c21.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c22);
          }
        }

        if (s3 !== peg$FAILED) {
          while (s3 !== peg$FAILED) {
            s2.push(s3);

            if (peg$c21.test(input.charAt(peg$currPos))) {
              s3 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s3 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c22);
              }
            }
          }
        } else {
          s2 = peg$FAILED;
        }

        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c23(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parserestoreStartPosition() {
      var s0, s1;
      s0 = peg$currPos;

      if (input.charCodeAt(peg$currPos) === 124) {
        s1 = peg$c24;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c25);
        }
      }

      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c26();
      }

      s0 = s1;
      return s0;
    }

    function peg$parsenote() {
      var s0, s1, s2, s3, s4, s5, s6;
      s0 = peg$currPos;

      if (peg$c27.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c28);
        }
      }

      if (s1 !== peg$FAILED) {
        if (peg$c29.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c30);
          }
        }

        if (s2 === peg$FAILED) {
          s2 = null;
        }

        if (s2 !== peg$FAILED) {
          if (peg$c5.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c6);
            }
          }

          if (s3 !== peg$FAILED) {
            s4 = peg$currPos;

            if (input.charCodeAt(peg$currPos) === 46) {
              s5 = peg$c31;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c32);
              }
            }

            if (s5 !== peg$FAILED) {
              s6 = peg$parsenoteTiming();

              if (s6 !== peg$FAILED) {
                peg$savedPos = s4;
                s5 = peg$c33(s1, s2, s3, s6);
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }

            if (s4 === peg$FAILED) {
              s4 = null;
            }

            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c34(s1, s2, s3, s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parserest() {
      var s0, s1, s2;
      s0 = peg$currPos;

      if (peg$c35.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c36);
        }
      }

      if (s1 !== peg$FAILED) {
        s2 = peg$parsenoteTiming();

        if (s2 === peg$FAILED) {
          s2 = null;
        }

        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c37(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsenoteTiming() {
      var s0, s1, s2, s3, s4, s5, s6;
      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = [];

      if (peg$c5.test(input.charAt(peg$currPos))) {
        s3 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s3 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c6);
        }
      }

      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);

          if (peg$c5.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c6);
            }
          }
        }
      } else {
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        s1 = input.substring(s1, peg$currPos);
      } else {
        s1 = s2;
      }

      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;

        if (input.charCodeAt(peg$currPos) === 46) {
          s3 = peg$c31;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c32);
          }
        }

        if (s3 !== peg$FAILED) {
          s4 = peg$currPos;
          s5 = [];

          if (peg$c5.test(input.charAt(peg$currPos))) {
            s6 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s6 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c6);
            }
          }

          if (s6 !== peg$FAILED) {
            while (s6 !== peg$FAILED) {
              s5.push(s6);

              if (peg$c5.test(input.charAt(peg$currPos))) {
                s6 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s6 = peg$FAILED;

                if (peg$silentFails === 0) {
                  peg$fail(peg$c6);
                }
              }
            }
          } else {
            s5 = peg$FAILED;
          }

          if (s5 !== peg$FAILED) {
            s4 = input.substring(s4, peg$currPos);
          } else {
            s4 = s5;
          }

          if (s4 !== peg$FAILED) {
            peg$savedPos = s2;
            s3 = peg$c38(s1, s4);
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }

        if (s2 === peg$FAILED) {
          s2 = null;
        }

        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c39(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsehalfTime() {
      var s0, s1;
      s0 = peg$currPos;

      if (input.substr(peg$currPos, 2) === peg$c40) {
        s1 = peg$c40;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c41);
        }
      }

      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c42();
      }

      s0 = s1;
      return s0;
    }

    function peg$parsedoubleTime() {
      var s0, s1;
      s0 = peg$currPos;

      if (input.substr(peg$currPos, 2) === peg$c43) {
        s1 = peg$c43;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c44);
        }
      }

      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c45();
      }

      s0 = s1;
      return s0;
    }

    function peg$parsetripleTime() {
      var s0, s1;
      s0 = peg$currPos;

      if (input.substr(peg$currPos, 2) === peg$c46) {
        s1 = peg$c46;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c47);
        }
      }

      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c48();
      }

      s0 = s1;
      return s0;
    }

    function peg$parsemeasure() {
      var s0, s1, s2, s3, s4;
      s0 = peg$currPos;

      if (input.charCodeAt(peg$currPos) === 109) {
        s1 = peg$c49;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c50);
        }
      }

      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = [];

        if (peg$c5.test(input.charAt(peg$currPos))) {
          s4 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s4 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c6);
          }
        }

        if (s4 !== peg$FAILED) {
          while (s4 !== peg$FAILED) {
            s3.push(s4);

            if (peg$c5.test(input.charAt(peg$currPos))) {
              s4 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s4 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c6);
              }
            }
          }
        } else {
          s3 = peg$FAILED;
        }

        if (s3 !== peg$FAILED) {
          s2 = input.substring(s2, peg$currPos);
        } else {
          s2 = s3;
        }

        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c51(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseblock() {
      var s0, s1, s2, s3;
      s0 = peg$currPos;

      if (input.charCodeAt(peg$currPos) === 123) {
        s1 = peg$c52;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c53);
        }
      }

      if (s1 !== peg$FAILED) {
        s2 = peg$parsecommands();

        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 125) {
            s3 = peg$c54;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c55);
            }
          }

          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c56(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsecomment() {
      var s0, s1, s2, s3;
      s0 = peg$currPos;

      if (input.charCodeAt(peg$currPos) === 35) {
        s1 = peg$c57;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c58);
        }
      }

      if (s1 !== peg$FAILED) {
        s2 = [];

        if (peg$c59.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c60);
          }
        }

        if (s3 !== peg$FAILED) {
          while (s3 !== peg$FAILED) {
            s2.push(s3);

            if (peg$c59.test(input.charAt(peg$currPos))) {
              s3 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s3 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c60);
              }
            }
          }
        } else {
          s2 = peg$FAILED;
        }

        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsewhite() {
      var s0, s1, s2, s3, s4;
      s0 = peg$currPos;
      s1 = [];

      if (peg$c61.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c62);
        }
      }

      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);

          if (peg$c61.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c62);
            }
          }
        }
      } else {
        s1 = peg$FAILED;
      }

      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = peg$parsecomment();

        if (s3 !== peg$FAILED) {
          s4 = peg$parsewhite();

          if (s4 !== peg$FAILED) {
            s3 = [s3, s4];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }

        if (s2 === peg$FAILED) {
          s2 = null;
        }

        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail(peg$endExpectation());
      }

      throw peg$buildStructuredError(peg$maxFailExpected, peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null, peg$maxFailPos < input.length ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1) : peg$computeLocation(peg$maxFailPos, peg$maxFailPos));
    }
  }

  return {
    SyntaxError: peg$SyntaxError,
    parse: peg$parse
  };
});

define("st/song_timer", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;

  function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  // this is used to play the play along page
  var SongTimer = /*#__PURE__*/function () {
    function SongTimer() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, SongTimer);

      this.beat = 0;
      this.running = false;
      this.song = opts.song;
      this.playingNotes = [];

      for (var _i = 0, _arr = ["onUpdate", "onNoteStart", "onNoteStop"]; _i < _arr.length; _i++) {
        var cb = _arr[_i];

        if (opts[cb]) {
          this[cb] = opts[cb];
        }
      }
    }

    _createClass(SongTimer, [{
      key: "getSortedSongNotes",
      value: function getSortedSongNotes() {
        if (!this.song) {
          console.warn("no song on timer");
          return;
        }

        if (!this.sortedSongNotes) {
          this.sortedSongNotes = _toConsumableArray(this.song);
          this.sortedSongNotes.sort(function (a, b) {
            return a.start - b.start;
          });
        }

        return this.sortedSongNotes;
      } // search offset start location for the given beat in sorted notes

    }, {
      key: "findSearchOffset",
      value: function findSearchOffset(beat) {
        var startAt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var sortedNotes = this.getSortedSongNotes();
        if (!sortedNotes) return;

        for (var i = startAt; i < sortedNotes.length; i++) {
          var note = sortedNotes[i];

          if (note.start >= beat) {
            return i;
          }
        }

        return 0;
      }
    }, {
      key: "onUpdate",
      value: function onUpdate(beat) {}
    }, {
      key: "onNoteStart",
      value: function onNoteStart(note) {}
    }, {
      key: "onNoteStop",
      value: function onNoteStop(note) {}
    }, {
      key: "beatsToSeconds",
      value: function beatsToSeconds(beats) {
        return beats / this.bpm * 60;
      }
    }, {
      key: "secondsToBeats",
      value: function secondsToBeats(sec) {
        return sec / 60 * this.bpm;
      }
    }, {
      key: "setBpm",
      value: function setBpm(bpm) {
        this.bpm = bpm;
      }
    }, {
      key: "pause",
      value: function pause() {
        this.running = false;
        delete this.frameUpdate;
        this.clearPlayingNotes();
      }
    }, {
      key: "reset",
      value: function reset() {
        var beat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        this.running = false;
        delete this.frameUpdate;
        this.clearPlayingNotes();
        this.beat = beat;
        this.onUpdate(this.beat);
      }
    }, {
      key: "scrub",
      value: function scrub(amount) {
        this.beat += amount;
        this.beat = Math.max(0, this.beat);
        this.clearPlayingNotes();
        this.onUpdate(this.beat);
      }
    }, {
      key: "restart",
      value: function restart() {
        this.seek(0);
      }
    }, {
      key: "seek",
      value: function seek(position) {
        this.beat = position;
        this.beat = Math.max(0, this.beat);
        this.clearPlayingNotes();
        this.onUpdate(this.beat);
      } // should be called whenever we stop or scrub

    }, {
      key: "clearPlayingNotes",
      value: function clearPlayingNotes() {
        if (this.playingNotes.length) {
          var _iterator = _createForOfIteratorHelper(this.playingNotes),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var note = _step.value;
              this.onNoteStop(note);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          this.playingNotes = [];
        }
      }
    }, {
      key: "start",
      value: function start() {
        var _this = this;

        var bpm = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 60;

        if (this.running) {
          console.warn("attempted to start timer while running again");
          return;
        }

        if (bpm) {
          this.bpm = bpm;
        }

        var lastFrame = performance.now();
        var lastBeat = this.beat;
        var searchOffset = this.findSearchOffset(this.beat);

        var frameUpdate = function frameUpdate(time) {
          var dt = (time - lastFrame) / 1000;
          lastFrame = time;

          if (!_this.running) {
            return;
          }

          if (dt == 0) {
            return;
          } // a new timer was started


          if (frameUpdate != _this.frameUpdate) {
            return;
          }

          if (lastBeat != _this.beat) {
            // there was a seek, update position
            searchOffset = _this.findSearchOffset(_this.beat);
          }

          _this.beat += _this.bpm * dt / 60;
          lastBeat = _this.beat; // see if any notes have stopped

          if (_this.song && _this.playingNotes.length) {
            var stopped = 0;

            for (var i = 0; i < _this.playingNotes.length; i++) {
              var note = _this.playingNotes[i];

              if (_this.beat >= note.start + note.duration) {
                _this.playingNotes[i] = null;
                stopped += 1;

                _this.onNoteStop(note);
              }
            }

            if (stopped > 0) {
              _this.playingNotes = _this.playingNotes.filter(function (n) {
                return n;
              });
            }
          } // see if any new notes have turned on


          if (searchOffset != null) {
            var sortedNotes = _this.getSortedSongNotes();

            for (var _i2 = searchOffset; _i2 < sortedNotes.length; _i2++) {
              var _note = sortedNotes[_i2];

              if (_note.start <= _this.beat) {
                searchOffset += 1;

                _this.playingNotes.push(_note);

                _this.onNoteStart(_note);
              }
            }
          }

          _this.onUpdate(_this.beat);

          window.requestAnimationFrame(frameUpdate);
        };

        this.running = true;
        this.frameUpdate = frameUpdate;
        window.requestAnimationFrame(frameUpdate);
      }
    }]);

    return SongTimer;
  }();

  _exports["default"] = SongTimer;
});

define("st/components/staff/bar_notes", ["exports", "react", "lib", "st/music", "prop-types"], function (_exports, React, _lib, _music, types) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);
  types = _interopRequireWildcard(types);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var BarNotes = /*#__PURE__*/function (_React$PureComponent) {
    _inherits(BarNotes, _React$PureComponent);

    var _super = _createSuper(BarNotes);

    function BarNotes() {
      _classCallCheck(this, BarNotes);

      return _super.apply(this, arguments);
    }

    _createClass(BarNotes, [{
      key: "render",
      value: function render() {
        var out = this.props.notes.map(this.renderNote.bind(this));

        if (out.length) {
          return out;
        }

        return null;
      }
    }, {
      key: "renderNote",
      value: function renderNote(note, idx) {
        var key = this.props.keySignature;
        var noteName = note.note;
        var pitch = (0, _music.parseNote)(noteName);
        var pixelsPerBeat = this.props.pixelsPerBeat;
        var row = (0, _music.noteStaffOffset)(noteName);
        var fromTop = this.props.upperRow - row;
        var fromLeft = note.getStart() * pixelsPerBeat + 2;
        var width = note.getRenderStop() * pixelsPerBeat - fromLeft - 4;
        var accidentals = key.accidentalsForNote(noteName);
        var style = {
          top: "".concat(Math.floor(fromTop * 25 / 2), "%"),
          left: "".concat(this.props.offsetLeft + fromLeft, "px"),
          width: "".concat(width, "px")
        };
        var outsideLoop = false;

        if (this.props.loopLeft != null && this.props.loopRight != null) {
          outsideLoop = note.getStart() < this.props.loopLeft || note.getStart() >= this.props.loopRight;
        }

        var held = this.props.heldNotes[note.id];
        return /*#__PURE__*/React.createElement("div", {
          className: (0, _lib.classNames)("note_bar", {
            is_flat: accidentals == -1,
            is_sharp: accidentals == 1,
            is_natural: accidentals == 0,
            held: held,
            outside_loop: outsideLoop
          }),
          title: noteName,
          style: style,
          key: "bar-note-".concat(idx)
        });
      }
    }]);

    return BarNotes;
  }(React.PureComponent);

  _exports["default"] = BarNotes;

  _defineProperty(BarNotes, "defaultProps", {
    heldNotes: {},
    offsetLeft: 0
  });

  _defineProperty(BarNotes, "propTypes", {
    notes: types.array.isRequired,
    heldNotes: types.object.isRequired,
    offsetLeft: types.number.isRequired
  });
});

define("st/components/staff/ledger_lines", ["exports", "react", "lib", "st/music", "prop-types"], function (_exports, React, _lib, _music, types) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);
  types = _interopRequireWildcard(types);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var LedgerLines = /*#__PURE__*/function (_React$PureComponent) {
    _inherits(LedgerLines, _React$PureComponent);

    var _super = _createSuper(LedgerLines);

    function LedgerLines() {
      _classCallCheck(this, LedgerLines);

      return _super.apply(this, arguments);
    }

    _createClass(LedgerLines, [{
      key: "render",
      value: function render() {
        var _this = this;

        var out = [];

        var append = function append(line) {
          return out.push(line);
        };

        this.props.notes.forEach(function (note, idx) {
          var lines = _this.renderLedgerLinesForNote(note, idx);

          if (lines != null) {
            lines.forEach(append);
          }
        });

        if (out.length) {
          return out;
        }

        return null;
      }
    }, {
      key: "renderLedgerLinesForNote",
      value: function renderLedgerLinesForNote(note, idx) {
        var props = this.props;
        var offset = (0, _music.noteStaffOffset)(note.note);
        var outside = offset > props.upperRow || offset < props.lowerRow;

        if (!outside) {
          return;
        }

        var letterDelta = 0;
        var below = false; // above

        if (offset > props.upperRow) {
          letterDelta = offset - props.upperRow;
        } // below


        if (offset < props.lowerRow) {
          letterDelta = props.lowerRow - offset;
          below = true;
        }

        var numLines = Math.floor(letterDelta / 2);
        var lines = [];
        var offsetLeft = props.offsetLeft || 0;
        var left = offsetLeft + note.getStart() * props.pixelsPerBeat - 10;
        var right = offsetLeft + note.getStop() * props.pixelsPerBeat + 10;

        for (var i = 0; i < numLines; i++) {
          var style = {
            left: "".concat(left, "px"),
            width: "".concat(right - left, "px")
          };

          if (below) {
            style.top = "".concat(100 + 25 * (i + 1), "%");
          } else {
            style.bottom = "".concat(100 + 25 * (i + 1), "%");
          }

          lines.push( /*#__PURE__*/React.createElement("div", {
            key: "leger-".concat(idx, "-").concat(i),
            className: (0, _lib.classNames)("ledger_line", {
              above: !below,
              below: below
            }),
            style: style
          }));
        }

        return lines;
      }
    }]);

    return LedgerLines;
  }(React.PureComponent);

  _exports["default"] = LedgerLines;

  _defineProperty(LedgerLines, "propTypes", {
    notes: types.array.isRequired,
    upperRow: types.number,
    lowerRow: types.number,
    pixelsPerBeat: types.number,
    offsetLeft: types.number
  });
});

define("st/components/staff/whole_notes", ["exports", "react", "lib", "st/music", "prop-types"], function (_exports, React, _lib, _music, types) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);
  types = _interopRequireWildcard(types);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var WholeNotes = /*#__PURE__*/function (_React$PureComponent) {
    _inherits(WholeNotes, _React$PureComponent);

    var _super = _createSuper(WholeNotes);

    function WholeNotes() {
      _classCallCheck(this, WholeNotes);

      return _super.apply(this, arguments);
    }

    _createClass(WholeNotes, [{
      key: "render",
      value: function render() {
        var _this = this;

        var out = this.props.notes.map(function (n, idx) {
          return _this.renderNote(n, idx, _this.getNotesByColumn());
        });

        if (out.length) {
          return out;
        }

        return null;
      } // used to offset notes when they are stacked

    }, {
      key: "getNotesByColumn",
      value: function getNotesByColumn() {
        var notesByColumn = {};
        this.props.notes.forEach(function (n) {
          var column = n.getStart().toString();

          if (!notesByColumn[column]) {
            notesByColumn[column] = [n];
          } else {
            notesByColumn[column].push(n);
          }
        });
        return notesByColumn;
      }
    }, {
      key: "renderNote",
      value: function renderNote(note, idx, notesByColumn) {
        var props = this.props;
        var key = props.keySignature;
        var noteName = key.enharmonic(note.note);
        var pitch = (0, _music.parseNote)(noteName);
        var row = (0, _music.noteStaffOffset)(noteName);
        var fromTop = props.upperRow - row;
        var offsetLeft = props.offsetLeft || 0;
        var left = offsetLeft + note.getStart() * this.props.pixelsPerBeat;
        var column = notesByColumn[note.getStart().toString()];
        var style = {
          top: "".concat(Math.floor(fromTop * 25 / 2), "%"),
          left: "".concat(left, "px")
        };
        var outside = row > props.upperRow || row < props.lowerRow;
        var accidentals = key.accidentalsForNote(noteName);
        var noteClasses = null;

        if (props.noteClasses) {
          noteClasses = props.noteClasses[note.id];
        }

        var classes = (0, _lib.classNames)("whole_note", "note", {
          is_flat: accidentals == -1,
          is_sharp: accidentals == 1,
          is_natural: accidentals == 0,
          outside: outside
        }, noteClasses, props.staticNoteClasses);
        var parts = [/*#__PURE__*/React.createElement("img", {
          key: "head",
          className: "primary",
          src: "/static/svg/noteheads.s0.svg"
        })];

        if (accidentals == 0) {
          parts.push( /*#__PURE__*/React.createElement("img", {
            key: "natural",
            className: "accidental natural",
            src: "/static/svg/natural.svg"
          }));
        }

        if (accidentals == -1) {
          parts.push( /*#__PURE__*/React.createElement("img", {
            key: "flat",
            className: "accidental flat",
            src: "/static/svg/flat.svg"
          }));
        }

        if (accidentals == 1) {
          parts.push( /*#__PURE__*/React.createElement("img", {
            key: "sharp",
            className: "accidental sharp",
            src: "/static/svg/sharp.svg"
          }));
        }

        return /*#__PURE__*/React.createElement("div", {
          key: "note-".concat(idx),
          style: style,
          "data-note": note.note,
          "data-midi-note": pitch,
          className: classes
        }, parts);
      }
    }]);

    return WholeNotes;
  }(React.PureComponent);

  _exports["default"] = WholeNotes;

  _defineProperty(WholeNotes, "propTypes", {
    notes: types.array.isRequired,
    keySignature: types.object.isRequired,
    upperRow: types.number,
    lowerRow: types.number,
    pixelsPerBeat: types.number,
    offsetLeft: types.number // noteClasses, staticNoteClasses

  });
});

define("st/util", ["exports", "lib"], function (_exports, _lib) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.dithered = dithered;
  _exports.shuffled = shuffled;

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function dithered(array) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.5;
    var rand = arguments.length > 2 ? arguments[2] : undefined;

    if (!rand) {
      rand = new _lib.MersenneTwister();
    }

    var gn = function gn() {
      var sd = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var mean = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var x1, x2, w, y1, y2;

      for (;;) {
        x1 = 2 * rand.random() - 1;
        x2 = 2 * rand.random() - 1;
        w = Math.pow(x1, 2) + Math.pow(x2, 2);

        if (w < 1) {
          break;
        }
      }

      w = Math.sqrt(-2 * Math.log(w) / 2);
      y1 = x1 * w;
      y2 = x2 * w;
      return y1 * sd + mean;
    };

    var dither_score = function dither_score(rank, e) {
      return Math.log(rank) + gn(Math.log(e));
    };

    var scored = array.map(function (item, idx) {
      return [dither_score(idx + 1, e), item];
    });
    scored.sort(function (a, b) {
      var aScore = a[0];
      var bScore = b[0];

      if (aScore == bScore) {
        return 0;
      } else if (aScore < bScore) {
        return -1;
      } else {
        return 1;
      }
    });
    return scored.map(function (tuple) {
      return tuple[1];
    });
  }

  function shuffled(array, rand) {
    if (!rand) {
      rand = new _lib.MersenneTwister();
    }

    array = _toConsumableArray(array);

    for (var i = array.length - 1; i > 0; i--) {
      var j = rand["int"]() % (i + 1);
      var a = array[j];
      var b = array[i];
      array[i] = a;
      array[j] = b;
    }

    return array;
  }
});

