define("st/components/song_editor", ["exports", "react", "st/song_parser", "st/events", "st/components/forms", "react-router-dom", "st/components/lightbox", "st/components/tabs", "st/components/select", "st/music", "st/config"], function (_exports, React, _song_parser, _events, _forms, _reactRouterDom, _lightbox, _tabs, _select, _music, _config) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);
  _song_parser = _interopRequireDefault(_song_parser);
  _lightbox = _interopRequireDefault(_lightbox);
  _tabs = _interopRequireDefault(_tabs);
  _select = _interopRequireDefault(_select);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

  var DeleteSongForm = React.memo(function DeleteSongForm(props) {
    var history = (0, _reactRouterDom.useHistory)();

    function afterSubmit(res) {
      props.lightbox.close();

      if (res.redirect_to) {
        history.push(res.redirect_to);
      }
    }

    return /*#__PURE__*/React.createElement(_forms.JsonForm, {
      method: "DELETE",
      action: props.action,
      afterSubmit: afterSubmit,
      className: "delete_song_form"
    }, /*#__PURE__*/React.createElement("p", null, "Are you sure you want to delete this song? You can't un-delete"), /*#__PURE__*/React.createElement("button", null, "Delete"));
  });

  var SongDetailsLightbox = /*#__PURE__*/function (_Lightbox) {
    _inherits(SongDetailsLightbox, _Lightbox);

    var _super = _createSuper(SongDetailsLightbox);

    function SongDetailsLightbox(opts) {
      var _this;

      _classCallCheck(this, SongDetailsLightbox);

      _this = _super.call(this, opts);
      _this.state = {
        tab: "details"
      };
      return _this;
    }

    _createClass(SongDetailsLightbox, [{
      key: "renderContent",
      value: function renderContent() {
        var _this2 = this;

        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", null, "More options"), /*#__PURE__*/React.createElement(_tabs["default"], {
          currentTab: this.state.tab,
          onChangeTab: function onChangeTab(t) {
            return _this2.setState({
              tab: t.name
            });
          },
          tabs: [{
            name: "details",
            label: "Details"
          }, {
            name: "delete",
            label: "Delete"
          }]
        }), this.renderCurrentTab());
      }
    }, {
      key: "renderCurrentTab",
      value: function renderCurrentTab() {
        switch (this.state.tab) {
          case "details":
            return this.renderDetails();

          case "delete":
            return /*#__PURE__*/React.createElement(DeleteSongForm, {
              lightbox: this,
              action: this.props.action
            });
        }
      }
    }, {
      key: "renderDetails",
      value: function renderDetails() {
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Created at: "), this.props.song.created_at), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Updated at: "), this.props.song.updated_at));
      }
    }]);

    return SongDetailsLightbox;
  }(_lightbox["default"]);

  var SongEditor = /*#__PURE__*/function (_React$Component) {
    _inherits(SongEditor, _React$Component);

    var _super2 = _createSuper(SongEditor);

    function SongEditor(props) {
      var _this3;

      _classCallCheck(this, SongEditor);

      _this3 = _super2.call(this, props);
      var song = _this3.props.song;
      _this3.notesCountInputRef = React.createRef();
      _this3.beatsLengthInputRef = React.createRef();
      _this3.codeInputRef = React.createRef();
      _this3.fieldUpdaters = {
        code: function code(e) {
          return _this3.updateCode(e.target.value);
        }
      };
      var initial = song;

      if (!song) {
        initial = (0, _config.readConfig)("wip:newSong"); // render the initial song

        if (initial) {
          window.setTimeout(function () {
            if (_this3.state.code == initial.code) {
              if (_this3.props.onCode) {
                _this3.props.onCode(initial.code);
              }
            }
          }, 0);
        }
      }

      _this3.state = {
        song: song,
        newSong: !song,
        loading: false,
        title: initial ? initial.title : "",
        code: _this3.props.code || (initial ? initial.code : null) || "",
        source: initial ? initial.source : "",
        album: initial ? initial.album : "",
        artist: initial ? initial.artist : "",
        publishStatus: initial ? initial.publish_status : undefined
      };
      return _this3;
    }

    _createClass(SongEditor, [{
      key: "updateCode",
      value: function updateCode(code, callback) {
        var update = {
          code: code
        };
        this.setState(update, callback);
        this.updateWip(update);

        if (this.props.onCode) {
          this.props.onCode(code);
        }
      }
    }, {
      key: "beforeSubmit",
      value: function beforeSubmit() {
        if (this.props.songNotes) {
          this.notesCountInputRef.current.value = this.props.songNotes.length;
          var duration = Math.max.apply(Math, _toConsumableArray(this.props.songNotes.map(function (n) {
            return n.getStop();
          })));
          this.beatsLengthInputRef.current.value = duration;
        }

        this.setState({
          errors: null
        });
      }
    }, {
      key: "afterSubmit",
      value: function afterSubmit(res) {
        if (res.errors) {
          this.setState({
            errors: res.errors
          });
        }

        if (res.song) {
          this.setState({
            newSong: false,
            song: res.song
          });
          (0, _config.writeConfig)("wip:newSong", undefined);
        }
      }
    }, {
      key: "updateWip",
      value: function updateWip(update) {
        if (!this.state.newSong) {
          return false;
        }

        var wip = (0, _config.readConfig)("wip:newSong") || {};
        wip = Object.assign({}, wip, update);
        (0, _config.writeConfig)("wip:newSong", wip);
        return true;
      }
    }, {
      key: "render",
      value: function render() {
        var _this4 = this;

        var action = "/songs.json";

        if (this.state.song && this.state.song.allowed_to_edit) {
          action = "/songs/".concat(this.state.song.id, ".json");
        }

        var errors;

        if (this.state.errors) {
          errors = /*#__PURE__*/React.createElement("ul", null, this.state.errors.map(function (e) {
            return /*#__PURE__*/React.createElement("li", {
              key: e
            }, e);
          }));
        }

        var moreButton, saveButton;

        if (this.state.song && this.state.song.allowed_to_edit) {
          moreButton = /*#__PURE__*/React.createElement("button", {
            onClick: function onClick(e) {
              (0, _events.trigger)(_this4, "showLightbox", /*#__PURE__*/React.createElement(SongDetailsLightbox, {
                action: action,
                song: _this4.state.song
              }));
            },
            type: "button",
            className: "outline"
          }, "More...");
        }

        if (this.state.song && !this.state.song.allowed_to_edit) {
          saveButton = /*#__PURE__*/React.createElement("button", null, "Save copy");
        } else if (this.state.song) {
          saveButton = /*#__PURE__*/React.createElement("button", null, "Save");
        } else {
          saveButton = /*#__PURE__*/React.createElement("button", null, "Save new song");
        }

        var originalSongIdInput;

        if (this.state.song && !this.state.song.allowed_to_edit) {
          originalSongIdInput = /*#__PURE__*/React.createElement("input", {
            type: "hidden",
            name: "song[original_song_id]",
            value: this.state.song.id
          });
        }

        var songVisibility;

        if (!this.state.song || this.state.song.allowed_to_edit) {
          songVisibility = /*#__PURE__*/React.createElement(_select["default"], {
            name: "song[publish_status]",
            value: this.state.publishStatus,
            onChange: function onChange(value) {
              _this4.setState({
                publishStatus: value
              });
            },
            options: [{
              value: "draft",
              name: "Unlisted"
            }, {
              value: "public",
              name: "Public"
            }]
          });
        }

        var hasAutochords = false;

        if (this.props.songNotes && this.props.songNotes.autoChords) {
          hasAutochords = true;
        }

        return /*#__PURE__*/React.createElement(_forms.JsonForm, {
          action: action,
          beforeSubmit: this.beforeSubmit.bind(this),
          afterSubmit: this.afterSubmit.bind(this),
          className: "song_editor"
        }, /*#__PURE__*/React.createElement("input", {
          type: "hidden",
          ref: this.notesCountInputRef,
          name: "song[notes_count]"
        }), /*#__PURE__*/React.createElement("input", {
          type: "hidden",
          ref: this.beatsLengthInputRef,
          name: "song[beats_duration]"
        }), /*#__PURE__*/React.createElement("input", {
          type: "hidden",
          value: hasAutochords ? "true" : "",
          name: "song[has_autochords]"
        }), originalSongIdInput, /*#__PURE__*/React.createElement("textarea", {
          ref: this.codeInputRef,
          placeholder: "Type some LML",
          disabled: this.state.loading,
          name: "song[song]",
          value: this.state.code,
          onChange: this.fieldUpdaters.code
        }), /*#__PURE__*/React.createElement("div", {
          className: "song_editor_tools"
        }, errors, this.textInput("Title", "title", {
          required: true
        }), this.textInput("Source", "source"), this.textInput("Artist", "artist"), this.textInput("Album", "album"), /*#__PURE__*/React.createElement("div", {
          className: "form_tools"
        }, saveButton, " ", songVisibility, " ", moreButton)));
      }
    }, {
      key: "textInput",
      value: function textInput(title, field) {
        var _this5 = this;

        var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        if (!this.fieldUpdaters[field]) {
          this.fieldUpdaters[field] = function (e) {
            var update = _defineProperty({}, field, e.target.value);

            _this5.setState(update);

            _this5.updateWip(update);
          };
        }

        return /*#__PURE__*/React.createElement(_forms.TextInputRow, {
          required: opts.required,
          disabled: this.state.loading,
          onChange: this.fieldUpdaters[field],
          value: this.state[field] || "",
          name: "song[".concat(field, "]")
        }, title);
      }
    }, {
      key: "pressNote",
      value: function pressNote(note) {
        var input = this.codeInputRef.current;

        if (!input) {
          return;
        }

        var code = this.state.code;
        var selectionStart = input.selectionStart;
        var selectionEnd = input.selectionEnd;
        var before = code.substring(0, input.selectionStart);
        var after = code.substring(input.selectionEnd, code.length);

        var keySignature = _music.KeySignature.forCount(0);

        if (this.props.songNotes && this.props.songNotes.metadata) {
          keySignature = _music.KeySignature.forCount(this.props.songNotes.metadata.keySignature || 0);
        }

        var _note$match = note.match(/([A-G])(#|b)?(\d+)/),
            _note$match2 = _slicedToArray(_note$match, 4),
            noteName = _note$match2[1],
            octave = _note$match2[3];

        var accidental = "";

        switch (keySignature.accidentalsForNote(note)) {
          case 0:
            {
              accidental = "=";
              break;
            }

          case 1:
            {
              accidental = "-";
              break;
            }

          case -1:
            {
              accidental = "+";
              break;
            }
        }

        var noteCode = noteName.toLowerCase() + accidental + octave;

        if (before && !before.match(/\s$/)) {
          noteCode = " " + noteCode;
        }

        if (after && !after.match(/^\s/)) {
          noteCode = noteCode + " ";
        }

        this.updateCode(before + noteCode + after, function () {
          // make the modification using execCommand to ensure undo works
          input.value = code;
          input.selectionStart = selectionStart;
          input.selectionEnd = selectionEnd;
          input.focus();
          document.execCommand("insertText", false, noteCode);
        });
      }
    }]);

    return SongEditor;
  }(React.Component);

  _exports["default"] = SongEditor;
});

