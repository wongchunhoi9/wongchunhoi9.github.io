import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _00376dba = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _7a249d02 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _cb193e94 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _57ac5468 = () => interopDefault(import('../pages/sound/index.vue' /* webpackChunkName: "pages/sound/index" */))
const _ff5feba4 = () => interopDefault(import('../pages/work/index.vue' /* webpackChunkName: "pages/work/index" */))
const _44259b3a = () => interopDefault(import('../pages/blog/article.vue' /* webpackChunkName: "pages/blog/article" */))
const _7ff8a71e = () => interopDefault(import('../pages/blog/blog234.vue' /* webpackChunkName: "pages/blog/blog234" */))
const _364bc747 = () => interopDefault(import('../pages/blog/quruli.vue' /* webpackChunkName: "pages/blog/quruli" */))
const _9d7874b0 = () => interopDefault(import('../pages/work/hardworking-circuit-1-3.vue' /* webpackChunkName: "pages/work/hardworking-circuit-1-3" */))
const _7881b5d0 = () => interopDefault(import('../pages/work/individualworkTemplate.vue' /* webpackChunkName: "pages/work/individualworkTemplate" */))
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
    path: "/work/hardworking-circuit-1-3",
    component: _9d7874b0,
    name: "work-hardworking-circuit-1-3"
  }, {
    path: "/work/individualworkTemplate",
    component: _7881b5d0,
    name: "work-individualworkTemplate"
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
