define("st/components/staff_notes", ["exports", "react", "lib", "prop-types", "st/music", "st/song_note_list", "st/components/staff/ledger_lines", "st/components/staff/whole_notes"], function (_exports, React, _lib, types, _music, _song_note_list, _ledger_lines, _whole_notes) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);
  types = _interopRequireWildcard(types);
  _ledger_lines = _interopRequireDefault(_ledger_lines);
  _whole_notes = _interopRequireDefault(_whole_notes);

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

  var StaffNotes = /*#__PURE__*/function (_React$Component) {
    _inherits(StaffNotes, _React$Component);

    var _super = _createSuper(StaffNotes);

    function StaffNotes() {
      _classCallCheck(this, StaffNotes);

      return _super.apply(this, arguments);
    }

    _createClass(StaffNotes, [{
      key: "render",
      value: function render() {
        var _this$convertToSongNo = this.convertToSongNotes(),
            _this$convertToSongNo2 = _slicedToArray(_this$convertToSongNo, 2),
            songNotes = _this$convertToSongNo2[0],
            noteClasses = _this$convertToSongNo2[1];

        var heldSongNotes = this.convertHeldToSongNotes();
        var count = Math.abs(this.props.keySignature.count);
        var keySignatureWidth = count > 0 ? count * 20 + 20 : 0;
        return /*#__PURE__*/React.createElement("div", {
          ref: "notes",
          className: this.classNames()
        }, /*#__PURE__*/React.createElement(_ledger_lines["default"], {
          key: "ledger_lines",
          offsetLeft: keySignatureWidth,
          upperRow: this.props.upperRow,
          lowerRow: this.props.lowerRow,
          notes: songNotes.concat(heldSongNotes),
          pixelsPerBeat: this.props.noteWidth
        }), /*#__PURE__*/React.createElement(_whole_notes["default"], {
          key: "notes",
          offsetLeft: keySignatureWidth,
          keySignature: this.props.keySignature,
          upperRow: this.props.upperRow,
          lowerRow: this.props.lowerRow,
          notes: songNotes,
          noteClasses: noteClasses,
          pixelsPerBeat: this.props.noteWidth
        }), /*#__PURE__*/React.createElement(_whole_notes["default"], {
          key: "held_notes",
          offsetLeft: keySignatureWidth,
          keySignature: this.props.keySignature,
          upperRow: this.props.upperRow,
          lowerRow: this.props.lowerRow,
          notes: heldSongNotes,
          staticNoteClasses: "held",
          pixelsPerBeat: this.props.noteWidth
        }), this.renderAnnotations());
      }
    }, {
      key: "convertHeldToSongNotes",
      value: function convertHeldToSongNotes() {
        var _this = this;

        if (!this.props.heldNotes) {
          return [];
        }

        var notes = new _song_note_list.SongNoteList();
        var dur = 40 / this.props.noteWidth; // notes that are held down but aren't correct

        Object.keys(this.props.heldNotes).filter(function (note) {
          return !_this.props.notes.inHead(note);
        }).forEach(function (note, idx) {
          notes.push(new _song_note_list.SongNote(note, 0, dur));
        });
        return this.filterVisibleNotes(notes);
      } // filter notes so only the ones visible for this staff returned

    }, {
      key: "filterVisibleNotes",
      value: function filterVisibleNotes(notes) {
        var _this2 = this;

        if (notes.length == 0) {
          return notes;
        }

        if (!this.props.filterPitch) {
          return notes;
        }

        var out = new _song_note_list.SongNoteList();
        notes.forEach(function (n) {
          var pitch = (0, _music.parseNote)(n.note);

          if (_this2.props.filterPitch(pitch)) {
            out.push(n);
          }
        });
        return out;
      }
    }, {
      key: "convertToSongNotes",
      value: function convertToSongNotes() {
        var _this3 = this;

        var notes = new _song_note_list.SongNoteList();
        var beat = 0;
        var dur = 40 / this.props.noteWidth;
        var noteClasses = {};

        var toRow = function toRow(n) {
          return (0, _music.noteStaffOffset)(_this3.props.keySignature.enharmonic(n));
        };

        var appendClass = function appendClass(note, cls) {
          if (noteClasses[note.id]) {
            noteClasses[note.id].push(cls);
          } else {
            noteClasses[note.id] = [cls];
          }
        };

        this.props.notes.forEach(function (column, columnIdx) {
          var withClasses = function withClasses(note) {
            if (columnIdx == 0) {
              if (_this3.props.noteShaking) {
                appendClass(note, "noteshake");
              }

              if (_this3.props.heldNotes[note.note]) {
                appendClass(note, "held");
              }
            }

            return note;
          };

          if (Array.isArray(column)) {
            var tuples = column.map(function (n) {
              return [toRow(n), n];
            });
            var lastRow = null;
            var offset = 0;
            tuples.forEach(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  row = _ref2[0],
                  n = _ref2[1];

              if (lastRow && Math.abs(lastRow - row) == 1) {
                if (offset == 0) {
                  offset = 1;
                } else {
                  offset = 0;
                }
              } else {
                offset = 0;
              }

              var sNote = new _song_note_list.SongNote(n, beat, dur);

              if (offset == 1) {
                appendClass(sNote, "group_offset");
              }

              lastRow = row;
              notes.push(withClasses(sNote));
            });
          } else {
            notes.push(withClasses(new _song_note_list.SongNote(column, beat, dur)));
          }

          beat += 1;
        });
        return [this.filterVisibleNotes(notes), noteClasses];
      }
    }, {
      key: "classNames",
      value: function classNames() {
        return "staff_notes";
      }
    }, {
      key: "setOffset",
      value: function setOffset(amount) {
        this.refs.notes.style.transform = "translate3d(".concat(amount, "px, 0, 0)");
      }
    }, {
      key: "renderAnnotations",
      value: function renderAnnotations() {
        var _this4 = this;

        if (this.props.showAnnotations === false) {
          return null;
        }

        var out = [];
        this.props.notes.forEach(function (column, idx) {
          var annotation = [];

          if (column.annotation) {
            annotation.push(column.annotation);
          }

          if (_this4.props.showLabels === true) {
            if (Array.isArray(column) && column.length > 0) {
              annotation.push(column.map(_music.fixNoteOctaveNum).join(' '));
            }
          }

          if (annotation.length > 0) {
            var style = {
              top: "-60%",
              left: "".concat(idx * _this4.props.noteWidth, "px")
            };
            out.push( /*#__PURE__*/React.createElement("div", {
              style: style,
              className: "annotation",
              key: "annotation-".concat(idx)
            }, annotation.map(function (i) {
              return /*#__PURE__*/React.createElement("span", null, i);
            }).reduce(function (prev, curr) {
              return [prev, /*#__PURE__*/React.createElement("br", null), curr];
            })));
          }
        });
        return out;
      }
    }]);

    return StaffNotes;
  }(React.Component);

  _exports["default"] = StaffNotes;

  _defineProperty(StaffNotes, "propTypes", {
    keySignature: types.object.isRequired,
    noteWidth: types.number.isRequired,
    notes: types.array.isRequired,
    upperRow: types.number.isRequired,
    lowerRow: types.number.isRequired,
    heldNotes: types.object.isRequired,
    noteShaking: types.bool,
    showLabels: types.bool
  });
});

