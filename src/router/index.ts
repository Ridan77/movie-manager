import Homepage from '@/pages/HomePage.vue'
import MovieDetails from '@/pages/MovieDetails.vue'
import MovieEdit from '@/pages/MovieEdit.vue'
import MovieIndex from '@/pages/MovieIndex.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
    { path: '/', name: 'MovieIndex', component: MovieIndex },
    { path: '/home', name: 'Homepage', component: Homepage },
    { path: '/movie', name: 'MovieIndexAlias', component: MovieIndex },
    { path: '/movie/:id', name: 'MovieDetails', component: MovieDetails },
    { path: '/movie/edit/:id', name: 'MovieEdit', component: MovieEdit },

    // optional but useful:
    { path: '/:pathMatch(.*)*', redirect: '/' },
  
  ],
})

export default router
