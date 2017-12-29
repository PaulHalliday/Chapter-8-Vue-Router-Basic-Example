import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

Vue.use(VueRouter)

const Hello = { template: `<h1>Hello</h1>` };
const HelloName = {
  props: ['name'],
  template: `<h1>Hello {{ name }}</h1>`,
  created() {
    console.log(`Hello ${this.name}`)
  }
}

const routes = [
  { path: '/hello', component: Hello },
  { path: '/hello/:name', component: HelloName, props: true},
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
