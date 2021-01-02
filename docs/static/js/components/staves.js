define("st/components/staves", ["exports", "react", "lib", "prop-types", "st/note_list", "st/song_note_list", "st/chord_list", "st/music", "st/components/staff_notes", "st/components/staff_song_notes"], function (_exports, React, _lib, types, _note_list, _song_note_list, _chord_list, _music, _staff_notes, _staff_song_notes) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.ChordStaff = _exports.GrandStaff = _exports.FStaff = _exports.GStaff = _exports.Staff = void 0;
  React = _interopRequireWildcard(React);
  types = _interopRequireWildcard(types);
  _note_list = _interopRequireDefault(_note_list);
  _chord_list = _interopRequireDefault(_chord_list);
  _staff_notes = _interopRequireDefault(_staff_notes);
  _staff_song_notes = _interopRequireDefault(_staff_song_notes);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

  var DEFAULT_HEIGHT = 120;
  var DEFAULT_MARGIN = 60;

  var Staff = /*#__PURE__*/function (_React$Component) {
    _inherits(Staff, _React$Component);

    var _super = _createSuper(Staff);

    function Staff() {
      _classCallCheck(this, Staff);

      return _super.apply(this, arguments);
    }

    _createClass(Staff, [{
      key: "setOffset",
      // skips react for performance
      value: function setOffset(amount) {
        var scale = this.props.scale || 1;
        var noteWidth = this.props.noteWidth || 1;
        this.refs.notes.setOffset(amount * noteWidth * scale);
      } // find the min/max note range in rows

    }, {
      key: "notesRowRange",
      value: function notesRowRange() {
        var _this = this;

        var min, max;

        if (this.props.notes instanceof _song_note_list.SongNoteList) {
          this.props.notes.forEach(function (note) {
            if (_this.props.filterPitch) {
              var pitch = (0, _music.parseNote)(note.note);

              if (!_this.props.filterPitch(pitch)) {
                return;
              }
            }

            var row = (0, _music.noteStaffOffset)(note.note);

            if (min == null || row < min) {
              min = row;
            }

            if (max == null || row > max) {
              max = row;
            }
          });
        }

        return [min, max];
      }
    }, {
      key: "render",
      value: function render() {
        var staffNotes = null;

        if (this.props.notes instanceof _note_list["default"]) {
          var scale = this.props.scale || 1;
          var noteWidth = Math.floor(this.props.noteWidth * scale);
          staffNotes = /*#__PURE__*/React.createElement(_staff_notes["default"], _extends({
            ref: "notes"
          }, this.props, {
            noteWidth: noteWidth,
            showLabels: this.props.showNotesLabel
          }));
        }

        if (this.props.notes instanceof _song_note_list.SongNoteList) {
          staffNotes = /*#__PURE__*/React.createElement(_staff_song_notes["default"], _extends({
            ref: "notes"
          }, this.props));
        }

        if (!staffNotes) {
          return /*#__PURE__*/React.createElement("div", {
            "data-error": "Missing note list"
          });
        }

        var height = DEFAULT_HEIGHT * (this.props.scale || 1);
        var noteHeight = height * 0.2; // height of 1 bar

        var _this$notesRowRange = this.notesRowRange(),
            _this$notesRowRange2 = _slicedToArray(_this$notesRowRange, 2),
            minRow = _this$notesRowRange2[0],
            maxRow = _this$notesRowRange2[1];

        var marginTop, marginBottom;

        if (minRow != null && minRow < this.props.lowerRow) {
          marginBottom = noteHeight * (this.props.lowerRow - minRow) / 2 + noteHeight;

          if (marginBottom < DEFAULT_MARGIN) {
            marginBottom = null;
          }
        }

        if (maxRow != null && maxRow > this.props.upperRow) {
          marginTop = noteHeight * (maxRow - this.props.upperRow) / 2 + noteHeight;

          if (marginTop < DEFAULT_MARGIN) {
            marginTop = null;
          }
        }

        return /*#__PURE__*/React.createElement("div", {
          style: {
            height: "".concat(height, "px"),
            marginTop: marginTop ? "".concat(marginTop, "px") : null,
            marginBottom: marginBottom ? "".concat(marginBottom, "px") : null
          },
          className: (0, _lib.classNames)("staff", this.props.staffClass)
        }, /*#__PURE__*/React.createElement("img", {
          className: "cleff",
          src: this.props.cleffImage
        }), /*#__PURE__*/React.createElement("div", {
          className: "lines"
        }, /*#__PURE__*/React.createElement("div", {
          className: "line1 line"
        }), /*#__PURE__*/React.createElement("div", {
          className: "line2 line"
        }), /*#__PURE__*/React.createElement("div", {
          className: "line3 line"
        }), /*#__PURE__*/React.createElement("div", {
          className: "line4 line"
        }), /*#__PURE__*/React.createElement("div", {
          className: "line5 line"
        })), this.renderKeySignature(), staffNotes, this.props.children);
      }
    }, {
      key: "renderKeySignature",
      value: function renderKeySignature() {
        var keySignature = this.props.keySignature;

        if (!keySignature) {
          return;
        }

        if (keySignature.count == 0) {
          return;
        }

        var ksCenter = (0, _music.parseNote)(this.props.keySignatureCenter);

        if (keySignature.isFlat()) {
          ksCenter -= 2;
        }

        var sigNotes = keySignature.notesInRange(ksCenter - 10, ksCenter + 2);
        var topOffset = this.props.upperRow;
        var sigClass = keySignature.isFlat() ? "flat" : "sharp";
        var src = keySignature.isFlat() ? "/static/svg/flat.svg" : "/static/svg/sharp.svg";
        return /*#__PURE__*/React.createElement("div", {
          className: "key_signature"
        }, sigNotes.map(function (n, i) {
          var fromTop = topOffset - (0, _music.noteStaffOffset)(n);
          var style = {
            top: "".concat(Math.floor(fromTop * 25 / 2), "%"),
            left: "".concat(i * 20, "px")
          };
          return /*#__PURE__*/React.createElement("img", {
            key: "sig-".concat(n),
            "data-note": n,
            style: style,
            className: (0, _lib.classNames)("accidental", sigClass),
            src: src
          });
        }));
      }
    }]);

    return Staff;
  }(React.Component);

  _exports.Staff = Staff;

  _defineProperty(Staff, "propTypes", {
    // rendering props
    upperRow: types.number.isRequired,
    lowerRow: types.number.isRequired,
    cleffImage: types.string.isRequired,
    staffClass: types.string.isRequired,
    keySignature: types.object,
    // state props
    notes: types.array.isRequired,
    heldNotes: types.object.isRequired,
    inGrand: types.bool,
    scale: types.number,
    showNotesLabel: types.bool
  });

  var GStaff = /*#__PURE__*/function (_Staff) {
    _inherits(GStaff, _Staff);

    var _super2 = _createSuper(GStaff);

    function GStaff() {
      _classCallCheck(this, GStaff);

      return _super2.apply(this, arguments);
    }

    return GStaff;
  }(Staff);

  _exports.GStaff = GStaff;

  _defineProperty(GStaff, "defaultProps", {
    // where the key signature is centered around
    keySignatureCenter: "F6",
    upperRow: 45,
    lowerRow: 37,
    cleffImage: "/static/svg/clefs.G.svg",
    staffClass: "g_staff"
  });

  var FStaff = /*#__PURE__*/function (_Staff2) {
    _inherits(FStaff, _Staff2);

    var _super3 = _createSuper(FStaff);

    function FStaff() {
      _classCallCheck(this, FStaff);

      return _super3.apply(this, arguments);
    }

    return FStaff;
  }(Staff);

  _exports.FStaff = FStaff;

  _defineProperty(FStaff, "defaultProps", {
    keySignatureCenter: "F4",
    upperRow: 33,
    lowerRow: 25,
    cleffImage: "/static/svg/clefs.F_change.svg",
    staffClass: "f_staff"
  });

  var GrandStaff = /*#__PURE__*/function (_React$Component2) {
    _inherits(GrandStaff, _React$Component2);

    var _super4 = _createSuper(GrandStaff);

    function GrandStaff(props) {
      var _this2;

      _classCallCheck(this, GrandStaff);

      _this2 = _super4.call(this, props);
      _this2.gstaff = React.createRef();
      _this2.fstaff = React.createRef();
      _this2.filterGStaff = _this2.filterGStaff.bind(_assertThisInitialized(_this2));
      _this2.filterFStaff = _this2.filterFStaff.bind(_assertThisInitialized(_this2));
      return _this2;
    } // skips react for performance


    _createClass(GrandStaff, [{
      key: "setOffset",
      value: function setOffset(amount) {
        if (this.gstaff.current) {
          this.gstaff.current.setOffset(amount);
        }

        if (this.fstaff.current) {
          this.fstaff.current.setOffset(amount);
        }
      }
    }, {
      key: "filterGStaff",
      value: function filterGStaff(pitch) {
        if (pitch < _music.MIDDLE_C_PITCH) {
          return false;
        }

        return true;
      }
    }, {
      key: "filterFStaff",
      value: function filterFStaff(pitch) {
        if (pitch >= _music.MIDDLE_C_PITCH) {
          return false;
        }

        return true;
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("div", {
          className: "grand_staff"
        }, /*#__PURE__*/React.createElement(GStaff, _extends({
          ref: this.gstaff,
          filterPitch: this.filterGStaff
        }, this.props)), /*#__PURE__*/React.createElement(FStaff, _extends({
          ref: this.fstaff,
          filterPitch: this.filterFStaff,
          showAnnotations: false
        }, this.props)));
      }
    }]);

    return GrandStaff;
  }(React.Component);

  _exports.GrandStaff = GrandStaff;

  var ChordStaff = /*#__PURE__*/function (_React$Component3) {
    _inherits(ChordStaff, _React$Component3);

    var _super5 = _createSuper(ChordStaff);

    function ChordStaff() {
      _classCallCheck(this, ChordStaff);

      return _super5.apply(this, arguments);
    }

    _createClass(ChordStaff, [{
      key: "setOffset",
      value: function setOffset(amount) {
        this.refs.chordScrolling.style.transform = "translate3d(".concat(amount, "px, 0, 0)");
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        if (!(this.props.chords instanceof _chord_list["default"])) {
          return /*#__PURE__*/React.createElement("div", null);
        }

        var touchedNotes = Object.keys(this.props.touchedNotes);
        return /*#__PURE__*/React.createElement("div", {
          className: "chord_staff"
        }, /*#__PURE__*/React.createElement("div", {
          className: "chord_scrolling",
          ref: "chordScrolling"
        }, this.props.chords.map(function (c, i) {
          var pressedIndicator;

          if (i == 0 && touchedNotes.length) {
            pressedIndicator = /*#__PURE__*/React.createElement("span", {
              className: "touched"
            }, touchedNotes.map(function (n) {
              if (c.containsNote(n)) {
                return /*#__PURE__*/React.createElement("span", {
                  key: "right-".concat(n),
                  className: "right"
                }, "\u2022");
              } else {
                return /*#__PURE__*/React.createElement("span", {
                  key: "wrong-".concat(n),
                  className: "wrong"
                }, "\xD7");
              }
            }));
          }

          return /*#__PURE__*/React.createElement("div", {
            key: "".concat(c, "-").concat(i),
            className: (0, _lib.classNames)("chord", {
              errorshake: _this3.props.noteShaking && i == 0
            })
          }, c.toString(), pressedIndicator);
        })));
      }
    }]);

    return ChordStaff;
  }(React.Component);

  _exports.ChordStaff = ChordStaff;

  _defineProperty(ChordStaff, "propTypes", {
    chords: types.array
  });
});

