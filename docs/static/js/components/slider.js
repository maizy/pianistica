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

