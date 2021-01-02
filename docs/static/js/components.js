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

