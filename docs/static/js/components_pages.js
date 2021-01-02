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

