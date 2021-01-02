define("st/note_stats", ["exports", "st/globals"], function (_exports, _globals) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;

  function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var NoteStats = /*#__PURE__*/function () {
    function NoteStats(currentUser) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, NoteStats);

      this.currentUser = currentUser;
      this.noteHitStats = {};
      this.streak = 0;
      this.hits = 0;
      this.misses = 0;
      this.lastHitTime = undefined;
      this.averageHitTime = 0;
      this.resetBuffer();
    }

    _createClass(NoteStats, [{
      key: "resetBuffer",
      value: function resetBuffer() {
        this.buffer = {
          hits: 0,
          misses: 0
        };
      }
    }, {
      key: "setTimerUrl",
      value: function setTimerUrl(url) {
        this.flushTimer();
        this.timerUrl = url;
      }
    }, {
      key: "startTimer",
      value: function startTimer() {
        var _this = this;

        if (!this.timerUrl) {
          return;
        }

        this.lastActivity = +new Date();

        if (this.timerFlushTimeout) {
          return;
        }

        var timerStart = +new Date();
        this.timerFlushTimeout = setTimeout(function () {
          var now = +new Date();
          var activityTime = _this.lastActivity - timerStart;

          _this.flushTimer(activityTime);

          delete _this.timerFlushTimeout;
          var sinceLastActivity = now - _this.lastActivity;

          if (sinceLastActivity < NoteStats.TIMER_SIZE / 2) {
            _this.startTimer();
          }
        }, NoteStats.TIMER_SIZE);
      }
    }, {
      key: "hitNotes",
      value: function hitNotes(notes) {
        var _iterator = _createForOfIteratorHelper(notes),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _note = _step.value;
            this.incrementNote(_note, 1);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        var now = +new Date();
        this.startTimer();

        if (this.lastHitTime) {
          var timeTaken = now - this.lastHitTime;

          if (!this.isOutlierTime(timeTaken)) {
            this.averageHitTime = (this.averageHitTime * this.hits + timeTaken) / (this.hits + 1);

            var _iterator2 = _createForOfIteratorHelper(notes),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var note = _step2.value;
                var noteStats = this.noteHitStats[this.normalizeNote(note)];
                noteStats.averageHitTime = ((noteStats.averageHitTime || 0) * (noteStats.hits || 0) + timeTaken) / (noteStats.hits + 1);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        }

        this.lastHitTime = now;
        this.streak += 1;
        this.hits += 1;
        this.buffer.hits += 1;
        this.flushLater();
      }
    }, {
      key: "missNotes",
      value: function missNotes(notes) {
        var _iterator3 = _createForOfIteratorHelper(notes),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var note = _step3.value;
            this.incrementNote(note, -1);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        this.startTimer();
        this.streak = 0;
        this.misses += 1;
        this.buffer.misses += 1;
        this.flushLater();
      }
    }, {
      key: "incrementNote",
      value: function incrementNote(note, val) {
        note = this.normalizeNote(note);
        var stats = this.noteHitStats[note] = this.noteHitStats[note] || {};

        if (val > 0) {
          stats.hits = (stats.hits || 0) + val;
        } else if (val < 0) {
          stats.misses = (stats.misses || 0) - val;
        }
      }
    }, {
      key: "makeThrottle",
      value: function makeThrottle(fn, wait) {
        var _arguments = arguments;
        var timer = null;
        return function () {
          var args = _arguments;

          if (timer) {
            return;
          }

          timer = setTimeout(function () {
            timer = null;
            fn.apply(args);
          }, wait);
        };
      }
    }, {
      key: "flushLater",
      value: function flushLater() {
        var _this2 = this;

        if (!this.currentUser) {
          return;
        }

        this.flushLater = this.makeThrottle(this.flush.bind(this), 5000);
        window.addEventListener("beforeunload", function () {
          _this2.flush();
        });
        this.flushLater();
      }
    }, {
      key: "flush",
      value: function flush() {
        var d = new FormData();
        d.append("csrf_token", (0, _globals.csrfToken)());

        for (var key in this.buffer) {
          d.append(key, "" + this.buffer[key]);
        }

        var request = new XMLHttpRequest();
        request.open("POST", "/hits.json");
        request.send(d);
        this.resetBuffer();
      }
    }, {
      key: "flushTimer",
      value: function flushTimer(activityTime) {
        if (!this.timerUrl) {
          return;
        }

        var d = new FormData();
        d.append("csrf_token", (0, _globals.csrfToken)());
        var sendTime = NoteStats.TIMER_SIZE;

        if (activityTime < sendTime / 2) {
          sendTime = activityTime;
        }

        sendTime = Math.round(sendTime / 1000);

        if (sendTime < 2) {
          return;
        }

        d.append("time_spent", "".concat(sendTime));
        var request = new XMLHttpRequest();
        request.open("POST", this.timerUrl);
        request.send(d);
      }
    }, {
      key: "isOutlierTime",
      value: function isOutlierTime(timeTaken) {
        if (this.averageHitTime == 0) {
          return false;
        }

        return timeTaken > this.averageHitTime * 10 + 1000;
      }
    }, {
      key: "normalizeNote",
      value: function normalizeNote(note) {
        return note.replace(/\d+$/, "");
      }
    }]);

    return NoteStats;
  }();

  _exports["default"] = NoteStats;

  _defineProperty(NoteStats, "TIMER_SIZE", 30 * 1000);
});

