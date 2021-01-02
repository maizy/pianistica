define("st/components/staff_song_notes", ["exports", "react", "react-dom", "lib", "st/components/staff_notes", "st/music", "prop-types", "st/components/staff/ledger_lines", "st/components/staff/bar_notes", "st/song_note_list"], function (_exports, React, ReactDOM, _lib, _staff_notes, _music, types, _ledger_lines, _bar_notes, _song_note_list) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);
  ReactDOM = _interopRequireWildcard(ReactDOM);
  _staff_notes = _interopRequireDefault(_staff_notes);
  types = _interopRequireWildcard(types);
  _ledger_lines = _interopRequireDefault(_ledger_lines);
  _bar_notes = _interopRequireDefault(_bar_notes);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

  var MeasureLines = /*#__PURE__*/function (_React$PureComponent) {
    _inherits(MeasureLines, _React$PureComponent);

    var _super = _createSuper(MeasureLines);

    function MeasureLines() {
      _classCallCheck(this, MeasureLines);

      return _super.apply(this, arguments);
    }

    _createClass(MeasureLines, [{
      key: "render",
      // how many beats each chunk of rendering is
      value: function render() {
        var props = this.props;
        var beatsPerMeasure = 4;

        if (props.notes.metadata) {
          beatsPerMeasure = props.notes.metadata.beatsPerMeasure || beatsPerMeasure;
        }

        var stop = props.notes.getStopInBeats();
        var measures = Math.ceil(stop / beatsPerMeasure);
        var lines = [];
        var pixelsPerBeat = props.pixelsPerBeat;
        var measureLeft = Math.max(0, Math.floor(this.props.renderLeft / beatsPerMeasure));
        var measureRight = Math.min(measures, Math.ceil(this.props.renderRight / beatsPerMeasure));
        var offsetLeft = this.props.offsetLeft;

        for (var m = measureLeft; m <= measureRight; m++) {
          var fromLeft = m * beatsPerMeasure * pixelsPerBeat;
          lines.push( /*#__PURE__*/React.createElement("div", {
            style: {
              left: "".concat(offsetLeft + fromLeft - 2, "px")
            },
            "data-label": m + 1,
            key: "measure-".concat(m),
            className: "measure_line"
          }));
        }

        return lines;
      }
    }]);

    return MeasureLines;
  }(React.PureComponent);

  _defineProperty(MeasureLines, "bucketSize", 4);

  _defineProperty(MeasureLines, "defaultProps", {
    offsetLeft: 0
  });

  _defineProperty(MeasureLines, "propTypes", {
    pixelsPerBeat: types.number.isRequired,
    notes: types.array.isRequired,
    renderLeft: types.number.isRequired,
    renderRight: types.number.isRequired,
    offsetLeft: types.number.isRequired
  });

  var StaffSongNotes = /*#__PURE__*/function (_React$PureComponent2) {
    _inherits(StaffSongNotes, _React$PureComponent2);

    var _super2 = _createSuper(StaffSongNotes);

    function StaffSongNotes(props) {
      var _this;

      _classCallCheck(this, StaffSongNotes);

      _this = _super2.call(this, props);
      _this.state = {};
      _this.notesRef = React.createRef();
      return _this;
    }

    _createClass(StaffSongNotes, [{
      key: "classNames",
      value: function classNames() {
        return "staff_notes staff_song_notes";
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        this.resizeHandler = function () {
          var el = ReactDOM.findDOMNode(_this2);
          var rect = el.getBoundingClientRect();

          if (rect.width != _this2.state.width) {
            _this2.setState({
              width: rect.width
            });

            _this2.refreshRenderBuckets(rect.width);
          }
        };

        this.resizeHandler();
        window.addEventListener("resize", this.resizeHandler);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.resizeHandler) {
          window.removeEventListener("resize", this.resizeHandler);
        }
      }
    }, {
      key: "render",
      value: function render() {
        if (!this.state.width) {
          return /*#__PURE__*/React.createElement("div", null);
        }

        var count = Math.abs(this.props.keySignature.count);
        var offsetLeft = 0;
        var renderLeft = this.state.chunkLeft * MeasureLines.bucketSize;
        var renderRight = this.state.chunkRight * MeasureLines.bucketSize;
        var notes = this.state.filteredNotes.filter(function (note) {
          var left = note.getStart();
          var right = note.getStop();
          return right > renderLeft && left <= renderRight;
        });
        var style = {};

        if (this.offset) {
          style.transform = "translate3d(".concat(this.offset, "px, 0, 0)");
        }

        return /*#__PURE__*/React.createElement("div", {
          style: style,
          className: this.classNames()
        }, /*#__PURE__*/React.createElement(MeasureLines, {
          notes: this.props.notes,
          renderLeft: Math.max(0, renderLeft),
          renderRight: renderRight,
          pixelsPerBeat: this.props.pixelsPerBeat,
          offsetLeft: offsetLeft
        }), /*#__PURE__*/React.createElement(_ledger_lines["default"], {
          key: "ledger_lines",
          upperRow: this.props.upperRow,
          lowerRow: this.props.lowerRow,
          notes: notes,
          pixelsPerBeat: this.props.pixelsPerBeat,
          offsetLeft: offsetLeft
        }), /*#__PURE__*/React.createElement(_bar_notes["default"], {
          key: "bar_notes",
          heldNotes: this.props.heldNotes,
          keySignature: this.props.keySignature,
          upperRow: this.props.upperRow,
          lowerRow: this.props.lowerRow,
          loopLeft: this.props.loopLeft,
          loopRight: this.props.loopRight,
          notes: notes,
          pixelsPerBeat: this.props.pixelsPerBeat,
          offsetLeft: offsetLeft
        }));
      }
    }, {
      key: "refreshRenderBuckets",
      value: function refreshRenderBuckets() {
        var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.width;

        if (!width) {
          return;
        }

        var offset = this.offset ? -this.offset : 0;
        var beatLeft = -4 + offset / this.props.pixelsPerBeat;
        var beatRight = (width + offset) / this.props.pixelsPerBeat;
        var chunkLeft = Math.floor(beatLeft / MeasureLines.bucketSize);
        var chunkRight = Math.floor(beatRight / MeasureLines.bucketSize) + 1;

        if (this.state.chunkLeft != chunkLeft || this.state.chunkRight != chunkRight) {
          this.setState({
            chunkLeft: chunkLeft,
            chunkRight: chunkRight
          });
        }
      }
    }, {
      key: "setOffset",
      value: function setOffset(amount) {
        this.offset = amount;
        var el = ReactDOM.findDOMNode(this);
        el.style.transform = "translate3d(".concat(amount, "px, 0, 0)");
        this.refreshRenderBuckets();
      }
    }], [{
      key: "filterNotes",
      value: function filterNotes(notes, filter) {
        if (notes.length == 0) {
          return notes;
        }

        if (!filter) {
          return notes;
        }

        var out = new _song_note_list.SongNoteList();
        notes.forEach(function (n) {
          var pitch = (0, _music.parseNote)(n.note);

          if (filter(pitch)) {
            out.push(n);
          }
        });
        return out;
      }
    }, {
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(props, state) {
        if (props.notes != state.notes || props.filterPitch != state.filterPitch) {
          return {
            notes: props.notes,
            filterPitch: props.filterPitch,
            filteredNotes: StaffSongNotes.filterNotes(props.notes, props.filterPitch)
          };
        }

        return null;
      }
    }]);

    return StaffSongNotes;
  }(React.PureComponent);

  _exports["default"] = StaffSongNotes;

  _defineProperty(StaffSongNotes, "defaultPixelsPerBeat", 100);

  _defineProperty(StaffSongNotes, "propTypes", {
    keySignature: types.object.isRequired,
    notes: types.array.isRequired,
    loopLeft: types.number,
    loopRight: types.number,
    pixelsPerBeat: types.number.isRequired,
    heldNotes: types.object.isRequired
  });
});

