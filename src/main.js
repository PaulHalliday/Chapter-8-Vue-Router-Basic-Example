import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

Vue.use(VueRouter)

const Hello = { template: `<h1>Hello</h1>` };
const World = { template: `<h1>World</h1>` }

const routes = [
  { path: '/hello', component: Hello },
  { path: '/world', component: World }
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
