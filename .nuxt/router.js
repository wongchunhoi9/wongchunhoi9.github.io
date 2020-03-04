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
const _7906659d = () => interopDefault(import('../pages/blog/blogindex.vue' /* webpackChunkName: "pages/blog/blogindex" */))
const _364bc747 = () => interopDefault(import('../pages/blog/quruli.vue' /* webpackChunkName: "pages/blog/quruli" */))
const _adc8bb70 = () => interopDefault(import('../pages/sound/album/index.vue' /* webpackChunkName: "pages/sound/album/index" */))
const _92f9a9ce = () => interopDefault(import('../pages/sound/sound-design/index.vue' /* webpackChunkName: "pages/sound/sound-design/index" */))
const _489085c1 = () => interopDefault(import('../pages/work/Dream-Machine-L306D-Dream-team.vue' /* webpackChunkName: "pages/work/Dream-Machine-L306D-Dream-team" */))
const _7e7a692a = () => interopDefault(import('../pages/work/extremely-useful-system-0-hanger.vue' /* webpackChunkName: "pages/work/extremely-useful-system-0-hanger" */))
const _4b2b2164 = () => interopDefault(import('../pages/work/extremely-useful-system-1-firewood.vue' /* webpackChunkName: "pages/work/extremely-useful-system-1-firewood" */))
const _9d7874b0 = () => interopDefault(import('../pages/work/hardworking-circuit-1-3.vue' /* webpackChunkName: "pages/work/hardworking-circuit-1-3" */))
const _9d5c45ae = () => interopDefault(import('../pages/work/hardworking-circuit-1-4.vue' /* webpackChunkName: "pages/work/hardworking-circuit-1-4" */))
const _37243c1f = () => interopDefault(import('../pages/work/hardworking-circuit-1-surplus.vue' /* webpackChunkName: "pages/work/hardworking-circuit-1-surplus" */))
const _7881b5d0 = () => interopDefault(import('../pages/work/individualworkTemplate.vue' /* webpackChunkName: "pages/work/individualworkTemplate" */))
const _043d60c5 = () => interopDefault(import('../pages/work/let-hard-plastic-get-electrocuted.vue' /* webpackChunkName: "pages/work/let-hard-plastic-get-electrocuted" */))
const _7ac3f92e = () => interopDefault(import('../pages/work/Temporary-non-locatable-public-space-2-MumbaiCST.vue' /* webpackChunkName: "pages/work/Temporary-non-locatable-public-space-2-MumbaiCST" */))
const _048ca09a = () => interopDefault(import('../pages/work/those-oranges-you-cannot-eat-3Dscan.vue' /* webpackChunkName: "pages/work/those-oranges-you-cannot-eat-3Dscan" */))
const _c4d23482 = () => interopDefault(import('../pages/work/those-oranges-you-cannot-eat-installation.vue' /* webpackChunkName: "pages/work/those-oranges-you-cannot-eat-installation" */))
const _2f5e5e61 = () => interopDefault(import('../pages/sound/album/day-after.vue' /* webpackChunkName: "pages/sound/album/day-after" */))
const _497cce36 = () => interopDefault(import('../pages/sound/album/half-hour-exercise-1.vue' /* webpackChunkName: "pages/sound/album/half-hour-exercise-1" */))
const _3e9d73e7 = () => interopDefault(import('../pages/sound/album/soundsheepsheep-ep-1.vue' /* webpackChunkName: "pages/sound/album/soundsheepsheep-ep-1" */))
const _7d91df92 = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
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
    path: "/blog/blogindex",
    component: _7906659d,
    name: "blog-blogindex"
  }, {
    path: "/blog/quruli",
    component: _364bc747,
    name: "blog-quruli"
  }, {
    path: "/sound/album",
    component: _adc8bb70,
    name: "sound-album"
  }, {
    path: "/sound/sound-design",
    component: _92f9a9ce,
    name: "sound-sound-design"
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
    path: "/work/hardworking-circuit-1-3",
    component: _9d7874b0,
    name: "work-hardworking-circuit-1-3"
  }, {
    path: "/work/hardworking-circuit-1-4",
    component: _9d5c45ae,
    name: "work-hardworking-circuit-1-4"
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
    path: "/blog/:slug",
    component: _7d91df92,
    name: "blog-slug"
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
