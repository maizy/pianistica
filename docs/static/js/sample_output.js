define("st/sample_output", ["exports", "st/music", "lib", "st/midi"], function (_exports, _music, _lib, _midi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.SampleOutputMetronome = _exports.SampleOutput = void 0;

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

  var SampleOutput = /*#__PURE__*/function (_BaseOutputChannel) {
    _inherits(SampleOutput, _BaseOutputChannel);

    var _super = _createSuper(SampleOutput);

    _createClass(SampleOutput, null, [{
      key: "getInstance",
      value: function getInstance() {
        if (!this.instance) {
          this.instance = new SampleOutput();
        }

        return this.instance;
      }
    }]);

    function SampleOutput() {
      var _this;

      var instrumentName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "acoustic_grand_piano";

      _classCallCheck(this, SampleOutput);

      _this = _super.call(this);
      _this.loading = true;
      _this.currentlyPlaying = {};
      _this.promise = _lib.Soundfont.instrument(new AudioContext(), "/static/soundfonts/MusyngKite/".concat(instrumentName, "-mp3.js"));

      _this.promise.then(function (instrument) {
        _this.loading = false;
        _this.instrument = instrument;
      });

      return _this;
    }

    _createClass(SampleOutput, [{
      key: "sendMessage",
      value: function sendMessage(message) {
        var _this2 = this;

        if (!this.midiInput) {
          this.midiInput = new _midi.MidiInput({
            noteOn: function noteOn(note, v) {
              return _this2.noteOn((0, _music.parseNote)(note), v);
            },
            noteOff: function noteOff(note) {
              return _this2.noteOff((0, _music.parseNote)(note));
            }
          });
        }

        this.midiInput.onMidiMessage({
          data: message
        });
      }
    }, {
      key: "noteOn",
      value: function noteOn(pitch, velocity) {
        if (!this.instrument) {
          return;
        }

        var note = (0, _music.noteName)(pitch - 12);
        this.noteOff(pitch);

        if (velocity == 0) {
          return;
        }

        this.currentlyPlaying[pitch] = this.instrument.play(note, 0, {
          gain: velocity / 127
        });
      }
    }, {
      key: "noteOff",
      value: function noteOff(pitch) {
        var node = this.currentlyPlaying[pitch];

        if (node) {
          delete this.currentlyPlaying[pitch];
          node.stop();
        }
      }
    }, {
      key: "getMetronome",
      value: function getMetronome() {
        if (!this.metronome) {
          this.metronome = new SampleOutputMetronome();
        }

        return this.metronome;
      }
    }]);

    return SampleOutput;
  }(_midi.BaseOutputChannel);

  _exports.SampleOutput = SampleOutput;

  var SampleOutputMetronome = /*#__PURE__*/function (_SampleOutput) {
    _inherits(SampleOutputMetronome, _SampleOutput);

    var _super2 = _createSuper(SampleOutputMetronome);

    function SampleOutputMetronome() {
      _classCallCheck(this, SampleOutputMetronome);

      return _super2.call(this, "woodblock");
    }

    _createClass(SampleOutputMetronome, [{
      key: "tick",
      value: function tick() {
        this.noteOn((0, _music.parseNote)("G5"), 100);
      }
    }, {
      key: "tock",
      value: function tock() {
        this.noteOn((0, _music.parseNote)("C5"), 70);
      }
    }]);

    return SampleOutputMetronome;
  }(SampleOutput);

  _exports.SampleOutputMetronome = SampleOutputMetronome;
});

