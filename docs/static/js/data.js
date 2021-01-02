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

