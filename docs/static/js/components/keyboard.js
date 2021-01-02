define("st/components/keyboard", ["exports", "react", "lib", "st/music", "st/keyboard_input", "prop-types"], function (_exports, React, _lib, _music, _keyboard_input, types) {
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

  var Keyboard = /*#__PURE__*/function (_React$PureComponent) {
    _inherits(Keyboard, _React$PureComponent);

    var _super = _createSuper(Keyboard);

    function Keyboard(props) {
      var _this;

      _classCallCheck(this, Keyboard);

      _this = _super.call(this, props);

      _defineProperty(_assertThisInitialized(_this), "defaultLower", "C5");

      _defineProperty(_assertThisInitialized(_this), "defaultUpper", "B6");

      _this.state = {
        // used for showing :active effect on keys when using touch device
        activeNotes: {}
      };
      _this.heldKeyboardKeys = {};
      _this.activeTouches = {};
      _this.onMouseDown = _this.onMouseDown.bind(_assertThisInitialized(_this));
      _this.onTouchStart = _this.onTouchStart.bind(_assertThisInitialized(_this));
      _this.onTouchEnd = _this.onTouchEnd.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(Keyboard, [{
      key: "isBlack",
      value: function isBlack(pitch) {
        return _music.LETTER_OFFSETS[pitch % 12] === undefined;
      }
    }, {
      key: "isC",
      value: function isC(pitch) {
        return _music.LETTER_OFFSETS[pitch % 12] === 0;
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        this.downListener = function (event) {
          if (event.shiftKey || event.altKey || event.ctrlKey) {
            return;
          }

          if (event.target.matches("input")) {
            return;
          }

          var key = (0, _keyboard_input.keyCodeToChar)(event.keyCode);
          var note = (0, _keyboard_input.noteForKey)("C5", key);

          if (note && !_this2.heldKeyboardKeys[note]) {
            _this2.heldKeyboardKeys[note] = true;

            _this2.triggerNoteDown(note);
          }
        };

        this.upListener = function (event) {
          var key = (0, _keyboard_input.keyCodeToChar)(event.keyCode);
          var note = (0, _keyboard_input.noteForKey)("C5", key);

          if (note && _this2.heldKeyboardKeys[note]) {
            _this2.heldKeyboardKeys[note] = false;

            _this2.triggerNoteUp(note);
          }
        };

        window.addEventListener("keydown", this.downListener);
        window.addEventListener("keyup", this.upListener);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        window.removeEventListener("keydown", this.downListener);
        window.removeEventListener("keyup", this.upListener);
      }
    }, {
      key: "triggerNoteDown",
      value: function triggerNoteDown(note) {
        if (this.props.onKeyDown) {
          this.props.onKeyDown(note);
        }

        if (this.props.midiOutput) {
          this.props.midiOutput.noteOn((0, _music.parseNote)(note), 100);
        }
      }
    }, {
      key: "triggerNoteUp",
      value: function triggerNoteUp(note) {
        if (this.props.onKeyUp) {
          this.props.onKeyUp(note);
        }

        if (this.props.midiOutput) {
          this.props.midiOutput.noteOff((0, _music.parseNote)(note), 100);
        }
      }
    }, {
      key: "onTouchStart",
      value: function onTouchStart(e) {
        var note = e.target.dataset.note;
        this.setState(function (s) {
          return {
            activeNotes: Object.assign({}, s.activeNotes, _defineProperty({}, note, true))
          };
        });

        for (var i = 0; i < e.changedTouches.length; i++) {
          var touch = e.changedTouches[i];
          this.activeTouches[note] = touch.identifier;
        }

        this.triggerNoteDown(note);
      }
    }, {
      key: "onTouchEnd",
      value: function onTouchEnd(e) {
        var _this3 = this;

        e.preventDefault();

        for (var i = 0; i < e.changedTouches.length; i++) {
          var touch = e.changedTouches[i];

          var _loop = function _loop() {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                note = _Object$entries$_i[0],
                tid = _Object$entries$_i[1];

            if (tid == touch.identifier) {
              delete _this3.activeTouches[note];

              _this3.setState(function (s) {
                var activeNotes = Object.assign({}, s.activeNotes);
                delete activeNotes[note];
                return {
                  activeNotes: activeNotes
                };
              });

              _this3.triggerNoteUp(note);
            }
          };

          for (var _i = 0, _Object$entries = Object.entries(this.activeTouches); _i < _Object$entries.length; _i++) {
            _loop();
          }
        }
      }
    }, {
      key: "onMouseDown",
      value: function onMouseDown(e) {
        var _this4 = this;

        e.preventDefault();
        var note = e.target.dataset.note;
        this.triggerNoteDown(note);

        if (this.props.onKeyUp) {
          var onUp = function onUp(e) {
            e.preventDefault();

            _this4.triggerNoteUp(note);

            document.removeEventListener("mouseup", onUp);
          };

          document.addEventListener("mouseup", onUp);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var keys = [];
        var lower = this.props.lower || this.defaultLower;
        var upper = this.props.upper || this.defaultUpper;

        if (typeof lower == "string") {
          lower = (0, _music.parseNote)(lower);
        }

        if (typeof upper == "string") {
          upper = (0, _music.parseNote)(upper);
        }

        if (lower >= upper) {
          throw "lower must be less than upper for keyboard";
        }

        for (var pitch = lower; pitch <= upper; pitch++) {
          var black = this.isBlack(pitch);
          var name = (0, _music.noteName)(pitch);
          var classes = (0, _lib.classNames)("key", {
            labeled: this.isC(pitch),
            white: !black,
            black: black,
            held: this.props.heldNotes && this.props.heldNotes[name],
            active: this.state.activeNotes[name]
          });
          keys.push( /*#__PURE__*/React.createElement("div", {
            key: pitch,
            className: "key_wrapper"
          }, /*#__PURE__*/React.createElement("div", {
            onMouseDown: this.onMouseDown,
            onTouchStart: this.onTouchStart,
            onTouchEnd: this.onTouchEnd,
            "data-note": name,
            "data-note-fixed": (0, _music.fixNoteOctaveNum)(name),
            className: classes
          })));
        }

        return /*#__PURE__*/React.createElement("div", {
          className: "keyboard"
        }, keys);
      }
    }]);

    return Keyboard;
  }(React.PureComponent);

  _exports["default"] = Keyboard;

  _defineProperty(Keyboard, "propTypes", {
    lower: types.oneOfType([types.string, types.number]),
    upper: types.oneOfType([types.string, types.number]),
    heldNotes: types.object
  });
});

