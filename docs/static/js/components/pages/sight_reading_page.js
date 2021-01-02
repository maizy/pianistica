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

