'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/assets/images/watch-3.jpg": "2290b078b06dc52ebf31e4db51b98286",
"/assets/assets/images/watch-1.jpg": "8ed8d5226a2fa3fc2e8363021c6afc79",
"/assets/assets/images/watch-2.jpg": "e1c34b7804bda75fe5b7a9782799936d",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "1c67c7b8b7901b4d9252fc680a2f56de",
"/assets/LICENSE": "86ed68af45587fbe062baf0749fd1d90",
"/main.dart.js": "09c8bce62b39c5129e47c2a9ce1d085e"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
