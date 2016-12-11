import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import ShowPlay from './components/ShowPlay'
import Mains from './components/Mains'
import Courses from './components/Courses'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {name: 'showplay', path: '/courses/:subject/showplay/:id', component: ShowPlay},
    {name: 'courses', path: '/courses/:id', component: Courses},
    {name: 'mains', path: '/mains', component: Mains}
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
