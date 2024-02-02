'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "711e91bf2eb866a3674dab886379a4a4",
"assets/AssetManifest.bin.json": "0a7cf109f4bb3f6791df911aeef86e14",
"assets/AssetManifest.json": "272f8d35614e079b493b57c0a595a06a",
"assets/assets/images/aftereffects.png": "bf24938bd7a67dfd4f4bc1e0e407c1b0",
"assets/assets/images/angular.png": "a06105754587e2d32ecc3bf1c8882324",
"assets/assets/images/app_des.png": "5bc4eaaecd5c389e06973800de19a9e0",
"assets/assets/images/app_dev.png": "dbed308e0bb2ddea56b20c14563a9e82",
"assets/assets/images/bgimage1.png": "18957e63f2f48eead63c404fabbcc9ad",
"assets/assets/images/Blender.png": "8ae24efec8c7d0f851de8f74ac2279ff",
"assets/assets/images/Canva.png": "5ca1d914cc09700266ef07be9f935887",
"assets/assets/images/CorelDraw.png": "bdd08d2fe1935c65e58ec578d9f5b652",
"assets/assets/images/Facebook.png": "ce644e0c2e243318ceadd1d59a5ef2e7",
"assets/assets/images/Figma.png": "86148e07e366fae4fd272381cb93dfde",
"assets/assets/images/Firebase.png": "03cd93dc569bc2fe79d3aa907cffede0",
"assets/assets/images/flutter.png": "c7a89fb1a2b8e689961cf2f7431d1908",
"assets/assets/images/game_des.png": "10473f69738bb31ddf9f69dedf22ffaa",
"assets/assets/images/HTML5.png": "73f152583175419a8d8fd9bfa5942156",
"assets/assets/images/illustration1.png": "6e910fd1669f514d03868546689445c1",
"assets/assets/images/illustration2.png": "c6094d8f15dffbe6d52e8d04c2b06c74",
"assets/assets/images/illustration3.png": "322506ed4fccbed9ea000834e2c3e024",
"assets/assets/images/illustration4.png": "1e4af965b327cbd862b1ed2da062b3ca",
"assets/assets/images/illustrator.png": "8f45161ac2c7d9caf979f3a70bc690db",
"assets/assets/images/Instagram.png": "3d21e80a4200ee1ee1dd0b42b47876f5",
"assets/assets/images/JS.png": "4d7e384a37f00a23a321f133cc88362c",
"assets/assets/images/kids_game.png": "7951213aa24b4b1d4c4fc26cbae9d4b7",
"assets/assets/images/kotlin.png": "4898159cfb159216e4e90d579294b5f0",
"assets/assets/images/Linkedin.png": "974926e550e8dd7cd36303b6f2d0a37f",
"assets/assets/images/logo.png": "20c3e16c135b48373a5814573a14c748",
"assets/assets/images/logo2.png": "912ed81dcb911df38b46fb9225149203",
"assets/assets/images/mediaencoder.png": "2b905c2e0eb6537cbc4ed3e895d3ae29",
"assets/assets/images/mongodb.png": "883c25c72350d3c863edc08d5dca07d8",
"assets/assets/images/mysql.png": "8ecbac017db8556c0ea0755a9b8c638a",
"assets/assets/images/NODE_JS.png": "6b58b8af9fcd4ee2331240221e6d7050",
"assets/assets/images/Photoshop.png": "ff0d446cfc53f0d9e18c27ba1f5ccab0",
"assets/assets/images/PHP.png": "2ffb70d3cd8c54cc868e48ab9d95b24b",
"assets/assets/images/premierePRO.png": "5bbb3d7b96a3d6a10ae08ff9d9c131f2",
"assets/assets/images/react.png": "edc910790b0c5383bf06a89d0f36ac3c",
"assets/assets/images/roomDB.png": "1dc96448966634774255c38568a0a318",
"assets/assets/images/sabkishop.png": "25c60c29c93e1c162148aca795603d40",
"assets/assets/images/Seo.png": "e710d987de4f735d06b3d1758abe50ee",
"assets/assets/images/shopify.png": "0b6aef52cdea49760a7d34980981d20e",
"assets/assets/images/SQLITE.png": "cffadec83a58076d9aa43c8e278f9ef0",
"assets/assets/images/swift.png": "62bd232c017c9a3761ed96db98d7c9fc",
"assets/assets/images/UserInterface.png": "52cd4c8d5a330ed955414db356791e69",
"assets/assets/images/vector.png": "017130b6d76f8a03040824ac1195a24a",
"assets/assets/images/vector1.png": "b68bd7a2bdcd78aefb9b37e537eff107",
"assets/assets/images/vector2.png": "e267f0af6c1bef112417010d0b221b3b",
"assets/assets/images/vector3.png": "ae26e66a0c8baa31e312fec5bff752c1",
"assets/assets/images/vector4.png": "854acb3e44a50c897d3bcf8057cc7dd3",
"assets/assets/images/vector5.png": "dccbc69b7f37bf8a466ca7ff66b016fd",
"assets/assets/images/web_des.png": "970f9dd1dc6822793c577bfcb61e7494",
"assets/assets/images/web_dev.png": "dbed308e0bb2ddea56b20c14563a9e82",
"assets/assets/images/wordpress.png": "1ad3fdf6c48fb4b27424b7df854f633f",
"assets/assets/images/XD.png": "798d972aeb36eba5d6ea9e5bd42f3f5c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "48e3ea750edc60b5148c00e117badb79",
"assets/NOTICES": "35df96ca0434e9664f55c45f77a2119e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c62e06d734ecb9a8f22eeaa95da90b38",
"/": "c62e06d734ecb9a8f22eeaa95da90b38",
"main.dart.js": "c608e51fa1eb5bc4930bd430228a4697",
"manifest.json": "308c21b86fdc8be61151c5b658c13334",
"version.json": "f1ff85c5f73915a50039ca188c6b70dc"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
