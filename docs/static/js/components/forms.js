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

