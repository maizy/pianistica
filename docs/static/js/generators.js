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

