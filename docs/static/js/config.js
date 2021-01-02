define("st/config", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.storageAvailable = storageAvailable;
  _exports.writeConfig = writeConfig;
  _exports.readConfig = readConfig;

  function storageAvailable(type) {
    try {
      var storage = window[type];
      var x = "__test";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return false;
    }
  }

  function writeConfig(name, value) {
    if (storageAvailable("localStorage")) {
      if (value == undefined) {
        console.warn("Removing config", name);
        return window.localStorage.removeItem(name);
      }

      if (typeof value != "string") {
        value = JSON.stringify(value);
      }

      console.warn("Writing config", name, value);
      return window.localStorage.setItem(name, value);
    }
  }

  function readConfig(name) {
    var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

    if (storageAvailable("localStorage")) {
      console.warn("Reading config", name);
      var ret = window.localStorage.getItem(name);

      if (ret == undefined) {
        ret = defaultValue;
      } else {
        try {
          ret = JSON.parse(ret);
        } catch (e) {}
      }

      return ret;
    } else {
      return defaultValue;
    }
  }
});

