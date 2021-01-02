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

