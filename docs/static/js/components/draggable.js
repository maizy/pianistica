define("st/components/draggable", ["exports", "react", "react-dom", "lib", "prop-types"], function (_exports, React, ReactDOM, _lib, types) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);
  ReactDOM = _interopRequireWildcard(ReactDOM);
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

  var Draggable = /*#__PURE__*/function (_React$Component) {
    _inherits(Draggable, _React$Component);

    var _super = _createSuper(Draggable);

    function Draggable(props) {
      _classCallCheck(this, Draggable);

      return _super.call(this, props);
    }

    _createClass(Draggable, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this = this;

        var node = ReactDOM.findDOMNode(this);

        if (!node) {
          console.error("Failed to bind mouse drag method due to null children");
        }

        node.addEventListener("mousedown", function (e) {
          _this.startDrag(e.pageX, e.pageY);
        });
        node.addEventListener("touchstart", function (e) {
          var _e$targetTouches$ = e.targetTouches[0],
              x = _e$targetTouches$.pageX,
              y = _e$targetTouches$.pageY;

          _this.startTouchDrag(x, y);
        });
      }
    }, {
      key: "startTouchDrag",
      value: function startTouchDrag(startX, startY) {
        var _this2 = this;

        if (this.props.disabled) {
          return true;
        }

        if (this.props.startDrag) {
          this.props.startDrag();
        }

        var upListener = function upListener(e) {
          document.body.removeEventListener("touchmove", moveListener);
          document.body.removeEventListener("touchend", upListener);

          if (_this2.props.stopDrag) {
            _this2.props.stopDrag();
          }
        };

        var moveListener = function moveListener(e) {
          var _e$targetTouches$2 = e.targetTouches[0],
              x = _e$targetTouches$2.pageX,
              y = _e$targetTouches$2.pageY;
          var dx = x - startX;
          var dy = y - startX;
          startX = x;
          startY = y;

          if (_this2.props.onDrag) {
            _this2.props.onDrag(dx, dy);
          }
        };

        document.body.addEventListener("touchmove", moveListener);
        document.body.addEventListener("touchend", upListener);
      }
    }, {
      key: "startDrag",
      value: function startDrag(startX, startY) {
        var _this3 = this;

        if (this.props.disabled) {
          return true;
        }

        if (this.props.startDrag) {
          this.props.startDrag();
        }

        var upListener = function upListener(e) {
          document.body.removeEventListener("mousemove", moveListener);
          document.body.removeEventListener("mouseup", upListener);

          if (_this3.props.stopDrag) {
            _this3.props.stopDrag();
          }
        };

        var moveListener = function moveListener(e) {
          var x = e.pageX,
              y = e.pageX;
          var dx = x - startX;
          var dy = y - startX;

          if (e.buttons == 0) {
            upListener();
            return;
          }

          startX = x;
          startY = y;

          if (_this3.props.onDrag) {
            _this3.props.onDrag(dx, dy);
          }

          e.preventDefault();
        };

        document.body.addEventListener("mousemove", moveListener);
        document.body.addEventListener("mouseup", upListener);
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("div", {
          className: "draggable"
        }, this.props.children);
      }
    }]);

    return Draggable;
  }(React.Component);

  _exports["default"] = Draggable;
});
