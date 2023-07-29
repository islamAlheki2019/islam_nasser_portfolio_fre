'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "d358dd90ff65c3628246812101685493",
"index.html": "8dc9c96e8df432ab6f0672fb19f07be8",
"/": "8dc9c96e8df432ab6f0672fb19f07be8",
"main.dart.js": "9c7fb4a6388bb7e4ec42ed491c641e86",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0bc80ee29a21127774d4c228565f7085",
"assets/AssetManifest.json": "9371c274b5b83a1a2ba422c18e5e7495",
"assets/NOTICES": "2647fd5103cf97e52d1778c4b124f487",
"assets/FontManifest.json": "d9e67d0db9450562418f7df2a9426f2a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/app_setting_json.json": "b4b32921f94173932ad4b1e4c8a2ef1c",
"assets/assets/images/apps_preview/wfi_preview.png": "cfc6edabe11d834c2753455c4ea5f32c",
"assets/assets/images/apps_preview/tshtri_preview_image.png": "0a6df784bcf943a485575ab932f83bac",
"assets/assets/images/image_null.png": "824929feae4a703dc715aec5d2cb13d2",
"assets/assets/images/about_us_vector.svg": "f4ee118019b139dce6be5fc1905fdf1c",
"assets/assets/images/platform_flutter.png": "76bed8fdf521caabd13ae5ab5cb72c69",
"assets/assets/images/card_vector.svg": "a662dcaeb3f56285839124856fa114e3",
"assets/assets/images/image_null_dark.png": "8299a12caa3edeb18f13c6fdc8ba52b2",
"assets/assets/images/app_icons/tshtri.png": "a5c7a35f68e754106fa1bfca0aa7eb32",
"assets/assets/images/app_icons/wfi.png": "569c83822c5d3c19bd809807b9a94b69",
"assets/assets/images/platform_android.png": "d401b541865b03fac45bfc923fafc060",
"assets/assets/images/background_circle.png": "8874d8534649a9b31d3a5611eb5c8adc",
"assets/assets/images/presentations/wfi.png": "35e94ce816d2068a89563ac68fd71ee6",
"assets/assets/images/presentations/tshtri_presentation.png": "859c697e01a7a370e13b5b4f6ddf3861",
"assets/assets/images/platform_ios.png": "be0a596530f014083957529d0f6d2af4",
"assets/assets/splash_400.png": "62c9d0f43c8b8523913660ed3538df55",
"assets/assets/splash_full.png": "f10e433bf02fa6153b034c3bc3fdc05c",
"assets/assets/icons/play_store_card.svg": "5080d64c095efa05ff0ee89dd73421d4",
"assets/assets/icons/effective.svg": "aa5e9db535168e6b9b2fcf6ce62d3ab1",
"assets/assets/icons/android_normal.svg": "86235cd34b22a3c049c1183ef79b8b92",
"assets/assets/icons/instagram.svg": "02df2d274ca6f18576de5cc868cceca3",
"assets/assets/icons/problem_solving.svg": "502042086baa955c28f0fd82e28046ee",
"assets/assets/icons/attitude.svg": "8701905e1eb589259708d44504ef7151",
"assets/assets/icons/digital_reading.svg": "dd989825c7dcd8429c7d205544784d9e",
"assets/assets/icons/email.svg": "a221ed3f766f59f8604aa3882681f643",
"assets/assets/icons/apple_store_card.svg": "cfee7edbec74c6c2bb9d480f8731b088",
"assets/assets/icons/facebook.svg": "d09e944e5224acfda03ad1aa3a813de8",
"assets/assets/icons/whatsapp.svg": "998a9ab15228999463cf254134cc8cfa",
"assets/assets/icons/icon-menu.svg": "4d5e49e56fd087f228e5243b52032d1e",
"assets/assets/icons/cross_platform.svg": "e65b279b641f62393dcb174ec904967b",
"assets/assets/icons/quality.svg": "aa02458cd01377559c1ad21f556c2b22",
"assets/assets/icons/today_apple.svg": "23e0fa7fbd00961f832e8070dbe62548",
"assets/assets/icons/linkedin.svg": "1b35b7fb3e5b383f404941afcd942527",
"assets/assets/icons/twitter.svg": "94b4208d8329c5aa173d5dcc160c4505",
"assets/assets/fonts/AvenirBook.ttf": "9f784699e62f2b6ddc7a582f909edcc7",
"assets/assets/fonts/AvenirLight.ttf": "978153ba4ed98075bbd3e0ef32e4d887",
"assets/assets/fonts/Avinir_Heavy.otf": "1950c9e43b1737cb535ed2aaa354da06",
"assets/assets/fonts/AvenirRegular.ttf": "77ce85fec67e99ffc50ed8edac7a4890",
"assets/assets/gif/no_internet2.json": "6ec4307da694379a9731cc64d0f7d88b",
"assets/assets/gif/loading_t.json": "ec326baa17f7aacc41eca573a92703c9",
"assets/assets/gif/intro.json": "ff6d312c51c67e40edaa9b32e7e528c3",
"assets/assets/gif/loader.json": "7de744154f2a89d14807a0f9c16827e5",
"assets/assets/gif/no_internet.json": "c8455bf5cfa533341120fe55dd4110e0",
"assets/assets/gif/loading_2.json": "3c8245b26aa5ad6e0d7399ab41de052d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
