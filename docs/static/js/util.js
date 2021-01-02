define("st/util", ["exports", "lib"], function (_exports, _lib) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.dithered = dithered;
  _exports.shuffled = shuffled;

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function dithered(array) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.5;
    var rand = arguments.length > 2 ? arguments[2] : undefined;

    if (!rand) {
      rand = new _lib.MersenneTwister();
    }

    var gn = function gn() {
      var sd = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var mean = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var x1, x2, w, y1, y2;

      for (;;) {
        x1 = 2 * rand.random() - 1;
        x2 = 2 * rand.random() - 1;
        w = Math.pow(x1, 2) + Math.pow(x2, 2);

        if (w < 1) {
          break;
        }
      }

      w = Math.sqrt(-2 * Math.log(w) / 2);
      y1 = x1 * w;
      y2 = x2 * w;
      return y1 * sd + mean;
    };

    var dither_score = function dither_score(rank, e) {
      return Math.log(rank) + gn(Math.log(e));
    };

    var scored = array.map(function (item, idx) {
      return [dither_score(idx + 1, e), item];
    });
    scored.sort(function (a, b) {
      var aScore = a[0];
      var bScore = b[0];

      if (aScore == bScore) {
        return 0;
      } else if (aScore < bScore) {
        return -1;
      } else {
        return 1;
      }
    });
    return scored.map(function (tuple) {
      return tuple[1];
    });
  }

  function shuffled(array, rand) {
    if (!rand) {
      rand = new _lib.MersenneTwister();
    }

    array = _toConsumableArray(array);

    for (var i = array.length - 1; i > 0; i--) {
      var j = rand["int"]() % (i + 1);
      var a = array[j];
      var b = array[i];
      array[i] = a;
      array[j] = b;
    }

    return array;
  }
});

