define("st/components/ear_training/melody_recognition_exercise", ["exports", "react", "lib", "prop-types", "st/song_note_list", "st/components/slider", "st/components/select", "st/music", "st/song_parser", "st/browser", "st/components/icons", "st/globals"], function (_exports, React, _lib, types, _song_note_list, _slider, _select, _music, _song_parser, _browser, _icons, _globals) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);
  types = _interopRequireWildcard(types);
  _slider = _interopRequireDefault(_slider);
  _select = _interopRequireDefault(_select);
  _song_parser = _interopRequireDefault(_song_parser);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

  var MelodyRecognitionExercise = /*#__PURE__*/function (_React$Component) {
    _inherits(MelodyRecognitionExercise, _React$Component);

    var _super = _createSuper(MelodyRecognitionExercise);

    _createClass(MelodyRecognitionExercise, null, [{
      key: "fetchMelody",
      value: function fetchMelody(name) {
        if (!this.melodyCache[name]) {
          this.melodyCache[name] = new Promise(function (resolve, reject) {
            var request = new XMLHttpRequest();
            request.open("GET", "/static/music/interval_melodies/".concat(name, ".lml?").concat(+new Date()));

            request.onerror = function () {
              return reject(request.statusText);
            };

            request.onload = function (e) {
              var songText = request.responseText;
              var song;

              try {
                song = _song_parser["default"].load(songText);
              } catch (e) {
                console.log(e);
                return reject("Failed to parse: ".concat(name));
              } // transpose to middle c


              var root = (0, _music.parseNote)(song[0].note);
              song = song.transpose(60 - root);
              resolve(song);
            };

            request.send();
          });
        }

        return this.melodyCache[name];
      }
    }]);

    function MelodyRecognitionExercise(props) {
      var _this;

      _classCallCheck(this, MelodyRecognitionExercise);

      _this = _super.call(this, props);
      _this.state = {
        loading: true,
        playbackBpm: 90,
        playbackTranspose: 0,
        enabledIntervals: {},
        rand: new _lib.MersenneTwister(),
        autoplayRandomizeRoot: true,
        autoplayIntervalOrder: "default"
      };
      return _this;
    }

    _createClass(MelodyRecognitionExercise, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        var loadingCount = 0;
        (0, _globals.setTitle)("Learn Intervals Ear Training Exercise");
        this.setState({
          loading: true
        });
        var melodySongs = {};
        var enabled = {};
        MelodyRecognitionExercise.melodies.forEach(function (m) {
          loadingCount += 1;
          MelodyRecognitionExercise.fetchMelody(m.song).then(function (song) {
            loadingCount -= 1;
            melodySongs[m.song] = song;
            enabled["".concat(m.interval, "-").concat(m.direction)] = true;

            if (loadingCount == 0) {
              _this2.setState({
                loading: false,
                melodySongs: melodySongs,
                enabledIntervals: enabled
              });
            }
          })["catch"](function (e) {
            return console.warn(e);
          });
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.state.playingTimer) {
          this.state.playingTimer.stop();
        }

        if (this.state.autoplayTimer) {
          this.state.autoplayTimer.stop();
        }

        if (this.nosleep && this.nosleepEnabled) {
          this.nosleep.disable();
          this.nosleepEnabled = false;
        }
      }
    }, {
      key: "nextMelody",
      value: function nextMelody(fn) {
        var _this3 = this;

        var intervals = MelodyRecognitionExercise.melodies.filter(function (m) {
          return _this3.state.enabledIntervals["".concat(m.interval, "-").concat(m.direction)];
        });
        var interval = intervals[this.state.rand["int"]() % intervals.length];
        this.setState({
          currentMelody: interval
        }, fn);
      }
    }, {
      key: "playCurrentRoot",
      value: function playCurrentRoot() {
        var current = this.state.currentMelody;

        if (!current) {
          return;
        }

        var song = this.state.melodySongs[current.song];
        var first = new _song_note_list.SongNoteList();
        var note = song[0].clone();
        note.duration = 1;
        first.push(note);
        return this.playSong(first);
      }
    }, {
      key: "playCurrentInterval",
      value: function playCurrentInterval() {
        var current = this.state.currentMelody;

        if (!current) {
          return;
        }

        var song = this.state.melodySongs[current.song];
        var first = new _song_note_list.SongNoteList();
        var note1 = song[0].clone();
        var note2 = song[1].clone();
        note1.duration = 1;
        note2.duration = 1;

        if (this.state.autoplayIntervalOrder == "reverse") {
          note1.start = 1;
          note2.start = 0;
        } else if (this.state.autoplayIntervalOrder == "harmonic") {
          note1.start = 0;
          note2.start = 0;
        } else {
          note1.start = 0;
          note2.start = 1;
        }

        first.push(note1);
        first.push(note2);
        return this.playSong(first);
      }
    }, {
      key: "playCurrentSong",
      value: function playCurrentSong() {
        var current = this.state.currentMelody;

        if (!current) {
          return;
        }

        return this.playSong(this.state.melodySongs[current.song]);
      }
    }, {
      key: "playSong",
      value: function playSong(song) {
        var _this4 = this;

        song = song.transpose(this.state.playbackTranspose);
        var timer = song.play(this.props.midiOutput, {
          bpm: this.state.playbackBpm
        });
        this.setState({
          playing: true,
          playingTimer: timer
        });
        timer.getPromise().then(function () {
          _this4.setState({
            playing: false,
            playingTimer: null
          });
        });
        return timer;
      }
    }, {
      key: "autoplayDelay",
      value: function autoplayDelay(time, fn) {
        var _this5 = this;

        var timer;
        var t = window.setTimeout(function () {
          if (_this5.state.autoplayTimer == timer) {
            _this5.setState({
              autoplayTimer: undefined
            });
          }

          fn();
        }, time);
        timer = {
          stop: function stop(reason) {
            window.clearTimeout(t);

            if (reason == "skip") {
              fn();
            }
          }
        };
        this.setState({
          autoplayTimer: timer
        });
      }
    }, {
      key: "autoplayNextInterval",
      value: function autoplayNextInterval() {
        var _this6 = this;

        if ((0, _browser.isMobile)() && !this.nosleepEnabled) {
          this.nosleep = this.nosleep || new _lib.NoSleep();
          this.nosleep.enable();
          this.nosleepEnabled = true;
        }

        if (this.state.autoplayRandomizeRoot) {
          this.setState({
            playbackTranspose: this.state.rand["int"]() % 36 - 18
          });
        }

        this.nextMelody(function () {
          var timer = _this6.playCurrentInterval();

          _this6.setState({
            autoplayTimer: timer,
            autoplayState: "playingInterval"
          });

          timer.getPromise().then(function (reason) {
            if (reason == "stop") {
              return;
            }

            _this6.autoplayDelay(2000, function () {
              var timer = _this6.playCurrentSong();

              _this6.setState({
                autoplayTimer: timer,
                autoplayState: "playingMelody"
              });

              timer.getPromise().then(function (reason) {
                if (reason == "stop") {
                  return;
                }

                _this6.autoplayDelay(2000, function () {
                  _this6.autoplayNextInterval();
                });
              });
            });
          });
        });
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("div", {
          className: "melody_recognition_exercise"
        }, /*#__PURE__*/React.createElement("div", {
          className: "exercise_header"
        }, this.props.toggleSidebarButton, /*#__PURE__*/React.createElement("h1", {
          className: "exercise_label"
        }, "Interval Recognition")), this.state.loading ? /*#__PURE__*/React.createElement("div", {
          className: "page_container"
        }, "Loading") : /*#__PURE__*/React.createElement("div", {
          className: "page_container"
        }, this.renderSongPlayer(), this.renderIntervalSettings(), this.renderAutoplayer()));
      }
    }, {
      key: "renderAutoplayer",
      value: function renderAutoplayer() {
        var _this7 = this;

        var skipButton;

        if (this.state.autoplayTimer) {
          skipButton = /*#__PURE__*/React.createElement("button", {
            onClick: function onClick(e) {
              _this7.state.autoplayTimer.stop("skip");
            }
          }, "Skip");
        }

        return /*#__PURE__*/React.createElement("section", {
          className: "auto_player"
        }, /*#__PURE__*/React.createElement("h3", null, "Autoplay Mode"), /*#__PURE__*/React.createElement("p", null, "Repeatedly plays a random interval, a pause, then the associated melody. No input required, listen along and try to identify the intervals."), /*#__PURE__*/React.createElement("fieldset", {
          className: "autoplay_options"
        }, /*#__PURE__*/React.createElement("legend", null, "Autoplay options"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
          checked: this.state.autoplayRandomizeRoot,
          onChange: function onChange(e) {
            _this7.setState({
              autoplayRandomizeRoot: e.target.checked
            });
          },
          type: "checkbox"
        }), /*#__PURE__*/React.createElement("span", {
          className: "input_label"
        }, "Randomly transpose"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", {
          className: "input_label"
        }, "Playback mode"), /*#__PURE__*/React.createElement(_select["default"], {
          value: this.state.autoplayIntervalOrder,
          onChange: function onChange(v) {
            return _this7.setState({
              autoplayIntervalOrder: v
            });
          },
          options: [{
            name: "In order",
            value: "default"
          }, {
            name: "Reverse",
            value: "reverse"
          }, {
            name: "Harmonic",
            value: "harmonic"
          }]
        }))))), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("button", {
          onClick: function onClick(e) {
            e.preventDefault();

            if (_this7.state.autoplayTimer) {
              _this7.state.autoplayTimer.stop();

              if (_this7.nosleep && _this7.nosleepEnabled) {
                _this7.nosleep.disable();

                _this7.nosleepEnabled = false;
              }

              _this7.setState({
                autoplayTimer: undefined,
                autoplayState: undefined
              });
            } else {
              _this7.autoplayNextInterval();
            }
          }
        }, this.state.autoplayTimer ? "Stop" : "Start autoplay"), " ", skipButton));
      }
    }, {
      key: "renderSongPlayer",
      value: function renderSongPlayer() {
        var _this8 = this;

        var current = this.state.currentMelody;
        var currentSongTools;

        if (current) {
          var currentSong = this.state.melodySongs[current.song];
          var stopSong;

          if (this.state.playingTimer && !this.state.autoplayTimer) {
            stopSong = /*#__PURE__*/React.createElement("button", {
              type: "button",
              onClick: function onClick(e) {
                return _this8.state.playingTimer.stop();
              }
            }, "Stop");
          }

          var firstNote = (0, _music.noteName)((0, _music.parseNote)(currentSong[0].note) + this.state.playbackTranspose);

          var _disabled = !!(this.state.playing || this.state.autoplayTimer);

          var title = "".concat(current.interval, " - ").concat(current.title, " (").concat(firstNote, ")");

          if (this.state.autoplayState == "playingInterval") {
            title = "Listen to interval...";
          }

          currentSongTools = /*#__PURE__*/React.createElement("div", {
            className: "current_song"
          }, /*#__PURE__*/React.createElement("div", {
            className: "song_title"
          }, title), /*#__PURE__*/React.createElement("div", {
            className: "song_controls"
          }, /*#__PURE__*/React.createElement("button", {
            disabled: _disabled,
            type: "button",
            onClick: function onClick(e) {
              _this8.playCurrentRoot();
            }
          }, "Play root"), /*#__PURE__*/React.createElement("button", {
            disabled: _disabled,
            type: "button",
            onClick: function onClick(e) {
              _this8.playCurrentInterval();
            }
          }, "Play interval"), /*#__PURE__*/React.createElement("button", {
            type: "button",
            disabled: _disabled,
            onClick: function onClick(e) {
              _this8.playCurrentSong();
            }
          }, "Play melody"), stopSong));
        } else {
          currentSongTools = /*#__PURE__*/React.createElement("div", {
            className: "current_song"
          }, "Press ", /*#__PURE__*/React.createElement("strong", null, "Next melody"), " to randomly pick a interval to practice");
        }

        var disabled = !!(this.state.playing || this.state.autoplayTimer);
        return /*#__PURE__*/React.createElement("div", {
          className: "song_selector"
        }, /*#__PURE__*/React.createElement("div", {
          className: "global_controls"
        }, /*#__PURE__*/React.createElement("button", {
          disabled: disabled,
          onClick: function onClick(e) {
            _this8.nextMelody();
          }
        }, "Next melody"), /*#__PURE__*/React.createElement("label", {
          className: "slider_group"
        }, /*#__PURE__*/React.createElement("span", null, "BPM"), /*#__PURE__*/React.createElement(_slider["default"], {
          min: 40,
          max: 160,
          onChange: function onChange(value) {
            _this8.setState({
              playbackBpm: value
            });
          },
          value: this.state.playbackBpm
        }), /*#__PURE__*/React.createElement("code", null, this.state.playbackBpm)), /*#__PURE__*/React.createElement("label", {
          className: "slider_group"
        }, /*#__PURE__*/React.createElement("span", null, "Transpose"), /*#__PURE__*/React.createElement(_slider["default"], {
          min: -24,
          max: 24,
          onChange: function onChange(value) {
            _this8.setState({
              playbackTranspose: value
            });
          },
          value: this.state.playbackTranspose
        }), /*#__PURE__*/React.createElement("code", null, this.state.playbackTranspose), /*#__PURE__*/React.createElement("button", {
          type: "button",
          title: "Randomize Transpose",
          onClick: function onClick(e) {
            return _this8.setState({
              playbackTranspose: _this8.state.rand["int"]() % 36 - 18
            });
          },
          className: "shuffle_button"
        }, /*#__PURE__*/React.createElement(_icons.IconShuffle, {
          width: 16,
          height: 16
        })))), currentSongTools);
      }
    }, {
      key: "renderIntervalSettings",
      value: function renderIntervalSettings() {
        var _this9 = this;

        var inputs = MelodyRecognitionExercise.melodies.map(function (m) {
          var key = "".concat(m.interval, "-").concat(m.direction);
          return /*#__PURE__*/React.createElement("li", {
            key: key,
            title: m.title
          }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
            type: "checkbox",
            onChange: function onChange(e) {
              _this9.setState({
                enabledIntervals: _objectSpread({}, _this9.state.enabledIntervals, _defineProperty({}, key, e.target.checked))
              });
            },
            checked: _this9.state.enabledIntervals[key] || false
          }), " ", /*#__PURE__*/React.createElement("span", {
            className: "label"
          }, m.interval, " ", m.name, " (", m.direction, ")")));
        });

        var enabledFiltered = function enabledFiltered(fn) {
          var keys = MelodyRecognitionExercise.melodies.filter(fn).map(function (m) {
            return "".concat(m.interval, "-").concat(m.direction);
          });
          var enabled = {};

          var _iterator = _createForOfIteratorHelper(keys),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var key = _step.value;
              enabled[key] = true;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return enabled;
        };

        var toggleAllButton = null; // if it's empty add a toggle all button

        if (Object.keys(this.state.enabledIntervals || {}).length == 0) {
          toggleAllButton = /*#__PURE__*/React.createElement("button", {
            type: "button",
            onClick: function onClick(e) {
              return _this9.setState({
                enabledIntervals: enabledFiltered(function (m) {
                  return true;
                })
              });
            }
          }, "All on");
        } else {
          toggleAllButton = /*#__PURE__*/React.createElement("button", {
            type: "button",
            onClick: function onClick(e) {
              return _this9.setState({
                enabledIntervals: {}
              });
            }
          }, "All off");
        }

        return /*#__PURE__*/React.createElement("section", {
          className: "interval_settings"
        }, /*#__PURE__*/React.createElement("fieldset", {
          className: "enabled_intervals"
        }, /*#__PURE__*/React.createElement("legend", null, "Intervals"), /*#__PURE__*/React.createElement("ul", null, inputs), /*#__PURE__*/React.createElement("div", {
          className: "button_toggles"
        }, toggleAllButton, " ", /*#__PURE__*/React.createElement("button", {
          type: "button",
          onClick: function onClick(e) {
            return _this9.setState({
              enabledIntervals: enabledFiltered(function (m) {
                return m.direction == "asc";
              })
            });
          }
        }, "All Ascending"), " ", /*#__PURE__*/React.createElement("button", {
          type: "button",
          onClick: function onClick(e) {
            return _this9.setState({
              enabledIntervals: enabledFiltered(function (m) {
                return m.direction == "desc";
              })
            });
          }
        }, "All Descending"))));
      }
    }]);

    return MelodyRecognitionExercise;
  }(React.Component);

  _exports["default"] = MelodyRecognitionExercise;

  _defineProperty(MelodyRecognitionExercise, "exerciseName", "Interval Melodies");

  _defineProperty(MelodyRecognitionExercise, "exerciseId", "melody_recognition");

  _defineProperty(MelodyRecognitionExercise, "melodies", [{
    interval: "m2",
    direction: "asc",
    song: "m2_asc",
    title: "Jaws"
  }, {
    interval: "m2",
    direction: "desc",
    song: "m2_desc",
    title: "Joy To The World"
  }, {
    interval: "M2",
    direction: "asc",
    song: "mm2_asc",
    title: "Silent Night"
  }, {
    interval: "M2",
    direction: "desc",
    song: "mm2_desc",
    title: "Mary Had A Little Lamb"
  }, {
    interval: "m3",
    direction: "asc",
    song: "m3_asc",
    title: "Greensleves"
  }, {
    interval: "m3",
    direction: "desc",
    song: "m3_desc",
    title: "Hey Jude"
  }, {
    interval: "M3",
    direction: "asc",
    song: "mm3_asc",
    title: "On When The Saints"
  }, {
    interval: "M3",
    direction: "desc",
    song: "mm3_desc",
    title: "Swing Low Sweet Chariot"
  }, {
    interval: "P4",
    direction: "asc",
    song: "pp4_asc",
    title: "Here Comes The Bride"
  }, {
    interval: "P4",
    direction: "desc",
    song: "pp4_desc",
    title: "I've Been Working On The Rail Road"
  }, {
    interval: "T",
    direction: "asc",
    song: "tt_asc",
    title: "The Simpsons"
  }, {
    interval: "P5",
    direction: "asc",
    song: "pp5_asc",
    title: "Star Wars"
  }, {
    interval: "P5",
    direction: "desc",
    song: "pp5_desc",
    title: "Flintstones"
  }, {
    interval: "m6",
    direction: "asc",
    song: "m6_asc",
    title: "Entertainer"
  }, {
    interval: "M6",
    direction: "asc",
    song: "mm6_asc",
    title: "NBC"
  }, {
    interval: "m7",
    direction: "asc",
    song: "m7_asc",
    title: "Star Trek"
  }, {
    interval: "M7",
    direction: "asc",
    song: "mm7_asc",
    title: "Take On Me"
  }, {
    interval: "P8",
    direction: "asc",
    song: "pp8_asc",
    title: "Somewhere Over The Rainbow"
  }, {
    interval: "P8",
    direction: "desc",
    song: "pp8_desc",
    title: "To Zanarkand"
  }]);

  _defineProperty(MelodyRecognitionExercise, "melodyCache", {});
});

