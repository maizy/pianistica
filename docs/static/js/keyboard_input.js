define("st/keyboard_input", ["exports", "st/music"], function (_exports, _music) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.keyCodeToChar = keyCodeToChar;
  _exports.noteForKey = noteForKey;
  _exports.SYMBOL_MAP_INVERSE = _exports.SYMBOL_MAP = _exports.KEYBOARD_MAP = void 0;
  // based off mapping here
  // http://tutorials.renoise.com/w//images/d/d6/2.8_renoisekeyboard.png
  // letter, and number of halfsteps from root
  var KEYBOARD_MAP = {
    // octave 1
    "z": 0,
    "s": 1,
    "x": 2,
    "d": 3,
    "c": 4,
    "v": 5,
    "g": 6,
    "b": 7,
    "h": 8,
    "n": 9,
    "j": 10,
    "m": 11,
    // octave 2
    ",": 12 + 0,
    "l": 12 + 1,
    ".": 12 + 2,
    ";": 12 + 3,
    "/": 12 + 4,
    "q": 12 + 0,
    "2": 12 + 1,
    "w": 12 + 2,
    "3": 12 + 3,
    "e": 12 + 4,
    "r": 12 + 5,
    "5": 12 + 6,
    "t": 12 + 7,
    "6": 12 + 8,
    "y": 12 + 9,
    "7": 12 + 10,
    "u": 12 + 11,
    // octave 3
    "i": 12 * 2 + 0,
    "9": 12 * 2 + 1,
    "o": 12 * 2 + 2,
    "0": 12 * 2 + 3,
    "p": 12 * 2 + 4,
    "[": 12 * 2 + 5,
    "=": 12 * 2 + 6,
    "]": 12 * 2 + 7
  };
  _exports.KEYBOARD_MAP = KEYBOARD_MAP;
  var SYMBOL_MAP = {
    106: "*",
    107: "+",
    109: "-",
    110: ".",
    111: "/",
    186: ";",
    187: "=",
    188: ",",
    189: "-",
    190: ".",
    191: "/",
    192: "`",
    219: "[",
    220: "\\",
    221: "]",
    222: "'",
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    27: "esc"
  };
  _exports.SYMBOL_MAP = SYMBOL_MAP;
  var SYMBOL_MAP_INVERSE = {};
  _exports.SYMBOL_MAP_INVERSE = SYMBOL_MAP_INVERSE;

  for (var key in SYMBOL_MAP) {
    SYMBOL_MAP_INVERSE[SYMBOL_MAP[key]] = key;
  }

  function keyCodeToChar(keyCode) {
    var symbol = SYMBOL_MAP[keyCode];

    if (symbol) {
      return symbol;
    }

    if (keyCode >= 32 || keyCode < 127) {
      var chr = String.fromCharCode(keyCode).toLowerCase();

      if (SYMBOL_MAP_INVERSE[chr]) {
        return; // invalid symbol
      }

      return chr;
    }
  }

  function noteForKey(root, key) {
    var offset = KEYBOARD_MAP[key];

    if (offset === undefined) {
      return;
    }

    return (0, _music.noteName)((0, _music.parseNote)(root) + offset);
  }
});

