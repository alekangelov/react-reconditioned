"use strict";var precacheConfig=[["/react-reconditioned/index.html","12d4e90775785bc7df753dcbe0c6ecac"],["/react-reconditioned/static/css/main.2d7c43d0.css","6e52d9cd0ac0ec394d41917d1adc41bb"],["/react-reconditioned/static/js/main.b9002093.js","abac55dce4a57b03f70801b724ce52bf"],["/react-reconditioned/static/media/SFProText-Bold.38ea097d.woff2","38ea097dd57fbd39c6cacb495b2b2bea"],["/react-reconditioned/static/media/SFProText-Bold.d728d921.woff","d728d9213487497db0924dcc0a7a8fde"],["/react-reconditioned/static/media/SFProText-BoldItalic.70a908f2.woff2","70a908f2a1cd1f54aab06fa98a100d38"],["/react-reconditioned/static/media/SFProText-BoldItalic.ad241a8e.woff","ad241a8e8ff644d8deffc51165984b50"],["/react-reconditioned/static/media/SFProText-Heavy.f428b24e.woff2","f428b24e03ee52ad0080fda5d2a2cf63"],["/react-reconditioned/static/media/SFProText-Heavy.faad944c.woff","faad944cf8eb04c7b3d1e850aeed2821"],["/react-reconditioned/static/media/SFProText-HeavyItalic.e9ce67ad.woff","e9ce67adcf6322c986a6ae93f8fcd68c"],["/react-reconditioned/static/media/SFProText-HeavyItalic.f9ec06c1.woff2","f9ec06c126129d42175e2dbc00705b6e"],["/react-reconditioned/static/media/SFProText-Light.016d5ff0.woff2","016d5ff036d821b2792e27b8e6e87dc6"],["/react-reconditioned/static/media/SFProText-Light.547d4afe.woff","547d4afeafa865e29ef57e9cb3a92e25"],["/react-reconditioned/static/media/SFProText-LightItalic.d2168ff1.woff2","d2168ff10a873d6dd423ebf1e7570f4a"],["/react-reconditioned/static/media/SFProText-LightItalic.d49a8845.woff","d49a88455dd486cfef0049516875cba6"],["/react-reconditioned/static/media/SFProText-Medium.18c807dc.woff","18c807dc98174f0a7225d1f9b0d8e723"],["/react-reconditioned/static/media/SFProText-Medium.4521a2cf.woff2","4521a2cfa641159405498699b1bd1048"],["/react-reconditioned/static/media/SFProText-MediumItalic.13426530.woff2","13426530c6b4ed3a38fb44eec0b5b195"],["/react-reconditioned/static/media/SFProText-MediumItalic.d6d972d7.woff","d6d972d76aa2b7fc2ba0b1b359bc5311"],["/react-reconditioned/static/media/SFProText-Regular.5dc00960.woff","5dc00960a8b3beeca771a1b321bb3045"],["/react-reconditioned/static/media/SFProText-Regular.ea57e093.woff2","ea57e0931ee301b2789bf36088565f2a"],["/react-reconditioned/static/media/SFProText-RegularItalic.5536d6fc.woff","5536d6fc59dd559668c61ff1ddc815ce"],["/react-reconditioned/static/media/SFProText-RegularItalic.9f203dc2.woff2","9f203dc28633078ae228487fb64562a4"],["/react-reconditioned/static/media/SFProText-Semibold.62f73def.woff","62f73def17a7aefd2fc669c19a7310cb"],["/react-reconditioned/static/media/SFProText-Semibold.9b5b870c.woff2","9b5b870c20549f01deaab1074a4d8f9e"],["/react-reconditioned/static/media/SFProText-SemiboldItalic.6a408bf6.woff2","6a408bf65279bf2b9aa3504b260ff2b7"],["/react-reconditioned/static/media/SFProText-SemiboldItalic.e75215cb.woff","e75215cbeeea45aea1d26738cef1e69e"],["/react-reconditioned/static/media/conditional.8d1fc3dc.png","8d1fc3dc079a78cfaa7c389c0803a120"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var r=new URL(e);return c&&r.pathname.match(c)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),r=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var r="/react-reconditioned/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});