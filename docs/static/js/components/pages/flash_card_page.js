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

