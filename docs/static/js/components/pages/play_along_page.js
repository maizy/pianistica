define("st/components/pages/play_along_page", ["exports", "react", "st/components/keyboard", "st/components/staff_song_notes", "st/components/slider", "st/components/position_field", "st/components/hotkeys", "st/components/draggable", "st/components/lightbox", "st/components/song_editor", "st/song_parser", "st/song_timer", "st/music", "st/midi", "st/events", "st/data", "st/note_stats", "st/globals", "lib", "st/components/icons", "prop-types", "st/auto_chords", "react-transition-group"], function (_exports, React, _keyboard, _staff_song_notes, _slider, _position_field, _hotkeys, _draggable, _lightbox, _song_editor, _song_parser, _song_timer, _music, _midi, _events, _data, _note_stats, _globals, _lib, _icons, types, _auto_chords, _reactTransitionGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);
  _keyboard = _interopRequireDefault(_keyboard);
  _staff_song_notes = _interopRequireDefault(_staff_song_notes);
  _slider = _interopRequireDefault(_slider);
  _position_field = _interopRequireDefault(_position_field);
  _hotkeys = _interopRequireDefault(_hotkeys);
  _draggable = _interopRequireDefault(_draggable);
  _lightbox = _interopRequireDefault(_lightbox);
  _song_editor = _interopRequireDefault(_song_editor);
  _song_parser = _interopRequireDefault(_song_parser);
  _song_timer = _interopRequireDefault(_song_timer);
  _note_stats = _interopRequireDefault(_note_stats);
  types = _interopRequireWildcard(types);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

  var TimeBar = /*#__PURE__*/React.createElement("div", {
    className: "time_bar"
  });
  var EmptySong = [];

  var SettingsPanel = /*#__PURE__*/function (_React$Component) {
    _inherits(SettingsPanel, _React$Component);

    var _super = _createSuper(SettingsPanel);

    function SettingsPanel(props) {
      var _this;

      _classCallCheck(this, SettingsPanel);

      _this = _super.call(this, props);

      _this.setMinChordSpacing = function (value) {
        return (0, _events.trigger)(_assertThisInitialized(_this), "setMinChordSpacing", value);
      };

      _this.setAutochordsRate = function (value) {
        return (0, _events.trigger)(_assertThisInitialized(_this), "setAutochordsRate", value);
      };

      return _this;
    }

    _createClass(SettingsPanel, [{
      key: "render",
      value: function render() {
        var chordMinSpacing = this.props.chordMinSpacing || 0;
        var autochordsRate = this.props.autochordsRate || 1;
        return /*#__PURE__*/React.createElement("section", {
          className: "settings_panel"
        }, /*#__PURE__*/React.createElement("div", {
          className: "settings_header"
        }, /*#__PURE__*/React.createElement("button", {
          onClick: this.props.close
        }, "Close"), /*#__PURE__*/React.createElement("h3", null, "Settings")), /*#__PURE__*/React.createElement("section", {
          className: "settings_group"
        }, /*#__PURE__*/React.createElement("h4", null, "Autochords"), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("div", {
          className: "input_label"
        }, "Note spacing"), /*#__PURE__*/React.createElement("div", {
          className: "slider_row"
        }, /*#__PURE__*/React.createElement(_slider["default"], {
          min: -5,
          max: 10,
          onChange: this.setMinChordSpacing,
          value: chordMinSpacing
        }), /*#__PURE__*/React.createElement("span", {
          className: "current_value"
        }, chordMinSpacing))), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("div", {
          className: "input_label"
        }, "Multiplier"), /*#__PURE__*/React.createElement("div", {
          className: "slider_row"
        }, /*#__PURE__*/React.createElement(_slider["default"], {
          min: 1,
          max: 4,
          onChange: this.setAutochordsRate,
          value: autochordsRate
        }), /*#__PURE__*/React.createElement("span", {
          className: "current_value"
        }, autochordsRate))), this.renderAutochords()));
      }
    }, {
      key: "renderAutochords",
      value: function renderAutochords() {
        var _this2 = this;

        return _auto_chords.AutoChords.allGenerators.map(function (type, idx) {
          var name = type.displayName;
          return /*#__PURE__*/React.createElement("button", {
            onClick: function onClick(e) {
              return (0, _events.trigger)(_this2, "setAutochords", idx);
            },
            className: (0, _lib.classNames)("toggle_option", {
              active: idx == _this2.props.autoChordType
            }),
            key: name
          }, name);
        });
      }
    }]);

    return SettingsPanel;
  }(React.Component);

  _defineProperty(SettingsPanel, "propTypes", {
    autoChordType: types.number.isRequired
  });

  var PlayAlongPage = /*#__PURE__*/function (_React$Component2) {
    _inherits(PlayAlongPage, _React$Component2);

    var _super2 = _createSuper(PlayAlongPage);

    function PlayAlongPage(props) {
      var _this3;

      _classCallCheck(this, PlayAlongPage);

      _this3 = _super2.call(this, props);
      _this3.songEditorRef = React.createRef();
      _this3.state = {
        heldNotes: {},
        // notes by name, for the keyboard
        heldSongNotes: {},
        bpm: 60,
        pixelsPerBeat: _staff_song_notes["default"].defaultPixelsPerBeat,
        loopLeft: 0,
        loopRight: 0,
        playNotes: true,
        metronomeMultiplier: 1.0,
        autoChordType: 0,
        enableEditor: _this3.props.editorOpen || false,
        enablePauseOnMiss: false,
        enabledTracks: {},
        metronome: props.midiOutput ? props.midiOutput.getMetronome() : null
      };
      _this3.stats = new _note_stats["default"](N.session.currentUser);

      _this3.resetHitNotes();

      _this3.midiInput = new _midi.MidiInput({
        sustainPedalEnabled: true,
        noteOn: function noteOn(note) {
          return _this3.pressNote(note);
        },
        noteOff: function noteOff(note) {
          return _this3.releaseNote(note);
        }
      });
      _this3.pressNote = _this3.pressNote.bind(_assertThisInitialized(_this3));
      _this3.releaseNote = _this3.releaseNote.bind(_assertThisInitialized(_this3));

      _this3.seekBpm = function (pos) {
        return _this3.state.songTimer.seek(pos);
      };

      _this3.keyMap = {
        " ": function _(e) {
          return _this3.togglePlay();
        },
        "esc": function esc(e) {
          if (!_this3.state.songTimer) return;

          if (_this3.state.songTimer.running) {
            _this3.state.songTimer.pause();
          } else {
            _this3.state.songTimer.reset(_this3.state.loopLeft || 0);
          }
        },
        "left": function left(e) {
          if (!_this3.state.songTimer) return;

          _this3.state.songTimer.scrub(-1);
        },
        "right": function right(e) {
          if (!_this3.state.songTimer) return;

          _this3.state.songTimer.scrub(1);
        }
      };
      return _this3;
    }

    _createClass(PlayAlongPage, [{
      key: "resetHitNotes",
      value: function resetHitNotes() {
        this.hitNotes = new Set();
      }
    }, {
      key: "getSetter",
      value: function getSetter(name) {
        var _this4 = this;

        if (!this.setters) {
          this.setters = {};
        }

        if (!this.setters[name]) {
          this.setters[name] = function (val) {
            return _this4.setState(_defineProperty({}, name, val));
          };
        }

        return this.setters[name];
      }
    }, {
      key: "getToggler",
      value: function getToggler(name) {
        var _this5 = this;

        if (!this.setters) {
          this.setters = {};
        }

        if (!this.setters[name]) {
          this.setters[name] = function (e) {
            return _this5.setState(_defineProperty({}, name, e.target.checked));
          };
        }

        return this.setters[name];
      }
    }, {
      key: "songParserParams",
      value: function songParserParams() {
        var autoChordIdx = this.state.autoChordType % _auto_chords.AutoChords.allGenerators.length;
        return {
          autoChords: _auto_chords.AutoChords.allGenerators[autoChordIdx],
          autoChordsSettings: {
            chordMinSpacing: this.state.chordMinSpacing,
            rate: this.state.autochordsRate
          }
        };
      } // re-render the song with new autochords

    }, {
      key: "refreshSong",
      value: function refreshSong() {
        var code = this.state.currentSongCode;

        try {
          var song = _song_parser["default"].load(code, this.songParserParams());

          this.setSong(song);
        } catch (e) {
          this.setState({
            songError: e.message
          });
          return;
        }
      }
    }, {
      key: "loadSong",
      value: function loadSong() {
        var _this6 = this;

        if (this.state.loading) {
          return;
        }

        this.setState({
          loading: true
        });
        var request = new XMLHttpRequest();
        var songId = this.props.match.params.song_id;

        if (!songId) {
          console.error("no song id to load");
        }

        request.open("GET", "/songs/".concat(songId, ".json"));

        request.onload = function (e) {
          try {
            var res = JSON.parse(request.responseText);

            _this6.setState({
              songModel: res.song,
              currentSongCode: res.song.song
            });

            _this6.stats.setTimerUrl("/songs/".concat(res.song.id, "/stats.json"));
          } catch (e) {
            _this6.setState({
              songError: "Failed to fetch song"
            });
          }
        };

        request.send();
      }
    }, {
      key: "setSong",
      value: function setSong(song) {
        var _this7 = this;

        var currentBeat = this.currentBeat;

        if (this.state.songTimer) {
          this.state.songTimer.reset();
        }

        this.setState({
          loading: false,
          songError: null,
          song: song,
          loopLeft: 0,
          loopRight: song.getStopInBeats(),
          songTimer: new _song_timer["default"]({
            onUpdate: this.updateBeat.bind(this),
            onNoteStart: this.onNoteStart.bind(this),
            onNoteStop: this.onNoteStop.bind(this),
            song: song
          })
        }, function () {
          // restore our position in the song (temporary while we edit)
          _this7.state.songTimer.beat = currentBeat || 0;

          _this7.updateBeat(currentBeat || 0);
        });
      }
    }, {
      key: "onNoteStart",
      value: function onNoteStart(note) {
        var _this8 = this;

        var noteStart = note.getStart();

        if (noteStart >= this.state.loopRight) {
          return;
        }

        if (noteStart < this.state.loopLeft) {
          return;
        }

        if (this.state.playNotes && this.props.midiOutput) {
          this.props.midiOutput.noteOn((0, _music.parseNote)(note.note), 100);
        }

        if (this.state.enablePauseOnMiss) {
          var currentSong = this.state.song;

          if (!this.hitNotes.has(note)) {
            window.setTimeout(function () {
              if (_this8.state.song != currentSong) {
                return;
              }

              if (!_this8.state.songTimer.running) {
                return;
              }

              if (_this8.hitNotes.has(note)) {
                return;
              }

              if (noteStart > _this8.currentBeat) {
                return;
              }

              _this8.state.songTimer.pause();

              _this8.state.songTimer.seek(noteStart);
            }, 100);
          }
        }
      }
    }, {
      key: "onNoteStop",
      value: function onNoteStop(note) {
        if (this.state.playNotes && this.props.midiOutput) {
          this.props.midiOutput.noteOff((0, _music.parseNote)(note.note), 100);
        }
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this9 = this;

        (0, _globals.setTitle)("Play along");
        this.updateBeat(0);

        if (!this.props.newSong) {
          this.loadSong();
        }

        (0, _events.dispatch)(this, {
          setMinChordSpacing: function setMinChordSpacing(e, value) {
            _this9.setState({
              chordMinSpacing: value
            }, function () {
              return _this9.refreshSong();
            });
          },
          setAutochordsRate: function setAutochordsRate(e, value) {
            _this9.setState({
              autochordsRate: value
            }, function () {
              return _this9.refreshSong();
            });
          },
          setAutochords: function setAutochords(e, t) {
            _this9.setState({
              autoChordType: t
            }, function () {
              return _this9.refreshSong();
            });
          }
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.state.songTimer) {
          this.state.songTimer.reset();
        }
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.midiOutput != this.props.midiOutput) {
          this.setState({
            metronome: nextProps.midiOutput ? nextProps.midiOutput.getMetronome() : null
          });
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        if (prevState.bpm != this.state.bpm) {
          if (this.state.songTimer) {
            this.state.songTimer.setBpm(this.state.bpm);
          }
        }

        if (prevState.currentSongCode != this.state.currentSongCode) {
          this.refreshSong();
        }
      }
    }, {
      key: "updateBeat",
      value: function updateBeat(beat) {
        var _this10 = this;

        if (this.state.song) {
          if (beat > this.state.loopRight) {
            this.resetHitNotes();
            this.state.songTimer.seek(this.state.loopLeft);
          }

          if (this.trackRefs) {
            this.trackRefs.forEach(function (r) {
              if (r.current) {
                r.current.setOffset(-beat * _this10.state.pixelsPerBeat + 100);
              }
            });
          }

          if (this.refs.staff) {
            // if the staff isn't on the page yet then it will render with correct
            // default?
            this.refs.staff.setOffset(-beat * this.state.pixelsPerBeat + 100);
          }
        }

        if (this.state.metronome) {
          var mm = this.state.metronomeMultiplier;
          var beatsMeasure = 4;

          if (this.state.song && this.state.song.metadata.beatsPerMeasure) {
            beatsMeasure = this.state.song.metadata.beatsPerMeasure;
          }

          if ("currentBeat" in this) {
            if (Math.floor(this.currentBeat * mm) < Math.floor(beat * mm)) {
              var m = Math.floor(beat * mm);

              if (m % beatsMeasure == 0) {
                this.state.metronome.tick();
              } else {
                this.state.metronome.tock();
              }
            }
          }
        }

        this.currentBeat = beat;
        this.refs.currentBeatField.setState({
          value: beat
        });
      }
    }, {
      key: "getTrackRef",
      value: function getTrackRef(idx) {
        if (!this.trackRefs) {
          this.trackRefs = [];
        }

        if (!this.trackRefs[idx]) {
          this.trackRefs[idx] = React.createRef();
        }

        return this.trackRefs[idx];
      }
    }, {
      key: "renderTracks",
      value: function renderTracks() {
        var _this11 = this;

        if (!this.state.song) {
          return null;
        }

        var keySignature = _music.KeySignature.forCount(0);

        if (this.state.song && this.state.song.metadata) {
          keySignature = _music.KeySignature.forCount(this.state.song.metadata.keySignature);
        }

        var renderedTracks = this.state.song.tracks.filter(function (t) {
          return !!t;
        }).map(function (track, idx) {
          var staff = track.fittingStaff();

          var staffType = _data.STAVES.find(function (s) {
            return s.name == staff;
          });

          if (!staffType) {
            return;
          }

          if (_this11.state.enabledTracks[idx] == false) {
            return;
          }

          var staffProps = {
            ref: _this11.getTrackRef(idx),
            key: "track-".concat(idx),
            notes: track,
            heldNotes: _this11.state.heldSongNotes,
            keySignature: keySignature,
            pixelsPerBeat: _this11.state.pixelsPerBeat,
            children: TimeBar,
            loopLeft: _this11.state.loopLeft,
            loopRight: _this11.state.loopRight
          };
          return staffType.render.call(_this11, staffProps);
        });

        if (!renderedTracks.find(function (t) {
          return !!t;
        })) {
          return /*#__PURE__*/React.createElement("div", {
            className: "empty_tracks"
          }, "No tracks to display");
        }

        return /*#__PURE__*/React.createElement(_draggable["default"], {
          onDrag: function onDrag(dx, dy) {
            _this11.state.songTimer.scrub(-dx / _this11.state.pixelsPerBeat);
          }
        }, renderedTracks);
      }
    }, {
      key: "render",
      value: function render() {
        var keySignature = _music.KeySignature.forCount(0);

        if (this.state.song && this.state.song.metadata) {
          keySignature = _music.KeySignature.forCount(this.state.song.metadata.keySignature);
        }

        var songError = null;

        if (this.state.songError) {
          songError = /*#__PURE__*/React.createElement("div", {
            className: "song_error"
          }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "There was an error loading the song: "), this.state.songError));
        }

        var renderedTracks = this.renderTracks();
        return /*#__PURE__*/React.createElement("div", {
          className: (0, _lib.classNames)("play_along_page", {
            has_song: !!renderedTracks
          })
        }, /*#__PURE__*/React.createElement(_reactTransitionGroup.TransitionGroup, null, this.renderSettings()), /*#__PURE__*/React.createElement("div", {
          className: (0, _lib.classNames)("play_along_workspace", {
            settings_open: this.state.settingsPanelOpen
          })
        }, this.state.songModel ? /*#__PURE__*/React.createElement("h2", null, this.state.songModel.title) : null, this.renderSongTrackTools(), /*#__PURE__*/React.createElement("div", {
          className: "staff_wrapper"
        }, songError, renderedTracks, this.renderTransportControls()), this.state.enableEditor ? this.renderEditor() : this.renderKeyboard()), /*#__PURE__*/React.createElement(_hotkeys["default"], {
          keyMap: this.keyMap
        }));
      }
    }, {
      key: "renderSongTrackTools",
      value: function renderSongTrackTools() {
        var _this12 = this;

        if (!this.state.song || !this.state.song.tracks) {
          return;
        }

        var tracks = this.state.song.tracks.filter(function (t) {
          return !!t;
        });

        if (tracks.length <= 1) {
          return;
        }

        return /*#__PURE__*/React.createElement("ul", {
          className: "song_tracks"
        }, tracks.map(function (t, idx) {
          var title = "Track ".concat(idx + 1);

          if (t.trackName) {
            title = t.trackName;
          }

          var trackEnabled = _this12.state.enabledTracks[idx];

          if (trackEnabled == undefined) {
            trackEnabled = true;
          }

          return /*#__PURE__*/React.createElement("li", {
            key: idx
          }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
            checked: trackEnabled,
            type: "checkbox",
            onChange: function onChange(e) {
              _this12.setState({
                enabledTracks: Object.assign({}, _this12.state.enabledTracks, _defineProperty({}, idx, e.target.checked))
              });
            }
          }), " ", title));
        }));
      }
    }, {
      key: "renderSettings",
      value: function renderSettings() {
        var _this13 = this;

        if (!this.state.settingsPanelOpen) {
          return;
        }

        return /*#__PURE__*/React.createElement(_reactTransitionGroup.CSSTransition, {
          classNames: "slide_right",
          timeout: {
            enter: 200,
            exit: 100
          }
        }, /*#__PURE__*/React.createElement(SettingsPanel, {
          autoChordType: this.state.autoChordType,
          chordMinSpacing: this.state.chordMinSpacing,
          autochordsRate: this.state.autochordsRate,
          close: function close() {
            return _this13.setState({
              settingsPanelOpen: !_this13.state.settingsPanelOpen
            });
          }
        }));
      }
    }, {
      key: "togglePlay",
      value: function togglePlay() {
        if (!this.state.songTimer) {
          return;
        }

        if (this.state.songTimer.running) {
          this.state.songTimer.pause();
        } else {
          this.resetHitNotes();
          this.state.songTimer.start(this.state.bpm);
        }

        this.forceUpdate();
      }
    }, {
      key: "pressNote",
      value: function pressNote(note) {
        if (!this.state.song) return;

        if (this.songEditorRef.current) {
          this.songEditorRef.current.pressNote(note);
          return;
        }

        if (!this.state.songTimer.running) {
          this.resetHitNotes();
          this.state.songTimer.start(this.state.bpm);
        }

        var songNoteIdx = this.state.song.matchNoteFast(note, this.currentBeat, this.state.loopRight, this.state.loopLeft);
        var songNote = this.state.song[songNoteIdx];
        var recordHit = false;

        if (songNote) {
          var accuracy = this.state.songTimer.beatsToSeconds(this.currentBeat - songNote.start);

          if (Math.abs(accuracy) < 1 && !this.hitNotes.has(songNote)) {
            this.hitNotes.add(songNote);
            recordHit = true;
          }
        }

        if (recordHit) {
          this.stats.hitNotes([songNote.note]);
        } else {
          if (songNote) {
            this.stats.missNotes([songNote.note]);
          } else {
            this.stats.missNotes([]);
          }
        }

        var heldNotes = _objectSpread({}, this.state.heldNotes, _defineProperty({}, note, {
          songNote: songNote
        }));

        var heldSongNotes = this.state.heldSongNotes;

        if (songNote) {
          heldSongNotes = _objectSpread({}, heldSongNotes, _defineProperty({}, songNote.id, songNote));
        }

        this.setState({
          heldNotes: heldNotes,
          heldSongNotes: heldSongNotes
        });
      }
    }, {
      key: "releaseNote",
      value: function releaseNote(note) {
        var held = this.state.heldNotes[note];
        if (!held) return; // song changed between press/relese

        var heldNotes = _objectSpread({}, this.state.heldNotes);

        delete heldNotes[note];
        var heldSongNotes = this.state.heldSongNotes;

        if (held.songNote) {
          heldSongNotes = _objectSpread({}, heldSongNotes);
          delete heldSongNotes[held.songNote.id];
        }

        this.setState({
          heldNotes: heldNotes,
          heldSongNotes: heldSongNotes
        });
      }
    }, {
      key: "onMidiMessage",
      value: function onMidiMessage(message) {
        this.midiInput.onMidiMessage(message);
      }
    }, {
      key: "renderKeyboard",
      value: function renderKeyboard() {
        return /*#__PURE__*/React.createElement(_keyboard["default"], {
          lower: "C4",
          upper: "C7",
          midiOutput: this.props.midiOutput,
          heldNotes: this.state.heldNotes,
          onKeyDown: this.pressNote,
          onKeyUp: this.releaseNote
        });
      }
    }, {
      key: "renderEditor",
      value: function renderEditor() {
        var _this14 = this;

        return /*#__PURE__*/React.createElement(_song_editor["default"], {
          parserParams: this.songParserParams(),
          ref: this.songEditorRef,
          songNotes: this.state.song,
          song: this.state.songModel,
          code: this.state.currentSongCode,
          onCode: function onCode(code) {
            return _this14.setState({
              currentSongCode: code
            });
          }
        });
      }
    }, {
      key: "renderTransportControls",
      value: function renderTransportControls() {
        var _this15 = this;

        var stop = 0;

        if (this.state.song) {
          stop = this.state.song.getStopInBeats();
        }

        return /*#__PURE__*/React.createElement("div", {
          className: "transport_controls"
        }, this.state.songTimer ? /*#__PURE__*/React.createElement("button", {
          type: "button",
          title: "Rewind to beginning",
          onClick: function onClick(e) {
            if (_this15.state.songTimer.running) {
              _this15.state.songTimer.pause();
            } else {
              _this15.state.songTimer.reset(_this15.state.loopLeft || 0);
            }
          }
        }, /*#__PURE__*/React.createElement(_icons.IconRewind, {
          width: 15
        })) : null, this.state.songTimer ? /*#__PURE__*/React.createElement("button", {
          className: "play_pause",
          type: "button",
          onClick: function onClick(e) {
            return _this15.togglePlay();
          }
        }, this.state.songTimer.running ? "Pause" : "Play") : null, /*#__PURE__*/React.createElement(_position_field["default"], {
          ref: "currentBeatField",
          min: 0,
          max: stop,
          value: this.currentBeat,
          onUpdate: this.seekBpm,
          title: "Play position (in beats)"
        }), /*#__PURE__*/React.createElement("input", {
          checked: this.state.enablePauseOnMiss || false,
          onChange: this.getToggler("enablePauseOnMiss"),
          title: "Automatically pause on miss",
          type: "checkbox"
        }), /*#__PURE__*/React.createElement("span", {
          className: "loop_controls"
        }, /*#__PURE__*/React.createElement("span", {
          className: "label_text"
        }, "Loop"), /*#__PURE__*/React.createElement(_position_field["default"], {
          ref: "loopLeft",
          min: 0,
          max: this.state.loopRight,
          resetValue: 0,
          value: this.state.loopLeft,
          title: "Loop left",
          onUpdate: this.getSetter("loopLeft")
        }), /*#__PURE__*/React.createElement(_position_field["default"], {
          ref: "loopRight",
          min: this.state.loopLeft,
          max: stop,
          resetValue: stop,
          value: this.state.loopRight,
          title: "Loop right",
          onUpdate: this.getSetter("loopRight")
        })), /*#__PURE__*/React.createElement("div", {
          className: "spacer"
        }), /*#__PURE__*/React.createElement(_position_field["default"], {
          min: 1,
          max: 10,
          title: "Metronome multiplier",
          value: this.state.metronomeMultiplier,
          onUpdate: this.getSetter("metronomeMultiplier")
        }), /*#__PURE__*/React.createElement("input", {
          checked: this.state.playNotes || false,
          onChange: function onChange(e) {
            _this15.state.songTimer.clearPlayingNotes();

            _this15.getToggler("playNotes")(e);
          },
          title: "Play notes to MIDI output",
          type: "checkbox"
        }), /*#__PURE__*/React.createElement("button", {
          onClick: function onClick(e) {
            return _this15.setState({
              enableEditor: !_this15.state.enableEditor
            });
          }
        }, "Editor"), /*#__PURE__*/React.createElement("button", {
          onClick: function onClick(e) {
            return _this15.setState({
              settingsPanelOpen: !_this15.state.settingsPanelOpen
            });
          }
        }, "Settings"), /*#__PURE__*/React.createElement("span", {
          className: "slider_input transport_slider"
        }, /*#__PURE__*/React.createElement("span", {
          className: "slider_label",
          title: "Beats per minute (how fast the songs plays)"
        }, "BPM"), /*#__PURE__*/React.createElement(_slider["default"], {
          min: 10,
          max: 300,
          onChange: this.getSetter("bpm"),
          value: +this.state.bpm
        }), /*#__PURE__*/React.createElement("span", {
          className: "slider_value"
        }, this.state.bpm)), /*#__PURE__*/React.createElement("span", {
          className: "slider_input transport_slider"
        }, /*#__PURE__*/React.createElement("span", {
          className: "slider_label",
          title: "Pixels per beat (how spaced out the notes are)"
        }, "PPB"), /*#__PURE__*/React.createElement(_slider["default"], {
          min: 50,
          max: 300,
          onChange: this.getSetter("pixelsPerBeat"),
          value: +this.state.pixelsPerBeat
        }), /*#__PURE__*/React.createElement("span", {
          className: "slider_value"
        }, this.state.pixelsPerBeat)));
      }
    }, {
      key: "midiOutputs",
      value: function midiOutputs() {
        if (!this.props.midi) return [];
        return _toConsumableArray(this.props.midi.outputs.values());
      }
    }]);

    return PlayAlongPage;
  }(React.Component);

  _exports["default"] = PlayAlongPage;
});

