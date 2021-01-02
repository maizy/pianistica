define("st/components/pages/login_page", ["exports", "react", "react-router-dom", "st/globals", "st/components/forms"], function (_exports, React, _reactRouterDom, _globals, _forms) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);

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

  var LoginPage = /*#__PURE__*/function (_React$Component) {
    _inherits(LoginPage, _React$Component);

    var _super = _createSuper(LoginPage);

    _createClass(LoginPage, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        (0, _globals.setTitle)("Log In");
      }
    }, {
      key: "afterSubmit",
      value: function afterSubmit(res) {
        if (res.errors) {
          this.setState({
            errorMessage: res.errors[0]
          });
          return;
        }

        N.init(res);
        this.setState({
          redirectTo: "/"
        });
      }
    }]);

    function LoginPage() {
      var _this;

      _classCallCheck(this, LoginPage);

      _this = _super.call(this);
      _this.state = {};
      return _this;
    }

    _createClass(LoginPage, [{
      key: "render",
      value: function render() {
        if (this.state.redirectTo) {
          return /*#__PURE__*/React.createElement(_reactRouterDom.Redirect, {
            to: this.state.redirectTo
          });
        }

        return /*#__PURE__*/React.createElement("div", {
          className: "login_page page_container"
        }, /*#__PURE__*/React.createElement("h2", null, "Log in"), /*#__PURE__*/React.createElement(_forms.JsonForm, {
          action: "/login.json",
          afterSubmit: this.afterSubmit.bind(this)
        }, this.state.errorMessage ? /*#__PURE__*/React.createElement("div", {
          className: "form_error"
        }, this.state.errorMessage) : null, /*#__PURE__*/React.createElement(_forms.TextInputRow, {
          name: "username",
          required: true
        }, "Username"), /*#__PURE__*/React.createElement(_forms.TextInputRow, {
          name: "password",
          type: "password",
          required: true
        }, "Password"), /*#__PURE__*/React.createElement("div", {
          className: "form_buttons"
        }, /*#__PURE__*/React.createElement("button", {
          className: "big_button"
        }, "Submit"), " or ", /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
          to: "/register"
        }, "Register"))));
      }
    }]);

    return LoginPage;
  }(React.Component);

  _exports["default"] = LoginPage;
});

