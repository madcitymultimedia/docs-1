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
    "revision": "cf9bbd095765e80d2367876e9f7f01d3"
  },
  {
    "url": "assets/css/0.styles.1622bc4f.css",
    "revision": "364735694c02d5a45c272ccef4080f22"
  },
  {
    "url": "assets/img/accordion.c53c2160.png",
    "revision": "c53c2160beaff1bf09e2d7c68b9c428a"
  },
  {
    "url": "assets/img/active_plugins.f753cef9.png",
    "revision": "f753cef93c12b2ac64a11839ad158459"
  },
  {
    "url": "assets/img/background.be51f66e.png",
    "revision": "be51f66ead40f19762c1499a260dfddc"
  },
  {
    "url": "assets/img/box-shadow.20e92e12.png",
    "revision": "20e92e12c4326009549c8240d8aa4ab8"
  },
  {
    "url": "assets/img/button_set.e1c5f873.png",
    "revision": "e1c5f87341d8616302a9e875c98e5009"
  },
  {
    "url": "assets/img/checkbox.8ff588d8.png",
    "revision": "8ff588d87c0766105a694c700e80868d"
  },
  {
    "url": "assets/img/color_gradient.4086d2f4.png",
    "revision": "4086d2f4fabc3af84a1bbff297db08ef"
  },
  {
    "url": "assets/img/color_rgba.a7a2975a.png",
    "revision": "a7a2975aac49bf53bc9a1621a49afc18"
  },
  {
    "url": "assets/img/color_schemes_picker_color.4506076b.png",
    "revision": "4506076b88c5cc5df3ee4708df433466"
  },
  {
    "url": "assets/img/color_schemes_picker.5ca88a95.png",
    "revision": "5ca88a9593b59d6ce795f3cf5119536f"
  },
  {
    "url": "assets/img/color_schemes.2b73ff48.png",
    "revision": "2b73ff48d1ac4ff299eba52827647beb"
  },
  {
    "url": "assets/img/color-palette.bdece04a.png",
    "revision": "bdece04a56419be319439a05a83571e5"
  },
  {
    "url": "assets/img/color.f1100a7f.png",
    "revision": "f1100a7f0b926c3e03a562283b0b12e3"
  },
  {
    "url": "assets/img/copy.461f2286.svg",
    "revision": "461f22861ca3b3207f41f4914639140e"
  },
  {
    "url": "assets/img/editor.0e39ed42.png",
    "revision": "0e39ed428e8debd9d069bd7fdc0f2249"
  },
  {
    "url": "assets/img/gallery.db07115f.png",
    "revision": "db07115fa418bb7e697ebad58dfec802"
  },
  {
    "url": "assets/img/google_maps.60a06a00.png",
    "revision": "60a06a000a4013727f40f8b4055f4b0a"
  },
  {
    "url": "assets/img/hints_alignment.63b7effc.jpg",
    "revision": "63b7effc1a8575d280f8f6b730f74378"
  },
  {
    "url": "assets/img/hints.f21699b3.png",
    "revision": "f21699b328a9bd6965a2e5ad998564b4"
  },
  {
    "url": "assets/img/icon_select.fcf0619c.png",
    "revision": "fcf0619c47a2ab496846458980a2a734"
  },
  {
    "url": "assets/img/image_select.4e71f892.png",
    "revision": "4e71f89281b32d8817ccfc329e7917c7"
  },
  {
    "url": "assets/img/io.622a8677.png",
    "revision": "622a8677618d8982f3710b2fa27f508e"
  },
  {
    "url": "assets/img/media.d38f5d91.png",
    "revision": "d38f5d911b43bf5960d64528b49f43b0"
  },
  {
    "url": "assets/img/multi_text.29cbde62.png",
    "revision": "29cbde62bdeb76a9e52b82521db8ae6d"
  },
  {
    "url": "assets/img/palette_color.eeac131a.png",
    "revision": "eeac131a92b1ed2408981db8791c35a7"
  },
  {
    "url": "assets/img/radio.209501f2.png",
    "revision": "209501f2fa4cb72bd6febaabbfcc144a"
  },
  {
    "url": "assets/img/raw_full_width.52d22ecf.png",
    "revision": "52d22ecf53886f0d9d8a4f20c18c559f"
  },
  {
    "url": "assets/img/raw_sectioned.cdd956b1.png",
    "revision": "cdd956b1f2fd197b6e87508b3a585730"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/section.309ec967.png",
    "revision": "309ec967c4769899b632e64e7c7caad9"
  },
  {
    "url": "assets/img/slider.82e0bf9a.png",
    "revision": "82e0bf9a2183def90b87728b42f4c789"
  },
  {
    "url": "assets/img/slides.8b60ff5a.png",
    "revision": "8b60ff5a17111c97f8cdb058739a903c"
  },
  {
    "url": "assets/img/support_hash.e4e84d3d.png",
    "revision": "e4e84d3d9b5219b4a91e657de563b8c5"
  },
  {
    "url": "assets/img/text-multidimensional.9034ca24.png",
    "revision": "9034ca24d0bda48c0533b362fdfc85b2"
  },
  {
    "url": "assets/img/text-simple.08f2a147.png",
    "revision": "08f2a14727cb26b3bd4778dc7c17b1ec"
  },
  {
    "url": "assets/img/textarea.8550ef5d.png",
    "revision": "8550ef5da1606f4da02ef25d1a5aec70"
  },
  {
    "url": "assets/img/typography.25c0f12a.png",
    "revision": "25c0f12ac576e496984ff7f7fbeafd5c"
  },
  {
    "url": "assets/js/10.7f4d8777.js",
    "revision": "599eee104d2c0702e33cefdbd820d870"
  },
  {
    "url": "assets/js/100.9352df19.js",
    "revision": "10a3ac8b8613f791767433110f9078fb"
  },
  {
    "url": "assets/js/101.51a3fd53.js",
    "revision": "763782cf7999a2fc0e69910534f0c416"
  },
  {
    "url": "assets/js/102.8a180029.js",
    "revision": "3463d584c67a0f6ed0fd74675c73a626"
  },
  {
    "url": "assets/js/103.896aa2ce.js",
    "revision": "38d3684235697f7f8187f99c881ae125"
  },
  {
    "url": "assets/js/104.b7fa9e77.js",
    "revision": "1db166d1d130b991aaca301e5d3298c8"
  },
  {
    "url": "assets/js/105.e80c91bb.js",
    "revision": "fff291f6eade359e6886270db0df142f"
  },
  {
    "url": "assets/js/106.c4826a59.js",
    "revision": "2c7a6e9e312c16de5fab408821850ae3"
  },
  {
    "url": "assets/js/107.cbb48507.js",
    "revision": "5c14ed61d56f5ae334374ff93f94dee6"
  },
  {
    "url": "assets/js/108.b34f2c97.js",
    "revision": "a4aefe924964e1a81f4530a8ad4db2d4"
  },
  {
    "url": "assets/js/109.aa1a9643.js",
    "revision": "0b44b518a874d5229d13af0c2530042d"
  },
  {
    "url": "assets/js/11.cd5bd12f.js",
    "revision": "a55f0d89a6a22788ac00cfd8724fb5ee"
  },
  {
    "url": "assets/js/12.b68a5628.js",
    "revision": "fc8ea2a07360b3dcc6ae732f00d12323"
  },
  {
    "url": "assets/js/13.a10c6daa.js",
    "revision": "16f2b1db8e42a32fce257f197e2da1b6"
  },
  {
    "url": "assets/js/14.e5824020.js",
    "revision": "789577d30fce8284436244a737cd84a0"
  },
  {
    "url": "assets/js/15.707683f2.js",
    "revision": "40e4ef46854ff2ff3af9201d53c7dcd9"
  },
  {
    "url": "assets/js/16.a0452190.js",
    "revision": "a6d58736cd693dcb6609c5cd6f3b579c"
  },
  {
    "url": "assets/js/17.7ae1880b.js",
    "revision": "d5836aed09e0d429bed3aeb0b1209503"
  },
  {
    "url": "assets/js/18.17358935.js",
    "revision": "c183c47e29a659e376fc27f8e6640191"
  },
  {
    "url": "assets/js/19.dd3b860f.js",
    "revision": "fa560bf0e3ca4cbcfeda5f108d6f4e94"
  },
  {
    "url": "assets/js/20.8d00e6be.js",
    "revision": "63435927ac09cfa28421a1f09fe82a96"
  },
  {
    "url": "assets/js/21.33e2d71a.js",
    "revision": "a8617f3f082f2affdbae00f104d592b3"
  },
  {
    "url": "assets/js/22.db0a9e02.js",
    "revision": "c520fc4b8b859112491053e79e16cf21"
  },
  {
    "url": "assets/js/23.a8509d86.js",
    "revision": "a94dc26c5b6e614f21c591e494b00680"
  },
  {
    "url": "assets/js/24.a20d1438.js",
    "revision": "9f33cf2d672f2e4cdea9778daf7ca25e"
  },
  {
    "url": "assets/js/25.12d54bcf.js",
    "revision": "69638347024915530137f915d9cc969b"
  },
  {
    "url": "assets/js/26.60b60ad6.js",
    "revision": "0efdba832eaff2c9f22869eb5c2704a1"
  },
  {
    "url": "assets/js/27.9591b968.js",
    "revision": "3450dd0176e2ae451eec2011b7c07516"
  },
  {
    "url": "assets/js/28.2037c27c.js",
    "revision": "ca91af8a42fde1dea8291264045178eb"
  },
  {
    "url": "assets/js/29.785bba8f.js",
    "revision": "25076504c83b90f7b2deb52c1811064a"
  },
  {
    "url": "assets/js/3.50875192.js",
    "revision": "d0cbab71b03c5bb506f9e74324ff75f0"
  },
  {
    "url": "assets/js/30.c1c1eabb.js",
    "revision": "fb65ddbfc62546b23f6e2b5af237c3c0"
  },
  {
    "url": "assets/js/31.27ad2925.js",
    "revision": "987dc408377ab043b6d90a8f72f397f6"
  },
  {
    "url": "assets/js/32.2fcd7cf9.js",
    "revision": "7642715692cb62b5c80c34bf490bebde"
  },
  {
    "url": "assets/js/33.f0b1da71.js",
    "revision": "ec2c647f94573525002ef8e13ca5fcaf"
  },
  {
    "url": "assets/js/34.c6dfd2e8.js",
    "revision": "f557598e7fb82552377106fb570c383d"
  },
  {
    "url": "assets/js/35.f0b50ba9.js",
    "revision": "80adcab37cca616f57a8b2f1c6d3c5aa"
  },
  {
    "url": "assets/js/36.7bdd3b82.js",
    "revision": "7f1c1ce65b73d9ae478503b4fe3fb0d2"
  },
  {
    "url": "assets/js/37.0721dc7a.js",
    "revision": "d0ed0f4795662ac9f970d422769a80e8"
  },
  {
    "url": "assets/js/38.1a8353f6.js",
    "revision": "050dea58b6cb5fa0923ff9782fb81de3"
  },
  {
    "url": "assets/js/39.cf15abc8.js",
    "revision": "2f760d10bc73c5b6ba267b3de4f9ecc8"
  },
  {
    "url": "assets/js/4.c4256a84.js",
    "revision": "f8f15996a6758e3027f978b4da0c2484"
  },
  {
    "url": "assets/js/40.6323bb2a.js",
    "revision": "9e62c30b1904f5dc79127cd55922853e"
  },
  {
    "url": "assets/js/41.9c398d2f.js",
    "revision": "e0551a22180973923ab992db27a6f8cf"
  },
  {
    "url": "assets/js/42.2791bf5d.js",
    "revision": "106dfc2b1a7c869992fd2ee3c4ae666c"
  },
  {
    "url": "assets/js/43.031769ec.js",
    "revision": "9c2573f02ba3d62687ad6bf3fcd0fe52"
  },
  {
    "url": "assets/js/44.541e9463.js",
    "revision": "0742414c8b31aa944418407a1dae2ecc"
  },
  {
    "url": "assets/js/45.7e6092dc.js",
    "revision": "14133c9d14146ecd915d679fba066f6b"
  },
  {
    "url": "assets/js/46.4170c112.js",
    "revision": "d2b6b36548bce43f9909d1adf2ee390e"
  },
  {
    "url": "assets/js/47.0044fc25.js",
    "revision": "7ee9247c33c479c980630dfe757a013b"
  },
  {
    "url": "assets/js/48.bca5c182.js",
    "revision": "48821a18096edb474b3533484944758b"
  },
  {
    "url": "assets/js/49.a23ae74c.js",
    "revision": "39a31f2941e9a232f15bf03e7949ad34"
  },
  {
    "url": "assets/js/5.abed60f2.js",
    "revision": "4af20fc8bf50f1ab5543a4a4dd69b16a"
  },
  {
    "url": "assets/js/50.3ebc233c.js",
    "revision": "53b214f829ea4c80a0245df8a07d9326"
  },
  {
    "url": "assets/js/51.20af4d30.js",
    "revision": "99244a78917e742136f1012cdb0b6401"
  },
  {
    "url": "assets/js/52.77eafeb0.js",
    "revision": "0e6b5b6fa59d96a5a80ed12f53b763dc"
  },
  {
    "url": "assets/js/53.531f019e.js",
    "revision": "0933e555dc3476e7b41134e843a99843"
  },
  {
    "url": "assets/js/54.5d9dfda7.js",
    "revision": "028cbd96b382458199c7784d288ea9f4"
  },
  {
    "url": "assets/js/55.18c3f8e4.js",
    "revision": "ecbded205be16ecdd9965a9569fa6a3b"
  },
  {
    "url": "assets/js/56.bd44d255.js",
    "revision": "6c11c73cf965d6f37659df496752d14e"
  },
  {
    "url": "assets/js/57.31304c0a.js",
    "revision": "7605022490d2a1eda6e4ca9c9f346675"
  },
  {
    "url": "assets/js/58.9e594ed5.js",
    "revision": "bea992eb8b0a0862d3138c976682585b"
  },
  {
    "url": "assets/js/59.2570de49.js",
    "revision": "c6f97bf0f93013c254aaeb5f3be5651d"
  },
  {
    "url": "assets/js/6.68fd3aff.js",
    "revision": "5db52c6c9884b4fe078171fbc34f2b86"
  },
  {
    "url": "assets/js/60.b2e50a1f.js",
    "revision": "dcf1752cf862242951ad4f8d2a4398b9"
  },
  {
    "url": "assets/js/61.35ac75d2.js",
    "revision": "baf3418de7799fe4a956be02bbb22402"
  },
  {
    "url": "assets/js/62.02b06b0d.js",
    "revision": "c6f3c4d989a54144d45ac5bb300f6740"
  },
  {
    "url": "assets/js/63.2dadb231.js",
    "revision": "fdfa998cb45f165c0e5e355a6c9d2e2a"
  },
  {
    "url": "assets/js/64.1a53e24e.js",
    "revision": "47c3c0d498e79d9df50e9920c174e288"
  },
  {
    "url": "assets/js/65.b24c6522.js",
    "revision": "774d0f3c61321ee118df944615c2beb2"
  },
  {
    "url": "assets/js/66.1a8121ae.js",
    "revision": "479f3991126c70c4feedb17453a2d547"
  },
  {
    "url": "assets/js/67.6b7e6f37.js",
    "revision": "cb15631c0990a8c7054b154ad220517e"
  },
  {
    "url": "assets/js/68.076261ff.js",
    "revision": "a50e1bc5d33bb215d005f49f32c25122"
  },
  {
    "url": "assets/js/69.9dda1792.js",
    "revision": "2a76238c48b155acc77649c26ef0c96a"
  },
  {
    "url": "assets/js/7.1b0c72fb.js",
    "revision": "aa380a4b7f9ed1de9d4934225fa618d5"
  },
  {
    "url": "assets/js/70.30559d09.js",
    "revision": "529d12fc9f2b50190cefdf571c9bcce2"
  },
  {
    "url": "assets/js/71.42b9ec85.js",
    "revision": "f93ac3251dae714829d5051ba8a76445"
  },
  {
    "url": "assets/js/72.b6271174.js",
    "revision": "8cbbe4652e0ce3783fda697a5f13d2df"
  },
  {
    "url": "assets/js/73.3df631b2.js",
    "revision": "5a85e3f74a1d51b13814e15158a1d575"
  },
  {
    "url": "assets/js/74.b4e0f28c.js",
    "revision": "ed07b96207feec99759e4a8d5f732975"
  },
  {
    "url": "assets/js/75.51434dc8.js",
    "revision": "75c4277cc5355c2cf3357fac3d8ad736"
  },
  {
    "url": "assets/js/76.68d83143.js",
    "revision": "8b1a6d6585a5533acf5fc3dc7cc5b482"
  },
  {
    "url": "assets/js/77.dcc2db02.js",
    "revision": "4c17c08e5678fae45f5efc1dfcd68d39"
  },
  {
    "url": "assets/js/78.4a90d2fa.js",
    "revision": "bfde69985920bc8542c3ef116e3757e0"
  },
  {
    "url": "assets/js/79.883588b9.js",
    "revision": "eb18521363e9bb985cdc0fbaf2068599"
  },
  {
    "url": "assets/js/8.f320683d.js",
    "revision": "94d6533ee9f78c5abc3e73d6cb08b2d5"
  },
  {
    "url": "assets/js/80.bdf6dcc3.js",
    "revision": "b2c7d3900be1e3592bdf30bf0754579d"
  },
  {
    "url": "assets/js/81.091971e8.js",
    "revision": "f0c0add01a8c16b896dc3b28de7c77de"
  },
  {
    "url": "assets/js/82.ae559c4a.js",
    "revision": "1503bcacb357b76868d1cb384ecbf7c3"
  },
  {
    "url": "assets/js/83.f51d0c67.js",
    "revision": "43f7843d5780f53bdd7db73b1b3aff21"
  },
  {
    "url": "assets/js/84.ddfef01d.js",
    "revision": "4c52f4e211465642bb7b001d25c01096"
  },
  {
    "url": "assets/js/85.f12b3010.js",
    "revision": "f1a937879f1f27b217697e541c181592"
  },
  {
    "url": "assets/js/86.03ae78a5.js",
    "revision": "63109f24b2e384f001e050aa01f26ab3"
  },
  {
    "url": "assets/js/87.aa9848f0.js",
    "revision": "6aedc787056029f25138fac583f1b216"
  },
  {
    "url": "assets/js/88.dd1b8dfa.js",
    "revision": "425cfb5f7aebd72a841bb93865ed3b13"
  },
  {
    "url": "assets/js/89.824bbaaf.js",
    "revision": "ac01e1041da9fa2a47cf6beb4a2cab78"
  },
  {
    "url": "assets/js/9.70ad9ae7.js",
    "revision": "e97fd8257958629378e85aadd7339bcf"
  },
  {
    "url": "assets/js/90.5e37717a.js",
    "revision": "8e3790d2311dd1bb85c525c8ca6e0ba8"
  },
  {
    "url": "assets/js/91.27250290.js",
    "revision": "07c6b35ede580f6dd235e2540327f1d6"
  },
  {
    "url": "assets/js/92.06626e0d.js",
    "revision": "120ca4bca8b888e6707de716e68b57b9"
  },
  {
    "url": "assets/js/93.cfb93a2c.js",
    "revision": "c39a46e6ba2dfec7f7777f9e3db7c8fc"
  },
  {
    "url": "assets/js/94.f76eed84.js",
    "revision": "30074f34eb821d705147c35bd7619421"
  },
  {
    "url": "assets/js/95.61c62a14.js",
    "revision": "62da6d88cfb1d609a4900fa2e7a65e5d"
  },
  {
    "url": "assets/js/96.06a1b6b0.js",
    "revision": "52fdb4d4cb31320504133d364e528110"
  },
  {
    "url": "assets/js/97.4779c2f9.js",
    "revision": "fb375c4c78fe6eec6d30765077f96762"
  },
  {
    "url": "assets/js/98.2561d7d8.js",
    "revision": "78690841970ac28d06374d534eba3256"
  },
  {
    "url": "assets/js/99.1bc0b078.js",
    "revision": "e931faf148d10a96668994db3c6d94fc"
  },
  {
    "url": "assets/js/app.429bc82b.js",
    "revision": "b1c7ab0d01bd112b34e6542c71276e16"
  },
  {
    "url": "assets/js/vendors~docsearch.721c71e8.js",
    "revision": "d5ce2e0f73a0225de08859ab80434f24"
  },
  {
    "url": "configuration/api.html",
    "revision": "38b5dc629b500061896cdca9c81e8685"
  },
  {
    "url": "configuration/fields/arguments.html",
    "revision": "0c111bb0c04308b03ff645b3deff3c4b"
  },
  {
    "url": "configuration/fields/attributes.html",
    "revision": "3248a607769b04b9a44d57d9bcf01c1d"
  },
  {
    "url": "configuration/fields/compiler.html",
    "revision": "30dd9eaab2b5fd5aad11be956914863c"
  },
  {
    "url": "configuration/fields/data.html",
    "revision": "efd3e7dc15f10c1f1ca0c9e87c0e1e21"
  },
  {
    "url": "configuration/fields/hints.html",
    "revision": "a8554e59fc146974acc4ebbd77049cc1"
  },
  {
    "url": "configuration/fields/output-variables.html",
    "revision": "21146a81767615bfa50b52e720e767de"
  },
  {
    "url": "configuration/fields/output.html",
    "revision": "841dbfd20a72c86e6acf9c6f5790092d"
  },
  {
    "url": "configuration/fields/permissions.html",
    "revision": "4dba1522fb5b7fcd3c3a66bd9123a97e"
  },
  {
    "url": "configuration/fields/required.html",
    "revision": "4b88bf2d1ba1ef58e7ede19957c7bfdc"
  },
  {
    "url": "configuration/fields/validate.html",
    "revision": "b503c87d03e4da6fd2bd843fbec9add6"
  },
  {
    "url": "configuration/global_arguments.html",
    "revision": "b47f77d14f55cb072e36b589e611d3ed"
  },
  {
    "url": "configuration/hooks/hooks-action.html",
    "revision": "2bd139d6abd57815e4c57b9c7de46370"
  },
  {
    "url": "configuration/hooks/hooks-filter.html",
    "revision": "49deecb4d18c4ac099883d537416dc35"
  },
  {
    "url": "configuration/index.html",
    "revision": "7b7aefce829df5dd3d4ad17902069fcb"
  },
  {
    "url": "configuration/objects/field.html",
    "revision": "3813251d6a3c26cd90c9ff3e01b16330"
  },
  {
    "url": "configuration/objects/section.html",
    "revision": "1107d02181b207d5589e3d5d0b8cb82f"
  },
  {
    "url": "contributing.html",
    "revision": "93db499259c09c61e0247102658c6fc8"
  },
  {
    "url": "core-extensions/customizer-lite.html",
    "revision": "2e0b6dd591d02c98feeb3b2a281832d3"
  },
  {
    "url": "core-extensions/import-export.html",
    "revision": "fc8b28cd55c1f60e8ea504a32038fa4f"
  },
  {
    "url": "core-extensions/index.html",
    "revision": "b619b192504eaa8a4e9caee6f36b7e46"
  },
  {
    "url": "core-extensions/metaboxes.html",
    "revision": "418f4fcbca44897353ed079b8b860300"
  },
  {
    "url": "core-extensions/options-object.html",
    "revision": "5776deb9d984697a2c3c6b5923d821cf"
  },
  {
    "url": "core-fields/ace-editor.html",
    "revision": "59d0f600864d66a5e0769aa11fe8657e"
  },
  {
    "url": "core-fields/background.html",
    "revision": "fded883475430fe93027bf3db9514f3e"
  },
  {
    "url": "core-fields/border.html",
    "revision": "9c1b43902e5ce7c900cf56cf0ddcabf9"
  },
  {
    "url": "core-fields/box-shadow.html",
    "revision": "d177707ad5177d267fd3a1036de49dfe"
  },
  {
    "url": "core-fields/button-set.html",
    "revision": "240fe08fdbf7ac9e3adad6ff7e4f47a4"
  },
  {
    "url": "core-fields/checkbox.html",
    "revision": "1eefa9b2ade85821fcf4d44b76024c6c"
  },
  {
    "url": "core-fields/color-gradient.html",
    "revision": "b5049adb64e47b76f18f1e68733a715d"
  },
  {
    "url": "core-fields/color-palette.html",
    "revision": "c080741debd6394f5793c6bddebf001c"
  },
  {
    "url": "core-fields/color-rgba.html",
    "revision": "618ff51fca173572507a1c0a36231252"
  },
  {
    "url": "core-fields/color.html",
    "revision": "3462ff3948dd916afbf7cb530fd23f89"
  },
  {
    "url": "core-fields/date.html",
    "revision": "e8a3b58d38b5d32af7c641339a926cc7"
  },
  {
    "url": "core-fields/dimensions.html",
    "revision": "0ced2af6dd0ba468cc5b04e2b50366e6"
  },
  {
    "url": "core-fields/divide.html",
    "revision": "52d307fb8f427fbb4139907fd261d984"
  },
  {
    "url": "core-fields/editor.html",
    "revision": "012069ca097cfbf45049913aa0a398bb"
  },
  {
    "url": "core-fields/gallery.html",
    "revision": "f4c0c39c869912c72f41177fa25a1941"
  },
  {
    "url": "core-fields/image-select.html",
    "revision": "e847cb8b9794e1aff420cc627792a7c7"
  },
  {
    "url": "core-fields/index.html",
    "revision": "95311675fd0d9c5504baa8a93a23b6cc"
  },
  {
    "url": "core-fields/info.html",
    "revision": "97b7f960efa23ff20507a71cdaa33a6b"
  },
  {
    "url": "core-fields/link-color.html",
    "revision": "5c9a5a0e702be4c12bcfe5d864efc074"
  },
  {
    "url": "core-fields/media.html",
    "revision": "9c6e7aedadbfe74ee24dec002e1c290e"
  },
  {
    "url": "core-fields/multi-text.html",
    "revision": "0c3abb057b117b691a68f16c46fbfa38"
  },
  {
    "url": "core-fields/palette-color.html",
    "revision": "15c0ef2db7f42a131607b7653a17c989"
  },
  {
    "url": "core-fields/password.html",
    "revision": "530d6ed680a1595aa3d7c4252a6d6295"
  },
  {
    "url": "core-fields/radio.html",
    "revision": "79321db3098d2f127f233e0f3e6d35f1"
  },
  {
    "url": "core-fields/raw.html",
    "revision": "17028ca0be7f84211becb79539581538"
  },
  {
    "url": "core-fields/section.html",
    "revision": "d49b60d97b054523e57e9a09ec56a1ed"
  },
  {
    "url": "core-fields/select-image.html",
    "revision": "62c77d139e06c6f631bba7e52352d3c3"
  },
  {
    "url": "core-fields/select.html",
    "revision": "85dc8e1f12641013e773e4046c561c89"
  },
  {
    "url": "core-fields/slider.html",
    "revision": "0ebcdfb24014a2bf8c72406c9f8307fa"
  },
  {
    "url": "core-fields/slides.html",
    "revision": "6290fdf14164c54bcd2ce2ab5215eaa2"
  },
  {
    "url": "core-fields/sortable.html",
    "revision": "9c6270d48ee58b8ab9844dddf44270c9"
  },
  {
    "url": "core-fields/sorter.html",
    "revision": "e534a73d2dc88cfd0edd8bf0198fb3e6"
  },
  {
    "url": "core-fields/spacing.html",
    "revision": "315c0a74abade3384b85e67141da0798"
  },
  {
    "url": "core-fields/spinner.html",
    "revision": "81d57d3435230c9628acfe0937500283"
  },
  {
    "url": "core-fields/switch.html",
    "revision": "7d3b8cd47bc6e2df2497dae3b274a940"
  },
  {
    "url": "core-fields/text.html",
    "revision": "086c8429be4f56cc33e1edf5862ecc26"
  },
  {
    "url": "core-fields/textarea.html",
    "revision": "9b28d9fa7ffd36c8d147c4b878d37f67"
  },
  {
    "url": "core-fields/typography.html",
    "revision": "fe50082f361b5a35d8852a5fbaac686f"
  },
  {
    "url": "core/index.html",
    "revision": "a22cd2e2e89226acc8f82e515b229c6b"
  },
  {
    "url": "faq/index.html",
    "revision": "c3d53df4386246cd78adfbbcccb3b27e"
  },
  {
    "url": "guides/advanced/embedding-redux.html",
    "revision": "49584ea76b1f7f62a714fad919eee86b"
  },
  {
    "url": "guides/advanced/health-status-report.html",
    "revision": "3009593f9600275efb5391a206184e52"
  },
  {
    "url": "guides/advanced/increasing-the-memory-limit.html",
    "revision": "8eb8005985037d990b961e0a8c854d79"
  },
  {
    "url": "guides/advanced/overriding-default-css.html",
    "revision": "c8d0877acc0c37b6a468aaeaa9c1a4f3"
  },
  {
    "url": "guides/advanced/panel-templates.html",
    "revision": "259813fa2c435d0a25e62d396a58a969"
  },
  {
    "url": "guides/advanced/updating-an-option-manually.html",
    "revision": "b406db50a7f446e7b23b943107a34435"
  },
  {
    "url": "guides/advanced/using-another-icon-web-font.html",
    "revision": "87c0ca7636356aa80735ce6b644f9126"
  },
  {
    "url": "guides/advanced/wp-filesystem-proxy.html",
    "revision": "acea662d6cf938e710e1f859501d6fbc"
  },
  {
    "url": "guides/advanced/wpml-integration.html",
    "revision": "113ca7415994886172bae74f8f10fb4a"
  },
  {
    "url": "guides/basics/core-concepts.html",
    "revision": "1a093d82b8f9c3b64b14577723e07110"
  },
  {
    "url": "guides/basics/customizer-integration.html",
    "revision": "e9eafe6358f31115ef2ace342943ec50"
  },
  {
    "url": "guides/basics/generating-a-support-hash.html",
    "revision": "bb3e9e090ce2a58c692823b06ed0ce72"
  },
  {
    "url": "guides/basics/getting-started.html",
    "revision": "b0ac6ea73d13b06f28dabcfb4b46acaa"
  },
  {
    "url": "guides/basics/install.html",
    "revision": "bdbc8f686dcf904388d2c25d0e4dcf11"
  },
  {
    "url": "guides/basics/removing-demo-mode-notice.html",
    "revision": "cf463622e94caaaad1165a45a4650307"
  },
  {
    "url": "guides/basics/support-defined.html",
    "revision": "ccf1207d48dc46fd733e53bbb78e9c9e"
  },
  {
    "url": "guides/basics/using-extensions.html",
    "revision": "9438e02e1f339384f5357f059657af8b"
  },
  {
    "url": "guides/basics/using-tgm-plugin-activation.html",
    "revision": "0dcc7b00b7fb99ae1cbea84899b99128"
  },
  {
    "url": "guides/index.html",
    "revision": "c7a4a49a99ede71969c07e8eb2d9bdc8"
  },
  {
    "url": "guides/other/ide-snippets-and-templates.html",
    "revision": "84b76e0907de9f0d6be612620c52b69b"
  },
  {
    "url": "guides/other/migration-guide.html",
    "revision": "506e44342f0d205dd739a83d9a1cda7d"
  },
  {
    "url": "guides/other/redux-converter.html",
    "revision": "bee5c7aea765239ac69905de53efb74c"
  },
  {
    "url": "guides/other/theme-check-warnings-and-errors.html",
    "revision": "a4b2d2ec6b264f6aa661a62818c1b9f2"
  },
  {
    "url": "guides/other/wordpress.org-submissions.html",
    "revision": "65982758c1a66e03cbd62a5882026d5a"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "4cbb35f017bd1c5a22dce2d502a349a7"
  },
  {
    "url": "logo.png",
    "revision": "31e024deb70868393ff0b974e35d1e34"
  },
  {
    "url": "premium/accordion.html",
    "revision": "8694a66fb1a4ffa62b31dc5c70b9c1a6"
  },
  {
    "url": "premium/color-schemes.html",
    "revision": "67b18651d245d2504cb28b452c84e470"
  },
  {
    "url": "premium/custom-fonts.html",
    "revision": "371046114fe9379988202abe93f7b0df"
  },
  {
    "url": "premium/date-time-picker.html",
    "revision": "7d77b2f0f6d78735831a3d42f5379e3e"
  },
  {
    "url": "premium/google-maps.html",
    "revision": "c27ff4e3df773f63bb46d605e66a0325"
  },
  {
    "url": "premium/icon-select.html",
    "revision": "6ff02bdce993b59695289c3e68b857a9"
  },
  {
    "url": "premium/index.html",
    "revision": "f88be3e2e0bdd04bee961892d00a3cac"
  },
  {
    "url": "premium/js-button.html",
    "revision": "7758f1a3ce0006d1ac345b48a641d4de"
  },
  {
    "url": "premium/multi-media.html",
    "revision": "1083f296b61d32ff48290e3725932568"
  },
  {
    "url": "premium/repeater.html",
    "revision": "dd870de51053fd4c526fc5645732c147"
  },
  {
    "url": "premium/social-profiles.html",
    "revision": "ec509ff1cd9c426abdedf1e38d999782"
  },
  {
    "url": "premium/taxonomy.html",
    "revision": "dbb54cbd6b2f57823e0f4629bab8bcde"
  },
  {
    "url": "redux-2x.png",
    "revision": "a3c7a8b9bdaf7c90d53cb80df4ddf319"
  },
  {
    "url": "redux.png",
    "revision": "73ee94cef04626971d17266e344ba958"
  },
  {
    "url": "top_logo-2x.png",
    "revision": "5fa8e8952709be452e415f738b0f4c15"
  },
  {
    "url": "top_logo.png",
    "revision": "12b361357b610542d3baeb79947cba6c"
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
