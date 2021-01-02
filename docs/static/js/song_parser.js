define("st/song_parser", ["exports", "st/song_parser_peg", "st/music", "st/song_note_list", "st/auto_chords"], function (_exports, _song_parser_peg, _music, _song_note_list, _auto_chords) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _song_parser_peg = _interopRequireDefault(_song_parser_peg);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  // tokens are separated by whitepace
  // a note is a5.1.2
  //   - 5 is the octave
  //   - 1 is the duration
  //   - 2 is the start
  //
  //   duration and start are optional
  //   duration defaults to 1 beat (or the current duration)
  //   start defauls to current cusor position
  var SongParser = /*#__PURE__*/function () {
    function SongParser() {
      _classCallCheck(this, SongParser);
    }

    _createClass(SongParser, [{
      key: "parse",
      // convert song text to ast
      value: function parse(songText) {
        return _song_parser_peg["default"].parse(songText);
      } // compile ast to song notes

    }, {
      key: "compile",
      value: function compile(ast, opts) {
        var state = {
          startPosition: 0,
          position: 0,
          beatsPerNote: 1,
          beatsPerMeasure: 4,
          timeScale: 1,
          keySignature: new _music.KeySignature(0),
          currentTrack: 0
        };
        var song = new _song_note_list.MultiTrackSong();
        this.compileCommands(ast, state, song);
        song.metadata = {
          keySignature: state.keySignature.count,
          beatsPerMeasure: state.beatsPerMeasure
        };

        if (song.autoChords) {
          var settings = opts ? opts.autoChordsSettings : {};

          if (opts && opts.autoChords) {
            new opts.autoChords(song, settings).addChords();
          } else {
            new _auto_chords.AutoChords.defaultChords(song, settings).addChords();
          }
        }

        return song;
      }
    }, {
      key: "compileCommands",
      value: function compileCommands(commands, state, song) {
        var _iterator = _createForOfIteratorHelper(commands),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var command = _step.value;
            var t = command[0];

            switch (t) {
              case "restoreStartPosition":
                {
                  state.position = state.startPosition;
                  break;
                }

              case "block":
                {
                  var _command = _slicedToArray(command, 2),
                      blockCommands = _command[1];

                  var blockState = {
                    startPosition: state.position
                  };
                  Object.setPrototypeOf(blockState, state);
                  this.compileCommands(blockCommands, blockState, song);
                  state.position = blockState.position;
                  break;
                }

              case "halfTime":
                {
                  state.timeScale *= 2;
                  break;
                }

              case "doubleTime":
                {
                  state.timeScale *= 0.5;
                  break;
                }

              case "tripleTime":
                {
                  state.timeScale *= 1 / 3;
                  break;
                }

              case "measure":
                {
                  var _command2 = _slicedToArray(command, 2),
                      measure = _command2[1];

                  state.position = measure * state.beatsPerMeasure;
                  break;
                }

              case "setTrack":
                {
                  var _command3 = _slicedToArray(command, 2),
                      track = _command3[1];

                  state.currentTrack = +track;
                  break;
                }

              case "cleff":
                {
                  var _command4 = _slicedToArray(command, 2),
                      cleff = _command4[1];

                  var _track = song.getTrack(state.currentTrack);

                  if (!_track.cleffs) {
                    _track.cleffs = [];
                  }

                  _track.cleffs.push([state.position, cleff]);

                  break;
                }

              case "note":
                {
                  var _command5 = _slicedToArray(command, 3),
                      name = _command5[1],
                      noteOpts = _command5[2];

                  var duration = state.beatsPerNote * state.timeScale;
                  var start = null;
                  var hasAccidental = false;

                  if (noteOpts) {
                    if (noteOpts.duration) {
                      duration *= noteOpts.duration;
                    }

                    start = noteOpts.start;

                    if (noteOpts.sharp) {
                      hasAccidental = true;
                      name = name.substr(0, 1) + "#" + name.substr(1);
                    } else if (noteOpts.flat) {
                      hasAccidental = true;
                      name = name.substr(0, 1) + "b" + name.substr(1);
                    } else if (noteOpts.natural) {
                      hasAccidental = true;
                    }
                  }

                  if (!hasAccidental) {
                    // apply default accidental
                    name = state.keySignature.unconvertNote(name);
                  }

                  if (!start) {
                    start = state.position;
                    state.position += duration;
                  }

                  song.pushWithTrack(new _song_note_list.SongNote(name, start, duration), state.currentTrack);
                  break;
                }

              case "rest":
                {
                  var _command6 = _slicedToArray(command, 2),
                      restTiming = _command6[1];

                  var _duration = state.beatsPerNote * state.timeScale;

                  if (restTiming) {
                    if (restTiming.start) {
                      break; // do nothing
                    }

                    if (restTiming.duration) {
                      _duration *= restTiming.duration;
                    }
                  }

                  state.position += _duration;
                  break;
                }

              case "keySignature":
                {
                  state.keySignature = new _music.KeySignature(+command[1]);
                  break;
                }

              case "timeSignature":
                {
                  var _command7 = _slicedToArray(command, 3),
                      perBeat = _command7[1],
                      noteValue = _command7[2];

                  state.beatsPerNote = 4 / noteValue;
                  state.beatsPerMeasure = state.beatsPerNote * perBeat;
                  break;
                }

              case "macro":
                {
                  var _command8 = _slicedToArray(command, 2),
                      macroName = _command8[1];

                  var chord = _auto_chords.AutoChords.coerceChord(macroName);

                  if (chord) {
                    if (!song.autoChords) {
                      song.autoChords = [];
                    }

                    song.autoChords.push([state.position, chord]);
                  }

                  break;
                }

              default:
                {
                  console.warn("Got unknown command when parsing song", command);
                }
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }], [{
      key: "load",
      value: function load(songText, opts) {
        var parser = new SongParser();
        var ast = parser.parse(songText);
        return parser.compile(ast, opts);
      }
    }]);

    return SongParser;
  }();

  _exports["default"] = SongParser;

  _defineProperty(SongParser, "peg", _song_parser_peg["default"]);
});

