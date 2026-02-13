<script lang="ts">
import FilterCmp from '@/components/FilterCmp.vue'
import MoviesList from '@/components/MoviesList.vue'
import { movieService } from '@/services/movie.service.js'
import type { Movie } from '@/services/movie.service.js'
export type FilterBy = {
  txt?: string
  maxRunTime?: number
}
type MovieIndexData = {
  movies: Movie[]
  isLoading: boolean
  filterBy: FilterBy
}

export default {
  data(): MovieIndexData {
    return {
      movies: [],
      isLoading: false,
      filterBy: { txt: '', maxRunTime: undefined },
    }
  },

  computed: {},

  methods: {
    async onDelete(movieId: string) {
      try {
        await movieService.remove(movieId)
        this.movies = this.movies.filter((m) => m._id !== movieId)
      } catch (error) {
        console.log('Couldnt delete movie', error)
      }
    },
    onFilterChange(newFilter: FilterBy) {
      console.log('newFilter', newFilter)
      this.loadMovies(newFilter)
    },
    async loadMovies(filterBy:FilterBy = {}) {
      this.isLoading = true
      try {
        this.movies = await movieService.query(filterBy)
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
  },

  created() {
    this.loadMovies()
  },
  unmounted() {},
  components: {
    MoviesList,
    FilterCmp,
  },
}
</script>

<template>
  <FilterCmp :filterByProp="filterBy" @filterChange="onFilterChange" />
  <MoviesList v-if="!isLoading" :movies="movies" @delete="onDelete" />
</template>

<style scoped></style>
