define("st/globals", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setTitle = setTitle;
  _exports.csrfToken = csrfToken;
  _exports.gaEvent = gaEvent;

  /*global ga*/
  function setTitle(title) {
    if (title) {
      document.title = "".concat(title, " | Pianistica");
    } else {
      document.title = "Pianistica";
    }
  }

  function csrfToken() {
    return document.getElementById("csrf_token").getAttribute("content");
  }

  function gaEvent(category, action, label, value) {
    var interactive = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
    var opts = {
      hitType: "event",
      eventCategory: category,
      eventAction: action,
      eventLabel: label,
      eventValue: value
    };

    if (!interactive) {
      opts.nonInteraction = 1;
    }

    try {
      if (window.ga) {
        ga("send", opts);
      } else {
        console.debug("event:", opts);
      }
    } catch (e) {}
  }
});

