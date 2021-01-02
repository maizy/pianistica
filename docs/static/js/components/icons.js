define("st/components/icons", ["exports", "react", "prop-types"], function (_exports, React, types) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.IconMenu = _exports.IconShuffle = _exports.IconRewind = _exports.IconDownArrow = _exports.IconBase = void 0;
  React = _interopRequireWildcard(React);
  types = _interopRequireWildcard(types);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

  var IconBase = /*#__PURE__*/function (_React$Component) {
    _inherits(IconBase, _React$Component);

    var _super = _createSuper(IconBase);

    function IconBase() {
      _classCallCheck(this, IconBase);

      return _super.apply(this, arguments);
    }

    _createClass(IconBase, [{
      key: "render",
      value: function render() {
        var width = this.props.width || this.width;
        var height = this.props.height || width / this.width * this.height;
        return /*#__PURE__*/React.createElement("svg", _extends({}, this.svgOpts || {}, {
          viewBox: "0 0 ".concat(this.width, " ").concat(this.height),
          "aria-hidden": "true",
          width: width,
          height: height,
          className: "svgicon",
          role: "img",
          version: "1.1",
          dangerouslySetInnerHTML: {
            __html: this.path
          }
        }));
      }
    }]);

    return IconBase;
  }(React.Component);

  _exports.IconBase = IconBase;

  _defineProperty(IconBase, "propTypes", {
    width: types.number,
    height: types.number
  });

  var IconDownArrow = /*#__PURE__*/function (_IconBase) {
    _inherits(IconDownArrow, _IconBase);

    var _super2 = _createSuper(IconDownArrow);

    function IconDownArrow() {
      var _this;

      _classCallCheck(this, IconDownArrow);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super2.call.apply(_super2, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "width", 37);

      _defineProperty(_assertThisInitialized(_this), "height", 20);

      _defineProperty(_assertThisInitialized(_this), "path", "<path d=\"m2.0858 0c-1.1535 0-2.0858 0.86469-2.0858 1.9331 0 0.5139 0.21354 1.0183 0.38704 1.1881l18.113 16.879 18.112-16.879c0.174-0.1696 0.388-0.674 0.388-1.1879 0-1.0684-0.932-1.9331-2.086-1.9331-0.577 0-1.111 0.23008-1.49 0.57992l-14.924 13.894-14.925-13.893c-0.3777-0.34998-0.9134-0.581-1.4902-0.581z\"/>");

      return _this;
    }

    return IconDownArrow;
  }(IconBase);

  _exports.IconDownArrow = IconDownArrow;

  var IconRewind = /*#__PURE__*/function (_IconBase2) {
    _inherits(IconRewind, _IconBase2);

    var _super3 = _createSuper(IconRewind);

    function IconRewind() {
      var _this2;

      _classCallCheck(this, IconRewind);

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      _this2 = _super3.call.apply(_super3, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this2), "width", 512);

      _defineProperty(_assertThisInitialized(_this2), "height", 512);

      _defineProperty(_assertThisInitialized(_this2), "path", "<path d=\"M128 448v-384h64v176l160-160v352l-160-160v176z\" />");

      return _this2;
    }

    return IconRewind;
  }(IconBase);

  _exports.IconRewind = IconRewind;

  var IconShuffle = /*#__PURE__*/function (_IconBase3) {
    _inherits(IconShuffle, _IconBase3);

    var _super4 = _createSuper(IconShuffle);

    function IconShuffle() {
      var _this3;

      _classCallCheck(this, IconShuffle);

      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      _this3 = _super4.call.apply(_super4, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this3), "width", 24);

      _defineProperty(_assertThisInitialized(_this3), "height", 24);

      _defineProperty(_assertThisInitialized(_this3), "svgOpts", {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      });

      _defineProperty(_assertThisInitialized(_this3), "path", "<polyline points=\"16 3 21 3 21 8\"></polyline><line x1=\"4\" y1=\"20\" x2=\"21\" y2=\"3\"></line><polyline points=\"21 16 21 21 16 21\"></polyline><line x1=\"15\" y1=\"15\" x2=\"21\" y2=\"21\"></line><line x1=\"4\" y1=\"4\" x2=\"9\" y2=\"9\"></line>");

      return _this3;
    }

    return IconShuffle;
  }(IconBase);

  _exports.IconShuffle = IconShuffle;

  var IconMenu = /*#__PURE__*/function (_IconBase4) {
    _inherits(IconMenu, _IconBase4);

    var _super5 = _createSuper(IconMenu);

    function IconMenu() {
      var _this4;

      _classCallCheck(this, IconMenu);

      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      _this4 = _super5.call.apply(_super5, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this4), "width", 24);

      _defineProperty(_assertThisInitialized(_this4), "height", 24);

      _defineProperty(_assertThisInitialized(_this4), "svgOpts", {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      });

      _defineProperty(_assertThisInitialized(_this4), "path", "<line x1=\"3\" y1=\"12\" x2=\"21\" y2=\"12\"></line><line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"></line><line x1=\"3\" y1=\"18\" x2=\"21\" y2=\"18\"></line>");

      return _this4;
    }

    return IconMenu;
  }(IconBase);

  _exports.IconMenu = IconMenu;
});

