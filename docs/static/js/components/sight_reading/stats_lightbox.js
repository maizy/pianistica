define("st/components/sight_reading/stats_lightbox", ["exports", "react", "st/components/lightbox", "st/components/tabs", "prop-types"], function (_exports, React, _lightbox, _tabs, types) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);
  _lightbox = _interopRequireDefault(_lightbox);
  _tabs = _interopRequireDefault(_tabs);
  types = _interopRequireWildcard(types);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var StatsLightbox = /*#__PURE__*/function (_Lightbox) {
    _inherits(StatsLightbox, _Lightbox);

    var _super = _createSuper(StatsLightbox);

    function StatsLightbox(props) {
      var _this;

      _classCallCheck(this, StatsLightbox);

      _this = _super.call(this, props);
      _this.state = {
        tab: "ratios"
      };
      return _this;
    }

    _createClass(StatsLightbox, [{
      key: "renderContent",
      value: function renderContent() {
        var _this2 = this;

        var statsContent;
        var availableNotes = Object.keys(this.props.stats.noteHitStats);
        availableNotes.sort();

        if (availableNotes.length) {
          if (this.state.tab == "ratios") {
            statsContent = this.renderNoteHitRatios(availableNotes);
          } else if (this.state.tab == "timings") {
            statsContent = this.renderNoteTimings(availableNotes);
          }
        } else {
          statsContent = /*#__PURE__*/React.createElement("p", {
            className: "empty_message"
          }, "You don't have any stats yet. Try playing some notes first.");
        }

        if (this.props.stats.averageHitTime) {
          var hitTime = /*#__PURE__*/React.createElement("div", {
            className: "hit_time"
          }, "Average hit time", /*#__PURE__*/React.createElement("strong", null, " ", Math.round(this.props.stats.averageHitTime), "ms"));
        }

        if (availableNotes.length) {
          var clearButton = /*#__PURE__*/React.createElement("button", {
            onClick: function onClick() {
              _this2.props.resetStats();

              _this2.close();
            }
          }, "Clear stats");
        }

        var statTabs;

        if (availableNotes.length) {
          statTabs = /*#__PURE__*/React.createElement(_tabs["default"], {
            onChangeTab: function onChangeTab(opt) {
              return _this2.setState({
                tab: opt.name
              });
            },
            currentTab: this.state.tab,
            tabs: [{
              name: "ratios",
              label: "Ratios"
            }, {
              name: "timings",
              label: "Timings"
            }]
          });
        }

        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Session stats"), statTabs, statsContent, hitTime, /*#__PURE__*/React.createElement("div", {
          className: "footer_buttons"
        }, /*#__PURE__*/React.createElement("button", {
          onClick: this.close.bind(this)
        }, "Close"), /*#__PURE__*/React.createElement("div", {
          className: "spacer"
        }), clearButton));
      }
    }, {
      key: "renderNoteHitRatios",
      value: function renderNoteHitRatios(availableNotes) {
        var hitStats = this.props.stats.noteHitStats;
        var statsContent = availableNotes.map(function (note) {
          var stats = hitStats[note];
          var hits = stats.hits || 0;
          var misses = stats.misses || 0;
          var hit_rate = hits / (hits + misses) * 100;
          var miss_rate = misses / (hits + misses) * 100;

          if (hit_rate > 0) {
            var hit_bar = /*#__PURE__*/React.createElement("div", {
              className: "hit_bar",
              style: {
                width: "".concat(hit_rate, "%")
              }
            }, hits);
          }

          if (miss_rate > 0) {
            var miss_bar = /*#__PURE__*/React.createElement("div", {
              className: "miss_bar",
              style: {
                width: "".concat(miss_rate, "%")
              }
            }, misses);
          }

          return /*#__PURE__*/React.createElement("div", {
            key: note,
            className: "note_stat_row"
          }, /*#__PURE__*/React.createElement("div", {
            className: "note_name"
          }, note), /*#__PURE__*/React.createElement("div", {
            className: "note_rates"
          }, hit_bar, miss_bar));
        }.bind(this));
        statsContent = /*#__PURE__*/React.createElement("div", {
          className: "note_bars_container"
        }, statsContent);
        return statsContent;
      }
    }, {
      key: "renderNoteTimings",
      value: function renderNoteTimings(availableNotes) {
        var hitStats = this.props.stats.noteHitStats;
        var globalAverage = this.props.stats.averageHitTime;
        var maxRange = 0;

        var _iterator = _createForOfIteratorHelper(availableNotes),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var note = _step.value;
            var stats = hitStats[note];
            if (!stats.averageHitTime) continue;
            maxRange = Math.max(maxRange, Math.abs(globalAverage - stats.averageHitTime));
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        var graphRange = Math.max(0.1 * globalAverage, maxRange * 2);
        var statsContent = availableNotes.map(function (note) {
          var stats = hitStats[note];

          if (!stats.averageHitTime) {
            return;
          }

          var widthPercent = 0.5 + (stats.averageHitTime - globalAverage) / (graphRange * 2);
          return /*#__PURE__*/React.createElement("div", {
            key: note,
            className: "note_timing_row"
          }, /*#__PURE__*/React.createElement("div", {
            className: "note_name"
          }, note), /*#__PURE__*/React.createElement("div", {
            className: "note_timing"
          }, /*#__PURE__*/React.createElement("div", {
            className: "timing_progress",
            style: {
              width: widthPercent * 100 + "%"
            }
          }), /*#__PURE__*/React.createElement("div", {
            className: "timing_label"
          }, Math.round(stats.averageHitTime), "ms")));
        });
        return /*#__PURE__*/React.createElement("div", {
          className: "note_timings_container"
        }, /*#__PURE__*/React.createElement("div", {
          className: "timing_legend"
        }, "Average"), /*#__PURE__*/React.createElement("div", {
          className: "line_container"
        }, /*#__PURE__*/React.createElement("div", {
          className: "average_line"
        })), statsContent);
      }
    }]);

    return StatsLightbox;
  }(_lightbox["default"]);

  _exports["default"] = StatsLightbox;

  _defineProperty(StatsLightbox, "className", "stats_lightbox");

  _defineProperty(StatsLightbox, "propTypes", {
    stats: types.object.isRequired
  });
});

