/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "178bb8f954110f3aa844f8f05ba80daa"
  },
  {
    "url": "assets/css/0.styles.9c83292b.css",
    "revision": "802e1abda85650875243ecb34ca2cf78"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3af3581c.js",
    "revision": "27ce9d9b7584c20678308814a446d8bf"
  },
  {
    "url": "assets/js/11.65384011.js",
    "revision": "a862bde0f1aa7aef23a29c10b28d7134"
  },
  {
    "url": "assets/js/12.2149fc90.js",
    "revision": "cb7f1060bcc14f332ab62506aaebf2fd"
  },
  {
    "url": "assets/js/13.72de792e.js",
    "revision": "1f127ec10caff6092ca6345068033a6f"
  },
  {
    "url": "assets/js/14.10c2f53f.js",
    "revision": "aca2cb82895ccdae4eced6426f3fdb87"
  },
  {
    "url": "assets/js/15.b8ae9f17.js",
    "revision": "ae98c7cb30aae7a612d930381923f020"
  },
  {
    "url": "assets/js/16.1e237d49.js",
    "revision": "d8f8ea8aa182edcbe1f3b8f85c26f67f"
  },
  {
    "url": "assets/js/17.d54fd71f.js",
    "revision": "7a7912fded1e11c3035273454f61d016"
  },
  {
    "url": "assets/js/18.226095dd.js",
    "revision": "c1b44ffb36caa0fdb647e1c31a0cd234"
  },
  {
    "url": "assets/js/19.331fd599.js",
    "revision": "d87401a006448f18c6912d280d6ac2a2"
  },
  {
    "url": "assets/js/20.d3b1cd5f.js",
    "revision": "9f7060071e3b3b76d55a3108318dfab1"
  },
  {
    "url": "assets/js/21.78236972.js",
    "revision": "d264efccaed2a161dc40ede9297218c8"
  },
  {
    "url": "assets/js/22.6288c74d.js",
    "revision": "b432a71f83a1e799ee89f04b660068fb"
  },
  {
    "url": "assets/js/23.8e88a9e3.js",
    "revision": "132254dd9dfe604450cdc951416b1180"
  },
  {
    "url": "assets/js/24.58b3c3ba.js",
    "revision": "f1ca7c585c8c71c61e4f8255b1bc2624"
  },
  {
    "url": "assets/js/25.3b256144.js",
    "revision": "e6fe83f0f881137108aa47d5de8a31db"
  },
  {
    "url": "assets/js/26.429fb3d8.js",
    "revision": "a64ea08e571e4ea09db2817619249018"
  },
  {
    "url": "assets/js/27.fbeda744.js",
    "revision": "89ee3392b551e381f6c5db81326c2b7b"
  },
  {
    "url": "assets/js/28.7acc0afe.js",
    "revision": "4c8ef1d13663819ae3c5a42fd1b4bc26"
  },
  {
    "url": "assets/js/29.b176121b.js",
    "revision": "109e9785e91a67eda2366e8574a87b8d"
  },
  {
    "url": "assets/js/30.7acba246.js",
    "revision": "6e2402478159c2a785c329cacb026332"
  },
  {
    "url": "assets/js/31.870f5cb3.js",
    "revision": "57810b50e1c5e38b3ba07322092e61ee"
  },
  {
    "url": "assets/js/32.ddefa60b.js",
    "revision": "5cecdf0e44476e60fffd373eb8948612"
  },
  {
    "url": "assets/js/33.18bfbd24.js",
    "revision": "de9cc441080f4dab738a557be4772e6d"
  },
  {
    "url": "assets/js/34.97631b16.js",
    "revision": "bd8d708d7ea0f7163b31ff1caf296809"
  },
  {
    "url": "assets/js/35.ef91e15e.js",
    "revision": "0214de25474f46083520c624099dfd76"
  },
  {
    "url": "assets/js/36.c1a3d9a9.js",
    "revision": "5c43a17ddc0b02a4a5adcca93c6bd650"
  },
  {
    "url": "assets/js/37.64661e30.js",
    "revision": "99b82afcef773e68a7c788e26f6346ca"
  },
  {
    "url": "assets/js/38.acf8da57.js",
    "revision": "d06101f48ea2f0bc13baad5b7748eb2f"
  },
  {
    "url": "assets/js/39.11162a3c.js",
    "revision": "deb0a0593529c2218b01d306ce6db4be"
  },
  {
    "url": "assets/js/4.e5b7907c.js",
    "revision": "4d1b3e8787fbf56e5f778d70c34ec9fb"
  },
  {
    "url": "assets/js/40.d81914cd.js",
    "revision": "0732fc86055dcd4955ef3e37c534c6b6"
  },
  {
    "url": "assets/js/41.ccbf928e.js",
    "revision": "7004a2e3aa37471668d8fe962ec5dd40"
  },
  {
    "url": "assets/js/42.101c5b22.js",
    "revision": "beaf687c6879125e6c67f11f7ff7ade7"
  },
  {
    "url": "assets/js/43.df451528.js",
    "revision": "d42685683ef0085825e2629443f9ebbd"
  },
  {
    "url": "assets/js/44.46ae6838.js",
    "revision": "2f71279a6efc478a9cff010c084cd6b4"
  },
  {
    "url": "assets/js/45.271a48be.js",
    "revision": "c6836510a64ebae07ec7b1afcd1c5814"
  },
  {
    "url": "assets/js/46.807dfd92.js",
    "revision": "def684766da77685bb1758c535e67f26"
  },
  {
    "url": "assets/js/47.cc61c17b.js",
    "revision": "63dcbed0ba69b41bc5c42a69f68e58a5"
  },
  {
    "url": "assets/js/48.e5625fa5.js",
    "revision": "ae40f77270a5319dc6f9bb0c55b1b559"
  },
  {
    "url": "assets/js/49.75d68795.js",
    "revision": "3f4d6731ce54eebb5421cfbb3db381d4"
  },
  {
    "url": "assets/js/5.1e6b02f3.js",
    "revision": "4c0f75194903c5045f5da88f2c2e9583"
  },
  {
    "url": "assets/js/50.6ed66fad.js",
    "revision": "5f2d09027b99d3cc6e44e4b17f4ec9c4"
  },
  {
    "url": "assets/js/51.612a71bf.js",
    "revision": "26d8a5180dde45029c61c5f67a5f67c3"
  },
  {
    "url": "assets/js/52.7fbbd7d0.js",
    "revision": "37072a867f10778ce90fa2969b92beaf"
  },
  {
    "url": "assets/js/53.a04acc05.js",
    "revision": "ef2d0505556b675156b240036fb646b8"
  },
  {
    "url": "assets/js/54.00232bea.js",
    "revision": "1bd2ca1a0cfad7d42c29aacaf0f14c5c"
  },
  {
    "url": "assets/js/55.98c118ea.js",
    "revision": "cced5dc49dd21947a3007caa5f25cbb5"
  },
  {
    "url": "assets/js/56.dfdd6da9.js",
    "revision": "b2ab87fd2d510a913de7e49028e0f9c4"
  },
  {
    "url": "assets/js/57.99a80a46.js",
    "revision": "e591f5e7ef7be001b85a05efce940ffc"
  },
  {
    "url": "assets/js/58.1c52a5c3.js",
    "revision": "780b85303357da8a575e74b2394c74c3"
  },
  {
    "url": "assets/js/59.3c198ae1.js",
    "revision": "0f615386eab44008c34aa5a5730c23a6"
  },
  {
    "url": "assets/js/6.293d1370.js",
    "revision": "005577721076fdac21737cb08e83e383"
  },
  {
    "url": "assets/js/60.2e33936b.js",
    "revision": "eab181eeb862026344b02c06171eb57b"
  },
  {
    "url": "assets/js/7.d4495af0.js",
    "revision": "7d95d1fdd4b2e049e27c64bf5e763f14"
  },
  {
    "url": "assets/js/8.96971897.js",
    "revision": "5e15d70d44547e67f7006771d9d01a5b"
  },
  {
    "url": "assets/js/9.2ef68944.js",
    "revision": "4f52912b35cdcef77f4713f7124e55af"
  },
  {
    "url": "assets/js/app.995759c2.js",
    "revision": "91c2a71126000717ca2aef0eb3a51846"
  },
  {
    "url": "assets/js/vendors~flowchart.36848b96.js",
    "revision": "3803dc19ea7b901d9814b554be0382b3"
  },
  {
    "url": "assets/js/vendors~notification.5e49bf43.js",
    "revision": "ce9cbcc2523268d269d4c24cb8e53102"
  },
  {
    "url": "cache/cache-framework.html",
    "revision": "36f63ccd762154a4a0b968c7c46bf592"
  },
  {
    "url": "cache/cache-interview.html",
    "revision": "ac96931b3befc63e9e3d1de73dbd95ee"
  },
  {
    "url": "cache/cache-libs.html",
    "revision": "25efca1797a6265b5b334dac6416bb97"
  },
  {
    "url": "cache/ehcache.html",
    "revision": "8ef6229f64a1b659c5ec866ee5f85509"
  },
  {
    "url": "cache/http-cache.html",
    "revision": "016a33914ae5d34983d834d6a06e24cc"
  },
  {
    "url": "cache/index.html",
    "revision": "b6efef6eb75040d7dfc68f258b61a346"
  },
  {
    "url": "cache/memcached.html",
    "revision": "69319fc194f2da401e0e534512e1f032"
  },
  {
    "url": "framework/index.html",
    "revision": "6e83ff9aab6147fbf8804482600b0724"
  },
  {
    "url": "framework/mybatis.html",
    "revision": "50caca8db960aa8ffbf9ee6d9cc10401"
  },
  {
    "url": "images/dunwu-logo-100.png",
    "revision": "724d2445b33014d7c1ad9401d24a7571"
  },
  {
    "url": "images/dunwu-logo-200.png",
    "revision": "0a7effb33a04226ed0b9b6e68cbf694d"
  },
  {
    "url": "images/dunwu-logo-50.png",
    "revision": "9ada5bdcd34ac9c06dcd682b70a9016b"
  },
  {
    "url": "images/dunwu-logo.png",
    "revision": "f85f8cd2ab66992bc87b0bb314fdcf59"
  },
  {
    "url": "index.html",
    "revision": "16cb605bfa0085544ca3aabd7963e341"
  },
  {
    "url": "lib/bean/dozer.html",
    "revision": "0f645402c895c64331c573df4b8bb626"
  },
  {
    "url": "lib/bean/lombok.html",
    "revision": "013810b39b2f8072306f7dc11ca173ab"
  },
  {
    "url": "lib/index.html",
    "revision": "12cdfeec77da9f5d727ff0eb99b7d2f2"
  },
  {
    "url": "lib/javalib-log.html",
    "revision": "da924af8a0c7f21b434e6ee7059dc3de"
  },
  {
    "url": "lib/javalib-util.html",
    "revision": "7bf9c1a68412556d2067ae642be140ff"
  },
  {
    "url": "lib/javamail.html",
    "revision": "5b93bd45106594f42b7449831a78151d"
  },
  {
    "url": "lib/jsoup.html",
    "revision": "1adc7c2b1a6d7ab0b1b05d1db88e6ba2"
  },
  {
    "url": "lib/reflections.html",
    "revision": "bea3fd96d107f1785e1cc9e5d9eb3549"
  },
  {
    "url": "lib/serialized/index.html",
    "revision": "d85e7dc8d94d59bec5e0b4a8267eef3c"
  },
  {
    "url": "lib/serialized/javalib-binary.html",
    "revision": "6bece3bbaa77aa0eee295360311849c7"
  },
  {
    "url": "lib/serialized/javalib-json.html",
    "revision": "958e2271246f9ad2e006efaeabfc17e0"
  },
  {
    "url": "lib/template/freemark.html",
    "revision": "27c1493fa25749895bea300ed69ae489"
  },
  {
    "url": "lib/template/index.html",
    "revision": "fc27d30c881ef5c8396cc6c82e8d6fe5"
  },
  {
    "url": "lib/template/thymeleaf.html",
    "revision": "7e446ee9e9500c4444db6ac5b62922a1"
  },
  {
    "url": "lib/template/velocity.html",
    "revision": "5d39a91e1582a0a76d81f86d7385babf"
  },
  {
    "url": "lib/thumbnailator.html",
    "revision": "67615921f66df2269bb16430403f3d1b"
  },
  {
    "url": "lib/zxing.html",
    "revision": "01de59f3dff7f5105bb6de94771db5e7"
  },
  {
    "url": "limiting/hystrix.html",
    "revision": "5535876c3b2be67d9d29c377e423963b"
  },
  {
    "url": "mq/activemq.html",
    "revision": "70cfac4564090c24254e4a18f5f3798f"
  },
  {
    "url": "mq/index.html",
    "revision": "b3cbcbf4d541a675e532a381b38f3078"
  },
  {
    "url": "mq/mq-interview.html",
    "revision": "9a260a17a47107a37444b6254d3fabbe"
  },
  {
    "url": "mq/rocketmq.html",
    "revision": "b520e28c329fb0deed2dace6e4434444"
  },
  {
    "url": "security/index.html",
    "revision": "709e151ee656d394a80f9c1ccc41d804"
  },
  {
    "url": "security/shiro.html",
    "revision": "498c38a318b5fd4e8b4bdb23f6039cb6"
  },
  {
    "url": "security/spring-security.html",
    "revision": "20f1cd082449f8269a1a5e451b75be1c"
  },
  {
    "url": "server/index.html",
    "revision": "df0395212b44931c8a1542bbde4f1413"
  },
  {
    "url": "server/jetty.html",
    "revision": "0f4bd8567bb146f9e42cfd868c77143d"
  },
  {
    "url": "server/tomcat-and-jetty.html",
    "revision": "263f33e7c8bc8ec2878065f09b99831e"
  },
  {
    "url": "server/Tomcat优化.html",
    "revision": "e78bd2ec573965e7b61967d34e091e2e"
  },
  {
    "url": "server/Tomcat容器.html",
    "revision": "d72d8d216c8f3223d28015035824cc5d"
  },
  {
    "url": "server/Tomcat应用指南.html",
    "revision": "091f7a41d9374d33aeb759e69b7de2a8"
  },
  {
    "url": "server/Tomcat连接器.html",
    "revision": "b6664b0b7d8eb6a6f318517e8c200894"
  },
  {
    "url": "soa/dubbo.html",
    "revision": "a667e0e3796a43ecebef16f4c330f6ff"
  },
  {
    "url": "soa/index.html",
    "revision": "2edcc23951522a6a144dede26dc9e64d"
  },
  {
    "url": "soa/netty.html",
    "revision": "5be139bcf10bd971c98f88ebb8fcb0f5"
  },
  {
    "url": "test/index.html",
    "revision": "3832bb0373f33c39b13209c33ef6bae3"
  },
  {
    "url": "test/jmeter.html",
    "revision": "a86e3b5b334e0f06ff000e8b111aed6d"
  },
  {
    "url": "test/jmh.html",
    "revision": "b37bf61dbbb53a411cb8e2175534ba8d"
  },
  {
    "url": "test/junit.html",
    "revision": "7ca82615dfab2b23133e259652965b02"
  },
  {
    "url": "test/mockito.html",
    "revision": "b4d12747ebba5e2060894ec396d7d7ec"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
