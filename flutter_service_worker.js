'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "bd67fb9c2a14c870891c9e532625d78d",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "71f64e5c55b5ddb4ea3d0e3a6bdc91ac",
"/": "71f64e5c55b5ddb4ea3d0e3a6bdc91ac",
"main.dart.js": "e6431a1b291c2a9e953c7672d3fde204",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5ab0b17c3951c2a10965564e7aa8b016",
"icons/favicon-16x16.png": "d586b8d5e5eeeccf79182ecdfff83d3d",
"icons/favicon.ico": "1c2c6e9508591858c0bf638f1820198f",
"icons/Icon-192.png": "38df6d0578fadecb970f924913f60ab5",
"icons/Icon-maskable-192.png": "8384d6e51b2961dcbc49e6ecccc335a6",
"icons/mstile-150x150.png": "4fcfa65dab3f5a7915944e6dfb47baab",
"icons/Icon-maskable-512.png": "72962afde3c0e66c87ccf3b817596e86",
"icons/Icon-512.png": "72962afde3c0e66c87ccf3b817596e86",
"icons/favicon-32x32.png": "3ca5ddb74a0d4353aed43d4eb134ca56",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"assets/AssetManifest.json": "90f4ef39d64a55322833a1eaba04e0ad",
"assets/NOTICES": "93aa3d0b9b6a74e9dba5d6ee38b91619",
"assets/FontManifest.json": "d9e67d0db9450562418f7df2a9426f2a",
"assets/AssetManifest.bin.json": "dd6abed738b3d03ccf266707e73ed02e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "44928027cadda833af3defae6bcf096a",
"assets/fonts/MaterialIcons-Regular.otf": "a79d320a2a5f61ac9d27145397e95e4b",
"assets/assets/app_setting_json.json": "b4b32921f94173932ad4b1e4c8a2ef1c",
"assets/assets/images/experience/watan.jpeg": "20654dc32c32025cd971bc0c8af6b0fc",
"assets/assets/images/experience/shatara.png": "f7c53459f931c88ecd1191cd820d2a94",
"assets/assets/images/experience/50888291064219b2d20550-og.jpeg": "20654dc32c32025cd971bc0c8af6b0fc",
"assets/assets/images/experience/beno1.jpg": "6da7ac7f921a7d50bd51c869c167dbc3",
"assets/assets/images/experience/ai.jpg": "257632243a42a85f16ed8a609bcb8d47",
"assets/assets/images/experience/laiout.jpg": "09f40aed75abd444d6e11f4e399722f4",
"assets/assets/images/apps_preview/warshti_client_main.png": "e988bbb148adad9d2767ba8c788841c0",
"assets/assets/images/apps_preview/etoy_prev.png": "0aacf2524fb891d25c56f82c4cd7ff99",
"assets/assets/images/apps_preview/afandem_admin_prev.png": "c146bd3814205fa17ca3fb7ae9fca84c",
"assets/assets/images/apps_preview/imploy.png": "05d8e3df229a765714b490fc8fa9d4c0",
"assets/assets/images/apps_preview/e7la2ly_prev.png": "1307cc5935784f2bd357e410ee17fd52",
"assets/assets/images/apps_preview/warshtri_bis_prev.png": "3773919f2be036103d32cd27d5cef564",
"assets/assets/images/apps_preview/jamela_prev.png": "608f1fbc09c0f77d076d098397dc1b95",
"assets/assets/images/apps_preview/wfi_preview.png": "cfc6edabe11d834c2753455c4ea5f32c",
"assets/assets/images/apps_preview/be_service_prev.png": "40136e0a993dbeab9ebcf495fbbd7f1f",
"assets/assets/images/apps_preview/tshtri_preview_image.png": "0a6df784bcf943a485575ab932f83bac",
"assets/assets/images/apps_preview/afandem_prev.png": "fbfff0f8e5afacfecd63504661abd586",
"assets/assets/images/apps_preview/e7la2ly_barber_prev.png": "2a8193e8d37e065f09a67ea04347c335",
"assets/assets/images/apps_preview/be_prety_prev.png": "a11d7f2a0e0486e4468655ebf9d43eee",
"assets/assets/images/image_null.png": "824929feae4a703dc715aec5d2cb13d2",
"assets/assets/images/about_us_vector.svg": "f4ee118019b139dce6be5fc1905fdf1c",
"assets/assets/images/platform_flutter.png": "76bed8fdf521caabd13ae5ab5cb72c69",
"assets/assets/images/card_vector.png": "1331c9cf3c2f3ccae25fa282b5b9d782",
"assets/assets/images/card_vector.svg": "a662dcaeb3f56285839124856fa114e3",
"assets/assets/images/image_null_dark.png": "8299a12caa3edeb18f13c6fdc8ba52b2",
"assets/assets/images/app_icons/afandem.png": "8337f1a3edc84f045bd4d8e6be9c992e",
"assets/assets/images/app_icons/jamela_logo.png": "15c45661769b553a839eaf18af7ea1bb",
"assets/assets/images/app_icons/tshtri.png": "a5c7a35f68e754106fa1bfca0aa7eb32",
"assets/assets/images/app_icons/be_prety_icon.png": "1c8717c45a69c44522961dc7fc689043",
"assets/assets/images/app_icons/imploy.png": "a7d57a4bcb0803ab08178710d11439fd",
"assets/assets/images/app_icons/be_service_icon.png": "06ce7a409172cfc2306ddcaabc0599c4",
"assets/assets/images/app_icons/etoy_logo.png": "69a834db9f801da9b536d1653d730344",
"assets/assets/images/app_icons/warshtri_bis.png": "e6785add506576a47adc6840eccacaca",
"assets/assets/images/app_icons/afandem_admin_logo.png": "6dea4abe810f61696f5ca24cc6d401ee",
"assets/assets/images/app_icons/wfi.png": "569c83822c5d3c19bd809807b9a94b69",
"assets/assets/images/app_icons/warshti_client_logo.png": "ed7e47ee6942b1eee0837bd88e8a2e6c",
"assets/assets/images/app_icons/playstore.png": "41e09e93dcab176df30f4711a273b0ca",
"assets/assets/images/app_icons/e7la2ly_barber.png": "a2d2023594a46140b67bafbf175658a6",
"assets/assets/images/platform_android.png": "d401b541865b03fac45bfc923fafc060",
"assets/assets/images/background_circle.png": "8874d8534649a9b31d3a5611eb5c8adc",
"assets/assets/images/presentations/e7la2ly_pres.png": "7e5245c59a96bd9e84a04e776ff592ff",
"assets/assets/images/presentations/checlk.png": "93b07cc091894834e529772d64bc059f",
"assets/assets/images/presentations/imploy_presentation.png": "7f61a13dd51cc040220a62255b7132a1",
"assets/assets/images/presentations/warshtri_bis_pres.png": "bf3ac94a7ab8b6fecf97f634415fb8b2",
"assets/assets/images/presentations/etoy_pres.png": "048f5d7cb4b77e64a44eae862529361f",
"assets/assets/images/presentations/jamela_pres.png": "268a2e72d38ddd6c81ee4bc49f5a89ff",
"assets/assets/images/presentations/afandem_pres.png": "3c0770fd5558a9ff076faea2e96f4bd5",
"assets/assets/images/presentations/be_service_pres.png": "d8223c24be5ecf7116ff0092909124fa",
"assets/assets/images/presentations/wfi.png": "35e94ce816d2068a89563ac68fd71ee6",
"assets/assets/images/presentations/tshtri_presentation.png": "859c697e01a7a370e13b5b4f6ddf3861",
"assets/assets/images/presentations/be_prety_pres.png": "276313706ff039c085c1b5d9ed2144a5",
"assets/assets/images/presentations/e7la2ly_barber_pres.png": "5c0f0686bd049cea05da51f762244070",
"assets/assets/images/presentations/warshti_client_pres.png": "ea9e71103edeebdfd35d60ea1391e428",
"assets/assets/images/platform_ios.png": "be0a596530f014083957529d0f6d2af4",
"assets/assets/images/profile.png": "c57c048d979df19ed01c9edb45dd36f7",
"assets/assets/splash_400.png": "62c9d0f43c8b8523913660ed3538df55",
"assets/assets/splash_full.png": "f10e433bf02fa6153b034c3bc3fdc05c",
"assets/assets/icons/play_store_card.svg": "5080d64c095efa05ff0ee89dd73421d4",
"assets/assets/icons/effective.svg": "34d8fa8848c685d3a0c3364b05cc7dad",
"assets/assets/icons/android_normal.svg": "86235cd34b22a3c049c1183ef79b8b92",
"assets/assets/icons/bar_profile.svg": "63530190f884a22824a4ff0ff9749ccb",
"assets/assets/icons/service.svg": "845e663ca17b863fa37ee1eaaafbe755",
"assets/assets/icons/instagram.svg": "02df2d274ca6f18576de5cc868cceca3",
"assets/assets/icons/experience.svg": "cf3c3f7fa9e700442e4b52add9b4c078",
"assets/assets/icons/problem_solving.svg": "7b1d469887069596ad61267c66f08ade",
"assets/assets/icons/attitude.svg": "b01e3cef95d4b4cf3504249ce0854fac",
"assets/assets/icons/digital_reading.svg": "37e94828383e845ad2f2124c06e3c6de",
"assets/assets/icons/email.svg": "d1912d28af9c19713ec56efbab442bc5",
"assets/assets/icons/apple_store_card.svg": "cfee7edbec74c6c2bb9d480f8731b088",
"assets/assets/icons/Facebook.svg": "96e6b52dde639a6272efce10893a2a1d",
"assets/assets/icons/skills.svg": "26846b7f1d7ad26228901df5d6b3c37d",
"assets/assets/icons/whatsapp.svg": "998a9ab15228999463cf254134cc8cfa",
"assets/assets/icons/side_home.svg": "102e38fcea8e0bc6d82d443f77278c0e",
"assets/assets/icons/icon-menu.svg": "4d5e49e56fd087f228e5243b52032d1e",
"assets/assets/icons/education.svg": "697d3661242f45933bfc556cd49e92c6",
"assets/assets/icons/cross_platform.svg": "8e66f49093a524c09a5386737ff47bcc",
"assets/assets/icons/quality.svg": "7b9903ea03708e5b5623ebefacd8dea3",
"assets/assets/icons/today_apple.svg": "23e0fa7fbd00961f832e8070dbe62548",
"assets/assets/icons/linkedin.svg": "8a0671aeee85c0d87af099e9b9b7ee87",
"assets/assets/icons/twitter_x.svg": "b8a87b73aca4cc9410bcc72cde3fa007",
"assets/assets/icons/twitter.svg": "94b4208d8329c5aa173d5dcc160c4505",
"assets/assets/icons/portfolio.svg": "1390dd09984689023ca6419a5318e0ab",
"assets/assets/icons/icon-app.svg": "156268807197f4d285542911b0a10305",
"assets/assets/fonts/AvenirBook.ttf": "9f784699e62f2b6ddc7a582f909edcc7",
"assets/assets/fonts/AvenirLight.ttf": "978153ba4ed98075bbd3e0ef32e4d887",
"assets/assets/fonts/Avinir_Heavy.otf": "1950c9e43b1737cb535ed2aaa354da06",
"assets/assets/fonts/AvenirRegular.ttf": "77ce85fec67e99ffc50ed8edac7a4890",
"assets/assets/gif/no_internet2.json": "6ec4307da694379a9731cc64d0f7d88b",
"assets/assets/gif/loading_t.json": "ec326baa17f7aacc41eca573a92703c9",
"assets/assets/gif/intro.json": "ff6d312c51c67e40edaa9b32e7e528c3",
"assets/assets/gif/loader.json": "7de744154f2a89d14807a0f9c16827e5",
"assets/assets/gif/no_internet.json": "c8455bf5cfa533341120fe55dd4110e0",
"assets/assets/gif/loading_2.json": "3c8245b26aa5ad6e0d7399ab41de052d",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
