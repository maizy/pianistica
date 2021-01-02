define("st/slide_to_zero", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  // used to control animation outside of react
  var SlideToZero = /*#__PURE__*/function () {
    function SlideToZero() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, SlideToZero);

      this.value = 0;
      this.speed = opts.speed || 1; // 1 unit a second

      this.animating = false;

      this.onUpdate = opts.onUpdate || function () {};

      this.onStop = opts.onStop || function () {};

      this.onStart = opts.onStart || function () {};

      this.onLoop = opts.onLoop || function () {};

      if (opts.loopPhase) {
        this.looping = true;
        this.loopPhase = opts.loopPhase;
        this.add(opts.initialValue || this.loopPhase);
      }
    }

    _createClass(SlideToZero, [{
      key: "cancel",
      value: function cancel() {
        this.canceled = true;
      }
    }, {
      key: "add",
      value: function add(delta) {
        this.value += delta;
        this.checkAndStart();
      }
    }, {
      key: "checkAndStart",
      value: function checkAndStart() {
        var _this = this;

        if (this.animating || this.value == 0) {
          return;
        }

        var lastFrame = performance.now();
        this.animating = true;
        this.canceled = false;
        this.onStart();

        var frameUpdate = function frameUpdate(time) {
          var dt = (time - lastFrame) / 1000;
          lastFrame = time;

          if (_this.canceled) {
            _this.animating = false;
            return;
          }

          if (dt == 0) {
            return;
          }

          _this.value = _this.value - _this.speed * dt;

          if (_this.looping) {
            if (_this.value <= 0) {
              _this.value += _this.loopPhase;

              _this.onLoop();
            }
          } else {
            _this.value = Math.max(0, _this.value);
          }

          _this.onUpdate(_this.value);

          if (_this.value > 0) {
            window.requestAnimationFrame(frameUpdate);
          } else {
            _this.animating = false;

            _this.onStop();
          }
        };

        window.requestAnimationFrame(frameUpdate);
      }
    }]);

    return SlideToZero;
  }();

  _exports["default"] = SlideToZero;
});

