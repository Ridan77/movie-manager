import Homepage from '@/pages/Homepage.vue'
import MovieDetails from '@/pages/MovieDetails.vue'
import MovieEdit from '@/pages/MovieEdit.vue'
import MovieIndex from '@/pages/MovieIndex.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'homepage',
      component: Homepage,
    },
    {
      path: '/movie',
      name: 'MovieIndex',
      component: MovieIndex,
    },
       {
      path: '/movie/:id',
      name: 'MovieDetails',
      component: MovieDetails,
    },   {
      path: '/movie/edit/:id',
      name: 'MovieEdit',
      component: MovieEdit,
    },
  ],
})

export default router
