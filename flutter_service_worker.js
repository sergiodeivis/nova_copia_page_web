'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "426926215756575d667540f8b669c641",
"assets/AssetManifest.bin.json": "6783bfec01e765c808d5a93cd76680c5",
"assets/AssetManifest.json": "15f8e0b411499f4bac1c0edbde2da740",
"assets/assets/images/02.jpg": "cf4b36f097c434dc5a80d6c9033215d1",
"assets/assets/images/03.jpg": "cf5bb5acf42fabb09a231f6d8122a3d2",
"assets/assets/images/04.jpg": "bdf709f67c2c4c897cb68e851141f1a5",
"assets/assets/images/05.jpg": "a61cb746517d119369231e8787834a26",
"assets/assets/images/06.jpg": "35bbd5bf352f2f6d4eef39154d644389",
"assets/assets/images/07.jpg": "84233995f0d2dda694be6eee3633b276",
"assets/assets/images/08.jpg": "ae342f2e89eb5f4057b48ea606064d7e",
"assets/assets/images/09.jpg": "47a30287837e1762f3aff62e3b8b24d5",
"assets/assets/images/10.jpg": "1b8fa5d1ef4e8f17ff2e02fbc4bc973c",
"assets/assets/images/11.jpg": "a93ff9cc575f2c78ad7bc4fc84094c2a",
"assets/assets/images/12.jpg": "1ff08e0dbf61364ec4b3a66118137f7f",
"assets/assets/images/13.jpg": "857f09b85ea9fd7ee1f7c15c0eb1c927",
"assets/assets/images/14.jpg": "9a1c82340d9163d336c56ba472672826",
"assets/assets/images/15.jpg": "d4d1bd58396a640e0ea656a480657682",
"assets/assets/images/16.jpg": "04503131f3005989b5a5e985032dfea5",
"assets/assets/images/17.jpg": "eca5db42e181ca6124e0a9b08a915608",
"assets/assets/images/logo.jpeg": "2f7e5dcda1bd1feec10c4c7c1167f9b9",
"assets/assets/images/logo.png": "fce8a1f698639fc8d963f4ccd54d7156",
"assets/assets/images/novacopia.svg": "ca4fbd4467e19f11c71adbdf88795eb8",
"assets/assets/images/novacopia1.svg": "6013b783f1ad5be1c8add1dd8197ca08",
"assets/assets/images/novacopia2.svg": "f8326ddf1b725029e180e742b12ededd",
"assets/assets/images/whatsappsvg.svg": "31f1fa77dd03688919625a8a6bbc7223",
"assets/FontManifest.json": "c75f7af11fb9919e042ad2ee704db319",
"assets/fonts/MaterialIcons-Regular.otf": "2a59b3fd163460a8044d2a7f15cdf9bc",
"assets/NOTICES": "b76a4d8d41eb7fcad60e92c4bc831a21",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "e5c4e784ee91fa5a54bba05ed11ad707",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "b2703f18eee8303425a5342dba6958db",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "5b8d20acec3e57711717f61417c1be44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "10528e0bdc628d40a1a15e5d0914bfdb",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "6a9dc79540105902fcbb4c8480dfa48b",
"icons/Icon-192.png": "c15b76caa9b61742a452e1acffd28cf5",
"icons/Icon-512.png": "0c680d36ca33905e70401071cd2a968f",
"icons/Icon-maskable-192.png": "69cdb6e488f3e89cfd5ed381fb511fe3",
"icons/Icon-maskable-512.png": "46fd144c61aa064c850ba4a7c6dc4d91",
"index.html": "5f54084030f794acd9dadcd2a2be19d0",
"/": "5f54084030f794acd9dadcd2a2be19d0",
"index.html.bak": "5f54084030f794acd9dadcd2a2be19d0",
"main.dart.js": "8459fa79dfdb5e7a19024744527cd211",
"manifest.json": "f6f0b5643c90644530b61efe623c1ae8",
"version.json": "41ff4ff56c141b7d11d9677e33590189"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
