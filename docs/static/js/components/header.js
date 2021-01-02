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

