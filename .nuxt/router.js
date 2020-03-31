import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c178df52 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _67becacb = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _41c4aa2c = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _1e687fda = () => interopDefault(import('../pages/models/index.vue' /* webpackChunkName: "pages/models/index" */))
const _4cfe649c = () => interopDefault(import('../pages/sound/index.vue' /* webpackChunkName: "pages/sound/index" */))
const _2521237a = () => interopDefault(import('../pages/work/index.vue' /* webpackChunkName: "pages/work/index" */))
const _da45aea2 = () => interopDefault(import('../pages/blog/article.vue' /* webpackChunkName: "pages/blog/article" */))
const _34e89d6a = () => interopDefault(import('../pages/blog/blog234.vue' /* webpackChunkName: "pages/blog/blog234" */))
const _2b9dd77b = () => interopDefault(import('../pages/blog/quruli.vue' /* webpackChunkName: "pages/blog/quruli" */))
const _00c90939 = () => interopDefault(import('../pages/models/bottle-1.vue' /* webpackChunkName: "pages/models/bottle-1" */))
const _fdb652ba = () => interopDefault(import('../pages/models/orange-3.vue' /* webpackChunkName: "pages/models/orange-3" */))
const _fd61c5b4 = () => interopDefault(import('../pages/models/orange-6.vue' /* webpackChunkName: "pages/models/orange-6" */))
const _fc2bc09e = () => interopDefault(import('../pages/models/orange-A.vue' /* webpackChunkName: "pages/models/orange-A" */))
const _ab642ed4 = () => interopDefault(import('../pages/models/orange-A-2.vue' /* webpackChunkName: "pages/models/orange-A-2" */))
const _fc0f919c = () => interopDefault(import('../pages/models/orange-B.vue' /* webpackChunkName: "pages/models/orange-B" */))
const _09348908 = () => interopDefault(import('../pages/sound/album/index.vue' /* webpackChunkName: "pages/sound/album/index" */))
const _34180f65 = () => interopDefault(import('../pages/sound/sound-design/index.vue' /* webpackChunkName: "pages/sound/sound-design/index" */))
const _54dc6c68 = () => interopDefault(import('../pages/work/automatic-editing-20180910.vue' /* webpackChunkName: "pages/work/automatic-editing-20180910" */))
const _72fb8c16 = () => interopDefault(import('../pages/work/Dream-Machine-L306D-Dream-team.vue' /* webpackChunkName: "pages/work/Dream-Machine-L306D-Dream-team" */))
const _edcf7ac2 = () => interopDefault(import('../pages/work/extremely-useful-system-0-hanger.vue' /* webpackChunkName: "pages/work/extremely-useful-system-0-hanger" */))
const _39822cfc = () => interopDefault(import('../pages/work/extremely-useful-system-1-firewood.vue' /* webpackChunkName: "pages/work/extremely-useful-system-1-firewood" */))
const _5469451e = () => interopDefault(import('../pages/work/hardworking-circuit-1-0.vue' /* webpackChunkName: "pages/work/hardworking-circuit-1-0" */))
const _544d161c = () => interopDefault(import('../pages/work/hardworking-circuit-1-1.vue' /* webpackChunkName: "pages/work/hardworking-circuit-1-1" */))
const _5430e71a = () => interopDefault(import('../pages/work/hardworking-circuit-1-2.vue' /* webpackChunkName: "pages/work/hardworking-circuit-1-2" */))
const _5414b818 = () => interopDefault(import('../pages/work/hardworking-circuit-1-3.vue' /* webpackChunkName: "pages/work/hardworking-circuit-1-3" */))
const _53f88916 = () => interopDefault(import('../pages/work/hardworking-circuit-1-4.vue' /* webpackChunkName: "pages/work/hardworking-circuit-1-4" */))
const _76111638 = () => interopDefault(import('../pages/work/hardworking-circuit-1-4/index.vue' /* webpackChunkName: "pages/work/hardworking-circuit-1-4/index" */))
const _2769f7a0 = () => interopDefault(import('../pages/work/hardworking-circuit-1-4/components.vue' /* webpackChunkName: "pages/work/hardworking-circuit-1-4/components" */))
const _67211cae = () => interopDefault(import('../pages/work/hardworking-circuit-1-4/installationSet.vue' /* webpackChunkName: "pages/work/hardworking-circuit-1-4/installationSet" */))
const _dcb46528 = () => interopDefault(import('../pages/work/hardworking-circuit-1-4/makingOf.vue' /* webpackChunkName: "pages/work/hardworking-circuit-1-4/makingOf" */))
const _23cb0d03 = () => interopDefault(import('../pages/work/hardworking-circuit-1-4/overview.vue' /* webpackChunkName: "pages/work/hardworking-circuit-1-4/overview" */))
const _1a71e464 = () => interopDefault(import('../pages/work/hardworking-circuit-1-4/sketches.vue' /* webpackChunkName: "pages/work/hardworking-circuit-1-4/sketches" */))
const _c5194a7c = () => interopDefault(import('../pages/work/hardworking-circuit-1-4/walkthrough.vue' /* webpackChunkName: "pages/work/hardworking-circuit-1-4/walkthrough" */))
const _a25d9d2a = () => interopDefault(import('../pages/work/hardworking-circuit-1-surplus.vue' /* webpackChunkName: "pages/work/hardworking-circuit-1-surplus" */))
const _551b6568 = () => interopDefault(import('../pages/work/individualworkTemplate.vue' /* webpackChunkName: "pages/work/individualworkTemplate" */))
const _4696d011 = () => interopDefault(import('../pages/work/let-hard-plastic-get-electrocuted.vue' /* webpackChunkName: "pages/work/let-hard-plastic-get-electrocuted" */))
const _049124a1 = () => interopDefault(import('../pages/work/Temporary-non-locatable-public-space-1-nullahRoad.vue' /* webpackChunkName: "pages/work/Temporary-non-locatable-public-space-1-nullahRoad" */))
const _ccb2dac6 = () => interopDefault(import('../pages/work/Temporary-non-locatable-public-space-2-MumbaiCST.vue' /* webpackChunkName: "pages/work/Temporary-non-locatable-public-space-2-MumbaiCST" */))
const _0f747bff = () => interopDefault(import('../pages/work/those-oranges-you-cannot-eat-3Dscan.vue' /* webpackChunkName: "pages/work/those-oranges-you-cannot-eat-3Dscan" */))
const _2762490b = () => interopDefault(import('../pages/work/those-oranges-you-cannot-eat-installation.vue' /* webpackChunkName: "pages/work/those-oranges-you-cannot-eat-installation" */))
const _377286b0 = () => interopDefault(import('../pages/work/WIP-level-three-sound.vue' /* webpackChunkName: "pages/work/WIP-level-three-sound" */))
const _cb6e4bf8 = () => interopDefault(import('../pages/work/WIP-random-seeding-generator.vue' /* webpackChunkName: "pages/work/WIP-random-seeding-generator" */))
const _7c653e0a = () => interopDefault(import('../pages/sound/album/about-a-stalker.vue' /* webpackChunkName: "pages/sound/album/about-a-stalker" */))
const _a05e84d6 = () => interopDefault(import('../pages/sound/album/day-after.vue' /* webpackChunkName: "pages/sound/album/day-after" */))
const _7c037131 = () => interopDefault(import('../pages/sound/album/half-hour-exercise-1.vue' /* webpackChunkName: "pages/sound/album/half-hour-exercise-1" */))
const _4141679a = () => interopDefault(import('../pages/sound/album/soundsheepsheep-ep-1.vue' /* webpackChunkName: "pages/sound/album/soundsheepsheep-ep-1" */))
const _08b4b10c = () => interopDefault(import('../pages/sound/sound-design/1st-february.vue' /* webpackChunkName: "pages/sound/sound-design/1st-february" */))
const _361f136d = () => interopDefault(import('../pages/sound/sound-design/balanceBreaker.vue' /* webpackChunkName: "pages/sound/sound-design/balanceBreaker" */))
const _011d427e = () => interopDefault(import('../pages/sound/sound-design/dancingeye.vue' /* webpackChunkName: "pages/sound/sound-design/dancingeye" */))
const _0c4faabc = () => interopDefault(import('../pages/sound/sound-design/ghost.vue' /* webpackChunkName: "pages/sound/sound-design/ghost" */))
const _69161e98 = () => interopDefault(import('../pages/sound/sound-design/inbertywetrust.vue' /* webpackChunkName: "pages/sound/sound-design/inbertywetrust" */))
const _378edf81 = () => interopDefault(import('../pages/sound/sound-design/individualSoundDesignTemplate.vue' /* webpackChunkName: "pages/sound/sound-design/individualSoundDesignTemplate" */))
const _3b3240ba = () => interopDefault(import('../pages/sound/sound-design/lunapark.vue' /* webpackChunkName: "pages/sound/sound-design/lunapark" */))
const _9a07dd0e = () => interopDefault(import('../pages/sound/sound-design/myhiddenwatcher.vue' /* webpackChunkName: "pages/sound/sound-design/myhiddenwatcher" */))
const _a2ebc784 = () => interopDefault(import('../pages/sound/sound-design/yeti.vue' /* webpackChunkName: "pages/sound/sound-design/yeti" */))
const _820929c8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _c178df52,
    name: "about"
  }, {
    path: "/blog",
    component: _67becacb,
    name: "blog"
  }, {
    path: "/contact",
    component: _41c4aa2c,
    name: "contact"
  }, {
    path: "/models",
    component: _1e687fda,
    name: "models"
  }, {
    path: "/sound",
    component: _4cfe649c,
    name: "sound"
  }, {
    path: "/work",
    component: _2521237a,
    name: "work"
  }, {
    path: "/blog/article",
    component: _da45aea2,
    name: "blog-article"
  }, {
    path: "/blog/blog234",
    component: _34e89d6a,
    name: "blog-blog234"
  }, {
    path: "/blog/quruli",
    component: _2b9dd77b,
    name: "blog-quruli"
  }, {
    path: "/models/bottle-1",
    component: _00c90939,
    name: "models-bottle-1"
  }, {
    path: "/models/orange-3",
    component: _fdb652ba,
    name: "models-orange-3"
  }, {
    path: "/models/orange-6",
    component: _fd61c5b4,
    name: "models-orange-6"
  }, {
    path: "/models/orange-A",
    component: _fc2bc09e,
    name: "models-orange-A"
  }, {
    path: "/models/orange-A-2",
    component: _ab642ed4,
    name: "models-orange-A-2"
  }, {
    path: "/models/orange-B",
    component: _fc0f919c,
    name: "models-orange-B"
  }, {
    path: "/sound/album",
    component: _09348908,
    name: "sound-album"
  }, {
    path: "/sound/sound-design",
    component: _34180f65,
    name: "sound-sound-design"
  }, {
    path: "/work/automatic-editing-20180910",
    component: _54dc6c68,
    name: "work-automatic-editing-20180910"
  }, {
    path: "/work/Dream-Machine-L306D-Dream-team",
    component: _72fb8c16,
    name: "work-Dream-Machine-L306D-Dream-team"
  }, {
    path: "/work/extremely-useful-system-0-hanger",
    component: _edcf7ac2,
    name: "work-extremely-useful-system-0-hanger"
  }, {
    path: "/work/extremely-useful-system-1-firewood",
    component: _39822cfc,
    name: "work-extremely-useful-system-1-firewood"
  }, {
    path: "/work/hardworking-circuit-1-0",
    component: _5469451e,
    name: "work-hardworking-circuit-1-0"
  }, {
    path: "/work/hardworking-circuit-1-1",
    component: _544d161c,
    name: "work-hardworking-circuit-1-1"
  }, {
    path: "/work/hardworking-circuit-1-2",
    component: _5430e71a,
    name: "work-hardworking-circuit-1-2"
  }, {
    path: "/work/hardworking-circuit-1-3",
    component: _5414b818,
    name: "work-hardworking-circuit-1-3"
  }, {
    path: "/work/hardworking-circuit-1-4",
    component: _53f88916,
    children: [{
      path: "",
      component: _76111638,
      name: "work-hardworking-circuit-1-4"
    }, {
      path: "components",
      component: _2769f7a0,
      name: "work-hardworking-circuit-1-4-components"
    }, {
      path: "installationSet",
      component: _67211cae,
      name: "work-hardworking-circuit-1-4-installationSet"
    }, {
      path: "makingOf",
      component: _dcb46528,
      name: "work-hardworking-circuit-1-4-makingOf"
    }, {
      path: "overview",
      component: _23cb0d03,
      name: "work-hardworking-circuit-1-4-overview"
    }, {
      path: "sketches",
      component: _1a71e464,
      name: "work-hardworking-circuit-1-4-sketches"
    }, {
      path: "walkthrough",
      component: _c5194a7c,
      name: "work-hardworking-circuit-1-4-walkthrough"
    }]
  }, {
    path: "/work/hardworking-circuit-1-surplus",
    component: _a25d9d2a,
    name: "work-hardworking-circuit-1-surplus"
  }, {
    path: "/work/individualworkTemplate",
    component: _551b6568,
    name: "work-individualworkTemplate"
  }, {
    path: "/work/let-hard-plastic-get-electrocuted",
    component: _4696d011,
    name: "work-let-hard-plastic-get-electrocuted"
  }, {
    path: "/work/Temporary-non-locatable-public-space-1-nullahRoad",
    component: _049124a1,
    name: "work-Temporary-non-locatable-public-space-1-nullahRoad"
  }, {
    path: "/work/Temporary-non-locatable-public-space-2-MumbaiCST",
    component: _ccb2dac6,
    name: "work-Temporary-non-locatable-public-space-2-MumbaiCST"
  }, {
    path: "/work/those-oranges-you-cannot-eat-3Dscan",
    component: _0f747bff,
    name: "work-those-oranges-you-cannot-eat-3Dscan"
  }, {
    path: "/work/those-oranges-you-cannot-eat-installation",
    component: _2762490b,
    name: "work-those-oranges-you-cannot-eat-installation"
  }, {
    path: "/work/WIP-level-three-sound",
    component: _377286b0,
    name: "work-WIP-level-three-sound"
  }, {
    path: "/work/WIP-random-seeding-generator",
    component: _cb6e4bf8,
    name: "work-WIP-random-seeding-generator"
  }, {
    path: "/sound/album/about-a-stalker",
    component: _7c653e0a,
    name: "sound-album-about-a-stalker"
  }, {
    path: "/sound/album/day-after",
    component: _a05e84d6,
    name: "sound-album-day-after"
  }, {
    path: "/sound/album/half-hour-exercise-1",
    component: _7c037131,
    name: "sound-album-half-hour-exercise-1"
  }, {
    path: "/sound/album/soundsheepsheep-ep-1",
    component: _4141679a,
    name: "sound-album-soundsheepsheep-ep-1"
  }, {
    path: "/sound/sound-design/1st-february",
    component: _08b4b10c,
    name: "sound-sound-design-1st-february"
  }, {
    path: "/sound/sound-design/balanceBreaker",
    component: _361f136d,
    name: "sound-sound-design-balanceBreaker"
  }, {
    path: "/sound/sound-design/dancingeye",
    component: _011d427e,
    name: "sound-sound-design-dancingeye"
  }, {
    path: "/sound/sound-design/ghost",
    component: _0c4faabc,
    name: "sound-sound-design-ghost"
  }, {
    path: "/sound/sound-design/inbertywetrust",
    component: _69161e98,
    name: "sound-sound-design-inbertywetrust"
  }, {
    path: "/sound/sound-design/individualSoundDesignTemplate",
    component: _378edf81,
    name: "sound-sound-design-individualSoundDesignTemplate"
  }, {
    path: "/sound/sound-design/lunapark",
    component: _3b3240ba,
    name: "sound-sound-design-lunapark"
  }, {
    path: "/sound/sound-design/myhiddenwatcher",
    component: _9a07dd0e,
    name: "sound-sound-design-myhiddenwatcher"
  }, {
    path: "/sound/sound-design/yeti",
    component: _a2ebc784,
    name: "sound-sound-design-yeti"
  }, {
    path: "/",
    component: _820929c8,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
