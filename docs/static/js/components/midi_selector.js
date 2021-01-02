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

