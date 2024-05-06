'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f7603f78588d41c96f82f16d6e8b0e1c",
"assets/AssetManifest.bin.json": "39bb70529b72d695b5c2dac5d974a176",
"assets/AssetManifest.json": "f83610433035d54ddba4d25d63107fb8",
"assets/assets/images/Career.jpg": "b6043dcc9bfdc91db9df0f42bcd89235",
"assets/assets/images/Ellipse%25204.png": "7bae9a947a5d4ca3c2cbc6c0c6bc386b",
"assets/assets/images/Ellipse%25205.png": "b2799252754283c481ae171879817a51",
"assets/assets/images/Food_Delivery.jpg": "4998c42e1b358be35cdc126a6aafa2df",
"assets/assets/images/Gym_App.jpg": "ee21fc6fe4172429ee6f29c170376a04",
"assets/assets/images/logo.png": "9ea112a6c603ca9c59173cfced9e660f",
"assets/assets/images/portfolio.jpg": "fa8c976ce0777ec9ab18086946dc774a",
"assets/assets/images/r1.png": "42e0cbef740f750b5c3a92ec334b1e97",
"assets/assets/images/Rectangle1.png": "590bfa173dcb3a0c4b47611ac09a1e53",
"assets/assets/images/Rectangle2.png": "a94285eb72fbab80e2edbd31f0b734d6",
"assets/assets/images/Rectangle3.png": "177695d9d154970c96f56deaf277f064",
"assets/assets/images/sc3.png": "9fbdafe01bf612c6e0bd174e9aee9264",
"assets/assets/images/UI-UX%2520differences-bro%25201.png": "1146326950e52e99b770c9d1ee029f74",
"assets/assets/images/Wordpress.png": "ba02d3c17fd21f08cad7d84837de0c19",
"assets/assets/svg/android.svg": "07b09e0b34f783e396746b6ca7cc6cf8",
"assets/assets/svg/App_Development.svg": "01b349a891f013f1acb370195fd1fc4b",
"assets/assets/svg/Black%2520(1).svg": "873be9e050c95909711e2a650a98ee81",
"assets/assets/svg/Black%2520(2).svg": "7d06657626ba2de46b51ef767f46f44b",
"assets/assets/svg/Black%2520(3).svg": "f23b6c5d8e53a50ac2e619703aaded75",
"assets/assets/svg/Black%2520(4).svg": "bda2d75a37489a80758b2bc6c63bb1f0",
"assets/assets/svg/Black%2520(5).svg": "17f8d6a56fff2d4647dfd9033fed64f3",
"assets/assets/svg/Black.svg": "702073a36b7e0e0a3023e1897e1e9efa",
"assets/assets/svg/call.svg": "e281c48a083e19787a6f500585f83200",
"assets/assets/svg/DataBase.svg": "c06fb976960a7b5e56e4370266d8cf94",
"assets/assets/svg/Design_Development.svg": "03ebfd48957a9d72a17e46eccaaf834a",
"assets/assets/svg/facebook.svg": "9c403ae30b6659db9d66a572cd861572",
"assets/assets/svg/instra.svg": "ab2ce2007bd677b781852d9009aa8085",
"assets/assets/svg/linkdin.svg": "95104dfc5849d0f93e3f34b29c870f36",
"assets/assets/svg/location.svg": "94bc23bdbc4643c29cd5a925d76be8d7",
"assets/assets/svg/location_map.svg": "e9086ec636dcaa214c88099cb2bc4a88",
"assets/assets/svg/mail.svg": "98d8e9b21540bd1b6f5b460761b0b0c9",
"assets/assets/svg/mail_icon.svg": "52528d6e070cd797fea8f572a279ab74",
"assets/assets/svg/phone_icon.svg": "3d97595cfee60055129a49321834bbcb",
"assets/assets/svg/quots.svg": "90d1dce8cf6e63c16637b383c89fd950",
"assets/assets/svg/SEO_ASO.svg": "329e509ff9b48f3080d7973317b865e3",
"assets/assets/svg/twiter.svg": "770a954a485903019414129e8ed63ed7",
"assets/assets/svg/UI_UX_Design.svg": "910ef3a810b8b7f3359cb69fca731fc2",
"assets/assets/svg/wordpress.svg": "25eeb74ba624fb9808c934e5aa2b0a35",
"assets/assets/svg/Wordpress_Sopify.svg": "1c81f5ce40cb0df49690b8f3ce7d5e26",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9098da81d2f92af7de8fa1412408ae37",
"assets/NOTICES": "c2c7adc89140f814d93e3606a63eb3f8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9be33f7b42b47cf37ed3a9dacb7e0a16",
"/": "9be33f7b42b47cf37ed3a9dacb7e0a16",
"main.dart.js": "355a8653b2e28b13143cc0dd90a99b51",
"manifest.json": "5992cca24692a3d2780fa62de6e2c64f",
"version.json": "e295eea9e581da6c5011023a7996f457"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
