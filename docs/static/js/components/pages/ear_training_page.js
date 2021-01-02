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

