define("st/song_timer", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;

  function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  // this is used to play the play along page
  var SongTimer = /*#__PURE__*/function () {
    function SongTimer() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, SongTimer);

      this.beat = 0;
      this.running = false;
      this.song = opts.song;
      this.playingNotes = [];

      for (var _i = 0, _arr = ["onUpdate", "onNoteStart", "onNoteStop"]; _i < _arr.length; _i++) {
        var cb = _arr[_i];

        if (opts[cb]) {
          this[cb] = opts[cb];
        }
      }
    }

    _createClass(SongTimer, [{
      key: "getSortedSongNotes",
      value: function getSortedSongNotes() {
        if (!this.song) {
          console.warn("no song on timer");
          return;
        }

        if (!this.sortedSongNotes) {
          this.sortedSongNotes = _toConsumableArray(this.song);
          this.sortedSongNotes.sort(function (a, b) {
            return a.start - b.start;
          });
        }

        return this.sortedSongNotes;
      } // search offset start location for the given beat in sorted notes

    }, {
      key: "findSearchOffset",
      value: function findSearchOffset(beat) {
        var startAt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var sortedNotes = this.getSortedSongNotes();
        if (!sortedNotes) return;

        for (var i = startAt; i < sortedNotes.length; i++) {
          var note = sortedNotes[i];

          if (note.start >= beat) {
            return i;
          }
        }

        return 0;
      }
    }, {
      key: "onUpdate",
      value: function onUpdate(beat) {}
    }, {
      key: "onNoteStart",
      value: function onNoteStart(note) {}
    }, {
      key: "onNoteStop",
      value: function onNoteStop(note) {}
    }, {
      key: "beatsToSeconds",
      value: function beatsToSeconds(beats) {
        return beats / this.bpm * 60;
      }
    }, {
      key: "secondsToBeats",
      value: function secondsToBeats(sec) {
        return sec / 60 * this.bpm;
      }
    }, {
      key: "setBpm",
      value: function setBpm(bpm) {
        this.bpm = bpm;
      }
    }, {
      key: "pause",
      value: function pause() {
        this.running = false;
        delete this.frameUpdate;
        this.clearPlayingNotes();
      }
    }, {
      key: "reset",
      value: function reset() {
        var beat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        this.running = false;
        delete this.frameUpdate;
        this.clearPlayingNotes();
        this.beat = beat;
        this.onUpdate(this.beat);
      }
    }, {
      key: "scrub",
      value: function scrub(amount) {
        this.beat += amount;
        this.beat = Math.max(0, this.beat);
        this.clearPlayingNotes();
        this.onUpdate(this.beat);
      }
    }, {
      key: "restart",
      value: function restart() {
        this.seek(0);
      }
    }, {
      key: "seek",
      value: function seek(position) {
        this.beat = position;
        this.beat = Math.max(0, this.beat);
        this.clearPlayingNotes();
        this.onUpdate(this.beat);
      } // should be called whenever we stop or scrub

    }, {
      key: "clearPlayingNotes",
      value: function clearPlayingNotes() {
        if (this.playingNotes.length) {
          var _iterator = _createForOfIteratorHelper(this.playingNotes),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var note = _step.value;
              this.onNoteStop(note);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          this.playingNotes = [];
        }
      }
    }, {
      key: "start",
      value: function start() {
        var _this = this;

        var bpm = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 60;

        if (this.running) {
          console.warn("attempted to start timer while running again");
          return;
        }

        if (bpm) {
          this.bpm = bpm;
        }

        var lastFrame = performance.now();
        var lastBeat = this.beat;
        var searchOffset = this.findSearchOffset(this.beat);

        var frameUpdate = function frameUpdate(time) {
          var dt = (time - lastFrame) / 1000;
          lastFrame = time;

          if (!_this.running) {
            return;
          }

          if (dt == 0) {
            return;
          } // a new timer was started


          if (frameUpdate != _this.frameUpdate) {
            return;
          }

          if (lastBeat != _this.beat) {
            // there was a seek, update position
            searchOffset = _this.findSearchOffset(_this.beat);
          }

          _this.beat += _this.bpm * dt / 60;
          lastBeat = _this.beat; // see if any notes have stopped

          if (_this.song && _this.playingNotes.length) {
            var stopped = 0;

            for (var i = 0; i < _this.playingNotes.length; i++) {
              var note = _this.playingNotes[i];

              if (_this.beat >= note.start + note.duration) {
                _this.playingNotes[i] = null;
                stopped += 1;

                _this.onNoteStop(note);
              }
            }

            if (stopped > 0) {
              _this.playingNotes = _this.playingNotes.filter(function (n) {
                return n;
              });
            }
          } // see if any new notes have turned on


          if (searchOffset != null) {
            var sortedNotes = _this.getSortedSongNotes();

            for (var _i2 = searchOffset; _i2 < sortedNotes.length; _i2++) {
              var _note = sortedNotes[_i2];

              if (_note.start <= _this.beat) {
                searchOffset += 1;

                _this.playingNotes.push(_note);

                _this.onNoteStart(_note);
              }
            }
          }

          _this.onUpdate(_this.beat);

          window.requestAnimationFrame(frameUpdate);
        };

        this.running = true;
        this.frameUpdate = frameUpdate;
        window.requestAnimationFrame(frameUpdate);
      }
    }]);

    return SongTimer;
  }();

  _exports["default"] = SongTimer;
});

