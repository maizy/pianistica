define("st/components/pages/stats", ["exports", "react", "lib", "st/globals", "react-chartjs-2"], function (_exports, React, _lib, _globals, _reactChartjs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

  var StatsPage = /*#__PURE__*/function (_React$Component) {
    _inherits(StatsPage, _React$Component);

    var _super = _createSuper(StatsPage);

    function StatsPage(props) {
      var _this;

      _classCallCheck(this, StatsPage);

      _this = _super.call(this, props);
      _this.state = {};
      return _this;
    }

    _createClass(StatsPage, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        (0, _globals.setTitle)("Stats");

        if (!N.session.currentUser) {
          this.props.router.push("/");
        } else {
          this.loadStats();
        }
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
      key: "loadStats",
      value: function loadStats() {
        var _this2 = this;

        this.setState({
          loading: true,
          error_message: undefined,
          stats: undefined
        });
        var request = new XMLHttpRequest();
        var offset = new Date().getTimezoneOffset();
        request.open("GET", "/stats.json?offset=".concat(offset));
        request.send();

        request.onload = function (e) {
          delete _this2.request;

          try {
            var res = JSON.parse(request.responseText);

            _this2.setState({
              loading: false,
              stats: res.stats || []
            });
          } catch (e) {
            _this2.setState({
              loading: false,
              error_message: "Failed to fetch stats"
            });
          }
        };

        if (this.request) {
          this.request.abort();
          delete this.request;
        }

        this.request = request;
      }
    }, {
      key: "dateStops",
      value: function dateStops() {
        var days = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 15;
        var d = (0, _lib.moment)().utc().startOf("day");
        var out = [];

        for (var i = 0; i < days; i++) {
          out.push(d.format("YYYY-MM-DD"));
          d.add(-1, "d");
        }

        out.reverse();
        return out;
      }
    }, {
      key: "renderStats",
      value: function renderStats() {
        var stops = this.dateStops();
        var statsByDate = {};

        var _iterator = _createForOfIteratorHelper(this.state.stats),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var stat = _step.value;
            statsByDate[stat.date] = stat;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        var hits = [];
        var misses = [];

        var _iterator2 = _createForOfIteratorHelper(stops),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var stop = _step2.value;
            var s = statsByDate[stop];

            if (s) {
              hits.push(s.hits);
              misses.push(s.misses);
            } else {
              hits.push(0);
              misses.push(0);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        var options = {
          scales: {
            yAxes: [{
              stacked: true
            }]
          }
        };
        var data = {
          labels: stops.map(function (v, i) {
            if (i % 2 == 0) {
              return (0, _lib.moment)(v).format("MM/DD");
            }

            return "";
          }),
          datasets: [{
            label: "Misses",
            data: misses,
            backgroundColor: "rgba(251,145,117,0.1)",
            borderColor: "rgba(251,145,117,0.8)"
          }, {
            label: "Hits",
            data: hits,
            backgroundColor: "rgba(170,218,128,0.1)",
            borderColor: "rgba(170,218,128,0.8)"
          }]
        };
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Daily stats"), /*#__PURE__*/React.createElement(_reactChartjs.Line, {
          data: data,
          options: options,
          width: 600,
          height: 300
        }));
      }
    }, {
      key: "render",
      value: function render() {
        var inside;

        if (this.state.stats) {
          inside = this.renderStats();
        } else {
          inside = "Loading stats";
        }

        return /*#__PURE__*/React.createElement("div", {
          className: "stats_page page_container"
        }, inside);
      }
    }]);

    return StatsPage;
  }(React.Component);

  _exports["default"] = StatsPage;
});

