define("st/components/pages/songs", ["exports", "react", "react-router-dom"], function (_exports, React, _reactRouterDom) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

  var SongCell = /*#__PURE__*/function (_React$PureComponent) {
    _inherits(SongCell, _React$PureComponent);

    var _super = _createSuper(SongCell);

    function SongCell() {
      _classCallCheck(this, SongCell);

      return _super.apply(this, arguments);
    }

    _createClass(SongCell, [{
      key: "render",
      value: function render() {
        var song = this.props.song;
        var publishStatus;
        var timePlayed;

        if (song.publish_status == "draft") {
          publishStatus = /*#__PURE__*/React.createElement("div", {
            className: "publish_status"
          }, "Draft");
        }

        if (song.current_user_time) {
          var minutes = song.current_user_time.time_spent / 60;
          timePlayed = /*#__PURE__*/React.createElement("div", {
            className: "time_played"
          }, "Played for ", minutes.toFixed(2).replace(/0+$/, "").replace(/\.$/, ""), " ", minutes == 1 ? "minute" : "minutes");
        }

        return /*#__PURE__*/React.createElement("div", {
          className: "song_cell"
        }, publishStatus, /*#__PURE__*/React.createElement("div", {
          className: "song_title"
        }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
          to: song.url
        }, song.title)), /*#__PURE__*/React.createElement("div", {
          className: "song_creator"
        }, song.user.name), timePlayed, /*#__PURE__*/React.createElement("div", {
          className: "song_stats"
        }, /*#__PURE__*/React.createElement("span", null, "Notes: ", song.notes_count), /*#__PURE__*/React.createElement("span", null, "Duration: ", song.beats_duration)));
      }
    }]);

    return SongCell;
  }(React.PureComponent);

  var SongsPage = /*#__PURE__*/function (_React$Component) {
    _inherits(SongsPage, _React$Component);

    var _super2 = _createSuper(SongsPage);

    function SongsPage(props) {
      var _this;

      _classCallCheck(this, SongsPage);

      _this = _super2.call(this, props);
      _this.state = {};
      return _this;
    }

    _createClass(SongsPage, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.refreshSongs();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.request) {
          this.request.abort();
          delete this.request;
        }
      }
    }, {
      key: "refreshSongs",
      value: function refreshSongs() {
        var _this2 = this;

        if (this.state.loading) {
          return;
        }

        this.setState({
          loading: true
        });
        var request = new XMLHttpRequest();
        var url = "/songs.json";

        if (this.props.filter) {
          url += "?filter=".concat(this.props.filter);
        }

        request.open("GET", url);
        request.send();

        request.onload = function (e) {
          delete _this2.request;

          try {
            var res = JSON.parse(request.responseText);
            console.log(res);

            _this2.setState({
              loading: false,
              songs: res.songs || [],
              mySongs: res.my_songs || []
            });
          } catch (e) {
            _this2.setState({
              loading: false,
              error_message: "Failed to fetch stats"
            });
          }
        };

        this.request = request;
      }
    }, {
      key: "renderSidebar",
      value: function renderSidebar() {
        return /*#__PURE__*/React.createElement("section", {
          className: "sidebar"
        }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
          to: "/new-song",
          className: "button new_song_button"
        }, "Create a new song"), /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
          exact: true,
          activeClassName: "active",
          to: "/play-along"
        }, "Overview")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(_reactRouterDom.NavLink, {
          exact: true,
          activeClassName: "active",
          to: "/play-along/recent"
        }, "Recently played")))));
      }
    }, {
      key: "renderMySongs",
      value: function renderMySongs() {
        if (!N.session.currentUser) {
          return null;
        }

        var songList;

        if (this.state.mySongs && this.state.mySongs.length) {
          songList = /*#__PURE__*/React.createElement("ul", {
            className: "song_cell_list"
          }, this.state.mySongs.map(function (song) {
            return /*#__PURE__*/React.createElement("li", {
              key: song.id
            }, /*#__PURE__*/React.createElement(SongCell, {
              song: song,
              key: song.id
            }));
          }));
        } else {
          songList = /*#__PURE__*/React.createElement("p", {
            className: "empty_message"
          }, "No results");
        }

        if (!songList) {
          songList = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Any songs you create or edit will show up here."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
            to: "/new-song",
            className: "button new_song_button"
          }, "Create a new song")));
        }

        return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", null, "My Songs"), songList);
      }
    }, {
      key: "renderOverview",
      value: function renderOverview() {
        if (!this.state.songs) {
          return /*#__PURE__*/React.createElement("div", {
            className: "page_container"
          }, "Loading...");
        }

        var songList;

        if (this.state.songs.length) {
          songList = /*#__PURE__*/React.createElement("ul", {
            className: "song_cell_list"
          }, this.state.songs.map(function (song) {
            return /*#__PURE__*/React.createElement("li", {
              key: song.id
            }, /*#__PURE__*/React.createElement(SongCell, {
              song: song,
              key: song.id
            }));
          }));
        } else {
          songList = /*#__PURE__*/React.createElement("p", {
            className: "empty_message"
          }, "No results");
        }

        return /*#__PURE__*/React.createElement("section", {
          className: "content_column"
        }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", null, "Songs"), songList), this.renderMySongs());
      }
    }, {
      key: "renderRecent",
      value: function renderRecent() {
        if (!this.state.songs) {
          return /*#__PURE__*/React.createElement("div", {
            className: "page_container"
          }, "Loading...");
        }

        var songList;

        if (this.state.songs.length) {
          songList = /*#__PURE__*/React.createElement("ul", {
            className: "song_cell_list"
          }, this.state.songs.map(function (song) {
            return /*#__PURE__*/React.createElement("li", {
              key: song.id
            }, /*#__PURE__*/React.createElement(SongCell, {
              song: song,
              key: song.id
            }));
          }));
        } else {
          songList = /*#__PURE__*/React.createElement("p", {
            className: "empty_message"
          }, "No results");
        }

        return /*#__PURE__*/React.createElement("section", {
          className: "content_column"
        }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", null, "Recently played"), songList));
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        return /*#__PURE__*/React.createElement("div", {
          className: "songs_page has_sidebar"
        }, this.renderSidebar(), /*#__PURE__*/React.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
          exact: true,
          path: "/play-along",
          render: function render() {
            return _this3.renderOverview();
          }
        }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
          exact: true,
          path: "/play-along/recent",
          render: function render() {
            return _this3.renderRecent();
          }
        }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, null, /*#__PURE__*/React.createElement("div", {
          className: "page_container"
        }, /*#__PURE__*/React.createElement("h2", null, "Not found"), /*#__PURE__*/React.createElement("p", null, "Invalid filter")))));
      }
    }]);

    return SongsPage;
  }(React.Component);

  _exports["default"] = SongsPage;
});

