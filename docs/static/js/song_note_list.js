define("st/song_note_list", ["exports", "st/music"], function (_exports, _music) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.SongNote = _exports.MultiTrackSong = _exports.SongNoteList = _exports.SongNoteTimer = void 0;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var SongNoteTimer = /*#__PURE__*/function () {
    function SongNoteTimer() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, SongNoteTimer);

      this.bpm = opts.bpm || 60;
      this.onTime = opts.onTime;
      this.onStop = opts.onStop;
      this.onStart = opts.onStart;
    }

    _createClass(SongNoteTimer, [{
      key: "getPromise",
      value: function getPromise() {
        return this.running;
      }
    }, {
      key: "start",
      value: function start() {
        var _this = this;

        if (this.running) {
          console.error("timer already running");
          return;
        }

        this.running = new Promise(function (resolve, reject) {
          _this.promiseResolve = resolve;
          _this.promiseReject = reject;
        });

        if (this.onStart) {
          this.onStart();
        }

        var startTime = performance.now();

        var frameUpdate = function frameUpdate(time) {
          var beat = (performance.now() - startTime) / 1000 / 60 * _this.bpm;

          if (_this.onTime) {
            _this.onTime(beat);
          }

          if (_this.running) {
            window.requestAnimationFrame(frameUpdate);
          }
        };

        window.requestAnimationFrame(frameUpdate);
      }
    }, {
      key: "stop",
      value: function stop(val) {
        if (!this.running) {
          console.error("timer not running");
          return;
        }

        if (this.onStop) {
          this.onStop();
        }

        this.promiseResolve(val || "stop");
        delete this.running;
        delete this.promiseResolve;
        delete this.promiseReject;
      }
    }]);

    return SongNoteTimer;
  }(); // like note list but notes in time


  _exports.SongNoteTimer = SongNoteTimer;

  var SongNoteList = /*#__PURE__*/function (_Array) {
    _inherits(SongNoteList, _Array);

    var _super = _createSuper(SongNoteList);

    // bucket size in beats
    function SongNoteList() {
      var _this2;

      _classCallCheck(this, SongNoteList);

      _this2 = _super.call(this);
      Object.setPrototypeOf(_assertThisInitialized(_this2), SongNoteList.prototype);
      return _this2;
    }

    _createClass(SongNoteList, [{
      key: "clone",
      value: function clone() {
        var song = new SongNoteList();
        this.forEach(function (note) {
          return song.push(note.clone());
        });
        return song;
      }
    }, {
      key: "clearCache",
      value: function clearCache() {
        delete this.buckets;
      }
    }, {
      key: "play",
      value: function play(midiOutput) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        // organize all notes by their start beat
        var currentIdx = 0;

        var notes = _toConsumableArray(this);

        notes.sort(function (a, b) {
          return a.start - b.start;
        });

        if (!notes.length) {
          return null;
        }

        var startBeat = notes[0].start;
        var playingNotes = [];
        var timer = new SongNoteTimer({
          bpm: opts.bpm,
          onStop: function onStop() {
            playingNotes.forEach(function (note) {
              return midiOutput.noteOff((0, _music.parseNote)(note.note));
            });
          },
          onTime: function onTime(beat) {
            beat = beat + startBeat; // start the melody immediately

            var haveFinished = false;

            var _iterator = _createForOfIteratorHelper(playingNotes),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _note = _step.value;

                if (beat >= _note.start + _note.duration) {
                  haveFinished = true;
                  break;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            if (haveFinished) {
              playingNotes = playingNotes.filter(function (note) {
                var finished = beat >= note.start + note.duration;

                if (finished) {
                  midiOutput.noteOff((0, _music.parseNote)(note.note));
                }

                return !finished;
              });
            }

            while (notes[currentIdx] && beat >= notes[currentIdx].start) {
              var note = notes[currentIdx];
              midiOutput.noteOn((0, _music.parseNote)(note.note), 100);
              playingNotes.push(note);
              currentIdx += 1;
            }

            if (currentIdx >= notes.length && playingNotes.length == 0) {
              timer.stop("finish");
            }
          }
        });
        timer.start();
        return timer;
      }
    }, {
      key: "transpose",
      value: function transpose() {
        var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

        if (amount == 0) {
          return this;
        }

        var song = new SongNoteList();
        this.forEach(function (note) {
          return song.push(note.transpose(amount));
        });
        return song;
      }
    }, {
      key: "humanize",
      value: function humanize() {
        var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        var song = this.clone();

        var _iterator2 = _createForOfIteratorHelper(song),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var note = _step2.value;
            note.start += Math.random() / 100 * amount;
            note.duration -= 0.2;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        return song;
      } // find the notes that fall in the time range

    }, {
      key: "notesInRange",
      value: function notesInRange(start, stop) {
        // TODO: this is slow
        return _toConsumableArray(this.filter(function (n) {
          return n.inRange(start, stop);
        }));
      }
    }, {
      key: "getStopInBeats",
      value: function getStopInBeats() {
        if (this.length == 0) {
          return 0;
        }

        return Math.max.apply(null, this.map(function (n) {
          return n.getStop();
        }));
      }
    }, {
      key: "getStartInBeats",
      value: function getStartInBeats() {
        if (this.length == 0) {
          return 0;
        }

        return Math.min.apply(null, this.map(function (n) {
          return n.getStart();
        }));
      }
    }, {
      key: "noteRange",
      value: function noteRange() {
        if (!this.length) {
          return;
        }

        var min = (0, _music.parseNote)(this[0].note);
        var max = min;

        var _iterator3 = _createForOfIteratorHelper(this),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var songNote = _step3.value;
            var pitch = (0, _music.parseNote)(songNote.note);

            if (pitch < min) {
              min = pitch;
            }

            if (pitch > max) {
              max = pitch;
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        return [(0, _music.noteName)(min), (0, _music.noteName)(max)];
      }
    }, {
      key: "fittingStaff",
      value: function fittingStaff() {
        if (this.cleffs && this.cleffs.length == 1) {
          var firstNote = this[0]; // it is at the start

          if (!firstNote || firstNote.getStart() >= this.cleffs[0][0]) {
            // return the staff that was assigned
            switch (this.cleffs[0][1]) {
              case "f":
                return "bass";

              case "g":
                return "treble";
            }
          }
        }

        var _this$noteRange = this.noteRange(),
            _this$noteRange2 = _slicedToArray(_this$noteRange, 2),
            min = _this$noteRange2[0],
            max = _this$noteRange2[1];

        var useBase = false;
        var useTreble = false;

        if ((0, _music.parseNote)(max) > _music.MIDDLE_C_PITCH + 4) {
          useTreble = true;
        }

        if ((0, _music.parseNote)(min) < _music.MIDDLE_C_PITCH - 4) {
          useBase = true;
        }

        if (useTreble && useBase) {
          return "grand";
        } else if (useBase) {
          return "bass";
        } else {
          return "treble";
        }
      }
    }, {
      key: "getBucketRange",
      value: function getBucketRange(start, stop) {
        var bucketSize = SongNoteList.bucketSize;
        var left = Math.floor(start / bucketSize);
        var right = Math.ceil(stop / bucketSize);
        return [left, right];
      }
    }, {
      key: "buildBuckets",
      value: function buildBuckets() {
        var _this3 = this;

        var buckets = {};
        this.forEach(function (songNote, idx) {
          var _this3$getBucketRange = _this3.getBucketRange(songNote.getStart(), songNote.getStop()),
              _this3$getBucketRange2 = _slicedToArray(_this3$getBucketRange, 2),
              left = _this3$getBucketRange2[0],
              right = _this3$getBucketRange2[1];

          for (var i = left; i < right; i++) {
            if (!buckets[i]) buckets[i] = [];
            buckets[i].push(idx);
          }
        });
        return buckets;
      } // get the buckets to scan to match notes for beat

    }, {
      key: "adjacentBuckets",
      value: function adjacentBuckets(beat) {
        return this.getBucketRange(beat - 1, beat + 1);
      }
    }, {
      key: "getBuckets",
      value: function getBuckets() {
        if (!this.buckets) {
          this.buckets = this.buildBuckets();
        }

        return this.buckets;
      }
    }, {
      key: "matchNoteFast",
      value: function matchNoteFast(findNote, beat, wrapRight, wrapLeft) {
        var buckets = this.getBuckets();

        var _this$adjacentBuckets = this.adjacentBuckets(beat),
            _this$adjacentBuckets2 = _slicedToArray(_this$adjacentBuckets, 2),
            left = _this$adjacentBuckets2[0],
            right = _this$adjacentBuckets2[1];

        var foundIdx = null;

        for (var bucketIdx = left; bucketIdx < right; bucketIdx++) {
          var bucket = buckets[bucketIdx];
          if (!bucket) continue;

          var _iterator4 = _createForOfIteratorHelper(bucket),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var songNoteIdx = _step4.value;
              var note = this[songNoteIdx];

              if (foundIdx == songNoteIdx) {
                continue;
              }

              if ((0, _music.parseNote)(note.note) != (0, _music.parseNote)(findNote)) {
                continue;
              }

              if (foundIdx != null) {
                var found = this[foundIdx];

                if (Math.abs(found.start - beat) > Math.abs(note.start - beat)) {
                  foundIdx = songNoteIdx;
                }
              } else {
                foundIdx = songNoteIdx;
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }

        if (wrapRight) {
          var delta = wrapRight - beat;

          if (delta < 2) {
            var wrapFoundIdx = this.matchNoteFast(findNote, wrapLeft - delta);

            if (wrapFoundIdx != null) {
              var _found = this[wrapFoundIdx];

              if (foundIdx != null) {
                var current = this[foundIdx];

                if (Math.abs(_found.start - (wrapLeft - delta)) < Math.abs(current.start - beat)) {
                  foundIdx = wrapFoundIdx;
                }
              } else {
                foundIdx = wrapFoundIdx;
              }
            }
          }
        }

        return foundIdx;
      } // see if we're hitting a valid note
      // TODO: this is very slow

    }, {
      key: "matchNote",
      value: function matchNote(findNote, beat) {
        var foundIdx = null;

        for (var idx = 0; idx < this.length; idx++) {
          var note = this[idx];

          if ((0, _music.parseNote)(note.note) != (0, _music.parseNote)(findNote)) {
            continue;
          }

          if (foundIdx != null) {
            var found = this[foundIdx];

            if (Math.abs(found.start - beat) > Math.abs(note.start - beat)) {
              foundIdx = idx;
            }
          } else {
            foundIdx = idx;
          }
        }

        return foundIdx;
      }
    }], [{
      key: "newSong",
      value: function newSong(noteTuples) {
        var notes = noteTuples.map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 3),
              note = _ref2[0],
              start = _ref2[1],
              duration = _ref2[2];

          return new SongNote(note, start, duration);
        });
        var song = new SongNoteList();

        var _iterator5 = _createForOfIteratorHelper(notes),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var note = _step5.value;
            song.push(note);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }

        return song;
      }
    }]);

    return SongNoteList;
  }( /*#__PURE__*/_wrapNativeSuper(Array));

  _exports.SongNoteList = SongNoteList;

  _defineProperty(SongNoteList, "bucketSize", 8);

  var MultiTrackSong = /*#__PURE__*/function (_SongNoteList) {
    _inherits(MultiTrackSong, _SongNoteList);

    var _super2 = _createSuper(MultiTrackSong);

    function MultiTrackSong() {
      var _this4;

      _classCallCheck(this, MultiTrackSong);

      _this4 = _super2.call(this);
      Object.setPrototypeOf(_assertThisInitialized(_this4), MultiTrackSong.prototype);
      _this4.tracks = [];
      return _this4;
    }

    _createClass(MultiTrackSong, [{
      key: "pushWithTrack",
      value: function pushWithTrack(note, trackIdx) {
        this.push(note);
        var track = this.getTrack(trackIdx);
        track.push(note);
        return note;
      } // find an empty track to put autochords in

    }, {
      key: "findEmptyTrackIdx",
      value: function findEmptyTrackIdx() {
        return this.tracks.length + 1;
      }
    }, {
      key: "getTrack",
      value: function getTrack(idx) {
        if (!this.tracks[idx]) {
          this.tracks[idx] = new SongNoteList();
        }

        return this.tracks[idx];
      }
    }]);

    return MultiTrackSong;
  }(SongNoteList); // note: C4, D#5, etc...
  // start: when note begings in beats
  // duration: how long note is in beats


  _exports.MultiTrackSong = MultiTrackSong;

  var SongNote = /*#__PURE__*/function () {
    function SongNote(note, start, duration) {
      _classCallCheck(this, SongNote);

      this.id = Symbol();
      this.note = note;
      this.start = start;
      this.duration = duration;
    }

    _createClass(SongNote, [{
      key: "clone",
      value: function clone() {
        return new SongNote(this.note, this.start, this.duration);
      }
    }, {
      key: "inRange",
      value: function inRange(min, max) {
        var stop = this.start + this.duration;

        if (min >= stop) {
          return false;
        }

        if (max <= this.start) {
          return false;
        }

        return true;
      }
    }, {
      key: "transpose",
      value: function transpose(semitones) {
        return new SongNote((0, _music.noteName)((0, _music.parseNote)(this.note) + semitones), this.start, this.duration);
      }
    }, {
      key: "getStart",
      value: function getStart() {
        return this.start;
      }
    }, {
      key: "getStop",
      value: function getStop() {
        return this.start + this.duration;
      }
    }, {
      key: "getRenderStop",
      value: function getRenderStop() {
        return this.start + this.duration;
      }
    }, {
      key: "toString",
      value: function toString() {
        return "".concat(this.note, ",").concat(this.start, ",").concat(this.duration);
      }
    }]);

    return SongNote;
  }();

  _exports.SongNote = SongNote;
});

