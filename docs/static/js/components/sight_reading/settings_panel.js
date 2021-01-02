define("st/components/sight_reading/settings_panel", ["exports", "react", "lib", "st/components/slider", "st/components/select", "st/events", "st/generators", "st/music", "prop-types"], function (_exports, React, _lib, _slider, _select, _events, _generators, _music, types) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.GeneratorSettings = _exports.SettingsPanel = void 0;
  React = _interopRequireWildcard(React);
  _slider = _interopRequireDefault(_slider);
  _select = _interopRequireDefault(_select);
  types = _interopRequireWildcard(types);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

  var SettingsPanel = /*#__PURE__*/function (_React$Component) {
    _inherits(SettingsPanel, _React$Component);

    var _super = _createSuper(SettingsPanel);

    function SettingsPanel(props) {
      var _this;

      _classCallCheck(this, SettingsPanel);

      _this = _super.call(this, props);
      _this.state = {};
      return _this;
    }

    _createClass(SettingsPanel, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (N.enable_presets) {
          this.loadPresets();
        }
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("section", {
          className: "settings_panel"
        }, /*#__PURE__*/React.createElement("div", {
          className: "settings_header"
        }, /*#__PURE__*/React.createElement("button", {
          onClick: this.props.close
        }, "Close"), /*#__PURE__*/React.createElement("h3", null, "Settings")), this.renderPresets(), /*#__PURE__*/React.createElement("section", {
          className: "settings_group"
        }, /*#__PURE__*/React.createElement("h4", null, "Staff"), this.renderStaves(), this.renderStaffOptions()), /*#__PURE__*/React.createElement("section", {
          className: "settings_group"
        }, /*#__PURE__*/React.createElement("h4", null, "Generator"), this.renderGenerators()), this.renderGeneratorInputs(), /*#__PURE__*/React.createElement("section", {
          className: "settings_group"
        }, /*#__PURE__*/React.createElement("h4", null, "Key"), this.renderKeys()));
      }
    }, {
      key: "savePreset",
      value: function savePreset(e) {
        e.preventDefault();
        (0, _events.trigger)(this, "saveGeneratorPreset", this.refs.presetForm);
      }
    }, {
      key: "loadPresets",
      value: function loadPresets() {
        var _this2 = this;

        if (!N.session.currentUser) {
          return;
        }

        this.setState({
          loadingPresets: true
        });
        var request = new XMLHttpRequest();
        request.open("GET", "/presets.json");
        request.send();

        request.onload = function (e) {
          try {
            var res = JSON.parse(request.responseText);

            _this2.setState({
              loadingPresets: false,
              presets: res.presets
            });
          } catch (e) {
            _this2.setState({
              loadingPresets: false
            });
          }
        };
      }
    }, {
      key: "renderPresets",
      value: function renderPresets() {
        if (!N.enable_presets) {
          return;
        }

        if (!N.session.currentUser) {
          return;
        }

        var presetsPicker;

        if (this.state.presets && this.state.presets.length) {
          presetsPicker = /*#__PURE__*/React.createElement("div", {
            className: "presetsPicker"
          }, /*#__PURE__*/React.createElement(_select["default"], {
            name: "preset",
            options: this.state.presets.map(function (p) {
              return {
                name: p.name,
                value: p.name
              };
            })
          }));
        }

        return /*#__PURE__*/React.createElement("div", {
          className: "settings_group"
        }, presetsPicker, /*#__PURE__*/React.createElement("form", {
          onSubmit: this.savePreset.bind(this),
          ref: "presetForm"
        }, /*#__PURE__*/React.createElement("label", null, "Name", /*#__PURE__*/React.createElement("input", {
          type: "text",
          name: "name"
        })), /*#__PURE__*/React.createElement("button", {
          disabled: this.props.savePreset || false
        }, "Save preset")));
      }
    }, {
      key: "renderStaves",
      value: function renderStaves() {
        var _this3 = this;

        return this.props.staves.map(function (staff, i) {
          return /*#__PURE__*/React.createElement("button", {
            type: "button",
            key: staff.name,
            onClick: function onClick(e) {
              e.preventDefault();

              _this3.props.setStaff(staff);
            },
            className: (0, _lib.classNames)("toggle_option", {
              active: _this3.props.currentStaff == staff
            })
          }, staff.name);
        });
      }
    }, {
      key: "renderStaffOptions",
      value: function renderStaffOptions() {
        var _this4 = this;

        var showNotesLabel = this.props.staffOptions && this.props.staffOptions.showNotesLabel;
        return /*#__PURE__*/React.createElement("div", {
          className: "bool_row"
        }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
          type: "checkbox",
          defaultChecked: showNotesLabel,
          onChange: function onChange(e) {
            console.debug(e.target.checked);

            _this4.props.setStaffOptions({
              showNotesLabel: e.target.checked
            });
          }
        }), "Show notes label"));
      }
    }, {
      key: "renderGenerators",
      value: function renderGenerators() {
        var _this5 = this;

        return this.props.generators.map(function (generator, i) {
          if (generator.debug) {
            return;
          }

          if (generator.mode != _this5.props.currentStaff.mode) {
            return;
          }

          return /*#__PURE__*/React.createElement("button", {
            key: generator.name,
            onClick: function onClick(e) {
              e.preventDefault();

              _this5.props.setGenerator(generator, (0, _generators.fixGeneratorSettings)(generator, _this5.props.currentGeneratorSettings));
            },
            className: (0, _lib.classNames)("toggle_option", {
              active: _this5.props.currentGenerator == generator
            })
          }, generator.name);
        });
      }
    }, {
      key: "renderGeneratorInputs",
      value: function renderGeneratorInputs() {
        var g = this.props.currentGenerator;
        if (!g.inputs || !g.inputs.length) return;
        return /*#__PURE__*/React.createElement("div", {
          className: "settings_group"
        }, /*#__PURE__*/React.createElement(GeneratorSettings, {
          key: "".concat(g.name, "-").concat(g.mode),
          generator: g,
          currentKey: this.props.currentKey,
          currentStaff: this.props.currentStaff,
          currentSettings: this.props.currentGeneratorSettings,
          setGenerator: this.props.setGenerator
        }));
      }
    }, {
      key: "renderKeys",
      value: function renderKeys() {
        var _this6 = this;

        var keyButton = function keyButton(key) {
          return /*#__PURE__*/React.createElement("button", {
            onClick: function onClick(e) {
              _this6.props.setKeySignature(key);
            },
            className: (0, _lib.classNames)("toggle_option", {
              active: _this6.props.currentKey.name() == key.name()
            }),
            key: key.name()
          }, key.name());
        };

        return _music.KeySignature.allKeySignatures().concat([new _music.ChromaticKeySignature()]).map(function (key) {
          return keyButton(key);
        });
      }
    }]);

    return SettingsPanel;
  }(React.Component);

  _exports.SettingsPanel = SettingsPanel;

  _defineProperty(SettingsPanel, "propTypes", {
    close: types.func.isRequired,
    staves: types.array.isRequired,
    generators: types.array.isRequired,
    setStaff: types.func.isRequired,
    setGenerator: types.func.isRequired,
    setStaffOptions: types.func.isRequired,
    staffOptions: types.object
  });

  var GeneratorSettings = /*#__PURE__*/function (_React$PureComponent) {
    _inherits(GeneratorSettings, _React$PureComponent);

    var _super2 = _createSuper(GeneratorSettings);

    function GeneratorSettings() {
      _classCallCheck(this, GeneratorSettings);

      return _super2.apply(this, arguments);
    }

    _createClass(GeneratorSettings, [{
      key: "render",
      value: function render() {
        var _this7 = this;

        // calculate full settings with defaults
        this.cachedSettings = _objectSpread({}, (0, _generators.generatorDefaultSettings)(this.props.generator, this.props.currentStaff), {}, this.props.currentSettings);
        var inputs = this.props.generator.inputs;
        return /*#__PURE__*/React.createElement("div", {
          className: "generator_inputs"
        }, inputs.map(function (input, idx) {
          var fn;

          switch (input.type) {
            case "select":
              fn = _this7.renderSelect;
              break;

            case "range":
              fn = _this7.renderRange;
              break;

            case "noteRange":
              fn = _this7.renderNoteRange;
              break;

            case "note":
              fn = _this7.renderNote;
              break;

            case "bool":
              fn = _this7.renderBool;
              break;

            case "toggles":
              fn = _this7.renderToggles;
              break;

            default:
              console.error("No input renderer for ".concat(input.type));
              return;
          }

          var el = input.type == "toggles" ? "div" : "label";
          var inside = React.createElement.apply(React, [el, null].concat([/*#__PURE__*/React.createElement("div", {
            className: "input_label"
          }, input.label || input.name), fn.call(_this7, input, idx)]));
          return /*#__PURE__*/React.createElement("div", {
            key: input.name,
            className: "generator_input"
          }, inside);
        }));
      }
    }, {
      key: "updateInputValue",
      value: function updateInputValue(input, value) {
        this.props.setGenerator(this.props.generator, _objectSpread({}, this.props.currentSettings, _defineProperty({}, input.name, value)));
      }
    }, {
      key: "renderSelect",
      value: function renderSelect(input, idx) {
        var _this8 = this;

        var currentValue = this.cachedSettings[input.name];
        var options = input.values.map(function (input_val, input_val_idx) {
          return {
            name: input_val.name,
            value: input_val.name
          };
        });
        return /*#__PURE__*/React.createElement(_select["default"], {
          onChange: function onChange(value) {
            return _this8.updateInputValue(input, value);
          },
          value: currentValue,
          options: options
        });
      }
    }, {
      key: "renderNote",
      value: function renderNote(input, idx) {
        var _this9 = this;

        var currentValue = this.cachedSettings[input.name];
        var options = [];

        for (var i = input.max; i >= input.min; i--) {
          options.push((0, _music.noteName)(i));
        }

        return /*#__PURE__*/React.createElement("div", {
          className: "note_range_row"
        }, /*#__PURE__*/React.createElement("label", null, "Note", /*#__PURE__*/React.createElement(_select["default"], {
          onChange: function onChange(value) {
            _this9.updateInputValue(input, (0, _music.parseNote)(value));
          },
          value: (0, _music.noteName)(currentValue),
          options: options.map(function (name) {
            return {
              value: name,
              name: name
            };
          })
        })));
      }
    }, {
      key: "renderNoteRange",
      value: function renderNoteRange(input, idx) {
        var _this10 = this;

        var currentValue = this.cachedSettings[input.name];

        var _currentValue = _slicedToArray(currentValue, 2),
            min = _currentValue[0],
            max = _currentValue[1];

        var possibleMin = [];
        var possibleMax = [];
        var staffMin, staffMax;

        if (this.props.currentStaff) {
          var staff = this.props.currentStaff;
          staffMin = (0, _music.parseNote)(staff.range[0]);
          staffMax = (0, _music.parseNote)(staff.range[1]);
        }

        for (var i = input.max; i >= input.min; i--) {
          var iName = (0, _music.noteName)(i);

          if (i < staffMin) {
            continue;
          }

          if (i > staffMax) {
            continue;
          }

          if (i >= min) {
            possibleMax.push(iName);
          }

          if (i <= max) {
            possibleMin.push(iName);
          }
        }

        return /*#__PURE__*/React.createElement("div", {
          className: "note_range_row"
        }, /*#__PURE__*/React.createElement("label", null, "Min", /*#__PURE__*/React.createElement(_select["default"], {
          onChange: function onChange(value) {
            _this10.updateInputValue(input, [(0, _music.parseNote)(value), currentValue[1]]);
          },
          value: (0, _music.noteName)(currentValue[0]),
          options: possibleMin.map(function (name) {
            return {
              value: name,
              name: (0, _music.fixNoteOctaveNum)(name)
            };
          })
        })), /*#__PURE__*/React.createElement("label", null, "Max", /*#__PURE__*/React.createElement(_select["default"], {
          onChange: function onChange(value) {
            _this10.updateInputValue(input, [currentValue[0], (0, _music.parseNote)(value)]);
          },
          value: (0, _music.noteName)(currentValue[1]),
          options: possibleMax.map(function (name) {
            return {
              value: name,
              name: (0, _music.fixNoteOctaveNum)(name)
            };
          })
        })));
      }
    }, {
      key: "renderRange",
      value: function renderRange(input, idx) {
        var _this11 = this;

        var currentValue = this.cachedSettings[input.name];
        return /*#__PURE__*/React.createElement("div", {
          className: "slider_row"
        }, /*#__PURE__*/React.createElement(_slider["default"], {
          min: input.min,
          max: input.max,
          onChange: function onChange(value) {
            return _this11.updateInputValue(input, value);
          },
          value: currentValue
        }), /*#__PURE__*/React.createElement("span", {
          className: "current_value"
        }, currentValue));
      }
    }, {
      key: "renderBool",
      value: function renderBool(input, idx) {
        var _this12 = this;

        var currentValue = !!this.cachedSettings[input.name];
        return /*#__PURE__*/React.createElement("div", {
          className: "bool_row"
        }, /*#__PURE__*/React.createElement("input", {
          type: "checkbox",
          checked: currentValue,
          onChange: function onChange(e) {
            return _this12.updateInputValue(input, e.target.checked);
          }
        }), input.hint);
      }
    }, {
      key: "renderToggles",
      value: function renderToggles(input, idx) {
        var _this13 = this;

        var currentValue = this.cachedSettings[input.name] || {};
        return /*#__PURE__*/React.createElement("div", {
          className: "toggles"
        }, input.options.map(function (subName) {
          return /*#__PURE__*/React.createElement("label", {
            className: "toggle",
            key: subName
          }, /*#__PURE__*/React.createElement("input", {
            onChange: function onChange(e) {
              return _this13.updateInputValue(input, _objectSpread({}, currentValue, _defineProperty({}, subName, e.target.checked)));
            },
            checked: currentValue[subName] || false,
            type: "checkbox"
          }), " ", subName);
        }));
      }
    }]);

    return GeneratorSettings;
  }(React.PureComponent);

  _exports.GeneratorSettings = GeneratorSettings;

  _defineProperty(GeneratorSettings, "propTypes", {
    generator: types.object.isRequired,
    currentSettings: types.object.isRequired,
    setGenerator: types.func.isRequired,
    currentKey: types.object.isRequired,
    currentStaff: types.object.isRequired
  });
});

