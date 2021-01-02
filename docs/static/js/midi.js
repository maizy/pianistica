define("st/midi", ["exports", "st/music"], function (_exports, _music) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.parseMidiMessage = parseMidiMessage;
  _exports.Metronome = _exports.MidiChannel = _exports.BaseOutputChannel = _exports.MidiInput = _exports.NOTE_EVENTS = void 0;

  var _NOTE_EVENTS;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var NOTE_EVENTS = (_NOTE_EVENTS = {}, _defineProperty(_NOTE_EVENTS, 144, "noteOn"), _defineProperty(_NOTE_EVENTS, 128, "noteOff"), _defineProperty(_NOTE_EVENTS, 176, "dataEntry"), _NOTE_EVENTS);
  _exports.NOTE_EVENTS = NOTE_EVENTS;

  function parseMidiMessage(message) {
    var _message$data = _slicedToArray(message.data, 3),
        raw = _message$data[0],
        pitch = _message$data[1],
        velocity = _message$data[2];

    var channel = raw & 0xf;
    var type = raw & 0xf0;
    var n = (0, _music.noteName)(pitch);

    if (NOTE_EVENTS[type] == "dataEntry") {
      return ["dataEntry"];
    }

    if (NOTE_EVENTS[type] == "noteOn") {
      if (velocity == 0) {
        return ["noteOff", n];
      } else {
        return ["noteOn", n, channel, velocity];
      }
    }

    if (NOTE_EVENTS[type] == "noteOff") {
      return ["noteOff", n];
    }
  } // takes input, transforms it into note events


  var MidiInput = /*#__PURE__*/function () {
    function MidiInput() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, MidiInput);

      this.sustainPedalEnabled = opts.sustainPedalEnabled;
      this.heldNotes = {};
      this.sustainPedalOn = false;
      this.opts = opts;
    }

    _createClass(MidiInput, [{
      key: "noteOn",
      value: function noteOn(name, velocity) {
        if (this.heldNotes[name]) {
          if (this.heldNotes[name].sustain) {
            delete this.heldNotes[name];

            if (this.opts.noteOff) {
              this.opts.noteOff(name);
            }
          } else {
            return;
          }
        }

        this.heldNotes[name] = {
          held: true
        };

        if (this.opts.noteOn) {
          this.opts.noteOn(name, velocity);
        }
      }
    }, {
      key: "noteOff",
      value: function noteOff(name) {
        if (!this.heldNotes[name]) {
          return;
        }

        if (this.sustainPedalOn) {
          this.heldNotes[name].held = false;
          this.heldNotes[name].sustain = true;
        } else {
          delete this.heldNotes[name];

          if (this.opts.noteOff) {
            this.opts.noteOff(name);
          }
        }
      }
    }, {
      key: "pedalOn",
      value: function pedalOn() {
        if (!this.sustainPedalEnabled) {
          return;
        }

        this.sustainPedalOn = true;
      }
    }, {
      key: "pedalOff",
      value: function pedalOff() {
        var _this = this;

        if (!this.sustainPedalEnabled || !this.sustainPedalOn) {
          return;
        }

        this.sustainPedalOn = false; // see who to turn off

        var toTurnOff = Object.keys(this.heldNotes).filter(function (name) {
          return _this.heldNotes[name].sustain && !_this.heldNotes[name].held;
        });

        var _iterator = _createForOfIteratorHelper(toTurnOff),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var name = _step.value;
            delete this.heldNotes[name];

            if (this.opts.noteOff) {
              this.opts.noteOff(name);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }, {
      key: "onMidiMessage",
      value: function onMidiMessage(message) {
        var _message$data2 = _slicedToArray(message.data, 3),
            raw = _message$data2[0],
            pitch = _message$data2[1],
            velocity = _message$data2[2];

        var cmd = raw >> 4,
            channel = raw & 0xf,
            type = raw & 0xf0;
        var n = (0, _music.noteName)(pitch);

        if (NOTE_EVENTS[type] == "noteOn") {
          if (velocity == 0) {
            this.noteOff(n);
          } else if (!document.hidden) {
            // ignore when the browser tab isn't active
            this.noteOn(n, velocity);
          }
        }

        if (NOTE_EVENTS[type] == "noteOff") {
          this.noteOff(n);
        }

        if (NOTE_EVENTS[type] == "dataEntry") {
          if (pitch == 64) {
            if (velocity > 0) {
              this.pedalOn();
            } else {
              this.pedalOff();
            }
          }
        }
      }
    }]);

    return MidiInput;
  }();

  _exports.MidiInput = MidiInput;

  var BaseOutputChannel = /*#__PURE__*/function () {
    function BaseOutputChannel() {
      _classCallCheck(this, BaseOutputChannel);
    }

    _createClass(BaseOutputChannel, [{
      key: "playNoteList",
      value: function playNoteList(list) {
        var _this2 = this;

        var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
        list = _toConsumableArray(list); // copy to avoid edits

        var idx = 0;
        return new Promise(function (resolve) {
          var playNextColumn = function playNextColumn() {
            if (idx >= list.length) {
              resolve();
              return;
            }

            var col = list[idx];

            var _iterator2 = _createForOfIteratorHelper(col),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var note = _step2.value;

                _this2.noteOn((0, _music.parseNote)(note), 100);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            setTimeout(function () {
              var col = list[idx];

              var _iterator3 = _createForOfIteratorHelper(col),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var note = _step3.value;

                  _this2.noteOff((0, _music.parseNote)(note));
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }

              idx += 1;
              playNextColumn();
            }, delay);
          };

          playNextColumn();
        });
      }
    }, {
      key: "testNote",
      value: function testNote() {
        var _this3 = this;

        // play middle C for 1 second
        console.log("playing test note");
        this.noteOn(_music.MIDDLE_C_PITCH, 100);
        setTimeout(function () {
          console.log("stopping test note");

          _this3.noteOff(_music.MIDDLE_C_PITCH);
        }, 500);
      }
    }]);

    return BaseOutputChannel;
  }();

  _exports.BaseOutputChannel = BaseOutputChannel;

  var MidiChannel = /*#__PURE__*/function (_BaseOutputChannel) {
    _inherits(MidiChannel, _BaseOutputChannel);

    var _super = _createSuper(MidiChannel);

    function MidiChannel(output, channel) {
      var _this4;

      _classCallCheck(this, MidiChannel);

      _this4 = _super.call(this);
      _this4.output = output;

      if (channel > 15 || channel < 0) {
        throw "invalid channel:" + channel;
      }

      _this4.channel = channel;
      return _this4;
    }

    _createClass(MidiChannel, [{
      key: "sendMessage",
      value: function sendMessage(message) {
        this.output.send(message);
      }
    }, {
      key: "setInstrument",
      value: function setInstrument(programNumber) {
        this.lastProgramNumber = +programNumber;
        this.output.send([(12 << 4) + this.channel, programNumber]);
      }
    }, {
      key: "noteOn",
      value: function noteOn(pitch, velocity) {
        this.output.send([(9 << 4) + this.channel, pitch, velocity]);
      }
    }, {
      key: "noteOff",
      value: function noteOff(pitch) {
        this.output.send([(8 << 4) + this.channel, pitch, 0]);
      }
    }, {
      key: "getMetronome",
      value: function getMetronome() {
        return new Metronome(this.output);
      }
    }]);

    return MidiChannel;
  }(BaseOutputChannel);

  _exports.MidiChannel = MidiChannel;

  var Metronome = /*#__PURE__*/function (_MidiChannel) {
    _inherits(Metronome, _MidiChannel);

    var _super2 = _createSuper(Metronome);

    function Metronome(output) {
      _classCallCheck(this, Metronome);

      return _super2.call(this, output, 9);
    }

    _createClass(Metronome, [{
      key: "hit",
      value: function hit(n) {
        var _this5 = this;

        var v = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
        this.noteOn(n, v);
        setTimeout(function () {
          return _this5.noteOff(n);
        }, 10);
      }
    }, {
      key: "tick",
      value: function tick() {
        this.hit(75);
      }
    }, {
      key: "tock",
      value: function tock() {
        this.hit(76);
      }
    }, {
      key: "start",
      value: function start() {
        var _this6 = this;

        var bpm = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 60;

        if (this.running) {
          console.warn("Attempted to start already running metronome");
          return;
        }

        this.running = true;
        var signature = 4;
        var bps = bpm / 60;
        var beatDurationMs = 1 / bps * 1000;
        this.beatDurationMs = beatDurationMs;
        var beat = 0;

        var tick = function tick() {
          if (beat % signature == 0) {
            _this6.tick();
          } else {
            _this6.tock();
          }

          beat += 1;
        };

        var startTime = performance.now();
        this.currentTick = startTime;
        var epsilon = 5; // ms threshold

        var frameUpdate = function frameUpdate(time) {
          var delta = time - startTime;

          if (delta >= beatDurationMs - epsilon) {
            startTime += beatDurationMs;
            _this6.currentTick = startTime;
            tick();
          }

          if (_this6.running) {
            window.requestAnimationFrame(frameUpdate);
          }
        };

        window.requestAnimationFrame(frameUpdate);
        tick();
      }
    }, {
      key: "getLatency",
      value: function getLatency() {
        if (!this.running) {
          console.error("metronome not running");
          return;
        }

        var now = performance.now();
        var nextTick = this.currentTick + this.beatDurationMs;

        if (Math.abs(now - this.currentTick) < Math.abs(now - nextTick)) {
          return now - this.currentTick;
        } else {
          return now - nextTick;
        }
      }
    }, {
      key: "stop",
      value: function stop() {
        this.running = false;
      }
    }]);

    return Metronome;
  }(MidiChannel);

  _exports.Metronome = Metronome;
});

