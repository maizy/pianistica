define("st/components/pages/guide_pages", ["exports", "react", "react-router-dom", "st/globals", "prop-types"], function (_exports, React, _reactRouterDom, _globals, types) {
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

  var GuideContents = /*#__PURE__*/function (_React$PureComponent) {
    _inherits(GuideContents, _React$PureComponent);

    var _super = _createSuper(GuideContents);

    function GuideContents(props) {
      var _this;

      _classCallCheck(this, GuideContents);

      _this = _super.call(this, props);
      _this.state = {};
      return _this;
    }

    _createClass(GuideContents, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.loadPage();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        if (prevProps.pageSource != this.props.pageSource) {
          this.loadPage();
        }
      }
    }, {
      key: "loadPage",
      value: function loadPage() {
        var _this2 = this;

        if (this.request) {
          this.request.abort();
          delete this.request;
        }

        (0, _globals.setTitle)(this.props.title);
        var request = new XMLHttpRequest();
        var url = "/static/guides/".concat(this.props.pageSource, ".json");
        request.open("GET", url);
        request.send();

        request.onload = function (e) {
          if (request.status != 200) {
            console.error("Failed to load guide page", url);

            _this2.setState({
              contents: "Failed to load guide page. Check console."
            });

            return;
          }

          var res = JSON.parse(request.responseText);

          _this2.setState({
            contents: res.contents
          });
        };

        this.request = request;
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.request) {
          this.request.abort();
          delete this.request;
        }
      }
    }, {
      key: "render",
      value: function render() {
        if (this.state.contents) {
          return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
            className: "page_container",
            dangerouslySetInnerHTML: {
              __html: this.state.contents
            }
          }), /*#__PURE__*/React.createElement("section", {
            className: "page_container"
          }, /*#__PURE__*/React.createElement("a", {
            target: "_blank",
            href: "https://github.com/leafo/sightreading.training/edit/master/static/guides/".concat(this.props.pageSource, ".md")
          }, "Edit this page on GitHub")));
        } else {
          return /*#__PURE__*/React.createElement("div", {
            className: "page_container loading_message"
          }, "Loading...");
        }
      }
    }]);

    return GuideContents;
  }(React.PureComponent);

  _defineProperty(GuideContents, "propTypes", {
    title: types.string.isRequired,
    pageSource: types.string.isRequired
  });

  var GuidePage = /*#__PURE__*/function (_React$PureComponent2) {
    _inherits(GuidePage, _React$PureComponent2);

    var _super2 = _createSuper(GuidePage);

    function GuidePage() {
      _classCallCheck(this, GuidePage);

      return _super2.apply(this, arguments);
    }

    _createClass(GuidePage, [{
      key: "render",
      value: function render() {
        var link = function link(url, label) {
          return /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
            activeClassName: "active",
            to: url
          }, label);
        };

        return /*#__PURE__*/React.createElement("main", {
          className: "guide_page"
        }, /*#__PURE__*/React.createElement("section", {
          className: "page_navigation"
        }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
          className: "nav_header"
        }, "Overview"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, link("/about", "About")), /*#__PURE__*/React.createElement("li", null, link("/guide/generators", "Generators")), /*#__PURE__*/React.createElement("li", null, link("/guide/chords", "Chords")), /*#__PURE__*/React.createElement("li", null, link("/guide/ear-training", "Ear Training"))))), /*#__PURE__*/React.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
          exact: true,
          path: "/about"
        }, /*#__PURE__*/React.createElement(GuideContents, {
          title: "About Pianistica",
          pageSource: "about"
        })), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
          exact: true,
          path: "/guide/generators"
        }, /*#__PURE__*/React.createElement(GuideContents, {
          title: "Sight Reading Random Notes",
          pageSource: "generators"
        })), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
          exact: true,
          path: "/guide/chords"
        }, /*#__PURE__*/React.createElement(GuideContents, {
          title: "Sight Reading Random Chords",
          pageSource: "chord_generators"
        })), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
          exact: true,
          path: "/guide/ear-training"
        }, /*#__PURE__*/React.createElement(GuideContents, {
          title: "Ear Training Tools",
          pageSource: "ear_training"
        })), /*#__PURE__*/React.createElement(_reactRouterDom.Route, null, /*#__PURE__*/React.createElement("div", {
          className: "page_container"
        }, /*#__PURE__*/React.createElement("h2", null, "Not found"), /*#__PURE__*/React.createElement("p", null, "Failed to find documentation page")))));
      }
    }]);

    return GuidePage;
  }(React.PureComponent);

  _exports["default"] = GuidePage;
});

