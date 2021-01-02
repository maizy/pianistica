define("st/components/flash_cards/note_math_exercise", ["exports", "st/keyboard_input", "st/components/flash_cards/common", "react", "lib", "st/util", "prop-types"], function (_exports, _keyboard_input, _common, React, _lib, _util, types) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);
  types = _interopRequireWildcard(types);

  var _class, _temp;

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

  var NoteMathExercise = /*#__PURE__*/function (_React$PureComponent) {
    _inherits(NoteMathExercise, _React$PureComponent);

    var _super = _createSuper(NoteMathExercise);

    _createClass(NoteMathExercise, null, [{
      key: "defaultSettings",
      value: function defaultSettings() {
        return {
          enabledRoots: {
            "D": true
          }
        };
      }
    }]);

    function NoteMathExercise(props) {
      var _this;

      _classCallCheck(this, NoteMathExercise);

      _this = _super.call(this, props);
      _this.state = {
        cardNumber: 0
      };
      _this.rand = new _lib.MersenneTwister();
      return _this;
    }

    _createClass(NoteMathExercise, [{
      key: "componentWillMount",
      value: function componentWillMount() {
        this.showNext(this.refreshCards());
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        this.upListener = function (event) {
          var key = (0, _keyboard_input.keyCodeToChar)(event.keyCode);

          if (key == null) {
            return;
          }

          if (!_this2.refs.cardOptions) {
            return;
          }

          if (key.match(/^\d$/)) {
            var option = +key - 1;
            var button = _this2.refs.cardOptions.children[option];

            if (button) {
              button.click();
            }
          } else {
            var _iterator = _createForOfIteratorHelper(_this2.refs.cardOptions.children),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _button = _step.value;

                if (_button.textContent == key.toUpperCase()) {
                  _button.click();
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        };

        window.addEventListener("keyup", this.upListener);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        window.removeEventListener("keyup", this.upListener);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (prevProps.settings != this.props.settings) {
          this.refreshCards(function () {
            _this3.showNext();
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var card = this.state.currentCard;
        var errorMessage = card ? null : /*#__PURE__*/React.createElement("strong", {
          className: "no_cards_error"
        }, "Please enable some cards from settings");
        return /*#__PURE__*/React.createElement("div", {
          className: "note_math_exercise flash_card_exercise"
        }, errorMessage, /*#__PURE__*/React.createElement(_common.CardHolder, null, this.renderCurrentCard()), this.renderCardOptions());
      }
    }, {
      key: "renderCurrentCard",
      value: function renderCurrentCard() {
        var card = this.state.currentCard;

        if (!card) {
          return;
        }

        return /*#__PURE__*/React.createElement("div", {
          key: this.state.cardNumber,
          className: "card_row"
        }, /*#__PURE__*/React.createElement("div", {
          className: (0, _lib.classNames)("flash_card", {
            errorshake: this.state.cardError
          })
        }, card.label));
      }
    }, {
      key: "renderCardOptions",
      value: function renderCardOptions() {
        var _this4 = this;

        var card = this.state.currentCard;

        if (!card) {
          return;
        }

        var options = card.options.map(function (a) {
          return /*#__PURE__*/React.createElement("button", {
            key: a,
            disabled: _this4.state.cardMistakes && _this4.state.cardMistakes[a],
            onClick: function onClick(e) {
              e.preventDefault();

              _this4.checkAnswer(a);
            }
          }, a);
        });
        return /*#__PURE__*/React.createElement("div", {
          className: "card_options",
          ref: "cardOptions"
        }, options);
      }
    }, {
      key: "normalizeScores",
      value: function normalizeScores() {
        var minScore = Math.min.apply(Math, _toConsumableArray(this.state.cards.map(function (c) {
          return c.score;
        })));
        minScore -= 1;

        if (minScore == 0) {
          return;
        }

        var _iterator2 = _createForOfIteratorHelper(this.state.cards),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var card = _step2.value;
            card.score -= minScore;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }, {
      key: "refreshCards",
      value: function refreshCards(fn) {
        var enabledRoots = this.props.settings.enabledRoots;
        var cards = [];
        var notes = this.constructor.notes;
        var offsets = [1, 2, 3, 4, 5, 6];
        var roots = [];

        for (var key in enabledRoots) {
          if (enabledRoots[key]) {
            var idx = notes.indexOf(key);

            if (idx >= 0) {
              roots.push(idx);
            }
          }
        }

        for (var _i = 0, _roots = roots; _i < _roots.length; _i++) {
          var rootIdx = _roots[_i];
          var note = notes[rootIdx];

          var _iterator3 = _createForOfIteratorHelper(offsets),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var offset = _step3.value;
              var answer = notes[(rootIdx + offset) % notes.length];
              cards.push({
                score: 1,
                label: "".concat(offset + 1, " of ").concat(note, " is"),
                answer: answer,
                options: notes
              });
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }

        this.setState({
          cardOrder: null,
          cards: cards
        }, fn);
        return cards;
      }
    }, {
      key: "showNext",
      value: function showNext() {
        var cards = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.cards;

        if (!cards) {
          this.setState({
            currentCard: null
          });
          return;
        }

        var cardOrder = this.state.cardOrder ? _toConsumableArray(this.state.cardOrder) : [];
        cardOrder = _toConsumableArray(cardOrder);

        if (cardOrder.length <= 1) {
          var moreCards = (0, _util.shuffled)(cards.map(function (_, idx) {
            return idx;
          }));

          if (moreCards[0] == cardOrder[cardOrder.length - 1]) {
            moreCards.reverse();
          }

          cardOrder = cardOrder.concat(moreCards);
        }

        console.log("pulling from", cardOrder);
        var nextCardIdx = cardOrder.shift();
        var chosenCard = cards[nextCardIdx];
        this.setState({
          cardMistakes: null,
          cardError: false,
          cardNumber: this.state.cardNumber + 1,
          currentCard: chosenCard,
          cardOrder: cardOrder
        });
      }
    }, {
      key: "checkAnswer",
      value: function checkAnswer(answer) {
        var _this5 = this;

        if (!this.state.currentCard) {
          return;
        }

        if (answer == this.state.currentCard.answer) {
          if (!this.state.cardMistakes) {
            this.state.currentCard.score += 1;
            this.normalizeScores();
          }

          this.showNext();
        } else {
          var card = this.state.currentCard;
          var cardNumber = this.state.cardNumber;

          if (!this.state.cardMistakes) {
            card.score -= 1;
            this.normalizeScores();
          }

          var mistakes = this.state.cardMistakes || {};
          mistakes[answer] = true;
          this.setState({
            cardMistakes: mistakes,
            cardError: true
          });
          window.setTimeout(function () {
            if (_this5.state.cardNumber == cardNumber) {
              _this5.setState({
                cardError: false
              });
            }
          }, 600);
        }
      }
    }]);

    return NoteMathExercise;
  }(React.PureComponent);

  _exports["default"] = NoteMathExercise;

  _defineProperty(NoteMathExercise, "exerciseName", "Note Math");

  _defineProperty(NoteMathExercise, "exerciseId", "note_math");

  _defineProperty(NoteMathExercise, "notes", ["C", "D", "E", "F", "G", "A", "B"]);

  _defineProperty(NoteMathExercise, "propTypes", {
    settings: types.object.isRequired
  });

  _defineProperty(NoteMathExercise, "ExerciseOptions", (_temp = _class = /*#__PURE__*/function (_React$PureComponent2) {
    _inherits(_class, _React$PureComponent2);

    var _super2 = _createSuper(_class);

    function _class() {
      _classCallCheck(this, _class);

      return _super2.apply(this, arguments);
    }

    _createClass(_class, [{
      key: "render",
      value: function render() {
        var _this6 = this;

        var notes = NoteMathExercise.notes;
        var settings = this.props.currentSettings;
        return /*#__PURE__*/React.createElement("section", {
          className: "settings_group"
        }, /*#__PURE__*/React.createElement("h4", null, "Root notes"), notes.map(function (note) {
          return /*#__PURE__*/React.createElement("label", {
            key: note,
            className: (0, _lib.classNames)("test_group", {
              selected: settings.enabledRoots[note]
            })
          }, /*#__PURE__*/React.createElement("input", {
            type: "checkbox",
            checked: settings.enabledRoots[note] || false,
            onChange: function onChange(e) {
              _this6.props.updateSettings(_objectSpread({}, settings, {
                enabledRoots: _objectSpread({}, settings.enabledRoots, _defineProperty({}, note, !settings.enabledRoots[note]))
              }));
            }
          }), note);
        }));
      }
    }]);

    return _class;
  }(React.PureComponent), _defineProperty(_class, "propTypes", {
    updateSettings: types.func.isRequired
  }), _temp));
});

