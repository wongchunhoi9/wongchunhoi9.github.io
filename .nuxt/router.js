import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _00376dba = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _7a249d02 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _cb193e94 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _3bdbc9c7 = () => interopDefault(import('../pages/models/index.vue' /* webpackChunkName: "pages/models/index" */))
const _57ac5468 = () => interopDefault(import('../pages/sound/index.vue' /* webpackChunkName: "pages/sound/index" */))
const _ff5feba4 = () => interopDefault(import('../pages/work/index.vue' /* webpackChunkName: "pages/work/index" */))
const _44259b3a = () => interopDefault(import('../pages/blog/article.vue' /* webpackChunkName: "pages/blog/article" */))
const _7ff8a71e = () => interopDefault(import('../pages/blog/blog234.vue' /* webpackChunkName: "pages/blog/blog234" */))
const _364bc747 = () => interopDefault(import('../pages/blog/quruli.vue' /* webpackChunkName: "pages/blog/quruli" */))
const _20223305 = () => interopDefault(import('../pages/models/bottle-1.vue' /* webpackChunkName: "pages/models/bottle-1" */))
const _bf03ff22 = () => interopDefault(import('../pages/models/orange-3.vue' /* webpackChunkName: "pages/models/orange-3" */))
const _beaf721c = () => interopDefault(import('../pages/models/orange-6.vue' /* webpackChunkName: "pages/models/orange-6" */))
const _bd796d06 = () => interopDefault(import('../pages/models/orange-A.vue' /* webpackChunkName: "pages/models/orange-A" */))
const _5803cf62 = () => interopDefault(import('../pages/models/orange-A-2.vue' /* webpackChunkName: "pages/models/orange-A-2" */))
const _bd5d3e04 = () => interopDefault(import('../pages/models/orange-B.vue' /* webpackChunkName: "pages/models/orange-B" */))
const _adc8bb70 = () => interopDefault(import('../pages/sound/album/index.vue' /* webpackChunkName: "pages/sound/album/index" */))
const _92f9a9ce = () => interopDefault(import('../pages/sound/sound-design/index.vue' /* webpackChunkName: "pages/sound/sound-design/index" */))
const _c25448d0 = () => interopDefault(import('../pages/work/automatic-editing-20180910.vue' /* webpackChunkName: "pages/work/automatic-editing-20180910" */))
const _489085c1 = () => interopDefault(import('../pages/work/Dream-Machine-L306D-Dream-team.vue' /* webpackChunkName: "pages/work/Dream-Machine-L306D-Dream-team" */))
const _7e7a692a = () => interopDefault(import('../pages/work/extremely-useful-system-0-hanger.vue' /* webpackChunkName: "pages/work/extremely-useful-system-0-hanger" */))
const _4b2b2164 = () => interopDefault(import('../pages/work/extremely-useful-system-1-firewood.vue' /* webpackChunkName: "pages/work/extremely-useful-system-1-firewood" */))
const _9dcd01b6 = () => interopDefault(import('../pages/work/hardworking-circuit-1-0.vue' /* webpackChunkName: "pages/work/hardworking-circuit-1-0" */))
const _9db0d2b4 = () => interopDefault(import('../pages/work/hardworking-circuit-1-1.vue' /* webpackChunkName: "pages/work/hardworking-circuit-1-1" */))
const _9d94a3b2 = () => interopDefault(import('../pages/work/hardworking-circuit-1-2.vue' /* webpackChunkName: "pages/work/hardworking-circuit-1-2" */))
const _9d7874b0 = () => interopDefault(import('../pages/work/hardworking-circuit-1-3.vue' /* webpackChunkName: "pages/work/hardworking-circuit-1-3" */))
const _9d5c45ae = () => interopDefault(import('../pages/work/hardworking-circuit-1-4.vue' /* webpackChunkName: "pages/work/hardworking-circuit-1-4" */))
const _0337be28 = () => interopDefault(import('../pages/work/hardworking-circuit-1-4/index.vue' /* webpackChunkName: "pages/work/hardworking-circuit-1-4/index" */))
const _1e957d6c = () => interopDefault(import('../pages/work/hardworking-circuit-1-4/components.vue' /* webpackChunkName: "pages/work/hardworking-circuit-1-4/components" */))
const _f905533c = () => interopDefault(import('../pages/work/hardworking-circuit-1-4/installationSet.vue' /* webpackChunkName: "pages/work/hardworking-circuit-1-4/installationSet" */))
const _6d5f5390 = () => interopDefault(import('../pages/work/hardworking-circuit-1-4/makingOf.vue' /* webpackChunkName: "pages/work/hardworking-circuit-1-4/makingOf" */))
const _5b7595cf = () => interopDefault(import('../pages/work/hardworking-circuit-1-4/overview.vue' /* webpackChunkName: "pages/work/hardworking-circuit-1-4/overview" */))
const _521c6d30 = () => interopDefault(import('../pages/work/hardworking-circuit-1-4/sketches.vue' /* webpackChunkName: "pages/work/hardworking-circuit-1-4/sketches" */))
const _e88ee314 = () => interopDefault(import('../pages/work/hardworking-circuit-1-4/walkthrough.vue' /* webpackChunkName: "pages/work/hardworking-circuit-1-4/walkthrough" */))
const _37243c1f = () => interopDefault(import('../pages/work/hardworking-circuit-1-surplus.vue' /* webpackChunkName: "pages/work/hardworking-circuit-1-surplus" */))
const _7881b5d0 = () => interopDefault(import('../pages/work/individualworkTemplate.vue' /* webpackChunkName: "pages/work/individualworkTemplate" */))
const _043d60c5 = () => interopDefault(import('../pages/work/let-hard-plastic-get-electrocuted.vue' /* webpackChunkName: "pages/work/let-hard-plastic-get-electrocuted" */))
const _0af06556 = () => interopDefault(import('../pages/work/Temporary-non-locatable-public-space-1-nullahRoad.vue' /* webpackChunkName: "pages/work/Temporary-non-locatable-public-space-1-nullahRoad" */))
const _7ac3f92e = () => interopDefault(import('../pages/work/Temporary-non-locatable-public-space-2-MumbaiCST.vue' /* webpackChunkName: "pages/work/Temporary-non-locatable-public-space-2-MumbaiCST" */))
const _048ca09a = () => interopDefault(import('../pages/work/those-oranges-you-cannot-eat-3Dscan.vue' /* webpackChunkName: "pages/work/those-oranges-you-cannot-eat-3Dscan" */))
const _c4d23482 = () => interopDefault(import('../pages/work/those-oranges-you-cannot-eat-installation.vue' /* webpackChunkName: "pages/work/those-oranges-you-cannot-eat-installation" */))
const _68f4f538 = () => interopDefault(import('../pages/work/WIP-level-three-sound.vue' /* webpackChunkName: "pages/work/WIP-level-three-sound" */))
const _22cfa8d0 = () => interopDefault(import('../pages/work/WIP-random-seeding-generator.vue' /* webpackChunkName: "pages/work/WIP-random-seeding-generator" */))
const _6ab215d6 = () => interopDefault(import('../pages/sound/album/about-a-stalker.vue' /* webpackChunkName: "pages/sound/album/about-a-stalker" */))
const _2f5e5e61 = () => interopDefault(import('../pages/sound/album/day-after.vue' /* webpackChunkName: "pages/sound/album/day-after" */))
const _497cce36 = () => interopDefault(import('../pages/sound/album/half-hour-exercise-1.vue' /* webpackChunkName: "pages/sound/album/half-hour-exercise-1" */))
const _3e9d73e7 = () => interopDefault(import('../pages/sound/album/soundsheepsheep-ep-1.vue' /* webpackChunkName: "pages/sound/album/soundsheepsheep-ep-1" */))
const _762c8d74 = () => interopDefault(import('../pages/sound/sound-design/1st-february.vue' /* webpackChunkName: "pages/sound/sound-design/1st-february" */))
const _82b43b8e = () => interopDefault(import('../pages/sound/sound-design/balanceBreaker.vue' /* webpackChunkName: "pages/sound/sound-design/balanceBreaker" */))
const _e0d9516c = () => interopDefault(import('../pages/sound/sound-design/dancingeye.vue' /* webpackChunkName: "pages/sound/sound-design/dancingeye" */))
const _7c434656 = () => interopDefault(import('../pages/sound/sound-design/ghost.vue' /* webpackChunkName: "pages/sound/sound-design/ghost" */))
const _1cc62538 = () => interopDefault(import('../pages/sound/sound-design/inbertywetrust.vue' /* webpackChunkName: "pages/sound/sound-design/inbertywetrust" */))
const _19e1c196 = () => interopDefault(import('../pages/sound/sound-design/individualSoundDesignTemplate.vue' /* webpackChunkName: "pages/sound/sound-design/individualSoundDesignTemplate" */))
const _5e989122 = () => interopDefault(import('../pages/sound/sound-design/lunapark.vue' /* webpackChunkName: "pages/sound/sound-design/lunapark" */))
const _3b4f1c2d = () => interopDefault(import('../pages/sound/sound-design/myhiddenwatcher.vue' /* webpackChunkName: "pages/sound/sound-design/myhiddenwatcher" */))
const _fd9a8bec = () => interopDefault(import('../pages/sound/sound-design/yeti.vue' /* webpackChunkName: "pages/sound/sound-design/yeti" */))
const _1f9c23e8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _00376dba,
    name: "about"
  }, {
    path: "/blog",
    component: _7a249d02,
    name: "blog"
  }, {
    path: "/contact",
    component: _cb193e94,
    name: "contact"
  }, {
    path: "/models",
    component: _3bdbc9c7,
    name: "models"
  }, {
    path: "/sound",
    component: _57ac5468,
    name: "sound"
  }, {
    path: "/work",
    component: _ff5feba4,
    name: "work"
  }, {
    path: "/blog/article",
    component: _44259b3a,
    name: "blog-article"
  }, {
    path: "/blog/blog234",
    component: _7ff8a71e,
    name: "blog-blog234"
  }, {
    path: "/blog/quruli",
    component: _364bc747,
    name: "blog-quruli"
  }, {
    path: "/models/bottle-1",
    component: _20223305,
    name: "models-bottle-1"
  }, {
    path: "/models/orange-3",
    component: _bf03ff22,
    name: "models-orange-3"
  }, {
    path: "/models/orange-6",
    component: _beaf721c,
    name: "models-orange-6"
  }, {
    path: "/models/orange-A",
    component: _bd796d06,
    name: "models-orange-A"
  }, {
    path: "/models/orange-A-2",
    component: _5803cf62,
    name: "models-orange-A-2"
  }, {
    path: "/models/orange-B",
    component: _bd5d3e04,
    name: "models-orange-B"
  }, {
    path: "/sound/album",
    component: _adc8bb70,
    name: "sound-album"
  }, {
    path: "/sound/sound-design",
    component: _92f9a9ce,
    name: "sound-sound-design"
  }, {
    path: "/work/automatic-editing-20180910",
    component: _c25448d0,
    name: "work-automatic-editing-20180910"
  }, {
    path: "/work/Dream-Machine-L306D-Dream-team",
    component: _489085c1,
    name: "work-Dream-Machine-L306D-Dream-team"
  }, {
    path: "/work/extremely-useful-system-0-hanger",
    component: _7e7a692a,
    name: "work-extremely-useful-system-0-hanger"
  }, {
    path: "/work/extremely-useful-system-1-firewood",
    component: _4b2b2164,
    name: "work-extremely-useful-system-1-firewood"
  }, {
    path: "/work/hardworking-circuit-1-0",
    component: _9dcd01b6,
    name: "work-hardworking-circuit-1-0"
  }, {
    path: "/work/hardworking-circuit-1-1",
    component: _9db0d2b4,
    name: "work-hardworking-circuit-1-1"
  }, {
    path: "/work/hardworking-circuit-1-2",
    component: _9d94a3b2,
    name: "work-hardworking-circuit-1-2"
  }, {
    path: "/work/hardworking-circuit-1-3",
    component: _9d7874b0,
    name: "work-hardworking-circuit-1-3"
  }, {
    path: "/work/hardworking-circuit-1-4",
    component: _9d5c45ae,
    children: [{
      path: "",
      component: _0337be28,
      name: "work-hardworking-circuit-1-4"
    }, {
      path: "components",
      component: _1e957d6c,
      name: "work-hardworking-circuit-1-4-components"
    }, {
      path: "installationSet",
      component: _f905533c,
      name: "work-hardworking-circuit-1-4-installationSet"
    }, {
      path: "makingOf",
      component: _6d5f5390,
      name: "work-hardworking-circuit-1-4-makingOf"
    }, {
      path: "overview",
      component: _5b7595cf,
      name: "work-hardworking-circuit-1-4-overview"
    }, {
      path: "sketches",
      component: _521c6d30,
      name: "work-hardworking-circuit-1-4-sketches"
    }, {
      path: "walkthrough",
      component: _e88ee314,
      name: "work-hardworking-circuit-1-4-walkthrough"
    }]
  }, {
    path: "/work/hardworking-circuit-1-surplus",
    component: _37243c1f,
    name: "work-hardworking-circuit-1-surplus"
  }, {
    path: "/work/individualworkTemplate",
    component: _7881b5d0,
    name: "work-individualworkTemplate"
  }, {
    path: "/work/let-hard-plastic-get-electrocuted",
    component: _043d60c5,
    name: "work-let-hard-plastic-get-electrocuted"
  }, {
    path: "/work/Temporary-non-locatable-public-space-1-nullahRoad",
    component: _0af06556,
    name: "work-Temporary-non-locatable-public-space-1-nullahRoad"
  }, {
    path: "/work/Temporary-non-locatable-public-space-2-MumbaiCST",
    component: _7ac3f92e,
    name: "work-Temporary-non-locatable-public-space-2-MumbaiCST"
  }, {
    path: "/work/those-oranges-you-cannot-eat-3Dscan",
    component: _048ca09a,
    name: "work-those-oranges-you-cannot-eat-3Dscan"
  }, {
    path: "/work/those-oranges-you-cannot-eat-installation",
    component: _c4d23482,
    name: "work-those-oranges-you-cannot-eat-installation"
  }, {
    path: "/work/WIP-level-three-sound",
    component: _68f4f538,
    name: "work-WIP-level-three-sound"
  }, {
    path: "/work/WIP-random-seeding-generator",
    component: _22cfa8d0,
    name: "work-WIP-random-seeding-generator"
  }, {
    path: "/sound/album/about-a-stalker",
    component: _6ab215d6,
    name: "sound-album-about-a-stalker"
  }, {
    path: "/sound/album/day-after",
    component: _2f5e5e61,
    name: "sound-album-day-after"
  }, {
    path: "/sound/album/half-hour-exercise-1",
    component: _497cce36,
    name: "sound-album-half-hour-exercise-1"
  }, {
    path: "/sound/album/soundsheepsheep-ep-1",
    component: _3e9d73e7,
    name: "sound-album-soundsheepsheep-ep-1"
  }, {
    path: "/sound/sound-design/1st-february",
    component: _762c8d74,
    name: "sound-sound-design-1st-february"
  }, {
    path: "/sound/sound-design/balanceBreaker",
    component: _82b43b8e,
    name: "sound-sound-design-balanceBreaker"
  }, {
    path: "/sound/sound-design/dancingeye",
    component: _e0d9516c,
    name: "sound-sound-design-dancingeye"
  }, {
    path: "/sound/sound-design/ghost",
    component: _7c434656,
    name: "sound-sound-design-ghost"
  }, {
    path: "/sound/sound-design/inbertywetrust",
    component: _1cc62538,
    name: "sound-sound-design-inbertywetrust"
  }, {
    path: "/sound/sound-design/individualSoundDesignTemplate",
    component: _19e1c196,
    name: "sound-sound-design-individualSoundDesignTemplate"
  }, {
    path: "/sound/sound-design/lunapark",
    component: _5e989122,
    name: "sound-sound-design-lunapark"
  }, {
    path: "/sound/sound-design/myhiddenwatcher",
    component: _3b4f1c2d,
    name: "sound-sound-design-myhiddenwatcher"
  }, {
    path: "/sound/sound-design/yeti",
    component: _fd9a8bec,
    name: "sound-sound-design-yeti"
  }, {
    path: "/",
    component: _1f9c23e8,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
