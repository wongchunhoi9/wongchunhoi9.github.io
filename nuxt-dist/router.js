import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c178df52 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _67becacb = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _4cfe649c = () => interopDefault(import('../pages/sound/index.vue' /* webpackChunkName: "pages/sound/index" */))
const _2521237a = () => interopDefault(import('../pages/work/index.vue' /* webpackChunkName: "pages/work/index" */))
const _da45aea2 = () => interopDefault(import('../pages/blog/article.vue' /* webpackChunkName: "pages/blog/article" */))
const _34e89d6a = () => interopDefault(import('../pages/blog/blog234.vue' /* webpackChunkName: "pages/blog/blog234" */))
const _2b9dd77b = () => interopDefault(import('../pages/blog/quruli.vue' /* webpackChunkName: "pages/blog/quruli" */))
const _5414b818 = () => interopDefault(import('../pages/work/hardworking-circuit-1-3.vue' /* webpackChunkName: "pages/work/hardworking-circuit-1-3" */))
const _551b6568 = () => interopDefault(import('../pages/work/individualworkTemplate.vue' /* webpackChunkName: "pages/work/individualworkTemplate" */))
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
    path: "/work/hardworking-circuit-1-3",
    component: _5414b818,
    name: "work-hardworking-circuit-1-3"
  }, {
    path: "/work/individualworkTemplate",
    component: _551b6568,
    name: "work-individualworkTemplate"
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
