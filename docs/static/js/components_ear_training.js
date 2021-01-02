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

