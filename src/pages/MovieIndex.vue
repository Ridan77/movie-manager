<script lang="ts">
import MoviesList from '@/components/MoviesList.vue'
import { movieService } from '@/services/movie.service.js'
import type { Movie } from '@/services/movie.service.js'
type MovieIndexData = {
  movies: Movie[]
  isLoading: boolean
}
export default {
  data(): MovieIndexData {
    return {
      movies: [],
      isLoading: false,
    }
  },

  computed: {},

  methods: {},

  async created() {
    this.isLoading = true
    try {
      this.movies = await movieService.query()
    } catch (error) {
      console.log(error)
    } finally {
      this.isLoading = false
    }
  },
  unmounted() {},
  components: {
    MoviesList
  }
}
</script>

<template>
  <MoviesList v-if="!isLoading" :movies="movies"/>
</template>

<style scoped></style>
