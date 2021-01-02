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

