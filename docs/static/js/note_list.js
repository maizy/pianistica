define("st/note_list", ["exports", "st/music"], function (_exports, _music) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

  function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  var NoteList = /*#__PURE__*/function (_Array) {
    _inherits(NoteList, _Array);

    var _super = _createSuper(NoteList);

    function NoteList(notes) {
      var _this;

      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, NoteList);

      _this = _super.call(this);
      Object.setPrototypeOf(_assertThisInitialized(_this), NoteList.prototype);

      if (opts.generator) {
        _this.generator = opts.generator;
      }

      if (notes && notes.length) {
        _this.push.apply(_assertThisInitialized(_this), notes);
      } // let scale = new MajorScale("C");
      // // this.generator = new StepNotes(scale.getRange(3, 24, 2));
      // // this.generator = new RandomNotes(scale.getRange(3, 24, 2));
      // // this.generator = new MiniSteps(scale.getRange(3, 24, 2));
      // this.generator = new Double(scale.getRange(3, 10, 2), scale.getRange(5, 12));


      return _this;
    }

    _createClass(NoteList, [{
      key: "getKeyRange",
      value: function getKeyRange() {
        var notes = new _music.MajorScale("C").getRange(3, 24, 2);
        return [notes[0], notes[notes.length - 1]];
      }
    }, {
      key: "filterByRange",
      value: function filterByRange(min, max) {
        return new NoteList(this.filter(function (n) {
          if ((0, _music.notesLessThan)(n, min)) {
            return false;
          }

          if ((0, _music.notesLessThan)(max, n)) {
            return false;
          }

          return true;
        }));
      }
    }, {
      key: "pushRandom",
      value: function pushRandom() {
        return this.push(this.generator.nextNote());
      }
    }, {
      key: "fillBuffer",
      value: function fillBuffer(count) {
        for (var i = 0; i < count; i++) {
          this.pushRandom();
        }
      } // must be an array of notes

    }, {
      key: "matchesHead",
      value: function matchesHead(notes) {
        var anyOctave = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var first = this[0];

        if (!Array.isArray(notes)) {
          throw new Error("matchesHead: notes should be an array");
        }

        if (Array.isArray(first)) {
          if (first.length != notes.length) {
            return false;
          }

          if (anyOctave) {
            var noteSet = {};
            notes.forEach(function (n) {
              return noteSet[n.replace(/\d+$/, "")] = true;
            });
            return first.every(function (n) {
              return noteSet[n.replace(/\d+$/, "")];
            });
          } else {
            var pitches = notes.map(_music.parseNote);
            return first.map(_music.parseNote).every(function (n) {
              return pitches.indexOf(n) >= 0;
            });
          }
        } else {
          if (anyOctave) {
            return notes.length == 1 && (0, _music.notesSame)(notes[0], first);
          } else {
            return notes.length == 1 && (0, _music.parseNote)(notes[0]) == (0, _music.parseNote)(first);
          }
        }
      }
    }, {
      key: "currentColumn",
      value: function currentColumn() {
        var first = this[0];

        if (Array.isArray(first)) {
          return first;
        } else {
          return [first];
        }
      } // if single note is in head

    }, {
      key: "inHead",
      value: function inHead(note) {
        var first = this[0];

        if (Array.isArray(first)) {
          return first.some(function (n) {
            return n == note;
          });
        } else {
          return note == first;
        }
      }
    }, {
      key: "toString",
      value: function toString() {
        return this.map(function (n) {
          return n.join(" ");
        }).join(", ");
      } // converts it to serialize list of note numbers for quick comparisons

    }, {
      key: "toNoteString",
      value: function toNoteString() {
        return this.map(function (n) {
          return n.map(_music.parseNote).join(" ");
        }).join(", ");
      }
    }]);

    return NoteList;
  }( /*#__PURE__*/_wrapNativeSuper(Array));

  _exports["default"] = NoteList;
});

