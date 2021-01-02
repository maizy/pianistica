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

