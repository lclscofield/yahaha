import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/movies/Movies.vue'),
      children: [
        {
          path: '/movies',
          name: 'Movies',
          component: () =>
            import(/* webpackChunkName: "home" */ './views/movies/Movies.vue')
        }
      ]
    }
  ]
})
