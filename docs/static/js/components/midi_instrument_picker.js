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

