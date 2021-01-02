function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

define("st/main", ["exports", "st/components/app", "react-dom", "react"], function (_exports, _app, ReactDOM, React) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.init = init;
  _exports.testPage = testPage;
  _exports.installServiceWorker = installServiceWorker;
  _app = _interopRequireDefault(_app);
  ReactDOM = _interopRequireWildcard(ReactDOM);
  React = _interopRequireWildcard(React);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  /*global N*/
  window.N = window.N || {};
  N.enable_presets = false;
  N.init = init;

  function init(session) {
    N.session = session || {};
    ReactDOM.render( /*#__PURE__*/React.createElement(_app["default"], null), document.getElementById("page"));
    installServiceWorker(session.cacheBuster);
  }

  function testPage(session) {
    N.session = session || {};
    ReactDOM.render( /*#__PURE__*/React.createElement(_app["default"], {
      layout: _app["default"].BlankLayout
    }), document.getElementById("page"));
  }

  function installServiceWorker(timestamp) {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js?".concat(timestamp)).then(function (registration) {
        console.log("Service worker registered", registration.scope);
      }, function (err) {
        console.error("Service worker failed to register", err);
      });
    }
  }
});

