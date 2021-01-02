define("st/components/staff/whole_notes", ["exports", "react", "lib", "st/music", "prop-types"], function (_exports, React, _lib, _music, types) {
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

  var WholeNotes = /*#__PURE__*/function (_React$PureComponent) {
    _inherits(WholeNotes, _React$PureComponent);

    var _super = _createSuper(WholeNotes);

    function WholeNotes() {
      _classCallCheck(this, WholeNotes);

      return _super.apply(this, arguments);
    }

    _createClass(WholeNotes, [{
      key: "render",
      value: function render() {
        var _this = this;

        var out = this.props.notes.map(function (n, idx) {
          return _this.renderNote(n, idx, _this.getNotesByColumn());
        });

        if (out.length) {
          return out;
        }

        return null;
      } // used to offset notes when they are stacked

    }, {
      key: "getNotesByColumn",
      value: function getNotesByColumn() {
        var notesByColumn = {};
        this.props.notes.forEach(function (n) {
          var column = n.getStart().toString();

          if (!notesByColumn[column]) {
            notesByColumn[column] = [n];
          } else {
            notesByColumn[column].push(n);
          }
        });
        return notesByColumn;
      }
    }, {
      key: "renderNote",
      value: function renderNote(note, idx, notesByColumn) {
        var props = this.props;
        var key = props.keySignature;
        var noteName = key.enharmonic(note.note);
        var pitch = (0, _music.parseNote)(noteName);
        var row = (0, _music.noteStaffOffset)(noteName);
        var fromTop = props.upperRow - row;
        var offsetLeft = props.offsetLeft || 0;
        var left = offsetLeft + note.getStart() * this.props.pixelsPerBeat;
        var column = notesByColumn[note.getStart().toString()];
        var style = {
          top: "".concat(Math.floor(fromTop * 25 / 2), "%"),
          left: "".concat(left, "px")
        };
        var outside = row > props.upperRow || row < props.lowerRow;
        var accidentals = key.accidentalsForNote(noteName);
        var noteClasses = null;

        if (props.noteClasses) {
          noteClasses = props.noteClasses[note.id];
        }

        var classes = (0, _lib.classNames)("whole_note", "note", {
          is_flat: accidentals == -1,
          is_sharp: accidentals == 1,
          is_natural: accidentals == 0,
          outside: outside
        }, noteClasses, props.staticNoteClasses);
        var parts = [/*#__PURE__*/React.createElement("img", {
          key: "head",
          className: "primary",
          src: "/static/svg/noteheads.s0.svg"
        })];

        if (accidentals == 0) {
          parts.push( /*#__PURE__*/React.createElement("img", {
            key: "natural",
            className: "accidental natural",
            src: "/static/svg/natural.svg"
          }));
        }

        if (accidentals == -1) {
          parts.push( /*#__PURE__*/React.createElement("img", {
            key: "flat",
            className: "accidental flat",
            src: "/static/svg/flat.svg"
          }));
        }

        if (accidentals == 1) {
          parts.push( /*#__PURE__*/React.createElement("img", {
            key: "sharp",
            className: "accidental sharp",
            src: "/static/svg/sharp.svg"
          }));
        }

        return /*#__PURE__*/React.createElement("div", {
          key: "note-".concat(idx),
          style: style,
          "data-note": note.note,
          "data-midi-note": pitch,
          className: classes
        }, parts);
      }
    }]);

    return WholeNotes;
  }(React.PureComponent);

  _exports["default"] = WholeNotes;

  _defineProperty(WholeNotes, "propTypes", {
    notes: types.array.isRequired,
    keySignature: types.object.isRequired,
    upperRow: types.number,
    lowerRow: types.number,
    pixelsPerBeat: types.number,
    offsetLeft: types.number // noteClasses, staticNoteClasses

  });
});

