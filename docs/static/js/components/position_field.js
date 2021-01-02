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

