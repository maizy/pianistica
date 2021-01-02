"use strict";

var CACHE_VERSION = "v4";
var CACHE_NAME = "st_cache";
var urlsToCache = ["/"];
self.addEventListener("install", function (event) {
  event.waitUntil(caches.open("".concat(CACHE_VERSION, ":").concat(CACHE_NAME)).then(function (cache) {
    return cache.addAll(urlsToCache);
  }));
});
self.addEventListener("fetch", function (event) {
  if (event.request.method != "GET") {
    return;
  }

  if (event.request.url.match(/\bmanifest\.json\b/)) {
    return;
  }

  event.respondWith(caches.open("".concat(CACHE_VERSION, ":").concat(CACHE_NAME)).then(function (cache) {
    return fetch(event.request).then(function (response) {
      cache.put(event.request, response.clone());
      return response;
    })["catch"](function () {
      return cache.match(event.request);
    });
  }));
});
self.addEventListener("activate", function (event) {
  event.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (key) {
      return !key.startsWith(CACHE_VERSION);
    }).map(function (key) {
      return caches["delete"](key);
    }));
  }));
});

