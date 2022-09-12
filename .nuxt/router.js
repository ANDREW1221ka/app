import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _75dbe931 = () => interopDefault(import('..\\pages\\alarms.vue' /* webpackChunkName: "pages/alarms" */))
const _49f10875 = () => interopDefault(import('..\\pages\\dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _986d8704 = () => interopDefault(import('..\\pages\\devices.vue' /* webpackChunkName: "pages/devices" */))
const _0a6ba74a = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _6411b552 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _69ee069a = () => interopDefault(import('..\\pages\\templates.vue' /* webpackChunkName: "pages/templates" */))
const _1e74c17e = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))
const _599c89b3 = () => interopDefault(import('..\\pages\\GeneralViews\\NotFoundPage.vue' /* webpackChunkName: "pages/GeneralViews/NotFoundPage" */))
const _40c40433 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/alarms",
    component: _75dbe931,
    name: "alarms"
  }, {
    path: "/dashboard",
    component: _49f10875,
    name: "dashboard"
  }, {
    path: "/devices",
    component: _986d8704,
    name: "devices"
  }, {
    path: "/login",
    component: _0a6ba74a,
    name: "login"
  }, {
    path: "/register",
    component: _6411b552,
    name: "register"
  }, {
    path: "/templates",
    component: _69ee069a,
    name: "templates"
  }, {
    path: "/test",
    component: _1e74c17e,
    name: "test"
  }, {
    path: "/GeneralViews/NotFoundPage",
    component: _599c89b3,
    name: "GeneralViews-NotFoundPage"
  }, {
    path: "/",
    component: _40c40433,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
