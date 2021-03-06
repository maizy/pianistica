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

