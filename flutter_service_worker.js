'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f7e242ec6104ae9096317cec3b7a6819",
"assets/AssetManifest.bin.json": "1bd1992ea123754f922f907cddd09646",
"assets/AssetManifest.json": "0bfc8ab962adc6a2ce768881f92987b0",
"assets/assets/app_logo.jpg": "be4d1a075e3ba9a25f6c98cac849cb43",
"assets/assets/app_logo2.png": "5d0a57eb57210eb17fa0a0f0b89de570",
"assets/assets/bg1.jpg": "8f286bb092584f58528afdb6d2eff648",
"assets/assets/book0.pdf": "1928b8d61ccd7ee527a807060091fd33",
"assets/assets/book1.pdf": "d6e1169a27260ded755c2d10c69a61fd",
"assets/assets/book10.pdf": "eff638c0504ef3baeeea2cb2383373f0",
"assets/assets/book11.pdf": "18d119181032ef54b42af87f7fe6d0df",
"assets/assets/book12.pdf": "4495de2b75424e64725ad9aa4da01d96",
"assets/assets/book13.pdf": "b89abfb68bb38fef81614474e52b4678",
"assets/assets/book14.pdf": "67049fcc9e262111929e460e3a32eee6",
"assets/assets/book15.pdf": "1bc22bd359a04477c8a039b28f0d56ab",
"assets/assets/book16.pdf": "bba8385d736913c0370cc13ddf78dd67",
"assets/assets/book17.pdf": "471a40722abb32732dd25c70e48a3f1c",
"assets/assets/book18.pdf": "b7b29e82fe3ebefc2df7752b284993b1",
"assets/assets/book19.pdf": "6fab730c203c7b7a95dcd1e446e2ce89",
"assets/assets/book2.pdf": "05ebb5b7dd5d2e1daf1cffb4e45a2f6f",
"assets/assets/book20.pdf": "6fab730c203c7b7a95dcd1e446e2ce89",
"assets/assets/book21.pdf": "0379cba14f19c1d9bddae82641f28d3c",
"assets/assets/book22.pdf": "9ccefb9d57a7839c95851fb8a32b1713",
"assets/assets/book23.pdf": "5d878c9e2e622ff80d86c2c5cd2e68aa",
"assets/assets/book24.pdf": "752d066e15571636ba3b5219a58d90c8",
"assets/assets/book25.pdf": "97d41a3e7d08dd2ea8afc0e46033cf27",
"assets/assets/book3.pdf": "2f2262a4719aaca2b76ba4043cf04500",
"assets/assets/book4.pdf": "c892d04563ed5caf3824650611fd6ad5",
"assets/assets/book5.pdf": "752d066e15571636ba3b5219a58d90c8",
"assets/assets/book6.pdf": "152e243b8c4dfbc52b580612d85225e7",
"assets/assets/book7.pdf": "931029bf85ddc8a100289dfa205b7743",
"assets/assets/book8.pdf": "7b99aaca7856eddb30e4d403388cfeda",
"assets/assets/book9.pdf": "fd4ecc5bd98b81799726cc564c3d76e1",
"assets/assets/brain.jpg": "8e211fe63f2cc58263329827faefaea6",
"assets/assets/chatbot.jpg": "5adaa8aee1b9dfc699bf063bf4f4b57a",
"assets/assets/community.jpg": "7340cebad64ea31190e57373f779a513",
"assets/assets/connect_group.jpg": "3fa89696373c5d3a24c566d10840d02a",
"assets/assets/doodle.jpg": "4587dba198ee103cf89c1f9c8828a1f4",
"assets/assets/food.jpg": "b944bf52666820708cd5a711b6c3acb4",
"assets/assets/giphy.gif": "680a38d0af9ccc449ef1f842f135a339",
"assets/assets/govt.png": "5c6a1c473dc6418c03489df995f92d0e",
"assets/assets/group.jpg": "4a01689e5cc2c9ba5f2f4d18d5219fda",
"assets/assets/group_wallpaper.jpg": "72b85ebb321e1ae9b870cdc9b8adf692",
"assets/assets/ho1.jpg": "0d611d61e5d85ca570514f3f9ed6ffc6",
"assets/assets/ho2.jpg": "d58df84800e1a28d0d536e04db7efad5",
"assets/assets/ho3.jpg": "538d039fd184cc58b80ed13784b3e357",
"assets/assets/ho4.jpg": "965e2fb378097d05eb9e8bf946c26102",
"assets/assets/image.jpeg.jpg": "97e5e6bec072be2efbbc208edce4126c",
"assets/assets/images/chat4.jpg": "adda346e9e3e7a44425cf841f6766b2d",
"assets/assets/images/gify.gif": "a2599acc8f0e20816ab62afa8952710d",
"assets/assets/images/gj.jpg": "72b2212cb1064fbbee0849ebe3018f90",
"assets/assets/images/gl.jpg": "dc1d32919b47c39fde2a417e92918637",
"assets/assets/images/h1.png": "d528eb4e243fcc3641b8a7c1cc6dc059",
"assets/assets/images/loader.jpg": "e6a72cc960e7ba621fe98569c724f05c",
"assets/assets/images/recieve.png": "63075d1a7b4c6bc0b743362145246a06",
"assets/assets/images/ssa.jpg": "330450d7c67fc48250df2d862b352ae1",
"assets/assets/images/trans.jpg": "77a5d1e4e4d52ede6212a09bc2323581",
"assets/assets/images/tribal.png": "63b4f56e482c84c4aff68d8bce323eae",
"assets/assets/library.jpg": "fc90592a2404f61d518f4cea03bc9577",
"assets/assets/loader.gif": "3fa094c6a902f47dec94fd3fafc3967a",
"assets/assets/login.png": "e4963cf4053c0763c5219bfbe3d4ff1a",
"assets/assets/recieve.png": "63075d1a7b4c6bc0b743362145246a06",
"assets/assets/register.png": "6b7e57b6f23ca773f29e6679ece6bc3c",
"assets/assets/sathya.gif": "7b6e7785de583939a115087bc6b0c665",
"assets/assets/tenticle.jpg": "6620d9cbf58d4217cea44209dd35cc70",
"assets/assets/tree.png": "49bf4768b64422f9b25cb9740df4e9c3",
"assets/assets/vector.jpg": "63e555121cd1bd2d4ca991fe0eae129e",
"assets/assets/wall.jpg": "06e6aa23cf383f13fd9782fb72a3a08e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "144a407ec4966ba784c78456cdd82cb8",
"assets/NOTICES": "1603b7fc07a57982c321f9ae9f91436d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/packages/timezone/data/latest_all.tzf": "871b8008607c14f36bae2388a95fdc8c",
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
"index.html": "3f644d6adbd6efd52b85333a6cc36ea1",
"/": "3f644d6adbd6efd52b85333a6cc36ea1",
"main.dart.js": "941b64c12d216c1881466548b796ef5e",
"manifest.json": "2ea306b45502d0f13eee391cf85196ed",
"version.json": "c1f2165040284b2f224a16c044e6add4"};
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
