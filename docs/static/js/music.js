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

